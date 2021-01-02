(this["webpackJsonptechnical-challenge"]=this["webpackJsonptechnical-challenge"]||[]).push([[0],{23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),r=a(10),l=a.n(r),i=(a(23),a(4)),o=a(5),d=a(3),u=a(7),j=a(6),m=a(9),h={players:["Player 1","Player 2","Player 3","Player 4","Player 5","Player 6","Player 7","Player 8","Player 9","Player 10"],teamA:[],teamB:[],teamSettings:[{details:{name:"Team One",colour:"1"}},{details:{name:"Team Two",colour:"2"}}]},b=a(8),O=a(2),p=function(e,t){switch(t.type){case"SET_TEAM_COLOUR":var a=t.payload.index,s=Object(O.a)(Object(O.a)({},e.teamSettings[a].details),{},{colour:t.payload.colour}),n=Object(O.a)(Object(O.a)({},e.teamSettings[a]),{},{details:s}),c=Object(O.a)(Object(O.a)({},e.teamSettings),{},Object(b.a)({},a,n));return Object(O.a)(Object(O.a)({},e),{},{teamSettings:c});case"SET_TEAM_NAME":var r=t.payload.index,l=Object(O.a)(Object(O.a)({},e.teamSettings[r].details),{},{name:t.payload.name}),i=Object(O.a)(Object(O.a)({},e.teamSettings[r]),{},{details:l}),o=Object(O.a)(Object(O.a)({},e.teamSettings),{},Object(b.a)({},r,i));return Object(O.a)(Object(O.a)({},e),{},{teamSettings:o});case"SET_TEAM_A":return Object(O.a)(Object(O.a)({},e),{},{teamA:t.payload});case"SET_TEAM_B":return Object(O.a)(Object(O.a)({},e),{},{teamB:t.payload});case"SETTINGS_COMPLETE":return Object(O.a)(Object(O.a)({},e),{},{settingsComplete:!0});case"SETTINGS_INCOMPLETE":return Object(O.a)(Object(O.a)({},e),{},{settingsComplete:!1});case"UPDATE_PLAYERS":return Object(O.a)(Object(O.a)({},e),{},{players:t.payload});case"RESET":return Object(O.a)({},h);default:return e}},S=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.b,Object(m.c)(p,h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),g=function(e,t){var a=S.getState().teamSettings;return 0===e?a[1].details.colour!==t:a[0].details.colour!==t},T=function(e,t){var a=S.getState().teamSettings;return 0===e?a[1].details.name!==t:a[0].details.name!==t};var x=function(e,t){S.dispatch(function(e,t){return{type:"SET_TEAM_COLOUR",payload:{index:e,colour:t}}}(e,t))};var f=function(e,t){S.dispatch(function(e,t){return{type:"SET_TEAM_NAME",payload:{index:e,name:t}}}(e,t))},N=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleTeamName=function(e){var t=e.currentTarget.value;""===e.currentTarget.value?(t=s.props.defaultTeamName,s.setState({nameEmpty:!0}),s.setState({name:s.props.defaultTeamName})):(s.setState({nameEmpty:!1}),s.setState({nameClash:!1}),T(s.props.team,e.currentTarget.value)?(s.setState({nameClash:!1}),s.setState({name:e.currentTarget.value}),f(s.props.team,e.currentTarget.value)):(s.setState({nameClash:!0}),s.setState({name:e.currentTarget.value}))),t.length>16&&(t=t.slice(0,16)+"..."),f(s.props.team,t)},s.handleTeamColour=function(e){s.setState({colour:e.currentTarget.value}),g(s.props.team,e.currentTarget.value)?(s.setState({colourClash:!1}),s.setState({colour:e.currentTarget.value}),x(s.props.team,e.currentTarget.value)):s.setState({colourClash:!0})},s.state={name:S.getState().teamSettings[s.props.team].details.name,colour:S.getState().teamSettings[s.props.team].details.colour,colourClash:!1,nameClash:!1,nameEmpty:!1},s.handleTeamName=s.handleTeamName.bind(Object(d.a)(s)),s.handleTeamColour=s.handleTeamColour.bind(Object(d.a)(s)),s}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.colourClash,t=this.state.nameClash,a=this.state.nameEmpty;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("h3",{children:[this.props.defaultTeamName," Name"]}),Object(s.jsx)("p",{className:a?"errorMessage":"errorMessageHidden",children:"Please enter a name"}),Object(s.jsx)("p",{className:t?"errorMessage":"errorMessageHidden",children:"Team names must be different"}),Object(s.jsx)("input",{onChange:this.handleTeamName,defaultValue:this.state.name}),Object(s.jsxs)("section",{className:"kitColourSpacer",children:[Object(s.jsxs)("h3",{children:[this.props.defaultTeamName," Kit Colour"]}),Object(s.jsx)("p",{className:e?"errorMessage":"errorMessageHidden",children:" Teams must have different kit colours"}),Object(s.jsxs)("div",{className:"kitButtonHolder",children:[Object(s.jsx)("button",{value:"1",className:"1"===this.state.colour?"kitButton kit1 kitSelected":"kitButton kit1",onClick:this.handleTeamColour}),Object(s.jsx)("button",{value:"2",className:"2"===this.state.colour?"kitButton kit2 kitSelected":"kitButton kit2",onClick:this.handleTeamColour}),Object(s.jsx)("button",{value:"3",className:"3"===this.state.colour?"kitButton kit3 kitSelected":"kitButton kit3",onClick:this.handleTeamColour}),Object(s.jsx)("button",{value:"4",className:"4"===this.state.colour?"kitButton kit4 kitSelected":"kitButton kit4",onClick:this.handleTeamColour}),Object(s.jsx)("button",{value:"5",className:"5"===this.state.colour?"kitButton kit5 kitSelected":"kitButton kit5",onClick:this.handleTeamColour})]})]})]})}}]),a}(c.a.Component),v=a(17);function E(e,t){S.dispatch(function(e,t){return{type:e,payload:t}}(e,t))}var C=function(){var e=S.getState().players;!function(e){var t=Math.ceil(e.length/2),a=e.splice(0,t),s=e.splice(-t);E("SET_TEAM_A",a),E("SET_TEAM_B",s)}(function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*t),s=e[t];e[t]=e[a],e[a]=s}return e}(Object(v.a)(e)))};var y=function(e){S.dispatch(function(e){return{type:"UPDATE_PLAYERS",payload:e}}(e))};var k=function(){S.dispatch({type:"RESET"})},_=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleChange=function(e,t){var a,n=[];for(a=0;a<s.state.existingPlayers.length;a+=1)a===e?""===t.currentTarget.value?n.push("Name not set"):n.push(t.currentTarget.value.slice(0,16)+"..."):n.push(s.state.existingPlayers[a]);s.setState({existingPlayers:n})},s.handleSubmit=function(e){e.preventDefault(),y(s.state.existingPlayers),C(),S.dispatch({type:"SETTINGS_COMPLETE"})},s.handleReset=function(e){e.preventDefault(),k("RESET"),window.location.reload()},s.state={playerName:"",existingPlayers:S.getState().players,settingsComplete:!1},s.handleChange=s.handleChange.bind(Object(d.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(d.a)(s)),s.handleReset=s.handleReset.bind(Object(d.a)(s)),s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("section",{children:[Object(s.jsx)("div",{className:"playerColumns cardGreen",children:this.state.existingPlayers.map((function(t,a){return Object(s.jsxs)("div",{className:"playerRows",children:[Object(s.jsxs)("h3",{className:"playerLabel",children:["Player ",a+1]}),Object(s.jsx)("input",{defaultValue:t,index:a,onBlur:e.handleChange.bind(e,a),onFocus:function(e){return e.target.value=""}})]},a)}))}),Object(s.jsxs)("footer",{className:"cardBottom playersButtons",children:[Object(s.jsx)("button",{onClick:this.handleReset,className:"pillButton",children:"Reset all"}),Object(s.jsx)("button",{type:"submit",onClick:this.handleSubmit,className:"pillButton",children:"Generate Teams"})]})]})}}]),a}(n.Component),B=function(){return Object(s.jsxs)("section",{children:[Object(s.jsxs)("section",{className:"cardHolder",children:[Object(s.jsx)("header",{className:"cardTop",children:Object(s.jsx)("h2",{children:"Team Settings"})}),Object(s.jsxs)("div",{className:"cardGreen",children:[Object(s.jsx)(N,{team:0,defaultTeamName:"Team One"}),Object(s.jsx)("div",{className:"teamsDivider"}),Object(s.jsx)(N,{team:1,defaultTeamName:"Team Two"})]}),Object(s.jsx)("footer",{className:"cardBottom"})]}),Object(s.jsxs)("section",{className:"cardHolder",children:[Object(s.jsx)("header",{className:"cardTop",children:Object(s.jsx)("h2",{children:"Enter players"})}),Object(s.jsx)("div",{children:Object(s.jsx)(_,{})})]})]})},P=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleOpenSettings=function(e){S.dispatch({type:"SETTINGS_INCOMPLETE"})},s.handleReshuffle=function(e){e.preventDefault(),C(),s.setState({teamA:S.getState().teamA,teamB:S.getState().teamB})},s.state={settingsComplete:!0},s.handleOpenSettings=s.handleOpenSettings.bind(Object(d.a)(s)),s.handleReshuffle=s.handleReshuffle.bind(Object(d.a)(s)),s}return Object(o.a)(a,[{key:"render",value:function(){var e=S.getState().teamA,t=S.getState().teamB,a=S.getState().teamSettings[0].details.name,n=S.getState().teamSettings[1].details.name,c="chosenKitColour kit"+S.getState().teamSettings[0].details.colour,r="chosenKitColour kit"+S.getState().teamSettings[1].details.colour;return Object(s.jsxs)("section",{children:[Object(s.jsxs)("h2",{children:[a," VS. ",n]}),Object(s.jsxs)("div",{className:"twoLists",children:[Object(s.jsxs)("section",{className:"cardHolder",children:[Object(s.jsxs)("header",{className:"cardTop kitAndName",children:[Object(s.jsx)("h3",{className:"h3alternate",children:a}),Object(s.jsx)("div",{className:c})]}),Object(s.jsx)("div",{className:"cardWhite",children:e.map((function(e,t){return Object(s.jsx)("div",{children:Object(s.jsx)("p",{children:e})},t)}))}),Object(s.jsx)("footer",{className:"cardBottom"})]}),Object(s.jsxs)("section",{className:"cardHolder",children:[Object(s.jsxs)("header",{className:"cardTop kitAndName",children:[Object(s.jsx)("h3",{className:"h3alternate",children:n}),Object(s.jsx)("div",{className:r})]}),Object(s.jsx)("div",{className:"cardWhite",children:t.map((function(e,t){return Object(s.jsx)("div",{children:Object(s.jsx)("p",{children:e})},t)}))}),Object(s.jsx)("footer",{className:"cardBottom"})]})]}),Object(s.jsxs)("div",{className:"listButtons",children:[Object(s.jsx)("button",{onClick:this.handleOpenSettings,className:"pillButton",children:"Settings"}),Object(s.jsx)("button",{onClick:this.handleReshuffle,className:"pillButton",children:"Reshuffle"})]})]})}}]),a}(n.Component),M=function(e){var t=e.settingsCompleteProp;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("header",{children:Object(s.jsxs)("h1",{className:"title",children:["5-a-side",Object(s.jsx)("br",{}),"Team Generator"]})}),Object(s.jsx)("main",{children:t?Object(s.jsx)(P,{}):Object(s.jsx)(B,{})}),Object(s.jsx)("footer",{children:Object(s.jsx)("h2",{className:"h3alternate",children:"\xa9 2020 Ellie Hobbs"})})]})},A=a(11),R=Object(A.b)((function(e){return{settingsCompleteProp:e.settingsComplete}}))(M),w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(A.a,{store:S,children:Object(s.jsx)(R,{})})}),document.getElementById("root")),w()}},[[30,1,2]]]);
//# sourceMappingURL=main.14ceaedf.chunk.js.map