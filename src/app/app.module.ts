import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { UsuarioModule } from './usuario/usuario.module';
import { MenuComponent } from './menu/menu.component';
import { UsuarioCadastroComponent } from './usario/cadastro/usuario-cadastro/usuario-cadastro.component';
import { EstadosModule } from './estados/estados.module';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsuarioCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    UsuarioModule,
    EstadosModule,
    HttpClientModule,
    MenubarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
