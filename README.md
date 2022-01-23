# Finance Tracker
by LeonardoM011

### Made with spring boot in kotlin, react with material ui, postgresql and deployed in docker

## First run (for windows):
### 1. install mvn dependencies
```
./mvnw install
```
### 2. build react app
```
npm run build
```
### 3. run spring boot
```
./mvnw springboot:run
```
## Developing (using intellij):  
### 1. turn on watch for changes webpack in powershell terminal
```
npm run watch
```
This will automatically update resources/static bundle.js (built react file) and target folder bundle.js file
So you don't have to run npm run build everytime you make changes to react files
### 2. run app with live changes enabled and spring boot devtools installed in intellij

## TODOS:
- [ ] Client side
- [ ] Server side and routing
- [ ] Add Docker support and guide 🐋
- [ ] Add PostgreSQL support and guide 🐘
- [ ] Login and security 🔐