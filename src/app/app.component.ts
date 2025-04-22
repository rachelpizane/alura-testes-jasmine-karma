import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public likedCount: number = 0;

  like(): void {
    this.likedCount++;
  }
}
