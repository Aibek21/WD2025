import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PostListComponent} from "./post-list/post-list.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'posts/:id', component:PostDetailComponent},
  {path: 'products', component: ProductsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
