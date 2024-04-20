import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './views/shared/header/header.component';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './core/services/shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Tadabor-frontend-v2';
  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute, private sharedService: SharedService) {

  }
  
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(e=>console.log(e))
  }

}
