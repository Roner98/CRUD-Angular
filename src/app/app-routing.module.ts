import { EditNailsComponent } from './components/edit-nails/edit-nails.component';
import { DescricaoComponent } from './components/descricao/descricao.component';
import { NewFormComponent } from './components/new-form/new-form.component';
import { AboutComponent } from './components/home/about/about.component';
import { FormComponent } from './components/home/form/form.component';
import { ListaComponent } from './components/home/lista/lista.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'lista', component: ListaComponent},
  {path:'new-form', component: NewFormComponent},
  {path:'about', component:AboutComponent},
  {path: 'nails/edit/:id', component: EditNailsComponent},
  {path:'descricao/:id', component: DescricaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
