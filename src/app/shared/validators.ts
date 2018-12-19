import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CAValidators {
    static validarCodigoFactory(max: number) {
        return (c: AbstractControl): ValidationErrors|null => {
            return (+c.value < max) ? null : { vlInvalido : true };
        };
    }


    static validarMinMaxCodigoFactory(min: number, max: number) {
        return (c: AbstractControl): ValidationErrors|null => {
            return (+c.value > min && +c.value <= max) ? null : { vlInvalido : true };
        };
    }

}
