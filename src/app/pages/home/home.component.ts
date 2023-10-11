import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  startVideo() {
    // Your logic for starting the video
    console.log('Video started.');
  }
}
