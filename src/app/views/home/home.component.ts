import { Component } from '@angular/core';
// import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  progressbarHeight = '7px';

  items = [
    { id: 1, progreessValue: '10%' },
    { id: 1, progreessValue: '40%' },
    { id: 1, progreessValue: '60%' },
    { id: 1, progreessValue: '10%' },
    { id: 1, progreessValue: '20%' },
    { id: 1, progreessValue: '10%' },
    { id: 1, progreessValue: '80%' },
    { id: 1, progreessValue: '100%' },
    { id: 1, progreessValue: '15%' },
  ];
}
