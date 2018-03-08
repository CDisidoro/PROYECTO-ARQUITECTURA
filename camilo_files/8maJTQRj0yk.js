if (self.CavalryLogger) { CavalryLogger.start_js(["g1D5e"]); }

__d("FBRTCParticipantCallState",[],(function a(b,c,d,e,f,g){f.exports={UNKNOWN:0,DISCONNECTED:1,NO_ANSWER:2,REJECTED:3,UNREACHABLE:4,CONNECTION_DROPPED:5,CONTACTING:6,RINGING:7,CONNECTING:8,CONNECTED:9,PARTICIPANT_LIMIT_REACHED:10,IN_ANOTHER_CALL:11,RING_TYPE_UNSUPPORTED:12}}),null);
__d("MessengerContactImage.react",["Image.react","MessengerProfileImageWrapperReact.bs","React"],(function a(b,c,d,e,f,g){__p&&__p();var h,i,j=c("MessengerProfileImageWrapperReact.bs").jsComponent,k=c("React").PropTypes;h=babelHelpers.inherits(l,c("React").PureComponent);i=h&&h.prototype;l.prototype.render=function(){"use strict";return c("React").createElement("div",{className:this.props.className},c("React").createElement(j,{isMessengerUser:this.props.isMessengerUser,isPartiesUser:this.props.isPartiesUser,size:this.props.size,customBadge:this.props.customBadge,showBadge:false},c("React").createElement(c("Image.react"),{alt:"",height:this.props.size,src:this.props.src,width:this.props.size})))};function l(){"use strict";h.apply(this,arguments)}l.propTypes={customBadge:k.string,isMessengerUser:k.bool,size:k.number.isRequired,src:c("Image.react").validateImageSrcPropType};f.exports=l}),null);
__d("MessengerTypeaheadUtils",["fbt","ix","immutable","MercuryTypeaheadConstants","MessengerEnvironment","ReactDOM","SearchableEntry","WorkModeConfig","gkx","mapObject"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=c("immutable").OrderedMap,l=500,m=100,n=c("WorkModeConfig").is_work_user||c("gkx")("AT62Bmuf0c-b-qsSo41XTNJvFn7VwRrjwsI0onsrzyJ35XDxvhLHgPbXt3hZorqUAYplG7jtkngT9YqyGngqDfMq")?[c("MercuryTypeaheadConstants").SEARCH_TYPE,c("MercuryTypeaheadConstants").FRIEND_TYPE,c("MercuryTypeaheadConstants").FB4C_TYPE,c("MercuryTypeaheadConstants").THREAD_TYPE,c("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE,c("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE,c("MercuryTypeaheadConstants").PAGE_TYPE,c("MercuryTypeaheadConstants").NON_FRIEND_TYPE,c("MercuryTypeaheadConstants").GAME_TYPE]:[c("MercuryTypeaheadConstants").SEARCH_TYPE,c("MercuryTypeaheadConstants").FRIEND_TYPE,c("MercuryTypeaheadConstants").THREAD_TYPE,c("MercuryTypeaheadConstants").FB4C_TYPE,c("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE,c("MercuryTypeaheadConstants").PAGE_TYPE,c("MercuryTypeaheadConstants").NON_FRIEND_TYPE,c("MercuryTypeaheadConstants").GAME_TYPE],o=(j={},j[c("MercuryTypeaheadConstants").SEARCH_TYPE]={header:""},j[c("MercuryTypeaheadConstants").FRIEND_TYPE]={header:h._("Contactos")},j[c("MercuryTypeaheadConstants").FB4C_TYPE]={header:h._("Compa\u00f1eros de trabajo")},j[c("MercuryTypeaheadConstants").THREAD_TYPE]={header:h._("Conversaciones de grupo")},j[c("MercuryTypeaheadConstants").PAGE_TYPE]={header:h._("Negocios")},j[c("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE]={header:h._("Salas de reuniones")},j[c("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE]={header:h._("Bots")},j[c("MercuryTypeaheadConstants").NON_FRIEND_TYPE]={header:h._("M\u00e1s personas")},j.game={header:h._("Juegos")},j),p={sortEntries:function q(r,s){__p&&__p();var t=[],u=[],v=[],w=[],x=[],y=[],z=[],A=[],B=[];r.forEach(function(C){__p&&__p();switch(C.getType()){case c("MercuryTypeaheadConstants").FRIEND_TYPE:u.push(C);break;case c("MercuryTypeaheadConstants").FB4C_TYPE:v.push(C);break;case c("MercuryTypeaheadConstants").THREAD_TYPE:w.push(C);break;case c("MercuryTypeaheadConstants").PAGE_TYPE:case c("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE:y.push(C);break;case c("MercuryTypeaheadConstants").NON_FRIEND_TYPE:x.push(C);break;case c("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE:z.push(C);break;case c("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE:A.push(C);break;case c("MercuryTypeaheadConstants").SEARCH_TYPE:t.push(C);break;case c("MercuryTypeaheadConstants").GAME_TYPE:B.push(C);break}});return t.concat(u,v,w,z,A,y,x,B)},sortEntriesWithoutPages:function q(r){__p&&__p();var s=[],t=[],u=[],v=[];r.forEach(function(w){switch(w.getType()){case c("MercuryTypeaheadConstants").FRIEND_TYPE:s.push(w);break;case c("MercuryTypeaheadConstants").FB4C_TYPE:t.push(w);break;case c("MercuryTypeaheadConstants").THREAD_TYPE:u.push(w);break;case c("MercuryTypeaheadConstants").NON_FRIEND_TYPE:v.push(w);break}});return s.concat(t,u,v)},sortEntriesWithoutGroupsOrViewer:function q(r,s){__p&&__p();var t=[],u=[],v=[];r.forEach(function(w){if(w.getUniqueID()===s)return;switch(w.getType()){case c("MercuryTypeaheadConstants").FRIEND_TYPE:t.push(w);break;case c("MercuryTypeaheadConstants").FB4C_TYPE:u.push(w);break;case c("MercuryTypeaheadConstants").NON_FRIEND_TYPE:v.push(w);break}});return t.concat(u,v)},getEntryOrder:function q(r){var s=arguments.length<=1||arguments[1]===undefined?n:arguments[1];return s},orderEntries:function q(r,s){var t=[];this.getEntryOrder(s).filter(function(u){return u!==c("MercuryTypeaheadConstants").SEARCH_TYPE}).concat(c("MercuryTypeaheadConstants").SEARCH_TYPE).forEach(function(u){return t.push.apply(t,r.filter(function(v){return this.areSectionsEqual(v.getType(),u)}.bind(this)))}.bind(this));return t},buildSingleSection:function q(r){return k([["",r]])},buildListSections:function q(r,s,t){__p&&__p();if(!r.length)return k();t=this.getEntryOrder(s,t);var u=c("mapObject")(o,function(v){return babelHelpers["extends"]({},v,{entries:[]})});u[c("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE]=u[c("MercuryTypeaheadConstants").PAGE_TYPE];r.forEach(function(v){var w=v.getType();if(u[w])u[w].entries.push(v)});return k(t.filter(function(v){return u[v].entries.length}).map(function(v){return[u[v].header,u[v].entries]}))},buildCustomSection:function q(r,s){var t;return t={},t[r]=s,t},areSectionsEqual:function q(r,s){if(r===c("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE)return s===c("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE||s===c("MercuryTypeaheadConstants").PAGE_TYPE;return r===s},scrollEntryIntoView:function q(r,s){var t=c("ReactDOM").findDOMNode(s),u=s.getScrollTop(),v=r.offsetTop-u,w=t.offsetHeight-r.offsetHeight,x=Math.abs(w-v);if(v>=w&&x<=m)s.scrollToPosition(u+v-w,true,{duration:l});else if(v<0&&x<=w+m)s.scrollToPosition(u+v,true,{duration:l})},getMessageSearchEntry:function q(r){if(!c("MessengerEnvironment").messengerui||r.length<2)return null;return new(c("SearchableEntry"))({uniqueID:"__special_search_entry__",title:h._("Buscar mensajes para \"{queryString}\"",[h.param("queryString",r)]),photo:i("86924"),type:c("MercuryTypeaheadConstants").SEARCH_TYPE})}};f.exports=p}),null);
__d("MessengerDialogCancelButton.react",["fbt","MessengerDialogButton.react","React"],(function a(b,c,d,e,f,g,h){"use strict";var i,j;i=babelHelpers.inherits(k,c("React").PureComponent);j=i&&i.prototype;k.prototype.render=function(){return c("React").createElement(c("MessengerDialogButton.react"),babelHelpers["extends"]({action:"cancel",label:h._("Cancelar"),type:"secondary"},this.props))};function k(){i.apply(this,arguments)}f.exports=k}),null);
__d("MessengerDialogTitle.react",["cx","React","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";var i,j;i=babelHelpers.inherits(k,c("React").Component);j=i&&i.prototype;k.prototype.render=function(){return c("React").createElement("div",{className:c("joinClasses")("_19jt",this.props.className)},this.props.children)};function k(){i.apply(this,arguments)}f.exports=k}),null);
__d("ImageReact.bs",["Image.react","ReasonReact.bs","bs_js_null_undefined"],(function a(b,c,d,e,f,g){"use strict";function h(i,j,k,l,m,n,o,p){return c("ReasonReact.bs").wrapJsForReason(c("Image.react"),{className:c("bs_js_null_undefined").from_opt(i),alt:c("bs_js_null_undefined").from_opt(j),src:c("bs_js_null_undefined").from_opt(k),height:c("bs_js_null_undefined").from_opt(l),title:c("bs_js_null_undefined").from_opt(m),width:c("bs_js_null_undefined").from_opt(n),style:c("bs_js_null_undefined").from_opt(o)},p)}g.make=h}),null);
__d("MessengerSpinnerReact.bs",["cx","ix","fbt","React","ImageReact.bs","ReasonReact.bs","joinClasses"],(function a(b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k=i("86853"),l=i("86857"),m=i("86854"),n=c("ReasonReact.bs").statelessComponent("MessengerSpinnerReact");function o(s,t,u,v){__p&&__p();var w=s?s[0]:"",x=t?t[0]:"blue",y=u?u[0]:24,z=function z(){var B=+(y===24);if(B!==0){var C=+(x==="blue");if(C!==0)return k;else return l}else return m},A=n.slice();A[9]=function(){return c("React").cloneElement(c("ReasonReact.bs").element(0,0,c("ImageReact.bs").make([c("joinClasses")(w,"_3u55 _3qh2")],0,[z(0)],[y],0,[y],0,[])),{"aria-label":j._("Cargando..."),"aria-busy":true})};return A}var p=c("ReasonReact.bs").wrapReasonForJs(n,function(s){var t=s.className,u=s.color,v=s.size;return o([t==null?"":t],[u==null?"blue":u],[v==null?24:v],[])}),q=32,r=24;g.large_size=q;g.medium_size=r;g.blue_src=k;g.grey_src=l;g.large_blue_src=m;g.component=n;g.make=o;g.jsComponent=p}),null);
__d("MessengerSpinner.react",["MessengerSpinnerReact.bs"],(function a(b,c,d,e,f,g){f.exports=c("MessengerSpinnerReact.bs").jsComponent;f.exports.large_size=c("MessengerSpinnerReact.bs").large_size;f.exports.medium_size=c("MessengerSpinnerReact.bs").medium_size}),null);
__d("MessengerSearchFunnelLoggerConstants",[],(function a(b,c,d,e,f,g){"use strict";f.exports={NAME:"WWW_MESSENGER_SEARCH_SESSION_FUNNEL",FETCHED_STATE_IMPRESSION_LIST:"fetched_state_impression_list",LOADING_STATE_IMPRESSION_LIST:"loading_state_impression_list",SEND_SERVER_REQUEST:"send_server_request",WWW_SIDEBAR_TAG:"www",MESSENGER_DOT_COM:"messenger_dot_com",UNIVERSAL_SEARCH:"universal_search",USER_CONTACT:"user_contact",USER_NON_CONTACT:"user_non_contact",GROUP:"group",PAGE:"page",GAME:"game",TINCAN:"tincan",SMS:"sms",SMS_GROUP:"sms_group",COWORKER:"coworker",OTHER:"other"}}),null);
__d("FBRTCStreamTester",["mixInEventEmitter","FBRTCUtils"],(function a(b,c,d,e,f,g){__p&&__p();var h=100,i=30;function j(k){"use strict";if(!k)k={};this.$FBRTCStreamTester1=k.retries||i;this.$FBRTCStreamTester2=k.testInterval||h;this.$FBRTCStreamTester3=null;this.$FBRTCStreamTester4=null;this.$FBRTCStreamTester5=false}j.prototype.testStream=function(k,l){"use strict";__p&&__p();this.$FBRTCStreamTester3=k;if(!l){this.$FBRTCStreamTester5=true;this.$FBRTCStreamTester4=document.createElement("video");this.$FBRTCStreamTester4.muted=true;c("FBRTCUtils").attachMediaStream(this.$FBRTCStreamTester4,this.$FBRTCStreamTester3);this.$FBRTCStreamTester4.play()}else{this.$FBRTCStreamTester5=false;this.$FBRTCStreamTester4=l}this.$FBRTCStreamTester6(this.$FBRTCStreamTester1)};j.prototype.$FBRTCStreamTester6=function(k){"use strict";__p&&__p();if(this.$FBRTCStreamTester3.getVideoTracks().length===0||this.$FBRTCStreamTester4.currentTime>0){this.$FBRTCStreamTester7();this.emit("streamWorking")}else if(k<1){this.$FBRTCStreamTester7();this.emit("streamBroken")}else setTimeout(this.$FBRTCStreamTester6.bind(this,k-1),this.$FBRTCStreamTester2)};j.prototype.$FBRTCStreamTester7=function(){"use strict";if(this.$FBRTCStreamTester5)this.$FBRTCStreamTester4.pause();this.$FBRTCStreamTester4=null;this.$FBRTCStreamTester3=null};c("mixInEventEmitter")(j,{streamWorking:true,streamBroken:true});f.exports=j}),null);
__d("RTCUserRecord",["immutable"],(function a(b,c,d,e,f,g){"use strict";var h,i,j=c("immutable").Record({FBID:"UNDEFINED",isMessengerUser:false,isPartiesUser:false,lastConnectedAt:0,participantState:null,preferredStream:null,profilePictureUrl:null,profileUrl:null,screenStreams:c("immutable").Set(),streams:c("immutable").Set(),userName:"",userShortName:"",vanity:"",videoFilter:null});h=babelHelpers.inherits(k,j);i=h&&h.prototype;function k(){h.apply(this,arguments)}f.exports=k}),null);
__d("RTCUser",["FBRTCParticipantCallState","immutable","RTCUserRecord"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("RTCUserRecord"));i=h&&h.prototype;j.prototype.clone=function(){return new j(this.toObject())};j.prototype.setParticipantState=function(k){if((!this.participantState||this.participantState.state!==c("FBRTCParticipantCallState").CONNECTED)&&k.state===c("FBRTCParticipantCallState").CONNECTED)return this.set("participantState",k).set("lastConnectedAt",Date.now());return!this.participantState||this.participantState.state!==k.state?this.set("participantState",k):this};j.prototype.hasAudio=function(){return this.getAllStreamAudioTracks().some(function(k){return k.length>0})};j.prototype.hasVideo=function(){return this.streams.some(function(k){return k.getVideoTracks().length>0})};j.prototype.isAudioMuted=function(){if(!this.hasAudio())return true;return this.getAllStreamAudioTracks().every(function(k){return this.areAllTracksMuted(k)}.bind(this))};j.prototype.isVideoMuted=function(){if(!this.hasVideo())return true;return this.streams.every(function(k){return this.areAllTracksMuted(k.getVideoTracks())}.bind(this))};j.prototype.areAllTracksMuted=function(k){return!k.some(function(l){return l.enabled})};j.prototype.toggleMuteAudio=function(k){this.getAllStreamAudioTracks().forEach(function(l){return this.$RTCUser1(l)}.bind(this));return this.clone()};j.prototype.toggleMuteVideo=function(k){this.streams.forEach(function(l){return this.$RTCUser1(l.getVideoTracks(),k)}.bind(this));return this.clone()};j.prototype.getAllStreamAudioTracks=function(){return this.streams.concat(this.screenStreams).map(function(k){return k.getAudioTracks()})};j.prototype.hasStream=function(){return!this.streams.isEmpty()};j.prototype.addStream=function(k){return this.set("streams",this.streams.add(k))};j.prototype.setPreferredStream=function(k){return this.set("preferredStream",k)};j.prototype.removeStream=function(k){return this.set("streams",this.streams["delete"](k))};j.prototype.getMainStream=function(){return this.preferredStream?this.preferredStream:this.streams.first()};j.prototype.replaceStream=function(k,l){if(!this.streams.contains(k))return this;if(k===l)return this;return this.set("streams",this.streams.add(l)["delete"](k))};j.prototype.removeAllStreams=function(){return this.set("streams",c("immutable").Set())};j.prototype.hasScreenStream=function(){return!this.screenStreams.isEmpty()};j.prototype.addScreenStream=function(k){return this.set("screenStreams",this.screenStreams.add(k))};j.prototype.removeScreenStream=function(k){return this.set("screenStreams",this.screenStreams["delete"](k))};j.prototype.removeAllScreenStreams=function(){return this.set("screenStreams",c("immutable").Set())};j.prototype.replaceScreenStream=function(k,l){if(!this.screenStreams.contains(k))return this;if(k===l)return this;return this.set("screenStreams",this.screenStreams.add(l)["delete"](k))};j.prototype.hasVideoFilter=function(){return this.videoFilter!==null};j.prototype.setVideoFilter=function(k){return this.set("videoFilter",k)};j.prototype.$RTCUser1=function(k,l){var m=l!=null?!l:this.areAllTracksMuted(k);k.forEach(function(n){return n.enabled=m})};function j(){h.apply(this,arguments)}f.exports=j}),null);
__d("PhotoUtils",["Event","URI"],(function a(b,c,d,e,f,g){__p&&__p();var h={getImagesFromData:function i(j){var k=[];for(var l in j)if(l.indexOf("image")===0)k.push(j[l]);return k},getFBIDFromData:function i(j){return j&&j.id},getOriginalImageFromData:function i(j){return j.original||j.download_image},getDownloadURLFromData:function i(j){var k=this.getOriginalImageFromData(j);if(!k)return null;var l=new(c("URI"))(k.uri);l.addQueryData({dl:1});return l},getPermalinkFromData:function i(j){return j.permalink},canViewerMakeCoverPhoto:function i(j){return!!j.can_viewer_make_cover_photo},getCoverPhotoURLFromData:function i(j){return new(c("URI"))("/profile.php").addQueryData({preview_cover:h.getFBIDFromData(j)})},preload:function i(j,k,l){var m=j.getDimensions();for(var n=0;n<k.length;++n){var o=m.getBestFitImageFromPhoto(k[n],m.getMaxStageDimensions()),p=new Image();l&&c("Event").listen(p,"load",l.bind(null,k[n]));j.getLogger().log(o.uri);p.src=o.uri}}};f.exports=h}),null);
__d("SpotlightViewer",["cx","React","Spotlight.react"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j;i=babelHelpers.inherits(k,c("React").Component);j=i&&i.prototype;k.prototype.render=function(){"use strict";if(!this.props.open)return null;var l="_n3";if(this.props.className)l+=" "+this.props.className;return c("React").createElement(c("Spotlight.react"),{onBeforeHide:this.props.onBeforeHide,onHide:this.props.onHide,rootClassName:this.props.rootClassName,shown:this.props.open,key:"photoLayer"},c("React").createElement("div",{className:l,onClick:this.props.onClick,role:"presentation"},this.props.children))};function k(){"use strict";i.apply(this,arguments)}f.exports=k}),null);
__d("SpotlightViewerImage",["cx","Image.react","React","XUISpinner.react"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j;i=babelHelpers.inherits(k,c("React").Component);j=i&&i.prototype;function k(l){"use strict";j.constructor.call(this,l);this.$SpotlightViewerImage3=function(){this.setState({loading:false})}.bind(this);this.state={loading:true}}k.prototype.componentWillReceiveProps=function(l){"use strict";if(l.src!==this.props.src)this.setState({loading:true})};k.prototype.render=function(){"use strict";return c("React").createElement("div",{className:"_4-od"},this.$SpotlightViewerImage1(),this.$SpotlightViewerImage2())};k.prototype.$SpotlightViewerImage1=function(){"use strict";if(!this.state.loading)return null;return c("React").createElement(c("XUISpinner.react"),{className:"_enh",size:"large"})};k.prototype.$SpotlightViewerImage2=function(){"use strict";return c("React").createElement("div",{className:this.state.loading?"_eni":""},c("React").createElement(c("Image.react"),{onLoad:this.$SpotlightViewerImage3,src:this.props.src,style:{width:this.props.dimensions.x||"",height:this.props.dimensions.y||""}}))};f.exports=k}),null);
__d("SpotlightViewport",["csx","cx","Locale","Parent","React","ReactDOM","Vector","joinClasses"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j=c("React").PropTypes,k=c("React").createClass({displayName:"SpotlightViewport",propTypes:{stageDimensions:j.object.isRequired,useWidth:j.bool},PAGE_TO_PREV_PERCENTAGE:.2,sections:{NONE:null,FORWARD:1,BACKWARD:2},timer:null,getInitialState:function l(){return{currentActiveSection:this.sections.NONE,active:true}},componentDidMount:function l(){this._onMouseEnter()},componentWillUnmount:function l(){if(this.props.fadeInNOut)clearTimeout(this.timer)},_onMouseMove:function l(event){__p&&__p();var m=c("ReactDOM").findDOMNode(this),n=c("Vector").getEventPosition(event.nativeEvent),o=c("Vector").getElementPosition(m),p=this.props.useWidth?this.props.stageDimensions.x:c("Vector").getElementDimensions(m).x;if(this.props.fadeInNOut)if(this._isMouseOverActionBars(n))clearTimeout(this.timer);else this._onMouseEnter();var q,r=n.x-o.x,s=r/p;if(c("Locale").isRTL())q=s>1-this.PAGE_TO_PREV_PERCENTAGE;else q=s<this.PAGE_TO_PREV_PERCENTAGE;if(q)this.setState({currentActiveSection:this.sections.BACKWARD});else this.setState({currentActiveSection:this.sections.FORWARD})},_onClick:function l(event){var m=this.state.currentActiveSection==this.sections.FORWARD,n=event.target;if(!c("Parent").bySelector(n,"._51an"))this.props.onClick&&this.props.onClick(m,event)},_isMouseOverActionBars:function l(m){return m.y<70||m.y>this.props.stageDimensions.y-70},_onMouseEnter:function l(){this.setState({active:true});if(this.props.fadeInNOut){clearTimeout(this.timer);this.timer=setTimeout(this._onMouseLeave,1e3)}},_onMouseLeave:function l(){this.setState({active:false})},makeActive:function l(){this._onMouseEnter()},render:function l(){__p&&__p();var m="_4-of"+(!this.state.active&&!this.props.active?" _50-l":"")+(this.state.currentActiveSection===this.sections.BACKWARD?" _516a":"")+(this.state.currentActiveSection===this.sections.FORWARD?" _516b":"")+(this.props.showLoadingIndicator?" _51jp":"");if(this.props.className)m=c("joinClasses")(m,this.props.className);var n={};if(this.props.stageDimensions){n={height:this.props.stageDimensions.y};if(this.props.useWidth)n.width=this.props.stageDimensions.x}return c("React").createElement("div",{className:m,onClick:this._onClick,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave,onMouseMove:this._onMouseMove,role:"presentation",style:n},this.props.children,c("React").createElement("div",{className:"_4-og"},c("React").createElement("span",{className:"_4-oh"}),this.props.media,c("React").createElement("div",{className:"_4-oi"})))}});f.exports=k}),null);
__d("AbstractDialogFitHeight",["csx","cx","CSS","DOM","Event","Style","SubscriptionsHandler","Vector","throttle"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j=450,k=100,l=67,m=67;function n(o){"use strict";this.$AbstractDialogFitHeight1=o}n.prototype.enable=function(){"use strict";__p&&__p();this.$AbstractDialogFitHeight2=new(c("SubscriptionsHandler"))();this.$AbstractDialogFitHeight2.addSubscriptions(this.$AbstractDialogFitHeight1.subscribe("beforeshow",this.$AbstractDialogFitHeight3.bind(this)),c("Event").listen(window,"resize",c("throttle")(this.$AbstractDialogFitHeight3.bind(this))));this.$AbstractDialogFitHeight4=c("DOM").find(this.$AbstractDialogFitHeight1.getRoot(),"._4-i2");c("CSS").addClass(this.$AbstractDialogFitHeight4,"_5pfh");c("CSS").addClass(this.$AbstractDialogFitHeight1.getRoot(),"_3thl");this.$AbstractDialogFitHeight5=k;if(c("DOM").scry(this.$AbstractDialogFitHeight1.getRoot(),"._4-i0").length)this.$AbstractDialogFitHeight5+=l;if(c("DOM").scry(this.$AbstractDialogFitHeight1.getRoot(),"._5a8u").length)this.$AbstractDialogFitHeight5+=m};n.prototype.disable=function(){"use strict";this.$AbstractDialogFitHeight2.release();this.$AbstractDialogFitHeight2=null;c("CSS").removeClass(this.$AbstractDialogFitHeight4,"_5pfh");c("CSS").removeClass(this.$AbstractDialogFitHeight1.getRoot(),"_3thl")};n.prototype.$AbstractDialogFitHeight3=function(){"use strict";var o=c("Vector").getViewportDimensions().y,p=o-this.$AbstractDialogFitHeight5;c("Style").set(this.$AbstractDialogFitHeight4,this.getHeightProperty(),Math.max(j,p)+"px");this.$AbstractDialogFitHeight1.updatePosition()};f.exports=n}),null);
__d("DialogFitHeight",["AbstractDialogFitHeight"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("AbstractDialogFitHeight"));i=h&&h.prototype;j.prototype.getHeightProperty=function(){"use strict";return"height"};function j(){"use strict";h.apply(this,arguments)}f.exports=j}),null);
__d("StickersStateStore",["FluxReduceStore","immutable","StickersActions","StickersConfig","StickersDispatcher"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i;h=babelHelpers.inherits(j,c("FluxReduceStore"));i=h&&h.prototype;function j(){var k,l;for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.__moduleID=f.id,l}j.prototype.getInitialState=function(){return c("immutable").Map({recentStickers:[],recentStickersLoaded:false,showFlyout:false,storePackID:null,threadID:null,trayLoaded:false,trayPackID:null})};j.prototype.reduce=function(k,l){__p&&__p();var m=l,n=c("StickersActions").Types;switch(m.type){case n.ADD_RECENT_STICKER:var o=[m.sticker];k.get("recentStickers").forEach(function(p){if(p.id===m.sticker.id)return;o.push(p)});return k.set("recentStickers",o.splice(0,c("StickersConfig").max_mru_stickers));case n.HIDE_FLYOUT:return k.set("showFlyout",false);case n.LOAD_RECENT_STICKERS:return k.set("recentStickersLoaded",true).set("recentStickers",m.stickers);case n.SELECT_STORE_PACK:return k.set("storePackID",m.packID);case n.SELECT_TRAY_PACK:return k.set("trayPackID",m.packID).set("trayLoaded",true);case n.SHOW_FLYOUT:return k.set("showFlyout",true).set("threadID",m.threadID);case n.TRAY_LOADED:return k.set("trayLoaded",true);default:return k}};f.exports=new j(c("StickersDispatcher"))}),null);
__d("StickersStoreController",["cx","Bootloader","DialogFitHeight","DOM","LayerAutoFocus","LayerFadeOnHide","LayerHideOnEscape","PureStoreBasedStateMixin","React","ReactDOM","StickersActions","StickersDispatcher","StickersStateStore","XUIDialog.react","XUIDialogBody.react","XUISpinner.react","isSocialPlugin","requestAnimationFrame"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("React").PropTypes,j=688,k=320,l=null,m=c("React").createClass({displayName:"StoreLayer",mixins:[c("PureStoreBasedStateMixin")(c("StickersStateStore"))],propTypes:{isComposer:i.bool,onToggle:i.func.isRequired,shown:i.bool.isRequired},getDefaultProps:function r(){return{isComposer:false}},statics:{calculateState:function r(){return{packID:c("StickersStateStore").getState().get("storePackID")}}},getInitialState:function r(){return{renderStore:function s(){return c("React").createElement("div",{className:"_5r5e"},c("React").createElement(c("XUISpinner.react"),{background:"light",size:"large"}))}}},componentWillMount:function r(){c("StickersDispatcher").explicitlyRegisterStores([c("StickersStateStore")])},shouldComponentUpdate:function r(s){return!!s.shown},componentDidMount:function r(){c("Bootloader").loadModules(["StickersStore.react","react-relay/classic/container/RelayRootContainer","StickersStorePackListRoute","StickersStorePackDetailRoute"],function(s,t,u,v){this.setState({renderStore:function(){var w=this.state.packID?new v({packID:this.state.packID}):new u();return c("React").createElement(t,{Component:s,route:w,renderFetched:function(x){return c("React").createElement(s,babelHelpers["extends"]({},x,{isComposer:this.props.isComposer,packID:this.state.packID,shown:this.props.shown}))}.bind(this)})}.bind(this)})}.bind(this),"StickersStoreController")},_onToggle:function r(s){c("requestAnimationFrame")(function(){return this.props.onToggle(s)}.bind(this))},render:function r(){var s=c("isSocialPlugin")()&&document.body.offsetWidth<j?k:j;return c("React").createElement(c("XUIDialog.react"),{behaviors:{DialogFitHeight:c("DialogFitHeight"),LayerAutoFocus:c("LayerAutoFocus"),LayerFadeOnHide:c("LayerFadeOnHide"),LayerHideOnEscape:c("LayerHideOnEscape")},onToggle:this._onToggle,shown:this.props.shown,width:s},c("React").createElement(c("XUIDialogBody.react"),{className:"_5rq- autofocus"},this.state.renderStore()))}}),n=function n(r){if(!l){l=c("DOM").create("div");c("DOM").appendContent(document.body,l)}c("ReactDOM").render(c("React").createElement(m,{isComposer:r,onToggle:p,shown:true}),l)},o=function o(){if(!l)return;c("ReactDOM").render(c("React").createElement(m,{shown:false,onToggle:p}),l)},p=function p(r){r?n():o()},q={showStore:function r(s,t){c("StickersActions").selectStorePack(s);n(!!t)}};f.exports=q}),null);
__d("PhotoProjection",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({EQUIRECTANGULAR:"equirectangular",CUBESTRIP:"cubestrip",CYLINDRICAL:"cylindrical",TILED_CUBEMAP:"tiled_cubemap",PERSPECTIVE:"perspective"})}),null);
__d("PhotoRendererProjection",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({PERSPECTIVE:"perspective",STEREOGRAPHIC:"stereographic",CYLINDRICAL:"cylindrical",EQUIRECTANGULAR:"equirectangular"})}),null);