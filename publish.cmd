@echo off
echo COPY
copy c:\Data\repos\ngMatTheming\README.md c:\Data\repos\ngMatTheming\projects\ng-mat-theming\README.md /y
echo UPDATE VERSION
pushd projects\ng-mat-theming
call npm version patch
popd
echo BUILDING LIBRARY
call ng b --project ng-mat-theming
echo BUILDING PROD
call ng build --prod --base-href "https://b-mi.github.io/ngMatTheming/"
echo PUBLISHING
call npx angular-cli-ghpages --dir=dist/ngMatThemingLib
echo CREATE PACKAGE
pushd dist\ng-mat-theming
call npm pack
dir *.tgz
echo V c:\Data\repos\ngMatTheming\dist\ng-mat-theming\package.json treba vyradit prepublish skript
echo opravit a stlacit klavesu, alebo break
pause
call npm publish --access public
popd
pause