if (self.CavalryLogger) { CavalryLogger.start_js(["HR4v1"]); }

__d("UFIAddCommentController",["CommunityConversationsUfiTreatment","Parent","PrivateCommentsConfig","React","ReactDOM","UFIAddComment.react","UFIAddCommentActionType","UFIAsyncWrapper","UFICallbackStore","UFICommentEditIDStore","UFIDispatcher","UFIDispatcherContext.react","UFIFeedbackContext.react","UFINewCommentNotifier"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();h.factory=function(j,k){k.rootid=j.id;return new h(j,Object.freeze(k))};function h(j,k){__p&&__p();i.call(this);this.$UFIAddCommentController1=j;this.$UFIAddCommentController2=k;this.$UFIAddCommentController3=new(c("UFIDispatcher"))();this.$UFIAddCommentController4={UFICallbackStore:new(c("UFICallbackStore"))(this.$UFIAddCommentController3)};this.$UFIAddCommentController4.UFICallbackStore.on(c("UFIAddCommentActionType").SUBMIT_NEW,function(l){return c("UFINewCommentNotifier").onNewComment(c("Parent").byTag(j,"form"),this.$UFIAddCommentController2,l.comment,l.target,l.replyCommentID,l.timestamp)}.bind(this));this.$UFIAddCommentController5=c("UFICommentEditIDStore").getForInstance(this.$UFIAddCommentController2.instanceid);c("UFICommentEditIDStore").addListener(function(){var l=c("UFICommentEditIDStore").getForInstance(this.$UFIAddCommentController2.instanceid);if(l!=this.$UFIAddCommentController5){this.$UFIAddCommentController5=l;this.render()}}.bind(this));this.render()}h.prototype.render=function(){var j=c("React").createElement(c("UFIDispatcherContext.react"),{dispatcher:this.$UFIAddCommentController3,stores:this.$UFIAddCommentController4},c("React").createElement(c("UFIFeedbackContext.react"),{contextArgs:this.$UFIAddCommentController2,render:this.renderAddComment}));c("ReactDOM").render(c("React").createElement(c("UFIAsyncWrapper"),null,j),this.$UFIAddCommentController1)};h.prototype.disable=function(){this.$UFIAddCommentController4.UFICallbackStore.remove()};var i=function i(){this.renderAddComment=function(j,k){if(this.$UFIAddCommentController5!==null||!k||!k.cancomment||!k.actorforpost)return null;return c("React").createElement(c("UFIAddComment.react"),{viewerActorID:k.actorforpost,targetID:k.ownerid,targetName:k.actorname,groupID:k.grouporeventid,initialData:null,ref:null,withoutSeparator:false,editingComment:{},isEditing:false,mentionsDataSource:k.mentionsdatasource,showSendOnEnterTip:k.showsendonentertip,peopleOutsideCommunityInCommentNotice:k.peopleoutsidecommunityincommentnotice,allowAudienceSelector:!!j.friendConversationsParams,allowPhotoAttachments:k.allowphotoattachments&&!j.islivestreaming,allowVideoAttachments:k.allowvideoattachments&&!j.islivestreaming,allowFileAttachments:k.allowfileattachments&&!j.islivestreaming,allowStickerAttachments:k.allowstickerattachments&&(!j.islivestreaming||k.allowgaminglivestreamstickerattachments||k.allowstickerattachmentsforlivestreams),allowGifAttachments:k.allowgifattachments&&(!j.islivestreaming||k.allowgaminglivestreamgifattachments),allowTipJar:Boolean(k.istipjarenabled),allowNativeTipJar:Boolean(k.isnativetipjarenabled),allowTogglePrivateComments:(c("PrivateCommentsConfig").composer_lock_enabled||c("PrivateCommentsConfig").composer_unlocked_lock_enabled)&&k.canviewercommentinprivate,privateCommentTarget:k.actorname,showMentionsButton:Boolean(j.communityConversationsParams&&j.communityConversationsParams.treatment===c("CommunityConversationsUfiTreatment").MENTION_IN_COMPOSER),contextArgs:j,feedback:k,subtitle:k.subtitle,isQAndA:k.isqanda,keepFocus:j.islivestreaming,commentsTargetID:k.commentstargetfbid})}.bind(this)};f.exports=h}),null);
__d("PhotoAlbumPlacesTypeahead",["Arbiter"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";__p&&__p();if(!i)return;if(i.getCore().getHiddenValue()){var j={uid:i.getCore().getHiddenValue(),text:i.getCore().getValue()};c("Arbiter").inform("PhotoAlbumPlacesTypeahead.EXIST_PLACE",j)}i.subscribe("select",function(k,j){c("Arbiter").inform("PhotoAlbumPlacesTypeahead.SELECTED_PLACE",j.selected)}.bind(this));i.subscribe("reset",function(){if(!i.getCore().getHiddenValue())c("Arbiter").inform("PhotoAlbumPlacesTypeahead.RESET_PLACE")}.bind(this));i.subscribe("focus",function(){c("Arbiter").inform("PhotoAlbumPlacesTypeahead.FOCUSED")}.bind(this));this._initialized=true}h.prototype.init=function(i){"use strict";if(this._initialized)return;h.call(this,i)};f.exports=h}),null);
__d("PlacesTypeaheadBehavior",["CSS","DOM"],(function a(b,c,d,e,f,g){var h={init:function i(j,k){j.subscribe(["reset","select","highlight"],function(l,m){if(l==="highlight"&&m.index!==-1&&m.selected.type!="freeform"&&m.selected.map&&!m.selected.changeCity){c("DOM").setContent(k,m.selected.map);c("CSS").show(k)}else c("CSS").hide(k)})}};f.exports=h}),null);
__d("legacy:ShowResultsOnFocusTypeaheadBehavior",["TypeaheadShowResultsOnFocus"],(function a(b,c,d,e,f,g){if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.showResultsOnFocus=function(h){h.enableBehavior(c("TypeaheadShowResultsOnFocus"))}}),3);
__d("VideoChainingToken",["Base64"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this.$VideoChainingToken1=i}h.encode=function(i){"use strict";return new h(c("Base64").encode(JSON.stringify(i)))};h.prototype.decode=function(){"use strict";return JSON.parse(c("Base64").decode(this.$VideoChainingToken1))};f.exports=h}),null);