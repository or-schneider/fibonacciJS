# Fibonacci calculator JS

Vanilla JavaScript implementation of a Fibonacci calculator  

Calculate fibonacci numbers, save said calculations, and sort them out!  

Based on a Figma design by Itc  
Built for js, bootstrap practice and to serve as a future reference  

#### Notes
Js has an import system!  
Bootstrap mobile first is an interesting approach  
This project has support for a mobile screen going the bootstrap way  
Taking a stab at git submodules, with the fibonacci server api being a submodule  
#

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
### Preview
https://user-images.githubusercontent.com/90090260/161656152-2b2db418-367a-4564-a2db-6ac5432a1b6c.mp4