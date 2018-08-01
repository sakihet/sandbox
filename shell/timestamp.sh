#!/bin/bash

for i in `seq 1 9`
do
  echo "iteration: $i"
  timestamp=`date +"%Y-%m-%d %H:%M:%S.%3N"`
  echo $timestamp
done
