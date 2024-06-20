import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'] // Corrected styleUrl to styleUrls
})
export class BookingComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    let todayDate = new Date();
    this.today = todayDate.toISOString().split('T')[0];
    this.guestCount = this.guestCountArr[0];
    this.time = this.timeArr[0];
    this.selectedTimeSlot = this.time;

    if (isPlatformBrowser(this.platformId)) {
      let reservDataList = localStorage.getItem('reservations');
      if (reservDataList) {
        this.reservData = JSON.parse(reservDataList);
      } else {
        this.reservData = [];
      }
    }
  }

  public today!: string;
  public time!: string;
  public guestCount!: number;
  public guestCountArr: number[] = [1, 2, 3, 4, 5, 6];
  public randomCode!: number;
  public timeArr: string[] = [
    '6:30 PM', '6:45 PM', '7:00 PM', '7:15 PM', '7:30 PM',
    '7:45 PM', '8:00 PM', '8:15 PM', '8:30 PM', '8:45 PM', '9:00 PM',
    '9:15 PM', '9:30 PM', '9:45 PM', '10:00 PM'
  ];
  public reservData: string[] = [];
  public isShow: boolean = false;
  public selectedTimeSlot!: string;

  makeReservation() {
    this.randomCode = this.reservationCode();
    let reservation = {
        date: this.today,
        guestCount: this.guestCount,
        time: this.time,
        reservCode: this.randomCode
    };
    this.reservData.push(JSON.stringify(reservation));

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('reservations', JSON.stringify(this.reservData));
    }

    this.isShow = true;
    let reservCode = document.querySelector("#reserv-alert");
    if (reservCode) {
        reservCode.scrollIntoView();
    }
  }

  reservationCode() {
    return Math.round(1000 + Math.random() * 9000);
  }

  close() {
    this.isShow = false;
  }

  reserv(time: string) {
    this.selectedTimeSlot = time;
    this.time = time;
  }

  onTimeChange(event: any) {
    this.selectedTimeSlot = event.target.value;
  }
}
