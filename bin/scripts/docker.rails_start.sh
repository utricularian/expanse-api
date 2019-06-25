#!/bin/bash

if [[ $(uname) == "Darwin" ]]; then
  echo "Don't use this script to startup rails locally; just call 'be rails s'"
  exit 1;
fi

rm -rf /expanse-api/tmp/pids/server.pid
bundle exec rails s -p 3000 -b '0.0.0.0'
