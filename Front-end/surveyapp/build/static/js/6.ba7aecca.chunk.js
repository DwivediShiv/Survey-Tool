(this.webpackJsonpsurveyapp=this.webpackJsonpsurveyapp||[]).push([[6],{204:function(t,e,n){"use strict";n.r(e);var i=n(23),s=n(0),c=n(8),a=n(91),o=n.n(a),u=n(3),r=n(12),p=n(1);e.default=function(){var t=Object(u.f)(),e=Object(s.useState)([]),n=Object(i.a)(e,2),a=n[0],j=n[1],b=Object(s.useState)(!0),h=Object(i.a)(b,2),d=h[0],l=h[1],v=Object(s.useState)(!1),O=Object(i.a)(v,2),f=O[0],x=O[1],y=Object(s.useState)({}),m=Object(i.a)(y,1)[0],C=Object(c.c)((function(t){return t.user.userId})),_=Object(c.b)();Object(s.useEffect)((function(){var t;x(!0),fetch("http://localhost:8080/questions").then((function(t){return t.json()})).then((function(e){t=e.data,j(t),x(!1)}))}),[]);var g=function(t){var e=t.target.name;m[e]=t.target.value},N=a.map((function(t){return Object(p.jsxs)("div",{className:o.a.questionCard,children:[Object(p.jsx)("h3",{children:t.ques}),Object(p.jsx)("div",{className:o.a.inputDiv,children:Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"radio",name:t.type,value:"option1-".concat(t.option1),onChange:g}),t.option1]})}),Object(p.jsxs)("div",{className:o.a.inputDiv,children:[Object(p.jsx)("input",{type:"radio",name:t.type,value:"option2-".concat(t.option2),onChange:g}),t.option2]}),Object(p.jsxs)("div",{className:o.a.inputDiv,children:[Object(p.jsx)("input",{type:"radio",name:t.type,value:"option3-".concat(t.option3),onChange:g}),t.option3]}),Object(p.jsxs)("div",{className:o.a.inputDiv,children:[Object(p.jsx)("input",{type:"radio",name:t.type,value:"option4-".concat(t.option4),onChange:g}),t.option4]})]})}));return Object(p.jsxs)(s.Fragment,{children:[Object(p.jsx)(u.a,{when:d,message:function(t){}}),f&&Object(p.jsx)("p",{children:"Loading..."}),!f&&Object(p.jsxs)("div",{children:[N,Object(p.jsx)("div",{className:o.a.btnContainer,children:Object(p.jsx)("input",{className:o.a.btn,type:"submit",value:"Finish",onClick:function(){fetch("http://localhost:8080/entry/survey-entry/".concat(C),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({movie:m.Movie,tvSeries:m.TvSeries,dish:m.Dish,country:m.Country,car:m.Car})}).then((function(t){return t.json()})).then((function(e){_(r.b.finishClicked()),l(!1),t.push("/Results")})).catch((function(t){console.log(t)}))}})})]})]})}},91:function(t,e,n){t.exports={questionCard:"Questions_questionCard__2aZE3",inputDiv:"Questions_inputDiv__23zQR",btnContainer:"Questions_btnContainer__2sxfL",btn:"Questions_btn__ZfHEM"}}}]);
//# sourceMappingURL=6.ba7aecca.chunk.js.map