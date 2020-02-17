1) md c:\newCommerce
2) cd c:\newCommerce
3) git clone https://github.com/gopalsidleghatta/eCommerce

server
-------------
4) cd c:\newCommerce\ecomm-app\server
5) npm install
6) node .\index.js

client
-------------

7) cd c:\newCommerce\ecomm-app\ReactJSClient
8) npm install
9) npm start


git clone https://github.com/gopalsidleghatta/eCommerce

Username for 'https://github.com': gplkrishna@gmail.com
Password for 'https://gplkrishna@gmail.com@github.com': product123!@#

npm init -y
npm install express body-parser cors mongoose nodemon


$ mongo
> use product-catalog

# eCommerce

How to install Mongo DB
-------------------------

Download the zip file from the below link
https://www.mongodb.com/download-center/community

1. Unzip in a folder Ex: c:\Users\sidgo01\mongodb

2. Create another data folder like c:\Users\sidgo01\mongodb-data

3. cd :\Users\sidgo01\mongodb\bin

4. mongod.exe --dbpath=c:\Users\sidgo01\mongodb-data

Install MongoDB client - Robo 3T 1.3.1
---------------------------------------

https://robomongo.org/download

Install Node. js and NPM on Windows
-----------------------------------

https://phoenixnap.com/kb/install-node-js-npm-on-windows

Product APIs
-------------

1. GET - http://localhost:3000/api/products

2. POST - http://localhost:3000/api/product
{
    "name": "Colgate123",
    "description": "toothpaste123"
}

3. DELETE - http://localhost:3000/api/product/5e42811e42a4f85698d881f3
