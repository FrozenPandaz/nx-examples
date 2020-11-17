import * as lib5 from '@test/lib5';
import * as lib4 from '@test/lib4';
import * as lib3 from '@test/lib3';
import * as lib2 from '@test/lib2';
import * as lib1 from '@test/lib1';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
