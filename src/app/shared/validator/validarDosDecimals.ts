import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function validarDosDecimals(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === null || control.value === undefined || control.value === '') {
      return null; 
    }

    const valueStr = String(control.value);
    const regex = /^\d+(\.\d{1,2})?$/;

    const valid = regex.test(valueStr);

    return valid ? null : { 'maxDosDecimals': { value: control.value } };
    };
}