import { Injectable } from '@angular/core';
import { UntypedFormControl, FormGroupDirective, NgForm } from '@angular/forms';

/** Provider that defines how form controls behave with regards to displaying error messages. */
@Injectable({ providedIn: 'root' })
export class ErrorStateMatcher {
  isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.touched || (form && form.submitted)));
  }
}

/** Error state matcher that matches when a control is invalid and dirty. */
@Injectable()
export class ShowOnDirtyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || (form && form.submitted)));
  }
}
