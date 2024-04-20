import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
import { VideoLesson } from '../../core/models/video-lesson.model';
import { SharedService } from '../../core/services/shared.service';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CourseNavbarComponent,
    HttpClientModule,
  ],
  templateUrl: './media-list.component.html',
})
export class MediaListComponent {

  private apiUrl = environment.apiUrl;


  constructor(private http: HttpClient, private route: ActivatedRoute, private sharedService: SharedService) {
    this.coursesId = this.route.snapshot.paramMap.get('cid');
    this.topicId = this.route.snapshot.paramMap.get('tid');
  }

  mediaList: VideoLesson[] = [];
  coursesId: any;
  topicId: any;
  topicName:any;
  mediaListId: any;

  convertSeconds(time: any) { 
    let seconds = parseInt(time);

    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    let result = '';

    if (time < 60) {
      // only seconds show
      result = this.pad(seconds, 2);
    } else if (time > 60 && time < 3600) {
      // only minutes and seconds show
      result = this.pad(minutes, 2) + ':' + this.pad(seconds, 2);
    } else {
      // hours and  minutes  and seconds show

      result =
        this.pad(hours, 2) +
        ':' +
        this.pad(minutes, 2) +
        ':' +
        this.pad(seconds, 2);
    }

    return result;
  }

  pad(num: any, size: any) {
    var s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }

  getVideoLessonsList(): Observable<VideoLesson[]> {
    return this.http.get<VideoLesson[]>(
      `${this.apiUrl}/courses/${this.coursesId}/topics/${this.topicId}/lessons/media`
    );
  }

  getTopicName() {
    this.http.get<any>(
      `${this.apiUrl}/courses/${this.coursesId}/topics/${this.topicId}`).subscribe(e=>{this.topicName = e.name});
  }

  ngOnInit() {
 

    this.getTopicName()

    this.getVideoLessonsList().subscribe((data: any) => {
      this.mediaList = data.data;
      this.mediaList.forEach((e) => {
        e.durationMinutes = this.convertSeconds(e.durationSec);
      });
    });
  }
}
