# load_env
nodejs load env helper

## usage: check envs

```js
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
