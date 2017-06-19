import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ak-article-cell',
  templateUrl: 'article-cell.component.html',
  styleUrls: ['article-cell.component.css']
})

export class ArticleCellComponent implements OnInit {

  @Input() data:any;

  ngOnInit() {
    if(!this.data) {
      this.data = {};
      this.data.title = 'Chinese economy to grow 6.7% in 2017,as consumption still expands: J.p.Morgan';
      this.data.url = 'https://images.mapsofworld.com/around-the-world/Chinese-economy-faces-tough-times.jpg';
      this.data.reason = 'GOLDMAN SACH';
      this.data.readTime = 120000;
    }
   }

  getTime(){
    return this.data.readTime;
  }

}
