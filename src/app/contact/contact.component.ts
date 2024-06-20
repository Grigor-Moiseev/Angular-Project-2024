import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public email: string = '';
  public subEmails: string[] = [];

  postEmail() {
    let storedEmails = localStorage.getItem('subEmailList');
    if (storedEmails) {
      this.subEmails = JSON.parse(storedEmails);
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.email)) {
      alert('Entered email is not valid. Please use a valid email address.');
      this.email = '';
      return;
    }

    if (this.subEmails.includes(this.email)) {
      alert('You are already subscribed');
    } else {
      this.subEmails.push(this.email);
      localStorage.setItem('subEmailList', JSON.stringify(this.subEmails));
      alert('You have successfully subscribed!');
    }
    this.email = '';
  }
}
