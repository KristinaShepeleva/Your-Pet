"use strict";(self.webpackChunkyour_pet=self.webpackChunkyour_pet||[]).push([[262],{2262:function(e,t,a){a.r(t),a.d(t,{default:function(){return te}});var n=a(1413),s=a(9439),r=a(2791),l=a(7689),c=a(9434),o=a(9085),i=a(8699),d=a(9874),u="AddPetPage_AddPetWrap__-b6Uo",p="AddPetPage_AddPetThirdWrap__yh7al",h="AddPetPage_AddPet__tzXfm",m="AddPetPage_StepList__cfm2a",x="AddPetPage_StepInfo__Qz9Cv",j="AddPetPage_StepItemDone__tO+Qy",S="AddPetPage_StepItemCurrent__tnkM6",_="AddPetPage_StepItem__xN+vt",f="AddPetPage_ChooseOptionList__AID2L",N="AddPetPage_PetButton__nYdDX",v="AddPetPage_PetButtonActive__nFdxk",b="AddPetPage_ButtonNext__bY5G8",g="AddPetPage_ButtonEl__4xG8b",P="AddPetPage_LinkAddPet__yyAtp",A="AddPetPage_LinkAddPetCancel__ttRjj",y=a(184),T=function(e){var t=e.isActive,a=e.isDone,n=e.children,s=_;return t?s=S:a&&(s=j),(0,y.jsx)("li",{className:s,children:n})},L=function(e){var t=e.currentStep;return(0,y.jsxs)("ul",{className:m,children:[(0,y.jsx)(T,{isActive:1===t,isDone:t>1,children:"Choose option"}),(0,y.jsx)(T,{isActive:2===t,isDone:t>2,children:"Personal details"}),(0,y.jsx)(T,{isActive:3===t,isDone:t>3,children:"More info"})]})},C=a(8708),Z=function(e){var t=e.isActive,a=e.label,n=e.onClick,s=(e.doneSubmit,t?v:"");return(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:"".concat(N," ").concat(s),onClick:n,children:a})})},k=function(e){var t=e.label,a=e.icon,n=e.onClick,s=e.isPrimary,r=e.isNext,l=s?b:A;return(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:l,onClick:n,children:(0,y.jsxs)("div",{className:g,children:[r&&(0,y.jsx)("span",{children:t}),(0,y.jsx)(y.Fragment,{children:a}),!r&&(0,y.jsx)("span",{children:t})]})})})},O=function(e){var t=e.handleNext,a=e.handleCancel,n=e.handleOptionChange,s=e.activeButton;return(0,y.jsxs)("div",{children:[(0,y.jsxs)("ul",{className:f,children:[(0,y.jsx)(Z,{isActive:1===s,label:"your pet",onClick:function(){return n("your-pet",1)}}),(0,y.jsx)(Z,{isActive:2===s,label:"sell",onClick:function(){return n("sell",2)}}),(0,y.jsx)(Z,{isActive:3===s,label:"lost/found",onClick:function(){return n("lost-found",3)}}),(0,y.jsx)(Z,{isActive:4===s,label:"in good hands",onClick:function(){return n("in-good-hands",4)}})]}),(0,y.jsxs)("ul",{className:P,children:[(0,y.jsx)(k,{label:"Cancel",icon:(0,y.jsx)(C.Y4,{style:{stroke:"var(--blue-color)"}}),onClick:a}),(0,y.jsx)(k,{label:"Next",icon:(0,y.jsx)(C.ZO,{style:{fill:"var(--bg-color)"}}),onClick:function(){t({})},isPrimary:!0,isNext:!0})]})]})},E="SecondStep_FormWrapper__z+RHi",D="SecondStep_WrapperLabelInput__j5dgh",B="SecondStep_LabelStep__sy0VS",I="SecondStep_Input__zCMZQ",F="SecondStep_ButtonNext__1YH1Y",W="SecondStep_ButtonEl__4m2Wu",M="SecondStep_LinkAddPet__R7-5g",w="SecondStep_LinkAddPetCancel__THsAl",z="SecondStep_ErrorMessage__oNrn4",R="SecondStep_InputError__RVq9C",U=function(e){var t=e.handleNext,a=e.handlePreviousStep,n=e.formData,l=e.doneSubmit2,c=(0,r.useState)(n.name||""),o=(0,s.Z)(c,2),i=o[0],d=o[1],u=(0,r.useState)(n.birthday||""),p=(0,s.Z)(u,2),h=p[0],m=p[1],x=(0,r.useState)(n.breed||""),j=(0,s.Z)(x,2),S=j[0],_=j[1],f=(0,r.useState)(""),N=(0,s.Z)(f,2),v=N[0],b=N[1],g=(0,r.useState)(""),P=(0,s.Z)(g,2),A=P[0],T=P[1],L=(0,r.useState)(""),Z=(0,s.Z)(L,2),k=Z[0],O=Z[1],U=function(){return!i||i.length<2||i.length>16||!/^[A-Za-z\s]+$/.test(i)?(b(R),!1):(b(""),!0)},Y=function(){return h?(T(""),!0):(T(R),!1)},q=function(){return!S||S.length<2||S.length>16||!/^[A-Za-z\s]+$/.test(S)?(O(R),!1):(O(""),!0)};return(0,y.jsxs)("div",{className:E,children:[(0,y.jsxs)("div",{className:D,children:[(0,y.jsx)("label",{className:B,htmlFor:"name",children:"Pet\u2019s name"}),(0,y.jsx)("input",{className:"".concat(I," ").concat(v),type:"text",id:"name",value:i,onChange:function(e){return d(e.target.value)},onBlur:U,placeholder:"Type name pet"}),v&&(0,y.jsx)("span",{className:"".concat(z),children:"Name must be between 2 and 16 characters"})]}),(0,y.jsxs)("div",{className:D,children:[(0,y.jsx)("label",{className:B,htmlFor:"birthday",children:"Date of birth"}),(0,y.jsx)("input",{className:"".concat(I," ").concat(A),type:"date",id:"birthday",value:h,onChange:function(e){return m(e.target.value)},onBlur:Y}),A&&(0,y.jsx)("span",{className:"".concat(z),children:"Date of birth is required"})]}),(0,y.jsxs)("div",{className:D,children:[(0,y.jsx)("label",{className:B,htmlFor:"type",children:"Type"}),(0,y.jsx)("input",{className:"".concat(I," ").concat(k),type:"text",id:"type",value:S,onChange:function(e){return _(e.target.value)},onBlur:q,required:!0,placeholder:"Type of pet"}),k&&(0,y.jsx)("span",{className:"".concat(z),children:"Breed must be between 2 and 16 characters"})]}),(0,y.jsxs)("ul",{className:M,children:[(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:w,onClick:function(){return a(n)},children:(0,y.jsxs)("div",{className:W,children:[(0,y.jsx)(C.Y4,{style:{stroke:"var(--blue-color)"}}),(0,y.jsx)("span",{children:"Back"})]})})}),(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:F,onClick:function(){(function(){var e=U(),t=Y(),a=q();return e&&t&&a})()&&(t(),l({name:i,birthday:h,breed:S}))},children:(0,y.jsxs)("div",{className:W,children:[(0,y.jsx)("span",{children:"Next"}),(0,y.jsx)(C.ZO,{style:{fill:"var(--bg-color)"}})]})})})]})]})},Y=function(e){var t=e.handleNext,a=e.handlePreviousStep,n=e.formData,l=e.doneSubmit2,c=(0,r.useState)(n.name||""),o=(0,s.Z)(c,2),i=o[0],d=o[1],u=(0,r.useState)(n.title||""),p=(0,s.Z)(u,2),h=p[0],m=p[1],x=(0,r.useState)(n.birthday||""),j=(0,s.Z)(x,2),S=j[0],_=j[1],f=(0,r.useState)(n.breed||""),N=(0,s.Z)(f,2),v=N[0],b=N[1],g=(0,r.useState)(""),P=(0,s.Z)(g,2),A=P[0],T=P[1],L=(0,r.useState)(""),Z=(0,s.Z)(L,2),k=Z[0],O=Z[1],U=(0,r.useState)(""),Y=(0,s.Z)(U,2),q=Y[0],H=Y[1],$=(0,r.useState)(""),Q=(0,s.Z)($,2),G=Q[0],V=Q[1],X=function(){return!h||h.length<2||h.length>16||!/^[A-Za-z\s]+$/.test(h)?(T(R),!1):(T(""),!0)},J=function(){return!i||i.length<2||i.length>16||!/^[A-Za-z\s]+$/.test(i)?(O(R),!1):(O(""),!0)},K=function(){return S?(H(""),!0):(H(R),!1)},ee=function(){return!v||v.length<2||v.length>16||!/^[A-Za-z\s]+$/.test(v)?(V(R),!1):(V(""),!0)};return(0,y.jsxs)("div",{className:E,children:[(0,y.jsxs)("div",{className:D,children:[(0,y.jsx)("label",{className:B,htmlFor:"title",children:"Title of add"}),(0,y.jsx)("input",{className:"".concat(I," ").concat(A),type:"text",id:"title",value:h,onChange:function(e){return m(e.target.value)},onBlur:X,placeholder:"Title of add"}),A&&(0,y.jsx)("span",{className:"".concat(z),children:"Title must be between 2 and 16 characters"})]}),(0,y.jsxs)("div",{className:D,children:[(0,y.jsx)("label",{className:B,htmlFor:"name",children:"Pet\u2019s name"}),(0,y.jsx)("input",{className:"".concat(I," ").concat(k),type:"text",id:"name",value:i,onChange:function(e){return d(e.target.value)},onBlur:J,placeholder:"Type name pet"}),k&&(0,y.jsx)("span",{className:"".concat(z),children:"Name must be between 2 and 16 characters"})]}),(0,y.jsxs)("div",{className:D,children:[(0,y.jsx)("label",{className:B,htmlFor:"birthday",children:"Date of birth"}),(0,y.jsx)("input",{className:"".concat(I," ").concat(q),type:"date",id:"birthday",value:S,onChange:function(e){return _(e.target.value)},onBlur:K}),q&&(0,y.jsx)("span",{className:"".concat(z),children:"Date of birth is required"})]}),(0,y.jsxs)("div",{className:D,children:[(0,y.jsx)("label",{className:B,htmlFor:"type",children:"Type"}),(0,y.jsx)("input",{className:"".concat(I," ").concat(G),type:"text",id:"type",value:v,onChange:function(e){return b(e.target.value)},onBlur:ee,required:!0,placeholder:"Type of pet"}),G&&(0,y.jsx)("span",{className:"".concat(z),children:"Breed must be between 2 and 16 characters"})]}),(0,y.jsxs)("ul",{className:M,children:[(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:w,onClick:function(){return a(n)},children:(0,y.jsxs)("div",{className:W,children:[(0,y.jsx)(C.Y4,{style:{stroke:"var(--blue-color)"}}),(0,y.jsx)("span",{children:"Back"})]})})}),(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:F,onClick:function(){(function(){var e=X(),t=J(),a=K(),n=ee();return e&&t&&a&&n})()&&(t(),l({name:i,title:h,birthday:S,breed:v}))},children:(0,y.jsxs)("div",{className:W,children:[(0,y.jsx)("span",{children:"Next"}),(0,y.jsx)(C.ZO,{style:{fill:"var(--bg-color)"}})]})})})]})]})},q=function(e){var t=e.handleNext,a=e.handlePreviousStep,n=e.selectedOption,s=e.formData,r=e.doneSubmit2;return(0,y.jsxs)(y.Fragment,{children:["your-pet"===n?(0,y.jsx)(U,{handleNext:t,handlePreviousStep:a,formData:s,doneSubmit2:r}):"","sell"===n||"lost-found"===n||"in-good-hands"===n?(0,y.jsx)(Y,{handleNext:t,handlePreviousStep:a,formData:s,doneSubmit2:r}):""]})},H={WrapperForm:"ThirdStep_WrapperForm__0LdcH",SexText:"ThirdStep_SexText__4ZXKP",SexOption:"ThirdStep_SexOption__Gidvl",LabelInput:"ThirdStep_LabelInput__EJGmP",WrapperFormSellInputs:"ThirdStep_WrapperFormSellInputs__42kiN",SexElement:"ThirdStep_SexElement__lWx4D",SelectedSex:"ThirdStep_SelectedSex__awQiw",WrapperLabelInput:"ThirdStep_WrapperLabelInput__vRxdR",LabelStep:"ThirdStep_LabelStep__wAnsO",Input:"ThirdStep_Input__wFxqL",WrapperPoto:"ThirdStep_WrapperPoto__EtAMY",WrapperAddPhoto:"ThirdStep_WrapperAddPhoto__9D-x8",LabelAddText:"ThirdStep_LabelAddText__psfpj",LabelAdd:"ThirdStep_LabelAdd__12OQR",PreviewPhoto:"ThirdStep_PreviewPhoto__zHmh4",IconAdd:"ThirdStep_IconAdd__vyXvW",WrapperTextareaOne:"ThirdStep_WrapperTextareaOne__pQaU5",WrapperTextarea:"ThirdStep_WrapperTextarea__lfmtF",TextareaText:"ThirdStep_TextareaText__-w26U",TextareaAddOne:"ThirdStep_TextareaAddOne__RocUM",TextareaAdd:"ThirdStep_TextareaAdd__4OyCB",ButtonNext:"ThirdStep_ButtonNext__AYT1L",ButtonEl:"ThirdStep_ButtonEl__czHVz",LinkAddPet:"ThirdStep_LinkAddPet__42DOR",LinkAddPetCancel:"ThirdStep_LinkAddPetCancel__fiWqo",ErrorMessage:"ThirdStep_ErrorMessage__-2Rny",ErrorMessageLeft:"ThirdStep_ErrorMessageLeft__x8YhM",InputError:"ThirdStep_InputError__AVc0r",ErrorContainer:"ThirdStep_ErrorContainer__OH3am"},$=function(e){var t=e.handlePreviousStep,a=e.formData,n=e.doneSubmit3,l=(0,r.useState)(null),c=(0,s.Z)(l,2),o=c[0],i=c[1],d=(0,r.useState)(""),u=(0,s.Z)(d,2),p=u[0],h=u[1],m=(0,r.useState)(""),x=(0,s.Z)(m,2),j=x[0],S=x[1];return(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",{className:H.WrapperPoto,children:[(0,y.jsx)("label",{className:H.LabelAddText,children:"Load the pet\u2019s image:"}),(0,y.jsxs)("div",{className:H.ErrorContainer,children:[(0,y.jsxs)("label",{htmlFor:"photo",className:"".concat(H.LabelAdd," ").concat(j&&H.InputError),children:[o&&(0,y.jsx)("img",{className:H.PreviewPhoto,src:URL.createObjectURL(o),alt:"Upload img"}),!o&&(0,y.jsx)(C.l5,{className:H.IconAdd})]}),j&&(0,y.jsx)("span",{className:"".concat(H.ErrorMessage," ").concat(H.ErrorMessageRight),children:j})]}),(0,y.jsx)("input",{type:"file",id:"photo",onChange:function(e){var t=e.target.files[0];t&&t.size>3145728?S("Photo size should be up to 3MB"):(S(""),i(t))},style:{display:"none"}})]}),(0,y.jsxs)("div",{className:H.WrapperTextareaOne,children:[(0,y.jsx)("label",{className:H.TextareaText,children:"Comments"}),(0,y.jsx)("textarea",{className:H.TextareaAddOne,id:"comments",value:p,placeholder:"Type your comment",onChange:function(e){return h(e.target.value)},maxLength:120})]}),(0,y.jsxs)("ul",{className:H.LinkAddPet,children:[(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:H.LinkAddPetCancel,onClick:function(){return t(a)},children:(0,y.jsxs)("div",{className:H.ButtonEl,children:[(0,y.jsx)(C.Y4,{style:{stroke:"var(--blue-color)"}}),(0,y.jsx)("span",{children:"Back"})]})})}),(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:H.ButtonNext,onClick:function(){(o?(S(""),1):(S("Photo is required"),0))&&n({photo:o,comments:p})},children:(0,y.jsxs)("div",{className:H.ButtonEl,children:[(0,y.jsx)("span",{children:"Done"}),(0,y.jsx)(C.ZO,{style:{fill:"var(--bg-color)"}})]})})})]})]})},Q=a(4681),G=a(9312),V=function(e){var t=e.handlePreviousStep,a=e.formData,n=e.doneSubmit3,l=(0,r.useState)(a.url||""),c=(0,s.Z)(l,2),o=c[0],i=c[1],d=(0,r.useState)(a.comments||""),u=(0,s.Z)(d,2),p=u[0],h=u[1],m=(0,r.useState)(a.place||""),x=(0,s.Z)(m,2),j=x[0],S=x[1],_=(0,r.useState)(a.price||""),f=(0,s.Z)(_,2),N=f[0],v=f[1],b=(0,r.useState)(a.sex||""),g=(0,s.Z)(b,2),P=g[0],A=g[1],T=(0,r.useState)(""),L=(0,s.Z)(T,2),Z=L[0],k=L[1],O=(0,r.useState)(""),E=(0,s.Z)(O,2),D=E[0],B=E[1],I=(0,r.useState)(""),F=(0,s.Z)(I,2),W=F[0],M=F[1],w=(0,r.useState)(""),z=(0,s.Z)(w,2),R=z[0],U=z[1],Y=function(e,t){A(e)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:H.WrapperForm,children:[(0,y.jsxs)("div",{className:H.WrapperPotoSell,children:[(0,y.jsx)("div",{className:H.SexText,children:"The Sex"}),(0,y.jsxs)("ul",{className:H.SexOption,children:[(0,y.jsx)("li",{children:(0,y.jsxs)("button",{className:"".concat(H.SexElement," ").concat("female"===P?H.SelectedSex:""),onClick:function(){return Y("female")},children:[(0,y.jsx)("img",{src:Q.Z,alt:"female"}),"Female"]})}),(0,y.jsx)("li",{children:(0,y.jsxs)("button",{className:"".concat(H.SexElement," ").concat("male"===P?H.SelectedSex:""),onClick:function(){return Y("male")},children:[(0,y.jsx)("img",{src:G.Z,alt:"male"}),"Male"]})})]}),D&&(0,y.jsx)("span",{className:H.ErrorMessage,children:D}),(0,y.jsxs)("div",{className:H.WrapperAddPhoto,children:[(0,y.jsx)("label",{className:H.LabelAddText,children:"Load the pet\u2019s image:"}),(0,y.jsx)("input",{type:"file",id:"photo",onChange:function(e){var t=e.target.files[0];t&&t.size>3145728?k("Photo size should be up to 3MB"):(k(""),i(t))},style:{display:"none"}}),(0,y.jsx)("label",{htmlFor:"photo",className:"".concat(H.LabelAdd," ").concat(Z&&H.InputError),children:(0,y.jsxs)("div",{className:H.LabelAdd,children:[o&&(0,y.jsx)("img",{className:H.PreviewPhoto,src:URL.createObjectURL(o),alt:"Selected img"}),!o&&(0,y.jsx)(C.l5,{className:H.IconAdd})]})}),Z&&(0,y.jsx)("span",{className:"".concat(H.ErrorMessage," ").concat(H.ErrorMessageLeft),children:Z})]})]}),(0,y.jsxs)("div",{className:H.WrapperFormSellInputs,children:[(0,y.jsxs)("div",{className:H.LabelInput,children:[(0,y.jsx)("label",{className:H.LabelStep,htmlFor:"name",children:"Location"}),(0,y.jsx)("input",{className:"".concat(H.Input," ").concat(W?H.InputError:""),type:"text",id:"name",value:j,onChange:function(e){return S(e.target.value)},placeholder:"Type location"}),W&&(0,y.jsx)("span",{className:H.ErrorMessage,children:W})]}),(0,y.jsxs)("div",{className:H.LabelInput,children:[(0,y.jsx)("label",{className:H.LabelStep,htmlFor:"name",children:"Price"}),(0,y.jsx)("input",{className:"".concat(H.Input," ").concat(R?H.InputError:""),type:"text",id:"name",value:N,onChange:function(e){return v(e.target.value)},placeholder:"Type price"}),R&&(0,y.jsx)("span",{className:H.ErrorMessage,children:R})]}),(0,y.jsxs)("div",{className:H.WrapperTextarea,children:[(0,y.jsx)("label",{className:H.TextareaText,htmlFor:"comments",children:"Comments"}),(0,y.jsx)("textarea",{className:H.TextareaAddOne,id:"comments",value:p,placeholder:"Type comment",onChange:function(e){return h(e.target.value)},maxLength:120})]})]})]}),(0,y.jsxs)("ul",{className:H.LinkAddPet,children:[(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:H.LinkAddPetCancel,onClick:function(){return t(a)},children:(0,y.jsxs)("div",{className:H.ButtonEl,children:[(0,y.jsx)(C.Y4,{style:{stroke:"var(--blue-color)"}}),(0,y.jsx)("span",{children:"Back"})]})})}),(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:H.ButtonNext,onClick:function(){(function(){var e=!0;o?k(""):(k("Photo is required"),e=!1),P?B(""):(B("The sex is not selected"),e=!1),j?/^[A-Z][a-z]+$/.test(j)?M(""):(M("Invalid location format"),e=!1):(M("Location is required"),e=!1);return!N||isNaN(parseFloat(N))||parseFloat(N)<=0?(U("Price must be a positive number"),e=!1):U(""),e})()&&n({photo:o,comments:p,place:j,price:N,sex:P})},children:(0,y.jsxs)("div",{className:H.ButtonEl,children:[(0,y.jsx)("span",{children:"Done"}),(0,y.jsx)(C.ZO,{style:{fill:"var(--bg-color)"}})]})})})]})]})},X=function(e){var t=e.handlePreviousStep,a=e.formData,n=e.doneSubmit3,l=(0,r.useState)(a.url||""),c=(0,s.Z)(l,2),o=c[0],i=c[1],d=(0,r.useState)(a.comments||""),u=(0,s.Z)(d,2),p=u[0],h=u[1],m=(0,r.useState)(a.place||""),x=(0,s.Z)(m,2),j=x[0],S=x[1],_=(0,r.useState)(a.sex||""),f=(0,s.Z)(_,2),N=f[0],v=f[1],b=(0,r.useState)(""),g=(0,s.Z)(b,2),P=g[0],A=g[1],T=(0,r.useState)(""),L=(0,s.Z)(T,2),Z=L[0],k=L[1],O=(0,r.useState)(""),E=(0,s.Z)(O,2),D=E[0],B=E[1],I=function(e,t){v(e)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:H.WrapperForm,children:[(0,y.jsxs)("div",{className:H.WrapperPotoSell,children:[(0,y.jsx)("div",{className:H.SexText,children:"The Sex"}),(0,y.jsxs)("ul",{className:H.SexOption,children:[(0,y.jsx)("li",{children:(0,y.jsxs)("button",{className:"".concat(H.SexElement," ").concat("female"===N?H.SelectedSex:""),onClick:function(){return I("female")},children:[(0,y.jsx)("img",{src:Q.Z,alt:"female"}),"Female"]})}),(0,y.jsx)("li",{children:(0,y.jsxs)("button",{className:"".concat(H.SexElement," ").concat("male"===N?H.SelectedSex:""),onClick:function(){return I("male")},children:[(0,y.jsx)("img",{src:G.Z,alt:"male"}),"Male"]})})]}),Z&&(0,y.jsx)("span",{className:H.ErrorMessage,children:Z}),(0,y.jsxs)("div",{className:H.WrapperAddPhoto,children:[(0,y.jsx)("label",{className:H.LabelAddText,children:"Load the pet\u2019s image:"}),(0,y.jsx)("input",{type:"file",id:"photo",onChange:function(e){var t=e.target.files[0];t&&t.size>3145728?A("Photo size should be up to 3MB"):(A(""),i(t))},style:{display:"none"}}),(0,y.jsx)("label",{htmlFor:"photo",className:"".concat(H.LabelAdd," ").concat(P&&H.InputError),children:(0,y.jsxs)("div",{className:H.LabelAdd,children:[o&&(0,y.jsx)("img",{className:H.PreviewPhoto,src:URL.createObjectURL(o),alt:"Selected img"}),!o&&(0,y.jsx)(C.l5,{className:H.IconAdd})]})}),P&&(0,y.jsx)("span",{className:"".concat(H.ErrorMessage," ").concat(H.ErrorMessageLeft),children:P})]})]}),(0,y.jsxs)("div",{className:H.WrapperFormSellInputs,children:[(0,y.jsxs)("div",{className:H.LabelInput,children:[(0,y.jsx)("label",{className:H.LabelStep,htmlFor:"name",children:"Location"}),(0,y.jsx)("input",{className:"".concat(H.Input," ").concat(D?H.InputError:""),type:"text",id:"place",value:j,onChange:function(e){return S(e.target.value)},placeholder:"Type location"}),D&&(0,y.jsx)("span",{className:H.ErrorMessage,children:D})]}),(0,y.jsxs)("div",{className:H.WrapperTextarea,children:[(0,y.jsx)("label",{className:H.TextareaText,htmlFor:"comments",children:"Comments"}),(0,y.jsx)("textarea",{className:H.TextareaAdd,id:"comments",value:p,placeholder:"Type your comment",onChange:function(e){return h(e.target.value)},maxLength:120})]})]})]}),(0,y.jsxs)("ul",{className:H.LinkAddPet,children:[(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:H.LinkAddPetCancel,onClick:function(){return t(a)},children:(0,y.jsxs)("div",{className:H.ButtonEl,children:[(0,y.jsx)(C.Y4,{style:{stroke:"var(--blue-color)"}}),(0,y.jsx)("span",{children:"Back"})]})})}),(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:H.ButtonNext,onClick:function(){(function(){var e=!0;o?A(""):(A("Photo is required"),e=!1),N?k(""):(k("The sex is not selected"),e=!1),j?/^[A-Z][a-z]+$/.test(j)?B(""):(B("Invalid location format"),e=!1):(B("Location is required"),e=!1);return e})()&&n({photo:o,comments:p,place:j,sex:N})},children:(0,y.jsxs)("div",{className:H.ButtonEl,children:[(0,y.jsx)("span",{children:"Done "}),(0,y.jsx)(C.ZO,{style:{fill:"var(--bg-color)"}})]})})})]})]})},J=function(e){var t=e.handlePreviousStep,a=e.selectedOption,n=e.formData,s=e.doneSubmit3;return(0,y.jsxs)(y.Fragment,{children:["your-pet"===a?(0,y.jsx)($,{handlePreviousStep:t,formData:n,doneSubmit3:s}):"","sell"===a?(0,y.jsx)(V,{handlePreviousStep:t,formData:n,doneSubmit3:s}):"","lost-found"===a||"in-good-hands"===a?(0,y.jsx)(X,{handlePreviousStep:t,formData:n,doneSubmit3:s}):""]})};var K=function(){var e=(0,r.useState)({step:1,currentStep:1,selectedOption:"your-pet",activeButton:1,isLoading:!1,formData:{}}),t=(0,s.Z)(e,2),a=t[0],m=t[1],j=(0,r.useState)({}),S=(0,s.Z)(j,2),_=S[0],f=S[1],N=(0,c.I0)(),v=(0,l.s0)(),b=function(e){m((function(t){return(0,n.Z)((0,n.Z)({},t),e)}))},g=function(e,t){b({isLoading:!0}),a.selectedOption&&a.currentStep+e>0&&a.currentStep+e<=3&&b({step:a.step+e,currentStep:a.currentStep+e}),b({isLoading:!1}),b({formData:(0,n.Z)((0,n.Z)({},a.formData),t)})};return(0,r.useEffect)((function(){if("your-pet"===a.selectedOption&&_.photo&&_.comments&&_.name&&_.birthday){var e=new FormData;e.append("photoURL",_.photo),e.append("birthday",_.birthday),e.append("type",_.breed),e.append("comments",_.comments),e.append("name",_.name),N((0,d.Ns)(e)).then((function(e){"pets/addPet/fulfilled"===e.type&&(o.Am.success("The pet was added."),v("/user"))})),f({})}if(_.photo&&_.comments&&a.selectedOption&&_.name&&_.birthday&&_.breed&&"your-pet"!==a.selectedOption){var t=new FormData;t.append("imgUrl",_.photo),t.append("birthday",_.birthday),t.append("type",_.breed),t.append("comments",_.comments),t.append("name",_.name),t.append("location",_.place),t.append("price",_.price),t.append("sex",_.sex),t.append("title",_.title),t.append("category",a.selectedOption),N((0,i.addNotice)(t)).then((function(e){"notices/addNotice/fulfilled"===e.type&&(o.Am.success("The pet was added."),v("/notices/".concat(a.selectedOption)))})),f({})}}),[N,v,_,a]),(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{className:"".concat(3===a.step&&["sell","lost-found","in-good-hands"].includes(a.selectedOption)?p:u),children:[(0,y.jsxs)("div",{className:"".concat(3===a.step&&["sell","lost-found","in-good-hands"].includes(a.selectedOption)?x:""),children:[(0,y.jsx)("h2",{className:h,children:1===a.step?"Add pet":{"your-pet":"Add pet",sell:"Add pet for sell","lost-found":"Add lost pet","in-good-hands":"Add pet in good hands"}[a.selectedOption]||"Text"}),(0,y.jsx)(L,{currentStep:a.currentStep,selectedOption:a.selectedOption})]}),1===a.step&&(0,y.jsx)(O,{handleNext:function(){return g(1)},handleCancel:function(){v(-1)},handleOptionChange:function(e,t){b({formData:(0,n.Z)((0,n.Z)({},a.formData),{},{category:e}),selectedOption:e,activeButton:t})},activeButton:a.activeButton}),2===a.step&&(0,y.jsx)(q,{selectedOption:a.selectedOption,handleNext:function(){return g(1,a.formData)},handlePreviousStep:function(){return g(-1,a.formData)},formData:a.formData,doneSubmit2:function(e){f(e)}}),3===a.step&&(0,y.jsx)(J,{selectedOption:a.selectedOption,handlePreviousStep:function(){return g(-1,a.formData)},formData:a.formData,doneSubmit3:function(e){f((function(t){return(0,n.Z)((0,n.Z)({},t),e)}))}})]})})},ee="AddPetPage_addPetPage__2I55C",te=function(){return(0,y.jsx)("div",{className:ee,children:(0,y.jsx)(K,{})})}}}]);
//# sourceMappingURL=262.8e4225f8.chunk.js.map