#!/bin/bash

./gradlew publishToMavenLocal
mkdir -p ~/mywork/repo/org/teavm
cp -r ~/.m2/repository/org/teavm/* ~/mywork/repo/org/teavm/