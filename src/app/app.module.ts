import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConvertidorComponent } from './components/convertidor/convertidor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConvertidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
