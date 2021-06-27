# Load Env
![](https://img.shields.io/badge/version-1.0.1-blue.svg)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/dvs-crcr/load_env/blob/main/LICENSE)

nodejs load env helper

## installation
```bash
npm i https://github.com/dvs-crcr/load_env.git\#v1.0.1 --save
```

## usage: check envs

```js
const load_env = require('load_env');

const env = load_env([
  'HTTP_PORT',
  'REDIS_PORT',
  'REDIS_URL',
], process.env);
```

## usage: get env
```js
const http_port = env.get('HTTP_PORT');
```
