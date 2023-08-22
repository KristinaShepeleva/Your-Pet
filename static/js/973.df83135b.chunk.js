"use strict";(self.webpackChunkyour_pet=self.webpackChunkyour_pet||[]).push([[973],{9602:function(e,r,i){i.d(r,{Z:function(){return u}});var n=i(1413),s=i(9439),a=i(5705),o="CustomInput_input__ObazE",t="CustomInput_inputError__agYzR",c="CustomInput_error__hrpIn",d=i(184),u=function(e){var r=Object.assign({},e),i=(0,a.U$)(r),u=(0,s.Z)(i,2),l=u[0],m=u[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("input",(0,n.Z)((0,n.Z)((0,n.Z)({},l),r),{},{className:m.error&&m.touched?t:o})),m.error&&m.touched&&(0,d.jsx)("div",{className:c,children:m.error})]})}},2973:function(e,r,i){i.r(r),i.d(r,{default:function(){return R}});var n=i(5705),s=i(1087),a="LoginForm_container__YDFcb",o="LoginForm_title__5FilZ",t="LoginForm_form__gPEx5",c="LoginForm_iconInput__+dr3j",d="LoginForm_eyeIcon__UzGhv",u="LoginForm_crossIcon__7B-yv",l="LoginForm_checkIcon__8JgC+",m="LoginForm_checkEmailIcon__SxnOy",_="LoginForm_btn__B2KLK",h="LoginForm_linkContainer__tVAZX",p="LoginForm_link__IJw1a",g=i(5996),x=i(9602),j=i(7185),v=i(9434),Z=i(5147),q=i(184),f={email:"",password:""},N=function(){var e=(0,v.I0)();return(0,q.jsxs)("div",{className:a,children:[(0,q.jsx)("h1",{className:o,children:"Login"}),(0,q.jsx)(n.J9,{initialValues:f,validationSchema:g.dm,onSubmit:function(r,i){e((0,Z.login)(r)),i.resetForm()},children:function(e){return(0,q.jsxs)(n.l0,{className:t,children:[(0,q.jsxs)("div",{children:[(0,q.jsxs)("div",{className:c,children:[(0,q.jsx)(x.Z,{type:"email",name:"email",placeholder:"Email"}),(0,q.jsx)(j.nQ,{className:m}),(0,q.jsx)(j.Hb,{className:u})]}),(0,q.jsxs)("div",{className:c,children:[(0,q.jsx)(x.Z,{type:"password",name:"password",placeholder:"Password",style:{marginBottom:0}}),(0,q.jsx)(j.nQ,{className:l}),(0,q.jsx)(j.Hb,{className:u}),(0,q.jsx)(j.LA,{className:d})]})]}),(0,q.jsxs)("div",{children:[(0,q.jsx)("button",{type:"submit",className:_,children:"Login"}),(0,q.jsxs)("div",{className:h,children:["Don't have an account?",(0,q.jsx)(s.OL,{to:"/register",className:p,children:"Register"})]})]})]})}})]})},L=(i(2791),"LoginPage_loginPage__eZ30b"),R=function(){return(0,q.jsx)("div",{className:L,children:(0,q.jsx)(N,{})})}},5996:function(e,r,i){i.d(r,{IK:function(){return t},dm:function(){return o},gY:function(){return a}});var n=i(6727),s=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,a=n.Ry().shape({username:n.Z_().min(2).max(16).required("Required"),email:n.Z_().email("Please enter a valid email").required("Required"),password:n.Z_().min(5).matches(s,"The password must have 1 uppercase letter, 1 lowercase letter and 1 number").required("Required"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Password must match").required("Required")}),o=n.Ry().shape({email:n.Z_().email("Please enter a valid email").required("Required"),password:n.Z_().min(5).matches(s,"Not valid password").required("Required")}),t=n.Ry().shape({photo:n.Z_(),name:n.Z_().required("Required").matches(/^[a-z\u0430-\u044f\u0451]{2,16}$/i,"Enter a valid Name"),email:n.Z_().trim().required("Required").matches(/.+@.+\..+/i,"Enter a valid Email"),birthday:n.Z_().required("Required"),phone:n.Z_().required("Required"),city:n.Z_().required("Required")})}}]);
//# sourceMappingURL=973.df83135b.chunk.js.map