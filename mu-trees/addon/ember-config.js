import addonsConfig from 'ember-resolver/addons-config';
import moduleConfig from 'ember-resolver/module-config';
import mergeAddonsConfig from 'ember-resolver/utils/merge-addons-config';

export default function generateConfig(name) {

  let result = {
    app: {
      name,
      rootName: name
    },
  };

  mergeAddonsConfig(moduleConfig, addonsConfig);

  return Object.assign(result, moduleConfig);
}
