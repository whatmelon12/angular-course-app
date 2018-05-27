import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export class PasswordValidators {
    static matchOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== "1234")
                    resolve({ matchOldPassword: true });
                else
                    resolve(null);
            }, 2000);
        });
    };

    //Validator function to compare equality of two fields
    static equalValueValidator(targetKey: string, toMatchKey: string) : ValidatorFn {
        return (group: AbstractControl) : ValidationErrors | null => {
            let target = group.get(targetKey);
            let toMatch = group.get(toMatchKey);
           if(target.touched && toMatch.touched){
                const isMatch = target.value === toMatch.value;
                if(!isMatch && target.valid && toMatch.valid){
                    toMatch.setErrors( {equalValue: true} );
                    return {equalValue: true} ;
                }

                if(isMatch && toMatch.hasError('equalValue'))
                    toMatch.setErrors(null);                
           }
           return null;
        };
    };
}