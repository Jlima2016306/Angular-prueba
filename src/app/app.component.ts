import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angula-JlimaProyect';
  public userSubs : boolean = false;

  userSubscribed(event: any) {
    console.log('se subscribio')
    this.userSubs = event
    console.log(event)

  }



}
