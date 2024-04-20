import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule , CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router:Router) {}
  ngOnInit() {
    this.router.navigate([`/courses-list/1/topics-list`]);

  }

}
