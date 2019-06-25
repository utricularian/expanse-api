#!/bin/bash

if [[ $(uname) == "Darwin" ]]; then
  echo "Don't use this script to startup webpack locally; just call '/bin/webpack-dev-server'"
  exit 1;
fi

rm -rf /expanse-api/public/packs
/expanse-api/bin/webpack-dev-server
