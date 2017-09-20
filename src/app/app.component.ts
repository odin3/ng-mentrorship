import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fooo';

  bar() {
    return 1 + 1;
  }

  foo() {
    alert('Hello');
  }
}
