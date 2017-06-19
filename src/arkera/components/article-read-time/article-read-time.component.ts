import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'article-read-time',
  templateUrl: 'article-read-time.component.html',
  styleUrls: ['article-read-time.component.css']
})

export class ArticleReadTimeComponent implements OnInit {
  min_read: any;
  @Input() read_time: any;

  ngOnInit() {
    this.min_read = this.milliSecondToTime(this.read_time);
  }

  milliSecondToTime(milliSecond: number) {
    var time: any;
    if (milliSecond > 0) {
      if (milliSecond >= 60000) {
        time = Math.floor(milliSecond / 60000);
        if (parseInt(time) > 0) {
          var suffix = 'MIN';
          if (parseInt(time) !== 1) {
            suffix = suffix + 'S';
          }
          time = ((time > 20) ? 20 : time) + ' ' + suffix;
        } else {
          time = null;
        }
      } else {
        time = Math.floor(milliSecond / 1000).toFixed(0);
        if (parseInt(time) > 0) {
          var suffix = 'SEC';
          if (parseInt(time) !== 1) {
            suffix = suffix + 'S';
          }
          time = time + ' ' + suffix;
        } else {
          time = null;
        }
      }
    } else {
      time = null;
    }
    return time;
  }

}
