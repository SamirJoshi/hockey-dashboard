(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{298:function(e,a,t){e.exports=t(535)},303:function(e,a,t){},304:function(e,a,t){},534:function(e,a,t){},535:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(37),c=t.n(o),l=(t(303),t(17)),i=(t(304),t(97)),s=t(26),m=t(543),d=t(544),u=t(548),E=t(119),h=t.n(E),C={NJD:{id:1,abbev:"NJD",name:"New Jersey Devils",primaryColor:"#CE1126",secondaryColor:"#EEEEEE",thirdColor:"#000000"},NYI:{id:2,name:"New York Islanders",primaryColor:"#00539b",secondaryColor:"#F47d30",thirdColor:"#EEEEEE"},NYR:{id:3,name:"New York Rangers",primaryColor:"#0038A8",secondaryColor:"#CE1126",thirdColor:"#EEEEEE"},PHI:{id:4,name:"Philadelphia Flyers",primaryColor:"#F74902",secondaryColor:"#000000",thirdColor:"#EEEEEE"},PIT:{id:5,name:"Pittsburgh Penguins",primaryColor:"#000000",secondaryColor:"#CFC493",thirdColor:"#FCB514"},BOS:{id:6,name:"Boston Bruins",primaryColor:"#FFB81C",secondaryColor:"#000000",thirdColor:"#EEEEEE"},BUF:{id:7,name:"Buffalo Sabres",primaryColor:"#002654",secondaryColor:"#FCB514",thirdColor:"#ADAFAA"},MTL:{id:8,name:"Montreal Canadiens",primaryColor:"#AF1E2D",secondaryColor:"#192168",thirdColor:"#EEEEEE"},OTT:{id:9,name:"Ottawa Senators",primaryColor:"#E31837",secondaryColor:"#C69214",thirdColor:"#000000"},TOR:{id:10,name:"Toronto Maple Leafs",primaryColor:"#003E7E",secondaryColor:"#EEEEEE",thirdColor:"#000000"},CAR:{name:"Carolina Hurricanes",id:12,primaryColor:"#CC0000",secondaryColor:"#000000",thirdColor:"#A2AAAD"},FLA:{id:13,name:"Florida Panthers",primaryColor:"#041E42",secondaryColor:"#C8102E",thirdColor:"#B9975B"},TBL:{name:"Tampa Bay Lightning",id:14,primaryColor:"#002868",secondaryColor:"#EEEEEE",thirdColor:"#000000"},WSH:{id:15,name:"Washington Capitals",primaryColor:"#041E42",secondaryColor:"#C8102E",thirdColor:"#EEEEEE"},CHI:{id:16,name:"Chicago Blackhawks",primaryColor:"#CF0A2C",secondaryColor:"#FFD100",thirdColor:"#000000"},DET:{id:17,name:"Detroit Red Wings",primaryColor:"#CE1126",secondaryColor:"#EEEEEE",thirdColor:"#000000"},NSH:{id:18,name:"Nashville Predators",primaryColor:"#FFB81C",secondaryColor:"#041E42",thirdColor:"#EEEEEE"},STL:{id:19,name:"St. Louis Blues",primaryColor:"#002F87",secondaryColor:"#FCB514",thirdColor:"#041E42"},CGY:{id:20,name:"Calgary Flames",primaryColor:"#C8102E",secondaryColor:"#F1BE48",thirdColor:"#111111"},COL:{id:21,name:"Colorado Avalanche",primaryColor:"#6F263D",secondaryColor:"#236192",thirdColor:"#A2AAAD"},EDM:{id:22,name:"Edmonton Oilers",primaryColor:"#041E42",secondaryColor:"#FF4C00",thirdColor:"#EEEEEE"},VAN:{id:23,name:"Vancouver Canucks",primaryColor:"#001F5B",secondaryColor:"#00843D",thirdColor:"#071C2C"},ANA:{id:24,name:"Anaheim Ducks",primaryColor:"#F47A38",secondaryColor:"#B09862",thirdColor:"#C4CED4",fourthColor:"#010101"},DAL:{id:25,name:"Dallas Stars",primaryColor:"#006847",secondaryColor:"#8F8F8C",thirdColor:"#111111"},LAK:{id:26,name:"Los Angeles Kings",primaryColor:"#111111",secondaryColor:"#A2AAAD",thirdColor:"#EEEEEE"},SJS:{id:28,name:"San Jose Sharks",primaryColor:"#006D75",secondaryColor:"#EA7200",thirdColor:"#000000",fourthColor:"#EEEEEE"},CBJ:{id:29,name:"Columbus Blue Jackets",primaryColor:"#002654",secondaryColor:"#CE1126",thirdColor:"#A4A9AD"},MIN:{id:30,name:"Minnesota Wild",primaryColor:"#A6192E",secondaryColor:"#154734",thirdColor:"#DDCBA4"},WPG:{id:52,name:"Winnipeg Jets",primaryColor:"#041E42",secondaryColor:"#AC162C",thirdColor:"#7B303E",fourthColor:"#55565A"},ARI:{id:53,name:"Arizona Coyotes",primaryColor:"#8C2633",secondaryColor:"#e2d6b5",thirdColor:"#111111"},VGK:{id:54,name:"Vegas Golden Knights",primaryColor:"#B4975A",secondaryColor:"#333f42",thirdColor:"#c8102E",fourthColor:"#000000"}},p=t(32),v=t.n(p),f=t(58),y=t(547),g=t(546),b=t(540),N=t(59),k=t.n(N),O=t(40),j=function(e){var a=Object.values(C).find((function(a){return a.id.toString()===e.toString()}));return a?a.primaryColor:"#000000"},A=function(e){var a=Object.values(C).find((function(a){return a.id.toString()===e.toString()}));return a?a.secondaryColor:"#000000"},w=function(e){var a=Object.values(C).find((function(a){return a.id.toString()===e.toString()}));return a?a.thirdColor:"#000000"},S=function(e){var a=Object.values(C).find((function(a){return a.id.toString()===e.toString()}));return a?a.name:""},F=function(e){var a=e.teamData,t=e.onChange,n=function(e){return"".concat(e.name,": ").concat(e.value)},o=[{name:"Goals For",value:32-a.rankings.goalsFor},{name:"Goals Against",value:32-a.rankings.goalsAgainst},{name:"Power Play",value:32-a.rankings.powerPlay},{name:"Penalty Kill",value:32-a.rankings.penaltyKill},{name:"Faceoff %",value:32-a.rankings.faceoffPerc}];return r.a.createElement(g.a.Column,{className:"team-panel-column"},r.a.createElement("div",{className:"team-panel"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-text"},S(a.id)),r.a.createElement(m.a,{className:"select-team-action",placeholder:"Change team",selection:!0,options:D(),onChange:function(e,a){var n=a.value;return t(n)}})),r.a.createElement(b.a,{clearing:!0}),r.a.createElement("div",{className:"stats-container"},r.a.createElement("div",{className:"points-text"},"".concat(a.points," pts")),r.a.createElement("div",{className:"team-record"},r.a.createElement(O.f,{width:"100%",height:250},r.a.createElement(O.e,null,r.a.createElement(O.d,{data:[{name:"Wins",value:a.record.wins,fill:j(a.id)},{name:"Losses",value:a.record.losses,fill:A(a.id)},{name:"OT Losses",value:a.record.otl,fill:w(a.id)}],dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:55,outerRadius:80,label:n}))))),r.a.createElement(b.a,{clearing:!0}),r.a.createElement("div",{className:"rankings-container"},r.a.createElement("div",{className:"rankings-header"},"Rankings"),r.a.createElement(O.f,{width:"100%",height:250},r.a.createElement(O.b,{data:o,layout:"vertical"},r.a.createElement(O.c,null),r.a.createElement(O.h,{type:"number",domain:[1,31],tickFormatter:function(e){return"".concat(32-e).concat(function(e){if([11,12,13].includes(e))return"th";var a=e%10;return 1===a?"st":2===a?"nd":3===a?"rd":"th"}(32-e))}}),r.a.createElement(O.i,{type:"category",dataKey:"name"}),r.a.createElement(O.g,null),r.a.createElement(O.a,{dataKey:"value",fill:j(a.id)}))))))},x=function(e){var a=e.teamId1,t=e.teamId2,o=Object(n.useState)(!1),c=Object(l.a)(o,2),i=c[0],s=c[1],m=Object(n.useState)(null),d=Object(l.a)(m,2),u=d[0],E=d[1],h=Object(n.useState)(null),C=Object(l.a)(h,2),p=C[0],N=C[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(v.a.mark((function e(){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,k.a.get("/comparison/team",{params:{team1:a,team2:t}});case 3:n=e.sent,r=n.data,E(r.team1),N(r.team2),s(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,t]);var O=function(){var e=Object(f.a)(v.a.mark((function e(a){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/comparison/team",{params:{team1:a}});case 2:t=e.sent,n=t.data,E(n.team1);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),j=function(){var e=Object(f.a)(v.a.mark((function e(a){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/comparison/team",{params:{team2:a}});case 2:t=e.sent,n=t.data,N(n.team2);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(y.a,{loading:i},!i&&!!u&&!!p&&r.a.createElement(g.a,{stackable:!0,columns:2,relaxed:"very"},r.a.createElement(F,{teamData:u,onChange:O}),r.a.createElement(F,{teamData:p,onChange:j})),r.a.createElement(b.a,{vertical:!0,className:"team-divider"},"VS"))},D=function(){return Object.values(C).map((function(e){return{text:e.name,key:e.id,value:e.id}})).sort((function(e,a){return e.text<a.text?-1:e.text>a.text?1:0}))},B=function(){var e=Object(s.h)(),a=Object(s.g)(),t=Object(n.useState)(""),o=Object(l.a)(t,2),c=o[0],i=o[1],E=Object(n.useState)(""),C=Object(l.a)(E,2),p=C[0],v=C[1],f=Object(n.useState)(!1),y=Object(l.a)(f,2),g=y[0],b=y[1],N=D();Object(n.useEffect)((function(){var t=h.a.parse(e.search),n=t.teamId1,r=t.teamId2;n&&r?"string"===typeof n&&N.find((function(e){return e.value===Number(n)}))&&"string"===typeof r&&N.find((function(e){return e.value===Number(r)}))?(i(n),v(r),b(!0)):a.push({search:""}):n||r?a.push({search:""}):b(!1)}),[a,e.search,N]);return g?r.a.createElement(u.a,{animation:"browse",duration:500},r.a.createElement(x,{teamId1:c,teamId2:p})):r.a.createElement(u.a,{animation:"browse",duration:500},r.a.createElement("div",{className:"comparison-page"},r.a.createElement("div",{className:"comparison-page-home-content"},r.a.createElement("div",{className:"header"},"Compare Hockey Teams Head to Head"),r.a.createElement("div",{className:"sub-header"},"Choose two teams to see how they compare"),r.a.createElement("div",{className:"action-container"},r.a.createElement(m.a,{className:"select-team-action",placeholder:"Select a team",selection:!0,options:N,onChange:function(e,a){var t=a.value;return i(t)},value:c?Number(c):""}),r.a.createElement(m.a,{placeholder:"Select a team",className:"select-team-action",selection:!0,options:N,onChange:function(e,a){var t=a.value;return v(t)}}),r.a.createElement(d.a,{primary:!0,className:"select-team-action",onClick:function(){a.push({search:"?teamId1=".concat(c,"&teamId2=").concat(p)})},disabled:!c||!p},"Compare")))))},I=t(545),P=t(266),R=t(267),T=t(131),L=t(124),H=(t(534),function(e){var a=e.teamId,t=Object(n.useState)(!1),o=Object(l.a)(t,2),c=o[0],i=o[1],s=Object(n.useState)(null),m=Object(l.a)(s,2),d=m[0],u=m[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,k.a.get("/comparison/details",{params:{teamId:a}});case 3:t=e.sent,n=t.data,u(n.teamData),i(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]);return r.a.createElement(y.a,{loading:c,className:"team-segment"},!c&&!!d&&r.a.createElement("div",null,r.a.createElement("div",{className:"header-container",style:{backgroundColor:j(a)}},r.a.createElement(I.a,{as:"h1",style:{backgroundColor:j(a),color:A(a)}},S(a)),r.a.createElement("div",{className:"team-info-container"},r.a.createElement("div",{className:"team-info-component"},function(){var e="The ".concat(S(a)," have been playing since ").concat(d.info.firstYearOfPlay,". ");return e+="They are located in ".concat(d.info.city," and currently play in ").concat(d.info.venue,".")}()),r.a.createElement("div",{className:"team-info-component"},"Division: ".concat(d.info.division)),r.a.createElement("div",{className:"team-info-component"},"Conference: ".concat(d.info.conference)))),r.a.createElement(P.a,null,r.a.createElement(R.a,null,r.a.createElement(T.a,null,r.a.createElement(L.a,null,"Points"),r.a.createElement("div",{className:"text-card-content"},"".concat(d.points," points")))),r.a.createElement(R.a,null,r.a.createElement(T.a,null,r.a.createElement(L.a,null,"Record"),r.a.createElement("div",{className:"text-card-content"},"".concat(d.record.wins," - ").concat(d.record.losses," - ").concat(d.record.otl)))),r.a.createElement(R.a,null,r.a.createElement(T.a,null,r.a.createElement(L.a,null,"Goals For Rank"),r.a.createElement("div",{className:"text-card-content"},d.rankings.goalsFor))),r.a.createElement(R.a,null,r.a.createElement(T.a,null,r.a.createElement(L.a,null,"Goals Against Rank"),r.a.createElement("div",{className:"text-card-content"},d.rankings.goalsAgainst))),r.a.createElement(R.a,null,r.a.createElement(T.a,null,r.a.createElement(L.a,null,"Power Play Rank"),r.a.createElement("div",{className:"text-card-content"},d.rankings.powerPlay))))))}),J=function(){var e=Object(s.h)(),a=Object(s.g)(),t=D(),o=Object(n.useState)(""),c=Object(l.a)(o,2),i=c[0],u=c[1],E=Object(n.useState)(!1),C=Object(l.a)(E,2),p=C[0],v=C[1];return Object(n.useEffect)((function(){var n=h.a.parse(e.search).teamId;n?"string"===typeof n&&t.find((function(e){return e.value===Number(n)}))?(u(n),v(!0)):a.push({search:""}):v(!1)}),[a,e.search,t,i]),p?r.a.createElement(H,{teamId:i}):r.a.createElement(y.a,{className:"team-page"},r.a.createElement("div",{className:"team-page-home-content"},r.a.createElement("div",{className:"header"},"Select a team"),r.a.createElement("div",{className:"action-container"},r.a.createElement(m.a,{className:"select-team-action",placeholder:"Select a team",selection:!0,options:t,onChange:function(e,a){var t=a.value;return u(t)}}),r.a.createElement(d.a,{primary:!0,className:"select-team-action",onClick:function(){a.push({search:"?teamId=".concat(i)})},disabled:!i},"Go"))))},G=t(176),K=t(541),W=t(549),M=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)([]),i=Object(l.a)(c,2),s=i[0],m=i[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(v.a.mark((function e(){var a,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,k.a.get("/rankings");case 3:a=e.sent,t=a.data,m(t.ranking),o(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return t?r.a.createElement("div",{className:"ranking-page"},r.a.createElement("div",{className:"ranking-header"},"Rankings"),r.a.createElement(K.a,{active:!0})):r.a.createElement("div",{className:"ranking-page"},r.a.createElement("div",{className:"ranking-header"},"Rankings"),r.a.createElement(W.a,{divided:!0},s.map((function(e,a){return r.a.createElement(G.a,{key:"team-".concat(a)},r.a.createElement("div",{className:"ranking-list-item"},r.a.createElement("div",{className:"item-left"},r.a.createElement("div",{className:"rank-display"},"#".concat(e.rank)),r.a.createElement("div",{className:"team-display"},r.a.createElement("div",null,function(e){for(var a=0,t=Object.values(C);a<t.length;a++){var n=t[a];if(n.id.toString()===e)return n.name}return""}(e.id)))),r.a.createElement("div",{className:"item-right"},"".concat(e.points," pts"))))}))))};var Y=function(){var e=Object(n.useState)(),a=Object(l.a)(e,2),t=a[0],o=a[1];return r.a.createElement("section",{className:"hero is-fullheight has-background-white-ter"},r.a.createElement(i.a,null,r.a.createElement("div",{className:"hero-head"},r.a.createElement("div",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("div",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false",onClick:function(){o(!t)}},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"navbar-menu ".concat(t?"is-active":""," ")},r.a.createElement("div",{className:"navbar-start"},r.a.createElement(i.b,{to:"/comparison",className:"navbar-item",activeClassName:"has-text-black has-text-weight-medium",onClick:function(){o(!1)}},"Head to Head"),r.a.createElement(i.b,{to:"/teams",className:"navbar-item",activeClassName:"has-text-black has-text-weight-medium",onClick:function(){o(!1)}},"Teams"),r.a.createElement(i.b,{to:"/rankings",className:"navbar-item",activeClassName:"has-text-black has-text-weight-medium"},"Rankings"))))),r.a.createElement("div",{className:"hero-body"},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/comparison",component:B}),r.a.createElement(s.b,{path:"/teams",component:J}),r.a.createElement(s.b,{path:"/rankings",component:M}),r.a.createElement(s.a,{from:"/",to:"/comparison"}))),r.a.createElement("div",{className:"hero-foot has-text-dark has-text-centered"},r.a.createElement("div",null,"Credits to the NHL and their stats API for the data used to construct the dashboards. ",r.a.createElement("br",null),"Credits to ",r.a.createElement("a",{href:"https://teamcolorcodes.com/nhl-team-color-codes/"},"Team Color Codes")," for collecting the team colors that were used on this site. ",r.a.createElement("br",null),"See the full project on ",r.a.createElement("a",{href:"https://github.com/SamirJoshi/hockey-dashboard"},"Github")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[298,1,2]]]);
//# sourceMappingURL=main.52dc1d0a.chunk.js.map