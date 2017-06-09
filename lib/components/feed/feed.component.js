var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var FeedComponent = (function () {
    function FeedComponent() {
        this.name = 'Chirag Rajput';
    }
    return FeedComponent;
}());
FeedComponent = __decorate([
    Component({
        selector: 'ak-feed',
        template: "\n    <hr>\n    <span>1 min read</span>\n    <div>\n      Chinese economy to grow 6.7% in 2017,as consumption still expands: J.p.Morgan\n    </div>\n    <img src=\"https://images.mapsofworld.com/around-the-world/Chinese-economy-faces-tough-times.jpg\"/>\n    <div>\n      YOU'VE SJOEN INTEREST IN J.p.MORGAN\n    </div>\n  "
    })
], FeedComponent);
export { FeedComponent };

//# sourceMappingURL=feed.component.js.map
