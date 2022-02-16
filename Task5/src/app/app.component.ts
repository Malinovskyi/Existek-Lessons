import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './models/validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Registration form';
  form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      fullname: new FormControl('', Validators.required),
      age: new FormControl('', [
        Validators.required,
        CustomValidators.forbiddenNumber,
      ]),
      country: new FormControl(
        '',
        [Validators.required],
        CustomValidators.getForbiddenNameAsync(['Russia', 'UK'])
      ),
      learnEng: new FormControl('', Validators.required),
      highEducation: new FormControl('', Validators.required),
      city: new FormGroup({
        region: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        postCode: new FormControl('', Validators.required),
      }),
    });
    this.form.get('name')?.valueChanges.subscribe((newName) => {
      this.form.patchValue({
        fullname: newName + '',
      });
    });
  }

  get cityGroup(): FormGroup {
    return this.form.controls['city'] as FormGroup;
  }

  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
