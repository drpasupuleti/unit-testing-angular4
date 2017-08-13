import {Component} from '@angular/core';
import {TestQuickStartService} from '../quicktart/test.quickstart-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'app';

}
export function addTwoNumbers(a, b) {
  return a + b;
}

