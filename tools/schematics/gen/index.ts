import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

function addImport(from, to): Rule {
  return host => {
    const originalContent = host.read(`libs/${from}/src/index.ts`);
    const addition = `import * as ${to} from '@test/${to}';\n`;
    host.overwrite(`libs/${from}/src/index.ts`, addition + originalContent);
  }
}
function addImportForApp(to): Rule {
  return host => {
    const originalContent = host.read(`apps/test-app/src/main.ts`);
    const addition = `import * as ${to} from '@test/${to}';\n`;
    host.overwrite(`apps/test-app/src/main.ts`, addition + originalContent);
  }
}
function genComponents(project): Rule {
  const rules = [];
  for (let i = 0; i < 10; i++) {
    rules.push(
      externalSchematic('@nrwl/angular', 'component', {
        name: 'button' + i,
        project
      })
    );
  }
  return chain(rules);
}
function addPathMapping(to): Rule {
  return (host) => {
    const json = JSON.parse(host.read(`apps/test-app/tsconfig.app.json`).toString());
    json.compilerOptions.paths[to] = [`dist/libs/${to}/esm2015/index.js`];
    host.overwrite(`apps/test-app/tsconfig.app.json`, JSON.stringify(json, undefined, 2))
  }
}

export default function (schema: any): Rule {
  const rules = [];
  for (let i = 1; i < 6; i++) {
    rules.push(
      externalSchematic('@nrwl/angular', 'library', {
        name: `lib${i}`,
        style: 'css',
        skipFormat: true,
        unitTestRunner: 'none',
        buildable: true
      })
    );
    rules.push(addImportForApp(`lib${i}`));
    rules.push(genComponents(`lib${i}`));
    rules.push(addPathMapping(`lib${i}`))
    for (let j = 1; j < 6; j++) {
      rules.push(
        externalSchematic('@nrwl/angular', 'library', {
          name: `lib${i}${j}`,
          style: 'css',
          skipFormat: true,
          unitTestRunner: 'none',
          buildable: true
        })
      );
      rules.push(addImport(`lib${i}`, `lib${i}${j}`));
      rules.push(genComponents(`lib${i}${j}`));
      rules.push(addPathMapping(`lib${i}${j}`))
      for (let k = 1; k < 6; k++) {
        console.log(i, j, k);
        rules.push(
          externalSchematic('@nrwl/angular', 'library', {
            name: `lib${i}${j}${k}`,
            style: 'css',
            skipFormat: true,
            unitTestRunner: 'none',
            buildable: true
          })
        );
        rules.push(addImport(`lib${i}${j}`, `lib${i}${j}${k}`));
        rules.push(genComponents(`lib${i}${j}${k}`));
        rules.push(addPathMapping(`lib${i}${j}${k}`))
      }
    }
  }
  return chain(rules);
}
