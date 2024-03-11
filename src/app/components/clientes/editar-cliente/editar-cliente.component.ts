import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/service/clientes.service';
import { Router } from '@angular/router';
import { soloTexto, validarCorreo, validarDecimalConDosDecimales } from '../../../validators/validatorFn';


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {

  
  @Input() personaEditar: any = {};
  @Output() modoOculto = new EventEmitter();
  personaForm: FormGroup;


  constructor(private fb: FormBuilder, private clienteService: ClientesService) {
    this.personaForm = this.fb.group({
      idCliente: '',
      rucDni: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.maxLength(15)]],
      nombre: ['', [Validators.required, soloTexto()]],
      direccion: ['', [Validators.required,]],
      correo: ['', [Validators.required, validarCorreo()]],
      activo: ['', [Validators.required]],
      fechaCreacion: ['', [Validators.required]],
  
    });

    console.log("constructor");
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['personaEditar'] && this.personaEditar) {
      this.personaForm.patchValue(this.personaEditar);
    }
    console.log("onchange");
  }
  

  guardar(): void {

    const valoresFormulario = this.personaForm.value;
    console.log("Persona ", this.personaEditar?.nombre);
    console.log("Persona editada", valoresFormulario);
    
    if (this.personaForm.valid) {
      
      console.log('El formulario es válido. Enviar solicitud...');
    } else {
      
      Object.values(this.personaForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    
    this.clienteService.actualizar(valoresFormulario).subscribe(
      response => {
        console.log('Persona editada correctamente:', response);
        alert('Cliente editado correctamente');
        // window.location.reload();
        this.modoOculto.emit();
      },
      error => {
        console.error('Error al editar persona:', error);
        alert('Error al editar cliente: los campos no cumplen con los formatos requeridos');	
      }
    )
  }

}
