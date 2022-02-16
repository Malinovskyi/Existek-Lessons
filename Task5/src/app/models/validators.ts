import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static forbiddenNumber(control: AbstractControl): ValidationErrors | null {
    if (control.value < 18) {
      return { forbiddenNumber: true };
    } else {
      return null;
    }
  }

  static getForbiddenNameAsync(values: string[]) {
    return (
      control: AbstractControl
    ):
      | Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      return new Promise((resolver) => {
        setTimeout(() => {
          if (values.indexOf(control.value) !== -1) {
            resolver({ getForbiddenNameAsync: true });
          } else {
            resolver(null);
          }
        }, 2000);
      });
    };
  }
}
