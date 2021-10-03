(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a,c=n(1),s=n.n(c),r=n(21),i=n.n(r),o=n(15),u=n(5),l=(n(35),n(14)),d=n(30),b=n(20),j=n(3),m=n.n(j),f=n(6),p=n(10),h=Object(p.b)("user/getUserDetails",Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/user",{mode:"cors",credentials:"include"});case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",{firstName:n.firstName,lastName:n.lastName,email:n.email});case 8:case"end":return e.stop()}}),e)})))),O=Object(p.c)({name:"user",initialState:{firstName:"",lastName:"",email:"",genres:[]},reducers:{resetUserDetails:function(e,t){e.firstName="",e.lastName="",e.email="",e.genres=[]},setGenres:function(e,t){if(-1===e.genres.indexOf(t.payload)&e.genres.length<5)return Object(b.a)(Object(b.a)({},e),{},{genres:[].concat(Object(d.a)(e.genres),[t.payload])});var n=e.genres.filter((function(e){return e!==t.payload}));return Object(b.a)(Object(b.a)({},e),{},{genres:n})}},extraReducers:Object(l.a)({},h.fulfilled,(function(e,t){e.firstName=t.payload.firstName,e.lastName=t.payload.lastName,e.email=t.payload.email}))}),g=function(e){return e.user.firstName},x=function(e){return e.user.lastName},v=function(e){return e.user.email},N=function(e){return e.user.genres},y=O.actions,k=y.resetUserDetails,w=y.setGenres,C=O.reducer,S=n(2),E=n(0);function D(){var e=Object(S.c)(g);return Object(E.jsxs)("div",{id:"dashboard",children:[Object(E.jsx)("div",{className:"heading",children:Object(E.jsxs)("h3",{children:[e,"'s Dashboard"]})}),Object(E.jsx)("div",{className:"content"})]})}var T=Object(p.b)("music/getAccessToken",Object(f.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=btoa("".concat("9da83291fa8744f68669357eb0bef8da",":").concat("db1c51c9de494b6789087dc718c828de")),e.next=3,fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:"Basic ".concat(t),"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials"});case 3:if(!(n=e.sent).ok){e.next=9;break}return e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",a.access_token);case 9:case 10:case"end":return e.stop()}}),e)})))),L=Object(p.b)("music/getAvailableGenres",function(){var e=Object(f.a)(m.a.mark((function e(t){var n,a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.accessToken,e.next=3,fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds",{headers:{Authorization:"Bearer "+n}});case 3:if(!(a=e.sent).ok){e.next=9;break}return e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c.genres);case 9:case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),_=Object(p.b)("music/getSuggestions",function(){var e=Object(f.a)(m.a.mark((function e(t){var n,a,c,s,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.accessToken,0!==(a=t.genres).length){e.next=5;break}return e.abrupt("return",[]);case 5:return c=a.join(),e.next=8,fetch("https://api.spotify.com/v1/recommendations?seed_genres=".concat(c),{headers:{Authorization:"Bearer "+n}});case 8:if(!(s=e.sent).ok){e.next=15;break}return e.next=12,s.json();case 12:return r=e.sent,i=r.tracks.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri,images:e.album.images}})),e.abrupt("return",i);case 15:case 16:case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=Object(p.c)({name:"music",initialState:{accessToken:"",availableGenres:[],suggestions:[]},reducers:{resetMusicDetails:function(e,t){e.accessToken="",e.availableGenres=[],e.suggestions=[]}},extraReducers:(a={},Object(l.a)(a,T.fulfilled,(function(e,t){e.accessToken=t.payload})),Object(l.a)(a,L.fulfilled,(function(e,t){e.availableGenres=t.payload})),Object(l.a)(a,_.fulfilled,(function(e,t){e.suggestions=t.payload})),a)}),A=function(e){return e.music.accessToken},B=function(e){return e.music.availableGenres},q=function(e){return e.music.suggestions},G=I.actions.resetMusicDetails,F=I.reducer;n(43);function U(e){var t=e.track;return Object(E.jsxs)("div",{className:"track",children:[Object(E.jsx)("img",{src:t.images[2].url,alt:t.name}),Object(E.jsx)("h6",{className:"track-info",children:t.name}),Object(E.jsx)("h6",{className:"track-info",children:t.artist})]})}n(44);var J=n(7);n(45);function P(e){var t=e.genre,n=Object(S.c)(N),a=Object(S.b)();return Object(E.jsxs)("label",{htmlFor:t,className:"genre-label",children:[Object(E.jsx)("input",{className:"genre-checkbox",type:"checkbox",id:t,value:t.toLowerCase(),onClick:function(e){a(w(e.target.value))},checked:n.includes(t.toLowerCase()),readOnly:!0}),Object(E.jsx)("p",{className:"genre",children:t})]})}var R=!1,z=function(){var e=document.getElementById("genres");R||(e.style.display="block",R=!0)},M=function(){for(var e,t=document.getElementById("genres"),n=document.getElementsByClassName("genre-label"),a=0;a<n.length;a++)n[a].matches(":hover")&&(e=!0);R&!e&&(t.style.display="none",R=!1)};n(46);function V(){var e=Object(S.c)(B),t=Object(c.useState)(""),n=Object(J.a)(t,2),a=n[0],s=n[1],r=e.filter((function(e){return e.includes(a.toLowerCase())}));return Object(E.jsx)("form",{id:"search",onFocus:z,onBlur:M,children:Object(E.jsxs)("div",{className:"multiselect",children:[Object(E.jsx)("input",{className:"form-control",type:"search",placeholder:"Select genres... (max 5)",onChange:function(e){e.preventDefault(),s(e.target.value)}}),Object(E.jsx)("div",{id:"genres",children:r.map((function(e){return Object(E.jsx)(P,{genre:e},e)}))})]})})}function H(){var e,t=Object(S.c)(q),n=Object(S.c)(g);return e=0===t.length?Object(E.jsx)("div",{className:"content",children:Object(E.jsx)("div",{children:"Select genres to see suggestions."})}):Object(E.jsx)("div",{className:"content",children:t.map((function(e){return Object(E.jsx)(U,{track:e},e.id)}))}),Object(E.jsxs)("div",{id:"suggestions",children:[Object(E.jsxs)("div",{className:"heading",children:[Object(E.jsxs)("h3",{children:[n,"'s Suggestions"]}),Object(E.jsx)(V,{})]}),e]})}n(47);function K(){var e=Object(S.c)(g),t=Object(c.useState)(""),n=Object(J.a)(t,2)[1];return Object(E.jsxs)("div",{id:"forum",children:[Object(E.jsxs)("div",{className:"heading",children:[Object(E.jsxs)("h3",{children:[e,"'s Forum"]}),Object(E.jsx)("form",{children:Object(E.jsx)("input",{className:"form-control",id:"search",type:"search",placeholder:"Search posts...",onChange:function(e){e.preventDefault(),n(e.target.value)}})})]}),Object(E.jsx)("div",{className:"content"})]})}var Q=function(e){var t=document.createElement("div");t.id="message",t.classList.add("animate__animated"),t.classList.add("animate__fadeIn");var n=document.createTextNode(e);t.appendChild(n),document.getElementById("root").appendChild(t),setTimeout((function(){t.classList.add("animate__fadeOut")}),3e3),setTimeout((function(){document.getElementById("root").removeChild(t)}),5e3)},W=function(e){var t=document.createElement("div");t.id="message-inverted",t.classList.add("animate__animated"),t.classList.add("animate__fadeIn");var n=document.createTextNode(e);t.appendChild(n),document.getElementById("root").appendChild(t),setTimeout((function(){t.classList.add("animate__fadeOut")}),3e3),setTimeout((function(){document.getElementById("root").removeChild(t)}),5e3)},X=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/user",{method:"PUT",mode:"cors",credentials:"include",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:e.sent.ok?Q("User details updated."):Q("User details not updated.");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(48);function Y(){var e=Object(S.c)(g),t=Object(S.c)(x),n=Object(S.c)(v),a=Object(c.useState)(e),s=Object(J.a)(a,2),r=s[0],i=s[1],o=Object(c.useState)(t),u=Object(J.a)(o,2),l=u[0],d=u[1],b=Object(c.useState)(n),j=Object(J.a)(b,2),m=j[0],f=j[1],p=Object(S.b)();return Object(E.jsxs)("div",{id:"account",children:[Object(E.jsx)("div",{className:"heading",children:Object(E.jsxs)("h3",{children:[e,"'s Account"]})}),Object(E.jsx)("div",{className:"content",children:Object(E.jsxs)("form",{id:"account-form",onSubmit:function(e){e.preventDefault(),X({firstName:r,lastName:l,email:m}).then((function(){p(h())}))},children:[Object(E.jsxs)("div",{className:"account-form-element",children:[Object(E.jsx)("label",{htmlFor:"first-name",children:"First Name:"}),Object(E.jsx)("input",{className:"account-input form-control",type:"text",value:r,id:"first-name",onChange:function(e){e.preventDefault(),i(e.target.value)},required:!0})]}),Object(E.jsxs)("div",{className:"account-form-element",children:[Object(E.jsx)("label",{htmlFor:"last-name",children:"Last Name:"}),Object(E.jsx)("input",{className:"account-input form-control",type:"text",value:l,id:"last-name",onChange:function(e){e.preventDefault(),d(e.target.value)},required:!0})]}),Object(E.jsxs)("div",{className:"account-form-element",children:[Object(E.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(E.jsx)("input",{className:"account-input form-control",type:"email",value:m,id:"email",onChange:function(e){e.preventDefault(),f(e.target.value)},required:!0})]}),Object(E.jsx)("button",{className:"account-submit btn",type:"submit",children:"Save"})]})})]})}n(49);var Z,$=function(){var e=Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/genres",{mode:"cors",credentials:"include"});case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/userGenres",{method:"PUT",mode:"cors",credentials:"include",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=n.p+"static/media/inverted-logo.31f83cb9.png",ne=Object(p.b)("preLogin/requestLogin",function(){var e=Object(f.a)(m.a.mark((function e(t){var n,a,c,s,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,c={email:n,password:a},e.next=4,fetch("/authenticate",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 4:if(!(s=e.sent).ok){e.next=9;break}return e.abrupt("return",{signedIn:!0,message:""});case 9:return e.next=11,s.json();case 11:return r=e.sent,e.abrupt("return",{signedIn:!1,message:r.message});case 13:case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ae=Object(p.b)("preLogin/logout",Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/logout",{method:"GET",credentials:"include",mode:"cors"});case 2:if(!e.sent.ok){e.next=6;break}return window.location.reload(),e.abrupt("return",!1);case 6:return e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})))),ce=Object(p.c)({name:"preLogin",initialState:{registering:!1,signedIn:!1,message:""},reducers:{setRegistering:function(e,t){e.registering=t.payload},setMessage:function(e,t){e.message=t.payload.message}},extraReducers:(Z={},Object(l.a)(Z,ne.fulfilled,(function(e,t){e.signedIn=t.payload.signedIn,e.message=t.payload.message})),Object(l.a)(Z,ae.fulfilled,(function(e,t){e.signedIn=t.payload})),Z)}),se=function(e){return e.preLogin.registering},re=function(e){return e.preLogin.signedIn},ie=function(e){return e.preLogin.message},oe=ce.actions,ue=oe.setRegistering,le=oe.setMessage,de=ce.reducer;function be(){var e=Object(S.b)(),t=Object(S.c)(re),n=Object(S.c)(N),a=Object(S.c)(v),s=Object(S.c)(g),r=Object(S.c)(x),i=Object(S.c)(A);return Object(c.useEffect)((function(){""!==a&&window.pendo.initialize({disableCookies:!0,visitor:{id:a,email:a,full_name:"".concat(s," ").concat(r),return_url:"https://shut-up-and-dance.herokuapp.com/dashboard"},account:{id:a,name:a,is_paying:!1,monthly_value:0}})}),[a,s,r]),Object(c.useEffect)((function(){""===i&""!==a&&e(T()),""!==i&&e(L({accessToken:i}))}),[i,e,a]),Object(c.useEffect)((function(){""!==a&t&&$().then((function(t){for(var n=0;n<t.length;n++)e(w(t[n]))}))}),[e,a,t]),Object(c.useEffect)((function(){""!==i&&e(_({accessToken:i,genres:n}))}),[n,i,e]),Object(c.useEffect)((function(){""!==a&&ee(n)}),[n,a]),Object(E.jsxs)(o.a,{children:[Object(E.jsx)(u.a,{to:"/dashboard"}),Object(E.jsxs)("nav",{id:"sidebar",children:[Object(E.jsxs)("ul",{id:"nav-list",children:[Object(E.jsx)("li",{className:"icon-element",children:Object(E.jsx)(o.b,{to:"/dashboard",children:Object(E.jsx)("img",{src:te,alt:"logo",id:"logo"})})}),Object(E.jsx)("li",{className:"nav-element",children:Object(E.jsxs)(o.b,{to:"/dashboard",className:"nav-option",children:[Object(E.jsx)("i",{className:"bi bi-house-fill nav-icon dashboard-button"}),Object(E.jsx)("p",{className:"nav-title",children:"Dashboard"})]})}),Object(E.jsx)("li",{className:"nav-element",children:Object(E.jsxs)(o.b,{to:"/suggestions",className:"nav-option",children:[Object(E.jsx)("i",{className:"bi bi-music-note-beamed nav-icon suggestions-button"}),Object(E.jsx)("p",{className:"nav-title",children:"Suggestions"})]})}),Object(E.jsx)("li",{className:"nav-element",children:Object(E.jsxs)(o.b,{to:"/forum",className:"nav-option",children:[Object(E.jsx)("i",{className:"bi bi-chat-fill nav-icon forum-button"}),Object(E.jsx)("p",{className:"nav-title",children:"Forum"})]})}),Object(E.jsx)("li",{className:"nav-element",children:Object(E.jsxs)(o.b,{to:"/account",className:"nav-option",children:[Object(E.jsx)("i",{className:"bi bi-person-fill nav-icon account-button"}),Object(E.jsx)("p",{className:"nav-title",children:"Account"})]})})]}),Object(E.jsxs)("button",{className:"nav-option",id:"logout",onClick:function(t){t.preventDefault(),e(k()),e(G()),e(ae())},children:[Object(E.jsx)("i",{className:"bi bi-box-arrow-left nav-icon"}),Object(E.jsx)("p",{className:"nav-title",children:"Log Out"})]})]}),Object(E.jsxs)(u.d,{children:[Object(E.jsx)(u.b,{path:"/dashboard",children:Object(E.jsx)(D,{})}),Object(E.jsx)(u.b,{path:"/suggestions",children:Object(E.jsx)(H,{})}),Object(E.jsx)(u.b,{path:"/forum",children:Object(E.jsx)(K,{})}),Object(E.jsx)(u.b,{path:"/Account",children:Object(E.jsx)(Y,{})})]})]})}n(54);function je(){var e=Object(S.b)(),t=Object(c.useState)(null),n=Object(J.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(null),i=Object(J.a)(r,2),o=i[0],u=i[1],l=Object(S.c)(ie);return Object(c.useEffect)((function(){""!==l&&W(l)}),[l]),Object(E.jsxs)("div",{id:"login",children:[Object(E.jsx)("div",{className:"overlay"}),Object(E.jsxs)("form",{id:"login-form",onSubmit:function(t){t.preventDefault(),e(ne({email:a,password:o}))},children:[Object(E.jsx)("input",{type:"email",placeholder:"Enter your email address",className:"form-control login-element",onChange:function(e){e.preventDefault(),s(e.target.value)},required:!0}),Object(E.jsx)("input",{type:"password",placeholder:"Enter your password",className:"form-control login-element",onChange:function(e){e.preventDefault(),u(e.target.value)},required:!0}),Object(E.jsx)("button",{id:"login-button",type:"submit",className:"btn btn-outline-light login-element",children:"Log In"})]}),Object(E.jsx)("button",{onClick:function(t){t.preventDefault(),e(ue(!0)),e(le({message:""}))},id:"reg-link",className:"btn btn-outline-light login-element",children:"Don't have an account? Click here to sign up."})]})}n(55);var me=function(){var e=Object(f.a)(m.a.mark((function e(t,n,a,c,s){var r,i,o,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c===s){e.next=4;break}return e.abrupt("return",{message:"Passwords do not match."});case 4:return r={firstName:t,lastName:n,email:a,password:c},e.next=7,fetch("/register",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 7:if(!(i=e.sent).ok){e.next=13;break}return e.next=11,i.json();case 11:return o=e.sent,e.abrupt("return",o);case 13:return e.next=16,i.json();case 16:return u=e.sent,e.abrupt("return",u);case 18:case 19:case"end":return e.stop()}}),e)})));return function(t,n,a,c,s){return e.apply(this,arguments)}}();function fe(){var e=Object(S.b)(),t=Object(c.useState)(null),n=Object(J.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(null),i=Object(J.a)(r,2),o=i[0],u=i[1],l=Object(c.useState)(null),d=Object(J.a)(l,2),b=d[0],j=d[1],p=Object(c.useState)(null),h=Object(J.a)(p,2),O=h[0],g=h[1],x=Object(c.useState)(null),v=Object(J.a)(x,2),N=v[0],y=v[1],k=Object(S.c)(ie),w=function(){var t=Object(f.a)(m.a.mark((function t(n){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,me(a,o,b,O,N);case 3:c=t.sent,e(le({message:c.message}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){"Account created successfully."===k?e(ue(!1)):""!==k&&W(k)}),[k,e]),Object(E.jsxs)("div",{id:"reg",children:[Object(E.jsx)("div",{className:"overlay"}),Object(E.jsxs)("form",{id:"reg-form",onSubmit:w,children:[Object(E.jsx)("input",{type:"text",placeholder:"Enter your first name",className:"form-control reg-element",onChange:function(e){e.preventDefault(),s(e.target.value)},required:!0}),Object(E.jsx)("input",{type:"text",placeholder:"Enter your last name",className:"form-control reg-element",onChange:function(e){e.preventDefault(),u(e.target.value)},required:!0}),Object(E.jsx)("input",{type:"email",placeholder:"Enter your email address",className:"form-control reg-element",onChange:function(e){e.preventDefault(),j(e.target.value)},required:!0}),Object(E.jsx)("input",{type:"password",placeholder:"Enter your password",className:"form-control reg-element",onChange:function(e){e.preventDefault(),g(e.target.value)},required:!0}),Object(E.jsx)("input",{type:"password",placeholder:"Validate your password",className:"form-control reg-element",onChange:function(e){e.preventDefault(),y(e.target.value)},required:!0}),Object(E.jsx)("button",{id:"reg-button",type:"submit",className:"btn btn-outline-light",children:"Register"})]}),Object(E.jsx)("button",{id:"login-link",className:"btn btn-outline-light reg-element",onClick:function(t){t.preventDefault(),e(ue(!1)),e(le({message:""}))},children:"Already have an account? Click here to log in."})]})}function pe(){var e=Object(S.b)(),t=Object(S.c)(se),n=Object(S.c)(re);return"https:"!==window.location.protocol&&window.location.replace("https:".concat(window.location.href.substring(window.location.protocol.length))),Object(c.useEffect)((function(){""!==document.cookie&!n&&e(ne())})),Object(c.useEffect)((function(){n&&e(h())})),Object(E.jsxs)(o.a,{children:[n&&Object(E.jsx)(u.a,{to:"/signedin"}),t&&Object(E.jsx)(u.a,{to:"/register"}),!n&&!t&&Object(E.jsx)(u.a,{to:"/login"}),Object(E.jsxs)(u.d,{children:[Object(E.jsx)(u.b,{path:"/login",children:Object(E.jsx)(je,{})}),Object(E.jsx)(u.b,{path:"/signedin",children:Object(E.jsx)(be,{})}),Object(E.jsx)(u.b,{path:"/register",children:Object(E.jsx)(fe,{})})]})]})}var he=n(16),Oe=n(28),ge=n.n(Oe),xe=n(8),ve={key:"root",storage:ge.a},Ne=Object(xe.b)({preLogin:de,user:C,music:F}),ye=Object(he.g)(ve,Ne),ke=Object(p.a)({reducer:ye,middleware:function(e){return e({serializableCheck:{ignoredActions:[he.a,he.f,he.b,he.c,he.d,he.e]}})}}),we=Object(he.h)(ke),Ce=(n(58),n(29));i.a.render(Object(E.jsx)(s.a.StrictMode,{children:Object(E.jsx)(S.a,{store:ke,children:Object(E.jsx)(Ce.a,{loading:null,persistor:we,children:Object(E.jsx)(pe,{})})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.0da26099.chunk.js.map