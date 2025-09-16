import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,CommonModule],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('APPDEV1_FG_EXAM');
}
