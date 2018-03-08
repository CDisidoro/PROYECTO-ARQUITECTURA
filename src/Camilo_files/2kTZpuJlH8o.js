if (self.CavalryLogger) { CavalryLogger.start_js(["lr8VJ"]); }

__d("HiddenPromoteButton.react",["AdsLWIDialogUtils","AdsLWIInstanceUtils","AdsLWIProductUtils","BoostedComponentRef","PageTransitions","React","URI","adsLWICurrentDialogStateSelector","createCancelableFunction"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("AdsLWIDialogUtils").openLWIDialog,k=c("AdsLWIInstanceUtils").createRandomInstanceID,l=c("AdsLWIProductUtils").convertProductToAppID;function m(){var p=new(c("URI"))(window.location.href).getQueryData(),q=p.boosted_auto_open,r=l(q);if(!r)return null;var s=p.notif_t||p.ref||c("BoostedComponentRef").AUTO_OPEN_UNKNOWN_SOURCE,t=p.boost_id?String(p.boost_id):"",u=p.target_id?String(p.target_id):null;return{appID:r,boostID:t,placement:s,targetID:u}}var n=k();h=babelHelpers.inherits(o,c("React").PureComponent);i=h&&h.prototype;function o(){var p,q;for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=i.constructor).call.apply(p,[this].concat(s)),this.maybeAutoOpenDialog=c("createCancelableFunction")(function(){var u=m();if(u&&!c("adsLWICurrentDialogStateSelector")().dialogState.instanceID)j(n,this.props.pageID,u.placement,u.appID,u.boostID,u.targetID);c("PageTransitions").registerCompletionCallback(this.maybeAutoOpenDialog)}.bind(this)),q}o.prototype.componentDidMount=function(){c("PageTransitions").registerCompletionCallback(this.maybeAutoOpenDialog)};o.prototype.componentWillUnmount=function(){this.maybeAutoOpenDialog.cancel()};o.prototype.render=function(){return null};f.exports=o}),null);
__d("ChatTabViewEvents",["Arbiter"],(function a(b,c,d,e,f,g){"use strict";f.exports=new(c("Arbiter"))()}),null);
__d("PageTimelineChainingTypeConstants",[],(function a(b,c,d,e,f,g){f.exports={FANNING:"fanning",FOLLOW:"follow",SHOW_FOLLOW:"show_follow"}}),null);
__d("PagesTimelineChaining",["Arbiter","Banzai","ChatTabViewEvents","CSS","Event","PageLikeConstants","PagesFollowStore","PageTimelineChainingTypeConstants","Run","Style","SubscriptionsHandler","UIPagelet"],(function a(b,c,d,e,f,g){__p&&__p();var h=0,i={_recentlyLikedPageIDs:{},_recentlyMessagedPageIDs:{},container:null,_subscriptions:[],_chatSubscriptions:[],_followSubscription:null,_isFollow:false,_shouldShowRelatedPagesOnBounce:false,init:function j(k,l){__p&&__p();this.container=k;this._followSubscription=new(c("SubscriptionsHandler"))();this._isFollow=l.isFollow;this._shouldShowRelatedPagesOnBounce=l.shouldShowRelatedPagesOnBounce;c("Run").onLeave(function(){return this._unsubscribe()}.bind(this));if(!this._showChainSuggestions(l.pageID,false)){this._subscriptions=[c("Arbiter").subscribe(c("PageLikeConstants").LIKED,this.onLike.bind(this,l.pageID))];if(l.canFollow)this._followSubscription.addSubscriptions(c("PagesFollowStore").addListener(function(){var m=c("PagesFollowStore").getState();if(!(l.pageID in m))return;if(m[l.pageID]&&!this._isFollow)this._onFollow(l.pageID);this._isFollow=m[l.pageID]}.bind(this)));if(l.enableLikeCheckup)this._subscriptions.push(c("Arbiter").subscribe(c("PageLikeConstants").UNLIKED,this.onUnlike.bind(this)));if(l.onMessageEnabled)this._chatSubscriptions.push(c("ChatTabViewEvents").subscribe("chat-send-to-page",this.onMessage.bind(this,l.pageID)));if(l.shouldShowRelatedPagesOnBounce)window.addEventListener("scroll",this.onScroll.bind(this,l.pageID),false)}},onScroll:function j(k){if(document.documentElement){var l=window.pageYOffset||document.documentElement.scrollTop;if(l<=h){this._showChainSuggestions(k,true);this._unsubscribe()}h=l}},onLike:function j(k,l,m){if(m.profile_id===k&&m.target){this._recentlyLikedPageIDs[k]=true;this._showChainSuggestions(k,false);this._unsubscribe()}},_onFollow:function j(k){this._showChainFollowSuggestions(k);this._unsubscribe()},onMessage:function j(k,l,m){if(m&&m.pageID===k){this._recentlyMessagedPageIDs[k]=true;this._showMessageSuggestions(k);this._unsubscribe()}},onUnlike:function j(k,l){c("UIPagelet").loadFromEndpoint("PagesLikeCheckupPagelet",this.container,{},{displayCallback:this.displayCallback.bind(this)});this._unsubscribe()},displayCallback:function j(k){if(k)k();var l=this.container.firstChild;if(l)c("Style").set(this.container,"height",l.offsetHeight+"px")},_showChainSuggestions:function j(k,l){if(!(k in this._recentlyLikedPageIDs)&&!(this._shouldShowRelatedPagesOnBounce&&l))return false;var m=c("PageTimelineChainingTypeConstants").FANNING;c("UIPagelet").loadFromEndpoint("PagesTimelineChainingPagelet",this.container,{pageID:k,type:m},{displayCallback:this.displayCallback.bind(this)});return true},_showChainFollowSuggestions:function j(k){var l=c("PageTimelineChainingTypeConstants").FOLLOW;c("UIPagelet").loadFromEndpoint("PagesTimelineChainingPagelet",this.container,{pageID:k,type:l},{displayCallback:this.displayCallback.bind(this)});return true},_showMessageSuggestions:function j(k){if(!(k in this._recentlyMessagedPageIDs))return false;c("UIPagelet").loadFromEndpoint("PagesMessageChainingPagelet",this.container,{pageID:k},{displayCallback:this.displayCallback.bind(this)});return true},dismissCallback:function j(k,l,m){c("CSS").hide(this.container);delete this._recentlyLikedPageIDs[l];this._unsubscribe();if(m==="friend_inviter_chaining"){var n="pages_growth_general_analytical_logger",o={id:l,event:"dismiss_carousel",event_target:"friend_inviter_chaining",feature_name:"friend_inviter_chaining_investigate"};c("Banzai").post(n,o)}},attachDismissCallback:function j(k,l,m,n){c("Event").listen(k,"click",this.dismissCallback.bind(this,l,m,n))},_unsubscribe:function j(){__p&&__p();if(this._subscriptions.length){this._subscriptions.forEach(function(k){return c("Arbiter").unsubscribe(k)});this._subscriptions=[]}if(this._chatSubscriptions.length){this._chatSubscriptions.forEach(function(k){return c("ChatTabViewEvents").unsubscribe(k)});this._chatSubscriptions=[]}this._followSubscription&&this._followSubscription.release()}};f.exports=i}),null);
__d("PagesManagerUserMessagePrompt",["ChatAppStore","ChatOpenTabEventLogger","ChatVisibility","FantaTabActions","MercuryIDs","MessengerDiscoveryEntryPoint","PagesLogger","PagesLoggerEventEnum","PagesLoggerEventTargetEnum","setImmediate"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=2e3,i={openTab:function j(k){__p&&__p();var l=arguments.length<=1||arguments[1]===undefined?c("MessengerDiscoveryEntryPoint").FB_PAGE_USER_MESSAGE_PROMPT:arguments[1],m=arguments.length<=2||arguments[2]===undefined?h:arguments[2];if(!c("ChatVisibility").isOnline())return;setTimeout(function(){__p&&__p();var n;if(c("ChatAppStore").getState().isInitialized)i._openTabAndLog(k,l);else(function(){var o=c("ChatAppStore").addListener(function(){if(c("ChatAppStore").getState().isInitialized){c("setImmediate")(function(){i._openTabAndLog(k,l)});o.remove()}})})()},m)},_openTabAndLog:function j(k,l){var m=c("MercuryIDs").getThreadIDFromUserID(k);c("FantaTabActions").openTab(m,[l]);c("ChatOpenTabEventLogger").logUserAutoOpen(l,k);c("PagesLogger").log(k,c("PagesLoggerEventEnum").IMPRESSION,c("PagesLoggerEventTargetEnum").PAGE_MESSAGE_PROMPT,null,["pages_growth"],{})}};f.exports=i}),null);