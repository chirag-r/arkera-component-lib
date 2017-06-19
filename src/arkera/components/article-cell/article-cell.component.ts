import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'ak-article-cell',
  templateUrl: 'article-cell.component.html',
  styleUrls: ['article-cell.component.css']
})

export class ArticleCellComponent implements OnInit {

  @Input() component_config:any;
  data:any;

  ngOnInit() {
    this.data = this.component_config;
    console.log('data ' + JSON.stringify( this.data));
   }

  getTime(){
    return this.data.readTime;
  }
}
