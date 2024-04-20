import { SharedService } from './../../core/services/shared.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  ActivatedRoute,
  Router,
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

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute, private sharedService: SharedService) {

    this.coursesId = this.route.snapshot.paramMap.get('cid');

    this.sharedService.navSubject$.next(this.coursesId);

  }

  topicsList: Topic[] = [];

  coursesId: any;

  getTopicsList(id: any): Observable<Topic[]> {

    return this.http.get<Topic[]>(`

      ${this.apiUrl}/courses/${id}/topics`);

  }


  onNavOpenMedia(tid: Number, topicName: string) {
    this.sharedService.navSubject$.next(tid);
    this.router.navigate([`/courses-list/${this.coursesId}/topics-list/${tid}/media-list`]);
  }

  ngOnInit() {


    this.sharedService.navSubject$.subscribe(

      e => {


        this.getTopicsList(e).subscribe((data: Topic[]) => {

          console.log(data);

          this.topicsList = data;

        });

      }

    );

    this.sharedService.navSubject$.next(this.coursesId);

  }

}
