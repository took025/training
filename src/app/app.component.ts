import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
// import moment = require('moment');
import * as moment from 'moment';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }
  public singlePicker = {
    singleDatePicker: true,
    showDropdowns: true,
    opens: 'right'
  };

  public mainInput = {
      start: moment().subtract(12, 'month'),
      end: moment().subtract(6, 'month')
  };

  public singleDate: any;

  constructor(
    private daterangepickerOptions: DaterangepickerConfig) {
      this.daterangepickerOptions.settings = {
          showDropdowns: true,
          showCustomRangeLabel: true,
          locale: {
            format: 'DD-MM-YYYY',
            daysOfWeek: [
              'M',
              'S',
              'T',
              'W',
              'F',
              'S',
              'S'
            ],
            monthNames: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'
            ],
          },
          ranges: {
              navigation:[],
              all: [moment().subtract(30, 'day'), moment()],
              today: [moment().subtract(30, 'day'), moment()],
              yestarday: [moment().subtract(30, 'day'), moment()],
             'last 7 day': [moment().subtract(7, 'day'), moment()],
             'last 14 day': [moment().subtract(15, 'day'), moment()],
             'last 30 day': [moment().subtract(30, 'day'), moment()],
          }
      };
      this.singleDate = Date.now();
  }

  private selectedDate(value: any) {
      this.mainInput.start = value.start;
      this.mainInput.end = value.end;
      console.log(this.mainInput.start);
      console.log(this.mainInput.end);
  }

  private singleSelect(value: any) {
      this.singleDate = value.start;
      console.log(this.singleDate);
  }
}
