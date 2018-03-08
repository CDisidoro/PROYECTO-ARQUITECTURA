if (self.CavalryLogger) { CavalryLogger.start_js(["fSrrE"]); }

__d("FantaReducersGetMessages",["AsyncRequest","FantaGetMessageActions","FantaTabActions","FantaTypeJoinableThread","MercuryParticipants","immutable","ImmutableObject","MercuryIDs","MercuryLogMessageType","MercuryMessageStore","MercuryThreadActions","MercuryThreads","TimeSlice","UserActivity","XMNCommercePageNullStateCTAController","getPageIDFromThreadID","setImmediate"],(function a(b,c,d,e,f,aa){"use strict";__p&&__p();var g=c("MercuryThreadActions").get(),h=c("MercuryThreads").get(),i=c("FantaTabActions").Types,j=c("FantaGetMessageActions").Types,k={},l={};function m(J,K){switch(K.type){case i.OPEN_TAB:case j.CLEAR_PARTICIPANTS:J=x(J,K.tabID);break}return J}function n(J,K){switch(K.type){case i.OPEN_TAB_WITH_INTERSTITIAL_DATA:J=y(J,K.interstitialData);break}return J}function o(J,K){switch(K.type){case i.REPLACE_TAB:J=x(J,K.newTabID);break}return J}function p(J,K){__p&&__p();switch(K.type){case j.CLEAR_PREVIEW:var L=K.tabID,M=K.tokens,N=J.mercury.tabContents.get(L);if(!N)return J;var O=M.map(function(P){var Q=P.info.uid;if(c("MercuryIDs").isValid(Q))return Q;return c("MercuryIDs").getParticipantIDFromUserID(Q)});N.messageStore&&N.messageStore.destroy();N=N.merge({messages:c("immutable").List(),hasFetchedAll:false,messageStore:null,threadPreviewID:null,threadPreviewRecipients:c("immutable").List(O)});J=J.setIn(["mercury","tabContents",L],N);h.getThreadMeta(L,function(P){c("setImmediate")(function(){return c("FantaGetMessageActions").onGetThreadPreviewResponse(L,P)})});break}return J}function q(J,K){switch(K.type){case j.ADD_PARTICIPANTS:J=t(J,K.tabID,K.previewTabID);break}return J}function r(J,K){__p&&__p();switch(K.type){case i.LOAD_FROM_DATA:var L=J.tabGroup,M=K.tabData,N=M.interstitialData;if(L.updatedTime>=M.updatedTime||M.updatedTime===undefined){for(var O=J.tabGroup.tabs.keys(),P=Array.isArray(O),Q=0,O=P?O:O[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var R;if(P){if(Q>=O.length)break;R=O[Q++]}else{Q=O.next();if(Q.done)break;R=Q.value}var S=R,T=J.mercury.tabContents.get(S).messageStore;if(!T){var U=c("MercuryIDs").getThreadFBIDFromThreadID(S);if(N&&N[U]){N[U].threadID=S;J=y(J,N[U])}else J=x(J,S)}}return J}else for(var V=J.tabGroup.tabs.keys(),W=Array.isArray(V),X=0,V=W?V:V[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var Y;if(W){if(X>=V.length)break;Y=V[X++]}else{X=V.next();if(X.done)break;Y=X.value}var Z=Y,$=c("MercuryIDs").getThreadFBIDFromThreadID(Z);if(N&&N[$]){N[$].threadID=Z;J=y(J,N[$])}else J=x(J,Z)}break}return J}function s(J,K){switch(K.type){case j.FETCH_MORE_MESSAGES:var L=K.threadID,M=J.mercury.tabContents.get(L).messageStore;if(M&&!l[L]){l[L]=true;M.fetchMoreMessages()}break}return J}function t(J,K,L){h.getThreadMeta(L,function(M){c("setImmediate")(function(){return c("FantaGetMessageActions").onGetThreadPreviewResponse(K,M)})});return J}function u(J,K){switch(K.type){case j.ON_GET_THREAD_PREVIEW_RESPONSE:var L=K.tabID,M=K.thread;return v(J,L,M)}return J}function v(J,K,L){__p&&__p();var M=L.thread_id,N=new(c("MercuryMessageStore"))(M),O=J.mercury.tabContents.get(K);if(l[M]||!O)return J;l[M]=true;O&&O.messageStore&&O.messageStore.destroy();O=O.merge({thread:L,messageStore:N});J=J.setIn(["mercury","tabContents",K],O);var P=setTimeout(function(){l[M]=false;c("FantaGetMessageActions").onShowContextBannerTimer(K)},6e3);N.subscribe(function(Q){l[M]=false;var R=Q.messages&&Q.messages[0];if(R&&R.log_message_type&&R.log_message_type===c("MercuryLogMessageType").SERVER_ERROR&&O.messages.size===0)N.fetchMoreMessages();else{clearTimeout(P);c("setImmediate")(function(){c("FantaGetMessageActions").onMessageStoreResponse(Q.messages,K)})}});return J}function w(J,K){switch(K.type){case j.REFRESH_THREAD:return x(J,K.threadID)}return J}function x(J,K){__p&&__p();if(!k[K]){var L=c("getPageIDFromThreadID")(K);if(L){var M=c("XMNCommercePageNullStateCTAController").getURIBuilder();new(c("AsyncRequest"))().setURI(M.getURI()).setMethod("POST").setData({page_id:L}).setHandler(function(N){if(N&&N.payload)c("FantaGetMessageActions").onPageNullResponse(K,N.payload)}).send()}k[K]=true;h.getThreadMeta(K,function(N){c("setImmediate")(function(){return c("FantaGetMessageActions").onGetThreadResponse(N)})})}return J}function y(J,K){var L=new(c("FantaTypeJoinableThread"))(K),M=K.threadID,N=M&&J.mercury.tabContents.get(M);if(N){N=N.merge({joinableInterstitialData:L});J=J.setIn(["mercury","tabContents",M],N)}return J}function z(J,K){switch(K.type){case j.ON_PAGE_NULL_RESPONSE:var L=K.threadID,M=K.nullStateCTA,N=J.mercury.tabContents.get(L);if(N){N=N.merge({nullStateCTA:new(c("ImmutableObject"))(M)});J=J.setIn(["mercury","tabContents",L],N)}break}return J}function A(J,K){switch(K.type){case j.ON_GET_THREAD_RESPONSE:var L=K.thread;J=B(J,L);break}return J}function B(J,K){__p&&__p();var L=K.thread_id;k[L]=false;var M=J.mercury.tabContents.get(L);if(!M)return J;var N=M.messageStore;if(!N)J=v(J,L,K);else{M=M.merge({thread:K});J=J.setIn(["mercury","tabContents",L],M)}if(K.group_approval_queue&&K.group_approval_queue.length>0)C(L,K.group_approval_queue);return J}function C(J,K){var L=K.reduce(function(M,N){var O=N.requester,P=N.inviter;return M.concat([c("MercuryIDs").getParticipantIDFromUserID(O.id),c("MercuryIDs").getParticipantIDFromUserID(P.id)])},[]);c("MercuryParticipants").getMulti(L,function(M){c("setImmediate")(function(){return c("FantaGetMessageActions").onApprovalQueueResponse(J,M)})})}function D(J,K){switch(K.type){case j.ON_GET_APPROVAL_QUEUE_RESPONSE:var L=K.tabID,M=K.membershipParticipants,N=J.mercury.tabContents.get(L);if(!N)return J;N=N.merge({membershipParticipants:M});J=J.setIn(["mercury","tabContents",L],N)}return J}function E(J,K){switch(K.type){case j.THREADS_UPDATED:K.threads.forEach(function(L){J=B(J,new(c("ImmutableObject"))(L))})}return J}function F(J,K){switch(K.type){case j.ON_MESSAGE_STORE_RESPONSE:var L=K.messages,M=K.tabID,N=J.mercury.tabContents.get(M),O=N&&N.messageStore;if(O){var P=O.hasFetchedAll();N=N.merge({hasFetchedAll:P,messages:c("immutable").List(L)});J=J.setIn(["mercury","tabContents",M],N)}break}return J}function G(J,K){switch(K.type){case j.ON_SHOW_CONTEXT_BANNER_TIMER:var L=J.mercury.tabContents.get(K.threadID);if(!L)return J;L=L.merge({showContextBanner:true});J=J.setIn(["mercury","tabContents",K.threadID],L);break}return J}function H(J,K){__p&&__p();switch(K.type){case i.CLOSE_AND_TAB_NEXT:case i.FOCUS_NEXT_TAB:case i.FOCUS_PREVIOUS_TAB:case i.FOCUS_TAB:case i.SCROLL_BOTTOM_CHANGED:case i.UNMINIMIZE_TAB:case j.ON_GET_THREAD_RESPONSE:case j.ON_MESSAGE_STORE_RESPONSE:case j.REFRESH_THREAD:case j.THREADS_UPDATED:var L=J.tabGroup.focusedTabID;if(L){var M=J.tabGroup.tabs.get(L);if(M&&!M.isMinimized&&c("UserActivity").isOnTab()&&c("UserActivity").isActive()){var N=J.mercury.tabContents.get(L);if(N&&N.isScrolledToBottom)I(L)}}break}return J}function I(J){var K=function K(){g.markSeen(J);g.markRead(J)};c("TimeSlice").guard(K,"superfluous request to first open DD",{propagationType:c("TimeSlice").PropagationType.ORPHAN})()}f.exports={addParticipants:q,clearPreview:p,fetchMoreMessages:s,loadFromData:r,onApprovalQueueResponse:D,onFocusChange:H,onGetThreadPreviewResponse:u,onGetThreadResponse:A,onMessageStoreResponse:F,onPageNullResponse:z,onShowContextBannerTimer:G,openInterstitialTab:n,openTab:m,refreshThread:w,replaceTab:o,threadsUpdated:E}}),null);
__d("MessengerThreadsWebGraphQLQuery",["WebGraphQLQueryBase"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();f.exports=function(){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("WebGraphQLQueryBase"));i=h&&h.prototype;j.__getDocID=function(){"use strict";return"1548770378574241"};j.getQueryID=function(){"use strict";return"151690578849246"};function j(){"use strict";h.apply(this,arguments)}return j}()}),null);
__d("MessengerGraphQLThreadFetcher.bs",["Promise","bs_array","BanzaiODS","bs_caml_array","bs_pervasives","WebGraphQL","bs_js_null_undefined","MessengerThreadsWebGraphQLQuery","MessengerServerPayloadTransformer.bs"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(k,l,m,n,o){__p&&__p();if(k==null)if(n!==0)return{actions:null,thread:undefined,end_of_history:{type:"user",fbid:l},roger:null};else return{actions:null,thread:undefined,end_of_history:undefined,roger:null};else{var p=c("MessengerServerPayloadTransformer.bs").getThreadFBID(k),q=c("MessengerServerPayloadTransformer.bs").getOtherUserID(k),r=q==null?p==null?c("bs_pervasives").failwith("No thread ID"):p:q;if(r!==l)c("bs_pervasives").failwith("Thread ID mismatch");var s=c("MessengerServerPayloadTransformer.bs").transformThread(m,k,o),t=c("bs_js_null_undefined").from_opt(c("MessengerServerPayloadTransformer.bs").transformMessages(m,k,o)),u=c("MessengerServerPayloadTransformer.bs").transformReadReceipts(m,k),v;if(u){var w={};w[l]=u[0];v=w}else v=null;var x=c("MessengerServerPayloadTransformer.bs").getMessagePageInfo(k);if(x)if(x[0].has_previous_page)return{actions:t,thread:s,end_of_history:undefined,roger:v};else return{actions:t,thread:s,end_of_history:{type:"thread",fbid:l},roger:v};else return{actions:t,thread:s,end_of_history:undefined,roger:v}}}function i(k){return new(c("MessengerThreadsWebGraphQLQuery"))({id:k.id,message_limit:k.limit,load_messages:+(k.limit>0),load_read_receipts:k.loadReadReceipts,before:k.timestamp})}function j(k,l,m){var n=c("bs_array").map(i,l);return c("Promise").all(c("WebGraphQL").execAll(n,{actorID:m?k:null,batchName:"MessengerGraphQLThreadFetcher"}))["catch"](function(o){c("BanzaiODS").bumpEntityKey("messenger_webgraphql","fetch_thread.failure");return c("Promise").reject(o)}).then(function(o){c("BanzaiODS").bumpEntityKey("messenger_webgraphql","fetch_thread.success");return c("bs_array").mapi(function(p,q){var r=q.message_thread,s=c("bs_caml_array").caml_array_get(l,p);return h(r,s.id,k,s.isCanonical,m)},o)})}g._transformPayload=h;g._getQuery=i;g.fetchAll=j}),null);