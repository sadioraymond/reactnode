(this["webpackJsonppulse-test"]=this["webpackJsonppulse-test"]||[]).push([[0],{35:function(e,t,n){},55:function(e,t,n){e.exports=n(96)},61:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(14),c=n.n(i),r=(n(35),n(41)),l=n(42),s=n(52),u=n(53),h=n(99),m=n(33),v=(n(60),n(61),h.a.TextArea),f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this)).onChange=function(e){var t=e.target.value;a.setState({value:t})},a.saveFile=function(){fetch("".concat("http://localhost:5000/file/list")).then((function(e){return e.json()})).then((function(e){}))},a.state={value:"",nomFichier:"fileToEdit.txt"},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("http://localhost:5000/file/fileToedit")).then((function(e){return e.json()})).then((function(t){e.setState({value:t.data})}))}},{key:"render",value:function(){var e=this.state.value;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"labelDiv"},this.state.nomFichier),o.a.createElement("div",{className:"textareaDiv"},o.a.createElement(v,{value:e,onChange:this.onChange,size:"middle",autoSize:{minRows:8,maxRows:8}})),o.a.createElement("div",{className:"buttonDiv"},o.a.createElement(m.a,{type:"primary",onClick:this.saveFile},"Save")))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.35d359df.chunk.js.map