webpackJsonp([42],{1870:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s.d(t,"CoreCoursesMyOverviewPageModule",function(){return h});var o=s(0),r=s(4),i=s(1),n=s(1998),c=s(16),a=s(15),u=s(931),d=s(938),l=this&&this.__decorate||function(e,t,s,o){var r,i=arguments.length,n=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(n=(i<3?r(n):i>3?r(t,s,n):r(t,s))||n);return i>3&&n&&Object.defineProperty(t,s,n),n},h=function(){function e(){}return e=l([Object(o.I)({declarations:[n.a],imports:[c.a,a.a,u.a,d.a,r.l.forChild(n.a),i.b.forChild()]})],e)}()},1998:function(e,t,s){"use strict";s.d(t,"a",function(){return y});var o=s(0),r=s(4),i=s(12),n=s(2),c=s(8),a=s(6),u=s(41),d=s(250),l=s(21),h=s(104),f=s(5),v=(s.n(f),s(135)),p=this&&this.__decorate||function(e,t,s,o){var r,i=arguments.length,n=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(n=(i<3?r(n):i>3?r(t,s,n):r(t,s))||n);return i>3&&n&&Object.defineProperty(t,s,n),n},m=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(){function e(e,t,s,o,r,i,n,c,a){this.navCtrl=e,this.coursesProvider=t,this.domUtils=s,this.myOverviewProvider=o,this.courseHelper=r,this.sitesProvider=i,this.courseOptionsDelegate=n,this.eventsProvider=c,this.utils=a,this.tabsReady=!1,this.tabShown="courses",this.timeline={sort:"sortbydates",events:[],loaded:!1,canLoadMore:void 0},this.timelineCourses={courses:[],loaded:!1,canLoadMore:!1},this.courses={selected:"inprogress",loaded:!1,filter:"",past:[],inprogress:[],future:[]},this.categories={id:void 0,name:void 0},this.showFilter=!1,this.tabs=[],this.prefetchCoursesData={inprogress:{},past:{},future:{}},this.prefetchIconsInitialized=!1,this.courseIds="",this.loadSiteName()}return e.prototype.ionViewDidLoad=function(){var e=this;this.searchEnabled=!this.coursesProvider.isSearchCoursesDisabledInSite(),this.downloadAllCoursesEnabled=!this.coursesProvider.isDownloadCoursesDisabledInSite(),this.updateSiteObserver=this.eventsProvider.on(i.a.SITE_UPDATED,function(){var t=e.downloadAllCoursesEnabled;e.searchEnabled=!e.coursesProvider.isSearchCoursesDisabledInSite(),e.downloadAllCoursesEnabled=!e.coursesProvider.isDownloadCoursesDisabledInSite(),!t&&e.downloadAllCoursesEnabled&&e.courses.loaded&&e.initPrefetchCoursesIcons(),e.loadSiteName()}),this.courses.loaded||this.fetchMyOverviewCourses().finally(function(){e.courses.loaded=!0})},e.prototype.ionViewDidEnter=function(){this.tabsComponent&&this.tabsComponent.ionViewDidEnter()},e.prototype.ionViewDidLeave=function(){this.tabsComponent&&this.tabsComponent.ionViewDidLeave()},e.prototype.fetchMyOverviewTimeline=function(e){var t=this;return this.myOverviewProvider.getActionEventsByTimesort(e).then(function(e){t.timeline.events=e.events,t.timeline.canLoadMore=e.canLoadMore}).catch(function(e){t.domUtils.showErrorModalDefault(e,"Error getting my overview data.")})},e.prototype.fetchMyOverviewTimelineByCourses=function(){var e=this;return this.fetchUserCourses().then(function(t){var s,o=f().unix();if(t=t.filter(function(e){return e.startdate<=o&&(!e.enddate||e.enddate>=o)}),e.timelineCourses.courses=t,t.length>0)return s=t.map(function(e){return e.id}),e.myOverviewProvider.getActionEventsByCourses(s).then(function(t){e.timelineCourses.courses.forEach(function(e){e.events=t[e.id].events,e.canLoadMore=t[e.id].canLoadMore})})}).catch(function(t){e.domUtils.showErrorModalDefault(t,"Error getting my overview data.")})},e.prototype.fetchMyOverviewCourses=function(){var e=this;return this.fetchUserCourses().then(function(t){var s=f().unix(),o=[];e.courses.past=[],e.courses.inprogress=[],e.courses.future=[],t.forEach(function(t){t.startdate>s?e.courses.future.push(t):t.enddate&&t.enddate<s?e.courses.past.push(t):e.courses.inprogress.push(t),o.find(function(e){return e.id==t.category})||o.push({id:t.category,name:t.categoryname,courses:[]})}),o.forEach(function(e){t.forEach(function(t){e.id==t.category&&e.courses.push(t)})}),o.sort(function(e,t){return e.id-t.id}),e.filteredCategory=o,e.courses.filter="",e.showFilter=!1,e.filteredCourses=e.courses[e.courses.selected],e.initPrefetchCoursesIcons()}).catch(function(t){e.domUtils.showErrorModalDefault(t,"Error getting my overview data.")})},e.prototype.fetchUserCourses=function(){var e=this;return this.coursesProvider.getUserCourses(null,null,0).then(function(t){var s=[],o=t.map(function(e){return e.id});return e.coursesProvider.canGetAdminAndNavOptions()&&s.push(e.coursesProvider.getCoursesAdminAndNavOptions(o).then(function(e){t.forEach(function(t){t.navOptions=e.navOptions[t.id],t.admOptions=e.admOptions[t.id]})})),e.courseIds=o.join(","),e.courseIds&&e.coursesProvider.isGetCoursesByFieldAvailable()&&s.push(e.coursesProvider.getCoursesByField("ids",e.courseIds).then(function(s){s=e.utils.arrayToObject(s,"id"),t.forEach(function(e){e.imageThumb=!!(s[e.id]&&s[e.id].overviewfiles&&s[e.id].overviewfiles[0])&&s[e.id].overviewfiles[0].fileurl})})),Promise.all(s).then(function(){return t.sort(function(e,t){var s=e.fullname.toLowerCase(),o=t.fullname.toLowerCase();return s.localeCompare(o)})})})},e.prototype.switchFilter=function(){var e=this;this.showFilter=!this.showFilter,this.courses.filter="",this.filteredCourses=this.courses[this.courses.selected],this.showFilter&&setTimeout(function(){e.searchbar.setFocus()})},e.prototype.filterChanged=function(e){var t=e.target.value&&e.target.value.trim().toLowerCase();this.filteredCourses=t&&this.courses[this.courses.selected]?this.courses[this.courses.selected].filter(function(e){return e.fullname.toLowerCase().indexOf(t)>-1}):this.courses[this.courses.selected]},e.prototype.refreshMyOverview=function(e){var t=this,s=[];return"timeline"==this.tabShown&&(s.push(this.myOverviewProvider.invalidateActionEventsByTimesort()),s.push(this.myOverviewProvider.invalidateActionEventsByCourses())),s.push(this.coursesProvider.invalidateUserCourses()),s.push(this.courseOptionsDelegate.clearAndInvalidateCoursesOptions()),this.courseIds&&s.push(this.coursesProvider.invalidateCoursesByField("ids",this.courseIds)),Promise.all(s).finally(function(){switch(t.tabShown){case"timeline":switch(t.timeline.sort){case"sortbydates":return t.fetchMyOverviewTimeline();case"sortbycourses":return t.fetchMyOverviewTimelineByCourses()}break;case"courses":return t.prefetchIconsInitialized=!1,t.fetchMyOverviewCourses()}}).finally(function(){e.complete()})},e.prototype.switchSort=function(){var e=this;switch(this.timeline.sort){case"sortbydates":this.timeline.loaded||this.fetchMyOverviewTimeline().finally(function(){e.timeline.loaded=!0});break;case"sortbycourses":this.timelineCourses.loaded||this.fetchMyOverviewTimelineByCourses().finally(function(){e.timelineCourses.loaded=!0})}},e.prototype.tabChanged=function(e){var t=this;switch(this.tabShown=e,this.tabShown){case"timeline":this.timeline.loaded||this.fetchMyOverviewTimeline().finally(function(){t.timeline.loaded=!0});break;case"courses":this.courses.loaded||this.fetchMyOverviewCourses().finally(function(){t.courses.loaded=!0})}},e.prototype.loadMoreTimeline=function(){return this.fetchMyOverviewTimeline(this.timeline.canLoadMore)},e.prototype.loadMoreCourse=function(e){return this.myOverviewProvider.getActionEventsByCourse(e.id,e.canLoadMore).then(function(t){e.events=e.events.concat(t.events),e.canLoadMore=t.canLoadMore})},e.prototype.openSearch=function(){this.navCtrl.push("CoreCoursesSearchPage")},e.prototype.selectedChanged=function(){this.filteredCourses=this.courses[this.courses.selected]},e.prototype.prefetchCourses=function(){var e=this,t=this.courses.selected,s=this.prefetchCoursesData[t],o=s.icon;return s.icon="spinner",s.badge="",this.courseHelper.confirmAndPrefetchCourses(this.courses[t],function(e){s.badge=e.count+" / "+e.total}).then(function(){s.icon="refresh"}).catch(function(t){e.isDestroyed||(e.domUtils.showErrorModalDefault(t,"core.course.errordownloadingcourse",!0),s.icon=o)}).finally(function(){s.badge=""})},e.prototype.initPrefetchCoursesIcons=function(){var e=this;!this.prefetchIconsInitialized&&this.downloadAllCoursesEnabled&&(this.prefetchIconsInitialized=!0,Object.keys(this.prefetchCoursesData).forEach(function(t){!e.courses[t]||e.courses[t].length<2?e.prefetchCoursesData[t].icon="":e.courseHelper.determineCoursesStatus(e.courses[t]).then(function(s){var o=e.courseHelper.getCourseStatusIconAndTitleFromStatus(s).icon;"spinner"==o&&(o="cloud-download"),e.prefetchCoursesData[t].icon=o})}))},e.prototype.loadSiteName=function(){this.siteName=this.sitesProvider.getCurrentSite().getInfo().sitename},e.prototype.ngOnDestroy=function(){this.isDestroyed=!0,this.updateSiteObserver&&this.updateSiteObserver.off()},p([Object(o._9)(v.a),m("design:type",v.a)],e.prototype,"tabsComponent",void 0),p([Object(o._9)("searchbar"),m("design:type",r.v)],e.prototype,"searchbar",void 0),e=p([Object(o.m)({selector:"page-core-courses-my-overview",template:'<ion-header>\n    <ion-navbar>\n        <ion-title><core-format-text [text]="siteName"></core-format-text></ion-title>\n\n        <ion-buttons end>\n            <button *ngIf="searchEnabled" ion-button icon-only (click)="openSearch()" [attr.aria-label]="\'core.courses.searchcourses\' | translate">\n                <ion-icon name="search"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n   \n    <ion-refresher [enabled]="timeline.loaded || timelineCourses.loaded || courses.loaded" (ionRefresh)="refreshMyOverview($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]="courses.loaded" class="core-loading-center">\n        <core-empty-box *ngIf="courses[courses.selected].length == 0 && courses.selected == \'inprogress\'" image="assets/img/icons/courses.svg" [message]="\'core.courses.nocoursesinprogress\' | translate"></core-empty-box>\n        <core-empty-box *ngIf="courses[courses.selected].length == 0 && courses.selected == \'future\'" image="assets/img/icons/courses.svg" [message]="\'core.courses.nocoursesfuture\' | translate"></core-empty-box>\n        <core-empty-box *ngIf="courses[courses.selected].length == 0 && courses.selected == \'past\'" image="assets/img/icons/courses.svg" [message]="\'core.courses.nocoursespast\' | translate"></core-empty-box>\n        <div>\n            <core-courses-course-list-slide [categories]="filteredCategory">\n            </core-courses-course-list-slide>\n        </div>\n    </core-loading>\n\n</ion-content>'}),m("design:paramtypes",[r.q,u.a,c.a,d.a,l.a,n.a,h.a,i.a,a.a])],e)}()}});