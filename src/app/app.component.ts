import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: ` <app-header />
    <router-outlet />`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Cost Evidence';
}
