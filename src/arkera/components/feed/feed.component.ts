import {Component,EventEmitter} from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'ak-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['feed.component.css']
})
export class FeedComponent {
  @Input() component_config:any;
}
