(this["webpackJsonpreact-redux-hooks-jwt-auth"]=this["webpackJsonpreact-redux-hooks-jwt-auth"]||[]).push([[0],{511:function(e,t,a){e.exports=a(766)},520:function(e,t,a){},522:function(e,t,a){},70:function(e,t){e.exports={LOGIN_SUCCESS:"login",LOGOUT:"logout",AddManuallyCard:{type:"add",title:"Add Manually",imageLink:"https://i.ibb.co/FWLP0Py/Screenshot-2021-10-16-at-9-07-49-PM.jpg",buttonText:"Add Product Manually"},StockListCard:{type:"list",title:"Stock List",imageLink:"https://i.ibb.co/crkDb7B/Screenshot-2021-10-16-at-10-36-05-PM.jpg",buttonText:"View Stock List"},BASE_API_URL:"http://ec2-3-138-121-146.us-east-2.compute.amazonaws.com:8000/api/",LOCAL_BASE_URL:"http://localhost:8000/api/",isProduction:!1}},766:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),l=a.n(c),o=a(109),s=a(154),i=a(461),u=a(462),m=a(103),d=a(70),p=JSON.parse(localStorage.getItem("user")),f=p?{isLoggedIn:!0,user:p}:{isLoggedIn:!1,user:null},E=Object(s.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case d.LOGIN_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:!0,user:n.user});case d.LOGOUT:return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:!1,user:null});default:return e}}}),b=[u.a],y=Object(s.createStore)(E,Object(i.composeWithDevTools)(s.applyMiddleware.apply(void 0,b))),h=(a(520),a(77)),g=(a(521),a(522),a(159)),v=function(e){var t=e.component,a=Object(g.a)(e,["component"]),n=Object(o.c)((function(e){return e.auth})).isLoggedIn;return r.a.createElement(h.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(h.a,{to:"/login"})}}))},x=a(42),k=(a(524),a(770)),w=a(776),O=a(180),j=a(215),_=a(133),S=a(95),L=a(99),I=a(783),N=a(784),C=a(785),A=a(786),T=a(494),P=a(332),B=a(787),M=a(788),F=a(789),U=k.a.Header,R=k.a.Content,q=(k.a.Footer,k.a.Sider),D=w.a.Title,Y=function(){var e=Object(o.c)((function(e){return e.auth})).isLoggedIn,t=[{key:"login",linkTo:"/login",iconType:r.a.createElement(I.a,{style:{color:"#fff",fontSize:"22px"}}),tabName:"Login"},{key:"signup",linkTo:"/register",iconType:r.a.createElement(N.a,{style:{color:"#fff",fontSize:"22px"}}),tabName:"Sign Up"}],a=[{key:"home",linkTo:"/",iconType:r.a.createElement(C.a,{style:{color:"#fff",fontSize:"22px"}}),tabName:"Home"},{key:"inventory",linkTo:"/inventory",iconType:r.a.createElement(A.a,{style:{color:"#fff",fontSize:"22px"}}),tabName:"Inventory"},{key:"billing",linkTo:"/bill",iconType:r.a.createElement(T.a,{style:{color:"#fff",fontSize:"22px"}}),tabName:"Billing"},{key:"sales",linkTo:"/sales",iconType:r.a.createElement(P.a,{style:{color:"#fff",fontSize:"22px"}}),tabName:"Sales"},{key:"profile",linkTo:"/profile",iconType:r.a.createElement(B.a,{style:{color:"#fff",fontSize:"22px"}}),tabName:"Profile"}],n=e?a:t;return r.a.createElement(O.a,{style:{marginTop:"20px"},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",theme:"dark"},n.map((function(e){return r.a.createElement(O.a.Item,{key:e.key},r.a.createElement(L.a,{to:e.linkTo},e.iconType,r.a.createElement("span",{className:"nav-text"},e.tabName)))})))},z=function(e){e.user;var t=e.children,a=(e.sider,Object(n.useState)(!1)),c=Object(x.a)(a,2),l=c[0],s=c[1],i=Object(o.c)((function(e){return e.auth})).isLoggedIn,u=Object(o.b)(),m=function(e){s(!l)},p=Object(n.useCallback)((function(){localStorage.removeItem("user"),localStorage.removeItem("token"),u({type:d.LOGOUT})}),[u]);return r.a.createElement(k.a,{style:{height:"100vh"}},r.a.createElement(q,{style:{overflow:"auto",height:"100vh",position:"relative",left:0},breakpoint:"lg",width:230,collapsedWidth:0,collapsed:l,collapsible:!0,trigger:null},r.a.createElement(Y,null)),r.a.createElement(k.a,{style:{overflow:"auto"}},r.a.createElement(U,{style:{paddingLeft:20}},r.a.createElement(j.a,null,r.a.createElement(_.a,{span:2},l&&r.a.createElement(M.a,{onClick:m,style:{color:"#fff",fontSize:"30px",float:"left",marginTop:"17px"}}),!l&&r.a.createElement(F.a,{onClick:m,style:{color:"#fff",fontSize:"30px",float:"left",marginTop:"17px"}})),r.a.createElement(_.a,{span:20},r.a.createElement(D,{style:{color:"#fff",margin:10,textAlign:"center"},level:2},"Medical Inventory Management")),r.a.createElement(_.a,{span:2},i&&r.a.createElement(S.a,{type:"primary",onClick:p},"Log Out")))),r.a.createElement(R,null,t)))},W=a(24),G=a.n(W),V=a(45),K=a(306),H=a.n(K),J=a(163),Q=a.n(J),$=a(307),X=a.n($),Z=a(83),ee=a.n(Z),te=a(70),ae=te.isProduction,ne=te.BASE_API_URL,re=te.LOCAL_BASE_URL,ce=ae?ne:re,le=function(){var e=Object(V.a)(G.a.mark((function e(t){var a,n,r,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.first_name,n=t.last_name,r=t.email,c=t.password,e.abrupt("return",ee.a.post("".concat(ce,"auth/signup"),{first_name:a,last_name:n,email:r,password:c}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(V.a)(G.a.mark((function e(t){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,n=t.password,e.next=3,ee.a.post("".concat(ce,"auth/signin"),{email:a,password:n}).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=a(487),ie=a(778),ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.errorCallback;return Object(V.a)(G.a.mark((function t(){var n,r,c=arguments;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.apply(void 0,c);case 3:return t.abrupt("return",t.sent);case 6:if(t.prev=6,t.t0=t.catch(0),console.log(t.t0),(r=Object(ie.a)(["response","data","errors"],t.t0))&&r[0]?n=r.map((function(e){return e.title})).join("\n"):t.t0 instanceof Error&&(n=t.t0.message),!n){t.next=16;break}if(se.a.error({message:n}),!a){t.next=16;break}return t.next=16,a(n);case 16:case"end":return t.stop()}}),t,null,[[0,6]])})))},me=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},de=function(e){var t=e.history,a=Object(n.useRef)(),c=Object(n.useRef)(),l=Object(n.useState)(""),s=Object(x.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(""),p=Object(x.a)(m,2),f=p[0],E=p[1],b=Object(o.c)((function(e){return e.auth})).isLoggedIn,y=Object(o.b)(),g=ue(function(){var e=Object(V.a)(G.a.mark((function e(n){var r,l,o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.current.validateAll(),0!==c.current.context._errors.length){e.next=12;break}return e.next=5,oe({email:i,password:f});case 5:r=e.sent,l=r.user,o=r.token,y({type:d.LOGIN_SUCCESS,payload:{user:l}}),localStorage.setItem("user",JSON.stringify(l)),localStorage.setItem("token",o),t.push("/profile");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return b?r.a.createElement(h.a,{to:"/profile"}):r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(H.a,{onSubmit:g,ref:a},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(Q.a,{type:"text",className:"form-control",name:"email",value:i,onChange:function(e){u(e.target.value)},validations:[me]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(Q.a,{type:"password",className:"form-control",name:"password",value:f,onChange:function(e){var t=e.target.value;E(t)},validations:[me]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block"},r.a.createElement("span",null,"Login"))),r.a.createElement(X.a,{style:{display:"none"},ref:c}))))},pe=a(468),fe=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},Ee=function(e){if(!Object(pe.isEmail)(e))return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This is not a valid email.")},be=function(e){if(e.length<3||e.length>20)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The username must be between 3 and 20 characters.")},ye=function(e){if(e.length<6||e.length>40)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The password must be between 6 and 40 characters.")},he=function(e){var t=e.history,a=Object(n.useRef)(),c=Object(n.useRef)(),l=Object(n.useState)(""),o=Object(x.a)(l,2),s=o[0],i=o[1],u=Object(n.useState)(""),m=Object(x.a)(u,2),d=m[0],p=m[1],f=Object(n.useState)(""),E=Object(x.a)(f,2),b=E[0],y=E[1],h=Object(n.useState)(""),g=Object(x.a)(h,2),v=g[0],k=g[1],w=Object(n.useState)(!1),O=Object(x.a)(w,2),j=O[0],_=O[1],S=ue(function(){var e=Object(V.a)(G.a.mark((function e(n){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),_(!1),a.current.validateAll(),0!==c.current.context._errors.length){e.next=8;break}return e.next=6,le({first_name:s,last_name:d,email:b,password:v});case 6:200===e.sent.status&&(_(!0),r="success",l="User SignUp Sucessfull. Please log in",se.a[r]({message:l}),t.push("/login"));case 8:case"end":return e.stop()}var r,l}),e)})));return function(t){return e.apply(this,arguments)}}());return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(H.a,{onSubmit:S,ref:a},!j&&r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement(Q.a,{type:"text",className:"form-control",name:"firstName",value:s,onChange:function(e){var t=e.target.value;i(t)},validations:[fe,be]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement(Q.a,{type:"text",className:"form-control",name:"lastName",value:d,onChange:function(e){var t=e.target.value;p(t)},validations:[fe,be]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(Q.a,{type:"text",className:"form-control",name:"email",value:b,onChange:function(e){var t=e.target.value;y(t)},validations:[fe,Ee]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(Q.a,{type:"password",className:"form-control",name:"password",value:v,onChange:function(e){var t=e.target.value;k(t)},validations:[fe,ye]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block"},"Sign Up"))),r.a.createElement(X.a,{style:{display:"none"},ref:c}))))},ge=a(781),ve=a(160),xe=w.a.Title,ke=w.a.Paragraph,we=function(e){var t=e.title,a=e.titleLevel,n=void 0===a?2:a,c=e.description,l=Object(g.a)(e,["title","titleLevel","description"]),o=r.a.useState(!1),s=Object(x.a)(o,2),i=s[0],u=s[1];return i?r.a.createElement(r.a.Fragment,null):r.a.createElement(ge.a,l,r.a.createElement(j.a,null,r.a.createElement(_.a,{span:22},r.a.createElement(xe,{ellipsis:!0,level:n},t),r.a.createElement(ke,{ellipsis:{rows:3,expandable:!0}},c)),r.a.createElement(_.a,{span:2,style:{display:"flex",justifyContent:"end"}},r.a.createElement(S.a,{onClick:function(){return u(!0)},type:"text"},r.a.createElement(ve.a,null)))))},Oe=w.a.Title,je=w.a.Text,_e=function(e){var t=e.label,a=e.value,n=e.sublabel;Object(g.a)(e,["label","value","sublabel"]);return r.a.createElement(ge.a,null,r.a.createElement(Oe,{level:5},t),r.a.createElement(Oe,{level:2},a),r.a.createElement(je,null,n))},Se=function(){return localStorage.getItem("token")},Le=a(70),Ie=Le.isProduction,Ne=Le.BASE_API_URL,Ce=Le.LOCAL_BASE_URL,Ae=Ie?Ne:Ce,Te=function(){var e=Object(V.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ee.a.get("".concat(Ae,"home/"),{headers:{token:"Bearer ".concat(Se())}}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Pe=a(779),Be=function(){var e=Object(n.useState)({}),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({data:[]}),o=Object(x.a)(l,2),s=o[0],i=o[1],u={data:[],xField:"sale_date",yField:"amount",label:{},point:{size:3,shape:"diamond",style:{fill:"white",stroke:"#5B8FF9",lineWidth:2}},tooltip:{showMarkers:!1},state:{active:{style:{shadowBlur:4,stroke:"#000",fill:"red"}}},interactions:[{type:"marker-active"}]},m=ue(Object(V.a)(G.a.mark((function e(){var t,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te();case 2:t=e.sent,a=t.data,c(a),u.data=a.last10DaysSale,console.log("DAATA",a),i(u);case 8:case"end":return e.stop()}}),e)}))));return Object(n.useEffect)((function(){m()}),[]),r.a.createElement(j.a,{gutter:[12,12]},r.a.createElement(_.a,{span:24},r.a.createElement(we,{title:"Home",description:"View your overall stats at a glance"})),r.a.createElement(_.a,{span:24},r.a.createElement(j.a,{gutter:[16,16]},r.a.createElement(_.a,{xs:24,md:12,lg:8},r.a.createElement(_e,{label:"Last Month",value:"\u20b9"+a.lastMonthSalesAmount,sublabel:"+20%"})),r.a.createElement(_.a,{xs:24,md:12,lg:8},r.a.createElement(_e,{label:"Last Week",value:"\u20b9"+a.lastWeekSalesAmount,sublabel:"-5%"})),r.a.createElement(_.a,{xs:24,md:12,lg:8},r.a.createElement(_e,{label:"Yesterday",value:"\u20b9"+a.lastDaySalesAmount,sublabel:"+14%"})),r.a.createElement(_.a,{span:24},r.a.createElement(ge.a,{title:"Last 10 days sales graph"},r.a.createElement(Pe.a,s))))))},Me=a(70),Fe=Me.isProduction,Ue=Me.BASE_API_URL,Re=Me.LOCAL_BASE_URL,qe=Fe?Ue:Re,De=function(){var e=Object(V.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ee.a.get("".concat(qe,"user/"),{headers:{token:"Bearer ".concat(Se())}}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ye=function(){var e=Object(V.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ee.a.post("".concat(qe,"user/"),t,{headers:{token:"Bearer ".concat(Se())}}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ze=a(484),We=a(775),Ge=ze.a.TextArea,Ve=function(){var e=We.a.useForm(),t=Object(x.a)(e,1)[0],a=function(e){var t=e.message;se.a.success({message:t})},c=ue(function(){var e=Object(V.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ye(t);case 2:a({message:"User data updated successfully."});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l=ue(Object(V.a)(G.a.mark((function e(){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,De();case 2:a=e.sent,n=a.data,t.setFieldsValue(n);case 5:case"end":return e.stop()}}),e)}))));return Object(n.useEffect)((function(){l()}),[]),r.a.createElement(j.a,{gutter:[16,16]},r.a.createElement(_.a,{span:24},r.a.createElement(we,{title:"Manage Profile",description:"Manage Your Profile from here. You can edit you company details which will be reflected in your billing invoice."})),r.a.createElement(_.a,{span:24},r.a.createElement(ge.a,null,r.a.createElement(We.a,{layout:"vertical",form:t,onFinish:c},r.a.createElement(j.a,{gutter:[16,16],style:{padding:"20px",marginLeft:"30px",marginRight:"30px"}},r.a.createElement(_.a,{span:24},r.a.createElement(We.a.Item,{label:"First Name",name:"first_name",rules:[{required:!0}]},r.a.createElement(ze.a,{style:{width:"100%"}}))),r.a.createElement(_.a,{span:24},r.a.createElement(We.a.Item,{label:"Last Name",name:"last_name",rules:[{required:!0}]},r.a.createElement(ze.a,{style:{width:"100%"}}))),r.a.createElement(_.a,{span:24},r.a.createElement(We.a.Item,{label:"Email",name:"email"},r.a.createElement(ze.a,{style:{width:"100%"},disabled:!0}))),r.a.createElement(_.a,{span:24},r.a.createElement(We.a.Item,{label:"GST Number",name:"gst_number",rules:[{required:!0}]},r.a.createElement(ze.a,{style:{width:"100%"}}))),r.a.createElement(_.a,{span:24},r.a.createElement(We.a.Item,{label:"Company Name",name:"company_name",rules:[{required:!0}]},r.a.createElement(ze.a,{style:{width:"100%"}}))),r.a.createElement(_.a,{span:24},r.a.createElement(We.a.Item,{label:"Company Address",name:"company_address",rules:[{required:!0}]},r.a.createElement(Ge,{style:{width:"100%"}}))),r.a.createElement(_.a,{span:24},r.a.createElement(We.a.Item,{label:"Footer Text",name:"footer_text",rules:[{required:!0}]},r.a.createElement(Ge,{style:{width:"100%"}}))),r.a.createElement(_.a,{xs:24,lg:12},r.a.createElement(S.a,{type:"primary",htmlType:"submit",style:{width:"100%"}},"Save")),r.a.createElement(_.a,{xs:24,lg:12},r.a.createElement(S.a,{type:"danger",style:{width:"100%"}},"Clear")))))))},Ke=a(323),He=a(771),Je=a(772),Qe=a(777),$e=a(70),Xe=$e.isProduction,Ze=$e.BASE_API_URL,et=$e.LOCAL_BASE_URL,tt=Xe?Ze:et,at=function(){var e=Object(V.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ee.a.post("".concat(tt,"billing/generate-bill"),t,{headers:{token:"Bearer ".concat(Se())}}).then((function(e){return e.data.file_path})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),nt=(a(336),a(782),a(497),a(790),a(208)),rt=a(491),ct=a(791),lt=a(495),ot=a(792),st=a(70),it=st.isProduction,ut=st.BASE_API_URL,mt=st.LOCAL_BASE_URL,dt=it?ut:mt,pt=function(){var e=Object(V.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ee.a.post("".concat(dt,"inventory/"),t,{headers:{token:"Bearer ".concat(Se())}}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ft=function(){var e=Object(V.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ee.a.post("".concat(dt,"inventory/list"),t,{headers:{token:"Bearer ".concat(Se())}}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Et=function(){var e=Object(V.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ee.a.get("".concat(dt,"inventory/").concat(t),{headers:{token:"Bearer ".concat(Se())}}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),bt=function(){var e=Object(V.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ee.a.delete("".concat(dt,"inventory/").concat(t),{headers:{token:"Bearer ".concat(Se())}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),yt=a(70),ht=yt.isProduction,gt=yt.BASE_API_URL,vt=yt.LOCAL_BASE_URL,xt=ht?gt:vt,kt=(w.a.Title,ze.a.Search,function(e){var t=Object(n.useState)([]),a=Object(x.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),s=Object(x.a)(o,2),i=s[0],u=s[1],d=Object(n.useState)(null),p=Object(x.a)(d,2),f=p[0],E=p[1],b=We.a.useForm(),y=Object(x.a)(b,1)[0];Object(n.useEffect)((function(){h()}),[]);var h=function(){var e=Object(V.a)(G.a.mark((function e(){var t,a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ft({});case 2:t=e.sent,a=t.data,n=a.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{value:e.name})})),l(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){var t=e.message;se.a.success({message:t})},k=ue(function(){var e=Object(V.a)(G.a.mark((function e(t){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,at(t);case 4:a=e.sent,u(!1),E(a),v({message:"Sale was successful. Please download Invoice."}),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(0),u(!1),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}());return r.a.createElement(j.a,{gutter:[16,16]},r.a.createElement(_.a,{span:24},r.a.createElement(we,{title:"Generate Bill",description:"Enter customer and product details to generate make your sale and generate invoice"})),r.a.createElement(_.a,{span:24},r.a.createElement(ge.a,null,r.a.createElement(Ke.a,{spinning:i},r.a.createElement(We.a,{form:y,onFinish:k,initialValues:{products:[void 0]}},r.a.createElement(j.a,{gutter:[16,16]},r.a.createElement(_.a,{span:24},r.a.createElement(He.a,{orientation:"left"}," ",r.a.createElement(rt.a,null)," Customer Details ")),r.a.createElement(_.a,{sm:24,lg:12},r.a.createElement(We.a.Item,{name:"customer_name",rules:[{required:!0}]},r.a.createElement(ze.a,{placeholder:"Customer Name"}))),r.a.createElement(_.a,{sm:24,lg:12},r.a.createElement(We.a.Item,{name:"customer_number",rules:[{required:!0}]},r.a.createElement(ze.a,{placeholder:"Customer Number"}))),r.a.createElement(_.a,{span:24},r.a.createElement(He.a,{orientation:"left"}," ",r.a.createElement(ct.a,null)," Product Details "))),r.a.createElement(We.a.List,{name:"products"},(function(e,t){var a=t.add;t.remove;return r.a.createElement(r.a.Fragment,null,e.map((function(e){var t=e.key,a=e.name,n=e.fieldKey,l=Object(g.a)(e,["key","name","fieldKey"]);return r.a.createElement(j.a,{gutter:[16,16]},r.a.createElement(_.a,{span:16},r.a.createElement(We.a.Item,Object.assign({},l,{name:[a,"name"],fieldKey:[n,"name"],rules:[{required:!0}]}),r.a.createElement(Je.a,{placeholder:"Product Name",options:c,style:{width:"100%"},onSelect:function(e,a){return function(e,t){var a=y.getFieldValue("products");a[t].selling_price=e.selling_price,a[t].id=e._id,y.setFieldsValue({products:a})}(a,t)},filterOption:function(e,t){return-1!==t.value.toUpperCase().indexOf(e.toUpperCase())}}))),r.a.createElement(_.a,{span:4},r.a.createElement(We.a.Item,Object.assign({},l,{name:[a,"selling_price"],fieldKey:[n,"selling_price"],rules:[{required:!0}]}),r.a.createElement(Qe.a,{placeholder:"Price",style:{width:"100%"},disabled:!0}))),r.a.createElement(_.a,{span:4},r.a.createElement(We.a.Item,Object.assign({},l,{name:[a,"quantity"],fieldKey:[n,"quantity"],rules:[{required:!0}]}),r.a.createElement(Qe.a,{placeholder:"Quantity",style:{width:"100%"},min:1}))))})),r.a.createElement(S.a,{type:"dashed",onClick:function(){return a()},block:!0,icon:r.a.createElement(lt.a,null)},"Add More Products"))})),r.a.createElement(j.a,{gutter:[16,16],style:{marginTop:"30px"}},r.a.createElement(_.a,{xs:24,lg:12},r.a.createElement(We.a.Item,null,r.a.createElement(S.a,{type:"primary",htmlType:"submit",style:{width:"100%"}},"Make Sale"))),r.a.createElement(_.a,{xs:24,lg:12},r.a.createElement(We.a.Item,null,r.a.createElement(S.a,{type:"danger",style:{width:"100%"}},"Clear"))),f&&r.a.createElement(_.a,{span:24},r.a.createElement("a",{target:"_blank",style:{paddingBottom:"10px"},href:"".concat(xt,"billing/download/?file_path=").concat(f)},r.a.createElement(S.a,{type:"dashed",block:!0,icon:r.a.createElement(ot.a,null)},"Download Invoice")))))))))}),wt=a(773),Ot=a(70),jt=Ot.isProduction,_t=Ot.BASE_API_URL,St=Ot.LOCAL_BASE_URL,Lt=jt?_t:St,It=function(){var e=Object(V.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ee.a.post("".concat(Lt,"sales/"),t,{headers:{token:"Bearer ".concat(Se())}}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Nt=a(92),Ct=a.n(Nt),At=a(774),Tt=function(e){var t=e.loadData,a=We.a.useForm(),n=Object(x.a)(a,1)[0];return r.a.createElement(ge.a,null,r.a.createElement(We.a,{form:n,onFinish:function(e){t(e)}},r.a.createElement(j.a,{gutter:[16,16]},r.a.createElement(_.a,{xs:24,lg:12},r.a.createElement(We.a.Item,{name:"customer_name"},r.a.createElement(ze.a,{placeholder:"Customer Name"}))),r.a.createElement(_.a,{xs:24,lg:12},r.a.createElement(We.a.Item,{name:"contact_number"},r.a.createElement(ze.a,{placeholder:"Contact Number"})))),r.a.createElement(j.a,{gutter:[16,16]},r.a.createElement(_.a,{xs:24,lg:12},r.a.createElement(We.a.Item,{name:"order_number"},r.a.createElement(ze.a,{placeholder:"Order Number"}))),r.a.createElement(_.a,{xs:24,lg:12},r.a.createElement(We.a.Item,{name:"sale_date"},r.a.createElement(At.a,{placeholder:"Sale Date",style:{width:"100%"}})))),r.a.createElement(j.a,{gutter:[16,16]},r.a.createElement(_.a,{xs:24,lg:12},r.a.createElement(We.a.Item,null,r.a.createElement(S.a,{type:"primary",style:{width:"100%"},htmlType:"submit"},r.a.createElement(nt.a,null),"Search"))),r.a.createElement(_.a,{xs:24,lg:12},r.a.createElement(S.a,{type:"danger",style:{width:"100%"},onClick:function(){n.resetFields()}},"Clear")))))},Pt=a(70),Bt=Pt.isProduction,Mt=Pt.BASE_API_URL,Ft=Pt.LOCAL_BASE_URL,Ut=Bt?Mt:Ft,Rt=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(x.a)(l,2),s=(o[0],o[1],Object(n.useState)([])),i=Object(x.a)(s,2),u=(i[0],i[1],Object(n.useState)(!1)),d=Object(x.a)(u,2),p=d[0],f=d[1],E=[{title:"Order No.",dataIndex:"order_number",key:"order_number"},{title:"Customer Name",dataIndex:"customer_name",key:"name"},{title:"Contact Number",dataIndex:"contact_number",key:"contact_number"},{title:"Sale Amount",dataIndex:"amount",key:"amount"},{title:"Sale Date",dataIndex:"createdAt",key:"createdAt"},{title:"Action",key:"action",render:function(e,t){return r.a.createElement("div",null,r.a.createElement("a",{target:"_blank",href:"".concat(Ut,"billing/download/?file_path=").concat(t.bill_path)},r.a.createElement(S.a,{type:"dashed",block:!0,icon:r.a.createElement(ot.a,null)},"Invoice")))}}],b=ue(function(){var e=Object(V.a)(G.a.mark((function e(t){var a,n,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,It(t);case 3:a=e.sent,n=a.data,r=n.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{createdAt:Ct()(e.createdAt).format("MMMM Do YYYY HH:MM"),amount:"\u20b9"+e.amount})})),c(r),f(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(n.useEffect)((function(){b({})}),[]),r.a.createElement(j.a,{gutter:[16,16]},r.a.createElement(_.a,{span:24},r.a.createElement(we,{title:"Sales Data",description:"Track your sales data from here. Search for any of your previous sales record using customer name, customer number, order number or sales date. You can also download the sale invoice"})),r.a.createElement(_.a,{span:24},r.a.createElement(Tt,{loadData:b})),r.a.createElement(_.a,{span:24},r.a.createElement(ge.a,null,r.a.createElement(wt.a,{dataSource:a,columns:E,loading:p}))))},qt=function(e){var t=e.type,a=e.title,n=e.imageLink,c=e.buttonText,l=Object(h.g)();return r.a.createElement("div",{className:"card",style:{maxWidth:"25rem",borderRadius:"5%"}},r.a.createElement("div",{className:"card-body",style:{textAlign:"center"}},r.a.createElement("h3",{className:"card-title font-weight-bold"},a),r.a.createElement("img",{src:n,style:{marginBottom:"20px"}}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){"add"===t?l.push("/inventory/add"):"list"===t&&l.push("/inventory/list")}},r.a.createElement(lt.a,null),"   ",c)))},Dt=function(e){e.history;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(qt,{type:d.AddManuallyCard.type,title:d.AddManuallyCard.title,imageLink:d.AddManuallyCard.imageLink,buttonText:d.AddManuallyCard.buttonText}),r.a.createElement(qt,{type:d.StockListCard.type,title:d.StockListCard.title,imageLink:d.StockListCard.imageLink,buttonText:d.StockListCard.buttonText}))},Yt=function(e){var t=Object(n.useState)(!1),a=Object(x.a)(t,2),c=a[0],l=a[1],o=(ze.a.TextArea,We.a.useForm()),s=Object(x.a)(o,1)[0],i=function(e){var t=e.message;se.a.success({message:t})},u=ue(function(){var t=Object(V.a)(G.a.mark((function t(a){var n;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.match.params.id,t.prev=1,l(!0),n&&(a.id=n),t.next=6,pt(a);case 6:l(!1),t.next=13;break;case 9:throw t.prev=9,t.t0=t.catch(1),l(!1),t.t0;case 13:"",i({message:n?"Product updated Successfully":"Product added Successfully"});case 16:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()),m=function(){var e=Object(V.a)(G.a.mark((function e(t){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Et(t);case 2:a=e.sent,n=a.data,console.log("product data .>>>>>",n),s.setFieldsValue({name:n.name,quantity_in_stock:n.stock,low_stock_warning:n.low_stock_warning,selling_price:n.selling_price,party_name:n.party_name,mfg_date:Ct()(n.mfg_date),exp_date:Ct()(n.exp_date)});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var t=e.match.params.id;t&&m(t)}),[]),r.a.createElement(ge.a,null,r.a.createElement(Ke.a,{spinning:c},r.a.createElement(j.a,{style:{display:"flex",justifyContent:"end"}},r.a.createElement(S.a,{onClick:function(){return e.history.push("/inventory/list")}},"See Product List")),r.a.createElement(We.a,{form:s,onFinish:u,labelCol:{sm:24,lg:8},wrapperCol:{sm:24,lg:9}},r.a.createElement(We.a.Item,{label:"Name",name:"name",style:{marginTop:"30px"},rules:[{required:!0,type:"string"}]},r.a.createElement(ze.a,null)),r.a.createElement(We.a.Item,{label:"Quantity In Stock",name:"quantity_in_stock",rules:[{required:!0,type:"number"}]},r.a.createElement(Qe.a,{style:{width:"100%"},min:0})),r.a.createElement(We.a.Item,{label:"Low Stock Warning",name:"low_stock_warning",rules:[{required:!0,type:"number"}]},r.a.createElement(Qe.a,{style:{width:"100%"},min:0})),r.a.createElement(We.a.Item,{label:"Selling Price (1 item)",name:"selling_price",rules:[{required:!0,type:"number"}]},r.a.createElement(Qe.a,{style:{width:"100%"},min:0})),r.a.createElement(We.a.Item,{label:"Purchase Party Name",name:"party_name",rules:[{required:!0,type:"string"}]},r.a.createElement(ze.a,{style:{width:"100%"}})),r.a.createElement(We.a.Item,{label:"Manufacturing Date",name:"mfg_date",rules:[{required:!0}]},r.a.createElement(At.a,{style:{width:"100%"}})),r.a.createElement(We.a.Item,{label:"Expiry Date",name:"exp_date",rules:[{required:!0}]},r.a.createElement(At.a,{style:{width:"100%"}})),r.a.createElement(We.a.Item,{wrapperCol:{span:24}},r.a.createElement(j.a,null,r.a.createElement(_.a,{span:6}),r.a.createElement(_.a,{span:5},r.a.createElement(S.a,{type:"primary",htmlType:"submit",style:{width:"100%"}},e.match.params.id?"Save Product":"Create Product")),r.a.createElement(_.a,{span:1}),r.a.createElement(_.a,{span:5},r.a.createElement(S.a,{type:"danger",onClick:function(){s.resetFields()},style:{width:"100%"}},"Clear")),r.a.createElement(_.a,{span:6}))))))},zt=a(488),Wt=a(780),Gt=a(489),Vt=a(793),Kt=function(e){var t=e.loadData,a=We.a.useForm(),n=Object(x.a)(a,1)[0];return r.a.createElement(ge.a,null,r.a.createElement(We.a,{form:n,onFinish:function(e){t(e)}},r.a.createElement(j.a,{gutter:[16,16]},r.a.createElement(_.a,{xs:24,lg:12},r.a.createElement(We.a.Item,{name:"name"},r.a.createElement(ze.a,{placeholder:"Name"}))),r.a.createElement(_.a,{xs:24,lg:12},r.a.createElement(We.a.Item,{name:"party_name"},r.a.createElement(ze.a,{placeholder:"Party Name"})))),r.a.createElement(j.a,{gutter:[16,16]},r.a.createElement(_.a,{xs:24,lg:12},r.a.createElement(We.a.Item,null,r.a.createElement(S.a,{type:"primary",style:{width:"100%"},htmlType:"submit"},r.a.createElement(nt.a,null),"Search"))),r.a.createElement(_.a,{xs:24,lg:12},r.a.createElement(We.a.Item,null,r.a.createElement(L.a,{to:"/inventory/add"},r.a.createElement(S.a,{type:"outlined",style:{width:"100%"}},r.a.createElement(lt.a,null),"Add NewProduct")))))))},Ht=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(x.a)(l,2),s=o[0],i=o[1],u=[{title:"Name",dataIndex:"name",key:"name"},{title:"Stock",dataIndex:"stock",key:"stock"},{title:"Selling Price",dataIndex:"selling_price",key:"selling_price"},{title:"Party Name",dataIndex:"party_name",key:"party_name"},{title:"Mfg Date",dataIndex:"mfg_date",key:"mfg_date"},{title:"Exp Date",dataIndex:"exp_date",key:"exp_date"},{title:"Issue",key:"issue",render:function(e,t){return 0==t.stock?r.a.createElement(zt.a,{color:"volcano"},"Out Of Stock"):t.low_stock_warning>t.stock?r.a.createElement(zt.a,{color:"volcano"},"Low Stock"):r.a.createElement("div",null)}},{title:"Edit",key:"edit",render:function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{to:"/inventory/edit/".concat(t._id)},r.a.createElement(Gt.a,null)),r.a.createElement(Wt.a,{title:"Are you sure you want to delete this product?",onConfirm:function(){return d(t._id)},okText:"Yes",cancelText:"No"},r.a.createElement(Vt.a,{style:{color:"red",padding:"4px"}})))}}],d=function(){var e=Object(V.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,bt(t);case 2:p({});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=ue(function(){var e=Object(V.a)(G.a.mark((function e(t){var a,n,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,ft(t);case 3:a=e.sent,n=a.data,r=n.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{mfg_date:Ct()(e.mfg_date).format("MMMM Do YYYY"),exp_date:Ct()(e.exp_date).format("MMMM Do YYYY")})})),c(r),i(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(n.useEffect)((function(){p({})}),[]),r.a.createElement(j.a,{gutter:[16,16]},r.a.createElement(_.a,{span:24},r.a.createElement(we,{title:"Inventory List",description:"View edit and delete your stock from here. You can also search for using filter to search for specific item."})),r.a.createElement(_.a,{span:24},r.a.createElement(Kt,{loadData:p})),r.a.createElement(_.a,{span:24},r.a.createElement(ge.a,null,r.a.createElement(wt.a,{dataSource:a,columns:u,loading:s}))))},Jt=a(104),Qt=Object(Jt.a)(),$t=function(){return console.log(">>>>history>>>>",Qt),r.a.createElement(h.c,{history:Qt},r.a.createElement(z,null,r.a.createElement("div",{className:"container mt-3"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/login",component:de}),r.a.createElement(h.b,{exact:!0,path:"/register",component:he}),r.a.createElement(v,{exact:!0,path:"/",component:Be}),r.a.createElement(v,{exact:!0,path:"/profile",component:Ve}),r.a.createElement(v,{exact:!0,path:"/inventory",component:Dt}),r.a.createElement(v,{exact:!0,path:"/inventory/add",component:Yt}),r.a.createElement(v,{exact:!0,path:"/inventory/edit/:id",component:Yt}),r.a.createElement(v,{exact:!0,path:"/inventory/list",component:Ht}),r.a.createElement(v,{exact:!0,path:"/bill",component:kt}),r.a.createElement(v,{exact:!0,path:"/sales",component:Rt})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,{store:y},r.a.createElement($t,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[511,1,2]]]);
//# sourceMappingURL=main.fe3fbbc7.chunk.js.map