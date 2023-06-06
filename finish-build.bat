@echo off

REM to be ran after 'npm run build'
copy CNAME build
copy .htaccess build
copy build\200.html build\404.html
ren docs docs_OLD
ren build docs
echo Remove docs_OLD folder before continuing.