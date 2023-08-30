"use strict";(self.webpackChunkyour_pet=self.webpackChunkyour_pet||[]).push([[806],{9602:function(e,r,i){i.d(r,{Z:function(){return _}});var s=i(1413),a=i(9439),n=i(4925),t=i(5705),o="CustomInput_input__ObazE",u="CustomInput_inputError__agYzR",d="CustomInput_inputSuccess__xE1GL",l="CustomInput_error__hrpIn",m=i(184),c=["submitCount","isValid"],_=function(e){var r=e.submitCount,i=e.isValid,_=(0,n.Z)(e,c),h=(0,t.U$)(_),p=(0,a.Z)(h,2),x=p[0],g=p[1],v=!g.error&&""!==g.value,j=!i&&r>0&&g.error;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("input",(0,s.Z)((0,s.Z)((0,s.Z)({autoComplete:"off"},x),_),{},{className:"".concat(o," ").concat(j?u:""," ").concat(v?d:"")})),j&&(0,m.jsx)("div",{className:l,children:g.error})]})}},9806:function(e,r,i){i.r(r),i.d(r,{default:function(){return C}});var s=i(9439),a=i(5705),n=i(1087),t=i(9085),o=i(9434),u=i(2791),d="LoginForm_container__YDFcb",l="LoginForm_title__5FilZ",m="LoginForm_form__gPEx5",c="LoginForm_iconInput__+dr3j",_="LoginForm_eyeIcon__UzGhv",h="LoginForm_crossIcon__7B-yv",p="LoginForm_checkIcon__8JgC+",x="LoginForm_checkEmailIcon__SxnOy",g="LoginForm_crossEmailIcon__zat61",v="LoginForm_btn__B2KLK",j="LoginForm_linkContainer__tVAZX",f="LoginForm_link__IJw1a",Z=i(5996),q=i(9602),b=i(3566),w=i(5822),L=i(184),y={email:"",password:""},N=function(){var e=(0,u.useState)(!1),r=(0,s.Z)(e,2),i=r[0],N=r[1],R=(0,o.I0)(),C=function(){N(!i)};return(0,L.jsxs)("div",{className:d,children:[(0,L.jsx)("h1",{className:l,children:"Login"}),(0,L.jsx)(a.J9,{initialValues:y,validationSchema:Z.dm,onSubmit:function(e){R((0,w.login)(e)).then((function(e){var r=e.payload;return 401===r.status?t.Am.error("Email or password is wrong"):400===r.status?t.Am.error("Invalid Email"):void 0}))},children:function(e){var r=e.isValid,s=e.submitCount,t=e.values,o=e.errors,u=!r&&s>0;return(0,L.jsxs)(a.l0,{className:m,children:[(0,L.jsxs)("div",{children:[(0,L.jsxs)("div",{className:c,children:[(0,L.jsx)(q.Z,{type:"email",name:"email",placeholder:"Email",isValid:r,submitCount:s}),u&&o.email&&(0,L.jsx)(b.Hb,{className:g}),!o.email&&""!==t.email&&(0,L.jsx)(b.nQ,{className:x})]}),(0,L.jsxs)("div",{className:c,children:[(0,L.jsx)(q.Z,{type:i?"text":"password",name:"password",placeholder:"Password",isValid:r,submitCount:s,style:{marginBottom:0}}),u&&o.password&&(0,L.jsx)(b.Hb,{className:h}),!o.password&&""!==t.password&&(0,L.jsx)(b.nQ,{className:p}),(0,L.jsx)("button",{type:"button",onClick:C,className:_,children:i?(0,L.jsx)(b.hs,{}):(0,L.jsx)(b.LA,{})})]})]}),(0,L.jsx)("div",{children:(0,L.jsxs)("div",{children:[(0,L.jsx)("button",{type:"submit",className:v,children:"Login"}),(0,L.jsxs)("div",{className:j,children:[(0,L.jsx)("p",{children:"Don't have an account? "}),(0,L.jsx)(n.OL,{to:"/register",className:f,children:"Register"})]})]})})]})}})]})},R="LoginPage_loginPage__eZ30b",C=function(){return(0,L.jsx)("div",{className:R,children:(0,L.jsx)(N,{})})}},5996:function(e,r,i){i.d(r,{IK:function(){return u},dm:function(){return o},gY:function(){return t}});var s=i(6727),a=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/,n=/.+@.+\..+/i,t=s.Ry().shape({username:s.Z_().min(2).max(16).required("Required"),email:s.Z_().email(n,"Please enter a valid email").required("Required"),password:s.Z_().matches(a,"The password must have 1 uppercase letter, 1 lowercase letter and 1 number").required("Required"),confirmPassword:s.Z_().oneOf([s.iH("password"),null],"Password must match").required("Required")}),o=s.Ry().shape({email:s.Z_().email("Please enter a valid email").required("Required"),password:s.Z_().matches(a,"Not valid password").required("Required")}),u=s.Ry().shape({avatarURL:s.nK().required("Add your photo"),name:s.Z_().required("Required").matches(/^[a-z\u0430-\u044f\u0451]{2,16}$/i,"The name must contain a maximum of 16 letters"),email:s.Z_().trim().required("Required").matches(n,"Enter a valid Email"),birthday:s.Z_().required("Required"),phone:s.Z_().required("Required").matches(/^\+380\d{9}$/,'The number must begin with "+380" and contain 9 more digits'),city:s.Z_().required("Required")})}}]);
//# sourceMappingURL=806.cce43ff1.chunk.js.map