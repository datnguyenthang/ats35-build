webpackJsonp([60],{1849:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"AddonModWikiEditPageModule",function(){return u});var n=i(0),o=i(4),r=i(1),s=i(16),a=i(15),d=i(1975),c=this&&this.__decorate||function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},u=function(){function t(){}return t=c([Object(n.I)({declarations:[d.a],imports:[s.a,a.a,o.l.forChild(d.a),r.b.forChild()]})],t)}()},1975:function(t,e,i){"use strict";i.d(e,"a",function(){return v});var n=i(0),o=i(4),r=i(20),s=i(1),a=i(12),d=i(2),c=i(45),u=i(8),l=i(11),h=i(10),f=i(21),g=i(151),p=i(201),I=i(261),k=this&&this.__decorate||function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},w=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},v=function(){function t(t,e,i,n,o,r,s,a,d,c,u,l,h,f){this.navCtrl=i,this.sitesProvider=n,this.syncProvider=o,this.domUtils=r,this.translate=s,this.courseProvider=a,this.eventsProvider=d,this.wikiProvider=c,this.wikiOffline=u,this.wikiSync=l,this.textUtils=h,this.courseHelper=f,this.component=g.a.COMPONENT,this.forceLeave=!1,this.isDestroyed=!1,this.module=t.get("module")||{},this.courseId=t.get("courseId"),this.subwikiId=t.get("subwikiId"),this.wikiId=t.get("wikiId"),this.pageId=t.get("pageId"),this.section=t.get("section"),this.groupId=t.get("groupId"),this.userId=t.get("userId");var p=t.get("pageTitle");p=p?p.replace(/\+/g," "):"",this.initialSubwikiId=this.subwikiId,this.componentId=this.module.id,this.canEditTitle=!p,this.title=p?this.translate.instant("addon.mod_wiki.editingpage",{$a:p}):this.translate.instant("addon.mod_wiki.newpagehdr"),this.blockId=this.wikiSync.getSubwikiBlockId(this.subwikiId,this.wikiId,this.userId,this.groupId),this.contentControl=e.control(""),this.pageForm=e.group({title:p}),this.pageForm.addControl("text",this.contentControl),this.syncProvider.blockOperation(this.component,this.blockId)}return t.prototype.ngOnInit=function(){var t=this;this.fetchWikiPageData().then(function(e){if(e&&t.blockId&&!t.isDestroyed){var i=t.wikiSync.getSubwikiBlockId(t.subwikiId,t.wikiId,t.userId,t.groupId);i!=t.blockId&&(t.syncProvider.unblockOperation(t.component,t.blockId),t.blockId=i,t.syncProvider.blockOperation(t.component,t.blockId))}}).finally(function(){t.loaded=!0})},t.prototype.fetchWikiPageData=function(){var t,e=this,i=!1;if(this.pageId)this.canEditTitle=!1,this.editing=!0,this.editOffline=!1,t=this.wikiProvider.getPageContents(this.pageId).then(function(t){return e.pageForm.controls.title.setValue(t.title),e.wikiId=t.wikiid,e.subwikiId=t.subwikiid,e.title=e.translate.instant("addon.mod_wiki.editingpage",{$a:t.title}),e.groupId=t.groupid,e.userId=t.userid,i=t.caneditpage,e.wikiSync.waitForSync(e.blockId)}).then(function(){return e.wikiProvider.getSubwikiFiles(e.wikiId,e.groupId,e.userId)}).then(function(t){return e.subwikiFiles=t,e.wikiProvider.getPageForEditing(e.pageId,e.section)}).then(function(t){var n=e.textUtils.replacePluginfileUrls(t.content,e.subwikiFiles);e.contentControl.setValue(n),e.originalContent=n,e.version=t.version,i&&(e.renewLockInterval=setInterval(function(){e.renewLock()},g.a.RENEW_LOCK_TIME))});else{var n=this.pageForm.controls.title.value;t=this.wikiSync.waitForSync(this.blockId),n?t=t.then(function(t){if(t){var i=t.created.find(function(t){return t.title==n});if(i&&i.pageId>0)return e.pageId=i.pageId,e.fetchWikiPageData()}return e.wikiOffline.getNewPage(n,e.subwikiId,e.wikiId,e.userId,e.groupId)}).then(function(t){e.contentControl.setValue(t.cachedcontent),e.originalContent=t.cachedcontent,e.editOffline=!0}).catch(function(){e.editOffline=!1}):this.editOffline=!1,t.then(function(){e.editing=!1,i=!!e.blockId})}return t.then(function(){return!0}).catch(function(t){return e.domUtils.showErrorModalDefault(t,"Error getting wiki data."),e.forceLeavePage(),!1}).finally(function(){i||(e.domUtils.showAlert(e.translate.instant("core.notice"),e.translate.instant("addon.mod_wiki.cannoteditpage")),e.forceLeavePage())})},t.prototype.forceLeavePage=function(){this.forceLeave=!0,this.navCtrl.pop()},t.prototype.goToNewOfflinePage=function(t){this.courseId&&(this.module.id||this.wikiId)?this.editOffline&&!this.previousViewPageIsDifferentOffline(t)||(this.pageParamsToLoad={module:this.module,courseId:this.courseId,pageId:null,pageTitle:t,wikiId:this.wikiId,subwikiId:this.subwikiId,userId:this.userId,groupId:this.groupId}):this.domUtils.showAlert(this.translate.instant("core.success"),this.translate.instant("core.datastoredoffline")),this.forceLeavePage()},t.prototype.gotoPage=function(t){var e=this;return this.retrieveModuleInfo(this.wikiId).then(function(){var i=!1;e.initialSubwikiId&&(!e.editing&&e.editOffline&&e.previousViewPageIsDifferentOffline(t)?i=!0:!e.editOffline&&e.previousViewIsDifferentPageOnline()&&(i=!0)),i&&(e.pageParamsToLoad={module:e.module,courseId:e.courseId,pageId:e.pageId,pageTitle:t,wikiId:e.wikiId,subwikiId:e.subwikiId,userId:e.userId,groupId:e.groupId}),e.forceLeavePage()}).catch(function(){e.forceLeavePage()})},t.prototype.hasDataChanged=function(){var t=this.pageForm.value;return!(this.originalContent==t.text||!this.editing&&!t.text&&!t.title)},t.prototype.ionViewCanLeave=function(){return!!this.forceLeave||(!this.hasDataChanged()||this.domUtils.showConfirm(this.translate.instant("core.confirmcanceledit")))},t.prototype.ionViewDidLeave=function(){this.pageParamsToLoad&&this.navCtrl.push("AddonModWikiIndexPage",this.pageParamsToLoad)},t.prototype.previousViewIsDifferentPageOnline=function(){var t=this.navCtrl.getPrevious();return!this.editing||"AddonModWikiIndexPage"!=t.component.name||t.data.module.id!=this.module.id||t.data.pageId!=this.pageId},t.prototype.previousViewPageIsDifferentOffline=function(t){var e=this.navCtrl.getPrevious();if("AddonModWikiIndexPage"!=e.component.name||e.data.module.id!=this.module.id||e.data.wikiId!=this.wikiId||e.data.pageTitle!=t)return!0;var i=parseInt(e.data.subwikiId,10)||0;if(i>0&&this.subwikiId>0)return i!=this.subwikiId;var n=parseInt(e.data.userId,10)||0,o=parseInt(e.data.groupId,10)||0;return this.userId!=n||this.groupId!=o},t.prototype.save=function(){var t,e=this,i=this.pageForm.value,n=i.title,o=this.domUtils.showModalLoading("core.sending",!0),r=i.text;if(r=this.textUtils.restorePluginfileUrls(r,this.subwikiFiles),r=this.textUtils.formatHtmlLines(r),this.editing)t=this.wikiProvider.editPage(this.pageId,r,this.section).then(function(){return e.wikiProvider.invalidatePage(e.pageId).then(function(){return e.gotoPage(n)})});else{if(!n)return this.domUtils.showAlert(this.translate.instant("core.notice"),this.translate.instant("addon.mod_wiki.titleshouldnotbeempty")),void o.dismiss();t=(t=this.editOffline?Promise.resolve():this.wikiOffline.getNewPage(n,this.subwikiId,this.wikiId,this.userId,this.groupId).then(function(){return Promise.reject(e.translate.instant("addon.mod_wiki.pageexists"))},function(){})).then(function(){var t=e.wikiId||e.module&&e.module.instance;return e.wikiProvider.newPage(n,r,e.subwikiId,t,e.userId,e.groupId).then(function(i){if(i>0)return e.pageId=i,e.wikiProvider.getPageContents(e.pageId).then(function(i){var o=[];return t=parseInt(i.wikiid,10),e.subwikiId||o.push(e.wikiProvider.invalidateSubwikis(t)),e.subwikiId=parseInt(i.subwikiid,10),e.userId=parseInt(i.userid,10),e.groupId=parseInt(i.groupid,10),o.push(e.wikiProvider.invalidateSubwikiPages(t)),Promise.all(o).then(function(){return e.gotoPage(n)})}).finally(function(){e.eventsProvider.trigger(g.a.PAGE_CREATED_EVENT,{pageId:e.pageId,subwikiId:e.subwikiId,pageTitle:n},e.sitesProvider.getCurrentSiteId())});e.goToNewOfflinePage(n)})})}return t.catch(function(t){e.domUtils.showErrorModalDefault(t,"Error saving wiki data.")}).finally(function(){o.dismiss()})},t.prototype.renewLock=function(){var t=this;this.wikiProvider.getPageForEditing(this.pageId,this.section,!0).then(function(e){e.version&&t.version!=e.version&&(t.wrongVersionLock=!0)})},t.prototype.retrieveModuleInfo=function(t){var e=this;if(this.module.id&&this.courseId)return Promise.resolve();return(this.module.id?Promise.resolve(this.module):this.courseProvider.getModuleBasicInfoByInstance(t,"wiki")).then(function(i){if(e.module=i,e.componentId=e.module.id,!e.courseId&&e.module.course)e.courseId=e.module.course;else if(!e.courseId)return e.courseHelper.getModuleCourseIdByInstance(t,"wiki").then(function(t){e.courseId=t})})},t.prototype.ngOnDestroy=function(){this.isDestroyed=!0,clearInterval(this.renewLockInterval),this.blockId&&this.syncProvider.unblockOperation(this.component,this.blockId)},t=k([Object(n.m)({selector:"page-addon-mod-wiki-edit",template:'<ion-header>\n    <ion-navbar>\n        <ion-title><core-format-text [text]="title"></core-format-text></ion-title>\n\n        <ion-buttons end>\n            <button ion-button clear (click)="save()" [attr.aria-label]="\'core.save\' | translate">\n                {{ \'core.save\' | translate }}\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]="loaded">\n        <form ion-list [formGroup]="pageForm">\n            <ion-item text-wrap *ngIf="canEditTitle" class="item-title">\n                <ion-input name="title" type="text" [placeholder]="\'addon.mod_wiki.newpagetitle\' | translate" [formControlName]="\'title\'"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <core-rich-text-editor item-content [control]="contentControl" [placeholder]="\'core.content\' | translate" name="wiki_page_content" [component]="component" [componentId]="componentId"></core-rich-text-editor>\n            </ion-item>\n\n            <ion-item *ngIf="wrongVersionLock" text-center class="addon-mod_wiki-wrongversionlock" >\n                <ion-badge color="danger" padding>{{ \'addon.mod_wiki.wrongversionlock\' | translate }}</ion-badge>\n            </ion-item>\n        </form>\n    </core-loading>\n</ion-content>\n'}),w("design:paramtypes",[o.r,r.a,o.q,d.a,c.a,u.a,s.c,h.a,a.a,g.a,p.a,I.a,l.a,f.a])],t)}()}});