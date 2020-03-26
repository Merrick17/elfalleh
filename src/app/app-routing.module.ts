import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'category/:id',
    component:CategorieComponent
  },
  {
    path:'cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
