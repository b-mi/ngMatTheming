@echo off
echo BUILDING LIBRARY
call ng b --project ng-mat-theming
echo BUILDING PROD
call ng build --prod --base-href "https://b-mi.github.io/ngMatTheming/"
echo PUBLISHING
call npx angular-cli-ghpages --dir=dist/ngMatThemingLib
pause