(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,function(e,t,n){e.exports=n(25)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(9),l=n.n(u),c=n(1),i=n(2),o=n(4),s=n(3),h=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"header"},r.a.createElement("h1",null,"RESTy"))}}]),n}(r.a.Component),m=(n(8),function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("p",null,"\xa9 2020 Marlene Rinker"))}}]),n}(r.a.Component)),d=n(6),p=n.n(d),b=n(10),f=n(5),E=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={method:"GET",url:"",display:""},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a.handleOption=a.handleOption.bind(Object(f.a)(a)),a}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState({url:e.target.value})}},{key:"handleOption",value:function(e){e.preventDefault(),this.setState({method:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(b.a)(p.a.mark((function e(t){var n,a,r,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("A URL was submitted: ",this.state.url),t.preventDefault(),e.next=4,fetch(this.state.url);case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,console.log(a),r=a.count,u=a.results,this.props.handler(r,u);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{id:"form"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"URL:"),r.a.createElement("input",{type:"text",id:"url",placeholder:"http://api.url.here",name:"url",onChange:this.handleChange}),r.a.createElement("input",{className:"action",type:"submit",value:"GO!"}),r.a.createElement("br",null),r.a.createElement("input",{className:"button",type:"button",value:"GET",onClick:this.handleOption,autoFocus:!0}),r.a.createElement("input",{className:"button",type:"button",value:"POST",onClick:this.handleOption}),r.a.createElement("input",{className:"button",type:"button",value:"PUT",onClick:this.handleOption}),r.a.createElement("input",{className:"button",type:"button",value:"DELETE",onClick:this.handleOption})))}}]),n}(r.a.Component),v=n(11),O=n.n(v),j=function(e){var t=e.count,n=e.results;return r.a.createElement("div",{id:"results"},r.a.createElement("p",{id:"count"},"API Total Count: ",t),r.a.createElement("p",{id:"item-count"},"Returned Count: ",n.length),r.a.createElement("ul",{id:"items"},n.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(O.a,{id:"json-pretty",data:e}))}))))},y=(n(21),n(22),n(23),n(24),function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleForm=function(t,n){e.setState({count:t,results:n})},e.state={count:0,results:[]},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(E,{handler:this.handleForm}),r.a.createElement(j,{count:this.state.count,results:this.state.results}),r.a.createElement(m,null))}}]),n}(r.a.Component)),k=document.getElementById("root");l.a.render(r.a.createElement(y,null),k)}],[[12,1,2]]]);
//# sourceMappingURL=main.7fe2e688.chunk.js.map