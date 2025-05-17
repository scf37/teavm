/*
 *  Copyright 2023 Alexey Andreev.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
"use strict";

// $rt_packages and $rt_metadata are called multiple times during js module(s) parse phase
// To enforce lazyness, calls will be added to a queue and then $rt_init_metadata will be called on every static initializer

let $rt_packageData = null;
let $rt_metadataQueue = [];
let $rt_packages = data => {
    $rt_metadataQueue.push(() => $rt_packages1(data));
}
let $rt_metadata = data => {
    $rt_metadataQueue.push(() => $rt_metadata1(data));
}

let $rt_init_metadata = () => {
    if ($rt_metadataQueue.length === 0) return;

    for (let i = 0; i < $rt_metadataQueue.length; ++i) {
        $rt_metadataQueue[i]();
    }
    $rt_metadataQueue.length = 0;
}

let $rt_packages1 = data => {
    let i = 0;
    let packages = new teavm_globals.Array(data.length);
    for (let j = 0; j < data.length; ++j) {
        let prefixIndex = data[i++];
        let prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
}
let $rt_metadata1 = data => {
    let packages = $rt_packageData;
    let i = 0;
    while (i < data.length) {
        let cls = data[i++];
        cls.$meta = {};
        let m = cls.$meta;
        let className = data[i++];

        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            let packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }

        m.binaryName = "L" + m.name + ";";
        let superclass = data[i++];
        m.superclass = superclass !== 0 ? superclass : null;
        m.supertypes = data[i++];
        if (m.superclass) {
            if (m.supertypes.indexOf(m.superclass) < 0) {
                m.supertypes.push(m.superclass);
                cls.prototype = teavm_globals.Object.create(m.superclass.prototype);
            }
        } else {
            cls.prototype = {};
        }
        let flags = data[i++];
        m.enum = (flags & 8) !== 0;
        m.flags = flags;
        m.primitive = false;
        m.item = null;
        cls.prototype.constructor = cls;
        cls.classObject = null;

        m.accessLevel = data[i++];

        let innerClassInfo = data[i++];
        if (innerClassInfo === 0) {
            m.simpleName = null;
            m.declaringClass = null;
            m.enclosingClass = null;
        } else {
            let enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            let declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            let simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }

        let clinit = data[i++];
        cls.$clinit = clinit !== 0 ? clinit : function() {};

        let virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (let j = 0; j < virtualMethods.length; j += 2) {
                let name = virtualMethods[j];
                let func = virtualMethods[j + 1];
                // name changed from field name to setter function (o, r)=>o.<name>=r
                // for GCC compatibility
                if (typeof name === 'function') {
                    name = [name]
                }
                for (let k = 0; k < name.length; ++k) {
                    name[k](cls.prototype, func);
                }
            }
        }

        cls.$array = null;
    }
}
