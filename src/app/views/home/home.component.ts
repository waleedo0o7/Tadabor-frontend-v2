import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Topic } from '../../core/models/topic.model';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from '../course-list/course-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule , CommonModule, RouterOutlet, RouterLink, RouterLinkActive, CourseListComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router:Router) {}


  ngOnInit() {
    this.router.navigate([`/courses-list/1/topics-list`]);

  }

}
