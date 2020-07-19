(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],{22:function(e,t,a){},25:function(e,t,a){e.exports=a(40)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),i=a.n(l),o=a(11),s=a.n(o),c=a(15),u=a(5),h=a(6),d=a(10),m=a(8),p=a(7),v=a(16),f=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"header"},r.a.createElement("h1",null,"RESTy"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.b,{activeClassName:"selected",exact:!0,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(v.b,{activeClassName:"selected",exact:!0,to:"/history"},"History")))))}}]),a}(r.a.Component),b=(a(22),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("p",null,"\xa9 2020 Marlene Rinker"))}}]),a}(r.a.Component)),E=function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?t:null}(e.condition,e.children)},y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={method:"GET",url:"",loading:!1},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.handleOption=n.handleOption.bind(Object(d.a)(n)),n.setStateFromProps=n.setStateFromProps.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({url:e.target.value})}},{key:"handleOption",value:function(e){e.preventDefault(),this.setState({method:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var a,n,r,l,i,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("A URL was submitted: ",this.state.url),console.log("this.state from handleSubmit: ",this.state),t.preventDefault(),this.setState({loading:!0}),a={method:this.state.method},e.next=8,fetch(this.state.url,a);case 8:return n=e.sent,e.next=11,n.json();case 11:r=e.sent,this.setState({loading:!1}),console.log(n),console.log(r),l=JSON.stringify(n.headers,null,2),i=JSON.stringify(r,null,2),o={method:this.state.method,url:this.state.url,body:i},this.props.handler(l,i,o),e.next=28;break;case 21:e.prev=21,e.t0=e.catch(0),this.setState({loading:!1}),c={},"An error occurred. Try again.",null,this.props.handler(c,"An error occurred. Try again.",null);case 28:case"end":return e.stop()}}),e,this,[[0,21]])})));return function(t){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(e){e.url!==this.props.url&&this.setState({url:e.url})}},{key:"setStateFromProps",value:function(){this.props.method&&this.setState({method:this.props.method}),this.props.url&&this.setState({url:this.props.url})}},{key:"render",value:function(){return r.a.createElement("div",{id:"form"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"URL:"),r.a.createElement("input",{type:"text",id:"url",placeholder:"http://api.url.here",name:"url",value:this.state.url,onChange:this.handleChange}),r.a.createElement("input",{className:"action",type:"submit",value:"GO!"}),r.a.createElement("br",null),r.a.createElement("input",{className:"button",type:"button",value:"GET",onClick:this.handleOption,autoFocus:!0}),r.a.createElement("input",{className:"button",type:"button",value:"POST",onClick:this.handleOption}),r.a.createElement("input",{className:"button",type:"button",value:"PUT",onClick:this.handleOption}),r.a.createElement("input",{className:"button",type:"button",value:"DELETE",onClick:this.handleOption})),r.a.createElement(E,{condition:!0===this.state.loading},r.a.createElement("section",{className:"spinner"},r.a.createElement("i",{className:"fa fa-spinner fa-spin"}))))}}]),a}(r.a.Component),g=a(13),O=a.n(g),j=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handlePopulate=function(t){console.log("handling re-run"),console.log(t.target.innerHTML);var a=t.target.innerHTML.split(" "),n=a[0],r=a[1];console.log("method is ",n),console.log("url is ",r),e.props.populate(n,r)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.headers,a=this.props.data,n=this.props.archive;return r.a.createElement("div",{id:"results"},r.a.createElement("section",{id:"history"},r.a.createElement("ul",null,n.map((function(t,a){return r.a.createElement("li",{key:a,id:a},r.a.createElement(O.a,{id:"json-pretty",data:t.method+" "+t.url,onClick:e.handlePopulate}))})))),r.a.createElement(E,{condition:a},r.a.createElement("section",{id:"details"},r.a.createElement("ul",{id:"headers"},r.a.createElement(O.a,{id:"json-pretty",data:t})),r.a.createElement("ul",{id:"items"},r.a.createElement(O.a,{id:"json-pretty",data:a})))))}}]),a}(r.a.Component),S=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleReRun=function(){console.log("handling re-run"),n.setState({details:!1})},n.toggleDetails=function(){console.log("showing details"),n.state.details?n.setState({details:!1}):n.setState({details:!0})},n.state={details:!1},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.archive;return console.log("this is apiCall in history",t),r.a.createElement("div",{id:"history"},r.a.createElement("p",null,"This is your history!"),r.a.createElement("section",{id:"api-calls"},r.a.createElement("ul",null,t.map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement(O.a,{id:"json-pretty",data:t.method+" "+t.url,onClick:e.toggleDetails}),r.a.createElement(E,{condition:!0===e.state.details},r.a.createElement(O.a,{id:"json-pretty",data:t.body}),r.a.createElement("input",{className:"button",type:"button",value:"Re-run",onClick:e.handleReRun})))})))))}}]),a}(r.a.Component),k=a(1),C=(a(36),a(37),a(38),a(39),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleForm=function(t,a,n){e.setState({headers:t,data:a}),n&&(e.state.history.push(n),localStorage.setItem("history",JSON.stringify(e.state.history)),e.archiveHistory())},e.populateForm=function(){var t=Object(c.a)(s.a.mark((function t(a,n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("this.state from populate form",e.state.method),t.next=3,e.setState({method:a,url:n});case 3:console.log("populate form: method and url ",a,n),console.log("this.state from populate form",e.state.method);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.state={headers:"",data:"",history:[],archive:[],method:"",url:""},e.getHistory=e.archiveHistory.bind(Object(d.a)(e)),e}return Object(h.a)(a,[{key:"archiveHistory",value:function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(localStorage.getItem("history"));case 2:t=e.sent,this.setState({archive:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(f,null),r.a.createElement(k.a,{exact:!0,path:"/"},r.a.createElement(y,{handler:this.handleForm,method:this.state.method,url:this.state.url}),r.a.createElement(j,{headers:this.state.headers,data:this.state.data,archive:this.state.archive,populate:this.populateForm})),r.a.createElement(k.a,{exact:!0,path:"/history"},r.a.createElement(S,{archive:this.state.archive})),r.a.createElement(b,null)))}}]),a}(r.a.Component)),x=document.getElementById("root");i.a.render(r.a.createElement(C,null),x)}},[[25,1,2]]]);
//# sourceMappingURL=main.77a2eb92.chunk.js.map