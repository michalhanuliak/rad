#!/bin/bash

TYPE_NAME=$1
COMPONENT_NAME=$2

if [ -z "$COMPONENT_NAME" ]; then
    echo "Error: Component name is missing."
    exit 1
fi

if [ -z "$TYPE_NAME" ]; then
    echo "Error: Type name is missing."
    exit 1
fi

nx g @nx/next:component --dir=lib/ui/src/$TYPE_NAME/$COMPONENT_NAME --nameAndDirectoryFormat=as-provided --name=$COMPONENT_NAME --style=@emotion/styled --export
nx g @nx/next:component-story --componentPath=$TYPE_NAME/$COMPONENT_NAME/$COMPONENT_NAME.tsx --project=ui