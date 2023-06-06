#!/bin/bash

# to be ran after 'npm run build'
cp CNAME build/CNAME
cp .htaccess build/.htaccess
cp build/200.html build/404.html
mv docs docs_OLD
mv build docs
echo Remove docs_OLD folder before continuing.