import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from './arkera/components/feed/feed.component';
import {ArticleCellComponent} from './arkera/components/article-cell/article-cell.component';
import {ArticleReadTimeComponent} from './arkera/components/article-read-time/article-read-time.component';
import {SpinnerComponent} from './arkera/components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeedComponent,ArticleCellComponent,ArticleReadTimeComponent,SpinnerComponent],
  exports: [FeedComponent,FeedComponent,ArticleCellComponent,ArticleReadTimeComponent]
})
export class ArkeraLibModule {
}
