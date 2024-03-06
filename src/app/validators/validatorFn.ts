import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function soloTexto(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const textoIngresado: string = control.value || ''; 
    const regex = /^[a-zA-Z\s]*$/; 

    if (!textoIngresado.match(regex)) {
      return { 'soloTexto': { message: 'Este campo solo permite texto.' } }; 
    }

    return null; 
  };
}


export function validarCorreo(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const correoIngresado: string = control.value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    if (!correoIngresado.match(regex)) {
      return { 'correoInvalido': true }; 
    }

    return null; 
  };
}


export function validarDecimalConDosDecimales(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valorIngresado: string = control.value;

    if (!valorIngresado) {
      return null; 
    }

    const regex = /^\d+(\.\d{1,2})?$/; 

    if (!regex.test(valorIngresado)) {
      return { 'decimalInvalido': true }; 
    }

    return null; 
  };
}