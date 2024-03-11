import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './page/cliente/cliente.component';
import { ProductoComponent } from './page/producto/producto.component';
import { FacturaComponent } from './page/factura/factura.component';
import { Cod404Component } from './components/cod404/cod404.component';
import { NuevoComponent } from './components/clientes/nuevo/nuevo.component';
import { NuevoProductoComponent } from './components/productos/nuevo-producto/nuevo-producto.component';
import { LoginComponent } from './page/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { AuthGuard } from './guards/guard.guard';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [

  {
    path: '',
    component: MenuComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'app',
    component: MenuComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [loginGuard],
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
