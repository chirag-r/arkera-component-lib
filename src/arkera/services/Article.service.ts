import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import {addNoCacheParameter} from '../util/utils';
import {addUpdateUrlParameter} from '../util/utils';
import {Observable} from 'rxjs'
import {AuthenticationService} from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class ArticleService {
  ARTICLE_API:string = 'https://carbon-api-staging.arkera.co/';

  constructor(@Inject(Http) private http:Http, @Inject(AuthenticationService) public _authenticationService:AuthenticationService) {
  }

  getArticles(offset:number):Observable<any> {
    var endpoint:string = addUpdateUrlParameter(this.ARTICLE_API + 'articles', 'limit', 5);
    endpoint = addUpdateUrlParameter(endpoint, 'offset', offset);
    //endpoint = addUpdateUrlParameter(endpoint, 'readSession', '241497599329169');
   // endpoint = addUpdateUrlParameter(endpoint, 'generateReadSession', true);
    let headers = new Headers({'Authorization': 'Bearer ' + this._authenticationService.token});
    return this.http.get(endpoint, {headers: headers})
      .map((response:Response) => response.json());
  }

  getArticle(articleId:number) {
    var endpoint:string = this.ARTICLE_API + 'article/'+ articleId;
    let headers = new Headers({'Authorization': 'Bearer ' + this._authenticationService.token});
    return this.http.get(endpoint, {headers: headers})
      .map((response:Response) => response.json());
  }
}
