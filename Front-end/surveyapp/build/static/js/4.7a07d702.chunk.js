(this.webpackJsonpsurveyapp=this.webpackJsonpsurveyapp||[]).push([[4],{203:function(e,t,a){"use strict";a.r(t);var n=a(23),c=a(0),i=a(90),r=a.n(i),s=a(8),l=a(25),o=a(3),u=a(12),m=a(1);t.default=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1],b=Object(c.useState)(!1),p=Object(n.a)(b,2),j=p[0],d=p[1],h=Object(s.b)(),f=Object(o.f)(),O=Object(c.useRef)(),v=Object(c.useRef)();return Object(m.jsx)(c.Fragment,{children:Object(m.jsxs)("div",{className:r.a.container,children:[Object(m.jsx)("h2",{children:"Please tell us brief about yourself"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("label",{htmlFor:"name",title:"Name",children:"Name"}),Object(m.jsx)("input",{className:"".concat(r.a.input," ").concat(a?r.a.invalid:""),ref:O,id:"name",name:"name",type:"text",required:!0}),Object(m.jsx)("label",{htmlFor:"email",title:"email",children:"Email"}),Object(m.jsx)("input",{ref:v,className:"".concat(r.a.input," ").concat(j?r.a.invalid:""),id:"email",name:"email",type:"email",required:!0}),Object(m.jsx)("input",{className:r.a.btn,id:"name",value:"Proceed",type:"submit",onClick:function(e){e.preventDefault();var t=O.current.value,a=v.current.value;t&&i(!1),a&&d(!1),fetch("http://localhost:8080/entry/user-details",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:a,name:t})}).then((function(e){return e.json()})).then((function(e){e.errorData?e.errorData.map((function(e){"email"==e.param&&d(!0),"name"==e.param&&i(!0),alert(e.msg)})):(h(l.b.setUserId(e.userId)),h(u.b.proceedClicked()),f.push("/questions"))})).catch((function(e){console.log("errors",e)}))}})]})]})})}},90:function(e,t,a){e.exports={container:"BasicForm_container__3rhfo",input:"BasicForm_input__1D-QL",invalid:"BasicForm_invalid__20ibt",btn:"BasicForm_btn__Kmjee"}}}]);
//# sourceMappingURL=4.7a07d702.chunk.js.map