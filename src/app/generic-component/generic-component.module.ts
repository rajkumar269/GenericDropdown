import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DropDownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ DropDownComponent ],
  exports:      [ DropDownComponent ],
  providers:    [ ]
})
export class GenericComponentModule {
  constructor (@Optional() @SkipSelf() parentModule: GenericComponentModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}