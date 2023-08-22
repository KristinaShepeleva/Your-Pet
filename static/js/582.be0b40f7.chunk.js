"use strict";(self.webpackChunkyour_pet=self.webpackChunkyour_pet||[]).push([[582],{9602:function(e,r,s){s.d(r,{Z:function(){return l}});var n=s(1413),a=s(9439),i=s(5705),t="CustomInput_input__ObazE",c="CustomInput_inputError__agYzR",o="CustomInput_error__hrpIn",m=s(184),l=function(e){var r=Object.assign({},e),s=(0,i.U$)(r),l=(0,a.Z)(s,2),u=l[0],d=l[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("input",(0,n.Z)((0,n.Z)((0,n.Z)({},u),r),{},{className:d.error&&d.touched?c:t})),d.error&&d.touched&&(0,m.jsx)("div",{className:o,children:d.error})]})}},5582:function(e,r,s){s.r(r),s.d(r,{default:function(){return f}});var n=s(5861),a=s(7757),i=s.n(a),t=s(5705),c=s(1087),o={container:"RegisterForm_container__w0Atp",title:"RegisterForm_title__EvDyW",form:"RegisterForm_form__Tv43W",iconInput:"RegisterForm_iconInput__n83p7",eyeIcon:"RegisterForm_eyeIcon__PZ59+",crossIcon:"RegisterForm_crossIcon__ggC75",checkIcon:"RegisterForm_checkIcon__jvji-",checkEmailIcon:"RegisterForm_checkEmailIcon__meM9n",btn:"RegisterForm_btn__bgTuW",linkContainer:"RegisterForm_linkContainer__Sxc8O",link:"RegisterForm_link__xu2eW"},m=s(5996),l=s(9602),u=s(7185),d=s(9434),_=s(5147),p=s(184),h={username:"",email:"",password:"",confirmPassword:""},x=function(){var e=(0,d.I0)(),r=function(){var r=(0,n.Z)(i().mark((function r(s,n){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a={name:s.username,email:s.email,password:s.password},e((0,_.createUser)(a)),n.resetForm();case 3:case"end":return r.stop()}}),r)})));return function(e,s){return r.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:o.container,children:[(0,p.jsx)("h1",{className:o.title,children:"Registration"}),(0,p.jsx)(t.J9,{initialValues:h,validationSchema:m.gY,onSubmit:r,className:o.formik,children:function(e){return(0,p.jsxs)(t.l0,{className:o.form,children:[(0,p.jsx)(l.Z,{type:"name",name:"username",placeholder:"Name"}),(0,p.jsxs)("div",{className:o.iconInput,children:[(0,p.jsx)(l.Z,{type:"email",name:"email",placeholder:"Email"}),(0,p.jsx)(u.nQ,{className:o.checkEmailIcon}),(0,p.jsx)(u.Hb,{className:o.crossIcon})]}),(0,p.jsxs)("div",{className:o.iconInput,children:[(0,p.jsx)(l.Z,{type:"password",name:"password",placeholder:"Password"}),(0,p.jsx)(u.nQ,{className:o.checkIcon}),(0,p.jsx)(u.Hb,{className:o.crossIcon}),(0,p.jsx)(u.LA,{className:o.eyeIcon})]}),(0,p.jsxs)("div",{className:o.iconInput,children:[(0,p.jsx)(l.Z,{type:"password",name:"confirmPassword",placeholder:"Confirm password",style:{marginBottom:0}}),(0,p.jsx)(u.nQ,{className:o.checkIcon}),(0,p.jsx)(u.Hb,{className:o.crossIcon}),(0,p.jsx)(u.LA,{className:o.eyeIcon})]}),(0,p.jsx)("button",{className:o.btn,type:"submit",children:"Registration"})]})}}),(0,p.jsxs)("div",{className:o.linkContainer,children:["Already have an account?",(0,p.jsx)(c.OL,{to:"/login",className:o.link,children:"Login"})]})]})},j="RegisterPage_registerPage__pk1kr",f=function(){return(0,p.jsx)("div",{className:j,children:(0,p.jsx)(x,{})})}},5996:function(e,r,s){s.d(r,{IK:function(){return c},dm:function(){return t},gY:function(){return i}});var n=s(6727),a=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,i=n.Ry().shape({username:n.Z_().min(2).max(16).required("Required"),email:n.Z_().email("Please enter a valid email").required("Required"),password:n.Z_().min(5).matches(a,"The password must have 1 uppercase letter, 1 lowercase letter and 1 number").required("Required"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Password must match").required("Required")}),t=n.Ry().shape({email:n.Z_().email("Please enter a valid email").required("Required"),password:n.Z_().min(5).matches(a,"Not valid password").required("Required")}),c=n.Ry().shape({photo:n.Z_(),name:n.Z_().required("Required").matches(/^[a-z\u0430-\u044f\u0451]{2,16}$/i,"Enter a valid Name"),email:n.Z_().trim().required("Required").matches(/.+@.+\..+/i,"Enter a valid Email"),birthday:n.Z_().required("Required"),phone:n.Z_().required("Required"),city:n.Z_().required("Required")})}}]);
//# sourceMappingURL=582.be0b40f7.chunk.js.map