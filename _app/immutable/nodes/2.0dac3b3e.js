import{r as ve,s as C,c as Se,u as De,g as Ie,d as Te,f as Ee,n as O,e as Z,h as se,i as J,j as Le}from"../chunks/scheduler.35ef31a5.js";import{t as D,d as I,S as N,i as W,g as M,h as k,j as S,f as y,k as b,a as T,y as H,s as j,z as Re,c as G,x,A as he,B as Ve,m as q,n as P,C as ze,D as X,o as ie,r as R,u as V,v as z,w as A,p as xe,b as $e}from"../chunks/index.0f346d23.js";import{w as Ae}from"../chunks/index.89afdf8e.js";function oe(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function qe(e,n){D(e,1,1,()=>{n.delete(e.key)})}function Pe(e,n,t,s,r,l,o,a,i,f,u,h){let c=e.length,d=l.length,m=c;const w={};for(;m--;)w[e[m].key]=m;const _=[],p=new Map,v=new Map,Q=[];for(m=d;m--;){const $=h(r,l,m),E=t($);let L=o.get(E);L?s&&Q.push(()=>L.p($,n)):(L=f(E,$),L.c()),p.set(E,_[m]=L),E in w&&v.set(E,Math.abs(m-w[E]))}const B=new Set,fe=new Set;function re($){I($,1),$.m(a,u),o.set($.key,$),u=$.first,d--}for(;c&&d;){const $=_[d-1],E=e[c-1],L=$.key,ee=E.key;$===E?(u=$.first,c--,d--):p.has(ee)?!o.has(L)||B.has(L)?re($):fe.has(ee)?c--:v.get(L)>v.get(ee)?(fe.add(L),re($)):(B.add(ee),c--):(i(E,o),c--)}for(;c--;){const $=e[c];p.has($.key)||i($,o)}for(;d;)re(_[d-1]);return ve(Q),_}function Ue(e){let n,t,s,r;const l=e[1].default,o=Se(l,e,e[0],null);return{c(){n=M("button"),o&&o.c(),this.h()},l(a){n=k(a,"BUTTON",{class:!0});var i=S(n);o&&o.l(i),i.forEach(y),this.h()},h(){b(n,"class","rounded-md bg-violet-400 px-6 py-2 text-neutral-50 outline-none hover:bg-violet-600 active:bg-violet-800")},m(a,i){T(a,n,i),o&&o.m(n,null),t=!0,s||(r=H(n,"click",e[2]),s=!0)},p(a,[i]){o&&o.p&&(!t||i&1)&&De(o,l,a,a[0],t?Te(l,a[0],i,null):Ie(a[0]),null)},i(a){t||(I(o,a),t=!0)},o(a){D(o,a),t=!1},d(a){a&&y(n),o&&o.d(a),s=!1,r()}}}function Xe(e,n,t){let{$$slots:s={},$$scope:r}=n;function l(o){Ee.call(this,e,o)}return e.$$set=o=>{"$$scope"in o&&t(0,r=o.$$scope)},[r,s,l]}class be extends N{constructor(n){super(),W(this,n,Xe,Ue,C,{})}}const ue={max:11,fit:e=>Number.isInteger(e)&&e>=1&&e<=11},K={size:4,all:()=>[0,1,2,3].flatMap(e=>[0,1,2,3].map(n=>({x:e,y:n})))},F={Decimal:"decimal",Rome:"rome",Fibonacci:"fibonacci"},le={render:e=>`${e}`,merge:(e,n)=>{const t=e+1;return e===n&&ue.fit(t)?t:!1},deal:e=>e%10===9?2:1},ce={[F.Decimal]:{...le,render:e=>`${Math.pow(2,e)}`},[F.Rome]:{...le,render:e=>{switch(e){case 1:return"II";case 2:return"IV";case 3:return"VIII";case 4:return"XVI";case 5:return"XXXII";case 6:return"LXIV";case 7:return"CXXVIII";case 8:return"CCLVI";case 9:return"DXII";case 10:return"MXXIV";case 11:return"MMXLVIII"}}},[F.Fibonacci]:{...le,deal:e=>e%2===0?1:2,merge:(e,n)=>{const t=Math.max(e,n)+1;return Math.abs(e-n)===1&&ue.fit(t)?t:!1},render:e=>{switch(e){case 1:return"2";case 2:return"3";case 3:return"5";case 4:return"8";case 5:return"13";case 6:return"21";case 7:return"34";case 8:return"55";case 9:return"89";case 10:return"144";case 11:return"233"}}}},Y=Ae(F.Decimal);function me(e,n,t){const s=e.slice();return s[3]=n[t],s}function de(e){let n,t=e[3]+"",s;return{c(){n=M("option"),s=q(t),this.h()},l(r){n=k(r,"OPTION",{});var l=S(n);s=P(l,t),l.forEach(y),this.h()},h(){n.__value=e[3],ze(n,n.__value)},m(r,l){T(r,n,l),x(n,s)},p:O,d(r){r&&y(n)}}}function Ce(e){let n,t,s="Game Mode:",r,l,o,a,i=oe(Object.values(F)),f=[];for(let u=0;u<i.length;u+=1)f[u]=de(me(e,i,u));return{c(){n=M("div"),t=M("p"),t.textContent=s,r=j(),l=M("select");for(let u=0;u<f.length;u+=1)f[u].c();this.h()},l(u){n=k(u,"DIV",{class:!0});var h=S(n);t=k(h,"P",{class:!0,"data-svelte-h":!0}),Re(t)!=="svelte-87peez"&&(t.textContent=s),r=G(h),l=k(h,"SELECT",{class:!0});var c=S(l);for(let d=0;d<f.length;d+=1)f[d].l(c);c.forEach(y),h.forEach(y),this.h()},h(){b(t,"class","text-lg"),b(l,"class","rounded bg-violet-400 px-2 py-2 text-lg text-neutral-50 outline-none sm:px-4"),b(n,"class","flex flex-row items-center gap-2")},m(u,h){T(u,n,h),x(n,t),x(n,r),x(n,l);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(l,null);he(l,e[1]),o||(a=H(l,"change",e[2]),o=!0)},p(u,[h]){if(h&0){i=oe(Object.values(F));let c;for(c=0;c<i.length;c+=1){const d=me(u,i,c);f[c]?f[c].p(d,h):(f[c]=de(d),f[c].c(),f[c].m(l,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=i.length}h&2&&he(l,u[1])},i:O,o:O,d(u){u&&y(n),Ve(f,u),o=!1,a()}}}function je(e,n,t){let s;Z(e,Y,o=>t(1,s=o));let{updateMode:r}=n;const l=o=>r(o.currentTarget.value);return e.$$set=o=>{"updateMode"in o&&t(0,r=o.updateMode)},[r,s,l]}class Ge extends N{constructor(n){super(),W(this,n,je,Ce,C,{updateMode:0})}}function Ke(e){let n,t,s=e[1](e[0])+"",r,l;return{c(){n=M("div"),t=M("h6"),r=q(s),this.h()},l(o){n=k(o,"DIV",{class:!0});var a=S(n);t=k(a,"H6",{class:!0});var i=S(t);r=P(i,s),i.forEach(y),a.forEach(y),this.h()},h(){b(t,"class","break-all text-2xl font-bold !leading-narrow xs:text-4xl sm:text-5xl"),X(t,"text-neutral-950",e[0]<=1),X(t,"text-neutral-50",e[0]>1),b(n,"class",l=se(`flex h-full w-full items-center justify-center overflow-hidden rounded transition-colors duration-150 bg-tile-${e[0]}`)+" svelte-5ez4zg")},m(o,a){T(o,n,a),x(n,t),x(t,r)},p(o,[a]){a&3&&s!==(s=o[1](o[0])+"")&&ie(r,s),a&1&&X(t,"text-neutral-950",o[0]<=1),a&1&&X(t,"text-neutral-50",o[0]>1),a&1&&l!==(l=se(`flex h-full w-full items-center justify-center overflow-hidden rounded transition-colors duration-150 bg-tile-${o[0]}`)+" svelte-5ez4zg")&&b(n,"class",l)},i:O,o:O,d(o){o&&y(n)}}}function Oe(e,n,t){let s,r;Z(e,Y,o=>t(2,r=o));let{level:l}=n;return e.$$set=o=>{"level"in o&&t(0,l=o.level)},e.$$.update=()=>{e.$$.dirty&4&&t(1,{render:s}=ce[r],s)},[l,s,r]}class Me extends N{constructor(n){super(),W(this,n,Oe,Ke,C,{level:0})}}function Ne(e){let n,t,s;return t=new Me({props:{level:e[0]}}),{c(){n=M("div"),R(t.$$.fragment),this.h()},l(r){n=k(r,"DIV",{class:!0});var l=S(n);V(t.$$.fragment,l),l.forEach(y),this.h()},h(){b(n,"class","sx:border-6 h-20 w-20 border-4 border-solid border-transparent xs:h-24 xs:w-24 sm:h-32 sm:w-32 sm:border-8")},m(r,l){T(r,n,l),z(t,n,null),s=!0},p(r,[l]){const o={};l&1&&(o.level=r[0]),t.$set(o)},i(r){s||(I(t.$$.fragment,r),s=!0)},o(r){D(t.$$.fragment,r),s=!1},d(r){r&&y(n),A(t)}}}function We(e,n,t){let{level:s}=n;return e.$$set=r=>{"level"in r&&t(0,s=r.level)},[s]}class ae extends N{constructor(n){super(),W(this,n,We,Ne,C,{level:0})}}function Be(e){let n,t,s,r=e[3](11)+"",l,o,a,i,f,u,h,c,d;return i=new ae({props:{level:e[1]}}),u=new ae({props:{level:e[0]}}),c=new ae({props:{level:e[2]}}),{c(){n=M("h1"),t=q("Try to get "),s=M("span"),l=q(r),o=j(),a=M("div"),R(i.$$.fragment),f=q(`
	+
	`),R(u.$$.fragment),h=q(`
	=
	`),R(c.$$.fragment),this.h()},l(m){n=k(m,"H1",{class:!0});var w=S(n);t=P(w,"Try to get "),s=k(w,"SPAN",{class:!0});var _=S(s);l=P(_,r),_.forEach(y),w.forEach(y),o=G(m),a=k(m,"DIV",{class:!0});var p=S(a);V(i.$$.fragment,p),f=P(p,`
	+
	`),V(u.$$.fragment,p),h=P(p,`
	=
	`),V(c.$$.fragment,p),p.forEach(y),this.h()},h(){b(s,"class","text:6xl sm:text-7xl"),b(n,"class","text-4xl text-neutral-950 sm:text-6xl"),b(a,"class","flex flex-row items-center justify-between text-7xl text-neutral-950 sm:text-8xl")},m(m,w){T(m,n,w),x(n,t),x(n,s),x(s,l),T(m,o,w),T(m,a,w),z(i,a,null),x(a,f),z(u,a,null),x(a,h),z(c,a,null),d=!0},p(m,[w]){(!d||w&8)&&r!==(r=m[3](11)+"")&&ie(l,r);const _={};w&2&&(_.level=m[1]),i.$set(_);const p={};w&1&&(p.level=m[0]),u.$set(p);const v={};w&4&&(v.level=m[2]),c.$set(v)},i(m){d||(I(i.$$.fragment,m),I(u.$$.fragment,m),I(c.$$.fragment,m),d=!0)},o(m){D(i.$$.fragment,m),D(u.$$.fragment,m),D(c.$$.fragment,m),d=!1},d(m){m&&(y(n),y(o),y(a)),A(i),A(u),A(c)}}}function He(e,n,t){let s,r,l,o,a,i,f;return Z(e,Y,u=>t(6,f=u)),e.$$.update=()=>{e.$$.dirty&64&&t(5,{deal:s,merge:r,render:l}=ce[f],s,(t(4,r),t(6,f)),(t(3,l),t(6,f))),e.$$.dirty&32&&t(1,o=s(0)),e.$$.dirty&32&&t(0,a=s(1)),e.$$.dirty&19&&t(2,i=r(o,a)||1)},[a,o,i,l,r,s,f]}class Fe extends N{constructor(n){super(),W(this,n,He,Be,C,{})}}const g={Init:"init",Deal:"deal",Play:"play",MoveLeft:"moveLeft",MoveRight:"moveRight",MoveUp:"moveUp",MoveDown:"moveDown",Transition:"transition",Transitioning:"transitioning",Destroy:"destroy",Check:"check",Win:"win",Lose:"lose"},Ye={init:()=>({create:[],update:[],destroy:[]})},Qe=e=>Array.from(Array(K.size).keys()).map(n=>Array.from(Array(K.size).keys()).map(t=>e.find(s=>s.position.x===n&&s.position.y===t)??null)),pe=(e,n,t,s)=>{n.x===e.position.x&&n.y===e.position.y||(t[e.position.x][e.position.y]=null,t[n.x][n.y]={...e,position:n},s.update.push({key:e.key,level:e.level,position:n}))},Je=(e,n,t,s,r)=>{r.update.push({key:n.key,level:t,position:n.position}),r.update.push({...e,position:n.position}),r.destroy.push(e),s[n.position.x][n.position.y]={...n,level:t},s[e.position.x][e.position.y]=null},te=(e,n,t,s=t)=>{const r=Ye.init(),l=e.map(i=>({...i,position:t(i.position)})).sort((i,f)=>i.position.x-f.position.x),o=Qe(l),a=new Set;return l.forEach(i=>{const f=i.position.y;for(let u=i.position.x-1;u>=-1;u-=1)if(u<0){const h={x:u+1,y:f};pe(i,h,o,r)}else{const h=o[u][f];if(h){const c=n(h.level,i.level);if(c===!1||a.has(h.key)){const d={x:u+1,y:f};pe(i,d,o,r)}else Je(i,h,c,o,r),a.add(h.key);break}}}),{...r,update:r.update.map(i=>({...i,position:s(i.position)}))}},ge={[g.MoveLeft]:(e,n)=>te(e,n,t=>t),[g.MoveRight]:(e,n)=>te(e,n,t=>({x:K.size-1-t.x,y:t.y})),[g.MoveDown]:(e,n)=>te(e,n,t=>({x:K.size-1-t.y,y:t.x}),t=>({x:t.y,y:K.size-1-t.x})),[g.MoveUp]:(e,n)=>te(e,n,t=>({x:t.y,y:t.x}))},U={Left:"ArrowLeft",Right:"ArrowRight",Down:"ArrowDown",Up:"ArrowUp"},Ze=(e,n)=>{let t={x:0,y:0};const s=i=>{if(!n)switch(i.key){case U.Left:case U.Right:case U.Down:case U.Up:i.preventDefault(),e(i.key)}},r=i=>{i.cancelable&&i.preventDefault()};return{onKeyDown:s,onTouchStart:i=>{if(n)return;r(i);const f=i.touches.item(0);f&&(t={x:f.screenX,y:f.screenY})},onTouchEnd:i=>{if(n)return;r(i);const f=i.changedTouches.item(0)??i.touches.item(0);if(f){const u={x:f.screenX-t.x,y:f.screenY-t.y};if(Math.pow(u.x,2)+Math.pow(u.y,2)<Math.pow(80,2))return;Math.abs(u.x)>Math.abs(u.y)?u.x>0?e(U.Right):e(U.Left):u.y>0?e(U.Down):e(U.Up)}},onTouchMove:i=>{n||r(i)}}},et=e=>K.all().filter(n=>e.every(t=>n.x!==t.x||n.y!==t.y)),ke=(e,n)=>{if(n===0)return[];if(e.length<=n)return e;const t=Math.floor(Math.random()*e.length),s=[...e.slice(0,t),...e.slice(t+1)];return[e[t],...ke(s,n-1)]},ne={init:()=>({nextKey:0,gameState:g.Init,queues:{create:[],update:[],destroy:[]},tiles:[]}),next:(e,n)=>{switch(e.gameState){case g.Init:{const t=et(e.tiles.map(l=>l.position)),r=e.tiles.length===0?2:1;return{...e,nextKey:e.nextKey+r,gameState:g.Deal,queues:{...e.queues,create:ke(t,r).map((l,o)=>{const a=e.nextKey+o;return{key:a,level:n.deal(a),position:l}})}}}case g.Deal:{const t=[...e.tiles,...e.queues.create],s=(()=>t.length===Math.pow(K.size,2)&&Object.values(ge).map(l=>l(t,n.merge).update.length).every(l=>l===0)?g.Lose:g.Play)();return{...e,gameState:s,queues:{...e.queues,create:[]},tiles:t}}case g.MoveLeft:case g.MoveRight:case g.MoveDown:case g.MoveUp:{const t=ge[e.gameState](e.tiles,n.merge);return t.update.length<1?{...e,gameState:g.Play}:{...e,gameState:g.Transition,queues:t}}case g.Transition:{const t=e.tiles.slice();return e.queues.update.forEach(({key:s,level:r,position:l})=>{const o=t.findIndex(a=>a.key===s);t[o]={...t[o],level:r,position:l}}),{...e,gameState:g.Transitioning,queues:{...e.queues,update:[]},tiles:t}}case g.Transitioning:return{...e,gameState:g.Destroy};case g.Destroy:{const t=new Set(e.queues.destroy.map(s=>s.key));return{...e,gameState:g.Check,queues:{...e.queues,destroy:[]},tiles:e.tiles.filter(s=>!t.has(s.key))}}case g.Check:return e.tiles.some(t=>t.level===ue.max)?{...e,gameState:g.Win}:{...e,gameState:g.Init}}return e}};function _e(e,n,t){const s=e.slice();s[9]=n[t];const r=s[9];return s[10]=r.position.x,s[11]=r.position.y,s[12]=r.level,s}function ye(e,n){let t,s,r,l;return s=new Me({props:{level:n[12]}}),{key:e,first:null,c(){t=M("div"),R(s.$$.fragment),this.h()},l(o){t=k(o,"DIV",{class:!0});var a=S(t);V(s.$$.fragment,a),a.forEach(y),this.h()},h(){b(t,"class",r=se(`xs:border-6 absolute left-0 top-0 h-1/4 w-1/4 animate-appear border-4 border-solid border-transparent transition-all duration-150 sm:border-8 tile-x-${n[10]}-y-${n[11]} tile-z-${n[12]}`)+" svelte-faldcw"),this.first=t},m(o,a){T(o,t,a),z(s,t,null),l=!0},p(o,a){n=o;const i={};a&1&&(i.level=n[12]),s.$set(i),(!l||a&1&&r!==(r=se(`xs:border-6 absolute left-0 top-0 h-1/4 w-1/4 animate-appear border-4 border-solid border-transparent transition-all duration-150 sm:border-8 tile-x-${n[10]}-y-${n[11]} tile-z-${n[12]}`)+" svelte-faldcw"))&&b(t,"class",r)},i(o){l||(I(s.$$.fragment,o),l=!0)},o(o){D(s.$$.fragment,o),l=!1},d(o){o&&y(t),A(s)}}}function tt(e){let n;return{c(){n=q("Retry")},l(t){n=P(t,"Retry")},m(t,s){T(t,n,s)},d(t){t&&y(n)}}}function nt(e){let n,t=[],s=new Map,r,l,o,a=e[0].gameState===g.Win?"WIN":"LOSE",i,f,u,h,c,d,m=oe(e[0].tiles);const w=_=>_[9].key;for(let _=0;_<m.length;_+=1){let p=_e(e,m,_),v=w(p);s.set(v,t[_]=ye(v,p))}return u=new be({props:{$$slots:{default:[tt]},$$scope:{ctx:e}}}),u.$on("click",e[6]),{c(){n=M("div");for(let _=0;_<t.length;_+=1)t[_].c();r=j(),l=M("div"),o=M("h1"),i=q(a),f=j(),R(u.$$.fragment),this.h()},l(_){n=k(_,"DIV",{class:!0});var p=S(n);for(let B=0;B<t.length;B+=1)t[B].l(p);r=G(p),l=k(p,"DIV",{class:!0});var v=S(l);o=k(v,"H1",{class:!0});var Q=S(o);i=P(Q,a),Q.forEach(y),f=G(v),V(u.$$.fragment,v),v.forEach(y),p.forEach(y),this.h()},h(){b(o,"class","text-2xl font-bold !leading-narrow xs:text-xl sm:text-3xl"),b(l,"class","absolute z-[100] flex h-full w-full flex-col items-center justify-center gap-8 rounded bg-black/50 text-neutral-50 transition-opacity duration-150"),X(l,"opacity-0",!e[5]),X(l,"pointer-events-none",!e[5]),b(n,"class","playground xs:border-6 relative h-80 w-80 rounded-md border-4 border-solid xs:h-96 xs:w-96 sm:h-128 sm:w-128 sm:border-8 svelte-faldcw")},m(_,p){T(_,n,p);for(let v=0;v<t.length;v+=1)t[v]&&t[v].m(n,null);x(n,r),x(n,l),x(l,o),x(o,i),x(l,f),z(u,l,null),h=!0,c||(d=[H(window,"keydown",function(){J(e[4])&&e[4].apply(this,arguments)}),H(n,"touchstart",function(){J(e[3])&&e[3].apply(this,arguments)}),H(n,"touchmove",function(){J(e[2])&&e[2].apply(this,arguments)}),H(n,"touchend",function(){J(e[1])&&e[1].apply(this,arguments)})],c=!0)},p(_,[p]){e=_,p&1&&(m=oe(e[0].tiles),xe(),t=Pe(t,p,w,1,e,m,s,n,qe,ye,r,_e),$e()),(!h||p&1)&&a!==(a=e[0].gameState===g.Win?"WIN":"LOSE")&&ie(i,a);const v={};p&32768&&(v.$$scope={dirty:p,ctx:e}),u.$set(v),(!h||p&32)&&X(l,"opacity-0",!e[5]),(!h||p&32)&&X(l,"pointer-events-none",!e[5])},i(_){if(!h){for(let p=0;p<m.length;p+=1)I(t[p]);I(u.$$.fragment,_),h=!0}},o(_){for(let p=0;p<t.length;p+=1)D(t[p]);D(u.$$.fragment,_),h=!1},d(_){_&&y(n);for(let p=0;p<t.length;p+=1)t[p].d();A(u),c=!1,ve(d)}}}function st(e,n,t){let s,r,l,o,a,i,f;Z(e,Y,c=>t(8,f=c));let u=ne.init();const h=()=>{t(0,u=ne.init())};return e.$$.update=()=>{if(e.$$.dirty&256&&t(7,s=ce[f]),e.$$.dirty&129){const c=ne.next(u,s);if(u.gameState!==c.gameState){const d=u.gameState===g.Transitioning?150:0;setTimeout(()=>{t(0,u=c)},d)}}e.$$.dirty&129&&t(4,{onKeyDown:l,onTouchStart:o,onTouchMove:a,onTouchEnd:i}=Ze(c=>{const d=(()=>{switch(c){case"ArrowLeft":return g.MoveLeft;case"ArrowRight":return g.MoveRight;case"ArrowUp":return g.MoveUp;case"ArrowDown":return g.MoveDown}})();t(0,u=ne.next({...u,gameState:d},s))},u.gameState!==g.Play),l,(t(3,o),t(0,u),t(7,s),t(8,f)),(t(2,a),t(0,u),t(7,s),t(8,f)),(t(1,i),t(0,u),t(7,s),t(8,f))),e.$$.dirty&1&&t(5,r=u.gameState===g.Win||u.gameState===g.Lose)},[u,i,a,o,l,r,h,s,f]}class ot extends N{constructor(n){super(),W(this,n,st,nt,C,{})}}function we(e){let n,t;return n=new ot({}),{c(){R(n.$$.fragment)},l(s){V(n.$$.fragment,s)},m(s,r){z(n,s,r),t=!0},p:O,i(s){t||(I(n.$$.fragment,s),t=!0)},o(s){D(n.$$.fragment,s),t=!1},d(s){A(n,s)}}}function rt(e){let n;return{c(){n=q("Retry")},l(t){n=P(t,"Retry")},m(t,s){T(t,n,s)},d(t){t&&y(n)}}}function lt(e){let n,t,s,r=e[1],l,o,a,i,f,u;t=new Fe({});let h=we();return a=new Ge({props:{updateMode:e[2]}}),f=new be({props:{$$slots:{default:[rt]},$$scope:{ctx:e}}}),f.$on("click",function(){J(e[0])&&e[0].apply(this,arguments)}),{c(){n=M("div"),R(t.$$.fragment),s=j(),h.c(),l=j(),o=M("div"),R(a.$$.fragment),i=j(),R(f.$$.fragment),this.h()},l(c){n=k(c,"DIV",{class:!0});var d=S(n);V(t.$$.fragment,d),s=G(d),h.l(d),l=G(d),o=k(d,"DIV",{class:!0});var m=S(o);V(a.$$.fragment,m),i=G(m),V(f.$$.fragment,m),m.forEach(y),d.forEach(y),this.h()},h(){b(o,"class","flex justify-between"),b(n,"class","main mx-auto flex max-w-xs flex-col gap-8 overflow-hidden pt-8 xs:max-w-sm sm:max-w-lg")},m(c,d){T(c,n,d),z(t,n,null),x(n,s),h.m(n,null),x(n,l),x(n,o),z(a,o,null),x(o,i),z(f,o,null),u=!0},p(c,[d]){e=c,d&2&&C(r,r=e[1])?(xe(),D(h,1,1,O),$e(),h=we(),h.c(),I(h,1),h.m(n,l)):h.p(e,d);const m={};d&4&&(m.updateMode=e[2]),a.$set(m);const w={};d&16&&(w.$$scope={dirty:d,ctx:e}),f.$set(w)},i(c){u||(I(t.$$.fragment,c),I(h),I(a.$$.fragment,c),I(f.$$.fragment,c),u=!0)},o(c){D(t.$$.fragment,c),D(h),D(a.$$.fragment,c),D(f.$$.fragment,c),u=!1},d(c){c&&y(n),A(t),h.d(c),A(a),A(f)}}}function at(e,n,t){let s,r,l;Z(e,Y,a=>t(3,l=a));let o=0;return e.$$.update=()=>{e.$$.dirty&2&&t(0,s=()=>{t(1,o+=1)}),e.$$.dirty&1&&t(2,r=a=>{Le(Y,l=a,l),s()})},[s,o,r]}class ft extends N{constructor(n){super(),W(this,n,at,lt,C,{})}}export{ft as component};