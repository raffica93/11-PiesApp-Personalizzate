import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// Configuración del locale de la app
import localeEsHN from '@angular/common/locales/es-HN';
import localeFrCA from '@angular/common/locales/fr-CA';
import localeIT from '@angular/common/locales/it';

import { registerLocaleData } from '@angular/common';


registerLocaleData( localeEsHN );
registerLocaleData( localeFrCA );
registerLocaleData( localeIT );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'it' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
