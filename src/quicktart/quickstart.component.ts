import {Component} from '@angular/core';


@Component({
  selector: 'app-basic',
  templateUrl: './quickstart.component.html',
})
export class QuickStartComponent {
  totalV = 0;

  upVote() {
    this.totalV++;
  }

  downVote() {
    this.totalV--;
  }

}
