import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './page/cliente/cliente.component';
import { ProductoComponent } from './page/producto/producto.component';
import { FacturaComponent } from './page/factura/factura.component';
import { Cod404Component } from './components/cod404/cod404.component';
import { NuevoComponent } from './components/clientes/nuevo/nuevo.component';
import { NuevoProductoComponent } from './components/productos/nuevo-producto/nuevo-producto.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'cliente',
    component: ClienteComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  },
  {
    path: 'factura',
    component: FacturaComponent
  },
  {
    path: 'cliente/nuevo',
    component: NuevoComponent
  },
  {
    path: 'producto/nuevo',
    component: NuevoProductoComponent
  },
  {
    path: '**',
    component: Cod404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
