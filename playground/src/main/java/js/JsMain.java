/*
 *  Copyright 2025 asm.
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
package js;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.teavm.jso.JSBody;
import org.teavm.jso.JSFunctor;
import org.teavm.jso.JSObject;
import org.teavm.jso.browser.Window;

public class JsMain {
    private final Service3 service3;

    public String foo() {
        return "Main:" + service3.foo();
    }

    public JsMain(Service3 service3) {
        this.service3 = service3;
    }

    static {
        export("JsMain1", JsMain::new);
    }

    public static void main(String[] args) {
        Service1 service1 = new Service1();
        Service2 service2 = new Service2();
        Service3 service3 = new Service3(service1, service2);
        JsMain main = new JsMain(service3);
        List<String> list = new ArrayList<>();
        list.add("item1");
        list.add("item2");
        list.add("item3");
        list.forEach(System.out::println);
        System.out.println(main.foo());
        System.out.println(String.CASE_INSENSITIVE_ORDER.compare("HELLO", "hello"));

        Map<String, Integer> map = new HashMap<>();
        map.put("hello", 1);
        map.put("world", 2);
        map.forEach((k, v) -> System.out.println(k + " " + v));
        // now, test virtual methods
        Bar bar = new Bar("x");
        System.out.println(bar.foo());
        Baz baz = new Baz("y");
        System.out.println(baz.foo());
        System.out.println(make("Bar").foo());
        System.out.println(make("Baz").foo());

        System.out.println(make("Bar").getClass().getName());
        System.out.println(make("Baz").getClass().getName());

        System.out.println(make("Baz") instanceof Iface);
        System.out.println(make("Baz") instanceof Bar);
        System.out.println(make("Baz") instanceof Baz);

        System.out.println(make("Bar") instanceof Iface);
        System.out.println(make("Bar") instanceof Bar);
        System.out.println(make("Bar") instanceof Baz);

        // Window.alert("hello javascript alert");
    }

    private static Iface make(String what) {
        if (what.equals("Bar")) {
            return new Bar("x");
        } else if (what.equals("Baz")) {
            return new Baz("y");
        }
        return null;
    }

    @FunctionalInterface
    @JSFunctor
    protected interface JsMainCtor<A> extends JSObject {
        A create(Service3 service3);
    }

    @JSBody(params = {"name", "ctor"}, script = "let window={};window[name]=ctor")
    protected native static void export(String name, JsMainCtor<?> ctor);
}
