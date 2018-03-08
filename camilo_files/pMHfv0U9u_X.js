if (self.CavalryLogger) { CavalryLogger.start_js(["Nnl+g"]); }

__d("BrowseEmptyResult",["csx","DOMQuery","UIPagelet","$"],(function a(b,c,d,e,f,g,h){__p&&__p();var i={init:function j(k,l,m){__p&&__p();var n=[],o=false;if(k===null)return;for(var p=0;p<k.length;p++){var q=c("$")(k[p]);if(k[p]==="initial_browse_result"){var r=c("DOMQuery").scry(q,"._58b7");if(r.length>0)o=true}if(q!==null&&q.textContent){var s=c("DOMQuery").scry(q,"._jyu"),t=s!=null;if(!t)n.push(k[p])}}if(n.length===0&&!o){k&&k.length===0;c("UIPagelet").loadFromEndpoint("BrowsePageletNoContentError",l,m,{usePipe:false})}}};f.exports=i}),null);
__d("BrowseMouseSpeedTracker",["Event","removeFromArray"],(function a(b,c,d,e,f,g){__p&&__p();var h=50,i=null,j=null,k=[],l={x:0,y:0},m=0,n=[{x:0,y:0},{x:0,y:0}];function o(){n[m].x=l.x;n[m].y=l.y;m=(m+1)%2}function p(){var v=n[0].x-n[1].x,w=n[0].y-n[1].y;return Math.sqrt(v*v+w*w)*(1e3/h)}function q(){if(i)return;j=c("Event").listen(document.body,"mousemove",function(event){l.x=event.pageX||event.screenX;l.y=event.pageY||event.screenY});i=window.setInterval(function(){o();s(p())},h)}function r(){if(i){window.clearInterval(i);j.remove();i=null}}function s(v){k.forEach(function(w){if(v<w.velocity){w.callback(v);t(w)}})}function t(v){c("removeFromArray")(k,v);k.length||r()}var u={addTrigger:function v(w,x){var y={velocity:w,callback:x};q();k.push(y);return{remove:t.bind(null,y)}}};f.exports=u}),null);
__d("BrowseRunOnLeave",["Run"],(function a(b,c,d,e,f,g){var h={register:function i(j){c("Run").onLeave(j);this.handlers=(this.handlers||[]).concat(j)},cleanup:function i(){this.handlers.forEach(function(j){return j.call(null,{})});this.handlers=[]}};f.exports=h}),null);
__d("BrowseMouse",["cx","BrowseMouseSpeedTracker","BrowseRunOnLeave","CSS","DataStore","DOM","Event","Parent","Toggler","removeFromArray"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=500,j="_3u0",k="_3u1",l=null,m=[];function n(v){return c("Parent").byClass(v,k)}function o(v){return"browse-"+(v?"over":"out")}function p(v){return c("CSS").addClass(v,k)}function q(v,w,x,y){var z=n(w);if(!y)m.push({element:w,callback:x});if(z){var A=o(v),B=c("DataStore").get(z,A,[]);c("DataStore").set(z,A,B.concat(x));return z}}function r(v,w){if(v){c("CSS").conditionClass(v,j,w);var x=c("DataStore").get(v,o(w));x&&x.forEach(function(y){y()})}}function s(v){var w=v.element;["browse-over","browse-out"].forEach(function(x){var y=c("DataStore").get(w,x);if(y){c("removeFromArray")(y,v.callback);y.length||c("DataStore").remove(w,x)}})}function t(){__p&&__p();var v=null;if(l)return;l=c("Event").listen(document.body,"mouseover",function(w){__p&&__p();var x=n(w.getTarget());if(!x||x==v)return;var y=null,z=null,A=false;v=x;var B=c("BrowseMouseSpeedTracker").addTrigger(i,function(){r(x,true);A=true}),C=function C(){B.remove();E.remove();y&&y.remove();z&&z.unsubscribe()},D=function D(){C();A&&r(x,false);v=null},E=c("Event").listen(x,"mouseleave",function(){var F=c("Toggler").getActive();if(F&&c("DOM").contains(x,F)){z=c("Toggler").subscribe("hide",D);y=c("Event").listen(x,"mouseover",C)}else D()})});c("BrowseRunOnLeave").register(function(){while(m.length)s(m.pop())})}var u={init:t,makeTarget:p,onMouseOver:q.bind(null,true),onMouseOut:q.bind(null,false),removeListeners:s};f.exports=u}),null);
__d("BrowsePerfLogger",["Arbiter","Banzai","DOM","PageEvents","collectDataAttributes","isEmpty"],(function a(b,c,d,e,f,g){__p&&__p();var h="browse_perf",i="#browse:independent:modules:pagelet",j="#search_marker+empty:independent_module",k="pagelet_loader_browse:independent:modules:pagelet",l=false,m=false,n={init:function o(p,q,r){__p&&__p();if(!b.CavalryLogger||b.CavalryLogger.getInstance().lid!==r||!p)return;l=null;m=null;var s={is_quickling:q,pagelet_id:p};if(!q){Object.assign(s,{arbiter:c("Arbiter"),event:c("PageEvents").BIGPIPE_ONLOAD});this.setupOnloadHook(s);return}c("Arbiter").subscribe("BigPipe/init",function(event,t){if(!t.arbiter)return;Object.assign(s,{arbiter:t.arbiter,event:c("PageEvents").AJAXPIPE_ONLOAD});setTimeout(function(){this.setupOnloadHook(s)}.bind(this),0)}.bind(this))},setTimeout:function o(){m=true},setupOnloadHook:function o(p){__p&&__p();return p.arbiter.subscribeOnce(p.event,function(q){__p&&__p();if(l)return;l=true;var r=b.CavalryLogger.getInstance(),s=r.events[p.pagelet_id]||[],t=this.getNavStart(p.is_quickling),u=document.getElementById("initial_browse_result"),v=u===null?{}:c("collectDataAttributes")(u.children[0],["bt"]).bt,w=r.values.t_tti-window._cstart,x=t?r.values.t_tti-t:0,y=!r.values.t_hooks||!r.values.t_onload||!r.values.t_tti||!t||!window._cstart,z=null;if(u===null)z="exception";else if(m)z="timeout";else if(c("isEmpty")(v))z="no_results";var A=c("DOM").scry(document,i).length&&c("DOM").scry(document,j).length,B=null;if(!A&&c("DOM").scry(document,i).length&&r.events[k])B=r.events[k].display;var C=r.events.pagelet_loader_initial_browse_result?r.events.pagelet_loader_initial_browse_result.display:null,D=B?Math.min(B,C):C,E={abnormal:y?1:null,arrive:s.arrive||0,browse_sid:v.session_id,css_done:s.css||0,display:s.display||0,experience_type:v.experience_type,failure:z,is_detailed:r.is_detailed_profiler?1:0,js_done:s.jsdone||0,js_start:s.jsstart||0,navigation_start:t,onload:r.values.t_onload||0,pagelet_id:p.pagelet_id,path:v.path,quickling:p.is_quickling?1:0,raw_tti:r.values.t_tti,result_type:v.result_type,tti:Math.floor(w),tti_full:Math.floor(x),typeahead_sid:v.typeahead_sid,window_cstart:window._cstart,empty_independent_module:A?1:0,independent_module_tti:Math.floor(B),browse_result_tti:Math.floor(C),top_module_tti:Math.floor(D)},F=window.performance||window.msPerformance;if(!p.is_quickling&&F.timing){F=F.timing;Object.assign(E,{wt_connect_end:F.connectEnd,wt_connect_start:F.connectStart,wt_domain_lookup_end:F.domainLookupEnd,wt_domain_lookup_start:F.domainLookupStart,wt_load_event_start:F.loadEventStart,wt_navigation_start:F.navigationStart,wt_request_start:F.requestStart,wt_response_end:F.responseEnd,wt_response_start:F.responseStart})}c("Banzai").post(h,E,{delay:0,retry:true})}.bind(this))},getNavStart:function o(p){if(p)return window.ExitTime;var q=window.performance||window.msPerformance;if(!q||!q.timing)return;return q.timing.navigationStart}};f.exports=n}),null);
__d("BrowseScrollingPager",["Arbiter","CSS","DOM","OnVisible","SubscriptionsHandler","UIPagelet"],(function a(b,c,d,e,f,g){__p&&__p();var h=800,i=[],j,k=0;function l(m,n,o){"use strict";this.loadingNode=m;this.globalData=n;this.visibleBuffer=o?o:h;this.subscriptionsHandler=new(c("SubscriptionsHandler"))();j&&this.pageletComplete(j);j=null}l.prototype.pageletComplete=function(m){"use strict";this.pageData=m;c("Arbiter").inform("BrowseScrollingPageletLoaded");setTimeout(this.$BrowseScrollingPager1.bind(this),1e3)};l.prototype.destroy=function(){"use strict";if(this.pageletLoadHandler)this.pageletLoadHandler.cancel();this.loadingNode=null;this.subscriptionsHandler.release()};l.prototype.$BrowseScrollingPager1=function(){"use strict";if(!this.loadingNode)return;else if(this.pageData){c("CSS").show(this.loadingNode);this.subscriptionsHandler.addSubscriptions(new(c("OnVisible"))(this.loadingNode,this.$BrowseScrollingPager2.bind(this),false,this.visibleBuffer))}else c("CSS").hide(this.loadingNode)};l.prototype.$BrowseScrollingPager3=function(){"use strict";return"fbBrowseScrollingPagerContainer"+k++};l.prototype.$BrowseScrollingPager2=function(){"use strict";if(this.$BrowseScrollingPager4)return;c("CSS").show(this.loadingNode.firstChild);this.contentContainer=c("DOM").create("div",{id:this.$BrowseScrollingPager3()});c("DOM").insertBefore(this.loadingNode,this.contentContainer);this.pageletLoadHandler=c("UIPagelet").loadFromEndpoint("BrowseScrollingSetPagelet",this.contentContainer.id,babelHelpers["extends"]({},this.globalData,this.pageData),{constHeight:true,sid:this.globalData.typeahead_sid||0,displayCallback:this.$BrowseScrollingPager5.bind(this)})};l.prototype.$BrowseScrollingPager5=function(m){"use strict";try{m()}catch(n){this.$BrowseScrollingPager4=true}finally{this.loadingNode&&c("CSS").hide(this.loadingNode.firstChild)}};l.init=function(m,n,o){var p=new l(m,n,o);i.push(p)};l.pageletComplete=function(m){var n=i[i.length-1];if(n)n.pageletComplete.call(n,m);else j=m};l.destroyAllPagers=function(){i.forEach(function(m){m.destroy()});i=[]};c("Arbiter").subscribe("BrowseScrollingPager/destroyIfNotLast",function(){if(i.length>1){var m=i.pop();m.destroy()}});f.exports=l}),null);
__d("BrowseViewportTracking",["csx","Arbiter","BrowseClientEventLogger","DOM","StreamViewportTracking","$","ge","viewportTrackingBuilder"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j;function k(n){__p&&__p();var o=void 0,p=void 0,q=void 0;function r(){if(!o)o=c("ge")("browse:independent:modules:pagelet");return o}function s(){if(!p)p=c("$")("initial_browse_result");return p}function t(){if(!q)q=c("ge")("bootstrap_entity_module");return q}var u=c("StreamViewportTracking").getBehavior(n,c("$")("initial_browse_result"),null);return{getDataFromConfig:function v(n,w){w.isTimetrackingEnabled=n.is_timetracking_enabled;w.vpvdDebug=n.vpvd_debug;w.trackingHooks=n.tracking_hooks},getAllStories:function v(){var w=r(),x=[];if(w!=null)x=c("DOM").scry(r(),"._401d");var y=c("DOM").scry(s(),"._401d"),z=t(),A=[];if(z)A=c("DOM").scry(z,"._401d");var B=A.concat(x).concat(y);return B},getStream:u.getStream,getStoryID:function v(w){var x=w.getAttribute("data-gt");if(x==null)return null;var y=JSON.parse(x);if(y&&y.xt)return String(JSON.parse(y.xt.substring(3)).raw_id);return null},getDataToLog:u.getDataToLog}}i=babelHelpers.inherits(l,c("StreamViewportTracking"));j=i&&i.prototype;function l(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.updateOnPageletLoad=function(){this.invalidateAllStoriesCache();this.updateTimeTrackingData(false,"pagelet_load")}.bind(this),o}l.prototype.init=function(n){j.init.call(this,n);this.subscriptions.addSubscriptions(c("Arbiter").subscribe("BrowseScrollingPageletLoaded",this.updateOnPageletLoad))};l.prototype.getTimetrackingDataToLog=function(n){__p&&__p();var o=j.getTimetrackingDataToLog.call(this,n),p=n.story;if(p==null)return o;o.log_type="vpvd";var q=p.getAttribute("data-gt");if(q==null)return o;var r=JSON.parse(q);if(!r)return o;o.xt=r.xt;return o};l.prototype.sendDataToLog=function(n,o,p,q){if(!o.xt)return;if(o.log_type="vpvd"){o.event="vpvd";c("BrowseClientEventLogger").maybeLogVisiblityEvent(o)}};l.prototype.cleanup=function(){m.clearSingleton();j.cleanup.call(this)};var m=c("viewportTrackingBuilder")(function(n){var o=new l(k(n));o.init(n);return o});m.init=m.singleton.bind(m);f.exports=m}),null);
__d("BrowseWindowTransitions",["Arbiter","Banzai","BrowseClientEventLogger","Event","NavigationMessage","Run","SearchFunnelLogger","SubscriptionsHandler"],(function a(b,c,d,e,f,g){__p&&__p();var h={init:function i(j,k,l,m){__p&&__p();this.subscriptions=new(c("SubscriptionsHandler"))();this.currentSessionID=j;this.currentVertical=k;this.logData("window_load");c("SearchFunnelLogger").logSERPLoaded(j,l,m);c("Run").onLeave(function(){this.logData("window_transition_to_fb_page");this.cleanup()}.bind(this));if(!this.unLoadAttached){this.unLoadAttached=true;c("Run").onUnload(function(){this.logData("window_unloaded")}.bind(this))}this.subscriptions.addSubscriptions(c("Event").listen(window,"focus",function(){this.logData("window_focus")}.bind(this)),c("Event").listen(window,"blur",function(){this.logData("window_blur")}.bind(this)),c("Arbiter").subscribe("pre_page_transition",function(event,n){this.logData("window_pre_page_transition")}.bind(this)),c("Arbiter").subscribe(c("NavigationMessage").NAVIGATION_BEGIN,function(event,n){this.logData("window_transition_to_LHC");this.cleanup()}.bind(this)),c("Arbiter").subscribe("BlueBar/homeClick",function(){this.logData("window_transition_to_home_click");this.cleanup()}.bind(this)))},logData:function i(event){c("BrowseClientEventLogger").logData(event,this.currentSessionID,this.currentVertical)},cleanup:function i(){this.subscriptions.release()}};f.exports=h}),null);
__d("DesktopVisibilityTracking",["Arbiter","ErrorUtils","LitestandMessages","Run","VisibilityTracking","VisibilityTrackingConfig"],(function a(b,c,d,e,f,g){var h={init:function i(){if(h.instance===undefined){h.instance=new(c("VisibilityTracking"))(c("VisibilityTrackingConfig"));h.instance.listeners.addSubscriptions(c("Arbiter").subscribe([c("LitestandMessages").STORIES_INSERTED],c("ErrorUtils").guard(function(){h.instance.refreshAndFireEvent()},"VisibilityTracking")))}c("Run").onLoad(function(){h.instance.refreshAndFireEvent()})}};f.exports=h}),null);
__d("SearchSnippetsHighlighter",["csx","NodeHighlighter","mayHaveConnectedCharacters"],(function a(b,c,d,e,f,g,h){"use strict";var i=babelHelpers["extends"]({},c("NodeHighlighter"),{getHighlightCandidates:function j(){return["._glo","._glm","._l1a"]},highlight:function j(k,l){if(l.some(c("mayHaveConnectedCharacters")))return;c("NodeHighlighter").highlight.call(i,k,l)}});f.exports=i}),null);