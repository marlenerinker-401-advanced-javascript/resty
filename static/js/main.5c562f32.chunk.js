(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],{22:function(e,t,a){},25:function(e,t,a){e.exports=a(41)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),i=a.n(l),o=a(10),c=a.n(o),s=a(12),u=a(5),h=a(6),d=a(11),m=a(8),p=a(7),f=a(16),v=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"header"},r.a.createElement("h1",null,"RESTy"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.b,{activeClassName:"selected",exact:!0,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(f.b,{activeClassName:"selected",exact:!0,to:"/history"},"History")))))}}]),a}(r.a.Component),E=(a(22),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("p",null,"\xa9 2020 Marlene Rinker"))}}]),a}(r.a.Component)),b=function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?t:null}(e.condition,e.children)},y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={method:"GET",url:"",loading:!1},n.getButton=r.a.createRef(),n.postButton=r.a.createRef(),n.putButton=r.a.createRef(),n.deleteButton=r.a.createRef(),n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.handleOption=n.handleOption.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({url:e.target.value})}},{key:"handleOption",value:function(e){e.preventDefault(),this.setState({method:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,r,l,i,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),this.setState({loading:!0}),a={method:this.state.method},e.next=6,fetch(this.state.url,a);case 6:return n=e.sent,e.next=9,n.json();case 9:r=e.sent,this.setState({loading:!1}),console.log(n),console.log(r),l=JSON.stringify(n.headers,null,2),i=JSON.stringify(r,null,2),o={method:this.state.method,url:this.state.url,body:i},this.props.handler(l,i,o),e.next=26;break;case 19:e.prev=19,e.t0=e.catch(0),this.setState({loading:!1}),s={},"An error occurred. Try again.",null,this.props.handler(s,"An error occurred. Try again.",null);case 26:case"end":return e.stop()}}),e,this,[[0,19]])})));return function(t){return e.apply(this,arguments)}}()},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.url!==this.props.url&&this.setState({url:e.url}),e.method!==this.props.method&&this.setState({method:e.method})}},{key:"render",value:function(){return r.a.createElement("div",{id:"form"},r.a.createElement("form",null,r.a.createElement("label",null,"URL:"),r.a.createElement("input",{type:"text",id:"url",placeholder:"http://api.url.here",name:"url",value:this.state.url,onChange:this.handleChange}),r.a.createElement("input",{className:"action",type:"submit",value:"GO!",onClick:this.handleSubmit}),r.a.createElement("br",null),r.a.createElement("div",{className:"radio-toolbar"},r.a.createElement("input",{ref:this.getButton,id:"getButton",name:"button",type:"radio",value:"GET",onClick:this.handleOption,checked:"GET"===this.state.method}),r.a.createElement("label",{htmlFor:"getButton"},"GET"),r.a.createElement("input",{ref:this.postButton,id:"postButton",name:"button",type:"radio",value:"POST",onClick:this.handleOption,checked:"POST"===this.state.method}),r.a.createElement("label",{htmlFor:"postButton"},"POST"),r.a.createElement("input",{ref:this.putButton,id:"putButton",name:"button",type:"radio",value:"PUT",onClick:this.handleOption,checked:"PUT"===this.state.method}),r.a.createElement("label",{htmlFor:"putButton"},"PUT"),r.a.createElement("input",{ref:this.deleteButton,id:"deleteButton",name:"button",type:"radio",value:"DELETE",onClick:this.handleOption,checked:"DELETE"===this.state.method}),r.a.createElement("label",{htmlFor:"deleteButton"},"DELETE"))),r.a.createElement(b,{condition:!0===this.state.loading},r.a.createElement("section",{className:"spinner"},r.a.createElement("i",{className:"fa fa-spinner fa-spin"}))))}}]),a}(r.a.Component),O=a(14),g=a.n(O),j=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handlePopulate=function(t){console.log(t.target.innerHTML);var a=t.target.innerHTML.split(" "),n=a[0],r=a[1];console.log("method is ",n),console.log("url is ",r),e.props.populate(n,r)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.headers,a=this.props.data,n=this.props.archive;return r.a.createElement("div",{id:"results"},r.a.createElement("section",{id:"history"},r.a.createElement("ul",null,n.map((function(t,a){return r.a.createElement("li",{key:a,id:a},r.a.createElement(g.a,{id:"json-pretty",data:t.method+" "+t.url,onClick:e.handlePopulate}))})))),r.a.createElement(b,{condition:a},r.a.createElement("section",{id:"details"},r.a.createElement("ul",{id:"headers"},r.a.createElement(g.a,{id:"json-pretty",data:t})),r.a.createElement("ul",{id:"items"},r.a.createElement(g.a,{id:"json-pretty",data:a})))))}}]),a}(r.a.Component),k=a(1),C=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleRedirect=function(){n.props.history.push("/")},n.extractContent=function(e){var t=document.createElement("span");return t.innerHTML=e,t.textContent||t.innerText},n.handleReRun=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,r,l,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handling re-run"),a=document.getElementById("".concat(t.target.className,"call")),r=n.extractContent(a.innerHTML).split(" "),l=r[0],i=r[1],console.log("method is ",l),console.log("url is ",i),e.next=9,n.handleRedirect();case 9:return e.next=11,n.props.populate(l,i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.toggleDetails=function(e){var t=n.state.details;t[e]=!t[e],n.setState({details:t})},n.state={details:[]},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.archive;return console.log("this is apiCall in history",t),r.a.createElement("div",{id:"history"},r.a.createElement("p",{id:"intro"},"This is your API call history. Click on a call to see details."),r.a.createElement("section",{id:"api-calls"},r.a.createElement("ul",null,t.map((function(t,a){return r.a.createElement("li",{key:a,id:a},r.a.createElement(g.a,{id:a+"call",data:t.method+" "+t.url,onClick:function(){return e.toggleDetails(a)}}),r.a.createElement(b,{condition:!0===e.state.details[a]},r.a.createElement("input",{className:a,type:"button",value:"Re-run",onClick:e.handleReRun}),r.a.createElement(g.a,{className:a,data:t.body})))})))))}}]),a}(r.a.Component),S=Object(k.e)(C),T=(a(36),a(37),a(38),a(39),a(40),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleForm=function(t,a,n){e.setState({headers:t,data:a}),n&&(e.state.history.push(n),localStorage.setItem("history",JSON.stringify(e.state.history)),e.archiveHistory())},e.populateForm=function(){var t=Object(s.a)(c.a.mark((function t(a,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({method:a,url:n});case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.state={headers:"",data:"",history:[],archive:[],method:"",url:""},e.getHistory=e.archiveHistory.bind(Object(d.a)(e)),e}return Object(h.a)(a,[{key:"archiveHistory",value:function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(localStorage.getItem("history"));case 2:t=e.sent,this.setState({archive:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,{basename:"/resty"},r.a.createElement(v,null),r.a.createElement(k.a,{exact:!0,path:"/"},r.a.createElement(y,{handler:this.handleForm,method:this.state.method,url:this.state.url}),r.a.createElement(j,{headers:this.state.headers,data:this.state.data,archive:this.state.archive,populate:this.populateForm})),r.a.createElement(k.a,{exact:!0,path:"/history"},r.a.createElement(S,{archive:this.state.archive,populate:this.populateForm})),r.a.createElement(E,null)))}}]),a}(r.a.Component)),x=document.getElementById("root");i.a.render(r.a.createElement(T,null),x)}},[[25,1,2]]]);
//# sourceMappingURL=main.5c562f32.chunk.js.map