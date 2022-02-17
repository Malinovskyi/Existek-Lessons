import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      productList: new FormArray([
        new FormGroup({
          name: new FormControl('', Validators.required),
          product: new FormControl('', Validators.required),
        }),
      ]),
    });
  }

  get productList(): FormArray {
    return this.form.get('productList') as FormArray;
  }

  addLesson() {
    const productForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      product: new FormControl('', Validators.required),
    });
    this.productList.push(productForm);
  }

  remove(index: any) {
    this.productList.removeAt(index);
  }

  createList() {
    console.log(this.form.value);
    this.form.reset();
  }


}
