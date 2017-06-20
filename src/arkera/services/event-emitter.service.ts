import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class EventEmitterService {

  articleClickedEvent:EventEmitter<any> = new EventEmitter();

  emitArticleClickedEvent(data:any) {
    this.articleClickedEvent.emit(data);
  }

  getArticleClickedEmitter() {
    return this.articleClickedEvent;
  }
}
