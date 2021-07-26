import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './tienda/tienda.component';
import { HeaderComponent } from './header/header.component';
import { Tienda2Component } from './tienda2/tienda2.component';
import { Tienda3Component } from './tienda3/tienda3.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { SoporteComponent } from './soporte/soporte.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ConexionService } from './services/conexion.service';
import { ListaCuentaComponent } from './lista-cuenta/lista-cuenta.component'

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    HeaderComponent,
    Tienda2Component,
    Tienda3Component,
    CuentaComponent,
    SoporteComponent,
    ListaCuentaComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
