import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public isShow:boolean = false;

  mobMenu () {
    if (this.isShow == false) {
      this.isShow = true;
    } else if(this.isShow == true) {
      this.isShow = false;
    }
  }

  mobMenuClose () {
    this.isShow = false;
  }

}
