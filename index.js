module.exports = (list = [], envs = {}) => {
  const env = new Map();

  list.forEach((item) => {
    if (!envs[item]) {
      throw new Error(`Environment variable ${item} is expected`);
    }
    env.set(item, envs[item]);
  });

  return env;
};
