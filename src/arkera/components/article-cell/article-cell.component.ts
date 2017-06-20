import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitterService } from '../../services/event-emitter.service';

@Component({
  selector: 'ak-article-cell',
  templateUrl: 'article-cell.component.html',
  styleUrls: ['article-cell.component.css']
})

export class ArticleCellComponent implements OnInit {

  @Input() component_config:any;
  data:any;

  constructor(@Inject(EventEmitterService) private _eventEmitterService:EventEmitterService) {
  }

  ngOnInit() {
    this.data = this.component_config;
  }

  getTime(){
    return this.data.readTime;
  }

  articleClicked(data:any){
    this._eventEmitterService.emitArticleClickedEvent(data);
  }

}
