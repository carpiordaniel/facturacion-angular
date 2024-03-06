import { Component } from '@angular/core';
import { ProductoService } from 'src/app/service/productos.service';
@Component({
  selector: 'app-home-producto',
  templateUrl: './home-producto.component.html',
  styleUrls: ['./home-producto.component.css']
})
export class HomeProductoComponent {

  
  productos: any ; 
  productosEditar: any;
  modoOculto: boolean = true;
  constructor(private productoService: ProductoService) {
  }
  ngOnInit() {
   this.getData();
  }
  
  getData(){
    this.productoService.getData().subscribe(data => {
      this.productos = data;
      
    })
  }
  
  eliminarPorId(id: number) {
    console.log(id)
    this.productoService.eliminarPorId(id).subscribe(
      (response) => {
      console.log('Producto eliminada correctamente');
      this.getData();
    }, error => {
      console.error('Error al eliminar producto:', error);
    });
  }
  // buscar(texto: Event) {
  //   const input = texto.target as HTMLInputElement;
  //   this.personasFiltradas = this.personas.filter( (persona: any) =>
  //     persona.nombre.toLowerCase().includes(input.value.toLowerCase()) ||
  //     persona.apellidos.toLowerCase().includes(input.value.toLowerCase()) ||
  //     persona.email.toLowerCase().includes(input.value.toLowerCase()) ||
  //     persona.fecha.toLowerCase().includes(input.value.toLowerCase()) ||
  //     persona.salario.toString().includes(input.value.toLowerCase())
  //   );
  //   console.log(this.personasFiltradas)
  // }

  toggleModoEdicion(persona: any) {
    this.productosEditar = persona;
    this.editarModoOcuto()
    console.log("algoooo*", this.productosEditar);
  }

  editarModoOcuto(){
    this.modoOculto = !this.modoOculto;
    this.getData();
  }


}
