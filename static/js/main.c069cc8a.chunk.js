(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports={NJD:{id:1,name:"New Jersey Devils",primaryColor:"#CE1126",secondarColor:"#FFFFFF",thirdColor:"#000000"},NYI:{id:2,name:"New York Islanders",primaryColor:"#00539b",secondarColor:"#F47d30",thirdColor:"#FFFFFF"},NYR:{id:3,name:"New York Rangers",primaryColor:"#0038A8",secondarColor:"#CE1126",thirdColor:"#FFFFFF"},PHI:{id:4,name:"Philadelphia Flyers",primaryColor:"#F74902",secondarColor:"#000000",thirdColor:"#FFFFFF"},PIT:{id:5,name:"Pittsburgh Penguins",primaryColor:"#000000",secondarColor:"#CFC493",thirdColor:"#FCB514"},BOS:{id:6,name:"Boston Bruins",primaryColor:"#FFB81C",secondaryColor:"#000000",thirdColor:"#ffffff"},BUF:{id:7,name:"Buffalo Sabres",primaryColor:"#002654",secondaryColor:"#FCB514",thirdColor:"#ADAFAA"},MTL:{id:8,name:"Montreal Canadiens",primaryColor:"#AF1E2D",secondaryColor:"#192168",thirdColor:"#FFFFFF"},OTT:{id:9,name:"Ottawa Senators",primaryColor:"#E31837",secondaryColor:"#C69214",thirdColor:"#000000"},TOR:{id:10,name:"Toronto Maple Leafs",primaryColor:"#003E7E",secondaryColor:"#FFFFFF",thirdColor:"#000000"},CAR:{name:"Carolina Hurricanes",id:12,primaryColor:"#CC0000",secondarColor:"#000000",thirdColor:"#A2AAAD"},FLA:{id:13,name:"Florida Panthers",primaryColor:"#041E42",secondarColor:"#C8102E",thirdColor:"#B9975B"},TBL:{name:"Tampa Bay Lightning",id:14,primaryColor:"#002868",secondarColor:"#FFFFFF",thirdColor:"#000000"},WSH:{id:14,name:"Washington Capitals",primaryColor:"#041E42",secondarColor:"#C8102E",thirdColor:"#FFFFFF"},CHI:{id:16,name:"Chicago Blackhawks",primaryColor:"#CF0A2C",secondarColor:"#FFD100",thirdColor:"#000000"},DET:{id:17,name:"Detroit Red Wings",primaryColor:"#CE1126",secondarColor:"#FFFFFF",thirdColor:"#000000"},NSH:{id:18,name:"Nashville Predators",primaryColor:"#FFB81C",secondaryColor:"#041E42",thirdColor:"#FFFFFF"},STL:{id:19,name:"St. Louis Blues",primaryColor:"#002F87",secondaryColor:"#FCB514",thirdColor:"#041E42"},CGY:{id:20,name:"Calgary Flames",primaryColor:"#C8102E",secondaryColor:"#F1BE48",thirdColor:"#111111"},COL:{id:21,name:"Colorado Avalanche",primaryColor:"#6F263D",secondaryColor:"#236192",thirdColor:"#A2AAAD"},EDM:{id:22,name:"Edmonton Oilers",primaryColor:"#041E42",secondaryColor:"#FF4C00",thirdColor:"#FFFFFF"},VAN:{id:23,name:"Vancouver Canucks",primaryColor:"#001F5B",secondaryColor:"#00843D",thirdColor:"#071C2C"},ANA:{id:24,name:"Anaheim Ducks",primaryColor:"#F47A38",secondaryColor:"#B09862",thirdColor:"#C4CED4",fourthColor:"#010101"},DAL:{id:25,name:"Dallas Stars",primaryColor:"#006847",secondaryColor:"#8F8F8C",thirdColor:"#111111"},LAK:{id:26,name:"Los Angeles Kings",primaryColor:"#111111",secondaryColor:"#A2AAAD",thirdColor:"#FFFFFF"},SJS:{id:28,name:"San Jose Sharks",primaryColor:"#006D75",secondaryColor:"#EA7200",thirdColor:"#000000",fourthColor:"#FFFFFF"},CBJ:{id:29,name:"Columbus Blue Jackets",primaryColor:"#002654",secondaryColor:"#CE1126",thirdColor:"#A4A9AD"},MIN:{id:30,name:"Minnesota Wild",primaryColor:"#A6192E",secondaryColor:"#154734",thirdColor:"#DDCBA4"},WPG:{id:52,name:"Winnipeg Jets",primaryColor:"#041E42",secondaryColor:"#AC162C",thirdColor:"#7B303E",fourthColor:"#55565A"},ARI:{id:53,name:"Arizona Coyotes",primaryColor:"#8C2633",secondaryColor:"#e2d6b5",thirdColor:"#111111"},VGK:{id:54,name:"Vegas Golden Knights",primaryColor:"#B4975A",secondaryColor:"#333f42",thirdColor:"#c8102E",fourthColor:"#000000"}}},16:function(e,a,t){},48:function(e,a,t){e.exports=t(95)},53:function(e,a,t){},95:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),o=t(15),l=t.n(o),s=(t(53),t(13)),c=t.n(s),i=t(29),m=t(20),d=t(5),u=t(6),p=t(8),h=t(7),C=t(9),y=(t(16),t(2)),F=t(10),f=t(47),v=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).toggleDropdown=function(){return t.setState({dropdownOpen:!t.state.dropdownOpen})},t.getDropdownTitle=function(){return t.props.selectedTeam&&{label:F[t.props.selectedTeam].name,value:t.props.selectedTeam}},t.generateOptions=function(){return Object.keys(F).map(function(e){return{label:F[e].name,value:e}})},t.state={dropdownOpen:!1},t}return Object(C.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(f.a,{className:"team-select-dropdown",value:this.getDropdownTitle(),onChange:function(a){var t=a.value;return e.props.selectTeam(t,e.props.panel)},options:this.generateOptions()})}}]),a}(r.Component),E=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).getTeamTitle=function(){return t.props.selectedTeam?F[t.props.selectedTeam].name:"Select a team"},t.renderTeamRecord=function(){var e=t.props,a=e.selectedTeam,r=e.teamStats,o=e.colors,l=t.state.recordValue;if(l&&({}[l.label.name]=l.label.value),!a||!r)return n.a.createElement("div",null);var s=r.stats.stat.wins,c=r.stats.stat.losses,i=r.stats.stat.ot,m=r.stats.stat.gamesPlayed;return n.a.createElement("div",null,n.a.createElement("div",{className:"record-text-in-chart"},s,"-",c,"-",i),n.a.createElement(y.e,{innerRadius:65,radius:95,colorType:"literal",onValueMouseOver:function(e){return t.setState({recordValue:e})},onSeriesMouseOut:function(e){return t.setState({recordValue:!1})},data:[{angle:s/m*360,color:o.primaryColor,label:s},{angle:c/m*360,color:o.secondaryColor,label:c},{angle:i/m*360,color:o.tertiaryColor,label:i}],width:200,height:200},l&&n.a.createElement(y.a,{value:l})))},t.renderTeamPoints=function(){var e=t.props,a=e.selectedTeam,r=e.teamStats;return a&&r?n.a.createElement("div",{className:"points-text"},"".concat(r.stats.stat.pts," pts")):""},t.getRankingsData=function(e){var a=[];return a.push({x:31-parseInt(e.rankings.stat.goalsPerGame),y:"Goals For"}),a.push({x:31-parseInt(e.rankings.stat.goalsAgainstPerGame),y:"Goals Against"}),a.push({x:31-parseInt(e.rankings.stat.powerPlayPercentage),y:"Power Play"}),a.push({x:31-parseInt(e.rankings.stat.penaltyKillPercentage),y:"Penalty Kill"}),a.push({x:31-parseInt(e.rankings.stat.faceOffWinPercentage),y:"Face Off %"}),a},t.renderRankingsChart=function(){var e=t.props,a=e.selectedTeam,r=e.teamStats,o=e.colors;return a&&r?n.a.createElement(y.h,{yType:"ordinal",margin:{left:100},width:550,height:250,xDomain:[0,32],color:o.primaryColor},n.a.createElement(y.c,null),n.a.createElement(y.g,null),n.a.createElement(y.i,null),n.a.createElement(y.b,{data:t.getRankingsData(r)})):""},t.renderTeamStats=function(){return t.props.selectedTeam?n.a.createElement("div",null,n.a.createElement("div",{className:"stat-container split-view-stats"},n.a.createElement("div",{className:"split-view-stat"},n.a.createElement("div",{className:"stat-header"},n.a.createElement("h5",null,"Points")),n.a.createElement("div",{className:"record-text"},t.renderTeamPoints())),n.a.createElement("div",{className:"split-view-stat"},n.a.createElement("div",{className:"stat-header"},n.a.createElement("h5",null,"Record")),n.a.createElement("div",{className:"record-text"},t.renderTeamRecord()))),n.a.createElement("div",{className:"stat-container"},n.a.createElement("h5",null,"Rankings"),t.renderRankingsChart())):n.a.createElement("div",{className:"no-team-selected-panel"},".")},t.state={recordValue:!1},t}return Object(C.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props,a=e.panel,t=e.selectTeam,r=e.selectedTeam;return n.a.createElement("div",{className:"team-container",style:{justifyContent:1===a?"flex-end":"flex-start"}},n.a.createElement("div",{className:"team-content-container"},n.a.createElement("div",{className:"team-header"},n.a.createElement("h3",null,this.getTeamTitle()),n.a.createElement(v,{panel:a,selectedTeam:r,selectTeam:t})),this.renderTeamStats()))}}]),a}(r.Component),T=t(12),g=function(e){function a(){var e,t;Object(d.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(o)))).formatShotsData=function(){var e=t.props,a=e.teamPanel1Data,r=e.teamPanel2Data;return a.selectedTeam&&r.selectedTeam?{dataTeamOne:a.lastFive.map(function(e,a){return{x:a+1,y:e.shots}}),dataTeamTwo:r.lastFive.map(function(e,a){return{x:a+1,y:e.shots}})}:{dataTeamOne:[],dataTeamTwo:[]}},t.shotsComparison=function(){var e=t.props,a=e.teamPanel1Data,r=e.teamPanel2Data,o=t.formatShotsData(),l=o.dataTeamOne,s=o.dataTeamTwo,c=[].concat(Object(T.a)(l),Object(T.a)(s)).reduce(function(e,a){return a.y>e?a.y:e},0);if(!a.selectedTeam||!r.selectedTeam)return n.a.createElement("div",null,"No data");var i=a.colors.primaryColor,m=r.colors.primaryColor;return n.a.createElement(y.h,{yDomain:[0,c+5],width:400,height:300},n.a.createElement(y.f,null),n.a.createElement(y.c,null),n.a.createElement(y.g,null),n.a.createElement(y.i,null),n.a.createElement(y.d,{className:"linemark-series-example",style:{strokeWidth:"3px"},lineStyle:{stroke:i},markStyle:{stroke:i,fill:i},data:l}),n.a.createElement(y.d,{className:"linemark-series-example",style:{strokeWidth:"3px"},lineStyle:{stroke:m},markStyle:{stroke:m,fill:m},data:s}))},t}return Object(C.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"comparison-stat-container"},n.a.createElement("h5",null,"Shots"),this.shotsComparison())}}]),a}(r.Component),k=function(e){function a(){var e,t;Object(d.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(o)))).formatShotsData=function(){var e=t.props,a=e.teamPanel1Data,r=e.teamPanel2Data;return a.selectedTeam&&r.selectedTeam?{dataTeamOne:a.lastFive.map(function(e,a){return{x:a+1,y:e.hits}}),dataTeamTwo:r.lastFive.map(function(e,a){return{x:a+1,y:e.hits}})}:{dataTeamOne:[],dataTeamTwo:[]}},t.hitsComparison=function(){var e=t.props,a=e.teamPanel1Data,r=e.teamPanel2Data,o=t.formatShotsData(),l=o.dataTeamOne,s=o.dataTeamTwo,c=[].concat(Object(T.a)(l),Object(T.a)(s)).reduce(function(e,a){return a.y>e?a.y:e},0);if(!a.selectedTeam||!r.selectedTeam)return n.a.createElement("div",null,"No data");var i=a.colors.primaryColor,m=r.colors.primaryColor;return n.a.createElement(y.h,{yDomain:[0,c+5],width:400,height:300},n.a.createElement(y.f,null),n.a.createElement(y.c,null),n.a.createElement(y.g,null),n.a.createElement(y.i,null),n.a.createElement(y.d,{className:"linemark-series-example",style:{strokeWidth:"3px"},lineStyle:{stroke:i},markStyle:{stroke:i,fill:i},data:l}),n.a.createElement(y.d,{className:"linemark-series-example",style:{strokeWidth:"3px"},lineStyle:{stroke:m},markStyle:{stroke:m,fill:m},data:s}))},t}return Object(C.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"comparison-stat-container"},n.a.createElement("h5",null,"Hits"),this.hitsComparison())}}]),a}(r.Component),b=function(e){function a(){var e,t;Object(d.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(o)))).formatShotsData=function(){var e=t.props,a=e.teamPanel1Data,r=e.teamPanel2Data;return a.selectedTeam&&r.selectedTeam?{dataTeamOne:a.lastFive.map(function(e,a){return{x:a+1,y:e.takeaways}}),dataTeamTwo:r.lastFive.map(function(e,a){return{x:a+1,y:e.takeaways}})}:{dataTeamOne:[],dataTeamTwo:[]}},t.shotsComparison=function(){var e=t.props,a=e.teamPanel1Data,r=e.teamPanel2Data,o=t.formatShotsData(),l=o.dataTeamOne,s=o.dataTeamTwo,c=[].concat(Object(T.a)(l),Object(T.a)(s)).reduce(function(e,a){return a.y>e?a.y:e},0);if(!a.selectedTeam||!r.selectedTeam)return n.a.createElement("div",null,"No data");var i=a.colors.primaryColor,m=r.colors.primaryColor;return n.a.createElement(y.h,{yDomain:[0,c+5],width:400,height:300},n.a.createElement(y.f,null),n.a.createElement(y.c,null),n.a.createElement(y.g,null),n.a.createElement(y.i,null),n.a.createElement(y.d,{className:"linemark-series-example",style:{strokeWidth:"3px"},lineStyle:{stroke:i},markStyle:{stroke:i,fill:i},data:l}),n.a.createElement(y.d,{className:"linemark-series-example",style:{strokeWidth:"3px"},lineStyle:{stroke:m},markStyle:{stroke:m,fill:m},data:s}))},t}return Object(C.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"comparison-stat-container"},n.a.createElement("h5",null,"Takeaways"),this.shotsComparison())}}]),a}(r.Component),D=function(e){var a={primaryColor:"#000",secondaryColor:"#000",tertiaryColor:"#000",fourthColor:"#000"};return e&&(a.primaryColor=F[e].primaryColor,a.secondaryColor=F[e].secondaryColor||"#000",a.tertiaryColor=F[e].thirdColor||"#000"),a},w=t(30),O=t.n(w),S=t(37),A=function(){var e=Object(m.a)(c.a.mark(function e(a){var t,r,n,o,l,s,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=O()().subtract(1,"days").format("YYYY-MM-DD"),r=O()().subtract(1,"months").format("YYYY-MM-DD"),n="https://statsapi.web.nhl.com/api/v1/schedule?teamId=".concat(a,"&startDate=").concat(r,"&endDate=").concat(t),e.next=5,S.get(n);case 5:return o=e.sent,l=o.data.dates.slice(-5).map(function(e){return e.games[0].gamePk}),s=l.map(function(e){return S.get("https://statsapi.web.nhl.com/api/v1/game/".concat(e,"/boxscore"))}),e.next=10,Promise.all(s);case 10:return i=e.sent,e.abrupt("return",i.map(function(e){var t=e.data.teams;return t.away.team.id===a?t.away.teamStats.teamSkaterStats:t.home.teamStats.teamSkaterStats}));case 12:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),P=t(37),N=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).selectTeam=function(){var e=Object(m.a)(c.a.mark(function e(a,r){var n,o,l,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=F[a].id,e.next=4,P.get("https://statsapi.web.nhl.com/api/v1/teams/".concat(n,"?expand=team.stats"));case 4:return o=e.sent,l=o.data.teams[0].teamStats[0].splits,e.next=8,A(n);case 8:s=e.sent,t.setState(Object(i.a)({},"teamPanel".concat(r,"Data"),{selectedTeam:a,colors:D(a),teamStats:{stats:l[0],rankings:l[1]},lastFive:s})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t.setState(Object(i.a)({},"teamPanel".concat(r,"Data"),{selectedTeam:null,colors:{},teamStats:null,lastFive:[]}));case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(a,t){return e.apply(this,arguments)}}(),t.state={teamPanel1Data:{},teamPanel2Data:{}},t}return Object(C.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.state,a=e.teamPanel1Data,t=e.teamPanel2Data;return n.a.createElement("div",null,n.a.createElement("div",{className:"App",style:{marginBottom:0,backgroundImage:"url(".concat("/background2.jpg",")"),backgroundSize:"cover"}},!(a.selectedTeam||t.selectedTeam)&&n.a.createElement("div",{className:"welcome-header-container"},n.a.createElement("div",{className:"welcome-header"},n.a.createElement("h1",null,"Hockey Dashboards"),n.a.createElement("p",null,"Choose two teams to see how they compare. Show that your team is going to win!"))),n.a.createElement("div",{className:"team-comparison"},n.a.createElement(E,{panel:1,selectTeam:this.selectTeam,selectedTeam:a.selectedTeam,colors:a.colors,lastFive:a.lastFive,teamStats:a.teamStats}),n.a.createElement(E,{panel:2,selectTeam:this.selectTeam,selectedTeam:t.selectedTeam,colors:t.colors,lastFive:t.lastFive,teamStats:t.teamStats})),!(!a.selectedTeam||!t.selectedTeam)&&n.a.createElement("div",{className:"charts-and-trends-container"},n.a.createElement(g,{teamPanel1Data:a,teamPanel2Data:t}),n.a.createElement(k,{teamPanel1Data:a,teamPanel2Data:t}),n.a.createElement(b,{teamPanel1Data:a,teamPanel2Data:t}))),n.a.createElement("div",{className:"credits-and-info-container"},"Credits to the NHL and their stats API for the data used to construct the dashboards. Made with ",n.a.createElement("span",null,"\ud83e\udd88")," by it me sj."))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(93),t(94);l.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.c069cc8a.chunk.js.map