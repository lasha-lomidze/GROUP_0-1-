
const { URL } = require('url');

const myUrl = new URL('https://www.example.com/products?id=123&category=electronics');

console.log('Initial URL: ', myUrl.toString());

myUrl.hostname = 'www.newsite.com';
myUrl.pathname = '/newpath';
myUrl.search = '?id=456&category=home-appliances';

console.log('Updated URL: ', myUrl.toString());
