# next-content-type
> Content type for next.

## installation
```bash
npm install -S @feizheng/next-content-type
```

## usage
```js
import '@feizheng/next-content-type';

nx.contentType('urlencoded'); 
// application/x-www-form-urlencoded

nx.contentType('multipart'); 
// multipart/form-data

nx.contentType('json'); 
// application/json;charset=utf-8

nx.contentType('plain'); 
// text/plain

nx.contentType('raw'); 
nx.contentType('unsupported'); 
// application/x-www-form-urlencoded
```
