import { chain, Rule, externalSchematic } from '@angular-devkit/schematics';
import { dasherize } from '@angular-devkit/core/src/utils/strings';

function normalizeOptions(options): any {
  return {
    ...options,
    name: dasherize(options.name)
  };
}

export default function(schema: any): Rule {
  const options = normalizeOptions(schema);
  return chain([externalSchematic('@nrwl/schematics', 'lib', options)]);
}
