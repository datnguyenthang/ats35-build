webpackJsonp([101],{1805:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"AddonModAssignIndexPageModule",function(){return f});var o=n(0),r=n(4),i=n(1),a=n(15),d=n(933),c=n(1929),s=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},f=function(){function e(){}return e=s([Object(o.I)({declarations:[c.a],imports:[a.a,d.a,r.l.forChild(c.a),i.b.forChild()]})],e)}()},1929:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n(0),r=n(4),i=n(400),a=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.module=e.get("module")||{},this.courseId=e.get("courseId"),this.title=this.module.name}return e.prototype.updateData=function(e){this.title=e.name||this.title},a([Object(o._9)(i.a),d("design:type",i.a)],e.prototype,"assignComponent",void 0),e=a([Object(o.m)({selector:"page-addon-mod-assign-index",template:'<ion-header>\n    <ion-navbar>\n        <ion-title><core-format-text [text]="title"></core-format-text></ion-title>\n\n        <ion-buttons end>\n            \x3c!-- The buttons defined by the component will be added in here. --\x3e\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="assignComponent.loaded" (ionRefresh)="assignComponent.doRefresh($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n\n    <addon-mod-assign-index [module]="module" [courseId]="courseId" (dataRetrieved)="updateData($event)"></addon-mod-assign-index>\n</ion-content>\n'}),d("design:paramtypes",[r.r])],e)}()}});