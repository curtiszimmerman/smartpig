#!/bin/bash

docker run -d \
  --name="dummy" \
  --restart="always" \
  -p 4488:80 \
  dummy
