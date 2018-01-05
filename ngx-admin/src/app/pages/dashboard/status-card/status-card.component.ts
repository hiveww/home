import { Component, Input } from '@angular/core';
import {Http}  from '@angular/http';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card (click)="on = !on" (click)="selectShader(title)" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon {{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="status">{{ on ? 'ON' : 'OFF' }}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on = true;

  constructor(private http: Http) {
  }

  selectShader(name) {


    if(name == "Кинозал 1") {
      this.http.get('/api/v1/click?pin=5&delay=800').subscribe();
    }else if(name == "Кинозал 2"){
      this.http.get('/api/v1/click?pin=5&delay=800').subscribe();
    }else if(name == "Кухня веранда"){
      this.http.get('/api/v1/click?pin=16&delay=800').subscribe();
    }

    // if(this.firstTime == true ){
    //   this.firstTime =  false;
    //   this.sortRooms();
    //   return;
    // }
    // if (this.selectedRoom == "2"){
    //   this.http.get('aaa').subscribe();
    //   //this.http.get('http://10.0.1.24/click?pin=4&delay=800');
    // }
    //
    // this.select.emit(roomNumber);
    // this.selectedRoom = roomNumber;
    //
    // this.sortRooms();
  }

}
