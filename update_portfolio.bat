@echo off
echo Portfolio Update Script
echo =====================
echo This script will replace the React portfolio with the new HTML/CSS/JavaScript portfolio.
echo.

REM Backup the original file
if exist "Portifolio.html" (
    echo Creating backup of original portfolio...
    copy "Portifolio.html" "Portifolio_React_Backup.html" >nul
    echo Backup created as Portifolio_React_Backup.html
)

REM Rename the new portfolio files
if exist "NEW_PORTFOLIO.html" (
    echo Renaming new portfolio to index.html...
    move "NEW_PORTFOLIO.html" "index.html" >nul
    echo New portfolio is now available as index.html
)

echo.
echo Update complete!
echo Visit index.html to view the new portfolio.
echo.
pause