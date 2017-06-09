import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from './arkera/components/feed/feed.component';
import {FeedListComponent} from './arkera/components/feed-list/feed-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeedComponent,FeedListComponent],
  exports: [FeedComponent,FeedListComponent]
})
export class ArkeraLibModule {
}
