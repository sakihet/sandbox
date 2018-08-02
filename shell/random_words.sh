#!/bin/bash

WORDFILE=/usr/share/dict/words
NUM=3
words=`shuf -n $NUM $WORDFILE | xargs | tr ' ' '-'`
echo $words
