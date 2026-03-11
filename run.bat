@echo off
cd /d %~dp0

echo Installing packages...
call npm install

echo Running build...
call npm run seed

echo Starting server...
start http://localhost:3000
call npm start