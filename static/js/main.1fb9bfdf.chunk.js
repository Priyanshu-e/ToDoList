(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(5),r=n.n(c),u=n(6),i=n(3),o=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"todo_style"},l.a.createElement("i",{class:"fa fa-times","aria-hidden":"true",onClick:function(){e.onSelect(e.id)}}),l.a.createElement("li",null," ",e.text," ")))},m=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),m=Object(i.a)(r,2),s=m[0],d=m[1],f=function(e){console.log("deleted"),d((function(t){return t.filter((function(t,n){return n!==e}))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main_div"},l.a.createElement("div",{className:"center_div"},l.a.createElement("br",null),l.a.createElement("h1",null,"ToDo List"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"Add a item",value:n,onChange:function(e){c(e.target.value)}}),l.a.createElement("button",{onClick:function(){d((function(e){return[].concat(Object(u.a)(e),[n])})),c("")}},"+"),l.a.createElement("ol",null,s.map((function(e,t){return l.a.createElement(o,{key:t,id:t,text:e,onSelect:f})}))))))};n(12);r.a.render(l.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.1fb9bfdf.chunk.js.map