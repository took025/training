import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  myForm: FormGroup;
  constructor( private fb: FormBuilder) {}

  ngOnInit() {
    // this.createForms();
    this.myForm = this.fb.group({
      name: ['', ] ,
      email: ['', Validators.required],
      // title: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      title: ['', ]
    });
    console.log(this.myForm.controls);
  }
  onSubmit(form: FormGroup) {
    console.log(form.valid);
    console.log('forms', this.myForm.value);
    this.myForm.reset();
    console.log(this.myForm.controls);
    }
}
