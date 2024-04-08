import { SharedService } from './../../../core/services/shared.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CourseNavbarComponent } from '../course-navbar/course-navbar.component';
import { Course } from '../../../core/models/course.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CourseNavbarComponent,
    HttpClientModule],
  templateUrl: './header.component.html',
})

export class HeaderComponent {

  private apiUrl = environment.apiUrl;
  constructor(private router:Router,private http: HttpClient, private sharedService: SharedService) {}

  coursesList!:Course[];

  getData(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/courses`);
  }


  onNavOpenTopics(id:Number){
    this.sharedService.navSubject$.next(id);
    this.router.navigate([`/courses-list/${id}/topics-list`]); 
  }

  ngOnInit() {
    this.getData().subscribe((data:Course[]) => {
      this.coursesList = data
    });
  }


}
