import { Component } from '@angular/core';

import '@nx-example/shared/header';

@Component({
  selector: 'nx-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}

// Before:
// VSCode will think this is okay because jest is in tsconfig.json
// Webstorm will somehow know to use tsconfig.app.json

// After:
// Both IDEs know to use tsconfig.app.json for this file and error.
describe('hi', () => {});
