import { Rule } from '@angular-devkit/schematics';

export default function(schema: any): Rule {
  return () => {
    console.log(`${schema.arg1}`)
  }
}
