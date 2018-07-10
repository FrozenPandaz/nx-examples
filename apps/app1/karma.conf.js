const baseKarmaConf = require('../../karma.conf');

module.exports = config => {
  baseKarmaConf(config);
  config.set({
    coverageIstanbulReporter: {
      dir: 'coverage/apps/app1'
    }
  });
};
