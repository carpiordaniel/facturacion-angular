import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { soloTexto, validarCorreo, validarDecimalConDosDecimales } from 'src/app/validators/validatorFn';
import { ProductoService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {

  formulario: FormGroup;
  existe: boolean = false;

  constructor(private formBuilder: FormBuilder, private productoService: ProductoService) {
    this.formulario = this.formBuilder.group({
      codigo: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      nombre: ['', [Validators.required, soloTexto()]],
      precio: ['', [Validators.required, validarDecimalConDosDecimales()]],
      stock: ['', [Validators.required, validarDecimalConDosDecimales()]],
      activo: [1],
    });
  }

  onSubmit() {

    if (this.formulario.valid) {
      console.log('El formulario es válido. Enviar solicitud...');
    } else {
      Object.values(this.formulario.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    this.productoService.enviarDatos(this.formulario.value).subscribe(response => {
      console.log('Datos enviados correctamente:', response);
      alert('Datos registrados correctamente');
      this.formulario.reset();
    }, error => {
      console.error('Error al enviar datos:', error);
      alert('Error al enviar datos: los campos no cumplen con los formatos requeridos');	
    });
  }

  validarCodigo(event: any) {
    const input = event.target as HTMLInputElement;
  
    // Eliminar cualquier validación anterior
    //this.formulario.get('codigo')!.setErrors(null);
    this.existe = false;
  
    const delay = 300;
  
    setTimeout(() => {
      this.productoService.verificarExistencia(input.value).subscribe(data => {
        if (data.data) {
          this.existe = true;
          console.log('El código ya existe');

          this.formulario.get('codigo')!.setErrors({ 'codigoExistente': true });
        } else {
          //this.formulario.get('codigo')!.setErrors(null);
          this.existe = false;
        }
      });
    }, delay);
  }

}
