(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],[,,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),u=n(8),i=n.n(u),r=n(1),c=n(2),o=n(4),s=n(3),h=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{id:"header"},l.a.createElement("h1",null,"RESTy"))}}]),n}(l.a.Component),m=(n(7),function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{id:"footer"},l.a.createElement("p",null,"\xa9 2020 Code Fellows"))}}]),n}(l.a.Component)),d=n(5),p=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={method:"",url:"",display:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleOption=a.handleOption.bind(Object(d.a)(a)),a}return Object(c.a)(n,[{key:"handleChange",value:function(e){this.setState({url:e.target.value})}},{key:"handleOption",value:function(e){e.preventDefault(),this.setState({method:e.target.value})}},{key:"handleSubmit",value:function(e){console.log("A URL was submitted: ",this.state.url),e.preventDefault(),this.setState({display:this.state.method+" "+this.state.url})}},{key:"render",value:function(){return l.a.createElement("div",{id:"form"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"URL:"),l.a.createElement("input",{type:"text",id:"url",placeholder:"http://api.url.here",name:"url",onChange:this.handleChange}),l.a.createElement("input",{className:"action",type:"submit",value:"GO!"}),l.a.createElement("br",null),l.a.createElement("input",{className:"button",type:"button",value:"GET",onClick:this.handleOption}),l.a.createElement("input",{className:"button",type:"button",value:"POST",onClick:this.handleOption}),l.a.createElement("input",{className:"button",type:"button",value:"PUT",onClick:this.handleOption}),l.a.createElement("input",{className:"button",type:"button",value:"DELETE",onClick:this.handleOption})),l.a.createElement("section",null,l.a.createElement("p",null,this.state.display)))}}]),n}(l.a.Component),b=(n(14),n(15),n(16),function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={},e}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(p,null),l.a.createElement(m,null))}}]),n}(l.a.Component)),O=document.getElementById("root");i.a.render(l.a.createElement(b,null),O)}],[[9,1,2]]]);
//# sourceMappingURL=main.f680696c.chunk.js.map