(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(38),i=a.n(n),r=a(2),o=a(20),l=a(3),m=a(45),j=a(21),d=a.n(j),b=a(28),u=a(9),h=a(0);function p(){var e=Object(u.b)(),t=e.loginWithRedirect;e.loginWithPopup;return Object(h.jsx)("button",{className:"navbar-button",onClick:function(){return t()},children:"Create Account"})}var O=function(){var e=Object(u.b)().logout;return Object(h.jsx)("button",{className:"navbar-button",onClick:function(){return e()},children:"Sign Out"})},f=a(19),x=a.n(f);var g=function(){var e=Object(c.useContext)(_),t=e.prevRoomId,a=e.socket,s=e.curUser,n=e.setCurRoomId,i=e.curRoomId,o=Object(c.useState)(!1),m=Object(r.a)(o,2),j=m[0],d=m[1];Object(c.useEffect)((function(){x.a.init({duration:1300}),x.a.refresh()}),[]);var b=Object(u.b)(),f=(b.user,b.isAuthenticated),g=(b.isLoading,Object(l.g)()),v=function(e){if(e.preventDefault(),s&&""!==t){var c={roomId:t,nickname:s.nickname,username:s.email,type:"oldRoom"};a.emit("join_room",c),a.on("isJoined",(function(e){e?(n(t),a.emit("addUser",s),g.push("/chat-room")):setTimeout((function(){alert("Previous room has been removed")}),1500)}))}else setTimeout((function(){alert("No previous record found")}),1500)},N=function(){var e=j;if(d(!j),e){var t=document.querySelector(".navbar-child-3");t&&t.classList.remove("navbar-popup-overlay-button-onclick"),document.getElementById("root").classList.remove("noscroll")}else{var a=document.querySelector(".navbar-child-3");a&&a.classList.add("navbar-popup-overlay-button-onclick"),document.getElementById("root").classList.add("noscroll")}};return window.addEventListener("resize",(function(){d(!1)})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsx)("div",{className:"navbar-child-1",children:Object(h.jsxs)("div",{className:"navbar-logo",children:[Object(h.jsx)("span",{className:"navbar-logo-dot"}),Object(h.jsx)("h4",{onClick:function(){a.emit("remove_me",i),g.push("/")},className:"navbar-logo-text",children:"StudyRoomz"})]})}),Object(h.jsxs)("ul",{className:"navbar-items",children:[Object(h.jsx)("li",{className:"navbar-item-1 navbar-item-cc",children:Object(h.jsx)("a",{onClick:function(){a.emit("remove_me",i),g.push("/home")},children:"Home"})}),Object(h.jsx)("li",{className:"navbar-item-2 navbar-item-cc",children:Object(h.jsx)("a",{onClick:v,children:"lastRoom"})}),Object(h.jsx)("li",{className:"navbar-item-3 navbar-item-cc",children:Object(h.jsx)("a",{onClick:function(){a.emit("remove_me",i),g.push("/about_us")},children:"About"})}),Object(h.jsx)("li",{className:"navbar-item-4 navbar-item-cc",children:Object(h.jsx)("a",{href:"#contact-us-form",children:"Contact"})})]}),Object(h.jsx)("div",{className:"navbar-child-2",children:f?Object(h.jsx)(O,{}):Object(h.jsx)(p,{})}),Object(h.jsx)("div",{className:"navbar-child-3",onClick:function(){N()}})]}),j&&Object(h.jsxs)("div",{id:"navPopup",className:"navbar-popup-overlay",children:[Object(h.jsxs)("ul",{className:"navbar-items",children:[Object(h.jsx)("li",{className:"navbar-item-1 navbar-item-cc",children:Object(h.jsx)("a",{onClick:function(e){a.emit("remove_me",i),g.push("/"),N()},children:"Home"})}),Object(h.jsx)("li",{className:"navbar-item-2 navbar-item-cc",children:Object(h.jsx)("a",{onClick:function(e){v(e),N()},children:"lastRoom"})}),Object(h.jsx)("li",{className:"navbar-item-3 navbar-item-cc",children:Object(h.jsx)("a",{onClick:function(e){a.emit("remove_me",i),g.push("/about_us"),N()},children:"About"})}),Object(h.jsx)("li",{className:"navbar-item-4 navbar-item-cc",children:Object(h.jsx)("a",{href:"#contact-us-form",onClick:function(e){N()},children:"Contact"})})]}),Object(h.jsx)("div",{className:"navbar-child-2",onClick:function(e){N()},children:f?Object(h.jsx)(O,{}):Object(h.jsx)(p,{})})]})]})};var v=function(){var e=Object(u.b)(),t=e.user,a=(e.isAuthenticated,e.isLoading,Object(c.useContext)(_)),s=a.socket,n=a.curUser,i=a.curRoomId,o=a.allParticipants,j=a.setAllParticipants,p=Object(c.useState)(""),O=Object(r.a)(p,2),f=O[0],v=O[1],N=Object(c.useState)([]),k=Object(r.a)(N,2),y=k[0],C=k[1],I=Object(c.useState)(!1),w=Object(r.a)(I,2),R=w[0],S=w[1],L=Object(c.useState)([]),D=Object(r.a)(L,2),A=D[0],E=D[1],M=Object(l.g)();function P(){var e=new Date(Date.now()),t=e.getHours(),a=e.getMinutes(),c=t>=12?"pm":"am";return(t=(t%=12)||12)+":"+(a=a<10?"0"+a:a)+" "+c}Object(c.useEffect)((function(){x.a.init({duration:1300}),x.a.refresh()}),[]),Object(c.useEffect)((function(){s.emit("giveUsers",i),s.on("getUsers",(function(e){j(e)}))}),[s]),Object(c.useEffect)((function(){s.emit("give_roomUsers",i),s.on("get_roomUsers",(function(e){for(var t=[],a=0;a<e.length;a++)for(var c=0;c<o.length;c++)o[c].socketid===e[a]&&t.push(o[c].user);E(t)}))}),[o]),Object(c.useEffect)((function(){}),[A]);var U=function(){var e=Object(b.a)(d.a.mark((function e(a){var c,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),c="",document.getElementById("inputMsg")&&(c=document.getElementById("inputMsg").value),!t||""===c){e.next=12;break}return n={key:y.length+1,msg:c,roomId:i,time:P(),nickname:t.nickname,username:t.email},e.next=7,s.emit("send_message",n);case 7:v(""),(r=document.getElementById("inputMsg"))&&r.focus(),e.next=13;break;case 12:console.log("Warning! Something went wrong ");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.on("receive_message",(function(e){if(!y.indexOf(e)>-1){C((function(t){return[].concat(Object(m.a)(t),[e])}));var t=document.querySelector(".main-part-right-dm-p"),a=t.scrollHeight;t.scrollBy(0,a)}else console.log("message already added")}));case 2:case"end":return e.stop()}}),e)})))()}),[s]);var T=function(){var e=document.querySelector(".users-button");e&&(S(!R),e.classList.add("users-temp"))};function F(){S(!1)}return window.addEventListener("resize",F),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"Chat",onKeyDown:function(e){"Enter"===e.key&&U(e)},children:[Object(h.jsx)("div",{className:"chat-navbar",children:Object(h.jsx)(g,{onClick:F})}),Object(h.jsxs)("h1",{className:"roomid",children:["ROOM ID : ",i]}),Object(h.jsxs)("main",{className:"main",children:[R?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("section",{className:"showUsers main-part-left",children:[Object(h.jsx)("span",{className:"users-temp users-button",onClick:T,children:Object(h.jsx)("i",{className:"fas fa-angle-double-left"})}),Object(h.jsxs)("div",{className:"main-part-left-profile",children:[Object(h.jsx)("div",{className:"main-part-left-profile-img",children:Object(h.jsx)("img",{src:t.picture,alt:""})}),Object(h.jsx)("h4",{className:"main-part-left-profile-name",children:t.nickname}),Object(h.jsx)("span",{className:"main-part-left-profile-name-setting",children:Object(h.jsx)("a",{onClick:function(){M.push("/home"),s.emit("remove_me",i)},children:Object(h.jsx)("i",{className:"fas fa-sign-out-alt"})})})]}),Object(h.jsx)("div",{className:"main-part-left-participants",children:A.map((function(e){return e.email!==n.email&&Object(h.jsxs)("div",{className:"main-part-left-participants-participant-cc",children:[Object(h.jsx)("img",{className:"main-part-left-participants-participant-cc-img",src:e.picture,alt:""}),Object(h.jsx)("h4",{className:"main-part-left-participants-participant-cc-name",children:e.nickname})]})}))})]})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("span",{className:"users-button",onClick:T,children:Object(h.jsx)("i",{className:"fas fa-angle-double-right"})})}),Object(h.jsxs)("section",{className:"main-part-left",children:[Object(h.jsxs)("div",{className:"main-part-left-profile",children:[Object(h.jsx)("div",{className:"main-part-left-profile-img",children:Object(h.jsx)("img",{src:t.picture,alt:""})}),Object(h.jsx)("h4",{className:"main-part-left-profile-name",children:t.nickname}),Object(h.jsx)("span",{className:"main-part-left-profile-name-setting",children:Object(h.jsx)("a",{onClick:function(){M.push("/home"),s.emit("remove_me",i)},children:Object(h.jsx)("i",{className:"fas fa-sign-out-alt"})})})]}),Object(h.jsx)("div",{className:"main-part-left-participants",children:A.map((function(e){return e.email!==n.email&&Object(h.jsxs)("div",{className:"main-part-left-participants-participant-cc",children:[Object(h.jsx)("img",{className:"main-part-left-participants-participant-cc-img",src:e.picture,alt:""}),Object(h.jsx)("h4",{className:"main-part-left-participants-participant-cc-name",children:e.nickname})]})}))})]}),Object(h.jsxs)("section",{className:"main-part-right",children:[Object(h.jsx)("div",{className:"main-part-right-dm-p",children:y&&y.map((function(e){return n.email===e.username?Object(h.jsxs)("div",{className:"main-part-right-dm",children:[Object(h.jsxs)("div",{className:"main-part-right-dm-msg myMsg",id:"myMsg",children:[Object(h.jsx)("p",{className:"main-part-right-dm-msg-name",children:e.nickname}),Object(h.jsx)("p",{className:"main-part-right-dm-msg-text",children:e.msg}),Object(h.jsx)("span",{className:"main-part-right-dm-msg-time",children:e.time})]}),Object(h.jsx)("span",{})]}):Object(h.jsxs)("div",{className:"main-part-right-dm",onClick:F,children:[Object(h.jsxs)("div",{className:"main-part-right-dm-msg myMsg",children:[Object(h.jsx)("p",{className:"main-part-right-dm-msg-name",children:e.nickname}),Object(h.jsx)("p",{className:"main-part-right-dm-msg-text",children:e.msg}),Object(h.jsx)("span",{className:"main-part-right-dm-msg-time",children:e.time})]}),Object(h.jsx)("span",{})]})}))}),Object(h.jsxs)("div",{className:"main-part-right-msgbox",children:[Object(h.jsx)("span",{className:"main-part-right-msgbox-file",children:Object(h.jsx)("input",{type:"file",disabled:!0})}),Object(h.jsx)("input",{id:"inputMsg",value:f,onChange:function(e){v(e.target.value)},type:"text",autocomplete:"off",placeholder:"Type a message",className:"main-part-right-msgbox-typemsg"}),Object(h.jsx)("span",{className:"main-part-right-msgbox-sendbutton",children:Object(h.jsx)("i",{onClick:U,className:"fas fa-paper-plane"})})]})]})]})]})})},N=(a(37),a.p+"static/media/2.3a5e4c6c.jpg"),k=a.p+"static/media/1.99c4cd4a.jpg";a(66),a(67);function y(){return Object(h.jsxs)("div",{className:"footer-wrapper",children:[Object(h.jsxs)("div",{className:"r1",children:[Object(h.jsxs)("div",{className:"links",children:[Object(h.jsx)("h1",{children:" Important Links"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"https://github.com/Xaier310/",children:[Object(h.jsx)("i",{className:"fab fa-github"})," Github"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"https://www.instagram.com/pravish310/",children:[Object(h.jsx)("i",{className:"fab fa-instagram"})," Instagram"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"https://www.facebook.com/pradeep.kr.16568/",children:[Object(h.jsx)("i",{className:"fab fa-facebook"})," Facebook"]})})]})]}),Object(h.jsxs)("div",{id:"contact-us-form",className:"contactus-footer",children:[Object(h.jsx)("h1",{children:"Contact US"}),Object(h.jsx)("h3",{children:"Have any queries feel free to reach out"}),Object(h.jsxs)("form",{className:"signup",children:[Object(h.jsx)("br",{}),Object(h.jsx)("input",{name:"Name",type:"text",placeholder:"Name*",className:"username",id:"input"}),Object(h.jsx)("textarea",{id:"input",type:"text",placeholder:"Message"}),Object(h.jsx)("button",{className:"btn",children:"Send Message"})]})]})]}),Object(h.jsx)("div",{className:"r2",children:Object(h.jsx)("div",{children:Object(h.jsx)("p",{id:"copyright",children:"\xa9 2021 Studyroom copyright"})})})]})}var C=function(){var e=Object(c.useContext)(_),t=e.socket,a=e.curUser,s=e.setIsRoomIdValid,n=e.isWD,i=e.setIsWD,o=e.isAD,m=e.setIsAD,j=e.isML,p=e.setIsML,O=e.setCurRoomId,f=e.inputRoomId,v=e.setInputRoomId,C=e.setPrevRoomId,I=Object(c.useState)([0,0,0,0,0]),w=Object(r.a)(I,2),R=w[0],S=w[1],L=Object(c.useState)(!1),D=Object(r.a)(L,2),A=D[0],E=D[1],M=Object(u.b)(),P=(M.user,M.isAuthenticated),U=(M.isLoading,Object(l.g)());var T=function(){var e=Object(b.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.emit("custom_stats",a);case 2:t.on("your_custom_stats",(function(e){S(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){e.preventDefault();var c=function(){for(var e="",t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",a=6;a>0;a--)e+=t[Math.floor(Math.random()*t.length)];return e}();if(O(c),a){var s={roomId:c,nickname:a.nickname,username:a.email,type:"newRoom"};t.emit("join_room",s),C(c),t.emit("addUser",a),U.push("/chat-room")}else B()},W=function(e){if(e.preventDefault(),""!==f){var c={roomId:f,nickname:a.nickname,username:a.email,type:"oldRoom"};t.emit("join_room",c),t.on("isJoined",(function(e){e?(O(f),C(f),t.emit("addUser",a),U.push("/chat-room")):(s(!1),B(null,"Invalid Room Id"))}))}else B(null,"Invalid Room Id")},q=function(e){if(R[e-1]<15){var c="";n?c="webroom".concat(e):o?c="androidroom".concat(e):j&&(c="mlroom".concat(e)),O(c),C(c),t.emit("join_custom_room",c),t.emit("addUser",a),U.push("/chat-room")}else J("This Room is already full try another one")};Object(c.useEffect)((function(){x.a.init({duration:1300}),x.a.refresh()}),[]);for(var B=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Please login first",t=document.querySelector(".alert");t&&(t.innerText=e),setTimeout((function(){t.innerText=""}),2e3)},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Please login first",t=document.querySelector(".alertForPopup");t&&(t.innerText=e),setTimeout((function(){t.innerText=""}),2e3)},z=[],H=function(e){j?z.push(P?Object(h.jsx)("a",{className:"no-of-rooms-row-room-cc",onClick:function(){q(e+1),R[e]<=15&&p(!1)},children:R[e]}):Object(h.jsx)("a",{className:"no-of-rooms-row-room-cc",onClick:function(){J()},children:R[e]})):n?z.push(P?Object(h.jsx)("a",{className:"no-of-rooms-row-room-cc",onClick:function(){q(e+1),R[e]<=15&&i(!1)},children:R[e]}):Object(h.jsx)("a",{className:"no-of-rooms-row-room-cc",onClick:function(){J()},children:R[e]})):o&&z.push(P?Object(h.jsx)("a",{className:"no-of-rooms-row-room-cc",onClick:function(){q(e+1),R[e]<=15&&m(!1)},children:R[e]}):Object(h.jsx)("a",{className:"no-of-rooms-row-room-cc",onClick:function(){J()},children:R[e]}))},V=0;V<5;V++)H(V);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"Home",children:[Object(h.jsx)(g,{}),Object(h.jsxs)("main",{className:"main",children:[Object(h.jsxs)("section",{className:"main-part-1",children:[Object(h.jsxs)("div",{className:"main-part-1-left",children:[Object(h.jsx)("h1",{className:"main-part-1-left-heading",children:"You will never study alone again create your own rooms."}),Object(h.jsxs)("p",{className:"main-part-1-left-para",children:["Join the largest global student community online and say goodbye to lack of motivation. Create your own Room and share room-Id with others or join a already created room.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Joining a virtual study room is just like attending a Video Call, where instead of talking all the participants on the call are studying and motivating each other to do the same."]}),Object(h.jsxs)("div",{className:"main-part-1-left-buttons",children:[Object(h.jsx)("button",{className:"main-part-1-left-buttons-button-1 main-part-1-left-buttons-button-cc",onClick:P?F:B,children:"Create Room"}),Object(h.jsxs)("button",{className:"main-part-1-left-buttons-button-2 main-part-1-left-buttons-button-cc",onClick:function(){return E(!0)},children:[Object(h.jsx)("i",{className:"fas fa-home"}),"Enter in a Room"]}),A&&Object(h.jsx)("div",{className:"popup-roomid-input",onKeyDown:function(e){"Enter"===e.key&&(P?W(e):B())},children:Object(h.jsxs)("div",{className:"popup-roomid-input-bg",children:[Object(h.jsx)("h1",{children:"Enter Room ID"}),Object(h.jsxs)("div",{className:"popup-roomid-input-bg-extra",children:[Object(h.jsx)("input",{placeholder:"Enter room id . . .",type:"text",onChange:function(e){v(e.target.value)}}),Object(h.jsx)("button",{id:"link",onClick:P?W:B,children:Object(h.jsx)("i",{className:"fas fa-arrow-right"})})]}),Object(h.jsx)("div",{onClick:function(){return E(!1)},className:"no-of-rooms-row-closeButton",children:Object(h.jsx)("i",{className:"fas fa-times"})}),Object(h.jsx)("p",{className:"alert"})]})})]}),Object(h.jsx)("p",{className:"alert"})]}),Object(h.jsx)("div",{className:"main-part-1-right",children:Object(h.jsx)("img",{className:"main-part-1-right-image",src:N,alt:""})})]}),Object(h.jsx)("section",{className:"main-part-2",children:Object(h.jsxs)("div",{className:"main-part-2-right",id:"rooms",children:[Object(h.jsx)("div",{className:"sec-img",children:Object(h.jsx)("img",{className:"main-part-2-left-img",src:k,alt:"img not available"})}),(j||n||o)&&Object(h.jsx)("div",{className:"no-of-rooms",children:Object(h.jsxs)("div",{className:"no-of-rooms-row",children:[z,Object(h.jsx)("span",{onClick:P?F:J,className:"no-of-rooms-row-room-cc",children:Object(h.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"})}),Object(h.jsx)("div",{className:"no-of-rooms-row-closeButton",children:Object(h.jsx)("i",{className:"fas fa-times",onClick:function(){p(!1),i(!1),m(!1)}})}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{className:"alertForPopup"})]})}),Object(h.jsxs)("div",{className:"main-part-2-right-detail",children:[Object(h.jsx)("h1",{className:"main-part-2-right-heading",children:"Want to have focus on special topics ??"}),Object(h.jsx)("p",{className:"main-part-2-right-para",children:"Don't worry. We have pre-built rooms for different topics - Web development, App development, Machine Learning. Choose different rooms on the basis of how many participants are active. All rooms are limited to 15 participants to increase interaction"})]}),Object(h.jsxs)("div",{className:"main-part-2-right-cards",children:[Object(h.jsxs)("div",{className:"main-part-2-right-cards-card-1 main-part-2-right-cards-card-cc",children:[Object(h.jsxs)("h1",{className:"main-part-2-right-cards-card-cc-heading-cc",children:[Object(h.jsx)("i",{className:"fab fa-js-square"}),Object(h.jsx)("span",{children:"Web Development"})]}),Object(h.jsx)("button",{className:"main-part-2-right-cards-card-cc-button-cc",onClick:function(){i(!0),T("webroom")},children:"Join Room"})]}),Object(h.jsxs)("div",{className:"main-part-2-right-cards-card-2 main-part-2-right-cards-card-cc",children:[Object(h.jsxs)("h1",{className:"main-part-2-right-cards-card-cc-heading-cc",children:[Object(h.jsx)("i",{className:"fab fa-apple"}),Object(h.jsx)("span",{children:"App Development"})]}),Object(h.jsx)("button",{className:"main-part-2-right-cards-card-cc-button-cc",onClick:function(){m(!0),T("androidroom")},children:"Join Room"})]}),Object(h.jsxs)("div",{className:"main-part-2-right-cards-card-3 main-part-2-right-cards-card-cc",children:[Object(h.jsxs)("h1",{className:"main-part-2-right-cards-card-cc-heading-cc",children:[Object(h.jsx)("i",{className:"fab fa-python"}),Object(h.jsx)("span",{children:"Machine Learning"})]}),Object(h.jsx)("button",{className:"main-part-2-right-cards-card-cc-button-cc",onClick:function(){p(!0),T("mlroom")},children:"Join Room"})]})]})]})})]}),Object(h.jsx)("footer",{className:"footer"}),Object(h.jsx)(y,{})]})})},I=a(44),w=(a(68),function(){return Object(h.jsx)("div",{className:"load-wrapp",children:Object(h.jsxs)("div",{className:"load-3",children:[Object(h.jsx)("div",{className:"line"}),Object(h.jsx)("div",{className:"line"}),Object(h.jsx)("div",{className:"line"})]})})});function R(){return Object(h.jsx)("div",{className:"About-page",children:Object(h.jsxs)("div",{className:"Home",children:[Object(h.jsx)(g,{}),Object(h.jsxs)("div",{className:"About",style:{paddingLeft:"1em",paddingRight:"1em"},children:[Object(h.jsx)("h1",{className:"about-heading",children:"About Us"}),Object(h.jsx)("p",{id:"set-footer-in-about",className:"about-para",style:{opacity:"65%"},children:"Developed by Pradeep and Amit, students of Delhi Technological University, Study Rooms aims at bringing various people of similar interests together to form a global community."}),Object(h.jsx)("div",{id:"about-footer",children:Object(h.jsx)(y,{})})]})]})})}var S=a(31),L=a(46),D=["isLoading","curRoomId","isAuthenticated","component"],A=function(e){var t=e.isLoading,a=e.curRoomId,c=e.isAuthenticated,s=e.component,n=Object(L.a)(e,D);return Object(h.jsx)(l.b,Object(S.a)(Object(S.a)({},n),{},{render:function(e){return c&&""!==a?t?Object(h.jsx)(w,{}):Object(h.jsx)(s,Object(S.a)({},e)):Object(h.jsx)(l.a,{to:{path:"/",state:{from:e.location}}})}}))};function E(){return Object(h.jsx)("div",{style:{backgroundColor:"grey",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"hidden"},className:"notfound",children:Object(h.jsx)("h1",{style:{fontSize:"5rem"},children:"Page not  found"})})}var _=Object(c.createContext)(null);var M=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),i=Object(r.a)(n,2),m=i[0],j=i[1],d=Object(c.useState)(!1),b=Object(r.a)(d,2),p=b[0],O=b[1],f=Object(c.useState)(!1),x=Object(r.a)(f,2),g=x[0],N=x[1],k=Object(c.useState)(!1),y=Object(r.a)(k,2),S=y[0],L=y[1],D=Object(c.useState)(!1),M=Object(r.a)(D,2),P=M[0],U=M[1],T=Object(c.useState)(!1),F=Object(r.a)(T,2),W=F[0],q=F[1],B=Object(c.useState)(!1),J=Object(r.a)(B,2),z=J[0],H=J[1],V=Object(c.useState)(null),X=Object(r.a)(V,2),G=X[0],K=X[1],Q=Object(c.useState)([]),Z=Object(r.a)(Q,2),Y=Z[0],$=Z[1],ee=Object(c.useState)(""),te=Object(r.a)(ee,2),ae=te[0],ce=te[1],se=Object(c.useState)(""),ne=Object(r.a)(se,2),ie=ne[0],re=ne[1],oe=Object(u.b)(),le=oe.user,me=oe.isAuthenticated,je=oe.isLoading;return Object(c.useEffect)((function(){le&&s(le)}),[le]),console.log("User: ",le,"isAuth: ",me,"isLoad: ",je),Object(c.useEffect)((function(){j(Object(I.a)("https://studyroomz.herokuapp.com/",{transports:["websocket"]}))}),[]),Object(h.jsx)(_.Provider,{value:{socket:m,curUser:a,isRoomIdValid:p,setIsRoomIdValid:O,isLoggedIn:g,setIsLoggedIn:N,isWD:S,setIsWD:L,isAD:P,setIsAD:U,isML:z,setIsML:H,curRoomId:G,setCurRoomId:K,isNewRoom:W,setIsNewRoom:q,allParticipants:Y,setAllParticipants:$,inputRoomId:ae,setInputRoomId:ce,prevRoomId:ie,setPrevRoomId:re},children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/home",children:Object(h.jsx)(l.a,{to:"/"})}),Object(h.jsx)(l.b,{exact:!0,path:"/",component:je?w:C}),Object(h.jsx)(l.b,{exact:!0,path:"/about_us",component:je?w:R}),Object(h.jsx)(A,{exact:!0,path:"/chat-room",component:v,isAuthenticated:me,curRoomId:G,isLoading:je}),Object(h.jsx)(l.b,{component:E})]})})})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(u.a,{domain:"dev-5z6hgz09.us.auth0.com",clientId:"gmDXmQFsq2uj2rhiQrTkcZwzrqGX9Z8o",redirectUri:window.location.origin,children:Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(M,{})})})}),document.getElementById("root")),P()}},[[69,1,2]]]);
//# sourceMappingURL=main.80182ce9.chunk.js.map