import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaComponent } from './components/home/lista/lista.component';
import { FormComponent } from './components/home/form/form.component';
import { AboutComponent } from './components/home/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewFormComponent } from './components/new-form/new-form.component';
import { MessageComponent } from './components/message/message.component';
import { DescricaoComponent } from './components/descricao/descricao.component';
import { EditNailsComponent } from './components/edit-nails/edit-nails.component';
import { MessageErrorComponent } from './components/message-error/message-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListaComponent,
    FormComponent,
    AboutComponent,
    NewFormComponent,
    MessageComponent,
    DescricaoComponent,
    EditNailsComponent,
    MessageErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
