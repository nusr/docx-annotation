#!/bin/bash

# error info

set -e

# build

npm run build

# move dist

cp ./dist/docx-annotation.js ./demo/


cd demo

# commit 

git init
git add -A
git commit -m 'deploy docx-annotation'

#  gh-pages branch
git push -f git@github.com:nusr/docx-annotation.git master:gh-pages

cd -
