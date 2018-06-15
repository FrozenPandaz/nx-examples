import { baseKarmaConf } from '../../karma.conf';

export default config => {
  baseKarmaConf(config);
  config.set({
    coverageIstanbulReporter: {
      dir: 'coverage/apps/app1'
    }
  });
};
