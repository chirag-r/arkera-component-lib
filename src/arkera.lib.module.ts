import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from './arkera/components/feed/feed.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent]
})
export class ArkeraLibModule {
}
