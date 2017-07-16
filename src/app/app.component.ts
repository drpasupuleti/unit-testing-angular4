import {Component} from '@angular/core';
import {QuickStartService} from '../quicktart/quickstart-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuickStartService]
})
export class AppComponent {
  title = 'app';

}
export function addTwoNumbers(a, b) {
  return a + b;
}

