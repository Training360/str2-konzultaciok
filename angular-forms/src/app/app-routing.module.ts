import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { ProductEditorComponent } from './page/product-editor/product-editor.component';
import { ProductComponent } from './page/product/product.component';
import { UserEditReactiveComponent } from './page/user-edit-reactive/user-edit-reactive.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UserComponent } from './page/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent,
  },
  {
    path: 'user-edit-reactive/:id',
    component: UserEditReactiveComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/edit/:id',
    component: ProductEditorComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
