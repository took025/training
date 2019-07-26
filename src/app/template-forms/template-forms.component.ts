import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent implements OnInit {

  userName = 'Bob';
  email: string;
  nickName: string;
  password: string;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      form.reset();
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
