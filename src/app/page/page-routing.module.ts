import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { FacturaComponent } from './factura/factura.component';
import { NuevoComponent } from '../components/clientes/nuevo/nuevo.component';
import { NuevoProductoComponent } from '../components/productos/nuevo-producto/nuevo-producto.component';
import { Cod404Component } from '../components/cod404/cod404.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeClienteComponent } from '../components/clientes/home-cliente/home-cliente.component';
import { ListaFacturasComponent } from '../components/facturas/lista-facturas/lista-facturas.component';

const routes: Routes = [

    {
      path: 'cliente',
      component: ClienteComponent
    },
    {
      path: 'cliente/nuevo',
      component: NuevoComponent
    },
    {
      path: 'producto',
      component: ProductoComponent
    },
    {
      path: 'producto/nuevo',
      component: NuevoProductoComponent
    },
    {
      path: 'factura',
      component: FacturaComponent
    },
    {
      path: 'lista-factura',
      component: ListaFacturasComponent
    },
   

    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
