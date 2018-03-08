if (self.CavalryLogger) { CavalryLogger.start_js(["Q5RxW"]); }

__d("MessengerTypeaheadView.react",["cx","Bootloader","immutable","MessengerContactAdapters","MessengerContactList.react","MessengerSearchFunnelLoggerConstants","MessengerSearchLoggerUtil","MessengerUniversalSearchFunnelLoggerConstants","MessengerTypeaheadUtils","React","compactArray","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").PureComponent);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.state={isExpectingEntriesUpdate:false,localEntries:[]},this.$MessengerTypeaheadView1=c("immutable").OrderedMap(),this.$MessengerTypeaheadView2=function(r,event){this.props.onSelect&&this.props.onSelect(r,event)}.bind(this),n}l.prototype.componentDidUpdate=function(m,n){__p&&__p();var o,p=this;this.$MessengerTypeaheadView1=c("MessengerTypeaheadUtils").buildListSections(this.props.entries,this.props.queryString);if(m.isLoading&&!this.props.isLoading){var q;(function(){__p&&__p();p.$MessengerTypeaheadView3({name:c("MessengerSearchFunnelLoggerConstants").FETCHED_STATE_IMPRESSION_LIST,queryString:p.props.queryString,entries:p.props.entries.map(function(u){return u.getUniqueID()})});q=p.$MessengerTypeaheadView1.mapEntries(function(u){var v=u[0],w=u[1],x=w.map(function(y){var z=y.getUniqueID();return{result_fbid:z,result_type:c("MessengerSearchLoggerUtil").getLoggingTypeFromMercuryType(y.getType()),rank_section:v.toString(),data_source:[n.localEntries.includes(z)?c("MessengerUniversalSearchFunnelLoggerConstants").TAGS.LOCAL:c("MessengerUniversalSearchFunnelLoggerConstants").TAGS.SERVER_XCONTROLLER]}});return[v.toString(),c("compactArray")(x)]});var s=[];q.forEach(function(u){s=s.concat(u)});var t=c("immutable").OrderedMap();s.forEach(function(u){t=t.set(u.result_fbid,u)});c("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"],function(u){u.logImpressions(t,this.props.queryString,c("MessengerUniversalSearchFunnelLoggerConstants").TAGS.TYPEAHEAD,c("MessengerUniversalSearchFunnelLoggerConstants").TAGS.LOCAL_AND_SERVER)}.bind(p),"MessengerTypeaheadView.react");p.setState({isExpectingEntriesUpdate:false})})()}else if(m.isLoading&&this.state.isExpectingEntriesUpdate){var r=this.props.entries.map(function(s){return s.getUniqueID()});this.$MessengerTypeaheadView3({name:c("MessengerSearchFunnelLoggerConstants").LOADING_STATE_IMPRESSION_LIST,queryString:this.props.queryString,entries:r});c("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"],function(s){var t=this.props.entries.map(function(v){var w=v.getUniqueID(),x=v.getType();return[w,{result_fbid:w,result_type:c("MessengerSearchLoggerUtil").getLoggingTypeFromMercuryType(x),rank_section:x,data_source:[c("MessengerUniversalSearchFunnelLoggerConstants").TAGS.LOCAL]}]}),u=c("immutable").OrderedMap(t);s.logImpressions(u,this.props.queryString,c("MessengerUniversalSearchFunnelLoggerConstants").TAGS.TYPEAHEAD,c("MessengerUniversalSearchFunnelLoggerConstants").TAGS.LOCAL)}.bind(this),"MessengerTypeaheadView.react");this.setState({isExpectingEntriesUpdate:false,localEntries:r})}if(m.queryString!==this.props.queryString)this.setState({isExpectingEntriesUpdate:true})};l.prototype.render=function(){return c("React").createElement(c("MessengerContactList.react"),{controlleeID:this.props.controlleeID,className:c("joinClasses")(this.props.className,"_4p-s"),contactAdapter:c("MessengerContactAdapters").fromSearchableEntry,hasHoverState:this.props.hasHoverState,highlightedEntry:this.props.highlightedEntry,isLoading:this.props.isLoading,listSections:this.$MessengerTypeaheadView1,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight,onScrollIntoView:this.props.onScrollIntoView,onSelect:this.$MessengerTypeaheadView2,originalEntryIDs:this.props.originalEntryIDs,invitedEntryIDs:this.props.invitedEntryIDs,queryString:this.props.queryString,selectedEntryIDs:this.props.selectedEntryIDs,showPresence:false,viewer:this.props.viewer})};l.prototype.$MessengerTypeaheadView3=function(event){c("Bootloader").loadModules(["MessengerSearchFunnelLogger"],function(m){switch(event.name){case c("MessengerSearchFunnelLoggerConstants").LOADING_STATE_IMPRESSION_LIST:m.logLoadingStateQuery(c("MessengerSearchFunnelLoggerConstants").NAME,event.queryString,event.entries);break;case c("MessengerSearchFunnelLoggerConstants").FETCHED_STATE_IMPRESSION_LIST:m.logUpdateQuery(c("MessengerSearchFunnelLoggerConstants").NAME,c("MessengerSearchFunnelLoggerConstants").FETCHED_STATE_IMPRESSION_LIST,event.queryString,event.entries);break}},"MessengerTypeaheadView.react")};l.propTypes={controlleeID:k.string,entries:k.array.isRequired,hasHoverState:k.bool,highlightedEntry:k.object,isLoading:k.bool,onHighlight:k.func,onRenderHighlight:k.func,onScrollIntoView:k.func,onSelect:k.func,originalEntryIDs:k.instanceOf(c("immutable").Set),invitedEntryIDs:k.instanceOf(c("immutable").Set),queryString:k.string,selectedEntryIDs:k.instanceOf(c("immutable").Set),viewer:k.string.isRequired};f.exports=l}),null);
__d("ReactComposerPrefillComposedText",["EditorState","createRichComposedTextEditorState","decodeBlocks"],(function a(b,c,d,e,f,g){"use strict";var h={createEditorState:function i(j,k){var l=c("decodeBlocks")(j,k);return c("createRichComposedTextEditorState")(l)}};f.exports=h}),null);