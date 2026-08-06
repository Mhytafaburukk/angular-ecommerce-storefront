import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { IlkComponentim } from './components/ilk-componentim/ilk-componentim';
import { ProductComponent } from './components/product/product';
import { Category } from './components/category/category';
import { Navi } from './components/navi/navi';

@NgModule({
  declarations: [App, IlkComponentim, ProductComponent, Category, Navi],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App],
})
export class AppModule { }
