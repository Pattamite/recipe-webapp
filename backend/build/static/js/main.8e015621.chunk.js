(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),s=n.n(c),i=n(10),u=n(8),j=(n(73),n(5)),o=n.n(j),l=n(7),p=n(9),d=n(11);n(75).config();var b={loggedRecipeAppUserKey:"loggedRecipeAppUser"},h="USER_SET_USER",O="USER_SET_TOKEN",x={user:null,token:null};function m(e,t){return function(){var n=Object(l.a)(o.a.mark((function n(a){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e?window.localStorage.setItem(b.loggedRecipeAppUserKey,JSON.stringify(e)):window.localStorage.removeItem(b.loggedRecipeAppUserKey),a({type:h,data:{user:e}}),a({type:O,data:{token:t}});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(d.a)(Object(d.a)({},e),{},{user:t.data.user});case O:return Object(d.a)(Object(d.a)({},e),{},{token:t.data.token});default:return e}},f=n(108),g="NOTIFICATION_SET_TYPE",y="NOTIFICATION_MESSAGE",w="NOTIFICATION_HIDE",k="danger",C="success",N="TYPE_HIDE",S=null,L={type:N,message:""};function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4;return function(){var a=Object(l.a)(o.a.mark((function a(r){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return clearTimeout(S),r({type:g,data:{type:t}}),r({type:y,data:{message:e}}),a.next=5,setTimeout((function(){r({type:g,data:{type:N}})}),n);case 5:S=a.sent;case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(d.a)(Object(d.a)({},e),{},{type:t.data.type});case y:return Object(d.a)(Object(d.a)({},e),{},{message:t.data.message});case w:return Object(d.a)(Object(d.a)({},e),{},{message:"",type:N});default:return e}},P=n(1);var E=function(e){var t=Object(u.c)((function(e){return e.notification}));return Object(P.jsx)("div",{children:t.type===N?Object(P.jsx)(P.Fragment,{}):Object(P.jsx)(f.a,{variant:t.type,children:t.message})})},T=n(107),D=n(109);var F=function(e){var t=Object(u.b)(),n=Object(u.c)((function(e){return e.user}));function a(){return(a=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(m(null,null)),I("Logout success. Goodbye.",C),e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),I("Logout failed. Please contact developer.",k),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var r={padding:5};return Object(P.jsxs)(T.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(P.jsx)(T.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(P.jsx)(T.a.Collapse,{id:"responsive-navbar-nav",children:Object(P.jsxs)(D.a,{className:"mr-auto",children:[Object(P.jsx)(D.a.Link,{href:"#",as:"span",children:Object(P.jsx)(i.b,{style:r,to:"/",children:"Home"})}),Object(P.jsx)(D.a.Link,{href:"#",as:"span",children:Object(P.jsx)(i.b,{style:r,to:"/lastest-recipe/1",children:"Lastest recipes"})}),n.user?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(D.a.Link,{href:"#",as:"span",children:Object(P.jsx)(i.b,{style:r,to:"/new-recipe",children:"New recipe"})}),Object(P.jsx)(D.a.Link,{href:"#",as:"span",children:Object(P.jsx)(i.b,{style:r,to:"/",onClick:function(){return a.apply(this,arguments)},children:"Logout"})})]}):Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(D.a.Link,{href:"#",as:"span",children:Object(P.jsx)(i.b,{style:r,to:"/login",children:"Login"})})})]})})]})},A=n(106),G=n(102),U=n(12);var _=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(a.useState)(t),r=Object(U.a)(n,2),c=r[0],s=r[1],i=function(e){s(e.target.value)};return{type:e,value:c,onChange:i,setValue:s}},M=n(19),V=n.n(M),B="/api/login";function W(){return(W=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.post(B,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H={login:function(e){return W.apply(this,arguments)}},K=H;var q=function(e){var t=Object(p.g)(),n=Object(u.b)(),a=_("text"),r=_("password");function c(){return(c=Object(l.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c={username:a.value,password:r.value},e.next=4,s(c);case 4:e.sent&&t.push("/");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return i.apply(this,arguments)}function i(){return(i=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.login(t);case 3:return a=e.sent,n(m(a,a.token)),n(I("Login success. Welcome, ".concat(a.displayName,"."),C)),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),n(I("Login failed. Please check your username and password",k)),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:"Login"}),Object(P.jsxs)(A.a,{onSubmit:function(e){return c.apply(this,arguments)},children:[Object(P.jsxs)(A.a.Group,{children:[Object(P.jsx)(A.a.Label,{children:"Username"}),Object(P.jsx)(A.a.Control,{type:a.type,name:"username",value:a.value,onChange:a.onChange}),Object(P.jsx)(A.a.Label,{children:"Password"}),Object(P.jsx)(A.a.Control,{type:r.type,name:"password",value:r.value,onChange:r.onChange})]}),Object(P.jsx)(G.a,{variant:"primary",type:"submit",style:{marginTop:5},children:"Login"})]})]})},J="/api/users";function z(){return(z=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.post(J,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q={register:function(e){return z.apply(this,arguments)}},Y=Q;var X=function(e){var t=Object(p.g)(),n=Object(u.b)(),a=_("text"),r=_("text"),c=_("password");function s(){return(s=Object(l.a)(o.a.mark((function e(n){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),s={username:a.value,displayName:r.value,password:c.value},e.next=4,i(s);case 4:e.sent&&(a.setValue(""),r.setValue(""),c.setValue(""),t.push("/login"));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){return j.apply(this,arguments)}function j(){return(j=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.register(t);case 3:return n(I("Register success. Please login to continue.",C)),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),n(I("Register failed. Username might already existed.",k)),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:"Register"}),Object(P.jsxs)(A.a,{onSubmit:function(e){return s.apply(this,arguments)},children:[Object(P.jsxs)(A.a.Group,{children:[Object(P.jsx)(A.a.Label,{children:"Username"}),Object(P.jsx)(A.a.Control,{type:a.type,name:"username",value:a.value,onChange:a.onChange}),Object(P.jsx)(A.a.Label,{children:"Display name"}),Object(P.jsx)(A.a.Control,{type:r.type,name:"displayName",value:r.value,onChange:r.onChange}),Object(P.jsx)(A.a.Label,{children:"Password"}),Object(P.jsx)(A.a.Control,{type:c.type,name:"password",value:c.value,onChange:c.onChange})]}),Object(P.jsx)(G.a,{variant:"primary",type:"submit",children:"Register"})]})]})},Z=n(34),$=n(103),ee=n(62);var te={tryParseInt:function(e,t){var n=parseInt(e);return isNaN(n)&&(n=t),n},tryParseFloat:function(e,t){var n=parseFloat(e);return isNaN(n)&&(n=t),n},getDifficultyText:function(e){switch(e){case 1:return"Very easy";case 2:return"Easy";case 3:return"Medium";case 4:return"Hard";case 5:return"Very hard";default:return"Not specified"}}},ne="ingredientFieldName",ae="ingredientFieldQuantity",re="ingredientFieldUnit",ce="stepFieldDescription",se="stepFieldWarning",ie="stepFieldTip",ue={name:"",quantity:0,unit:"",imagePath:"/"},je={description:"",warning:"",tip:"",imagePath:"/"};var oe=function(e){var t=e.handleSubmit,n=e.recipe,r=_("text",n?n.name:""),c=_("text",n?n.shortDescription:""),s=_("text",n?n.description:""),i=_("text",n?n.difficulty.toString():"3"),u=_("number",n?n.estimatedMinutes:0),j=Object(a.useState)(n?n.ingredients:[Object(d.a)({},ue)]),p=Object(U.a)(j,2),b=p[0],h=p[1],O=Object(a.useState)(n?n.steps:[Object(d.a)({},je)]),x=Object(U.a)(O,2),m=x[0],v=x[1];function f(){return f=Object(l.a)(o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={name:r.value,imagePath:"/",shortDescription:c.value,description:s.value,difficulty:te.tryParseInt(i.value,1),estimatedMinutes:te.tryParseInt(u.value,0),ingredients:b,steps:m},e.next=4,t(a);case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function g(e,t,n){var a=Object(Z.a)(b),r=n.target.value;switch(t){case ne:a[e].name=r;break;case ae:a[e].quantity=te.tryParseFloat(r,1);break;case re:a[e].unit=r;break;case"ingredientFieldImagePath":a[e].imagePath=r}h(a)}function y(e,t){var n=Object(Z.a)(b);n.splice(e,1),0===n.length&&n.push(Object(d.a)({},ue)),h(n)}function w(e,t,n){var a=Object(Z.a)(m),r=n.target.value;switch(t){case ce:a[e].description=r;break;case se:a[e].warning=r;break;case ie:a[e].tip=r;break;case"stepFieldImagePath":a[e].imagePath=r}v(a)}function k(e,t){var n=Object(Z.a)(m);n.splice(e,1),0===n.length&&n.push(Object(d.a)({},je)),v(n)}return Object(P.jsx)("div",{children:Object(P.jsxs)(A.a,{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(P.jsxs)(A.a.Group,{as:$.a,className:"mb-3",children:[Object(P.jsx)(A.a.Label,{column:!0,sm:2,children:"Recipe name"}),Object(P.jsx)(ee.a,{sm:10,children:Object(P.jsx)(A.a.Control,{type:r.type,name:"name",value:r.value,onChange:r.onChange})})]}),Object(P.jsxs)(A.a.Group,{as:$.a,className:"mb-3",children:[Object(P.jsx)(A.a.Label,{column:!0,sm:2,children:"Short description"}),Object(P.jsx)(ee.a,{sm:10,children:Object(P.jsx)(A.a.Control,{type:c.type,name:"shortDescription",value:c.value,onChange:c.onChange})})]}),Object(P.jsxs)(A.a.Group,{as:$.a,className:"mb-3",children:[Object(P.jsx)(A.a.Label,{column:!0,sm:2,children:"Description"}),Object(P.jsx)(ee.a,{sm:10,children:Object(P.jsx)(A.a.Control,{as:"textarea",name:"description",value:s.value,onChange:s.onChange})})]}),Object(P.jsxs)(A.a.Group,{as:$.a,className:"mb-3",children:[Object(P.jsx)(A.a.Label,{column:!0,sm:2,children:"Difficulty"}),Object(P.jsx)(ee.a,{sm:10,children:Object(P.jsxs)(A.a.Control,{as:"select",name:"difficulty",value:i.value,onChange:i.onChange,children:[Object(P.jsx)("option",{value:"1",children:"Very easy"}),Object(P.jsx)("option",{value:"2",children:"Easy"}),Object(P.jsx)("option",{value:"3",children:"Normal"}),Object(P.jsx)("option",{value:"4",children:"Hard"}),Object(P.jsx)("option",{value:"5",children:"Very hard"})]})})]}),Object(P.jsxs)(A.a.Group,{as:$.a,className:"mb-3",children:[Object(P.jsx)(A.a.Label,{column:!0,sm:2,children:"Estimated time (minutes)"}),Object(P.jsx)(ee.a,{sm:10,children:Object(P.jsx)(A.a.Control,{type:u.type,name:"estimatedMinutes",value:u.value,onChange:u.onChange,min:"0"})})]}),b.map((function(e,t){return Object(P.jsxs)(A.a.Group,{as:$.a,className:"mb-3",children:[Object(P.jsx)(A.a.Label,{column:!0,sm:2,children:0===t?"Ingredients":""}),Object(P.jsx)(ee.a,{sm:4,children:Object(P.jsx)(A.a.Control,{type:"text",name:"ingredientName".concat(t),value:e.name,placeholder:"Name",onChange:g.bind(null,t,ne)})}),Object(P.jsx)(ee.a,{sm:2,children:Object(P.jsx)(A.a.Control,{type:"number",name:"ingredientQuantity".concat(t),value:e.quantity,min:"0",placeholder:"Quantity",onChange:g.bind(null,t,ae)})}),Object(P.jsx)(ee.a,{sm:2,children:Object(P.jsx)(A.a.Control,{type:"text",name:"ingredientUnit".concat(t),value:e.unit,placeholder:"Unit",onChange:g.bind(null,t,re)})}),Object(P.jsx)(ee.a,{sm:2,children:Object(P.jsx)("div",{className:"d-grid gap-2",children:Object(P.jsx)(G.a,{variant:"danger",onClick:y.bind(null,t),children:"Remove"})})})]},"ingredient".concat(t))})),Object(P.jsxs)(A.a.Group,{as:$.a,className:"mb-3",children:[Object(P.jsx)(A.a.Label,{column:!0,sm:2}),Object(P.jsx)(ee.a,{sm:10,children:Object(P.jsx)("div",{className:"d-grid gap-2",children:Object(P.jsx)(G.a,{variant:"success",onClick:function(e){var t=b.concat(Object(d.a)({},ue));h(t)},children:"Add new ingredient."})})})]}),m.map((function(e,t){return Object(P.jsxs)("div",{children:[Object(P.jsxs)(A.a.Group,{as:$.a,className:"mb-3",children:[Object(P.jsx)(A.a.Label,{column:!0,sm:2,children:0===t?"Steps":""}),Object(P.jsx)(A.a.Label,{column:!0,sm:2,children:"Step ".concat(t+1)}),Object(P.jsx)(ee.a,{sm:6,children:Object(P.jsx)(A.a.Control,{as:"textarea",name:"stepDescription".concat(t),value:e.description,onChange:w.bind(null,t,ce)})})]}),Object(P.jsxs)(A.a.Group,{as:$.a,className:"mb-3",children:[Object(P.jsx)(A.a.Label,{column:!0,sm:2}),Object(P.jsx)(A.a.Label,{column:!0,sm:2,children:"Tip"}),Object(P.jsx)(ee.a,{sm:6,children:Object(P.jsx)(A.a.Control,{as:"textarea",name:"stepTip".concat(t),value:e.tip,onChange:w.bind(null,t,ie)})})]}),Object(P.jsxs)(A.a.Group,{as:$.a,className:"mb-3",children:[Object(P.jsx)(A.a.Label,{column:!0,sm:2}),Object(P.jsx)(A.a.Label,{column:!0,sm:2,children:"Warning"}),Object(P.jsx)(ee.a,{sm:6,children:Object(P.jsx)(A.a.Control,{as:"textarea",name:"stepWarning".concat(t),value:e.warning,onChange:w.bind(null,t,se)})}),Object(P.jsx)(ee.a,{sm:2,children:Object(P.jsx)("div",{className:"d-grid gap-2",children:Object(P.jsx)(G.a,{variant:"danger",onClick:k.bind(null,t),children:"Remove"})})})]})]},"step".concat(t))})),Object(P.jsxs)(A.a.Group,{as:$.a,className:"mb-3",children:[Object(P.jsx)(A.a.Label,{column:!0,sm:2}),Object(P.jsx)(ee.a,{sm:10,children:Object(P.jsx)("div",{className:"d-grid gap-2",children:Object(P.jsx)(G.a,{variant:"success",onClick:function(e){var t=m.concat(Object(d.a)({},je));v(t)},children:"Add new step."})})})]}),Object(P.jsx)(G.a,{variant:"primary",type:"submit",children:"Save"})]})})},le="/api/recipes";function pe(){return pe=Object(l.a)(o.a.mark((function e(){var t,n,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,V.a.get("".concat(le,"?lastest=true&page=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)}))),pe.apply(this,arguments)}function de(){return de=Object(l.a)(o.a.mark((function e(){var t,n,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,V.a.get("".concat(le,"?popular=true&page=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)}))),de.apply(this,arguments)}function be(){return(be=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("".concat(le,"/id/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(){return(he=Object(l.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:me(n)}},e.next=3,V.a.post(le,t,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(){return(Oe=Object(l.a)(o.a.mark((function e(t,n,a){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:me(a)}},e.next=3,V.a.put("".concat(le,"/id/").concat(t),n,r);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xe(){return(xe=Object(l.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:me(n)}},e.next=3,V.a.delete("".concat(le,"/id/").concat(t),a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e){return"bearer ".concat(e)}var ve={getLastestRecipePagination:function(){return pe.apply(this,arguments)},getPopularRecipePagination:function(){return de.apply(this,arguments)},getRecipeById:function(e){return be.apply(this,arguments)},create:function(e,t){return he.apply(this,arguments)},update:function(e,t,n){return Oe.apply(this,arguments)},remove:function(e,t){return xe.apply(this,arguments)}},fe=ve;var ge=function(e){var t=Object(p.g)(),n=Object(u.b)(),a=Object(u.c)((function(e){return e.user}));function r(){return(r=Object(l.a)(o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe.create(r,a.token);case 3:return n(I('Recipe "'.concat(r.name,'" created!'),C)),t.push("/"),e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(0),n(I('Failed to create recipe "'.concat(r.name,'". ').concat(e.t0.toString()),k)),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:"New Recipe"}),Object(P.jsx)(oe,{handleSubmit:function(e){return r.apply(this,arguments)},recipe:!1})]})};var ye=function(e){var t=Object(p.g)(),n=Object(u.b)(),r=Object(u.c)((function(e){return e.user})),c=Object(p.h)().id,s=Object(a.useState)(null),i=Object(U.a)(s,2),j=i[0],d=i[1],b=Object(a.useState)(!1),h=Object(U.a)(b,2),O=h[0],x=h[1],m=Object(a.useState)(!0),v=Object(U.a)(m,2),f=v[0],g=v[1];function y(){return y=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe.update(c,a,r.token);case 3:return n(I('Recipe "'.concat(a.name,'" updated!'),C)),t.push("/"),e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(0),n(I('Failed to updated recipe "'.concat(a.name,'". ').concat(e.t0.toString()),k)),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),y.apply(this,arguments)}return Object(a.useEffect)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,fe.getRecipeById(c);case 3:t=e.sent,d(t),x(!(!r.user||r.user.id!==t.user.id)),g(!1);case 7:case"end":return e.stop()}}),e)}))),[c,r]),Object(P.jsx)("div",{children:f?Object(P.jsx)("p",{children:"Loading..."}):O?Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:"Edit Recipe"}),Object(P.jsx)(oe,{handleSubmit:function(e){return y.apply(this,arguments)},recipe:j})]}):Object(P.jsx)("p",{children:"Error: Permission Denied"})})},we=n(110),ke=n(104),Ce=n(63);function Ne(e){var t=e.recipe;return Object(P.jsxs)(we.a,{children:[Object(P.jsxs)(we.a.Body,{children:[Object(P.jsx)(i.b,{to:"/recipe/".concat(t.id),children:Object(P.jsx)(we.a.Title,{children:t.name})}),Object(P.jsxs)(we.a.Subtitle,{className:"mb-2 text-muted",children:["By: ",t.user.displayName]}),Object(P.jsx)(we.a.Text,{children:t.shortDescription})]}),Object(P.jsxs)(ke.a,{className:"list-group-flush",children:[Object(P.jsxs)(Ce.a,{children:["Difficulty: ",te.getDifficultyText(t.difficulty)]}),Object(P.jsxs)(Ce.a,{children:["Estimated time: ",t.estimatedMinutes," minutes"]})]})]})}var Se=function(e){var t=e.recipes;return Object(P.jsx)($.a,{xs:1,md:2,lg:3,className:"g-4",children:t.map((function(e,t){return Object(P.jsx)(ee.a,{children:Object(P.jsx)(Ne,{recipe:e})},"recipeCard".concat(t))}))})};var Le=function(e){var t=Object(p.h)().page_number?Object(p.h)().page_number:1,n=Object(a.useState)(null),r=Object(U.a)(n,2),c=r[0],s=r[1],u=Object(a.useState)(null),j=Object(U.a)(u,2),d=j[0],b=j[1],h=Object(a.useState)([]),O=Object(U.a)(h,2),x=O[0],m=O[1],v=Object(a.useState)(!0),f=Object(U.a)(v,2),g=f[0],y=f[1];return Object(a.useEffect)(Object(l.a)(o.a.mark((function e(){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,fe.getLastestRecipePagination(t);case 3:n=e.sent,a=n.pagination,r=n.results,s(a.pagePrev),b(a.pageNext),m(r),y(!1);case 10:case"end":return e.stop()}}),e)}))),[t]),Object(P.jsxs)("div",{children:[Object(P.jsx)("h1",{children:"Lastest Recipes"}),g?Object(P.jsx)("p",{children:"Loading..."}):Object(P.jsxs)("div",{children:[Object(P.jsx)(Se,{recipes:x}),Object(P.jsxs)($.a,{children:[Object(P.jsx)(ee.a,{sm:2,children:c?Object(P.jsx)("div",{className:"d-grid gap-2",children:Object(P.jsx)(i.b,{to:"/lastest-recipe/".concat(c),children:Object(P.jsx)(G.a,{variant:"success",onClick:handleIngredientConcat,children:"Previous page"})})}):""}),Object(P.jsx)(ee.a,{sm:8}),Object(P.jsx)(ee.a,{sm:2,children:d?Object(P.jsx)("div",{className:"d-grid gap-2",children:Object(P.jsx)(i.b,{to:"/lastest-recipe/".concat(d),children:Object(P.jsx)(G.a,{variant:"success",onClick:handleIngredientConcat,children:"Next page"})})}):""})]})]})]})},Ie=n(105);var Re=function(e){var t=e.recipe;return Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:t.name}),Object(P.jsx)("br",{}),Object(P.jsxs)("h4",{children:["By: ",t.user.displayName]}),Object(P.jsxs)("h5",{children:["Difficulty: ",te.getDifficultyText(t.difficulty)]}),Object(P.jsxs)("h5",{children:["Estimated time: ",t.estimatedMinutes," minutes"]}),Object(P.jsx)("br",{}),Object(P.jsx)("p",{children:t.description}),Object(P.jsx)("br",{}),Object(P.jsx)("h3",{children:"Ingredients"}),Object(P.jsx)(Ie.a,{striped:!0,bordered:!0,hover:!0,children:Object(P.jsx)("tbody",{children:t.ingredients.map((function(e,t){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{children:e.name}),Object(P.jsx)("td",{children:e.quantity}),Object(P.jsx)("td",{children:e.unit})]},"ingredient".concat(t))}))})}),Object(P.jsx)("br",{}),Object(P.jsx)("h3",{children:"Steps"}),t.steps.map((function(e,t){return Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{children:"Step ".concat(t+1)}),Object(P.jsx)("p",{children:e.description}),e.tip?Object(P.jsxs)("p",{children:["Tips: ",e.tip]}):"",e.warning?Object(P.jsxs)("p",{children:["Warning: ",e.warning]}):""]},"ingredient".concat(t))}))]})};var Pe=function(e){var t=Object(u.c)((function(e){return e.user})),n=Object(u.b)(),r=Object(p.g)(),c=Object(p.h)().id,s=Object(a.useState)(null),j=Object(U.a)(s,2),d=j[0],b=j[1],h=Object(a.useState)(!1),O=Object(U.a)(h,2),x=O[0],m=O[1],v=Object(a.useState)(!0),f=Object(U.a)(v,2),g=f[0],y=f[1];function w(){return w=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,confirm('Are you sure to delete recipe "'.concat(d.name,'"?'))){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,fe.remove(a,t.token);case 6:return n(I('Recipe "'.concat(d.name,'" deleted!'),C)),r.push("/"),e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(0),n(I('Failed to deleted recipe "'.concat(d.name,'". ').concat(e.t0.toString()),k)),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])}))),w.apply(this,arguments)}return Object(a.useEffect)(Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,fe.getRecipeById(c);case 3:n=e.sent,b(n),m(!(!t.user||t.user.id!==n.user.id)),y(!1);case 7:case"end":return e.stop()}}),e)}))),[c,t]),Object(P.jsx)("div",{children:g?Object(P.jsx)("p",{children:"Loading..."}):Object(P.jsxs)("div",{children:[Object(P.jsx)(Re,{recipe:d}),Object(P.jsx)("br",{}),x?Object(P.jsxs)($.a,{children:[Object(P.jsx)(ee.a,{sm:3,children:Object(P.jsx)(i.b,{to:"/edit-recipe/".concat(d.id),children:Object(P.jsx)("div",{className:"d-grid gap-2",children:Object(P.jsx)(G.a,{variant:"success",children:"Edit"})})})}),Object(P.jsx)(ee.a,{sm:6}),Object(P.jsx)(ee.a,{sm:3,children:Object(P.jsx)("div",{className:"d-grid gap-2",children:Object(P.jsx)(G.a,{variant:"danger",onClick:function(e){return w.apply(this,arguments)}.bind(null,"".concat(d.id)),children:"Delete"})})})]}):""]})})};var Ee=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.user}));return Object(a.useEffect)(Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=window.localStorage.getItem(b.loggedRecipeAppUserKey),a=n?JSON.parse(n):null,r=a?a.token:null,t({type:h,data:{user:a}}),t({type:O,data:{token:r}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)}))),[e]),Object(P.jsxs)("div",{className:"container",children:[Object(P.jsx)(F,{}),Object(P.jsx)(E,{}),Object(P.jsxs)(p.d,{children:[Object(P.jsx)(p.b,{path:"/lastest-recipe/:page_number",children:Object(P.jsx)(Le,{})}),Object(P.jsx)(p.b,{path:"/recipe/:id",children:Object(P.jsx)(Pe,{})}),Object(P.jsx)(p.b,{path:"/edit-recipe/:id",children:Object(P.jsx)(ye,{})}),Object(P.jsx)(p.b,{path:"/login",children:t.user?Object(P.jsx)(p.a,{to:"/"}):Object(P.jsx)(q,{})}),Object(P.jsx)(p.b,{path:"/register",children:t.user?Object(P.jsx)(p.a,{to:"/"}):Object(P.jsx)(X,{})}),Object(P.jsx)(p.b,{path:"/your-recipes",children:t.user?Object(P.jsx)("div",{children:Object(P.jsxs)("p",{children:[t.user.displayName.toString(),"'","s recipes page."]})}):Object(P.jsx)(p.a,{to:"/login"})}),Object(P.jsx)(p.b,{path:"/new-recipe",children:t.user?Object(P.jsx)(ge,{}):Object(P.jsx)(p.a,{to:"/login"})}),Object(P.jsxs)(p.b,{path:"/",children:[Object(P.jsx)("h1",{children:"Main Page"}),t.user?Object(P.jsx)("div",{children:Object(P.jsxs)("p",{children:["Hello, ",t.user.displayName.toString(),"."]})}):Object(P.jsx)("div",{children:Object(P.jsx)("p",{children:"Welcome to recipes website."})})]})]})]})},Te=n(33),De=n(64),Fe=n(65),Ae=Object(Te.combineReducers)({notification:R,user:v}),Ge=Object(Te.createStore)(Ae,Object(Fe.composeWithDevTools)(Object(Te.applyMiddleware)(De.a)));s.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(u.a,{store:Ge,children:Object(P.jsx)(i.a,{children:Object(P.jsx)(Ee,{})})})}),document.getElementById("root"))},73:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.8e015621.chunk.js.map