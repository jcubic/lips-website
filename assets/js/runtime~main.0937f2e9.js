(()=>{"use strict";var e,a,t,r,f,c={},b={};function d(e){var a=b[e];if(void 0!==a)return a.exports;var t=b[e]={exports:{}};return c[e].call(t.exports,t,t.exports,d),t.exports}d.m=c,e=[],d.O=(a,t,r,f)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],f=e[i][2];for(var b=!0,o=0;o<t.length;o++)(!1&f||c>=f)&&Object.keys(d.O).every((e=>d.O[e](t[o])))?t.splice(o--,1):(b=!1,f<c&&(c=f));if(b){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,r,f]},d.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return d.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var f=Object.create(null);d.r(f);var c={};a=a||[null,t({}),t([]),t(t)];for(var b=2&r&&e;"object"==typeof b&&!~a.indexOf(b);b=t(b))Object.getOwnPropertyNames(b).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,d.d(f,c),f},d.d=(e,a)=>{for(var t in a)d.o(a,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((a,t)=>(d.f[t](e,a),a)),[])),d.u=e=>"assets/js/"+({53:"935f2afb",171:"a8bfef48",581:"156604c5",706:"0be12168",743:"7e736cac",1113:"e511e452",1208:"3828c8cd",2090:"5d6567ae",2347:"1a2006b5",2535:"814f3328",2553:"6878938b",2587:"ddbfd18b",2663:"af95cafa",2822:"35ee46b0",3085:"1f391b9e",3089:"a6aa9e1f",3237:"1df93b7f",3296:"ddb0995b",3608:"9e4087bc",3866:"87fa6c46",3983:"e5ba66b5",4013:"01a85c17",4015:"69aa9e93",4368:"a94703ab",4409:"abea8c7e",4699:"ab461798",4985:"14a48451",5609:"e1902777",5747:"726afaaf",6103:"ccc49370",6219:"97f1305f",6296:"c74dcec5",7018:"413466e5",7040:"0c62c74a",7184:"68243087",7414:"393be207",7836:"840797c7",7868:"aa178e2b",7918:"17896441",7947:"e066aa5c",7953:"f724a01c",8071:"f2e31a35",8097:"4f7497d7",8424:"5ad8d976",8518:"a7bd4aaa",8610:"6875c492",9075:"4f19b1b3",9141:"321ee6e0",9195:"d969d8ea",9342:"df5a86e1",9661:"5e95c892",9671:"0e384e19",9817:"14eb3368"}[e]||e)+"."+{53:"a6a08e97",171:"421bc268",581:"8352a8c3",706:"26e2a185",743:"b2802a49",1113:"6dce99c6",1208:"62f62444",1260:"dc6b321b",1772:"39783b35",2090:"3bfd2f09",2347:"8f16d8de",2535:"8189fa50",2553:"9bdd422c",2587:"fc5e415f",2663:"1c3567dc",2822:"cb126441",3085:"17de0c8a",3089:"3719cfd8",3237:"b8a083ee",3296:"61a28c64",3608:"22e7931c",3866:"2614e762",3983:"3473a71f",4013:"0a3be260",4015:"a11046b1",4368:"898773b6",4409:"81165df6",4699:"397d7460",4985:"3135d11d",5005:"9a7010e1",5609:"e78632f1",5747:"936d976f",6103:"87a06fc8",6219:"0dabc935",6296:"1ed46b84",7018:"0b3909af",7040:"412dcfbe",7184:"bc75b8fa",7414:"c8021bd0",7836:"0a239b98",7868:"115cc540",7918:"87c76d30",7947:"56cd5ac8",7953:"7685b741",8071:"00865121",8097:"98758149",8424:"b419c59c",8518:"0379ef5f",8610:"da9f77fb",9075:"a92498df",9141:"b2e63bbf",9195:"b41e6832",9342:"938f9a49",9386:"eb7dae53",9661:"24930d87",9671:"bb0b6a4e",9677:"eed282fe",9817:"f86aefd6"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},f="new-docs:",d.l=(e,a,t,c)=>{if(r[e])r[e].push(a);else{var b,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+t){b=u;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,d.nc&&b.setAttribute("nonce",d.nc),b.setAttribute("data-webpack",f+t),b.src=e),r[e]=[a];var l=(a,t)=>{b.onerror=b.onload=null,clearTimeout(s);var f=r[e];if(delete r[e],b.parentNode&&b.parentNode.removeChild(b),f&&f.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),o&&document.head.appendChild(b)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/lips-website/",d.gca=function(e){return e={17896441:"7918",68243087:"7184","935f2afb":"53",a8bfef48:"171","156604c5":"581","0be12168":"706","7e736cac":"743",e511e452:"1113","3828c8cd":"1208","5d6567ae":"2090","1a2006b5":"2347","814f3328":"2535","6878938b":"2553",ddbfd18b:"2587",af95cafa:"2663","35ee46b0":"2822","1f391b9e":"3085",a6aa9e1f:"3089","1df93b7f":"3237",ddb0995b:"3296","9e4087bc":"3608","87fa6c46":"3866",e5ba66b5:"3983","01a85c17":"4013","69aa9e93":"4015",a94703ab:"4368",abea8c7e:"4409",ab461798:"4699","14a48451":"4985",e1902777:"5609","726afaaf":"5747",ccc49370:"6103","97f1305f":"6219",c74dcec5:"6296","413466e5":"7018","0c62c74a":"7040","393be207":"7414","840797c7":"7836",aa178e2b:"7868",e066aa5c:"7947",f724a01c:"7953",f2e31a35:"8071","4f7497d7":"8097","5ad8d976":"8424",a7bd4aaa:"8518","6875c492":"8610","4f19b1b3":"9075","321ee6e0":"9141",d969d8ea:"9195",df5a86e1:"9342","5e95c892":"9661","0e384e19":"9671","14eb3368":"9817"}[e]||e,d.p+d.u(e)},(()=>{var e={1303:0,532:0};d.f.j=(a,t)=>{var r=d.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((t,f)=>r=e[a]=[t,f]));t.push(r[2]=f);var c=d.p+d.u(a),b=new Error;d.l(c,(t=>{if(d.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var f=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+a+" failed.\n("+f+": "+c+")",b.name="ChunkLoadError",b.type=f,b.request=c,r[1](b)}}),"chunk-"+a,a)}},d.O.j=a=>0===e[a];var a=(a,t)=>{var r,f,c=t[0],b=t[1],o=t[2],n=0;if(c.some((a=>0!==e[a]))){for(r in b)d.o(b,r)&&(d.m[r]=b[r]);if(o)var i=o(d)}for(a&&a(t);n<c.length;n++)f=c[n],d.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return d.O(i)},t=self.webpackChunknew_docs=self.webpackChunknew_docs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();