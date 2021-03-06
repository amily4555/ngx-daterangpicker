import {Component, ViewEncapsulation} from '@angular/core';
import {$$DateRangePicker} from '../lib/daterangepicker.serv';
import * as moment from 'moment';

@Component({
    selector: 'ngx-app',
    styleUrls: ['./demo.scss'],
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="container">
           <h2>Angular 4 ngx-daterangepicker demo</h2>
           <!--<input daterangepicker (selected)="getRangeDate($event)" [options]="options" />-->
           <!--<input daterangepicker (selected)="getRangeDate($event)" (picker)="picker1($event)" />-->
           <!---->
           <!--<br />-->
           <!---->
           <!--<date-range-picker -->
               <!--[options]="{-->
                    <!--singleDatePicker: true-->
               <!--}"-->
               <!---->
               <!--(selected)="getRangeDate($event)">-->
            <!--</date-range-picker>-->
            
             <date-range-picker 
                [options]="options"
                [inherit]="false"
                (picker)="picker($event)"
               (selected)="getRangeDate($event)">
            </date-range-picker>
            
            <!--<date-range-picker -->
               <!--(picker)="picker($event)"-->
               <!--(selected)="getRangeDate($event)">-->
            <!--</date-range-picker>-->
            
            <month-picker></month-picker>
        </div>
  `,
    providers: [
        // { provide: TreeviewI18n, useClass: DefaultTreeviewI18n }
    ]
})
export class AppComponent {
    options: any = {
        startDate: '2017-06-02',
        endDate: moment(),
        maxDate: moment().subtract(5, 'week'),

        ranges: {
            'Latest 7 Days': [moment().subtract(7, 'days'), moment()],
            'Latest 30 Days': [moment().subtract(29, 'days'), moment()],
            'Latest 90 Days': [moment().subtract(89, 'days'), moment()]
        }

        // minDate: '2017-05-28'
    };

    constructor(private $$daterangepicker: $$DateRangePicker) {
        // setTimeout(() => {
        //     this.options = {};
        //     console.debug('oooOOoooOOOooo');
        // }, 3000)
    }

    getRangeDate(rst) {
        console.debug(rst);
    }

    // 获得默认初始值
    picker(dp) {
        console.log(dp.picker.startDate.format('YYYY-MM-DD'));
        console.log(dp.picker.endDate.format('YYYY-MM-DD'));
    }

    picker1(dp) {
        console.debug(dp);
        dp.picker.maxDate = moment().subtract(1, 'week');
    }
}
