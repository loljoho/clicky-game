(window.webpackJsonpclicky=window.webpackJsonpclicky||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(2),r=t.n(i),o=(t(15),t(7)),l=t(3),m=t(4),s=t(8),d=t(5),h=t(9),g=function(e){return c.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},u=function(e){return c.a.createElement("div",{className:e.helper?"row ".concat(e.helper):"row"},e.children)},k=function(e){var a=e.base,t=void 0===a?12:a,n=e.md,i=e.lg,r=e.xl,o=e.children,l="col-".concat(t);return n&&(l=l.concat(" col-md-".concat(n))),i&&(l=l.concat(" col-lg-".concat(i))),r&&(l=l.concat(" col-xl-".concat(r))),c.a.createElement("div",{className:l},o)},f=function(e){return c.a.createElement("div",{className:"card mt-2 ".concat(e.dark?"bg-dark":"bg-light")},e.header&&c.a.createElement("div",{className:"card-header ".concat(e.dark?"text-light":"text-dark")},e.header),c.a.createElement("div",{className:"card-body"},e.children))},p=function(e){return c.a.createElement("div",{className:"\n      jumbotron jumbotron-fluid p-2 text-center ".concat(e.dark?"bg-dark text-light":"bg-light text-dark"," ")},c.a.createElement("span",{className:"m-3",style:{fontSize:30}},"Score: ",e.score),c.a.createElement("span",{className:"m-3",style:{fontSize:30}},"High Score: ",e.highScore))},v=function(e){var a=e.id,t=e.name,n=e.image,i=e.handleClickOnImage;return c.a.createElement("img",{src:n,alt:t,className:"img-fluid w-100 h-50",onClick:function(){return i(a)}})},S=t(6),j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(c)))).state={choices:S,clicked:[],highScore:0},t.randomize=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e},t.resetGame=function(){var e=t.randomize(t.state.choices);t.setState({clicked:[],choices:e})},t.handleClickOnImage=function(e){t.state.clicked.includes(e)?(alert("you lost"),t.resetGame()):t.setState((function(a){return{clicked:[].concat(Object(o.a)(a.clicked),[e]),choices:t.randomize(t.state.choices)}}),(function(){t.checkHighScore(),t.handleWin()}))},t.checkHighScore=function(){t.state.clicked.length>t.state.highScore&&t.setState({highScore:t.state.clicked.length})},t.handleWin=function(){t.state.clicked.length===t.state.choices.length&&(alert("You won!"),t.resetGame())},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.setState({choices:this.randomize(this.state.choices)})}},{key:"render",value:function(){var e=this;console.log(this.state);var a=this.state,t=a.clicked,n=a.choices,i=a.highScore;return c.a.createElement(g,null,c.a.createElement(p,{score:t.length,highScore:i,dark:!0}),c.a.createElement(u,{helper:"justify-content-center"},n.map((function(a){var t=a.id,n=a.name,i=a.image;return c.a.createElement(k,{key:t,md:2},c.a.createElement(f,{header:n,dark:!0},c.a.createElement(v,{id:t,name:n,image:i,handleClickOnImage:e.handleClickOnImage})))}))))}}]),a}(n.Component);r.a.render(c.a.createElement(j,null),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":1,"name":"Jesse Pinkman","image":"./images/jesse.jpg"},{"id":2,"name":"Mike Ehrmantraut","image":"./images/mike.jpg"},{"id":3,"name":"Hector Salamanca","image":"./images/hector.jpg"},{"id":4,"name":"Walter White","image":"./images/walt.jpg"},{"id":5,"name":"Saul Goodman","image":"./images/saul.jpg"},{"id":6,"name":"Marie Schrader","image":"./images/marie.jpg"},{"id":7,"name":"Skylar White","image":"./images/skylar.jpg"},{"id":8,"name":"Gustavo Fring","image":"./images/gus.jpg"},{"id":9,"name":"Hank Schrader","image":"./images/hank.jpg"},{"id":10,"name":"Walter White Jr.","image":"./images/junior.jpg"}]')}},[[10,1,2]]]);
//# sourceMappingURL=main.b057f521.chunk.js.map