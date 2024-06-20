import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public menuList: any = [];

  constructor(public apiData: ServiceService) {
    apiData.getData().subscribe(data => {
      this.menuList = data
    }
    )
  }

}
