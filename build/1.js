webpackJsonp([1],{1801:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s.d(t,"AddonMessagesIndexPageModule",function(){return d});var n=s(0),o=s(4),i=s(1),r=s(1925),a=s(16),c=s(1907),l=this&&this.__decorate||function(e,t,s,n){var o,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(i<3?o(r):i>3?o(t,s,r):o(t,s))||r);return i>3&&r&&Object.defineProperty(t,s,r),r},d=function(){function e(){}return e=l([Object(n.I)({declarations:[r.a],imports:[a.a,c.a,o.l.forChild(r.a),i.b.forChild()]})],e)}()},1907:function(e,t,s){"use strict";s.d(t,"a",function(){return f});var n=s(0),o=s(17),i=s(4),r=s(1),a=s(16),c=s(15),l=s(66),d=s(1908),h=s(1909),u=this&&this.__decorate||function(e,t,s,n){var o,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(i<3?o(r):i>3?o(t,s,r):o(t,s))||r);return i>3&&r&&Object.defineProperty(t,s,r),r},f=function(){function e(){}return e=u([Object(n.I)({declarations:[d.a,h.a],imports:[o.b,i.k,r.b.forChild(),a.a,c.a,l.a],providers:[],exports:[d.a,h.a]})],e)}()},1908:function(e,t,s){"use strict";s.d(t,"a",function(){return p});var n=s(0),o=s(4),i=s(1),r=s(12),a=s(2),c=s(103),l=s(8),d=s(6),h=s(9),u=s(148),f=this&&this.__decorate||function(e,t,s,n){var o,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(i<3?o(r):i>3?o(t,s,r):o(t,s))||r);return i>3&&r&&Object.defineProperty(t,s,r),r},g=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(e,t,s,n,o,i,r,a,l,d){var h=this;this.eventsProvider=e,this.messagesProvider=n,this.domUtils=o,this.appProvider=r,this.loaded=!1,this.search={enabled:!1,showResults:!1,results:[],loading:"",text:""},this.search.loading=s.instant("core.searching"),this.loadingMessages=s.instant("core.loading"),this.siteId=t.getCurrentSiteId(),this.newMessagesObserver=e.on(c.a.NEW_MESSAGE_EVENT,function(e){if(e.userId){var t=h.discussions.find(function(t){return t.message.user==e.userId});void 0===t?(h.loaded=!1,h.refreshData().finally(function(){h.loaded=!0})):(t.message.message=e.message,t.message.timecreated=e.timecreated)}},this.siteId),this.readChangedObserver=e.on(c.a.READ_CHANGED_EVENT,function(e){if(e.userId){var t=h.discussions.find(function(t){return t.message.user==e.userId});void 0!==t&&(t.unread=!1,h.messagesProvider.invalidateDiscussionsCache())}},this.siteId),this.cronObserver=e.on(c.a.READ_CRON_EVENT,function(e){h.refreshData()},this.siteId),this.appResumeSubscription=a.resume.subscribe(function(){h.loaded&&(h.loaded=!1,h.refreshData())}),this.discussionUserId=i.get("discussionUserId")||!1,this.pushObserver=d.on("receive").subscribe(function(e){l.isFalseOrZero(e.notif)&&e.site==h.siteId&&h.refreshData()})}return e.prototype.ngOnInit=function(){var e=this;this.discussionUserId&&this.gotoDiscussion(this.discussionUserId),this.fetchData().then(function(){!e.discussionUserId&&e.discussions.length>0&&e.gotoDiscussion(e.discussions[0].message.user,void 0,!0)})},e.prototype.refreshData=function(e){var t=this;return this.messagesProvider.invalidateDiscussionsCache().then(function(){return t.fetchData().finally(function(){e&&(t.eventsProvider.trigger(c.a.READ_CHANGED_EVENT,void 0,t.siteId),e.complete())})})},e.prototype.fetchData=function(){var e=this;return this.loadingMessage=this.loadingMessages,this.search.enabled=this.messagesProvider.isSearchMessagesEnabled(),this.messagesProvider.getDiscussions().then(function(t){var s=[];for(var n in t)t[n].unread=!!t[n].unread,s.push(t[n]);e.discussions=s.sort(function(e,t){return t.message.timecreated-e.message.timecreated})}).catch(function(t){e.domUtils.showErrorModalDefault(t,"addon.messages.errorwhileretrievingdiscussions",!0)}).finally(function(){e.loaded=!0})},e.prototype.clearSearch=function(){var e=this;this.loaded=!1,this.search.showResults=!1,this.search.text="",this.fetchData().finally(function(){e.loaded=!0})},e.prototype.searchMessage=function(e){var t=this;return this.appProvider.closeKeyboard(),this.loaded=!1,this.loadingMessage=this.search.loading,this.messagesProvider.searchMessages(e).then(function(e){t.search.showResults=!0,t.search.results=e}).catch(function(e){t.domUtils.showErrorModalDefault(e,"addon.messages.errorwhileretrievingmessages",!0)}).finally(function(){t.loaded=!0})},e.prototype.gotoDiscussion=function(e,t,s){void 0===s&&(s=!1),this.discussionUserId=e;var n={discussion:e,onlyWithSplitView:s};t&&(n.message=t),this.eventsProvider.trigger(c.a.SPLIT_VIEW_LOAD_EVENT,n,this.siteId)},e.prototype.ngOnDestroy=function(){this.newMessagesObserver&&this.newMessagesObserver.off(),this.readChangedObserver&&this.readChangedObserver.off(),this.cronObserver&&this.cronObserver.off(),this.appResumeSubscription&&this.appResumeSubscription.unsubscribe(),this.pushObserver&&this.pushObserver.unsubscribe()},e=f([Object(n.m)({selector:"addon-messages-discussions",template:'<ion-content>\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-search-box *ngIf="search.enabled" (onSubmit)="searchMessage($event)" (onClear)="clearSearch($event)" [placeholder]=" \'addon.messages.message\' | translate" autocorrect="off" spellcheck="false" lengthCheck="2" [disabled]="!loaded"></core-search-box>\n\n    <core-loading [hideUntil]="loaded" [message]="loadingMessage">\n\n        <core-empty-box *ngIf="(!discussions || discussions.length <= 0) && !search.showResults" icon="chatbubbles" [message]="\'addon.messages.nomessages\' | translate"></core-empty-box>\n\n        <core-empty-box *ngIf="(!search.results || search.results.length <= 0) && search.showResults" icon="search" [message]="\'core.noresults\' | translate"></core-empty-box>\n\n        <ion-list *ngIf="search.showResults" no-margin>\n            <ion-item-divider color="light">\n                <h2>{{ \'core.searchresults\' | translate }}</h2>\n                <ion-note item-end>{{ search.results.length }}</ion-note>\n            </ion-item-divider>\n            <a ion-item text-wrap *ngFor="let result of search.results" [title]="result.fullname" (click)="gotoDiscussion(result.userid, result.messageid)" [class.core-split-item-selected]="result.userid == discussionUserId" detail-none>\n                <ion-avatar item-start>\n                    <img src="{{result.profileimageurl}}" [alt]="\'core.pictureof\' | translate:{$a: result.fullname}" core-external-content onError="this.src=\'assets/img/user-avatar.png\'">\n                </ion-avatar>\n                <h2><core-format-text [text]="result.fullname"></core-format-text></h2>\n                <p><core-format-text clean="true" singleLine="true" [text]="result.lastmessage"></core-format-text></p>\n            </a>\n        </ion-list>\n\n        <ion-list *ngIf="!search.showResults" no-margin>\n            <a ion-item text-wrap *ngFor="let discussion of discussions" [title]="discussion.fullname" (click)="gotoDiscussion(discussion.message.user)" [class.core-split-item-selected]="discussion.message.user == discussionUserId" detail-none>\n                <ion-avatar item-start>\n                    <img src="{{discussion.profileimageurl}}" [alt]="\'core.pictureof\' | translate:{$a: discussion.fullname}" core-external-content onError="this.src=\'assets/img/user-avatar.png\'">\n                </ion-avatar>\n                <h2>\n                    <core-format-text [text]="discussion.fullname"></core-format-text>\n                    <ion-note *ngIf="discussion.message.timecreated > 0 || discussion.unread">\n                        <span *ngIf="discussion.unread" class="core-primary-circle"></span>\n                        <span *ngIf="discussion.message.timecreated > 0">{{discussion.message.timecreated / 1000 | coreDateDayOrTime}}</span>\n                    </ion-note>\n                </h2>\n                <p><core-format-text clean="true" singleLine="true" [text]="discussion.message.message"></core-format-text></p>\n            </a>\n        </ion-list>\n    </core-loading>\n</ion-content>\n'}),g("design:paramtypes",[r.a,a.a,i.c,c.a,l.a,o.r,h.a,o.s,d.a,u.a])],e)}()},1909:function(e,t,s){"use strict";s.d(t,"a",function(){return f});var n=s(0),o=s(4),i=s(1),r=s(2),a=s(103),c=s(8),l=s(9),d=s(12),h=this&&this.__decorate||function(e,t,s,n){var o,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(i<3?o(r):i>3?o(t,s,r):o(t,s))||r);return i>3&&r&&Object.defineProperty(t,s,r),r},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(e,t,s,n,o,i,r){this.appProvider=s,this.messagesProvider=n,this.domUtils=o,this.eventsProvider=r,this.noSearchTypes=["online","offline","blocked","strangers"],this.loaded=!1,this.contactTypes=this.noSearchTypes,this.searchType="search",this.loadingMessage="",this.hasContacts=!1,this.contacts={search:[]},this.searchString="",this.currentUserId=e.getCurrentSiteUserId(),this.siteId=e.getCurrentSiteId(),this.searchingMessages=t.instant("core.searching"),this.loadingMessages=t.instant("core.loading"),this.loadingMessage=this.loadingMessages,this.discussionUserId=i.get("discussionUserId")||!1}return e.prototype.ngOnInit=function(){var e=this;this.discussionUserId&&this.gotoDiscussion(this.discussionUserId),this.fetchData().then(function(){if(!e.discussionUserId&&e.hasContacts){var t=void 0;for(var s in e.contacts)if(e.contacts[s].length>0){t=e.contacts[s][0];break}t&&e.gotoDiscussion(t.id,!0)}}).finally(function(){e.loaded=!0})},e.prototype.refreshData=function(e){var t=this;return(this.searchString?this.performSearch(this.searchString):this.messagesProvider.invalidateAllContactsCache(this.currentUserId).then(function(){return t.fetchData()})).finally(function(){e.complete()})},e.prototype.fetchData=function(){var e=this;return this.loadingMessage=this.loadingMessages,this.messagesProvider.getAllContacts().then(function(t){for(var s in t)e.contacts[s]=t[s].length>0?e.sortUsers(t[s]):[];e.clearSearch()}).catch(function(t){e.domUtils.showErrorModalDefault(t,"addon.messages.errorwhileretrievingcontacts",!0)})},e.prototype.sortUsers=function(e){return e.sort(function(e,t){var s=e.fullname.toLowerCase(),n=t.fullname.toLowerCase();return s.localeCompare(n)})},e.prototype.clearSearch=function(){this.searchString="",this.contactTypes=this.noSearchTypes,this.hasContacts=!1;for(var e in this.contacts)if(this.contacts[e].length>0)return void(this.hasContacts=!0)},e.prototype.search=function(e){var t=this;return this.appProvider.closeKeyboard(),this.loaded=!1,this.loadingMessage=this.searchingMessages,this.performSearch(e).finally(function(){t.loaded=!0})},e.prototype.performSearch=function(e){var t=this;return this.messagesProvider.searchContacts(e).then(function(s){t.hasContacts=s.length>0,t.searchString=e,t.contactTypes=["search"],t.contacts.search=t.sortUsers(s)}).catch(function(e){t.domUtils.showErrorModalDefault(e,"addon.messages.errorwhileretrievingcontacts",!0)})},e.prototype.gotoDiscussion=function(e,t){void 0===t&&(t=!1),this.discussionUserId=e;this.eventsProvider.trigger(a.a.SPLIT_VIEW_LOAD_EVENT,{discussion:e,onlyWithSplitView:t},this.siteId)},e=h([Object(n.m)({selector:"addon-messages-contacts",template:'<ion-content>\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-search-box (onSubmit)="search($event)" (onClear)="clearSearch($event)" [placeholder]=" \'addon.messages.contactname\' | translate" autocorrect="off" spellcheck="false" lengthCheck="2" [disabled]="!loaded"></core-search-box>\n\n    <core-loading [hideUntil]="loaded" [message]="loadingMessage">\n        <core-empty-box *ngIf="!hasContacts && searchString == \'\'" icon="person" [message]="\'addon.messages.contactlistempty\' | translate"></core-empty-box>\n\n        <core-empty-box *ngIf="!hasContacts && searchString != \'\'" icon="person" [message]="\'addon.messages.nousersfound\' | translate"></core-empty-box>\n\n        <ion-list *ngFor="let contactType of contactTypes" no-margin>\n            <ng-container *ngIf="contacts[contactType] && (contacts[contactType].length > 0 || contactType === searchType)">\n                <ion-item-divider color="light">\n                    <h2>{{ \'addon.messages.type_\' + contactType | translate }}</h2>\n                    <ion-note item-end>{{ contacts[contactType].length }}</ion-note>\n                </ion-item-divider>\n                <ng-container *ngFor="let contact of contacts[contactType]">\n                    \x3c!-- Don\'t show deleted users --\x3e\n                    <a ion-item text-wrap *ngIf="contact.profileimageurl || contact.profileimageurlsmall"  [title]="contact.fullname" (click)="gotoDiscussion(contact.id)" [class.core-split-item-selected]="contact.id == discussionUserId" detail-none>\n                        <ion-avatar item-start>\n                            <img src="{{contact.profileimageurl || contact.profileimageurlsmall}}" [alt]="\'core.pictureof\' | translate:{$a: contact.fullname}" core-external-content onError="this.src=\'assets/img/user-avatar.png\'">\n                        </ion-avatar>\n                        <h2><core-format-text [text]="contact.fullname"></core-format-text></h2>\n                    </a>\n                </ng-container>\n            </ng-container>\n        </ion-list>\n    </core-loading>\n</ion-content>\n'}),u("design:paramtypes",[r.a,i.c,l.a,a.a,c.a,o.r,d.a])],e)}()},1925:function(e,t,s){"use strict";s.d(t,"a",function(){return h});var n=s(0),o=s(12),i=s(2),r=s(103),a=s(133),c=s(135),l=this&&this.__decorate||function(e,t,s,n){var o,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(i<3?o(r):i>3?o(t,s,r):o(t,s))||r);return i>3&&r&&Object.defineProperty(t,s,r),r},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(){function e(e,t){var s=this;this.siteId=t.getCurrentSiteId(),this.loadSplitViewObserver=e.on(r.a.SPLIT_VIEW_LOAD_EVENT,function(e){!e.discussion||!s.splitviewCtrl.isOn()&&e.onlyWithSplitView||s.gotoDiscussion(e.discussion,e.message)},this.siteId)}return e.prototype.gotoDiscussion=function(e,t){var s={userId:e};t&&(s.message=t),this.splitviewCtrl.push("AddonMessagesDiscussionPage",s)},e.prototype.ionViewDidEnter=function(){this.tabsComponent&&this.tabsComponent.ionViewDidEnter()},e.prototype.ionViewDidLeave=function(){this.tabsComponent&&this.tabsComponent.ionViewDidLeave()},e.prototype.ngOnDestroy=function(){this.loadSplitViewObserver&&this.loadSplitViewObserver.off()},l([Object(n._9)(a.a),d("design:type",a.a)],e.prototype,"splitviewCtrl",void 0),l([Object(n._9)(c.a),d("design:type",c.a)],e.prototype,"tabsComponent",void 0),e=l([Object(n.m)({selector:"page-addon-messages-index",template:'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'addon.messages.messages\' | translate }}</ion-title>\n        <ion-buttons end></ion-buttons>\n    </ion-navbar>\n</ion-header>\n<core-split-view>\n    <ion-content>\n        <core-tabs>\n            <core-tab [title]="\'addon.messages.messages\' | translate" icon="chatbubbles">\n                <ng-template>\n                    <addon-messages-discussions></addon-messages-discussions>\n                </ng-template>\n            </core-tab>\n            <core-tab [title]="\'addon.messages.contacts\' | translate" icon="person">\n                <ng-template>\n                    <addon-messages-contacts></addon-messages-contacts>\n                </ng-template>\n            </core-tab>\n        </core-tabs>\n    </ion-content>\n</core-split-view>'}),d("design:paramtypes",[o.a,i.a])],e)}()}});