webpackJsonp([82],{1825:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"AddonModForumIndexPageModule",function(){return f});var o=n(0),r=n(4),i=n(1),a=n(15),d=n(940),c=n(1949),u=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},f=function(){function e(){}return e=u([Object(o.I)({declarations:[c.a],imports:[a.a,d.a,r.l.forChild(c.a),i.b.forChild()]})],e)}()},1949:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n(0),r=n(4),i=n(409),a=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.module=e.get("module")||{},this.courseId=e.get("courseId"),this.title=this.module.name}return e.prototype.updateData=function(e){this.title=e.name||this.title},a([Object(o._9)(i.a),d("design:type",i.a)],e.prototype,"forumComponent",void 0),e=a([Object(o.m)({selector:"page-addon-mod-forum-index",template:'<ion-header>\n    <ion-navbar>\n        <ion-title><core-format-text [text]="title"></core-format-text></ion-title>\n\n        <ion-buttons end>\n            \x3c!-- The buttons defined by the component will be added in here. --\x3e\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<addon-mod-forum-index [module]="module" [courseId]="courseId" (dataRetrieved)="updateData($event)"></addon-mod-forum-index>\n'}),d("design:paramtypes",[r.r])],e)}()}});