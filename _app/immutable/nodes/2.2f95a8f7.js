import{r as xe,s as O,c as Me,u as Se,g as ke,d as De,f as ze,n as Q,e as ee,h as ie,o as Ae,i as me,j as ne}from"../chunks/scheduler.e1c578e3.js";import{t as S,d as k,S as G,i as K,g as b,h as x,j as M,f as p,k as w,a as T,y as J,s as X,z as Pe,c as j,x as y,A as de,B as qe,m as P,n as q,C as Ce,D as F,o as te,r as R,u as V,v as z,w as A,p as Ie,b as Te}from"../chunks/index.cedc48b9.js";import{w as Ee}from"../chunks/index.4214fa7e.js";function ue(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ue(e,n){S(e,1,1,()=>{n.delete(e.key)})}function Xe(e,n,t,s,o,a,l,r,i,u,c,h){let f=e.length,m=a.length,d=f;const v={};for(;d--;)v[e[d].key]=d;const E=[],L=new Map,g=new Map,_=[];for(d=m;d--;){const I=h(o,a,d),C=t(I);let U=l.get(C);U?s&&_.push(()=>U.p(I,n)):(U=u(C,I),U.c()),L.set(C,E[d]=U),C in v&&g.set(C,Math.abs(d-v[C]))}const D=new Set,N=new Set;function H(I){k(I,1),I.m(r,c),l.set(I.key,I),c=I.first,m--}for(;f&&m;){const I=E[m-1],C=e[f-1],U=I.key,oe=C.key;I===C?(c=I.first,f--,m--):L.has(oe)?!l.has(U)||D.has(U)?H(I):N.has(oe)?f--:g.get(U)>g.get(oe)?(N.add(U),H(I)):(D.add(oe),f--):(i(C,l),f--)}for(;f--;){const I=e[f];L.has(I.key)||i(I,l)}for(;m;)H(E[m-1]);return xe(_),E}function je(e){let n,t,s,o;const a=e[1].default,l=Me(a,e,e[0],null);return{c(){n=b("button"),l&&l.c(),this.h()},l(r){n=x(r,"BUTTON",{class:!0});var i=M(n);l&&l.l(i),i.forEach(p),this.h()},h(){w(n,"class","rounded-md bg-violet-400 px-6 py-2 text-neutral-50 outline-none hover:bg-violet-600 active:bg-violet-800")},m(r,i){T(r,n,i),l&&l.m(n,null),t=!0,s||(o=J(n,"click",e[2]),s=!0)},p(r,[i]){l&&l.p&&(!t||i&1)&&Se(l,a,r,r[0],t?De(a,r[0],i,null):ke(r[0]),null)},i(r){t||(k(l,r),t=!0)},o(r){S(l,r),t=!1},d(r){r&&p(n),l&&l.d(r),s=!1,o()}}}function Oe(e,n,t){let{$$slots:s={},$$scope:o}=n;function a(l){ze.call(this,e,l)}return e.$$set=l=>{"$$scope"in l&&t(0,o=l.$$scope)},[o,s,a]}class Le extends G{constructor(n){super(),K(this,n,Oe,je,O,{})}}const he={max:11,fit:e=>Number.isInteger(e)&&e>=1&&e<=11},Y={size:4,all:()=>[0,1,2,3].flatMap(e=>[0,1,2,3].map(n=>({x:e,y:n})))},B={Decimal:"decimal",Rome:"rome",Fibonacci:"fibonacci"},ce={value:e=>e,render:e=>`${e}`,merge:(e,n)=>{const t=e+1;return e===n&&he.fit(t)?t:!1},deal:e=>e%10===9?2:1},se={[B.Decimal]:{...ce,value:e=>Math.pow(2,e),render:e=>se[B.Decimal].value(e).toString()},[B.Rome]:{...ce,value:e=>Math.pow(2,e),render:e=>{switch(e){case 1:return"II";case 2:return"IV";case 3:return"VIII";case 4:return"XVI";case 5:return"XXXII";case 6:return"LXIV";case 7:return"CXXVIII";case 8:return"CCLVI";case 9:return"DXII";case 10:return"MXXIV";case 11:return"MMXLVIII"}}},[B.Fibonacci]:{...ce,deal:e=>e%2===0?1:2,merge:(e,n)=>{const t=Math.max(e,n)+1;return Math.abs(e-n)===1&&he.fit(t)?t:!1},value:e=>{switch(e){case 1:return 2;case 2:return 3;case 3:return 5;case 4:return 8;case 5:return 13;case 6:return 21;case 7:return 34;case 8:return 55;case 9:return 89;case 10:return 144;case 11:return 233}},render:e=>se[B.Fibonacci].value(e).toString()}},Z=Ee(B.Decimal),ae=Ee(null);ae.subscribe(e=>{e!=null&&window.localStorage.setItem("bestScore",`${e}`)});function pe(e,n,t){const s=e.slice();return s[3]=n[t],s}function ge(e){let n,t=e[3]+"",s;return{c(){n=b("option"),s=P(t),this.h()},l(o){n=x(o,"OPTION",{});var a=M(n);s=q(a,t),a.forEach(p),this.h()},h(){n.__value=e[3],Ce(n,n.__value)},m(o,a){T(o,n,a),y(n,s)},p:Q,d(o){o&&p(n)}}}function Ge(e){let n,t,s="Game Mode:",o,a,l,r,i=ue(Object.values(B)),u=[];for(let c=0;c<i.length;c+=1)u[c]=ge(pe(e,i,c));return{c(){n=b("div"),t=b("p"),t.textContent=s,o=X(),a=b("select");for(let c=0;c<u.length;c+=1)u[c].c();this.h()},l(c){n=x(c,"DIV",{class:!0});var h=M(n);t=x(h,"P",{class:!0,"data-svelte-h":!0}),Pe(t)!=="svelte-87peez"&&(t.textContent=s),o=j(h),a=x(h,"SELECT",{class:!0});var f=M(a);for(let m=0;m<u.length;m+=1)u[m].l(f);f.forEach(p),h.forEach(p),this.h()},h(){w(t,"class","text-lg"),w(a,"class","rounded bg-violet-400 px-2 py-2 text-lg text-neutral-50 outline-none sm:px-4"),w(n,"class","flex flex-row items-center gap-2")},m(c,h){T(c,n,h),y(n,t),y(n,o),y(n,a);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(a,null);de(a,e[1]),l||(r=J(a,"change",e[2]),l=!0)},p(c,[h]){if(h&0){i=ue(Object.values(B));let f;for(f=0;f<i.length;f+=1){const m=pe(c,i,f);u[f]?u[f].p(m,h):(u[f]=ge(m),u[f].c(),u[f].m(a,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=i.length}h&2&&de(a,c[1])},i:Q,o:Q,d(c){c&&p(n),qe(u,c),l=!1,r()}}}function Ke(e,n,t){let s;ee(e,Z,l=>t(1,s=l));let{updateMode:o}=n;const a=l=>o(l.currentTarget.value);return e.$$set=l=>{"updateMode"in l&&t(0,o=l.updateMode)},[o,s,a]}class Ne extends G{constructor(n){super(),K(this,n,Ke,Ge,O,{updateMode:0})}}function We(e){let n,t,s=e[1](e[0])+"",o,a;return{c(){n=b("div"),t=b("h6"),o=P(s),this.h()},l(l){n=x(l,"DIV",{class:!0});var r=M(n);t=x(r,"H6",{class:!0});var i=M(t);o=q(i,s),i.forEach(p),r.forEach(p),this.h()},h(){w(t,"class","break-all text-2xl font-bold !leading-narrow xs:text-4xl sm:text-5xl"),F(t,"text-neutral-950",e[0]<=1),F(t,"text-neutral-50",e[0]>1),w(n,"class",a=ie(`flex h-full w-full items-center justify-center overflow-hidden rounded transition-colors duration-150 bg-tile-${e[0]}`)+" svelte-5ez4zg")},m(l,r){T(l,n,r),y(n,t),y(t,o)},p(l,[r]){r&3&&s!==(s=l[1](l[0])+"")&&te(o,s),r&1&&F(t,"text-neutral-950",l[0]<=1),r&1&&F(t,"text-neutral-50",l[0]>1),r&1&&a!==(a=ie(`flex h-full w-full items-center justify-center overflow-hidden rounded transition-colors duration-150 bg-tile-${l[0]}`)+" svelte-5ez4zg")&&w(n,"class",a)},i:Q,o:Q,d(l){l&&p(n)}}}function Be(e,n,t){let s,o;ee(e,Z,l=>t(2,o=l));let{level:a}=n;return e.$$set=l=>{"level"in l&&t(0,a=l.level)},e.$$.update=()=>{e.$$.dirty&4&&t(1,{render:s}=se[o],s)},[a,s,o]}class Re extends G{constructor(n){super(),K(this,n,Be,We,O,{level:0})}}function Fe(e){let n,t,s;return t=new Re({props:{level:e[0]}}),{c(){n=b("div"),R(t.$$.fragment),this.h()},l(o){n=x(o,"DIV",{class:!0});var a=M(n);V(t.$$.fragment,a),a.forEach(p),this.h()},h(){w(n,"class","sx:border-6 h-20 w-20 border-4 border-solid border-transparent xs:h-24 xs:w-24 sm:h-32 sm:w-32 sm:border-8")},m(o,a){T(o,n,a),z(t,n,null),s=!0},p(o,[a]){const l={};a&1&&(l.level=o[0]),t.$set(l)},i(o){s||(k(t.$$.fragment,o),s=!0)},o(o){S(t.$$.fragment,o),s=!1},d(o){o&&p(n),A(t)}}}function He(e,n,t){let{level:s}=n;return e.$$set=o=>{"level"in o&&t(0,s=o.level)},[s]}class fe extends G{constructor(n){super(),K(this,n,He,Fe,O,{level:0})}}function Ye(e){let n,t,s,o=e[3](11)+"",a,l,r,i,u,c,h,f,m;return i=new fe({props:{level:e[1]}}),c=new fe({props:{level:e[0]}}),f=new fe({props:{level:e[2]}}),{c(){n=b("h1"),t=P("Try to get "),s=b("span"),a=P(o),l=X(),r=b("div"),R(i.$$.fragment),u=P(`
	+
	`),R(c.$$.fragment),h=P(`
	=
	`),R(f.$$.fragment),this.h()},l(d){n=x(d,"H1",{class:!0});var v=M(n);t=q(v,"Try to get "),s=x(v,"SPAN",{class:!0});var E=M(s);a=q(E,o),E.forEach(p),v.forEach(p),l=j(d),r=x(d,"DIV",{class:!0});var L=M(r);V(i.$$.fragment,L),u=q(L,`
	+
	`),V(c.$$.fragment,L),h=q(L,`
	=
	`),V(f.$$.fragment,L),L.forEach(p),this.h()},h(){w(s,"class","text:6xl sm:text-7xl"),w(n,"class","text-4xl text-neutral-950 sm:text-6xl"),w(r,"class","flex flex-row items-center justify-between text-7xl text-neutral-950 sm:text-8xl")},m(d,v){T(d,n,v),y(n,t),y(n,s),y(s,a),T(d,l,v),T(d,r,v),z(i,r,null),y(r,u),z(c,r,null),y(r,h),z(f,r,null),m=!0},p(d,[v]){(!m||v&8)&&o!==(o=d[3](11)+"")&&te(a,o);const E={};v&2&&(E.level=d[1]),i.$set(E);const L={};v&1&&(L.level=d[0]),c.$set(L);const g={};v&4&&(g.level=d[2]),f.$set(g)},i(d){m||(k(i.$$.fragment,d),k(c.$$.fragment,d),k(f.$$.fragment,d),m=!0)},o(d){S(i.$$.fragment,d),S(c.$$.fragment,d),S(f.$$.fragment,d),m=!1},d(d){d&&(p(n),p(l),p(r)),A(i),A(c),A(f)}}}function Qe(e,n,t){let s,o,a,l,r,i,u;return ee(e,Z,c=>t(6,u=c)),e.$$.update=()=>{e.$$.dirty&64&&t(5,{deal:s,merge:o,render:a}=se[u],s,(t(4,o),t(6,u)),(t(3,a),t(6,u))),e.$$.dirty&32&&t(1,l=s(0)),e.$$.dirty&32&&t(0,r=s(1)),e.$$.dirty&19&&t(2,i=o(l,r)||1)},[r,l,i,a,o,s,u]}class Je extends G{constructor(n){super(),K(this,n,Qe,Ye,O,{})}}function Ze(e){let n,t,s,o,a,l;const r=e[2].default,i=Me(r,e,e[1],null);return{c(){n=b("div"),t=b("p"),s=P(e[0]),o=X(),a=b("p"),i&&i.c(),this.h()},l(u){n=x(u,"DIV",{class:!0});var c=M(n);t=x(c,"P",{class:!0});var h=M(t);s=q(h,e[0]),h.forEach(p),o=j(c),a=x(c,"P",{class:!0});var f=M(a);i&&i.l(f),f.forEach(p),c.forEach(p),this.h()},h(){w(t,"class","font-mono text-xs !leading-narrow"),w(a,"class","text-xl !leading-narrow"),w(n,"class","flex min-w-[5rem] flex-col items-center gap-2 rounded bg-violet-400 py-2 text-neutral-50")},m(u,c){T(u,n,c),y(n,t),y(t,s),y(n,o),y(n,a),i&&i.m(a,null),l=!0},p(u,[c]){(!l||c&1)&&te(s,u[0]),i&&i.p&&(!l||c&2)&&Se(i,r,u,u[1],l?De(r,u[1],c,null):ke(u[1]),null)},i(u){l||(k(i,u),l=!0)},o(u){S(i,u),l=!1},d(u){u&&p(n),i&&i.d(u)}}}function et(e,n,t){let{$$slots:s={},$$scope:o}=n,{name:a}=n;return e.$$set=l=>{"name"in l&&t(0,a=l.name),"$$scope"in l&&t(1,o=l.$$scope)},[a,o,s]}class _e extends G{constructor(n){super(),K(this,n,et,Ze,O,{name:0})}}function tt(e){let n;return{c(){n=P(e[0])},l(t){n=q(t,e[0])},m(t,s){T(t,n,s)},p(t,s){s&1&&te(n,t[0])},d(t){t&&p(n)}}}function nt(e){let n=(e[1]!=null?e[1]:"-")+"",t;return{c(){t=P(n)},l(s){t=q(s,n)},m(s,o){T(s,t,o)},p(s,o){o&2&&n!==(n=(s[1]!=null?s[1]:"-")+"")&&te(t,n)},d(s){s&&p(t)}}}function st(e){let n,t,s,o,a;return t=new _e({props:{name:"SCORE",$$slots:{default:[tt]},$$scope:{ctx:e}}}),o=new _e({props:{name:"BEST",$$slots:{default:[nt]},$$scope:{ctx:e}}}),{c(){n=b("div"),R(t.$$.fragment),s=X(),R(o.$$.fragment),this.h()},l(l){n=x(l,"DIV",{class:!0});var r=M(n);V(t.$$.fragment,r),s=j(r),V(o.$$.fragment,r),r.forEach(p),this.h()},h(){w(n,"class","flex gap-2")},m(l,r){T(l,n,r),z(t,n,null),y(n,s),z(o,n,null),a=!0},p(l,[r]){const i={};r&5&&(i.$$scope={dirty:r,ctx:l}),t.$set(i);const u={};r&6&&(u.$$scope={dirty:r,ctx:l}),o.$set(u)},i(l){a||(k(t.$$.fragment,l),k(o.$$.fragment,l),a=!0)},o(l){S(t.$$.fragment,l),S(o.$$.fragment,l),a=!1},d(l){l&&p(n),A(t),A(o)}}}function ot(e,n,t){let s;ee(e,ae,a=>t(1,s=a));let{score:o}=n;return Ae(()=>{me(ae,s=Number(window.localStorage.getItem("bestScore")),s)}),e.$$set=a=>{"score"in a&&t(0,o=a.score)},e.$$.update=()=>{e.$$.dirty&3&&s!=null&&o>s&&me(ae,s=o,s)},[o,s]}class lt extends G{constructor(n){super(),K(this,n,ot,st,O,{score:0})}}const $={Init:"init",Deal:"deal",Play:"play",MoveLeft:"moveLeft",MoveRight:"moveRight",MoveUp:"moveUp",MoveDown:"moveDown",Transition:"transition",Transitioning:"transitioning",Destroy:"destroy",Check:"check",Win:"win",Lose:"lose"},rt={init:()=>({create:[],update:[],destroy:[]})},at=e=>Array.from(Array(Y.size).keys()).map(n=>Array.from(Array(Y.size).keys()).map(t=>e.find(s=>s.position.x===n&&s.position.y===t)??null)),$e=(e,n,t,s)=>{n.x===e.position.x&&n.y===e.position.y||(t[e.position.x][e.position.y]=null,t[n.x][n.y]={...e,position:n},s.update.push({key:e.key,level:e.level,position:n}))},it=(e,n,t,s,o)=>{o.update.push({key:n.key,level:t,position:n.position}),o.update.push({...e,position:n.position}),o.destroy.push(e),s[n.position.x][n.position.y]={...n,level:t},s[e.position.x][e.position.y]=null},le=(e,n,t,s=t)=>{const o=rt.init(),a=e.map(i=>({...i,position:t(i.position)})).sort((i,u)=>i.position.x-u.position.x),l=at(a),r=new Set;return a.forEach(i=>{const u=i.position.y;for(let c=i.position.x-1;c>=-1;c-=1)if(c<0){const h={x:c+1,y:u};$e(i,h,l,o)}else{const h=l[c][u];if(h){const f=n(h.level,i.level);if(f===!1||r.has(h.key)){const m={x:c+1,y:u};$e(i,m,l,o)}else it(i,h,f,l,o),r.add(h.key);break}}}),{...o,update:o.update.map(i=>({...i,position:s(i.position)}))}},ye={[$.MoveLeft]:(e,n)=>le(e,n,t=>t),[$.MoveRight]:(e,n)=>le(e,n,t=>({x:Y.size-1-t.x,y:t.y})),[$.MoveDown]:(e,n)=>le(e,n,t=>({x:Y.size-1-t.y,y:t.x}),t=>({x:t.y,y:Y.size-1-t.x})),[$.MoveUp]:(e,n)=>le(e,n,t=>({x:t.y,y:t.x}))},W={Left:"ArrowLeft",Right:"ArrowRight",Down:"ArrowDown",Up:"ArrowUp"},ut=(e,n)=>{let t={x:0,y:0};const s=i=>{if(!n)switch(i.key){case W.Left:case W.Right:case W.Down:case W.Up:i.preventDefault(),e(i.key)}},o=i=>{i.cancelable&&i.preventDefault()};return{onKeyDown:s,onTouchStart:i=>{if(n)return;o(i);const u=i.touches.item(0);u&&(t={x:u.screenX,y:u.screenY})},onTouchEnd:i=>{if(n)return;o(i);const u=i.changedTouches.item(0)??i.touches.item(0);if(u){const c={x:u.screenX-t.x,y:u.screenY-t.y};if(Math.pow(c.x,2)+Math.pow(c.y,2)<Math.pow(80,2))return;Math.abs(c.x)>Math.abs(c.y)?c.x>0?e(W.Right):e(W.Left):c.y>0?e(W.Down):e(W.Up)}},onTouchMove:i=>{n||o(i)}}},ct=e=>Y.all().filter(n=>e.every(t=>n.x!==t.x||n.y!==t.y)),Ve=(e,n)=>{if(n===0)return[];if(e.length<=n)return e;const t=Math.floor(Math.random()*e.length),s=[...e.slice(0,t),...e.slice(t+1)];return[e[t],...Ve(s,n-1)]},re={init:()=>({nextKey:0,score:0,gameState:$.Init,queues:{create:[],update:[],destroy:[]},tiles:[]}),next:(e,n)=>{switch(e.gameState){case $.Init:{const t=ct(e.tiles.map(a=>a.position)),o=e.tiles.length===0?2:1;return{...e,nextKey:e.nextKey+o,gameState:$.Deal,queues:{...e.queues,create:Ve(t,o).map((a,l)=>{const r=e.nextKey+l;return{key:r,level:n.deal(r),position:a}})}}}case $.Deal:{const t=[...e.tiles,...e.queues.create],s=(()=>t.length===Math.pow(Y.size,2)&&Object.values(ye).map(a=>a(t,n.merge).update.length).every(a=>a===0)?$.Lose:$.Play)();return{...e,gameState:s,queues:{...e.queues,create:[]},tiles:t}}case $.MoveLeft:case $.MoveRight:case $.MoveDown:case $.MoveUp:{const t=ye[e.gameState](e.tiles,n.merge);return t.update.length<1?{...e,gameState:$.Play}:{...e,gameState:$.Transition,queues:t}}case $.Transition:{const t=e.tiles.slice();let s=e.score;return e.queues.update.forEach(({key:o,level:a,position:l})=>{const r=t.findIndex(i=>i.key===o);t[r].level!==a&&(s+=n.value(a)),t[r]={...t[r],level:a,position:l}}),{...e,score:s,gameState:$.Transitioning,queues:{...e.queues,update:[]},tiles:t}}case $.Transitioning:return{...e,gameState:$.Destroy};case $.Destroy:{const t=new Set(e.queues.destroy.map(s=>s.key));return{...e,gameState:$.Check,queues:{...e.queues,destroy:[]},tiles:e.tiles.filter(s=>!t.has(s.key))}}case $.Check:return e.tiles.some(t=>t.level===he.max)?{...e,gameState:$.Win}:{...e,gameState:$.Init}}return e}};function ve(e,n,t){const s=e.slice();s[9]=n[t];const o=s[9];return s[10]=o.position.x,s[11]=o.position.y,s[12]=o.level,s}function we(e,n){let t,s,o,a;return s=new Re({props:{level:n[12]}}),{key:e,first:null,c(){t=b("div"),R(s.$$.fragment),this.h()},l(l){t=x(l,"DIV",{class:!0});var r=M(t);V(s.$$.fragment,r),r.forEach(p),this.h()},h(){w(t,"class",o=ie(`xs:border-6 absolute left-0 top-0 h-1/4 w-1/4 animate-appear border-4 border-solid border-transparent transition-all duration-150 sm:border-8 tile-x-${n[10]}-y-${n[11]} tile-z-${n[12]}`)+" svelte-faldcw"),this.first=t},m(l,r){T(l,t,r),z(s,t,null),a=!0},p(l,r){n=l;const i={};r&1&&(i.level=n[12]),s.$set(i),(!a||r&1&&o!==(o=ie(`xs:border-6 absolute left-0 top-0 h-1/4 w-1/4 animate-appear border-4 border-solid border-transparent transition-all duration-150 sm:border-8 tile-x-${n[10]}-y-${n[11]} tile-z-${n[12]}`)+" svelte-faldcw"))&&w(t,"class",o)},i(l){a||(k(s.$$.fragment,l),a=!0)},o(l){S(s.$$.fragment,l),a=!1},d(l){l&&p(t),A(s)}}}function ft(e){let n;return{c(){n=P("Retry")},l(t){n=q(t,"Retry")},m(t,s){T(t,n,s)},d(t){t&&p(n)}}}function mt(e){let n,t,s,o=[],a=new Map,l,r,i,u=e[0].gameState===$.Win?"WIN":"LOSE",c,h,f,m,d,v;n=new lt({props:{score:e[0].score}});let E=ue(e[0].tiles);const L=g=>g[9].key;for(let g=0;g<E.length;g+=1){let _=ve(e,E,g),D=L(_);a.set(D,o[g]=we(D,_))}return f=new Le({props:{$$slots:{default:[ft]},$$scope:{ctx:e}}}),f.$on("click",e[6]),{c(){R(n.$$.fragment),t=X(),s=b("div");for(let g=0;g<o.length;g+=1)o[g].c();l=X(),r=b("div"),i=b("h1"),c=P(u),h=X(),R(f.$$.fragment),this.h()},l(g){V(n.$$.fragment,g),t=j(g),s=x(g,"DIV",{class:!0});var _=M(s);for(let H=0;H<o.length;H+=1)o[H].l(_);l=j(_),r=x(_,"DIV",{class:!0});var D=M(r);i=x(D,"H1",{class:!0});var N=M(i);c=q(N,u),N.forEach(p),h=j(D),V(f.$$.fragment,D),D.forEach(p),_.forEach(p),this.h()},h(){w(i,"class","text-2xl font-bold !leading-narrow xs:text-xl sm:text-3xl"),w(r,"class","absolute z-[100] flex h-full w-full flex-col items-center justify-center gap-8 rounded bg-black/50 text-neutral-50 transition-opacity duration-150"),F(r,"opacity-0",!e[5]),F(r,"pointer-events-none",!e[5]),w(s,"class","playground xs:border-6 relative h-80 w-80 rounded-md border-4 border-solid xs:h-96 xs:w-96 sm:h-128 sm:w-128 sm:border-8 svelte-faldcw")},m(g,_){z(n,g,_),T(g,t,_),T(g,s,_);for(let D=0;D<o.length;D+=1)o[D]&&o[D].m(s,null);y(s,l),y(s,r),y(r,i),y(i,c),y(r,h),z(f,r,null),m=!0,d||(v=[J(window,"keydown",function(){ne(e[4])&&e[4].apply(this,arguments)}),J(s,"touchstart",function(){ne(e[3])&&e[3].apply(this,arguments)}),J(s,"touchmove",function(){ne(e[2])&&e[2].apply(this,arguments)}),J(s,"touchend",function(){ne(e[1])&&e[1].apply(this,arguments)})],d=!0)},p(g,[_]){e=g;const D={};_&1&&(D.score=e[0].score),n.$set(D),_&1&&(E=ue(e[0].tiles),Ie(),o=Xe(o,_,L,1,e,E,a,s,Ue,we,l,ve),Te()),(!m||_&1)&&u!==(u=e[0].gameState===$.Win?"WIN":"LOSE")&&te(c,u);const N={};_&32768&&(N.$$scope={dirty:_,ctx:e}),f.$set(N),(!m||_&32)&&F(r,"opacity-0",!e[5]),(!m||_&32)&&F(r,"pointer-events-none",!e[5])},i(g){if(!m){k(n.$$.fragment,g);for(let _=0;_<E.length;_+=1)k(o[_]);k(f.$$.fragment,g),m=!0}},o(g){S(n.$$.fragment,g);for(let _=0;_<o.length;_+=1)S(o[_]);S(f.$$.fragment,g),m=!1},d(g){g&&(p(t),p(s)),A(n,g);for(let _=0;_<o.length;_+=1)o[_].d();A(f),d=!1,xe(v)}}}function ht(e,n,t){let s,o,a,l,r,i,u;ee(e,Z,f=>t(8,u=f));let c=re.init();const h=()=>{t(0,c=re.init())};return e.$$.update=()=>{if(e.$$.dirty&256&&t(7,s=se[u]),e.$$.dirty&129){const f=re.next(c,s);if(c.gameState!==f.gameState){const m=c.gameState===$.Transitioning?150:0;setTimeout(()=>{t(0,c=f)},m)}}e.$$.dirty&129&&t(4,{onKeyDown:a,onTouchStart:l,onTouchMove:r,onTouchEnd:i}=ut(f=>{const m=(()=>{switch(f){case"ArrowLeft":return $.MoveLeft;case"ArrowRight":return $.MoveRight;case"ArrowUp":return $.MoveUp;case"ArrowDown":return $.MoveDown}})();t(0,c=re.next({...c,gameState:m},s))},c.gameState!==$.Play),a,(t(3,l),t(0,c),t(7,s),t(8,u)),(t(2,r),t(0,c),t(7,s),t(8,u)),(t(1,i),t(0,c),t(7,s),t(8,u))),e.$$.dirty&1&&t(5,o=c.gameState===$.Win||c.gameState===$.Lose)},[c,i,r,l,a,o,h,s,u]}class dt extends G{constructor(n){super(),K(this,n,ht,mt,O,{})}}function be(e){let n,t;return n=new dt({}),{c(){R(n.$$.fragment)},l(s){V(n.$$.fragment,s)},m(s,o){z(n,s,o),t=!0},p:Q,i(s){t||(k(n.$$.fragment,s),t=!0)},o(s){S(n.$$.fragment,s),t=!1},d(s){A(n,s)}}}function pt(e){let n;return{c(){n=P("Retry")},l(t){n=q(t,"Retry")},m(t,s){T(t,n,s)},d(t){t&&p(n)}}}function gt(e){let n,t,s,o=e[1],a,l,r,i,u,c;t=new Je({});let h=be();return r=new Ne({props:{updateMode:e[2]}}),u=new Le({props:{$$slots:{default:[pt]},$$scope:{ctx:e}}}),u.$on("click",function(){ne(e[0])&&e[0].apply(this,arguments)}),{c(){n=b("div"),R(t.$$.fragment),s=X(),h.c(),a=X(),l=b("div"),R(r.$$.fragment),i=X(),R(u.$$.fragment),this.h()},l(f){n=x(f,"DIV",{class:!0});var m=M(n);V(t.$$.fragment,m),s=j(m),h.l(m),a=j(m),l=x(m,"DIV",{class:!0});var d=M(l);V(r.$$.fragment,d),i=j(d),V(u.$$.fragment,d),d.forEach(p),m.forEach(p),this.h()},h(){w(l,"class","flex justify-between"),w(n,"class","main mx-auto flex max-w-xs flex-col gap-4 overflow-hidden pt-8 xs:max-w-sm sm:max-w-lg")},m(f,m){T(f,n,m),z(t,n,null),y(n,s),h.m(n,null),y(n,a),y(n,l),z(r,l,null),y(l,i),z(u,l,null),c=!0},p(f,[m]){e=f,m&2&&O(o,o=e[1])?(Ie(),S(h,1,1,Q),Te(),h=be(),h.c(),k(h,1),h.m(n,a)):h.p(e,m);const d={};m&4&&(d.updateMode=e[2]),r.$set(d);const v={};m&16&&(v.$$scope={dirty:m,ctx:e}),u.$set(v)},i(f){c||(k(t.$$.fragment,f),k(h),k(r.$$.fragment,f),k(u.$$.fragment,f),c=!0)},o(f){S(t.$$.fragment,f),S(h),S(r.$$.fragment,f),S(u.$$.fragment,f),c=!1},d(f){f&&p(n),A(t),h.d(f),A(r),A(u)}}}function _t(e,n,t){let s,o,a;ee(e,Z,r=>t(3,a=r));let l=0;return e.$$.update=()=>{e.$$.dirty&2&&t(0,s=()=>{t(1,l+=1)}),e.$$.dirty&1&&t(2,o=r=>{me(Z,a=r,a),s()})},[s,l,o]}class wt extends G{constructor(n){super(),K(this,n,_t,gt,O,{})}}export{wt as component};