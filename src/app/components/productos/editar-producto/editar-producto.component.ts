import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/service/productos.service';
import { Router } from '@angular/router';
import { soloTexto, validarCorreo, validarDecimalConDosDecimales } from '../../../validators/validatorFn';
@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {

  
  
  @Input() productosEditar: any = {};
  @Output() modoOculto = new EventEmitter();
  personaForm: FormGroup;


  constructor(private fb: FormBuilder, private productoService: ProductoService) {
    this.personaForm = this.fb.group({
      idProducto: '',
      codigo: ['', [Validators.required]],
      nombre: ['', [Validators.required, soloTexto()]],
      precio: ['', [Validators.required, validarDecimalConDosDecimales()]],
      stock: ['', [Validators.required, validarDecimalConDosDecimales()]],
      activo: [1],
      fechaCreacion: ['', [Validators.required]],
    });

    console.log("constructor", this.productosEditar);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productosEditar'] && this.productosEditar) {
      this.personaForm.patchValue(this.productosEditar);
    }
    console.log("onchange", this.productosEditar);
  }
  

  guardar(): void {

    const valoresFormulario = this.personaForm.value;
    console.log("Persona ", this.productosEditar?.nombre);
    console.log("Persona editada", valoresFormulario);
    
    if (this.personaForm.valid) {
      
      console.log('El formulario es válido. Enviar solicitud...');
    } else {
      
      Object.values(this.personaForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    
    this.productoService.actualizar(valoresFormulario).subscribe(
      response => {
        console.log('Persona editada correctamente:', response);
        alert('Persona editada correctamente');
        this.modoOculto.emit();
        // window.location.reload();
      
      },
      error => {
        console.error('Error al editar persona:', error);
        alert('Error al editar persona: los campos no cumplen con los formatos requeridos');	
      }
    )
  }

}
