const ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};ie();function z(){}function ue(t,e){for(const n in e)t[n]=e[n];return t}function le(t){return t()}function ee(){return Object.create(null)}function V(t){t.forEach(le)}function ce(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function ae(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function de(t){return Object.keys(t).length===0}function M(t,e,n,l){if(t){const s=oe(t,e,n,l);return t[0](s)}}function oe(t,e,n,l){return t[1]&&l?ue(n.ctx.slice(),t[1](l(e))):n.ctx}function P(t,e,n,l){if(t[2]&&l){const s=t[2](l(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let u=0;u<o;u+=1)r[u]=e.dirty[u]|s[u];return r}return e.dirty|s}return e.dirty}function H(t,e,n,l,s,r){if(s){const o=oe(e,n,l,r);t.p(o,s)}}function B(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function te(t){return t==null?"":t}function w(t,e){t.appendChild(e)}function _(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function k(){return S(" ")}function $e(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _e(t){return Array.from(t.childNodes)}let X;function N(t){X=t}const C=[],ne=[],G=[],se=[],me=Promise.resolve();let R=!1;function pe(){R||(R=!0,me.then(fe))}function U(t){G.push(t)}const W=new Set;let F=0;function fe(){const t=X;do{for(;F<C.length;){const e=C[F];F++,N(e),ge(e.$$)}for(N(null),C.length=0,F=0;ne.length;)ne.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];W.has(n)||(W.add(n),n())}G.length=0}while(C.length);for(;se.length;)se.pop()();R=!1,W.clear(),N(t)}function ge(t){if(t.fragment!==null){t.update(),V(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const K=new Set;let he;function v(t,e){t&&t.i&&(K.delete(t),t.i(e))}function y(t,e,n,l){if(t&&t.o){if(K.has(t))return;K.add(t),he.c.push(()=>{K.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function E(t){t&&t.c()}function I(t,e,n,l){const{fragment:s,on_mount:r,on_destroy:o,after_update:u}=t.$$;s&&s.m(e,n),l||U(()=>{const c=r.map(le).filter(ce);o?o.push(...c):V(c),t.$$.on_mount=[]}),u.forEach(U)}function T(t,e){const n=t.$$;n.fragment!==null&&(V(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ve(t,e){t.$$.dirty[0]===-1&&(C.push(t),pe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(t,e,n,l,s,r,o,u=[-1]){const c=X;N(t);const d=t.$$={fragment:null,ctx:null,props:r,update:z,not_equal:s,bound:ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ee(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};o&&o(d.root);let p=!1;if(d.ctx=n?n(t,e.props||{},(a,b,...f)=>{const i=f.length?f[0]:b;return d.ctx&&s(d.ctx[a],d.ctx[a]=i)&&(!d.skip_bound&&d.bound[a]&&d.bound[a](i),p&&ve(t,a)),b}):[],d.update(),p=!0,V(d.before_update),d.fragment=l?l(d.ctx):!1,e.target){if(e.hydrate){const a=_e(e.target);d.fragment&&d.fragment.l(a),a.forEach($)}else d.fragment&&d.fragment.c();e.intro&&v(t.$$.fragment),I(t,e.target,e.anchor,e.customElement),fe()}N(c)}class A{$destroy(){T(this,1),this.$destroy=z}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!de(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function be(t){let e;return{c(){e=g("div"),m(e,"id",t[0])},m(n,l){_(n,e,l)},p(n,[l]){l&1&&m(e,"id",n[0])},i:z,o:z,d(n){n&&$(e)}}}function ye(t,e,n){let{name:l}=e;return t.$$set=s=>{"name"in s&&n(0,l=s.name)},[l]}class we extends A{constructor(e){super(),O(this,e,ye,be,q,{name:0})}}function ke(t){let e,n;const l=t[1].default,s=M(l,t,t[0],null);return{c(){e=g("p"),s&&s.c(),m(e,"class","svelte-1ebetcy")},m(r,o){_(r,e,o),s&&s.m(e,null),n=!0},p(r,[o]){s&&s.p&&(!n||o&1)&&H(s,l,r,r[0],n?P(l,r[0],o,null):B(r[0]),null)},i(r){n||(v(s,r),n=!0)},o(r){y(s,r),n=!1},d(r){r&&$(e),s&&s.d(r)}}}function Le(t,e,n){let{$$slots:l={},$$scope:s}=e;return t.$$set=r=>{"$$scope"in r&&n(0,s=r.$$scope)},[s,l]}class Ie extends A{constructor(e){super(),O(this,e,Le,ke,q,{})}}function Te(t){let e,n;const l=t[1].default,s=M(l,t,t[0],null);return{c(){e=g("div"),s&&s.c(),m(e,"class","svelte-2la0mp")},m(r,o){_(r,e,o),s&&s.m(e,null),n=!0},p(r,[o]){s&&s.p&&(!n||o&1)&&H(s,l,r,r[0],n?P(l,r[0],o,null):B(r[0]),null)},i(r){n||(v(s,r),n=!0)},o(r){y(s,r),n=!1},d(r){r&&$(e),s&&s.d(r)}}}function Ee(t,e,n){let{$$slots:l={},$$scope:s}=e;return t.$$set=r=>{"$$scope"in r&&n(0,s=r.$$scope)},[s,l]}class J extends A{constructor(e){super(),O(this,e,Ee,Te,q,{})}}function je(t){let e,n;const l=t[1].default,s=M(l,t,t[0],null);return{c(){e=g("p"),s&&s.c(),m(e,"class","svelte-1bj7p8o")},m(r,o){_(r,e,o),s&&s.m(e,null),n=!0},p(r,[o]){s&&s.p&&(!n||o&1)&&H(s,l,r,r[0],n?P(l,r[0],o,null):B(r[0]),null)},i(r){n||(v(s,r),n=!0)},o(r){y(s,r),n=!1},d(r){r&&$(e),s&&s.d(r)}}}function qe(t,e,n){let{$$slots:l={},$$scope:s}=e;return t.$$set=r=>{"$$scope"in r&&n(0,s=r.$$scope)},[s,l]}class Oe extends A{constructor(e){super(),O(this,e,qe,je,q,{})}}function Ae(t){let e,n;const l=t[1].default,s=M(l,t,t[0],null);return{c(){e=g("p"),s&&s.c(),m(e,"class","svelte-zhi3go")},m(r,o){_(r,e,o),s&&s.m(e,null),n=!0},p(r,[o]){s&&s.p&&(!n||o&1)&&H(s,l,r,r[0],n?P(l,r[0],o,null):B(r[0]),null)},i(r){n||(v(s,r),n=!0)},o(r){y(s,r),n=!1},d(r){r&&$(e),s&&s.d(r)}}}function ze(t,e,n){let{$$slots:l={},$$scope:s}=e;return t.$$set=r=>{"$$scope"in r&&n(0,s=r.$$scope)},[s,l]}class Se extends A{constructor(e){super(),O(this,e,ze,Ae,q,{})}}function Ce(t){let e;return{c(){e=g("footer"),e.innerHTML='<p class="svelte-1v6fw8y">Copyright \xA9 Overture Games, LLC. All rights reserved.</p>',m(e,"class","svelte-1v6fw8y")},m(n,l){_(n,e,l)},p:z,i:z,o:z,d(n){n&&$(e)}}}class Ne extends A{constructor(e){super(),O(this,e,null,Ce,q,{})}}const Me="/assets/center_logo.40e6eb37.png";function re(t){let e,n;return{c(){e=g("i"),m(e,"class",n=te(t[1])+" svelte-1dp6z3c")},m(l,s){_(l,e,s)},p(l,s){s&2&&n!==(n=te(l[1])+" svelte-1dp6z3c")&&m(e,"class",n)},d(l){l&&$(e)}}}function Pe(t){let e,n,l,s,r,o,u,c,d,p,a=t[1]&&re(t);const b=t[4].default,f=M(b,t,t[3],null);return{c(){e=g("div"),n=g("a"),l=g("div"),s=g("div"),a&&a.c(),r=k(),o=g("p"),f&&f.c(),u=k(),c=g("i"),m(o,"class","svelte-1dp6z3c"),m(s,"class","svelte-1dp6z3c"),m(c,"class","arrow fas fa-arrow-right"),m(l,"class","outer svelte-1dp6z3c"),m(n,"href",t[0]),m(n,"target",d=t[2]?"_blank":null),m(n,"class","svelte-1dp6z3c"),m(e,"class","svelte-1dp6z3c")},m(i,L){_(i,e,L),w(e,n),w(n,l),w(l,s),a&&a.m(s,null),w(s,r),w(s,o),f&&f.m(o,null),w(l,u),w(l,c),p=!0},p(i,[L]){i[1]?a?a.p(i,L):(a=re(i),a.c(),a.m(s,r)):a&&(a.d(1),a=null),f&&f.p&&(!p||L&8)&&H(f,b,i,i[3],p?P(b,i[3],L,null):B(i[3]),null),(!p||L&1)&&m(n,"href",i[0]),(!p||L&4&&d!==(d=i[2]?"_blank":null))&&m(n,"target",d)},i(i){p||(v(f,i),p=!0)},o(i){y(f,i),p=!1},d(i){i&&$(e),a&&a.d(),f&&f.d(i)}}}function He(t,e,n){let{$$slots:l={},$$scope:s}=e,{to:r}=e,{faIcon:o=void 0}=e,{newTab:u=!1}=e;return t.$$set=c=>{"to"in c&&n(0,r=c.to),"faIcon"in c&&n(1,o=c.faIcon),"newTab"in c&&n(2,u=c.newTab),"$$scope"in c&&n(3,s=c.$$scope)},[r,o,u,s,l]}class Q extends A{constructor(e){super(),O(this,e,He,Pe,q,{to:0,faIcon:1,newTab:2})}}function Be(t){let e;return{c(){e=S("Stay updated on our Discord server")},m(n,l){_(n,e,l)},d(n){n&&$(e)}}}function De(t){let e;return{c(){e=S("Intervallic (Demo) on Steam")},m(n,l){_(n,e,l)},d(n){n&&$(e)}}}function Fe(t){let e;return{c(){e=S("Intervallic (Demo) on itch.io")},m(n,l){_(n,e,l)},d(n){n&&$(e)}}}function Ge(t){let e,n,l,s,r,o,u,c,d,p,a,b,f,i,L;return o=new Q({props:{to:"https://discord.gg/8qn2m3uKan",faIcon:"fab fa-discord",newTab:!0,$$slots:{default:[Be]},$$scope:{ctx:t}}}),c=new Q({props:{to:"https://store.steampowered.com/app/2270460",faIcon:"fab fa-steam",newTab:!0,$$slots:{default:[De]},$$scope:{ctx:t}}}),p=new Q({props:{to:"https://overturegames.itch.io/intervallic",faIcon:"fab fa-itch-io",newTab:!0,$$slots:{default:[Fe]},$$scope:{ctx:t}}}),{c(){e=g("div"),n=g("div"),l=g("img"),r=k(),E(o.$$.fragment),u=k(),E(c.$$.fragment),d=k(),E(p.$$.fragment),a=k(),b=g("button"),b.innerHTML='<i class="fas fa-angle-down svelte-1jvqedk"></i>',ae(l.src,s=Me)||m(l,"src",s),m(l,"alt","logo"),m(l,"class","svelte-1jvqedk"),m(n,"class","img-container svelte-1jvqedk"),m(b,"class","svelte-1jvqedk"),m(e,"class","bg svelte-1jvqedk")},m(h,j){_(h,e,j),w(e,n),w(n,l),w(e,r),I(o,e,null),w(e,u),I(c,e,null),w(e,d),I(p,e,null),w(e,a),w(e,b),f=!0,i||(L=$e(b,"click",t[0]),i=!0)},p(h,[j]){const Y={};j&2&&(Y.$$scope={dirty:j,ctx:h}),o.$set(Y);const Z={};j&2&&(Z.$$scope={dirty:j,ctx:h}),c.$set(Z);const x={};j&2&&(x.$$scope={dirty:j,ctx:h}),p.$set(x)},i(h){f||(v(o.$$.fragment,h),v(c.$$.fragment,h),v(p.$$.fragment,h),f=!0)},o(h){y(o.$$.fragment,h),y(c.$$.fragment,h),y(p.$$.fragment,h),f=!1},d(h){h&&$(e),T(o),T(c),T(p),i=!1,L()}}}function Ke(t){return[()=>{document.getElementById("content").scrollIntoView({behavior:"smooth"})}]}class Ve extends A{constructor(e){super(),O(this,e,Ke,Ge,q,{})}}function We(t){let e;return{c(){e=S("Overture Games leaves beginner musicians stress-free when practicing.")},m(n,l){_(n,e,l)},d(n){n&&$(e)}}}function Je(t){let e;return{c(){e=S(`Over 50% of beginner music students quit in the first 1-2 years of practice. \r
    After interviewing over a hundred students, parents and teachers, we found that \r
    the main reason for quitting was because practice is boring, lonely and frustrating. \r
    Current solutions fail to make practicing fun for everyone, and that's where our first \r
    game, Intervallic, comes in.`)},m(n,l){_(n,e,l)},d(n){n&&$(e)}}}function Qe(t){let e,n,l,s;return e=new Oe({props:{$$slots:{default:[We]},$$scope:{ctx:t}}}),l=new Ie({props:{$$slots:{default:[Je]},$$scope:{ctx:t}}}),{c(){E(e.$$.fragment),n=k(),E(l.$$.fragment)},m(r,o){I(e,r,o),_(r,n,o),I(l,r,o),s=!0},p(r,o){const u={};o&1&&(u.$$scope={dirty:o,ctx:r}),e.$set(u);const c={};o&1&&(c.$$scope={dirty:o,ctx:r}),l.$set(c)},i(r){s||(v(e.$$.fragment,r),v(l.$$.fragment,r),s=!0)},o(r){y(e.$$.fragment,r),y(l.$$.fragment,r),s=!1},d(r){T(e,r),r&&$(n),T(l,r)}}}function Re(t){let e;return{c(){e=S(`With Intervallic, you can play your instrument in front of a device with a microphone\r
     and watch as a character in the game reacts in real-time.`)},m(n,l){_(n,e,l)},d(n){n&&$(e)}}}function Ue(t){let e,n;return e=new Se({props:{$$slots:{default:[Re]},$$scope:{ctx:t}}}),{c(){E(e.$$.fragment)},m(l,s){I(e,l,s),n=!0},p(l,s){const r={};s&1&&(r.$$scope={dirty:s,ctx:l}),e.$set(r)},i(l){n||(v(e.$$.fragment,l),n=!0)},o(l){y(e.$$.fragment,l),n=!1},d(l){T(e,l)}}}function Xe(t){let e,n,l,s,r;return{c(){e=g("br"),n=k(),l=g("br"),s=k(),r=g("br")},m(o,u){_(o,e,u),_(o,n,u),_(o,l,u),_(o,s,u),_(o,r,u)},p:z,d(o){o&&$(e),o&&$(n),o&&$(l),o&&$(s),o&&$(r)}}}function Ye(t){let e,n,l,s,r,o,u,c,d,p,a,b;return e=new Ve({}),l=new we({props:{name:"content"}}),r=new J({props:{$$slots:{default:[Qe]},$$scope:{ctx:t}}}),u=new J({props:{$$slots:{default:[Ue]},$$scope:{ctx:t}}}),d=new J({props:{$$slots:{default:[Xe]},$$scope:{ctx:t}}}),a=new Ne({}),{c(){E(e.$$.fragment),n=k(),E(l.$$.fragment),s=k(),E(r.$$.fragment),o=k(),E(u.$$.fragment),c=k(),E(d.$$.fragment),p=k(),E(a.$$.fragment)},m(f,i){I(e,f,i),_(f,n,i),I(l,f,i),_(f,s,i),I(r,f,i),_(f,o,i),I(u,f,i),_(f,c,i),I(d,f,i),_(f,p,i),I(a,f,i),b=!0},p(f,[i]){const L={};i&1&&(L.$$scope={dirty:i,ctx:f}),r.$set(L);const h={};i&1&&(h.$$scope={dirty:i,ctx:f}),u.$set(h);const j={};i&1&&(j.$$scope={dirty:i,ctx:f}),d.$set(j)},i(f){b||(v(e.$$.fragment,f),v(l.$$.fragment,f),v(r.$$.fragment,f),v(u.$$.fragment,f),v(d.$$.fragment,f),v(a.$$.fragment,f),b=!0)},o(f){y(e.$$.fragment,f),y(l.$$.fragment,f),y(r.$$.fragment,f),y(u.$$.fragment,f),y(d.$$.fragment,f),y(a.$$.fragment,f),b=!1},d(f){T(e,f),f&&$(n),T(l,f),f&&$(s),T(r,f),f&&$(o),T(u,f),f&&$(c),T(d,f),f&&$(p),T(a,f)}}}class Ze extends A{constructor(e){super(),O(this,e,null,Ye,q,{})}}new Ze({target:document.getElementById("app")});