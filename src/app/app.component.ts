import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-eslint-prettier-config';

  public value = 0;

  public increment(): void {
    this.value++;
  }

  public getValue(): number {
    return this.value;
  }
}
