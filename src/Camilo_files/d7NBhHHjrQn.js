if (self.CavalryLogger) { CavalryLogger.start_js(["547QD"]); }

__d("FBLoadShimmer.react",["cx","React","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";function i(j){var k=j.className,l=j.height,m=j.style,n=j.width,o=j.disableAnimation,p=babelHelpers.objectWithoutProperties(j,["className","height","style","width","disableAnimation"]),q="_1tt";if(o)q=c("joinClasses")(q,"_300z");return c("React").createElement("div",babelHelpers["extends"]({},p,{className:c("joinClasses")(k,q),style:babelHelpers["extends"]({height:l!=null?l+"px":undefined,width:n!=null?n+"px":undefined},m)}))}f.exports=i}),null);
__d("DimensionLogging",["BanzaiNectar","getViewportDimensions"],(function a(b,c,d,e,f,g){var h=c("getViewportDimensions")();c("BanzaiNectar").log("browser_dimension","homeload",{x:h.width,y:h.height,sw:window.screen.width,sh:window.screen.height,aw:window.screen.availWidth,ah:window.screen.availHeight,at:window.screen.availTop,al:window.screen.availLeft})}),null);
__d("getFullScreenElement",[],(function a(b,c,d,e,f,g){function h(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}f.exports=h}),null);
__d("LikeConfirmer",["AsyncDialog","AsyncRequest"],(function a(b,c,d,e,f,g){__p&&__p();var h=false,i=false,j={likeContent:function k(){},like:function k(l,m){__p&&__p();this.likeContent=l;if(i)return;if(h)this.likeContent();else{var n=new(c("AsyncRequest"))().setURI("/like/confirm_like.php").setRelativeTo(m);c("AsyncDialog").send(n,function(o){i=true;o.subscribe("hide",this.onCloseLikeConfirmDialog.bind(this));o.setCausalElement(m)}.bind(this))}return false},isShowingConfirmation:function k(){return i},onCloseLikeConfirmDialog:function k(){i=false},likeSkipConfirmation:function k(l){h=l;this.likeContent()}};f.exports=j}),null);
__d("FbFeedKeyboardController",["csx","cx","fbt","Arbiter","AsyncDialog","AsyncRequest","CSS","DOM","DOMQuery","DOMScroll","Event","FbFeedHighlight","Focus","JSXDOM","KeyboardShortcuts","LikeConfirmer","NavigationMessage","Parent","ReactComposerEvents","ReactComposerIDGenerator","Run","Scroll","SubscriptionsHandler","UITinyViewportAction","Vector","ViewportBounds","emptyFunction","ge","getActiveElement","gkx","isAsyncScrollQuery","isElementNode","throttle"],(function a(b,c,d,e,f,g,h,i,j){__p&&__p();var k=45,l=0;function m(){l=c("UITinyViewportAction").isTiny()?0:c("ViewportBounds").getTop()}function n(q){if(!q)return null;if(q.previousElementSibling instanceof HTMLElement)return q.previousElementSibling;var r=q.previousSibling;while(r&&!(r instanceof HTMLElement))r=r.previousSibling;return r||null}function o(q){if(q.nextElementSibling instanceof HTMLElement)return q.nextElementSibling;var r=q.nextSibling;while(r&&!(r instanceof HTMLElement))r=r.nextSibling;return r||null}function p(q){"use strict";this.root=q;this.init()}p.prototype.getStories=function(q){"use strict";return c("DOMQuery").scry(q||this.root,"._5jmm")};p.prototype.isStory=function(q){"use strict";return c("CSS").matchesSelector(q,"._5jmm")};p.prototype.clickLike=function(){"use strict";__p&&__p();var q=this.$FbFeedKeyboardController3();this.clickElement(q,".UFILikeLink");if(q!==this.selected)return;var r=this.getParentStory(c("getActiveElement")());if(r){var s=c("DOMQuery").scry(r,".UFILikeLink");for(var t=0;t<s.length;t++)if(!c("CSS").hasClass(s[t],"accessible_elem"))c("Focus").setWithoutOutline(s[t])}};p.prototype.clickComment=function(){"use strict";this.clickElement(this.$FbFeedKeyboardController3(),".comment_link")};p.prototype.clickShare=function(){"use strict";this.click(".share_action_link")};p.prototype.clickSeeMore=function(){"use strict";this.click(".see_more_link")};p.prototype.clickLeft=function(){"use strict";this.click("._1mri")};p.prototype.clickRight=function(){"use strict";this.click("._2fu-")};p.prototype.openAttachment=function(){"use strict";this.click("._5dec","a._52c6","._4-eo",".uiVideoThumb")};p.prototype.getHeadline=function(q){"use strict";return c("DOMQuery").scry(q,"h5._5pbw")[0]};p.prototype.$FbFeedKeyboardController4=function(q){"use strict";var r=c("Parent").bySelector(q,"._5pcb"),s=c("ge")("pagelet_soft_permalink_posts");return!!(r||s&&c("DOM").contains(s,q))};p.prototype.getPreviousSibling=function(q){"use strict";__p&&__p();var r=n(q);if(r&&this.getParentStory(r))return r;r=null;if(this.$FbFeedKeyboardController4(q)){var s=this.getStories(this.root),t=s.indexOf(q);while(t>-1){if(t===0){r=c("ge")("pagelet_composer");r=r&&c("Parent").bySelector(r,"._5jmm")}else if(t>0){r=s[t-1];if(r.offsetHeight>0)break}t--}}if(r instanceof HTMLElement)return r;return this.selected};p.prototype.getPreviousStory=function(q){"use strict";var r=this.getPreviousSibling(q);while(r&&!this.isStory(r))r=this.getPreviousSibling(r);return r};p.prototype.getParentStory=function(q){"use strict";var r=c("Parent").bySelector(q,"._5jmm");return r instanceof HTMLElement?r:null};p.prototype.getNextSibling=function(q){"use strict";__p&&__p();var r=o(q);if(r&&this.getParentStory(r))return r;r=null;if(this.$FbFeedKeyboardController4(q)){var s=this.getStories(this.root),t=s.indexOf(q);if(t>-1){r=s[++t];while(r&&r.offsetHeight===0)r=s[++t]}}else if(c("ge")("pagelet_composer",q))r=c("DOMQuery").scry(document,"div._5pcb ._5jmm")[0];return r||this.selected};p.prototype.getNextStory=function(q){"use strict";var r=this.getNextSibling(q);while(r&&!this.isStory(r))r=this.getNextSibling(r);return r};p.prototype.setSelected=function(q,r){"use strict";__p&&__p();if(q){var s="_5qdu",t=c("DOMQuery").scry(q,"._5qdu");if(!t.length&&r)c("DOM").prependContent(q,c("JSXDOM").div({className:s}))}if(r){this.selected&&this.setTabindexOnStory(this.selected,"-1");this.selected&&c("CSS").removeClass(this.selected,"_5qdv");this.selected=q;q&&this.setTabindexOnStory(q,"0");q&&c("CSS").addClass(q,"_5qdv");q&&c("FbFeedHighlight").highlightSingle(q)}};p.prototype.$FbFeedKeyboardController3=function(){"use strict";var q=c("DOM").scry(this.selected,"._1qch");if(q.length>0)return c("DOM").scry(this.selected,"._3el7")[0];return this.selected};p.prototype.focusComposer=function(){"use strict";__p&&__p();var q=["pagelet_composer","pagelet_group_composer","pagelet_event_composer","PageComposerPagelet_","PageComposerPagelet_Admin_View","timeline_composer_container"],r=null;for(var s=q,t=Array.isArray(s),u=0,s=t?s:s[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var v;if(t){if(u>=s.length)break;v=s[u++]}else{u=s.next();if(u.done)break;v=u.value}var w=v;r=c("ge")(w);if(r)break}if(r){var x=c("DOM").scry(r,"textarea")[0];if(x){c("Focus").set(x);c("DOMScroll").scrollTo(r,true)}else{var y=c("DOM").scry(r,"div._36bx")[0],z=y&&y.id;if(c("ReactComposerIDGenerator").isComposerID(z)){c("Arbiter").inform(c("ReactComposerEvents").ACTIVATE_ATTACHMENT+y.id);c("DOMScroll").scrollTo(r,true)}}}};p.prototype.getScrollOffset=function(){"use strict";return 10+(this.scrollOffset||0)};p.prototype.getAnimationLength=function(q){"use strict";return Math.min(Math.abs(c("Vector").getElementPosition(q).y-c("ViewportBounds").getTop()-c("Scroll").getTop(document.body)),400)};p.prototype.findTop=function(){"use strict";var q=this.getStories();for(var r=0;r<q.length;r++)if(c("Vector").getElementPosition(q[r]).y>c("Vector").getScrollPosition().y)return q[r];return null};p.prototype.onLeave=function(){"use strict";this.subscriptions&&this.subscriptions.release()};p.prototype.getHelpDialogRequest=function(){"use strict";if(!this.dialogRequest){this.dialogRequest=new(c("AsyncRequest"))("/ajax/keyboard_shortcuts");this.dialogRequest.setReadOnly(true)}else if(this.dialogRequest.transport)return null;return this.dialogRequest};p.prototype.init=function(){"use strict";__p&&__p();c("Run").onLeave(this.onLeave.bind(this));this.subscriptions=new(c("SubscriptionsHandler"))();this.subscriptions.addSubscriptions(c("Arbiter").subscribe(c("NavigationMessage").NAVIGATION_BEGIN,this.onLeave.bind(this)),c("KeyboardShortcuts").register("j",this.vert.bind(this,1),{shortcutInfo:{displayKey:"j",description:j._("Scroll to the next News Feed story")}}),c("KeyboardShortcuts").register("k",this.vert.bind(this,-1),{shortcutInfo:{displayKey:"k",description:j._("Scroll to the previous News Feed story")}}),c("KeyboardShortcuts").register("p",this.focusComposer.bind(this),{shortcutInfo:{displayKey:"p",description:j._("Post a new story")}}),c("KeyboardShortcuts").register("l",function(){var q=this.getParentStory(c("getActiveElement")());c("LikeConfirmer").like(function(){this.setSelected(q,false);this.clickLike()}.bind(this),c("getActiveElement")())}.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKey:"l",description:j._("Like or unlike the selected story")}}),c("KeyboardShortcuts").register("c",this.clickComment.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKey:"c",description:j._("Comment on the selected story")}}),c("KeyboardShortcuts").register("s",this.clickShare.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKey:"s",description:j._("Share the selected story")}}),c("KeyboardShortcuts").register("o",this.openAttachment.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKey:"o",description:j._("Open attachment of the selected story")}}),c("KeyboardShortcuts").register("RETURN",this.clickSeeMore.bind(this),{filter:this.hasExpandableStoryInFocus.bind(this),shortcutInfo:{displayKey:"enter",description:j._("See More of the selected story")}}),c("KeyboardShortcuts").register("LEFT",this.clickLeft.bind(this),{filter:this.hasActiveStory.bind(this)}),c("KeyboardShortcuts").register("RIGHT",this.clickRight.bind(this),{filter:this.hasActiveStory.bind(this)}),c("Event").listen(this.root,"focusin",function(event){var q=event.getTarget();if(!this.isStory(q)){var r=c("DOM").isNodeOfType(q,["object","embed","iframe"]),s=this.getParentStory(q),t=this.selected;if(s&&!r&&t){this.setSelected(s,true);this.selected=s}}}.bind(this)));if(!c("gkx")("AT73P93_INI-GqvCJryiCJt-6N2SiiMDsHXGy5Hu8NdiDMizG7bp30EClsuOfY6D_WWbWtv3DC2aKvFPzAkh46-Q"))this.subscriptions.addSubscriptions(c("KeyboardShortcuts").register("SLASH",function(){var q=this.getHelpDialogRequest();if(q){q.setRelativeTo(c("getActiveElement")());c("AsyncDialog").send(q)}}.bind(this),{filter:function q(event,r){return event.getModifiers().shift},shortcutInfo:{displayKey:"?",description:"Show this help dialog"}}))};p.prototype.hasActiveStory=function(event,q){"use strict";var r=c("getActiveElement")();return!(r&&c("CSS").shown(r))||!!this.getParentStory(r)};p.prototype.hasExpandableStoryInFocus=function(event,q){"use strict";var r=c("getActiveElement")();return!!(r.getElementsByClassName("text_exposed_root").length&&!r.getElementsByClassName("text_exposed_root text_exposed").length)};p.prototype.clickElement=function(q){"use strict";__p&&__p();if(!q)return;var r=void 0;for(var s=arguments.length,t=Array(s>1?s-1:0),u=1;u<s;u++)t[u-1]=arguments[u];for(var v=0,w=t.length;v<w;v++){r=c("DOM").scry(q,t[v])[0];if(r&&c("CSS").shown(r)){r.click();return}}};p.prototype.click=function(){"use strict";for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];this.clickElement.apply(this,[this.selected].concat(r))};p.prototype.$FbFeedKeyboardController5=function(){"use strict";__p&&__p();if(!this.$FbFeedKeyboardController1){this.scrollOffset=0;var q=c("ge")("pagelet_feed_switcher_root");if(q)this.scrollOffset+=q.getBoundingClientRect().height;this.subscriptions.addSubscriptions(c("Event").listen(document,"scroll",function(){if(this.selected&&!this.scrolling)this.setSelected(null,false)}.bind(this)));this.$FbFeedKeyboardController1=true}};p.prototype.$FbFeedKeyboardController6=function(){"use strict";if(!this.$FbFeedKeyboardController2){m();this.subscriptions.addSubscriptions(c("Event").listen(window,"resize",c("throttle")(m)));this.$FbFeedKeyboardController2=true}};p.prototype.vert=function(q){"use strict";__p&&__p();this.$FbFeedKeyboardController5();var r;if(this.selected){if(this.selected.id=="pagelet_composer")r=q>0?this.getStories()[0]:null;else if(q===0)r=this.selected;else r=q>0?this.getNextStory(this.selected):this.getPreviousStory(this.selected)||c("ge")("pagelet_composer");if(!r)return;else if(!c("isElementNode")(r)||c("CSS").hasClass(r,"hidden_elem")){if(this.selected)c("CSS").removeClass(this.selected,"selectedStorySimple");this.selected=r;this.vert(q);return}}if(!r||c("Parent").byClass(r,"hidden_elem")||!c("DOM").contains(document,r)){r=this.findTop();if(r&&q<0)r=this.getPreviousStory(r)}if(!r)return;this.anim&&this.anim.stop();var s=Date.now()-(this.lastScroll||0)>30,t=c("emptyFunction");if(q!==0)t=this.setFocused.bind(this,r);if(c("isAsyncScrollQuery")()){s=false;t();t=c("emptyFunction")}this.scrolling=true;this.scrollingTimer&&clearTimeout(this.scrollingTimer);this.$FbFeedKeyboardController6();var u=c("Vector").getViewportDimensions().y-l-this.getScrollOffset();if(this.selected){var v=c("DOM").scry(this.selected,"._2pum")[0],w=c("DOM").scry(r,"._2pum")[0];if(v&&q>0)this.isExplore=true;if(w)this.isExplore=false}if(this.root.id==="pagelet_explore_feed")this.isExplore=true;if(this.isExplore)u-=k;this.anim=c("DOMScroll").scrollTo(r,s?this.getAnimationLength(r):0,false,u,0,function(){this.scrollingTimer=setTimeout(function(){this.scrolling=false}.bind(this),300);var x=c("Vector").getScrollPosition();t();if(x.distanceTo(c("Vector").getScrollPosition())!==0)c("DOMScroll").scrollTo(x,0)}.bind(this));this.setSelected(r,true);this.lastScroll=Date.now()};p.prototype.setTabindexOnStory=function(q,r){"use strict";if(q&&this.isStory(q))q.tabIndex=parseInt(r,10)};p.prototype.setFocused=function(q){"use strict";if(q&&this.isStory(q))c("Focus").setWithoutOutline(q)};p.init=function(q){"use strict";return new p(q)};f.exports=p}),null);
__d("logVideosClickTracking",["clickRefAction"],(function a(b,c,d,e,f,g){function h(i){c("clickRefAction")("click",i,null,"FORCE")}f.exports=h}),null);
__d("VideoWithClickPlayPause",["VideoPlayerReason","logVideosClickTracking"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this.$VideoWithClickPlayPause1=i;this.$VideoWithClickPlayPause2=this.$VideoWithClickPlayPause1.getVideoNode();this.$VideoWithClickPlayPause1.addListener("clickVideo",this.$VideoWithClickPlayPause3.bind(this));if(this.$VideoWithClickPlayPause1.hasSeenClick())this.$VideoWithClickPlayPause3()}h.prototype.$VideoWithClickPlayPause3=function(){"use strict";__p&&__p();var i=this.$VideoWithClickPlayPause1.getOption("CommercialBreakVideoAdOverlay","videoController");if(this.$VideoWithClickPlayPause1.isState("playing")){if(this.$VideoWithClickPlayPause1.getOption("VideoWithLiveBroadcast","isLive")||i&&i.getOption("VideoWithLiveBroadcast","isLive")||this.$VideoWithClickPlayPause4()||this.$VideoWithClickPlayPause5())return;this.$VideoWithClickPlayPause1.pause(c("VideoPlayerReason").USER)}else{c("logVideosClickTracking")(this.$VideoWithClickPlayPause2);this.$VideoWithClickPlayPause1.play(c("VideoPlayerReason").USER)}};h.prototype.$VideoWithClickPlayPause4=function(){"use strict";var i=this.$VideoWithClickPlayPause1.getOption("CommercialBreakVideoAdOverlay","videoController"),j=i&&i.getOption("VideoWithInstreamVideo","controller");return j&&!j.getConfig().canPauseAdBreak};h.prototype.$VideoWithClickPlayPause5=function(){"use strict";return this.$VideoWithClickPlayPause1.getOption("VideoWithInstreamVideo","disableClickToPause")};f.exports=h}),null);
__d("VideoPlayerReasonTransitionHelper",["VideoPlayerReasonTransitionExperiment"],(function a(b,c,d,e,f,g){function h(i){"use strict";this.$VideoPlayerReasonTransitionHelper1=i}h.prototype.getReason=function(){"use strict";if(!c("VideoPlayerReasonTransitionExperiment").provideReason)return null;return this.$VideoPlayerReasonTransitionHelper1};f.exports=h}),null);
__d("VideoPlayerVolumeSettings",["WebStorage"],(function a(b,c,d,e,f,g){__p&&__p();function h(){"use strict";this.$VideoPlayerVolumeSettings1=1;this.$VideoPlayerVolumeSettings2=1}h.prototype.getVolume=function(){"use strict";var j=c("WebStorage").getLocalStorage();if(j){var k=j.getItem("videoPlayerControllerVolume");if(k===null||isNaN(+k))return 1;return+k}return this.$VideoPlayerVolumeSettings1};h.prototype.getSessionVolume=function(){"use strict";return this.$VideoPlayerVolumeSettings1};h.prototype.setSessionVolume=function(j){"use strict";this.$VideoPlayerVolumeSettings1=j};h.prototype.saveVolume=function(j){"use strict";var k=c("WebStorage").getLocalStorage();if(k)k.setItem("videoPlayerControllerVolume",j);this.$VideoPlayerVolumeSettings1=j};h.prototype.getLastVolumeBeforeMute=function(){"use strict";var j=c("WebStorage").getLocalStorage();if(j){var k=j.getItem("videoPlayerControllerLastVolumeBeforeMute");if(k===null||isNaN(+k))return 1;return+k}return this.$VideoPlayerVolumeSettings2};h.prototype.saveLastVolumeBeforeMute=function(j){"use strict";var k=c("WebStorage").getLocalStorage();if(k)k.setItem("videoPlayerControllerLastVolumeBeforeMute",j);this.$VideoPlayerVolumeSettings2=j};var i=new h();f.exports=i}),null);
__d("VideoPlayerFallbackEvents",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ENTER:"VideoPlayerFallbackEvents/enter",RECOVER:"VideoPlayerFallbackEvents/recover"})}),null);
__d("VideoPlayerLoggerEvent",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({AUTOPLAY_PREFERENCE_CHANGED:"autoplay_preference_changed",END_STALL_TIME:"end_stall_time",AUTOPLAY_PREFERENCE_STATUS:"autoplay_preference_status",ERROR_ALERT_SHOWN:"video_error_alert_shown",COMMERCIAL_BREAK_OFFSCREEN:"commercial_break_offscreen",COMMERCIAL_BREAK_ONSCREEN:"commercial_break_onscreen",NOT_AUTOPLAYING:"not_autoplaying",VIDEO_CHANNEL_NO_RELATED_VIDEO:"video_channel_no_related_video",VIDEO_ORIENTATION_CHANGED:"video_orientation_changed",AD_BREAK_STARTING_INDICATOR:"ad_break_starting_indicator",ASSETS_LOADED:"assets_loaded",BUFFERED:"buffered",CANCELLED_REQUESTED_PLAYING:"cancelled_requested_playing",CAPTION_CHANGE:"caption_change",CAROUSEL_CHANGE:"carousel_change",CHROMECAST_AVAILABILITY_CHECKED:"chromecast_availabilty_checked",CHROMECAST_CAST_CLICKED:"chromecast_button_clicked",CHROMECAST_CAST_CONNECTED:"chromecast_connected",CHROMECAST_CAST_DISABLED:"chromecast_button_disabled",CHROMECAST_CAST_DISCONNECTED:"chromecast_disconnected",CHROMECAST_CAST_RECONNECTED:"chromecast_reconnected",CHROMECAST_CAST_VISIBLE:"chromecast_button_visible",CHROMECAST_NOT_SUPPORTED:"chromecast_not_supported",CLICK:"click",DISPLAYED:"displayed",ENTERED_FALLBACK:"entered_fallback",ENTERED_FS:"entered_fs",ENTERED_HD:"entered_hd",ERROR:"error",EXITED_FS:"exited_fs",EXITED_HD:"exited_hd",FINISHED_LOADING:"finished_loading",FINISHED_PLAYING:"finished_playing",HEADSET_CONNECTED:"headset_connected",HEADSET_DISCONNECTED:"headset_disconnected",HEART_BEAT:"heart_beat",HOST_ERROR:"host_error",HTTP_STATUS_UPDATE:"http_status_update",IMPRESSION:"impression",INLINE_CLICK_TO_PLAY:"inline_click_to_play",INVALID_URL:"invalid_url",MUTED:"muted",NO_SURFACE_UPDATE:"no_surface_update",PAUSED:"paused",PLAY_REQUESTED:"play_requested",PLAY_REQUESTED_OOB:"play_requested_oob",PLAYER_ALLOCATED:"player_allocated",PLAYER_FORMAT_CHANGED:"player_format_changed",PLAYER_LOADED:"player_loaded",PLAYING_LIVE_STARTED:"playing_live_started",PLAYING_LIVE_STOPPED:"playing_live_stopped",POP_FAILOVER:"pop_failover",PROGRESS:"progress",QUALITY_CHANGE:"quality_change",R2D2_SUMMARY:"r2d2_summary",READY_TO_PLAY:"ready_to_play",REPLAYED:"replayed",REPRESENTATION_ENDED:"representation_ended",REPRESENTATION_FIRST_ENDED:"representation_first_ended",REQUESTED:"requested",REQUESTED_PLAYING:"requested_playing",SCRUBBED:"scrubbed",SPLASH_DISPLAYED:"splash_displayed",STALE:"stale",STARTED_PLAYING:"started_playing",STARTED_RECEIVING_BYTES:"started_receiving_bytes",STOPPED_PLAYING:"stopped_playing",STREAM_RESET:"stream_reset",SURFACE_UPDATED:"surface_updated",SWITCHED_IMPLEMENTATION:"switched_implementation",UNMUTED:"unmuted",UNPAUSED:"unpaused",VIDEO_CHAINING_IMPRESSION:"video_chaining_impression",VIDEO_CHAINING_TAP:"video_chaining_tap",VIDEO_CLICKED_WITHIN_PLAYER:"video_clicked_within_player",VIDEO_PLAYER_SERVICE_DISCONNECTED:"video_player_service_disconnected",VIDEO_PLAYER_SERVICE_RECONNECTED:"video_player_service_reconnected",VIDEO_PLAYER_SERVICE_UNAVAILABLE:"video_player_service_unavailable",VIDEO_PLAYING:"video_playing",VIDEO_SKIP_AD:"video_skip_ad",VOLUME_CHANGED:"volume_changed",VOLUME_DECREASE:"volume_decrease",VOLUME_INCREASE:"volume_increase",WATCH_AND_SCROLL_CHANNEL_ENTERED:"watch_and_scroll_channel_entered",WATCH_AND_SCROLL_EXITED:"watch_and_scroll_exited",WATCH_AND_SCROLL_ICON_HIGHLIGHTED:"watch_and_scroll_icon_highlighted",WATCH_AND_SCROLL_ICON_UNHIGHLIGHTED:"watch_and_scroll_icon_unhighlighted",WATCH_AND_SCROLL_PAUSED:"watch_and_scroll_paused",LIVE_SEGMENT_LOAD_ERROR:"live_segment_load_error",MANIFEST_DATA_TYPE_ERROR:"manifest_data_type_error",MANIFEST_LOAD_ERROR:"manifest_load_error",PLAYER_WARNING:"player_warning",PLAYHEAD_FELL_BEHIND_ERROR:"playhead_fell_behind_error",STREAM_SEGMENT_LOAD_ERROR:"stream_segment_load_error",UNEXPECTED_SEGMENT_ERROR:"unexpected_segment_error",NETWORK_TIMEOUT:"network_timeout",VIDEO_LOGGING_SESSION_TIMEOUT:"video_logging_session_timeout",COMPLETION:"completion",VIEW:"view",PLAYED_FOR_THREE_SECONDS:"played_for_three_seconds",GUIDE_ENTERED:"guide_entered",GUIDE_EXITED:"guide_exited",HEADING_RESET:"heading_reset",SPHERICAL_FALLBACK_ENTERED:"spherical_fallback_entered",SPHERICAL_VIDEO_FALLBACK_CTA_CLICKED:"spherical_video_fallback_cta_clicked",VIEWPORT_ROTATED:"viewport_rotated",VIEWPORT_ZOOMED:"viewport_zoomed",BANZAI_OAUTH_GK_ERROR:"banzai_oauth_gk_error",BANZAI_OAUTH_PARSE_ERROR:"banzai_oauth_parse_error",BANZAI_OAUTH_SESSION_ERROR:"banzai_oauth_session_error",VIEWABILITY_CHANGED:"viewability_changed"})}),null);
__d("VideoPlayerLoggerSource",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ADS:"ads",ANIMATED_IMAGE_SHARE:"animated_image_share",ASSET:"asset",BROADCAST_REQUEST_ATTACHMENT:"broadcast_request_attachment",CAMERA_POST:"camera_post",CHAINED:"chained",CHAINED_SUGGESTION:"chained_suggestion",CHANNEL:"channel",CONTINUE_WATCHING_RECOMMENDATION:"continue_watching_recommendation",EMBEDDED:"embedded",EMBEDDED_PAGE_PLUGIN:"embedded_page_plugin",EMBEDDED_VIDEO:"embedded_video",EMBEDDED_VIDEO_FROM_UFI:"embedded_video_from_ufi",EMBEDDED_VIDEO_PREVIEW:"embedded_video_preview",GAMEROOM_LIVE_VIDEO_HERO_BANNER:"gameroom_live_video_hero_banner",GAMEROOM_LIVE_VIDEO_TAB:"gameroom_live_video_tab",GAMEROOM_LIVE_VIDEO_THUMBNAIL:"gameroom_live_video_thumbnail",GAMES_VIDEO_LIVE_RECOMMENDATION:"games_video_live_recommendation",GAMES_VIDEO_HOME:"games_video_home",GAMES_VIDEO_HOME_HERO:"games_video_home_hero",GAMES_VIDEO_HOME_STREAMER_HUB:"games_video_home_streamer_hub",GAMES_VIDEO_SINGLE_GAME:"games_video_single_game",GAMES_VIDEO_SEARCH_UNIT:"games_video_search_unit",GROUP_LIVE_VIDEO_MODULE:"group_live_video_module",HTML5:"html5",INLINE:"inline",INSIGHTS:"insights",ISSUES_MODULE:"issues_module",LIVE_BEEPER:"live_beeper",LIVE_CONTROL_PANEL:"live_control_panel",LIVE_MAP:"live_map",LIVE_MAP_LISTVIEW:"live_map_listview",LIVE_MAP_SIDEBAR:"live_map_sidebar",LIVE_MAP_TOOLTIP:"live_map_tooltip",LIVE_MAP_TOOLTIP_FROM_LISTVIEW:"live_map_tooltip_from_listview",LIVE_MAP_TOOLTIP_FROM_MAP:"live_map_tooltip_from_map",LIVE_MAP_TOOLTIP_FROM_WEBGL:"live_map_tooltip_from_webgl",LIVE_VIDEO_BROADCAST:"live_video_broadcast",LIVE_VIDEO_PREVIEW:"live_video_preview",LIVING_ROOM:"living_room",LOOKBACK:"lookback",MEDIA_COLLAGE:"media_collage",MEMORY_LEAK_TEST:"memory_leak_test",MESSAGING:"messaging",MISC:"misc",MOBILE:"mobile",OFFERS_DETAIL:"offers_detail",PAGE_LIVE_VIDEO_MODULE:"page_live_video_module",PAGES_FINCH_MAIN_VIDEO:"pages_finch_main_video",PAGES_FINCH_THUMBNAIL_VIDEO:"pages_finch_thumbnail_video",PAGES_FINCH_TRAILER:"pages_finch_trailer",PAGES_VIDEO_SET:"pages_video_set",PAGES_COVER:"pages_cover",PAGES_TIMELINE_PAGES_COVER:"pages_timeline_pages_cover",PAGES_COVER_HOVER:"pages_cover_hover",PAGES_HOME_HERO:"pages_home_hero",PERMALINK:"permalink",PROFILE_OVERVIEW:"profile_overview",PROFILE_COVER:"profile_cover",PROFILE_VIDEO:"profile_video",PROFILE_VIDEO_HOVERCARD:"profile_video_hovercard",PROFILE_VIDEO_THUMB:"profile_video_thumb",REPORT_FLOW:"report_flow",REVIEW:"review",SEARCH_LIVE_VIDEO_MODULE:"search_live_video_module",SLIDESHOW:"slideshow",SNOWLIFT:"snowlift",SRT_REVIEW:"srt_review",TAHOE:"tahoe",TRAILER_OG_ATTACHMENT:"trailer_og_attachment",TRAILER_TIMELINE_COLLECTIONS:"trailer_timeline_collections",TRAILER_TIMELINE_UNIT:"trailer_timeline_unit",TV:"tv",USER_VIDEO_TAB:"user_video_tab",VIDEO_COPYRIGHT_PREVIEW:"video_copyright_preview",VIDEO_HOME_INLINE:"video_home_inline",VIDEO_HOME_EXPLORE:"discover",VIDEO_HOME_WATCHLIST:"watchlist",VIDEO_INLINE_CHAINING:"video_inline_chaining",VIDEOHUB_FEATURED:"videohub_featured",VIDEOHUB_LIVE:"videohub_live",VIDEOHUB_PLAYLIST:"videohub_playlist",WATCH_SCROLL:"watch_scroll",UFI_COMMENT_ATTACHMENT:"ufi_comment_attachment",LIVE_AUTOPLAY_WATCH_AND_SCROLL:"live_autoplay_watch_and_scroll",GAMES_VIDEO_STREAMER_SEARCH_UNIT:"games_video_streamer_unit"})}),null);
__d("VideoPlayerStates",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({READY:"ready",PLAYING:"playing",PAUSED:"paused",LOADING:"loading",FALLBACK:"fallback",FINISHED:"finished",DESTROYED:"destroyed",UNKNOWN:"unknown"})}),null);
__d("VideoChannelViewChainLengthManager",["guid"],(function a(b,c,d,e,f,g){__p&&__p();function h(k){"use strict";this.$VideoChannelViewChainSession1=c("guid")();this.$VideoChannelViewChainSession2=0;this.$VideoChannelViewChainSession3=k;this.$VideoChannelViewChainSession4={};this.$VideoChannelViewChainSession4[k]=0;this.$VideoChannelViewChainSession5=k}h.prototype.registerVideoID=function(k){"use strict";if(this.$VideoChannelViewChainSession4[k]===undefined){this.$VideoChannelViewChainSession2++;this.$VideoChannelViewChainSession4[k]=this.$VideoChannelViewChainSession2}this.$VideoChannelViewChainSession5=k};h.prototype.getSessionID=function(){"use strict";return this.$VideoChannelViewChainSession1};h.prototype.getCurrentChainLength=function(){"use strict";return this.$VideoChannelViewChainSession4[this.$VideoChannelViewChainSession5]!==undefined?this.$VideoChannelViewChainSession4[this.$VideoChannelViewChainSession5]:null};var i={},j={_ensureSessionID:function k(l){l=l.toString();if(!i[l])i[l]=new h(l)},getLoggingData:function k(l){if(l)l=l.toString();var m=i&&i[l];if(!m)return{video_chaining_depth_level:null,video_chaining_session_id:null};return{video_chaining_depth_level:m.getCurrentChainLength(),video_chaining_session_id:m.getSessionID()}},registerChainingInfos:function k(l,m){var n=l;if(m){var o=m.decode();if(o.root_id)n=o.root_id}if(n)n=n.toString();this.registerVideoID(n,l)},registerVideoID:function k(l,m){l=l.toString();this._ensureSessionID(l);i[l].registerVideoID(m)}};f.exports=j}),null);