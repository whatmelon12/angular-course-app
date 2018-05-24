import { AbstractControl } from '@angular/forms';

export function validateCustom(control: AbstractControl) {
    var value = control.value;
    //This sets 'error' value
    if(value !== 'goti'){
        return { validGoti: true };
    }
    return null;
}