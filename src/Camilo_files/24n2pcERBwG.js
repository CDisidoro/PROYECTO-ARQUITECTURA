if (self.CavalryLogger) { CavalryLogger.start_js(["XvBhi"]); }

__d("MessengerComposerFlyoutButton.react",["BootloadOnRender.react","ChatFlyoutPlaceholder.react","MessengerContextualDialog.react","JSResourceReference","LazyComponent.react","AutoFocusableLink.react","React"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").PureComponent);i=h&&h.prototype;function k(){__p&&__p();var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.$MessengerComposerFlyoutButton1=false,this.state={open:!!this.props.clicked},this.$MessengerComposerFlyoutButton2=function(event){event.preventDefault();if(this.$MessengerComposerFlyoutButton1||this.state.open)return;this.setState({open:true})}.bind(this),this.$MessengerComposerFlyoutButton7=function(q){this.setState({open:q})}.bind(this),this.$MessengerComposerFlyoutButton3=function(event){this.$MessengerComposerFlyoutButton1=this.state.open}.bind(this),this.$MessengerComposerFlyoutButton6=function(){return this.setState({open:false})}.bind(this),this.$MessengerComposerFlyoutButton5=function(){return this.refs.root}.bind(this),m}k.prototype.render=function(){return[c("React").createElement(c("AutoFocusableLink.react"),{key:"button",autoFocus:this.props.autoFocus,className:this.props.className,label:"chat tab buttons",onClick:this.$MessengerComposerFlyoutButton2,onMouseDown:this.$MessengerComposerFlyoutButton3,ref:"root",title:this.props.title}),this.$MessengerComposerFlyoutButton4()]};k.prototype.$MessengerComposerFlyoutButton4=function(){if(!this.state.open)return null;return c("React").createElement(c("MessengerContextualDialog.react"),babelHelpers["extends"]({key:"flyout"},this.props.dialogProps,{alignment:this.props.flyoutAlignment,contextRef:this.$MessengerComposerFlyoutButton5,onBlur:this.$MessengerComposerFlyoutButton6,onToggle:this.$MessengerComposerFlyoutButton7,shown:true,width:300}),c("React").createElement(c("BootloadOnRender.react"),{component:c("React").createElement(c("LazyComponent.react"),babelHelpers["extends"]({placeholder:c("React").createElement(c("ChatFlyoutPlaceholder.react"),null)},this.props.flyoutProps,{shown:this.state.open,onHideDialog:this.$MessengerComposerFlyoutButton6})),loader:this.props.flyoutLoader,placeholder:c("React").createElement(c("ChatFlyoutPlaceholder.react"),null)}))};k.propTypes={className:j.string,clicked:j.bool,dialogProps:j.object,flyoutAlignment:j.string,flyoutLoader:j.instanceOf(c("JSResourceReference")),flyoutProps:j.object,participants:j.arrayOf(j.string),threadID:j.string,viewer:j.string,title:j.any};f.exports=k}),null);