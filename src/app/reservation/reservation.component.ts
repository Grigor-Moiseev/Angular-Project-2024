import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  public reservData: any[] = [];
  public filteredData: any[] = [];
  public searchInput!: string;
  public isShow: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, public getData: ActivatedRoute) {
    if (isPlatformBrowser(this.platformId)) {
      let reservDataList = localStorage.getItem('reservations');
      if (reservDataList) {
        this.reservData = JSON.parse(reservDataList).map((item: string) => JSON.parse(item));
      } else {
        this.reservData = [];
      }
      console.log(this.reservData);
    }
  }

  reserveSearch() {
    if (this.searchInput) { 
      this.filteredData = this.reservData.filter((data: any) => {
        return data.reservCode.toString().includes(this.searchInput);
      });
      this.searchInput = '';
      if (this.filteredData.length === 0) {
        alert('No such reservation code is found!!!');
        this.searchInput = '';
      } else {
        this.isShow = true;
      }
    }
  }

  hide() {
    this.isShow = false;
  }
}
