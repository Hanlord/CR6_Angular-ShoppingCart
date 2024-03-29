import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent} from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';



const routes: Routes = [{
path:"",component: HomeComponent,
},{
path:"about", component: AboutComponent,
},{
  path:"cart", component: CartComponent,
},{
  path:"menu", component: MenuComponent,
},{
  path:"details", component: DetailsComponent,
},{
  path: 'products/:productId', component: DetailsComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
