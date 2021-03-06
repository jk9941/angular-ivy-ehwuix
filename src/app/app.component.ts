import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLinear = true;
  formNameGroup: FormGroup;
  formPasswordGroup: FormGroup;
  formEmailGroup: FormGroup;
  formPhoneGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnit() {}
  createForm() {
    this.formNameGroup = this.fb.group({
      userName: ['', Validators.required]
    });

    this.formPasswordGroup = this.fb.group({
      passWord: ['', Validators.required]
    });
    this.formEmailGroup = this.fb.group({
      emailID: ['', Validators.compose([Validators.required, Validators.email])]
    });
    this.formPhoneGroup = this.fb.group({
      mobile: [
        '',
        Validators.compose([Validators.required, Validators.min(10)])
      ]
    });
  }
}
