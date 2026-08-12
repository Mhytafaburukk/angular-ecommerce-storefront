import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { IlkComponentim } from './components/ilk-componentim/ilk-componentim';
import { ProductComponent } from './components/product/product';
import { CategoryComponent } from './components/category/category';
import { Navi } from './components/navi/navi';
import { WatAddedPipe } from './pipes/wat-added-pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe-pipe';

@NgModule({
  declarations: [
    App,
    IlkComponentim,
    ProductComponent,
    CategoryComponent,
    Navi,
    WatAddedPipe,
    FilterPipePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [App],
})
export class AppModule {}
