import {Component,EventEmitter} from '@angular/core';
import { Output,HostListener } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import { Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import {FeedService} from '../../services/Feed.service';

@Component({
  selector: 'ak-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['feed-list.component.css'],
  providers: [AuthenticationService, FeedService]
})
export class FeedListComponent implements OnInit {
  articles:any = null;
  offset:number = 0;
  showLoading: boolean = false;

  constructor(@Inject(AuthenticationService) public _authenticationService:AuthenticationService,
              @Inject(FeedService) public _feedService:FeedService) {

  }

  ngOnInit() {
    this._authenticationService.login().subscribe((res:any) => {
      this.getArticle(false);
    });
  }

  getArticle(isAppend:boolean) {
    this._feedService.getArticle(this.offset).subscribe((items:any) => {
      if(isAppend){
        this.articles = this.articles.concat(items.articles);
      } else {
        this.articles = items.articles;
      }
      setTimeout(() => {
        this.showLoading = true;
      },500);
    });
  }

  @HostListener("window:scroll", ["$event"])
  @HostListener('window:scroll')
  onScroll():void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.showLoading = false;
      this.offset = this.offset + 1;
      alert('you are at end of the page !!');
      this.getArticle(true);

    }
  }

}
