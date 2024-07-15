@echo off
setlocal

REM Add all changes to git
git add .

REM Commit the changes
git commit -m "Updating"

REM Push the changes to the main branch
git push origin main

endlocal
