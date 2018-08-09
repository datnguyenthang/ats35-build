webpackJsonp([72],{1834:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"AddonModLessonUserRetakePageModule",function(){return m});var o=n(0),a=n(4),s=n(1),r=n(16),i=n(15),d=n(66),l=n(1958),c=this&&this.__decorate||function(e,t,n,o){var a,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(r=(s<3?a(r):s>3?a(t,n,r):a(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},m=function(){function e(){}return e=c([Object(o.I)({declarations:[l.a],imports:[r.a,i.a,d.a,a.l.forChild(l.a),s.b.forChild()]})],e)}()},1958:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var o=n(0),a=n(4),s=n(1),r=n(2),i=n(8),d=n(11),l=n(22),c=n(26),m=n(95),p=n(941),u=this&&this.__decorate||function(e,t,n,o){var a,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(r=(s<3?a(r):s>3?a(t,n,r):a(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(){function e(e,t,n,o,a,s,r,i,d){this.textUtils=n,this.translate=o,this.domUtils=a,this.userProvider=s,this.timeUtils=r,this.lessonProvider=i,this.lessonHelper=d,this.component=m.a.COMPONENT,this.lessonId=e.get("lessonId"),this.courseId=e.get("courseId"),this.userId=e.get("userId")||t.getCurrentSiteUserId(),this.retakeNumber=e.get("retake")}return e.prototype.ngOnInit=function(){var e=this;this.fetchData().finally(function(){e.loaded=!0})},e.prototype.changeRetake=function(e){var t=this;this.loaded=!1,this.setRetake(e).catch(function(e){t.domUtils.showErrorModalDefault(e,"Error getting attempt.")}).finally(function(){t.loaded=!0})},e.prototype.doRefresh=function(e){this.refreshData().finally(function(){e.complete()})},e.prototype.fetchData=function(){var e=this;return this.lessonProvider.getLessonById(this.courseId,this.lessonId).then(function(t){return e.lesson=t,e.lessonProvider.getRetakesOverview(e.lesson.id)}).then(function(t){var n;if(t&&t.students)for(var o=0;o<t.students.length;o++)if(t.students[o].id==e.userId){n=t.students[o];break}return n?n.attempts&&n.attempts.length?(n.bestgrade=e.textUtils.roundToDecimals(n.bestgrade,2),n.attempts.forEach(function(t){e.retakeNumber==t.try&&(e.selectedRetake=e.retakeNumber),t.label=e.lessonHelper.getRetakeLabel(t)}),e.selectedRetake||(e.selectedRetake=n.attempts[n.attempts.length-1].try),e.userProvider.getProfile(n.id,e.courseId,!0).then(function(e){return n.profileimageurl=e.profileimageurl,n}).catch(function(){return n})):Promise.reject(e.translate.instant("addon.mod_lesson.cannotfindattempt")):Promise.reject(e.translate.instant("addon.mod_lesson.cannotfinduser"))}).then(function(t){return e.student=t,e.setRetake(e.selectedRetake)}).catch(function(t){e.domUtils.showErrorModalDefault(t,"Error getting data.",!0)})},e.prototype.refreshData=function(){var e=this,t=[];return t.push(this.lessonProvider.invalidateLessonData(this.courseId)),this.lesson&&(t.push(this.lessonProvider.invalidateRetakesOverview(this.lesson.id)),t.push(this.lessonProvider.invalidateUserRetakesForUser(this.lesson.id,this.userId))),Promise.all(t).catch(function(){}).then(function(){return e.fetchData()})},e.prototype.setRetake=function(e){var t=this;return this.selectedRetake=e,this.lessonProvider.getUserRetake(this.lessonId,e,this.userId).then(function(e){e&&-1!=e.completed&&(e.userstats.grade=t.textUtils.roundToDecimals(e.userstats.grade,2),e.userstats.timetakenReadable=t.timeUtils.formatTime(e.userstats.timetotake)),e&&e.answerpages&&e.answerpages.forEach(function(e){t.lessonProvider.answerPageIsContent(e)?(e.isContent=!0,e.answerdata&&e.answerdata.answers&&e.answerdata.answers.forEach(function(e){e[0]=t.lessonHelper.getContentPageAnswerDataFromHtml(e[0])})):t.lessonProvider.answerPageIsQuestion(e)&&(e.isQuestion=!0,e.answerdata&&e.answerdata.answers&&e.answerdata.answers.forEach(function(e){e[0]=t.lessonHelper.getQuestionPageAnswerDataFromHtml(e[0])}))}),t.retake=e})},e=u([Object(o.m)({selector:"page-addon-mod-lesson-user-retake",template:'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'addon.mod_lesson.detailedstats\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="loaded" (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-loading [hideUntil]="loaded">\n        <ion-list *ngIf="student">\n            \x3c!-- Student data. --\x3e\n            <a ion-item text-wrap core-user-link [userId]="student.id" [courseId]="courseId" [title]="student.fullname">\n                <ion-avatar *ngIf="student.profileimageurl" item-start>\n                    <img [src]="student.profileimageurl" [alt]="\'core.pictureof\' | translate:{$a: student.fullname}" core-external-content role="presentation">\n                </ion-avatar>\n                <h2>{{student.fullname}}</h2>\n                <core-progress-bar [progress]="student.bestgrade"></core-progress-bar>\n            </a>\n\n            \x3c!-- Retake selector if there is more than one retake. --\x3e\n            <ion-item text-wrap *ngIf="student.attempts && student.attempts.length > 1">\n                <ion-label id="addon-mod_lesson-retakeslabel">{{ \'addon.mod_lesson.attemptheader\' | translate }}</ion-label>\n                <ion-select [(ngModel)]="selectedRetake" (ionChange)="changeRetake(selectedRetake)" aria-labelledby="addon-mod_lesson-retakeslabel" interface="popover">\n                    <ion-option *ngFor="let retake of student.attempts" [value]="retake.try">{{retake.label}}</ion-option>\n                </ion-select>\n            </ion-item>\n\n            \x3c!-- Retake stats. --\x3e\n            <div *ngIf="retake && retake.userstats && retake.userstats.gradeinfo" class="addon-mod_lesson-userstats">\n                <ion-item text-wrap>\n                    <ion-row>\n                        <ion-col>\n                            <p class="item-heading">{{ \'addon.mod_lesson.grade\' | translate }}</p>\n                            <p>{{ \'core.percentagenumber\' | translate:{$a: retake.userstats.grade} }}</p>\n                        </ion-col>\n\n                        <ion-col>\n                            <p class="item-heading">{{ \'addon.mod_lesson.rawgrade\' | translate }}</p>\n                            <p>{{ retake.userstats.gradeinfo.earned }} / {{ retake.userstats.gradeinfo.total }}</p>\n                        </ion-col>\n                    </ion-row>\n                </ion-item>\n                <ion-item text-wrap>\n                    <p class="item-heading">{{ \'addon.mod_lesson.timetaken\' | translate }}</p>\n                    <p>{{ retake.userstats.timetakenReadable }}</p>\n                </ion-item>\n                <ion-item text-wrap>\n                    <p class="item-heading">{{ \'addon.mod_lesson.completed\' | translate }}</p>\n                    <p>{{ retake.userstats.completed * 1000 | coreFormatDate:"dfmediumdate" }}</p>\n                </ion-item>\n            </div>\n\n            \x3c!-- Not completed, no stats. --\x3e\n            <ion-item text-wrap *ngIf="retake && (!retake.userstats || !retake.userstats.gradeinfo)">\n                {{ \'addon.mod_lesson.notcompleted\' | translate }}\n            </ion-item>\n\n            \x3c!-- Pages. --\x3e\n            <ng-container *ngIf="retake">\n                \x3c!-- The "text-dimmed" class does nothing, but the same goes for the "dimmed" class in Moodle. --\x3e\n                <ion-card *ngFor="let page of retake.answerpages" class="addon-mod_lesson-answerpage" [ngClass]="{\'text-dimmed\': page.grayout}">\n                    <ion-card-header text-wrap>\n                        <h2>{{page.qtype}}: {{page.title}}</h2>\n                    </ion-card-header>\n                    <ion-item text-wrap>\n                        <p class="item-heading">{{ \'addon.mod_lesson.question\' | translate }}</p>\n                        <p><core-format-text [component]="component" [componentId]="lesson.coursemodule" [maxHeight]="50" [text]="page.contents"></core-format-text></p>\n                    </ion-item>\n                    <ion-item text-wrap>\n                        <p class="item-heading">{{ \'addon.mod_lesson.answer\' | translate }}</p>\n                    </ion-item>\n                    <ion-item text-wrap *ngIf="!page.answerdata || !page.answerdata.answers || !page.answerdata.answers.length">\n                        <p>{{ \'addon.mod_lesson.didnotanswerquestion\' | translate }}</p>\n                    </ion-item>\n                    <div *ngIf="page.answerdata && page.answerdata.answers && page.answerdata.answers.length" class="addon-mod_lesson-answer">\n                        <div *ngFor="let answer of page.answerdata.answers">\n                            <ion-item text-wrap *ngIf="page.isContent">\n                                \x3c!-- Content page, display a button and the content. --\x3e\n                                <ion-row>\n                                    <ion-col>\n                                        <button ion-button block color="light" [disabled]="true">{{ answer[0].buttonText }}</button>\n                                    </ion-col>\n                                    <ion-col>\n                                        <p [innerHTML]="answer[0].content"></p>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-item>\n\n                            <div *ngIf="page.isQuestion">\n                                \x3c!-- Question page, show the right input for the answer. --\x3e\n\n                                \x3c!-- Truefalse or matching. --\x3e\n                                <ion-item text-wrap *ngIf="answer[0].isCheckbox" [ngClass]="{\'addon-mod_lesson-highlight\': answer[0].highlight}">\n                                    <ion-label>\n                                        <p><core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[0].content"></core-format-text></p>\n                                        <ion-badge *ngIf="answer[1]" color="dark">\n                                            <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[1]"></core-format-text>\n                                        </ion-badge>\n                                    </ion-label>\n                                    <ion-checkbox [attr.name]="answer[0].name" [ngModel]="answer[0].checked" [disabled]="true" item-end>\n                                    </ion-checkbox>\n                                </ion-item>\n\n                                \x3c!-- Short answer or numeric. --\x3e\n                                <ion-item text-wrap *ngIf="answer[0].isText">\n                                    <p>{{ answer[0].value }}</p>\n                                    <ion-badge *ngIf="answer[1]" color="dark">\n                                        <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[1]"></core-format-text>\n                                    </ion-badge>\n                                </ion-item>\n\n                                \x3c!-- Matching. --\x3e\n                                <ion-item text-wrap *ngIf="answer[0].isSelect">\n                                    <ion-row>\n                                        <ion-col>\n                                            <p><core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]=" answer[0].content"></core-format-text></p>\n                                        </ion-col>\n                                        <ion-col>\n                                            <p>{{answer[0].value}}</p>\n                                            <ion-badge *ngIf="answer[1]" color="dark">\n                                                <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[1]"></core-format-text>\n                                            </ion-badge>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-item>\n\n                                \x3c!-- Essay or couldn\'t determine. --\x3e\n                                <ion-item text-wrap *ngIf="!answer[0].isCheckbox && !answer[0].isText && !answer[0].isSelect">\n                                    <p><core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[0]"></core-format-text></p>\n                                    <ion-badge *ngIf="answer[1]" color="dark">\n                                        <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[1]"></core-format-text>\n                                    </ion-badge>\n                                </ion-item>\n                            </div>\n\n                            <ion-item text-wrap *ngIf="!page.isContent && !page.isQuestion">\n                                \x3c!-- Another page (end of branch, ...). --\x3e\n                                <p><core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[0]"></core-format-text></p>\n                                <ion-badge *ngIf="answer[1]" color="dark">\n                                    <core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="answer[1]"></core-format-text>\n                                </ion-badge>\n                            </ion-item>\n                        </div>\n\n                        <ion-item text-wrap *ngIf="page.answerdata.response">\n                            <p class="item-heading">{{ \'addon.mod_lesson.response\' | translate }}</p>\n                            <p><core-format-text [component]="component" [componentId]="lesson.coursemodule" [text]="page.answerdata.response"></core-format-text></p>\n                        </ion-item>\n                        <ion-item text-wrap *ngIf="page.answerdata.score">\n                            <p>{{page.answerdata.score}}</p>\n                        </ion-item>\n                    </div>\n                </ion-card>\n            </ng-container>\n        </ion-list>\n    </core-loading>\n</ion-content>\n'}),f("design:paramtypes",[a.r,r.a,d.a,s.c,i.a,c.a,l.a,m.a,p.a])],e)}()}});