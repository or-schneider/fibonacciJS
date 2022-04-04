
## Installation
### Install client server
```
npm install
```
### Install fibonacci api server
1) Get fibonacci server submodule
```
git submodule update --init --recursive
```
1) Install fibonacci server dependencies
```
cd fibonacciServer
npm install
```
## Usage
Run fibonacci api server
```
cd fibonacciServer
node app.js
```
Run client server
```
node app.js
```
Or use git-bash terminal to run both at the same time
```
node fibonacciServer/app.js & node app.js
```
Enter client at:
```
localhost:8080
```
