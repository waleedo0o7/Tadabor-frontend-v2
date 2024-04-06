import { SharedService } from './../../core/services/shared.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  ActivatedRoute,
} from '@angular/router';
import { CourseNavbarComponent } from '../shared/course-navbar/course-navbar.component';

import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Topic } from '../../core/models/topic.model';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CourseNavbarComponent,
    HttpClientModule,
  ],
  templateUrl: './topics-list.component.html',
})
export class TopicsListComponent {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private route: ActivatedRoute , private sharedService: SharedService) {
    // if ( this.route.snapshot.paramMap.get('id') ) {
    //   this.coursesListId = this.route.snapshot.paramMap.get('id');
    // } else {
    //   this.coursesListId = 1;
    // }
  }

  topicsList!: Topic[];
  coursesListId: any;

  getData(id:any): Observable<Topic[]> {
    return this.http.get<Topic[]>(`
      ${this.apiUrl}/courses/${id}/topics`);
  }

  ngOnInit() {

    this.sharedService.navSubject.subscribe(
      e => {
        this.getData(e).subscribe((data: Topic[]) => {
          this.topicsList = data;
        });
      }
    );


  }
}
