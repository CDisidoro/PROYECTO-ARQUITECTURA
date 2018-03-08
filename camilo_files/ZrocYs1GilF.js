if (self.CavalryLogger) { CavalryLogger.start_js(["feouI"]); }

__d("TextInputControl",["DOMControl","Event","Input","debounce"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;h=babelHelpers.inherits(j,c("DOMControl"));i=h&&h.prototype;function j(k){"use strict";i.constructor.call(this,k);var l=this.getRoot(),m=c("debounce")(this.update.bind(this),0);c("Event").listen(l,{input:m,keydown:m,paste:m})}j.prototype.setMaxLength=function(k){"use strict";c("Input").setMaxLength(this.getRoot(),k);return this};j.prototype.getValue=function(){"use strict";return c("Input").getValue(this.getRoot())};j.prototype.isEmpty=function(){"use strict";return c("Input").isEmpty(this.getRoot())};j.prototype.setValue=function(k){"use strict";c("Input").setValue(this.getRoot(),k);this.update();return this};j.prototype.clear=function(){"use strict";return this.setValue("")};j.prototype.setPlaceholderText=function(k){"use strict";c("Input").setPlaceholder(this.getRoot(),k);return this};f.exports=j}),null);
__d("transferTextStyles",["Style"],(function a(b,c,d,e,f,g){var h={fontFamily:null,fontSize:null,fontStyle:null,fontWeight:null,lineHeight:null,wordWrap:null};function i(j,k){for(var l in h)if(Object.prototype.hasOwnProperty.call(h,l))h[l]=c("Style").get(j,l);c("Style").apply(k,h)}f.exports=i}),null);
__d("TextMetrics",["DOM","Style","UserAgent","transferTextStyles"],(function a(b,c,d,e,f,g){__p&&__p();function h(j){var k=j.clientWidth,l=c("Style").get(j,"-moz-box-sizing")=="border-box";if(l&&c("UserAgent").isBrowser("Firefox < 29"))return k;var m=c("Style").getFloat(j,"paddingLeft")+c("Style").getFloat(j,"paddingRight");return k-m}function i(j,k){"use strict";__p&&__p();this.$TextMetrics1=j;this.$TextMetrics2=!!k;var l="textarea",m="textMetrics";if(this.$TextMetrics2){l="div";m+=" textMetricsInline"}this.$TextMetrics3=c("DOM").create(l,{className:m});c("transferTextStyles")(j,this.$TextMetrics3);document.body.appendChild(this.$TextMetrics3)}i.prototype.measure=function(j){"use strict";__p&&__p();var k=this.$TextMetrics1,l=this.$TextMetrics3;j=(j||k.value)+"...";if(!this.$TextMetrics2){var m=h(k);c("Style").set(l,"width",Math.max(m,0)+"px")}if(k.nodeName==="TEXTAREA")l.value=j;else c("DOM").setContent(l,j);return{width:l.scrollWidth,height:l.scrollHeight}};i.prototype.destroy=function(){"use strict";c("DOM").remove(this.$TextMetrics3)};f.exports=i}),null);
__d("TextAreaControl",["Arbiter","ArbiterMixin","CSS","DOMControl","Event","Style","TextInputControl","TextMetrics","classWithMixins","mixin"],(function a(b,c,d,e,f,g){__p&&__p();var h,i;function j(l,m){return c("Style").getFloat(l,m)||0}h=babelHelpers.inherits(k,c("classWithMixins")(c("TextInputControl"),c("mixin")(c("ArbiterMixin"))));i=h&&h.prototype;function k(l){"use strict";i.constructor.call(this,l);this.autogrow=c("CSS").hasClass(l,"uiTextareaAutogrow");this.autogrowWithPlaceholder=c("CSS").hasClass(l,"uiTextareaAutogrowWithPlaceholder");this.width=null;c("Event").listen(l,"focus",this._handleFocus.bind(this))}k.prototype.setAutogrow=function(l){"use strict";this.autogrow=l;return this};k.prototype.onupdate=function(){"use strict";i.onupdate.call(this);this.updateHeight()};k.prototype.updateHeight=function(){"use strict";__p&&__p();if(this.autogrow){var l=this.getRoot();if(!this.metrics)this.metrics=new(c("TextMetrics"))(l);if(typeof this.initialHeight==="undefined"){this.isBorderBox=c("Style").get(l,"box-sizing")==="border-box"||c("Style").get(l,"-moz-box-sizing")==="border-box"||c("Style").get(l,"-webkit-box-sizing")==="border-box";this.borderBoxOffset=j(l,"padding-top")+j(l,"padding-bottom")+j(l,"border-top-width")+j(l,"border-bottom-width");this.initialHeight=l.offsetHeight-this.borderBoxOffset}var m=null;if((!l.value||l.value.length===0)&&this.autogrowWithPlaceholder)m=this.metrics.measure(l.placeholder);else m=this.metrics.measure();var n=Math.max(this.initialHeight,m.height);if(this.isBorderBox)n+=this.borderBoxOffset;if(this.maxHeight&&n>this.maxHeight){n=this.maxHeight;c("Arbiter").inform("maxHeightExceeded",{textArea:l})}if(n!==this.height){this.height=n;c("Style").set(l,"height",n+"px");c("Arbiter").inform("reflow");this.inform("resize")}}else if(this.metrics){this.metrics.destroy();this.metrics=null}};k.prototype.resetHeight=function(){"use strict";this.height=-1;this.update()};k.prototype.setMaxHeight=function(l){"use strict";this.maxHeight=l};k.prototype.setAutogrowWithPlaceholder=function(l){"use strict";this.autogrowWithPlacedholder=l};k.prototype._handleFocus=function(){"use strict";this.width=null};k.getInstance=function(l){"use strict";return c("DOMControl").getInstance(l)||new k(l)};f.exports=k}),null);
__d("AbstractTextArea.react",["cx","AbstractTextField.react","React","TextAreaControl"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j,k=c("React").Component,l=c("React").PropTypes;i=babelHelpers.inherits(m,k);j=i&&i.prototype;m.prototype.componentDidUpdate=function(){"use strict";this.$AbstractTextArea2&&this.$AbstractTextArea2.onupdate()};m.prototype.componentWillUnmount=function(){"use strict";this.$AbstractTextArea2=null};m.prototype.render=function(){"use strict";return c("React").createElement(c("AbstractTextField.react"),this.props,c("React").createElement("textarea",{className:"_58an",onClick:this.props.onClick,onMouseDown:this.props.onMouseDown,onKeyUp:this.props.onKeyUp,rows:this.props.rows,tabIndex:this.props.tabIndex,ref:function(n){this.$AbstractTextArea1=n;this.$AbstractTextArea3()}.bind(this)}))};m.prototype.$AbstractTextArea3=function(){"use strict";if(this.$AbstractTextArea1&&this.props.autoGrow&&!this.$AbstractTextArea2){var n=new(c("TextAreaControl"))(this.$AbstractTextArea1);n.setAutogrow(true);n.onupdate();this.$AbstractTextArea2=n}};m.prototype.focusInput=function(){"use strict";this.$AbstractTextArea1&&this.$AbstractTextArea1.focus()};m.prototype.blurInput=function(){"use strict";this.$AbstractTextArea1&&this.$AbstractTextArea1.blur()};m.prototype.getTextFieldDOM=function(){"use strict";return this.$AbstractTextArea1};m.prototype.getValue=function(){"use strict";return this.$AbstractTextArea1?this.$AbstractTextArea1.value:""};function m(){"use strict";i.apply(this,arguments)}m.propTypes=babelHelpers["extends"]({},c("AbstractTextField.react").propTypes,{autoGrow:l.bool});f.exports=m}),null);
__d("BusinessConversationEventsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:BusinessConversationEventsLoggerConfig",this.$BusinessConversationEventsTypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:BusinessConversationEventsLoggerConfig",this.$BusinessConversationEventsTypedLogger1,c("Banzai").VITAL)};h.prototype.logImmediately=function(){c("GeneratedLoggerUtils").log("logger:BusinessConversationEventsLoggerConfig",this.$BusinessConversationEventsTypedLogger1,{signal:true})};h.prototype.clear=function(){this.$BusinessConversationEventsTypedLogger1={};return this};h.prototype.getData=function(){return babelHelpers["extends"]({},this.$BusinessConversationEventsTypedLogger1)};h.prototype.updateData=function(j){this.$BusinessConversationEventsTypedLogger1=babelHelpers["extends"]({},this.$BusinessConversationEventsTypedLogger1,j);return this};h.prototype.setActorID=function(j){this.$BusinessConversationEventsTypedLogger1.actor_id=j;return this};h.prototype.setEvent=function(j){this.$BusinessConversationEventsTypedLogger1.event=j;return this};h.prototype.setEventLocation=function(j){this.$BusinessConversationEventsTypedLogger1.event_location=j;return this};h.prototype.setEventTarget=function(j){this.$BusinessConversationEventsTypedLogger1.event_target=j;return this};h.prototype.setIsActorPage=function(j){this.$BusinessConversationEventsTypedLogger1.is_actor_page=j;return this};h.prototype.setIsEmployee=function(j){this.$BusinessConversationEventsTypedLogger1.is_employee=j;return this};h.prototype.setMessageAttachmentInfos=function(j){this.$BusinessConversationEventsTypedLogger1.message_attachment_infos=c("GeneratedLoggerUtils").serializeVector(j);return this};h.prototype.setMessageAttribution=function(j){this.$BusinessConversationEventsTypedLogger1.message_attribution=j;return this};h.prototype.setMessageBodyLength=function(j){this.$BusinessConversationEventsTypedLogger1.message_body_length=j;return this};h.prototype.setMessageChannel=function(j){this.$BusinessConversationEventsTypedLogger1.message_channel=j;return this};h.prototype.setMessageConversationState=function(j){this.$BusinessConversationEventsTypedLogger1.message_conversation_state=j;return this};h.prototype.setMessageID=function(j){this.$BusinessConversationEventsTypedLogger1.message_id=j;return this};h.prototype.setMessageIntent=function(j){this.$BusinessConversationEventsTypedLogger1.message_intent=j;return this};h.prototype.setMessageIsGroupThread=function(j){this.$BusinessConversationEventsTypedLogger1.message_is_group_thread=j;return this};h.prototype.setMessageIsSentViaMessengerPlatform=function(j){this.$BusinessConversationEventsTypedLogger1.message_is_sent_via_messenger_platform=j;return this};h.prototype.setMessageOfflineThreadingID=function(j){this.$BusinessConversationEventsTypedLogger1.message_offline_threading_id=j;return this};h.prototype.setMessageRecipientCount=function(j){this.$BusinessConversationEventsTypedLogger1.message_recipient_count=j;return this};h.prototype.setMessageRecipientInfos=function(j){this.$BusinessConversationEventsTypedLogger1.message_recipient_infos=c("GeneratedLoggerUtils").serializeMap(j);return this};h.prototype.setMessageServerTimestamp=function(j){this.$BusinessConversationEventsTypedLogger1.message_server_timestamp=j;return this};h.prototype.setMessageSource=function(j){this.$BusinessConversationEventsTypedLogger1.message_source=j;return this};h.prototype.setMessageTags=function(j){this.$BusinessConversationEventsTypedLogger1.message_tags=c("GeneratedLoggerUtils").serializeVector(j);return this};h.prototype.setMessageThreadFbid=function(j){this.$BusinessConversationEventsTypedLogger1.message_thread_fbid=j;return this};h.prototype.setMessageType=function(j){this.$BusinessConversationEventsTypedLogger1.message_type=j;return this};h.prototype.setMesssageRecipientID=function(j){this.$BusinessConversationEventsTypedLogger1.messsage_recipient_id=j;return this};h.prototype.setPageCategory=function(j){this.$BusinessConversationEventsTypedLogger1.page_category=j;return this};h.prototype.setPageHasMessengerPlatformBot=function(j){this.$BusinessConversationEventsTypedLogger1.page_has_messenger_platform_bot=j;return this};h.prototype.setPageID=function(j){this.$BusinessConversationEventsTypedLogger1.page_id=j;return this};h.prototype.setPageMessagingActiveness=function(j){this.$BusinessConversationEventsTypedLogger1.page_messaging_activeness=j;return this};h.prototype.setPageSubVertical=function(j){this.$BusinessConversationEventsTypedLogger1.page_sub_vertical=j;return this};h.prototype.setPageVertical=function(j){this.$BusinessConversationEventsTypedLogger1.page_vertical=j;return this};h.prototype.updateExtraData=function(j){j=c("nullthrows")(c("GeneratedLoggerUtils").serializeMap(j));c("GeneratedLoggerUtils").checkExtraDataFieldNames(j,i);this.$BusinessConversationEventsTypedLogger1=babelHelpers["extends"]({},this.$BusinessConversationEventsTypedLogger1,j);return this};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l)};var i={actor_id:true,event:true,event_location:true,event_target:true,is_actor_page:true,is_employee:true,message_attachment_infos:true,message_attribution:true,message_body_length:true,message_channel:true,message_conversation_state:true,message_id:true,message_intent:true,message_is_group_thread:true,message_is_sent_via_messenger_platform:true,message_offline_threading_id:true,message_recipient_count:true,message_recipient_infos:true,message_server_timestamp:true,message_source:true,message_tags:true,message_thread_fbid:true,message_type:true,messsage_recipient_id:true,page_category:true,page_has_messenger_platform_bot:true,page_id:true,page_messaging_activeness:true,page_sub_vertical:true,page_vertical:true};f.exports=h}),null);
__d("SUICardHeader.react",["cx","React","SUIComponent","SUITheme"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes,l={hasVerticalPadding:true,isFullBleed:false};i=babelHelpers.inherits(m,c("SUIComponent"));j=i&&i.prototype;m.prototype.render=function(){var n=c("SUITheme").get(this).SUICard,o=this.props.isFullBleed&&n.headerFullBleed||n.header,p=this.props,q=p.children,r=p.hasVerticalPadding,s=p.rightContent,t=c("React").Children.count(q)>1?c("React").createElement("div",null,q):q;return c("React").createElement("div",{className:"_5h7n"+(!t&&s?" _3r0r":""),style:babelHelpers["extends"]({},o,{paddingBottom:r?o.paddingBottom:0,paddingTop:r?o.paddingTop:0})},t,s)};function m(){i.apply(this,arguments)}m.propTypes={hasVerticalPadding:k.bool,isFullBleed:k.bool,rightContent:k.node,theme:k.instanceOf(c("SUITheme"))};m.defaultProps=l;f.exports=m}),null);
__d("BusinessConversationEvent",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({BLOCK:"block",DELETE:"delete",MESSAGE_SENT:"message_sent",IMPRESSION:"impression",CREATE:"create",UPSELL:"upsell",UNBLOCK:"unblock",CLICK:"click",XOUT:"xout",TAP:"tap",EXIT:"exit"})}),null);
__d("BusinessConversationEventTarget",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ONE_CLICK_MESSAGE_BUTTON:"one_click_message_button",CALL_DEFLECTION_UPSELL_THREAD:"call_deflection_upsell_thread",COMMENT_QUESTION_TRIGGERED_MESSAGE_BUTTON:"comment_question_triggered_message_button",CUSTOMIZED_MESSAGE_CTA_SELECTOR:"customized_message_cta_selector",PAGE_STORY_REPLY_BAR:"page_story_reply_bar",USER_MESSAGE_PROMPT:"user_message_prompt",COMPOSER_MESSAGE_TAGGER:"composer_message_tagger",MESSENGER_PAGES_CHAT_EXTENSION:"messenger_pages_chat_extension",PAGE_MESSAGE_OBJECTIVE_POST:"page_message_objective_post",SEND_MESSAGE_BUTTON:"send_message_button"})}),null);
__d("BusinessConversationLogger",["BusinessConversationEventsTypedLogger"],(function a(b,c,d,e,f,g){var h={log:function i(j,event,k){var l=arguments.length<=3||arguments[3]===undefined?null:arguments[3],m=arguments[4],n=m||{};Object.keys(n).forEach(function(o){var p=n[o];if(p instanceof Array||p instanceof Object)p=JSON.stringify(p);n[o]=p});new(c("BusinessConversationEventsTypedLogger"))().setPageID(j).setEvent(event).setEventLocation(l).setEventTarget(k).updateExtraData(n).log()}};f.exports=h}),null);
__d("SphericalMediaConstants",[],(function a(b,c,d,e,f,g){"use strict";var h={COMP_PHOTO_EDIT_THUMB:"PhotoEditThumbanil",COMP_PHOTO_VIEWER:"PhotoViewer",EDIT_VIEWPORT_SIZE:{width:476,height:476},HI_ALPHA_BG:{start:.2,end:.5},HI_ALPHA_ELEMENT:{start:.5,end:.85},HI_ALPHA_DURATION:400,HI_SIZE_NORMAL:{width:35,height:35,center_radius:2,background_radius:17.5,inner_radius:12,arc_radius:6.3,arc_stroke:5.3,inner_stroke:1,triangle:[2,2.5,5.2],rim_radius:16.8,rim_stroke:1.4},HI_SIZE_FULL:{width:50,height:50,center_radius:3,background_radius:25,inner_radius:17.14,arc_radius:9,arc_stroke:7.57,inner_stroke:1.5,triangle:[2.85,4.29,7.9],rim_radius:24,rim_stroke:2},HI_BLINK_ARC_RAD:Math.PI/6,HI_BLINK_DURATION:400,HI_FADE_OUT_DELAY:1e3,MOUSE_EXPOSURE:4e3,LOGGER_SURFACES:{newsfeed:"newsfeed",timeline:"timeline",fullpage:"photo_viewer",snowlift:"www_snowlift",composer:"composer",albumComposer:"album_composer",other:"other"},LOGGER_SIGNIFICANT_MOVEMENT_DEGREE:30,LOGGER_SIGNIFICANT_MOVEMENT_MS:1e3,GYRO_SLIP_FACTOR:.15,RB_SPRING_FACTOR:25,RB_MAX_SPRING_DEGREE:15,RB_MAX_STRETCH_X_DEGREE:20,RB_MAX_STRETCH_Y_DEGREE:20,RB_FRICTION:.3,TILED_CUBE_FACES:{PLUS_X:2,MINUS_X:0,PLUS_Y:4,MINUS_Y:5,PLUS_Z:3,MINUS_Z:1},TILED_CUBE_TILE_CONTENT_SIZE:510,TILED_CUBE_TILE_PADDING_PIXELS:1,TAG:"tag",TAGGED_FACEBOX:"tagged_facebox",UNTAGGED_FACEBOX:"untagged_facebox",DEFAULT_SPATIAL_TAG_SIZE_DEGREE:10,DEFAULT_VOLUME:{MUTE:0,HIGH:.7}};f.exports=h}),null);