import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  orderForm: FormGroup;
  items: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

    ngOnInit() {
      this.orderForm = this.formBuilder.group({
        customerName: '',
        email: '',
        items: this.formBuilder.array([ this.createItem() ])
      });
  }
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  submit(form: NgForm) {
    console.log('submit', form);
  }
}
