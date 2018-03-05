import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemHeaderComponent } from './item-header/item-header.component';
import { ItemFooterComponent } from './item-footer/item-footer.component';

@NgModule({
  declarations: [AppComponent, ItemHeaderComponent, ItemFooterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
