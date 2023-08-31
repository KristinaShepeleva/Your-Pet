"use strict";(self.webpackChunkyour_pet=self.webpackChunkyour_pet||[]).push([[262],{2262:function(e,t,a){a.r(t),a.d(t,{default:function(){return ae}});var n=a(1413),s=a(9439),r=a(2791),l=a(7689),c=a(9434),i=a(9085),o=a(8699),d=a(9874),u="AddPetPage_AddPetWrap__-b6Uo",p="AddPetPage_AddPetThirdWrap__yh7al",h="AddPetPage_AddPet__tzXfm",m="AddPetPage_StepList__cfm2a",x="AddPetPage_StepInfo__Qz9Cv",j="AddPetPage_StepItemDone__tO+Qy",S="AddPetPage_StepItemCurrent__tnkM6",_="AddPetPage_StepItem__xN+vt",f="AddPetPage_ChooseOptionList__AID2L",N="AddPetPage_PetButton__nYdDX",v="AddPetPage_PetButtonActive__nFdxk",b="AddPetPage_ButtonNext__bY5G8",g="AddPetPage_ButtonEl__4xG8b",P="AddPetPage_LinkAddPet__yyAtp",A="AddPetPage_LinkAddPetCancel__ttRjj",y=a(184),T=function(e){var t=e.isActive,a=e.isDone,n=e.children,s=_;return t?s=S:a&&(s=j),(0,y.jsx)("li",{className:s,children:n})},L=function(e){var t=e.currentStep;return(0,y.jsxs)("ul",{className:m,children:[(0,y.jsx)(T,{isActive:1===t,isDone:t>1,children:"Choose option"}),(0,y.jsx)(T,{isActive:2===t,isDone:t>2,children:"Personal details"}),(0,y.jsx)(T,{isActive:3===t,isDone:t>3,children:"More info"})]})},C=a(8088),Z=function(e){var t=e.isActive,a=e.label,n=e.onClick,s=(e.doneSubmit,t?v:"");return(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:"".concat(N," ").concat(s),onClick:n,children:a})})},k=function(e){var t=e.label,a=e.icon,n=e.onClick,s=e.isPrimary,r=e.isNext,l=s?b:A;return(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:l,onClick:n,children:(0,y.jsxs)("div",{className:g,children:[r&&(0,y.jsx)("span",{children:t}),(0,y.jsx)(y.Fragment,{children:a}),!r&&(0,y.jsx)("span",{children:t})]})})})},D=function(e){var t=e.handleNext,a=e.handleCancel,n=e.handleOptionChange,s=e.activeButton;return(0,y.jsxs)("div",{children:[(0,y.jsxs)("ul",{className:f,children:[(0,y.jsx)(Z,{isActive:1===s,label:"your pet",onClick:function(){return n("your-pet",1)}}),(0,y.jsx)(Z,{isActive:2===s,label:"sell",onClick:function(){return n("sell",2)}}),(0,y.jsx)(Z,{isActive:3===s,label:"lost/found",onClick:function(){return n("lost-found",3)}}),(0,y.jsx)(Z,{isActive:4===s,label:"in good hands",onClick:function(){return n("in-good-hands",4)}})]}),(0,y.jsxs)("ul",{className:P,children:[(0,y.jsx)(k,{label:"Cancel",icon:(0,y.jsx)(C.Y4,{}),onClick:a}),(0,y.jsx)(k,{label:"Next",icon:(0,y.jsx)(C.ZO,{style:{fill:"var(--bg-color)"}}),onClick:function(){t({})},isPrimary:!0,isNext:!0})]})]})},B="SecondStep_FormWrapper__z+RHi",E="SecondStep_WrapperLabelInput__j5dgh",O="SecondStep_LabelStep__sy0VS",I="SecondStep_Input__zCMZQ",F="SecondStep_ButtonNext__1YH1Y",W="SecondStep_ButtonEl__4m2Wu",M="SecondStep_LinkAddPet__R7-5g",w="SecondStep_LinkAddPetCancel__THsAl",z="SecondStep_ErrorMessage__oNrn4",R="SecondStep_InputError__RVq9C",U=a(7133),q=function(e){var t=e.handleNext,a=e.handlePreviousStep,n=e.formData,l=e.doneSubmit2,c=(0,r.useState)(n.name||""),i=(0,s.Z)(c,2),o=i[0],d=i[1],u=(0,r.useState)(n.birthday||""),p=(0,s.Z)(u,2),h=p[0],m=p[1],x=(0,r.useState)(n.breed||""),j=(0,s.Z)(x,2),S=j[0],_=j[1],f=(0,r.useState)(""),N=(0,s.Z)(f,2),v=N[0],b=N[1],g=(0,r.useState)(""),P=(0,s.Z)(g,2),A=P[0],T=P[1],L=(0,r.useState)(""),Z=(0,s.Z)(L,2),k=Z[0],D=Z[1],q=function(){return!o||o.length<2||o.length>16||!/^[A-Za-z\s]+$/.test(o)?(b(R),!1):(b(""),!0)},Y=function(){return h?(T(""),!0):(T(R),!1)},H=function(){return!S||S.length<2||S.length>16||!/^[A-Za-z\s]+$/.test(S)?(D(R),!1):(D(""),!0)};return(0,y.jsxs)("div",{className:B,children:[(0,y.jsxs)("div",{className:E,children:[(0,y.jsx)("label",{className:O,htmlFor:"name",children:"Pet\u2019s name"}),(0,y.jsx)("input",{className:"".concat(I," ").concat(v),type:"text",id:"name",value:o,onChange:function(e){return d(e.target.value)},onBlur:q,placeholder:"Type name pet"}),v&&(0,y.jsx)("span",{className:"".concat(z),children:"Name must be between 2 and 16 characters"})]}),(0,y.jsxs)("div",{className:E,children:[(0,y.jsx)("label",{className:O,htmlFor:"birthday",children:"Date of birth"}),(0,y.jsx)("input",{className:"".concat(I," ").concat(A),type:"date",id:"birthday",value:h,onChange:function(e){return m(e.target.value)},onBlur:Y}),A&&(0,y.jsx)("span",{className:"".concat(z),children:"Date of birth is required"})]}),(0,y.jsxs)("div",{className:E,children:[(0,y.jsx)("label",{className:O,htmlFor:"type",children:"Type"}),(0,y.jsx)("input",{className:"".concat(I," ").concat(k),type:"text",id:"type",value:S,onChange:function(e){return _(e.target.value)},onBlur:H,required:!0,placeholder:"Type of pet"}),k&&(0,y.jsx)("span",{className:"".concat(z),children:"Breed must be between 2 and 16 characters"})]}),(0,y.jsxs)("ul",{className:M,children:[(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:w,onClick:function(){return a(n)},children:(0,y.jsxs)("div",{className:W,children:[(0,y.jsx)("img",{src:U.Z,alt:"Back"}),(0,y.jsx)("span",{children:"Back"})]})})}),(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:F,onClick:function(){(function(){var e=q(),t=Y(),a=H();return e&&t&&a})()&&(t(),l({name:o,birthday:h,breed:S}))},children:(0,y.jsxs)("div",{className:W,children:[(0,y.jsx)("span",{children:"Next"}),(0,y.jsx)(C.ZO,{style:{fill:"var(--bg-color)"}})]})})})]})]})},Y=function(e){var t=e.handleNext,a=e.handlePreviousStep,n=e.formData,l=e.doneSubmit2,c=(0,r.useState)(n.name||""),i=(0,s.Z)(c,2),o=i[0],d=i[1],u=(0,r.useState)(n.title||""),p=(0,s.Z)(u,2),h=p[0],m=p[1],x=(0,r.useState)(n.birthday||""),j=(0,s.Z)(x,2),S=j[0],_=j[1],f=(0,r.useState)(n.breed||""),N=(0,s.Z)(f,2),v=N[0],b=N[1],g=(0,r.useState)(""),P=(0,s.Z)(g,2),A=P[0],T=P[1],L=(0,r.useState)(""),Z=(0,s.Z)(L,2),k=Z[0],D=Z[1],q=(0,r.useState)(""),Y=(0,s.Z)(q,2),H=Y[0],$=Y[1],Q=(0,r.useState)(""),G=(0,s.Z)(Q,2),V=G[0],X=G[1],J=function(){return!h||h.length<2||h.length>16||!/^[A-Za-z\s]+$/.test(h)?(T(R),!1):(T(""),!0)},K=function(){return!o||o.length<2||o.length>16||!/^[A-Za-z\s]+$/.test(o)?(D(R),!1):(D(""),!0)},ee=function(){return S?($(""),!0):($(R),!1)},te=function(){return!v||v.length<2||v.length>16||!/^[A-Za-z\s]+$/.test(v)?(X(R),!1):(X(""),!0)};return(0,y.jsxs)("div",{className:B,children:[(0,y.jsxs)("div",{className:E,children:[(0,y.jsx)("label",{className:O,htmlFor:"title",children:"Title of add"}),(0,y.jsx)("input",{className:"".concat(I," ").concat(A),type:"text",id:"title",value:h,onChange:function(e){return m(e.target.value)},onBlur:J,placeholder:"Title of add"}),A&&(0,y.jsx)("span",{className:"".concat(z),children:"Title must be between 2 and 16 characters"})]}),(0,y.jsxs)("div",{className:E,children:[(0,y.jsx)("label",{className:O,htmlFor:"name",children:"Pet\u2019s name"}),(0,y.jsx)("input",{className:"".concat(I," ").concat(k),type:"text",id:"name",value:o,onChange:function(e){return d(e.target.value)},onBlur:K,placeholder:"Type name pet"}),k&&(0,y.jsx)("span",{className:"".concat(z),children:"Name must be between 2 and 16 characters"})]}),(0,y.jsxs)("div",{className:E,children:[(0,y.jsx)("label",{className:O,htmlFor:"birthday",children:"Date of birth"}),(0,y.jsx)("input",{className:"".concat(I," ").concat(H),type:"date",id:"birthday",value:S,onChange:function(e){return _(e.target.value)},onBlur:ee}),H&&(0,y.jsx)("span",{className:"".concat(z),children:"Date of birth is required"})]}),(0,y.jsxs)("div",{className:E,children:[(0,y.jsx)("label",{className:O,htmlFor:"type",children:"Type"}),(0,y.jsx)("input",{className:"".concat(I," ").concat(V),type:"text",id:"type",value:v,onChange:function(e){return b(e.target.value)},onBlur:te,required:!0,placeholder:"Type of pet"}),V&&(0,y.jsx)("span",{className:"".concat(z),children:"Breed must be between 2 and 16 characters"})]}),(0,y.jsxs)("ul",{className:M,children:[(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:w,onClick:function(){return a(n)},children:(0,y.jsxs)("div",{className:W,children:[(0,y.jsx)("img",{src:U.Z,alt:"Back"}),(0,y.jsx)("span",{children:"Back"})]})})}),(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:F,onClick:function(){(function(){var e=J(),t=K(),a=ee(),n=te();return e&&t&&a&&n})()&&(t(),l({name:o,title:h,birthday:S,breed:v}))},children:(0,y.jsxs)("div",{className:W,children:[(0,y.jsx)("span",{children:"Next"}),(0,y.jsx)(C.ZO,{style:{fill:"var(--bg-color)"}})]})})})]})]})},H=function(e){var t=e.handleNext,a=e.handlePreviousStep,n=e.selectedOption,s=e.formData,r=e.doneSubmit2;return(0,y.jsxs)(y.Fragment,{children:["your-pet"===n?(0,y.jsx)(q,{handleNext:t,handlePreviousStep:a,formData:s,doneSubmit2:r}):"","sell"===n||"lost-found"===n||"in-good-hands"===n?(0,y.jsx)(Y,{handleNext:t,handlePreviousStep:a,formData:s,doneSubmit2:r}):""]})},$={WrapperForm:"ThirdStep_WrapperForm__0LdcH",SexText:"ThirdStep_SexText__4ZXKP",SexOption:"ThirdStep_SexOption__Gidvl",LabelInput:"ThirdStep_LabelInput__EJGmP",WrapperFormSellInputs:"ThirdStep_WrapperFormSellInputs__42kiN",SexElement:"ThirdStep_SexElement__lWx4D",SelectedSex:"ThirdStep_SelectedSex__awQiw",WrapperLabelInput:"ThirdStep_WrapperLabelInput__vRxdR",LabelStep:"ThirdStep_LabelStep__wAnsO",Input:"ThirdStep_Input__wFxqL",WrapperPoto:"ThirdStep_WrapperPoto__EtAMY",WrapperAddPhoto:"ThirdStep_WrapperAddPhoto__9D-x8",LabelAddText:"ThirdStep_LabelAddText__psfpj",LabelAdd:"ThirdStep_LabelAdd__12OQR",PreviewPhoto:"ThirdStep_PreviewPhoto__zHmh4",IconAdd:"ThirdStep_IconAdd__vyXvW",WrapperTextareaOne:"ThirdStep_WrapperTextareaOne__pQaU5",WrapperTextarea:"ThirdStep_WrapperTextarea__lfmtF",TextareaText:"ThirdStep_TextareaText__-w26U",TextareaAddOne:"ThirdStep_TextareaAddOne__RocUM",TextareaAdd:"ThirdStep_TextareaAdd__4OyCB",ButtonNext:"ThirdStep_ButtonNext__AYT1L",ButtonEl:"ThirdStep_ButtonEl__czHVz",LinkAddPet:"ThirdStep_LinkAddPet__42DOR",LinkAddPetCancel:"ThirdStep_LinkAddPetCancel__fiWqo",ErrorMessage:"ThirdStep_ErrorMessage__-2Rny",ErrorMessageLeft:"ThirdStep_ErrorMessageLeft__x8YhM",InputError:"ThirdStep_InputError__AVc0r",ErrorContainer:"ThirdStep_ErrorContainer__OH3am"},Q=function(e){var t=e.handlePreviousStep,a=e.formData,n=e.doneSubmit3,l=(0,r.useState)(null),c=(0,s.Z)(l,2),i=c[0],o=c[1],d=(0,r.useState)(""),u=(0,s.Z)(d,2),p=u[0],h=u[1],m=(0,r.useState)(""),x=(0,s.Z)(m,2),j=x[0],S=x[1];return(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",{className:$.WrapperPoto,children:[(0,y.jsx)("label",{className:$.LabelAddText,children:"Load the pet\u2019s image:"}),(0,y.jsxs)("div",{className:$.ErrorContainer,children:[(0,y.jsxs)("label",{htmlFor:"photo",className:"".concat($.LabelAdd," ").concat(j&&$.InputError),children:[i&&(0,y.jsx)("img",{className:$.PreviewPhoto,src:URL.createObjectURL(i),alt:"Upload img"}),!i&&(0,y.jsx)(C.l5,{className:$.IconAdd})]}),j&&(0,y.jsx)("span",{className:"".concat($.ErrorMessage," ").concat($.ErrorMessageRight),children:j})]}),(0,y.jsx)("input",{type:"file",id:"photo",onChange:function(e){var t=e.target.files[0];t&&t.size>3145728?S("Photo size should be up to 3MB"):(S(""),o(t))},style:{display:"none"}})]}),(0,y.jsxs)("div",{className:$.WrapperTextareaOne,children:[(0,y.jsx)("label",{className:$.TextareaText,children:"Comments"}),(0,y.jsx)("textarea",{className:$.TextareaAddOne,id:"comments",value:p,placeholder:"Type your comment",onChange:function(e){return h(e.target.value)},maxLength:120})]}),(0,y.jsxs)("ul",{className:$.LinkAddPet,children:[(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:$.LinkAddPetCancel,onClick:function(){return t(a)},children:(0,y.jsxs)("div",{className:$.ButtonEl,children:[(0,y.jsx)("img",{src:U.Z,alt:"Back"}),(0,y.jsx)("span",{children:"Back"})]})})}),(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:$.ButtonNext,onClick:function(){(i?(S(""),1):(S("Photo is required"),0))&&n({photo:i,comments:p})},children:(0,y.jsxs)("div",{className:$.ButtonEl,children:[(0,y.jsx)("span",{children:"Done"}),(0,y.jsx)(C.ZO,{style:{fill:"var(--bg-color)"}})]})})})]})]})},G=a(4681),V=a(9312),X=function(e){var t=e.handlePreviousStep,a=e.formData,n=e.doneSubmit3,l=(0,r.useState)(a.url||""),c=(0,s.Z)(l,2),i=c[0],o=c[1],d=(0,r.useState)(a.comments||""),u=(0,s.Z)(d,2),p=u[0],h=u[1],m=(0,r.useState)(a.place||""),x=(0,s.Z)(m,2),j=x[0],S=x[1],_=(0,r.useState)(a.price||""),f=(0,s.Z)(_,2),N=f[0],v=f[1],b=(0,r.useState)(a.sex||""),g=(0,s.Z)(b,2),P=g[0],A=g[1],T=(0,r.useState)(""),L=(0,s.Z)(T,2),Z=L[0],k=L[1],D=(0,r.useState)(""),B=(0,s.Z)(D,2),E=B[0],O=B[1],I=(0,r.useState)(""),F=(0,s.Z)(I,2),W=F[0],M=F[1],w=(0,r.useState)(""),z=(0,s.Z)(w,2),R=z[0],q=z[1],Y=function(e,t){A(e)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:$.WrapperForm,children:[(0,y.jsxs)("div",{className:$.WrapperPotoSell,children:[(0,y.jsx)("div",{className:$.SexText,children:"The Sex"}),(0,y.jsxs)("ul",{className:$.SexOption,children:[(0,y.jsx)("li",{children:(0,y.jsxs)("button",{className:"".concat($.SexElement," ").concat("female"===P?$.SelectedSex:""),onClick:function(){return Y("female")},children:[(0,y.jsx)("img",{src:G.Z,alt:"female"}),"Female"]})}),(0,y.jsx)("li",{children:(0,y.jsxs)("button",{className:"".concat($.SexElement," ").concat("male"===P?$.SelectedSex:""),onClick:function(){return Y("male")},children:[(0,y.jsx)("img",{src:V.Z,alt:"male"}),"Male"]})})]}),E&&(0,y.jsx)("span",{className:$.ErrorMessage,children:E}),(0,y.jsxs)("div",{className:$.WrapperAddPhoto,children:[(0,y.jsx)("label",{className:$.LabelAddText,children:"Load the pet\u2019s image:"}),(0,y.jsx)("input",{type:"file",id:"photo",onChange:function(e){var t=e.target.files[0];t&&t.size>3145728?k("Photo size should be up to 3MB"):(k(""),o(t))},style:{display:"none"}}),(0,y.jsx)("label",{htmlFor:"photo",className:"".concat($.LabelAdd," ").concat(Z&&$.InputError),children:(0,y.jsxs)("div",{className:$.LabelAdd,children:[i&&(0,y.jsx)("img",{className:$.PreviewPhoto,src:URL.createObjectURL(i),alt:"Selected img"}),!i&&(0,y.jsx)(C.l5,{className:$.IconAdd})]})}),Z&&(0,y.jsx)("span",{className:"".concat($.ErrorMessage," ").concat($.ErrorMessageLeft),children:Z})]})]}),(0,y.jsxs)("div",{className:$.WrapperFormSellInputs,children:[(0,y.jsxs)("div",{className:$.LabelInput,children:[(0,y.jsx)("label",{className:$.LabelStep,htmlFor:"name",children:"Location"}),(0,y.jsx)("input",{className:"".concat($.Input," ").concat(W?$.InputError:""),type:"text",id:"name",value:j,onChange:function(e){return S(e.target.value)},placeholder:"Type location"}),W&&(0,y.jsx)("span",{className:$.ErrorMessage,children:W})]}),(0,y.jsxs)("div",{className:$.LabelInput,children:[(0,y.jsx)("label",{className:$.LabelStep,htmlFor:"name",children:"Price"}),(0,y.jsx)("input",{className:"".concat($.Input," ").concat(R?$.InputError:""),type:"text",id:"name",value:N,onChange:function(e){return v(e.target.value)},placeholder:"Type price"}),R&&(0,y.jsx)("span",{className:$.ErrorMessage,children:R})]}),(0,y.jsxs)("div",{className:$.WrapperTextarea,children:[(0,y.jsx)("label",{className:$.TextareaText,htmlFor:"comments",children:"Comments"}),(0,y.jsx)("textarea",{className:$.TextareaAddOne,id:"comments",value:p,placeholder:"Type comment",onChange:function(e){return h(e.target.value)},maxLength:120})]})]})]}),(0,y.jsxs)("ul",{className:$.LinkAddPet,children:[(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:$.LinkAddPetCancel,onClick:function(){return t(a)},children:(0,y.jsxs)("div",{className:$.ButtonEl,children:[(0,y.jsx)("img",{src:U.Z,alt:"Back"}),(0,y.jsx)("span",{children:"Back"})]})})}),(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:$.ButtonNext,onClick:function(){(function(){var e=!0;i?k(""):(k("Photo is required"),e=!1),P?O(""):(O("The sex is not selected"),e=!1),j?/^[A-Z][a-z]+$/.test(j)?M(""):(M("Invalid location format"),e=!1):(M("Location is required"),e=!1);return!N||isNaN(parseFloat(N))||parseFloat(N)<=0?(q("Price must be a positive number"),e=!1):q(""),e})()&&n({photo:i,comments:p,place:j,price:N,sex:P})},children:(0,y.jsxs)("div",{className:$.ButtonEl,children:[(0,y.jsx)("span",{children:"Done"}),(0,y.jsx)(C.ZO,{style:{fill:"var(--bg-color)"}})]})})})]})]})},J=function(e){var t=e.handlePreviousStep,a=e.formData,n=e.doneSubmit3,l=(0,r.useState)(a.url||""),c=(0,s.Z)(l,2),i=c[0],o=c[1],d=(0,r.useState)(a.comments||""),u=(0,s.Z)(d,2),p=u[0],h=u[1],m=(0,r.useState)(a.place||""),x=(0,s.Z)(m,2),j=x[0],S=x[1],_=(0,r.useState)(a.sex||""),f=(0,s.Z)(_,2),N=f[0],v=f[1],b=(0,r.useState)(""),g=(0,s.Z)(b,2),P=g[0],A=g[1],T=(0,r.useState)(""),L=(0,s.Z)(T,2),Z=L[0],k=L[1],D=(0,r.useState)(""),B=(0,s.Z)(D,2),E=B[0],O=B[1],I=function(e,t){v(e)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:$.WrapperForm,children:[(0,y.jsxs)("div",{className:$.WrapperPotoSell,children:[(0,y.jsx)("div",{className:$.SexText,children:"The Sex"}),(0,y.jsxs)("ul",{className:$.SexOption,children:[(0,y.jsx)("li",{children:(0,y.jsxs)("button",{className:"".concat($.SexElement," ").concat("female"===N?$.SelectedSex:""),onClick:function(){return I("female")},children:[(0,y.jsx)("img",{src:G.Z,alt:"female"}),"Female"]})}),(0,y.jsx)("li",{children:(0,y.jsxs)("button",{className:"".concat($.SexElement," ").concat("male"===N?$.SelectedSex:""),onClick:function(){return I("male")},children:[(0,y.jsx)("img",{src:V.Z,alt:"male"}),"Male"]})})]}),Z&&(0,y.jsx)("span",{className:$.ErrorMessage,children:Z}),(0,y.jsxs)("div",{className:$.WrapperAddPhoto,children:[(0,y.jsx)("label",{className:$.LabelAddText,children:"Load the pet\u2019s image:"}),(0,y.jsx)("input",{type:"file",id:"photo",onChange:function(e){var t=e.target.files[0];t&&t.size>3145728?A("Photo size should be up to 3MB"):(A(""),o(t))},style:{display:"none"}}),(0,y.jsx)("label",{htmlFor:"photo",className:"".concat($.LabelAdd," ").concat(P&&$.InputError),children:(0,y.jsxs)("div",{className:$.LabelAdd,children:[i&&(0,y.jsx)("img",{className:$.PreviewPhoto,src:URL.createObjectURL(i),alt:"Selected img"}),!i&&(0,y.jsx)(C.l5,{className:$.IconAdd})]})}),P&&(0,y.jsx)("span",{className:"".concat($.ErrorMessage," ").concat($.ErrorMessageLeft),children:P})]})]}),(0,y.jsxs)("div",{className:$.WrapperFormSellInputs,children:[(0,y.jsxs)("div",{className:$.LabelInput,children:[(0,y.jsx)("label",{className:$.LabelStep,htmlFor:"name",children:"Location"}),(0,y.jsx)("input",{className:"".concat($.Input," ").concat(E?$.InputError:""),type:"text",id:"place",value:j,onChange:function(e){return S(e.target.value)},placeholder:"Type location"}),E&&(0,y.jsx)("span",{className:$.ErrorMessage,children:E})]}),(0,y.jsxs)("div",{className:$.WrapperTextarea,children:[(0,y.jsx)("label",{className:$.TextareaText,htmlFor:"comments",children:"Comments"}),(0,y.jsx)("textarea",{className:$.TextareaAdd,id:"comments",value:p,placeholder:"Type your comment",onChange:function(e){return h(e.target.value)},maxLength:120})]})]})]}),(0,y.jsxs)("ul",{className:$.LinkAddPet,children:[(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:$.LinkAddPetCancel,onClick:function(){return t(a)},children:(0,y.jsxs)("div",{className:$.ButtonEl,children:[(0,y.jsx)("img",{src:U.Z,alt:"Back"}),(0,y.jsx)("span",{children:"Back"})]})})}),(0,y.jsx)("li",{children:(0,y.jsx)("button",{className:$.ButtonNext,onClick:function(){(function(){var e=!0;i?A(""):(A("Photo is required"),e=!1),N?k(""):(k("The sex is not selected"),e=!1),j?/^[A-Z][a-z]+$/.test(j)?O(""):(O("Invalid location format"),e=!1):(O("Location is required"),e=!1);return e})()&&n({photo:i,comments:p,place:j,sex:N})},children:(0,y.jsxs)("div",{className:$.ButtonEl,children:[(0,y.jsx)("span",{children:"Done "}),(0,y.jsx)(C.ZO,{style:{fill:"var(--bg-color)"}})]})})})]})]})},K=function(e){var t=e.handlePreviousStep,a=e.selectedOption,n=e.formData,s=e.doneSubmit3;return(0,y.jsxs)(y.Fragment,{children:["your-pet"===a?(0,y.jsx)(Q,{handlePreviousStep:t,formData:n,doneSubmit3:s}):"","sell"===a?(0,y.jsx)(X,{handlePreviousStep:t,formData:n,doneSubmit3:s}):"","lost-found"===a||"in-good-hands"===a?(0,y.jsx)(J,{handlePreviousStep:t,formData:n,doneSubmit3:s}):""]})};var ee=function(){var e=(0,r.useState)({step:1,currentStep:1,selectedOption:"",activeButton:null,isLoading:!1,showModal:!1,formData:{}}),t=(0,s.Z)(e,2),a=t[0],m=t[1],j=(0,r.useState)({}),S=(0,s.Z)(j,2),_=S[0],f=S[1],N=(0,c.I0)(),v=(0,l.s0)(),b=function(e){m((function(t){return(0,n.Z)((0,n.Z)({},t),e)}))},g=function(e,t){b({isLoading:!0}),a.selectedOption&&a.currentStep+e>0&&a.currentStep+e<=3?b({step:a.step+e,currentStep:a.currentStep+e}):window.alert("Please select an option!"),b({isLoading:!1}),b({formData:(0,n.Z)((0,n.Z)({},a.formData),t)})};return(0,r.useEffect)((function(){if("your-pet"===a.formData.category&&_.photo&&_.comments&&_.name&&_.birthday){var e=new FormData;e.append("imgUrl",_.photo),e.append("birthday",_.birthday),e.append("type",_.breed),e.append("comments",_.comments),e.append("name",_.name),e.append("category",a.formData.category),N((0,d.Ns)(e)).then((function(e){"/"===e.type&&(i.Am.success("Pet is added"),v("/user"))})),f({})}if(_.photo&&_.comments&&a.formData.category&&_.name&&_.birthday&&_.breed&&"your-pet"!==a.formData.category){var t=new FormData;t.append("imgUrl",_.photo),t.append("birthday",_.birthday),t.append("type",_.breed),t.append("comments",_.comments),t.append("name",_.name),t.append("location",_.place),t.append("price",_.price),t.append("sex",_.sex),t.append("title",_.title),t.append("category",a.formData.category),N((0,o.addNotice)(t)).then((function(e){"notices/addNotice/fulfilled"===e.type&&(i.Am.success("Pet is added"),v("/notices/".concat(a.formData.category)))})),f({})}}),[N,v,_,a]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:"".concat(3===a.step&&["sell","lost-found","in-good-hands"].includes(a.selectedOption)?p:u),children:[(0,y.jsxs)("div",{className:"".concat(3===a.step&&["sell","lost-found","in-good-hands"].includes(a.selectedOption)?x:""),children:[(0,y.jsx)("h2",{className:h,children:1===a.step?"Add pet":{"your-pet":"Add pet",sell:"Add pet for sell","lost-found":"Add lost pet","in-good-hands":"Add pet in good hands"}[a.selectedOption]||"Text"}),(0,y.jsx)(L,{currentStep:a.currentStep,selectedOption:a.selectedOption})]}),1===a.step&&(0,y.jsx)(D,{handleNext:function(){return g(1)},handleCancel:function(){v(-1)},handleOptionChange:function(e,t){b({formData:(0,n.Z)((0,n.Z)({},a.formData),{},{category:e}),selectedOption:e,activeButton:t})},activeButton:a.activeButton}),2===a.step&&(0,y.jsx)(H,{selectedOption:a.selectedOption,handleNext:function(){return g(1,a.formData)},handlePreviousStep:function(){return g(-1,a.formData)},formData:a.formData,doneSubmit2:function(e){f(e)}}),3===a.step&&(0,y.jsx)(K,{selectedOption:a.selectedOption,handlePreviousStep:function(){return g(-1,a.formData)},formData:a.formData,doneSubmit3:function(e){f((function(t){return(0,n.Z)((0,n.Z)({},t),e)}))}})]}),a.showModal&&(0,y.jsx)("div",{children:"Modal content"})]})},te="AddPetPage_addPetPage__2I55C",ae=function(){return(0,y.jsx)("div",{className:te,children:(0,y.jsx)(ee,{})})}}}]);
//# sourceMappingURL=262.41b61c61.chunk.js.map