import { Component } from '@angular/core';
import { ClientesService } from 'src/app/service/clientes.service';
@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent {

  clientes: any ; 
  personaEditar: any;
  modoOculto: boolean = true;
  constructor(private clientesService: ClientesService) {
  }
  ngOnInit() {
   this.getData();
  }
  
  getData(){
    this.clientesService.getData().subscribe(data => {
      this.clientes = data;
      
    })
  }
  
  eliminarPorId(id: number) {
    console.log(id)
    this.clientesService.eliminarPorId(id).subscribe(
      (response) => {
      console.log('Persona eliminada correctamente');
      this.getData();
    }, error => {
      console.error('Error al eliminar persona:', error);
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
    this.personaEditar = persona;
    this.editarModoOcuto()
    console.log("algoooo*", this.personaEditar);
  }

  editarModoOcuto(){
    this.modoOculto = !this.modoOculto;
    this.getData();
  }



}
