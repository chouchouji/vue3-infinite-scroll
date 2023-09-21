import{g as Ye,d as je,o as fe,c as fn,w as ce,q as he,v as ee,a as ge,z as x,T as ke,t as Ue,A as Ie,y as cn,D as Xe,f as dn,a8 as hn,e as le,a9 as mn,I as gn,R as pn,r as wn,l as vn,j as ze,aa as T,m as W,b as Nn,Y as En,Z as bn,n as Be,x as Pe,s as Sn,ab as Cn,G as Mn,B as Tn}from"./main-e626cd78.js";var Dn={errorMessage:{type:String,default:""},extraMessage:{type:String,default:""}},{name:kn,n:In}=Ye("form-details"),Bn={key:0},Pn={key:0};function Fn(e,n){return fe(),fn(ke,{name:e.n()},{default:ce(()=>[e.errorMessage||e.extraMessage||e.$slots["extra-message"]?(fe(),he("div",{key:0,class:ee(e.n())},[ge("div",{class:ee(e.n("error-message"))},[x(ke,{name:e.n("message")},{default:ce(()=>[e.errorMessage?(fe(),he("div",Bn,Ue(e.errorMessage),1)):Ie("v-if",!0)]),_:1},8,["name"])],2),ge("div",{class:ee(e.n("extra-message"))},[x(ke,{name:e.n("message")},{default:ce(()=>[cn(e.$slots,"extra-message",{},()=>[e.extraMessage?(fe(),he("div",Pn,Ue(e.extraMessage),1)):Ie("v-if",!0)])]),_:3},8,["name"])],2)],2)):Ie("v-if",!0)]),_:3},8,["name"])}var Ke=je({name:kn,props:Dn,setup:()=>({n:In})});Ke.render=Fn;const Je=Ke;Xe(Je);function Fe(){return Fe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},Fe.apply(this,arguments)}var qn=Symbol("FORM_BIND_FORM_ITEM_KEY");function Vn(){var{parentProvider:e,index:n,bindParent:i}=dn(qn),r=hn(),t=i?s=>{i(Fe({},s,{instance:r}))}:null;return{index:n,form:e,bindForm:t}}/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var te=9e15,J=1e9,qe="0123456789abcdef",pe="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",we="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",Ve={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-te,maxE:te,crypto:!1},Qe,G,N=!0,Ne="[DecimalError] ",K=Ne+"Invalid argument: ",ye=Ne+"Precision limit exceeded",_e=Ne+"crypto unavailable",xe="[object Decimal]",q=Math.floor,I=Math.pow,Ln=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,An=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,On=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,en=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Z=1e7,w=7,Rn=9007199254740991,Un=pe.length-1,Le=we.length-1,h={toStringTag:xe};h.absoluteValue=h.abs=function(){var e=new this.constructor(this);return e.s<0&&(e.s=1),p(e)};h.ceil=function(){return p(new this.constructor(this),this.e+1,2)};h.clampedTo=h.clamp=function(e,n){var i,r=this,t=r.constructor;if(e=new t(e),n=new t(n),!e.s||!n.s)return new t(NaN);if(e.gt(n))throw Error(K+n);return i=r.cmp(e),i<0?e:r.cmp(n)>0?n:new t(r)};h.comparedTo=h.cmp=function(e){var n,i,r,t,s=this,o=s.d,u=(e=new s.constructor(e)).d,l=s.s,a=e.s;if(!o||!u)return!l||!a?NaN:l!==a?l:o===u?0:!o^l<0?1:-1;if(!o[0]||!u[0])return o[0]?l:u[0]?-a:0;if(l!==a)return l;if(s.e!==e.e)return s.e>e.e^l<0?1:-1;for(r=o.length,t=u.length,n=0,i=r<t?r:t;n<i;++n)if(o[n]!==u[n])return o[n]>u[n]^l<0?1:-1;return r===t?0:r>t^l<0?1:-1};h.cosine=h.cos=function(){var e,n,i=this,r=i.constructor;return i.d?i.d[0]?(e=r.precision,n=r.rounding,r.precision=e+Math.max(i.e,i.sd())+w,r.rounding=1,i=zn(r,on(r,i)),r.precision=e,r.rounding=n,p(G==2||G==3?i.neg():i,e,n,!0)):new r(1):new r(NaN)};h.cubeRoot=h.cbrt=function(){var e,n,i,r,t,s,o,u,l,a,f=this,c=f.constructor;if(!f.isFinite()||f.isZero())return new c(f);for(N=!1,s=f.s*I(f.s*f,1/3),!s||Math.abs(s)==1/0?(i=P(f.d),e=f.e,(s=(e-i.length+1)%3)&&(i+=s==1||s==-2?"0":"00"),s=I(i,1/3),e=q((e+1)/3)-(e%3==(e<0?-1:2)),s==1/0?i="5e"+e:(i=s.toExponential(),i=i.slice(0,i.indexOf("e")+1)+e),r=new c(i),r.s=f.s):r=new c(s.toString()),o=(e=c.precision)+3;;)if(u=r,l=u.times(u).times(u),a=l.plus(f),r=S(a.plus(f).times(u),a.plus(l),o+2,1),P(u.d).slice(0,o)===(i=P(r.d)).slice(0,o))if(i=i.slice(o-3,o+1),i=="9999"||!t&&i=="4999"){if(!t&&(p(u,e+1,0),u.times(u).times(u).eq(f))){r=u;break}o+=4,t=1}else{(!+i||!+i.slice(1)&&i.charAt(0)=="5")&&(p(r,e+1,1),n=!r.times(r).times(r).eq(f));break}return N=!0,p(r,e,c.rounding,n)};h.decimalPlaces=h.dp=function(){var e,n=this.d,i=NaN;if(n){if(e=n.length-1,i=(e-q(this.e/w))*w,e=n[e],e)for(;e%10==0;e/=10)i--;i<0&&(i=0)}return i};h.dividedBy=h.div=function(e){return S(this,new this.constructor(e))};h.dividedToIntegerBy=h.divToInt=function(e){var n=this,i=n.constructor;return p(S(n,new i(e),0,1,1),i.precision,i.rounding)};h.equals=h.eq=function(e){return this.cmp(e)===0};h.floor=function(){return p(new this.constructor(this),this.e+1,3)};h.greaterThan=h.gt=function(e){return this.cmp(e)>0};h.greaterThanOrEqualTo=h.gte=function(e){var n=this.cmp(e);return n==1||n===0};h.hyperbolicCosine=h.cosh=function(){var e,n,i,r,t,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;i=o.precision,r=o.rounding,o.precision=i+Math.max(s.e,s.sd())+4,o.rounding=1,t=s.d.length,t<32?(e=Math.ceil(t/3),n=(1/be(4,e)).toString()):(e=16,n="2.3283064365386962890625e-10"),s=se(o,1,s.times(n),new o(1),!0);for(var l,a=e,f=new o(8);a--;)l=s.times(s),s=u.minus(l.times(f.minus(l.times(f))));return p(s,o.precision=i,o.rounding=r,!0)};h.hyperbolicSine=h.sinh=function(){var e,n,i,r,t=this,s=t.constructor;if(!t.isFinite()||t.isZero())return new s(t);if(n=s.precision,i=s.rounding,s.precision=n+Math.max(t.e,t.sd())+4,s.rounding=1,r=t.d.length,r<3)t=se(s,2,t,t,!0);else{e=1.4*Math.sqrt(r),e=e>16?16:e|0,t=t.times(1/be(5,e)),t=se(s,2,t,t,!0);for(var o,u=new s(5),l=new s(16),a=new s(20);e--;)o=t.times(t),t=t.times(u.plus(o.times(l.times(o).plus(a))))}return s.precision=n,s.rounding=i,p(t,n,i,!0)};h.hyperbolicTangent=h.tanh=function(){var e,n,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(e=r.precision,n=r.rounding,r.precision=e+7,r.rounding=1,S(i.sinh(),i.cosh(),r.precision=e,r.rounding=n)):new r(i.s)};h.inverseCosine=h.acos=function(){var e,n=this,i=n.constructor,r=n.abs().cmp(1),t=i.precision,s=i.rounding;return r!==-1?r===0?n.isNeg()?z(i,t,s):new i(0):new i(NaN):n.isZero()?z(i,t+4,s).times(.5):(i.precision=t+6,i.rounding=1,n=n.asin(),e=z(i,t+4,s).times(.5),i.precision=t,i.rounding=s,e.minus(n))};h.inverseHyperbolicCosine=h.acosh=function(){var e,n,i=this,r=i.constructor;return i.lte(1)?new r(i.eq(1)?0:NaN):i.isFinite()?(e=r.precision,n=r.rounding,r.precision=e+Math.max(Math.abs(i.e),i.sd())+4,r.rounding=1,N=!1,i=i.times(i).minus(1).sqrt().plus(i),N=!0,r.precision=e,r.rounding=n,i.ln()):new r(i)};h.inverseHyperbolicSine=h.asinh=function(){var e,n,i=this,r=i.constructor;return!i.isFinite()||i.isZero()?new r(i):(e=r.precision,n=r.rounding,r.precision=e+2*Math.max(Math.abs(i.e),i.sd())+6,r.rounding=1,N=!1,i=i.times(i).plus(1).sqrt().plus(i),N=!0,r.precision=e,r.rounding=n,i.ln())};h.inverseHyperbolicTangent=h.atanh=function(){var e,n,i,r,t=this,s=t.constructor;return t.isFinite()?t.e>=0?new s(t.abs().eq(1)?t.s/0:t.isZero()?t:NaN):(e=s.precision,n=s.rounding,r=t.sd(),Math.max(r,e)<2*-t.e-1?p(new s(t),e,n,!0):(s.precision=i=r-t.e,t=S(t.plus(1),new s(1).minus(t),i+e,1),s.precision=e+4,s.rounding=1,t=t.ln(),s.precision=e,s.rounding=n,t.times(.5))):new s(NaN)};h.inverseSine=h.asin=function(){var e,n,i,r,t=this,s=t.constructor;return t.isZero()?new s(t):(n=t.abs().cmp(1),i=s.precision,r=s.rounding,n!==-1?n===0?(e=z(s,i+4,r).times(.5),e.s=t.s,e):new s(NaN):(s.precision=i+6,s.rounding=1,t=t.div(new s(1).minus(t.times(t)).sqrt().plus(1)).atan(),s.precision=i,s.rounding=r,t.times(2)))};h.inverseTangent=h.atan=function(){var e,n,i,r,t,s,o,u,l,a=this,f=a.constructor,c=f.precision,d=f.rounding;if(a.isFinite()){if(a.isZero())return new f(a);if(a.abs().eq(1)&&c+4<=Le)return o=z(f,c+4,d).times(.25),o.s=a.s,o}else{if(!a.s)return new f(NaN);if(c+4<=Le)return o=z(f,c+4,d).times(.5),o.s=a.s,o}for(f.precision=u=c+10,f.rounding=1,i=Math.min(28,u/w+2|0),e=i;e;--e)a=a.div(a.times(a).plus(1).sqrt().plus(1));for(N=!1,n=Math.ceil(u/w),r=1,l=a.times(a),o=new f(a),t=a;e!==-1;)if(t=t.times(l),s=o.minus(t.div(r+=2)),t=t.times(l),o=s.plus(t.div(r+=2)),o.d[n]!==void 0)for(e=n;o.d[e]===s.d[e]&&e--;);return i&&(o=o.times(2<<i-1)),N=!0,p(o,f.precision=c,f.rounding=d,!0)};h.isFinite=function(){return!!this.d};h.isInteger=h.isInt=function(){return!!this.d&&q(this.e/w)>this.d.length-2};h.isNaN=function(){return!this.s};h.isNegative=h.isNeg=function(){return this.s<0};h.isPositive=h.isPos=function(){return this.s>0};h.isZero=function(){return!!this.d&&this.d[0]===0};h.lessThan=h.lt=function(e){return this.cmp(e)<0};h.lessThanOrEqualTo=h.lte=function(e){return this.cmp(e)<1};h.logarithm=h.log=function(e){var n,i,r,t,s,o,u,l,a=this,f=a.constructor,c=f.precision,d=f.rounding,g=5;if(e==null)e=new f(10),n=!0;else{if(e=new f(e),i=e.d,e.s<0||!i||!i[0]||e.eq(1))return new f(NaN);n=e.eq(10)}if(i=a.d,a.s<0||!i||!i[0]||a.eq(1))return new f(i&&!i[0]?-1/0:a.s!=1?NaN:i?0:1/0);if(n)if(i.length>1)s=!0;else{for(t=i[0];t%10===0;)t/=10;s=t!==1}if(N=!1,u=c+g,o=j(a,u),r=n?ve(f,u+10):j(e,u),l=S(o,r,u,1),de(l.d,t=c,d))do if(u+=10,o=j(a,u),r=n?ve(f,u+10):j(e,u),l=S(o,r,u,1),!s){+P(l.d).slice(t+1,t+15)+1==1e14&&(l=p(l,c+1,0));break}while(de(l.d,t+=10,d));return N=!0,p(l,c,d)};h.minus=h.sub=function(e){var n,i,r,t,s,o,u,l,a,f,c,d,g=this,E=g.constructor;if(e=new E(e),!g.d||!e.d)return!g.s||!e.s?e=new E(NaN):g.d?e.s=-e.s:e=new E(e.d||g.s!==e.s?g:NaN),e;if(g.s!=e.s)return e.s=-e.s,g.plus(e);if(a=g.d,d=e.d,u=E.precision,l=E.rounding,!a[0]||!d[0]){if(d[0])e.s=-e.s;else if(a[0])e=new E(g);else return new E(l===3?-0:0);return N?p(e,u,l):e}if(i=q(e.e/w),f=q(g.e/w),a=a.slice(),s=f-i,s){for(c=s<0,c?(n=a,s=-s,o=d.length):(n=d,i=f,o=a.length),r=Math.max(Math.ceil(u/w),o)+2,s>r&&(s=r,n.length=1),n.reverse(),r=s;r--;)n.push(0);n.reverse()}else{for(r=a.length,o=d.length,c=r<o,c&&(o=r),r=0;r<o;r++)if(a[r]!=d[r]){c=a[r]<d[r];break}s=0}for(c&&(n=a,a=d,d=n,e.s=-e.s),o=a.length,r=d.length-o;r>0;--r)a[o++]=0;for(r=d.length;r>s;){if(a[--r]<d[r]){for(t=r;t&&a[--t]===0;)a[t]=Z-1;--a[t],a[r]+=Z}a[r]-=d[r]}for(;a[--o]===0;)a.pop();for(;a[0]===0;a.shift())--i;return a[0]?(e.d=a,e.e=Ee(a,i),N?p(e,u,l):e):new E(l===3?-0:0)};h.modulo=h.mod=function(e){var n,i=this,r=i.constructor;return e=new r(e),!i.d||!e.s||e.d&&!e.d[0]?new r(NaN):!e.d||i.d&&!i.d[0]?p(new r(i),r.precision,r.rounding):(N=!1,r.modulo==9?(n=S(i,e.abs(),0,3,1),n.s*=e.s):n=S(i,e,0,r.modulo,1),n=n.times(e),N=!0,i.minus(n))};h.naturalExponential=h.exp=function(){return Ae(this)};h.naturalLogarithm=h.ln=function(){return j(this)};h.negated=h.neg=function(){var e=new this.constructor(this);return e.s=-e.s,p(e)};h.plus=h.add=function(e){var n,i,r,t,s,o,u,l,a,f,c=this,d=c.constructor;if(e=new d(e),!c.d||!e.d)return!c.s||!e.s?e=new d(NaN):c.d||(e=new d(e.d||c.s===e.s?c:NaN)),e;if(c.s!=e.s)return e.s=-e.s,c.minus(e);if(a=c.d,f=e.d,u=d.precision,l=d.rounding,!a[0]||!f[0])return f[0]||(e=new d(c)),N?p(e,u,l):e;if(s=q(c.e/w),r=q(e.e/w),a=a.slice(),t=s-r,t){for(t<0?(i=a,t=-t,o=f.length):(i=f,r=s,o=a.length),s=Math.ceil(u/w),o=s>o?s+1:o+1,t>o&&(t=o,i.length=1),i.reverse();t--;)i.push(0);i.reverse()}for(o=a.length,t=f.length,o-t<0&&(t=o,i=f,f=a,a=i),n=0;t;)n=(a[--t]=a[t]+f[t]+n)/Z|0,a[t]%=Z;for(n&&(a.unshift(n),++r),o=a.length;a[--o]==0;)a.pop();return e.d=a,e.e=Ee(a,r),N?p(e,u,l):e};h.precision=h.sd=function(e){var n,i=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(K+e);return i.d?(n=nn(i.d),e&&i.e+1>n&&(n=i.e+1)):n=NaN,n};h.round=function(){var e=this,n=e.constructor;return p(new n(e),e.e+1,n.rounding)};h.sine=h.sin=function(){var e,n,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(e=r.precision,n=r.rounding,r.precision=e+Math.max(i.e,i.sd())+w,r.rounding=1,i=$n(r,on(r,i)),r.precision=e,r.rounding=n,p(G>2?i.neg():i,e,n,!0)):new r(NaN)};h.squareRoot=h.sqrt=function(){var e,n,i,r,t,s,o=this,u=o.d,l=o.e,a=o.s,f=o.constructor;if(a!==1||!u||!u[0])return new f(!a||a<0&&(!u||u[0])?NaN:u?o:1/0);for(N=!1,a=Math.sqrt(+o),a==0||a==1/0?(n=P(u),(n.length+l)%2==0&&(n+="0"),a=Math.sqrt(n),l=q((l+1)/2)-(l<0||l%2),a==1/0?n="5e"+l:(n=a.toExponential(),n=n.slice(0,n.indexOf("e")+1)+l),r=new f(n)):r=new f(a.toString()),i=(l=f.precision)+3;;)if(s=r,r=s.plus(S(o,s,i+2,1)).times(.5),P(s.d).slice(0,i)===(n=P(r.d)).slice(0,i))if(n=n.slice(i-3,i+1),n=="9999"||!t&&n=="4999"){if(!t&&(p(s,l+1,0),s.times(s).eq(o))){r=s;break}i+=4,t=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(p(r,l+1,1),e=!r.times(r).eq(o));break}return N=!0,p(r,l,f.rounding,e)};h.tangent=h.tan=function(){var e,n,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(e=r.precision,n=r.rounding,r.precision=e+10,r.rounding=1,i=i.sin(),i.s=1,i=S(i,new r(1).minus(i.times(i)).sqrt(),e+10,0),r.precision=e,r.rounding=n,p(G==2||G==4?i.neg():i,e,n,!0)):new r(NaN)};h.times=h.mul=function(e){var n,i,r,t,s,o,u,l,a,f=this,c=f.constructor,d=f.d,g=(e=new c(e)).d;if(e.s*=f.s,!d||!d[0]||!g||!g[0])return new c(!e.s||d&&!d[0]&&!g||g&&!g[0]&&!d?NaN:!d||!g?e.s/0:e.s*0);for(i=q(f.e/w)+q(e.e/w),l=d.length,a=g.length,l<a&&(s=d,d=g,g=s,o=l,l=a,a=o),s=[],o=l+a,r=o;r--;)s.push(0);for(r=a;--r>=0;){for(n=0,t=l+r;t>r;)u=s[t]+g[r]*d[t-r-1]+n,s[t--]=u%Z|0,n=u/Z|0;s[t]=(s[t]+n)%Z|0}for(;!s[--o];)s.pop();return n?++i:s.shift(),e.d=s,e.e=Ee(s,i),N?p(e,c.precision,c.rounding):e};h.toBinary=function(e,n){return Re(this,2,e,n)};h.toDecimalPlaces=h.toDP=function(e,n){var i=this,r=i.constructor;return i=new r(i),e===void 0?i:(V(e,0,J),n===void 0?n=r.rounding:V(n,0,8),p(i,e+i.e+1,n))};h.toExponential=function(e,n){var i,r=this,t=r.constructor;return e===void 0?i=H(r,!0):(V(e,0,J),n===void 0?n=t.rounding:V(n,0,8),r=p(new t(r),e+1,n),i=H(r,!0,e+1)),r.isNeg()&&!r.isZero()?"-"+i:i};h.toFixed=function(e,n){var i,r,t=this,s=t.constructor;return e===void 0?i=H(t):(V(e,0,J),n===void 0?n=s.rounding:V(n,0,8),r=p(new s(t),e+t.e+1,n),i=H(r,!1,e+r.e+1)),t.isNeg()&&!t.isZero()?"-"+i:i};h.toFraction=function(e){var n,i,r,t,s,o,u,l,a,f,c,d,g=this,E=g.d,v=g.constructor;if(!E)return new v(g);if(a=i=new v(1),r=l=new v(0),n=new v(r),s=n.e=nn(E)-g.e-1,o=s%w,n.d[0]=I(10,o<0?w+o:o),e==null)e=s>0?n:a;else{if(u=new v(e),!u.isInt()||u.lt(a))throw Error(K+u);e=u.gt(n)?s>0?n:a:u}for(N=!1,u=new v(P(E)),f=v.precision,v.precision=s=E.length*w*2;c=S(u,n,0,1,1),t=i.plus(c.times(r)),t.cmp(e)!=1;)i=r,r=t,t=a,a=l.plus(c.times(t)),l=t,t=n,n=u.minus(c.times(t)),u=t;return t=S(e.minus(i),r,0,1,1),l=l.plus(t.times(a)),i=i.plus(t.times(r)),l.s=a.s=g.s,d=S(a,r,s,1).minus(g).abs().cmp(S(l,i,s,1).minus(g).abs())<1?[a,r]:[l,i],v.precision=f,N=!0,d};h.toHexadecimal=h.toHex=function(e,n){return Re(this,16,e,n)};h.toNearest=function(e,n){var i=this,r=i.constructor;if(i=new r(i),e==null){if(!i.d)return i;e=new r(1),n=r.rounding}else{if(e=new r(e),n===void 0?n=r.rounding:V(n,0,8),!i.d)return e.s?i:e;if(!e.d)return e.s&&(e.s=i.s),e}return e.d[0]?(N=!1,i=S(i,e,0,n,1).times(e),N=!0,p(i)):(e.s=i.s,i=e),i};h.toNumber=function(){return+this};h.toOctal=function(e,n){return Re(this,8,e,n)};h.toPower=h.pow=function(e){var n,i,r,t,s,o,u=this,l=u.constructor,a=+(e=new l(e));if(!u.d||!e.d||!u.d[0]||!e.d[0])return new l(I(+u,a));if(u=new l(u),u.eq(1))return u;if(r=l.precision,s=l.rounding,e.eq(1))return p(u,r,s);if(n=q(e.e/w),n>=e.d.length-1&&(i=a<0?-a:a)<=Rn)return t=rn(l,u,i,r),e.s<0?new l(1).div(t):p(t,r,s);if(o=u.s,o<0){if(n<e.d.length-1)return new l(NaN);if(e.d[n]&1||(o=1),u.e==0&&u.d[0]==1&&u.d.length==1)return u.s=o,u}return i=I(+u,a),n=i==0||!isFinite(i)?q(a*(Math.log("0."+P(u.d))/Math.LN10+u.e+1)):new l(i+"").e,n>l.maxE+1||n<l.minE-1?new l(n>0?o/0:0):(N=!1,l.rounding=u.s=1,i=Math.min(12,(n+"").length),t=Ae(e.times(j(u,r+i)),r),t.d&&(t=p(t,r+5,1),de(t.d,r,s)&&(n=r+10,t=p(Ae(e.times(j(u,n+i)),n),n+5,1),+P(t.d).slice(r+1,r+15)+1==1e14&&(t=p(t,r+1,0)))),t.s=o,N=!0,l.rounding=s,p(t,r,s))};h.toPrecision=function(e,n){var i,r=this,t=r.constructor;return e===void 0?i=H(r,r.e<=t.toExpNeg||r.e>=t.toExpPos):(V(e,1,J),n===void 0?n=t.rounding:V(n,0,8),r=p(new t(r),e,n),i=H(r,e<=r.e||r.e<=t.toExpNeg,e)),r.isNeg()&&!r.isZero()?"-"+i:i};h.toSignificantDigits=h.toSD=function(e,n){var i=this,r=i.constructor;return e===void 0?(e=r.precision,n=r.rounding):(V(e,1,J),n===void 0?n=r.rounding:V(n,0,8)),p(new r(i),e,n)};h.toString=function(){var e=this,n=e.constructor,i=H(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()&&!e.isZero()?"-"+i:i};h.truncated=h.trunc=function(){return p(new this.constructor(this),this.e+1,1)};h.valueOf=h.toJSON=function(){var e=this,n=e.constructor,i=H(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()?"-"+i:i};function P(e){var n,i,r,t=e.length-1,s="",o=e[0];if(t>0){for(s+=o,n=1;n<t;n++)r=e[n]+"",i=w-r.length,i&&(s+=Y(i)),s+=r;o=e[n],r=o+"",i=w-r.length,i&&(s+=Y(i))}else if(o===0)return"0";for(;o%10===0;)o/=10;return s+o}function V(e,n,i){if(e!==~~e||e<n||e>i)throw Error(K+e)}function de(e,n,i,r){var t,s,o,u;for(s=e[0];s>=10;s/=10)--n;return--n<0?(n+=w,t=0):(t=Math.ceil((n+1)/w),n%=w),s=I(10,w-n),u=e[t]%s|0,r==null?n<3?(n==0?u=u/100|0:n==1&&(u=u/10|0),o=i<4&&u==99999||i>3&&u==49999||u==5e4||u==0):o=(i<4&&u+1==s||i>3&&u+1==s/2)&&(e[t+1]/s/100|0)==I(10,n-2)-1||(u==s/2||u==0)&&(e[t+1]/s/100|0)==0:n<4?(n==0?u=u/1e3|0:n==1?u=u/100|0:n==2&&(u=u/10|0),o=(r||i<4)&&u==9999||!r&&i>3&&u==4999):o=((r||i<4)&&u+1==s||!r&&i>3&&u+1==s/2)&&(e[t+1]/s/1e3|0)==I(10,n-3)-1,o}function me(e,n,i){for(var r,t=[0],s,o=0,u=e.length;o<u;){for(s=t.length;s--;)t[s]*=n;for(t[0]+=qe.indexOf(e.charAt(o++)),r=0;r<t.length;r++)t[r]>i-1&&(t[r+1]===void 0&&(t[r+1]=0),t[r+1]+=t[r]/i|0,t[r]%=i)}return t.reverse()}function zn(e,n){var i,r,t;if(n.isZero())return n;r=n.d.length,r<32?(i=Math.ceil(r/3),t=(1/be(4,i)).toString()):(i=16,t="2.3283064365386962890625e-10"),e.precision+=i,n=se(e,1,n.times(t),new e(1));for(var s=i;s--;){var o=n.times(n);n=o.times(o).minus(o).times(8).plus(1)}return e.precision-=i,n}var S=function(){function e(r,t,s){var o,u=0,l=r.length;for(r=r.slice();l--;)o=r[l]*t+u,r[l]=o%s|0,u=o/s|0;return u&&r.unshift(u),r}function n(r,t,s,o){var u,l;if(s!=o)l=s>o?1:-1;else for(u=l=0;u<s;u++)if(r[u]!=t[u]){l=r[u]>t[u]?1:-1;break}return l}function i(r,t,s,o){for(var u=0;s--;)r[s]-=u,u=r[s]<t[s]?1:0,r[s]=u*o+r[s]-t[s];for(;!r[0]&&r.length>1;)r.shift()}return function(r,t,s,o,u,l){var a,f,c,d,g,E,v,B,C,F,b,M,ne,O,ie,re,Q,oe,L,y,_=r.constructor,$=r.s==t.s?1:-1,D=r.d,m=t.d;if(!D||!D[0]||!m||!m[0])return new _(!r.s||!t.s||(D?m&&D[0]==m[0]:!m)?NaN:D&&D[0]==0||!m?$*0:$/0);for(l?(g=1,f=r.e-t.e):(l=Z,g=w,f=q(r.e/g)-q(t.e/g)),L=m.length,Q=D.length,C=new _($),F=C.d=[],c=0;m[c]==(D[c]||0);c++);if(m[c]>(D[c]||0)&&f--,s==null?(O=s=_.precision,o=_.rounding):u?O=s+(r.e-t.e)+1:O=s,O<0)F.push(1),E=!0;else{if(O=O/g+2|0,c=0,L==1){for(d=0,m=m[0],O++;(c<Q||d)&&O--;c++)ie=d*l+(D[c]||0),F[c]=ie/m|0,d=ie%m|0;E=d||c<Q}else{for(d=l/(m[0]+1)|0,d>1&&(m=e(m,d,l),D=e(D,d,l),L=m.length,Q=D.length),re=L,b=D.slice(0,L),M=b.length;M<L;)b[M++]=0;y=m.slice(),y.unshift(0),oe=m[0],m[1]>=l/2&&++oe;do d=0,a=n(m,b,L,M),a<0?(ne=b[0],L!=M&&(ne=ne*l+(b[1]||0)),d=ne/oe|0,d>1?(d>=l&&(d=l-1),v=e(m,d,l),B=v.length,M=b.length,a=n(v,b,B,M),a==1&&(d--,i(v,L<B?y:m,B,l))):(d==0&&(a=d=1),v=m.slice()),B=v.length,B<M&&v.unshift(0),i(b,v,M,l),a==-1&&(M=b.length,a=n(m,b,L,M),a<1&&(d++,i(b,L<M?y:m,M,l))),M=b.length):a===0&&(d++,b=[0]),F[c++]=d,a&&b[0]?b[M++]=D[re]||0:(b=[D[re]],M=1);while((re++<Q||b[0]!==void 0)&&O--);E=b[0]!==void 0}F[0]||F.shift()}if(g==1)C.e=f,Qe=E;else{for(c=1,d=F[0];d>=10;d/=10)c++;C.e=c+f*g-1,p(C,u?s+C.e+1:s,o,E)}return C}}();function p(e,n,i,r){var t,s,o,u,l,a,f,c,d,g=e.constructor;e:if(n!=null){if(c=e.d,!c)return e;for(t=1,u=c[0];u>=10;u/=10)t++;if(s=n-t,s<0)s+=w,o=n,f=c[d=0],l=f/I(10,t-o-1)%10|0;else if(d=Math.ceil((s+1)/w),u=c.length,d>=u)if(r){for(;u++<=d;)c.push(0);f=l=0,t=1,s%=w,o=s-w+1}else break e;else{for(f=u=c[d],t=1;u>=10;u/=10)t++;s%=w,o=s-w+t,l=o<0?0:f/I(10,t-o-1)%10|0}if(r=r||n<0||c[d+1]!==void 0||(o<0?f:f%I(10,t-o-1)),a=i<4?(l||r)&&(i==0||i==(e.s<0?3:2)):l>5||l==5&&(i==4||r||i==6&&(s>0?o>0?f/I(10,t-o):0:c[d-1])%10&1||i==(e.s<0?8:7)),n<1||!c[0])return c.length=0,a?(n-=e.e+1,c[0]=I(10,(w-n%w)%w),e.e=-n||0):c[0]=e.e=0,e;if(s==0?(c.length=d,u=1,d--):(c.length=d+1,u=I(10,w-s),c[d]=o>0?(f/I(10,t-o)%I(10,o)|0)*u:0),a)for(;;)if(d==0){for(s=1,o=c[0];o>=10;o/=10)s++;for(o=c[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(e.e++,c[0]==Z&&(c[0]=1));break}else{if(c[d]+=u,c[d]!=Z)break;c[d--]=0,u=1}for(s=c.length;c[--s]===0;)c.pop()}return N&&(e.e>g.maxE?(e.d=null,e.e=NaN):e.e<g.minE&&(e.e=0,e.d=[0])),e}function H(e,n,i){if(!e.isFinite())return sn(e);var r,t=e.e,s=P(e.d),o=s.length;return n?(i&&(r=i-o)>0?s=s.charAt(0)+"."+s.slice(1)+Y(r):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(e.e<0?"e":"e+")+e.e):t<0?(s="0."+Y(-t-1)+s,i&&(r=i-o)>0&&(s+=Y(r))):t>=o?(s+=Y(t+1-o),i&&(r=i-t-1)>0&&(s=s+"."+Y(r))):((r=t+1)<o&&(s=s.slice(0,r)+"."+s.slice(r)),i&&(r=i-o)>0&&(t+1===o&&(s+="."),s+=Y(r))),s}function Ee(e,n){var i=e[0];for(n*=w;i>=10;i/=10)n++;return n}function ve(e,n,i){if(n>Un)throw N=!0,i&&(e.precision=i),Error(ye);return p(new e(pe),n,1,!0)}function z(e,n,i){if(n>Le)throw Error(ye);return p(new e(we),n,i,!0)}function nn(e){var n=e.length-1,i=n*w+1;if(n=e[n],n){for(;n%10==0;n/=10)i--;for(n=e[0];n>=10;n/=10)i++}return i}function Y(e){for(var n="";e--;)n+="0";return n}function rn(e,n,i,r){var t,s=new e(1),o=Math.ceil(r/w+4);for(N=!1;;){if(i%2&&(s=s.times(n),$e(s.d,o)&&(t=!0)),i=q(i/2),i===0){i=s.d.length-1,t&&s.d[i]===0&&++s.d[i];break}n=n.times(n),$e(n.d,o)}return N=!0,s}function Ze(e){return e.d[e.d.length-1]&1}function tn(e,n,i){for(var r,t=new e(n[0]),s=0;++s<n.length;)if(r=new e(n[s]),r.s)t[i](r)&&(t=r);else{t=r;break}return t}function Ae(e,n){var i,r,t,s,o,u,l,a=0,f=0,c=0,d=e.constructor,g=d.rounding,E=d.precision;if(!e.d||!e.d[0]||e.e>17)return new d(e.d?e.d[0]?e.s<0?0:1/0:1:e.s?e.s<0?0:e:0/0);for(n==null?(N=!1,l=E):l=n,u=new d(.03125);e.e>-2;)e=e.times(u),c+=5;for(r=Math.log(I(2,c))/Math.LN10*2+5|0,l+=r,i=s=o=new d(1),d.precision=l;;){if(s=p(s.times(e),l,1),i=i.times(++f),u=o.plus(S(s,i,l,1)),P(u.d).slice(0,l)===P(o.d).slice(0,l)){for(t=c;t--;)o=p(o.times(o),l,1);if(n==null)if(a<3&&de(o.d,l-r,g,a))d.precision=l+=10,i=s=u=new d(1),f=0,a++;else return p(o,d.precision=E,g,N=!0);else return d.precision=E,o}o=u}}function j(e,n){var i,r,t,s,o,u,l,a,f,c,d,g=1,E=10,v=e,B=v.d,C=v.constructor,F=C.rounding,b=C.precision;if(v.s<0||!B||!B[0]||!v.e&&B[0]==1&&B.length==1)return new C(B&&!B[0]?-1/0:v.s!=1?NaN:B?0:v);if(n==null?(N=!1,f=b):f=n,C.precision=f+=E,i=P(B),r=i.charAt(0),Math.abs(s=v.e)<15e14){for(;r<7&&r!=1||r==1&&i.charAt(1)>3;)v=v.times(e),i=P(v.d),r=i.charAt(0),g++;s=v.e,r>1?(v=new C("0."+i),s++):v=new C(r+"."+i.slice(1))}else return a=ve(C,f+2,b).times(s+""),v=j(new C(r+"."+i.slice(1)),f-E).plus(a),C.precision=b,n==null?p(v,b,F,N=!0):v;for(c=v,l=o=v=S(v.minus(1),v.plus(1),f,1),d=p(v.times(v),f,1),t=3;;){if(o=p(o.times(d),f,1),a=l.plus(S(o,new C(t),f,1)),P(a.d).slice(0,f)===P(l.d).slice(0,f))if(l=l.times(2),s!==0&&(l=l.plus(ve(C,f+2,b).times(s+""))),l=S(l,new C(g),f,1),n==null)if(de(l.d,f-E,F,u))C.precision=f+=E,a=o=v=S(c.minus(1),c.plus(1),f,1),d=p(v.times(v),f,1),t=u=1;else return p(l,C.precision=b,F,N=!0);else return C.precision=b,l;l=a,t+=2}}function sn(e){return String(e.s*e.s/0)}function Oe(e,n){var i,r,t;for((i=n.indexOf("."))>-1&&(n=n.replace(".","")),(r=n.search(/e/i))>0?(i<0&&(i=r),i+=+n.slice(r+1),n=n.substring(0,r)):i<0&&(i=n.length),r=0;n.charCodeAt(r)===48;r++);for(t=n.length;n.charCodeAt(t-1)===48;--t);if(n=n.slice(r,t),n){if(t-=r,e.e=i=i-r-1,e.d=[],r=(i+1)%w,i<0&&(r+=w),r<t){for(r&&e.d.push(+n.slice(0,r)),t-=w;r<t;)e.d.push(+n.slice(r,r+=w));n=n.slice(r),r=w-n.length}else r-=t;for(;r--;)n+="0";e.d.push(+n),N&&(e.e>e.constructor.maxE?(e.d=null,e.e=NaN):e.e<e.constructor.minE&&(e.e=0,e.d=[0]))}else e.e=0,e.d=[0];return e}function Zn(e,n){var i,r,t,s,o,u,l,a,f;if(n.indexOf("_")>-1){if(n=n.replace(/(\d)_(?=\d)/g,"$1"),en.test(n))return Oe(e,n)}else if(n==="Infinity"||n==="NaN")return+n||(e.s=NaN),e.e=NaN,e.d=null,e;if(An.test(n))i=16,n=n.toLowerCase();else if(Ln.test(n))i=2;else if(On.test(n))i=8;else throw Error(K+n);for(s=n.search(/p/i),s>0?(l=+n.slice(s+1),n=n.substring(2,s)):n=n.slice(2),s=n.indexOf("."),o=s>=0,r=e.constructor,o&&(n=n.replace(".",""),u=n.length,s=u-s,t=rn(r,new r(i),s,s*2)),a=me(n,i,Z),f=a.length-1,s=f;a[s]===0;--s)a.pop();return s<0?new r(e.s*0):(e.e=Ee(a,f),e.d=a,N=!1,o&&(e=S(e,t,u*4)),l&&(e=e.times(Math.abs(l)<54?I(2,l):X.pow(2,l))),N=!0,e)}function $n(e,n){var i,r=n.d.length;if(r<3)return n.isZero()?n:se(e,2,n,n);i=1.4*Math.sqrt(r),i=i>16?16:i|0,n=n.times(1/be(5,i)),n=se(e,2,n,n);for(var t,s=new e(5),o=new e(16),u=new e(20);i--;)t=n.times(n),n=n.times(s.plus(t.times(o.times(t).minus(u))));return n}function se(e,n,i,r,t){var s,o,u,l,a=e.precision,f=Math.ceil(a/w);for(N=!1,l=i.times(i),u=new e(r);;){if(o=S(u.times(l),new e(n++*n++),a,1),u=t?r.plus(o):r.minus(o),r=S(o.times(l),new e(n++*n++),a,1),o=u.plus(r),o.d[f]!==void 0){for(s=f;o.d[s]===u.d[s]&&s--;);if(s==-1)break}s=u,u=r,r=o,o=s}return N=!0,o.d.length=f+1,o}function be(e,n){for(var i=e;--n;)i*=e;return i}function on(e,n){var i,r=n.s<0,t=z(e,e.precision,1),s=t.times(.5);if(n=n.abs(),n.lte(s))return G=r?4:1,n;if(i=n.divToInt(t),i.isZero())G=r?3:2;else{if(n=n.minus(i.times(t)),n.lte(s))return G=Ze(i)?r?2:3:r?4:1,n;G=Ze(i)?r?1:4:r?3:2}return n.minus(t).abs()}function Re(e,n,i,r){var t,s,o,u,l,a,f,c,d,g=e.constructor,E=i!==void 0;if(E?(V(i,1,J),r===void 0?r=g.rounding:V(r,0,8)):(i=g.precision,r=g.rounding),!e.isFinite())f=sn(e);else{for(f=H(e),o=f.indexOf("."),E?(t=2,n==16?i=i*4-3:n==8&&(i=i*3-2)):t=n,o>=0&&(f=f.replace(".",""),d=new g(1),d.e=f.length-o,d.d=me(H(d),10,t),d.e=d.d.length),c=me(f,10,t),s=l=c.length;c[--l]==0;)c.pop();if(!c[0])f=E?"0p+0":"0";else{if(o<0?s--:(e=new g(e),e.d=c,e.e=s,e=S(e,d,i,r,0,t),c=e.d,s=e.e,a=Qe),o=c[i],u=t/2,a=a||c[i+1]!==void 0,a=r<4?(o!==void 0||a)&&(r===0||r===(e.s<0?3:2)):o>u||o===u&&(r===4||a||r===6&&c[i-1]&1||r===(e.s<0?8:7)),c.length=i,a)for(;++c[--i]>t-1;)c[i]=0,i||(++s,c.unshift(1));for(l=c.length;!c[l-1];--l);for(o=0,f="";o<l;o++)f+=qe.charAt(c[o]);if(E){if(l>1)if(n==16||n==8){for(o=n==16?4:3,--l;l%o;l++)f+="0";for(c=me(f,t,n),l=c.length;!c[l-1];--l);for(o=1,f="1.";o<l;o++)f+=qe.charAt(c[o])}else f=f.charAt(0)+"."+f.slice(1);f=f+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)f="0"+f;f="0."+f}else if(++s>l)for(s-=l;s--;)f+="0";else s<l&&(f=f.slice(0,s)+"."+f.slice(s))}f=(n==16?"0x":n==2?"0b":n==8?"0o":"")+f}return e.s<0?"-"+f:f}function $e(e,n){if(e.length>n)return e.length=n,!0}function Hn(e){return new this(e).abs()}function Wn(e){return new this(e).acos()}function Gn(e){return new this(e).acosh()}function Yn(e,n){return new this(e).plus(n)}function jn(e){return new this(e).asin()}function Xn(e){return new this(e).asinh()}function Kn(e){return new this(e).atan()}function Jn(e){return new this(e).atanh()}function Qn(e,n){e=new this(e),n=new this(n);var i,r=this.precision,t=this.rounding,s=r+4;return!e.s||!n.s?i=new this(NaN):!e.d&&!n.d?(i=z(this,s,1).times(n.s>0?.25:.75),i.s=e.s):!n.d||e.isZero()?(i=n.s<0?z(this,r,t):new this(0),i.s=e.s):!e.d||n.isZero()?(i=z(this,s,1).times(.5),i.s=e.s):n.s<0?(this.precision=s,this.rounding=1,i=this.atan(S(e,n,s,1)),n=z(this,s,1),this.precision=r,this.rounding=t,i=e.s<0?i.minus(n):i.plus(n)):i=this.atan(S(e,n,s,1)),i}function yn(e){return new this(e).cbrt()}function _n(e){return p(e=new this(e),e.e+1,2)}function xn(e,n,i){return new this(e).clamp(n,i)}function ei(e){if(!e||typeof e!="object")throw Error(Ne+"Object expected");var n,i,r,t=e.defaults===!0,s=["precision",1,J,"rounding",0,8,"toExpNeg",-te,0,"toExpPos",0,te,"maxE",0,te,"minE",-te,0,"modulo",0,9];for(n=0;n<s.length;n+=3)if(i=s[n],t&&(this[i]=Ve[i]),(r=e[i])!==void 0)if(q(r)===r&&r>=s[n+1]&&r<=s[n+2])this[i]=r;else throw Error(K+i+": "+r);if(i="crypto",t&&(this[i]=Ve[i]),(r=e[i])!==void 0)if(r===!0||r===!1||r===0||r===1)if(r)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[i]=!0;else throw Error(_e);else this[i]=!1;else throw Error(K+i+": "+r);return this}function ni(e){return new this(e).cos()}function ii(e){return new this(e).cosh()}function un(e){var n,i,r;function t(s){var o,u,l,a=this;if(!(a instanceof t))return new t(s);if(a.constructor=t,He(s)){a.s=s.s,N?!s.d||s.e>t.maxE?(a.e=NaN,a.d=null):s.e<t.minE?(a.e=0,a.d=[0]):(a.e=s.e,a.d=s.d.slice()):(a.e=s.e,a.d=s.d?s.d.slice():s.d);return}if(l=typeof s,l==="number"){if(s===0){a.s=1/s<0?-1:1,a.e=0,a.d=[0];return}if(s<0?(s=-s,a.s=-1):a.s=1,s===~~s&&s<1e7){for(o=0,u=s;u>=10;u/=10)o++;N?o>t.maxE?(a.e=NaN,a.d=null):o<t.minE?(a.e=0,a.d=[0]):(a.e=o,a.d=[s]):(a.e=o,a.d=[s]);return}else if(s*0!==0){s||(a.s=NaN),a.e=NaN,a.d=null;return}return Oe(a,s.toString())}else if(l!=="string")throw Error(K+s);return(u=s.charCodeAt(0))===45?(s=s.slice(1),a.s=-1):(u===43&&(s=s.slice(1)),a.s=1),en.test(s)?Oe(a,s):Zn(a,s)}if(t.prototype=h,t.ROUND_UP=0,t.ROUND_DOWN=1,t.ROUND_CEIL=2,t.ROUND_FLOOR=3,t.ROUND_HALF_UP=4,t.ROUND_HALF_DOWN=5,t.ROUND_HALF_EVEN=6,t.ROUND_HALF_CEIL=7,t.ROUND_HALF_FLOOR=8,t.EUCLID=9,t.config=t.set=ei,t.clone=un,t.isDecimal=He,t.abs=Hn,t.acos=Wn,t.acosh=Gn,t.add=Yn,t.asin=jn,t.asinh=Xn,t.atan=Kn,t.atanh=Jn,t.atan2=Qn,t.cbrt=yn,t.ceil=_n,t.clamp=xn,t.cos=ni,t.cosh=ii,t.div=ri,t.exp=ti,t.floor=si,t.hypot=oi,t.ln=ui,t.log=ai,t.log10=fi,t.log2=li,t.max=ci,t.min=di,t.mod=hi,t.mul=mi,t.pow=gi,t.random=pi,t.round=wi,t.sign=vi,t.sin=Ni,t.sinh=Ei,t.sqrt=bi,t.sub=Si,t.sum=Ci,t.tan=Mi,t.tanh=Ti,t.trunc=Di,e===void 0&&(e={}),e&&e.defaults!==!0)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],n=0;n<r.length;)e.hasOwnProperty(i=r[n++])||(e[i]=this[i]);return t.config(e),t}function ri(e,n){return new this(e).div(n)}function ti(e){return new this(e).exp()}function si(e){return p(e=new this(e),e.e+1,3)}function oi(){var e,n,i=new this(0);for(N=!1,e=0;e<arguments.length;)if(n=new this(arguments[e++]),n.d)i.d&&(i=i.plus(n.times(n)));else{if(n.s)return N=!0,new this(1/0);i=n}return N=!0,i.sqrt()}function He(e){return e instanceof X||e&&e.toStringTag===xe||!1}function ui(e){return new this(e).ln()}function ai(e,n){return new this(e).log(n)}function li(e){return new this(e).log(2)}function fi(e){return new this(e).log(10)}function ci(){return tn(this,arguments,"lt")}function di(){return tn(this,arguments,"gt")}function hi(e,n){return new this(e).mod(n)}function mi(e,n){return new this(e).mul(n)}function gi(e,n){return new this(e).pow(n)}function pi(e){var n,i,r,t,s=0,o=new this(1),u=[];if(e===void 0?e=this.precision:V(e,1,J),r=Math.ceil(e/w),this.crypto)if(crypto.getRandomValues)for(n=crypto.getRandomValues(new Uint32Array(r));s<r;)t=n[s],t>=429e7?n[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=t%1e7;else if(crypto.randomBytes){for(n=crypto.randomBytes(r*=4);s<r;)t=n[s]+(n[s+1]<<8)+(n[s+2]<<16)+((n[s+3]&127)<<24),t>=214e7?crypto.randomBytes(4).copy(n,s):(u.push(t%1e7),s+=4);s=r/4}else throw Error(_e);else for(;s<r;)u[s++]=Math.random()*1e7|0;for(r=u[--s],e%=w,r&&e&&(t=I(10,w-e),u[s]=(r/t|0)*t);u[s]===0;s--)u.pop();if(s<0)i=0,u=[0];else{for(i=-1;u[0]===0;i-=w)u.shift();for(r=1,t=u[0];t>=10;t/=10)r++;r<w&&(i-=w-r)}return o.e=i,o.d=u,o}function wi(e){return p(e=new this(e),e.e+1,this.rounding)}function vi(e){return e=new this(e),e.d?e.d[0]?e.s:0*e.s:e.s||NaN}function Ni(e){return new this(e).sin()}function Ei(e){return new this(e).sinh()}function bi(e){return new this(e).sqrt()}function Si(e,n){return new this(e).sub(n)}function Ci(){var e=0,n=arguments,i=new this(n[e]);for(N=!1;i.s&&++e<n.length;)i=i.plus(n[e]);return N=!0,p(i,this.precision,this.rounding)}function Mi(e){return new this(e).tan()}function Ti(e){return new this(e).tanh()}function Di(e){return p(e=new this(e),e.e+1,1)}h[Symbol.for("nodejs.util.inspect.custom")]=h.toString;h[Symbol.toStringTag]="Decimal";var X=h.constructor=un(Ve);pe=new X(pe);we=new X(we);var ki={modelValue:{type:[String,Number],default:0},min:[String,Number],max:[String,Number],step:{type:[String,Number],default:1},color:String,inputWidth:[String,Number],inputTextSize:[String,Number],buttonSize:[String,Number],elevation:{type:[Boolean,Number,String],default:!0},decimalLength:[String,Number],disabled:Boolean,readonly:Boolean,disableIncrement:Boolean,disableDecrement:Boolean,disableInput:Boolean,lazyChange:Boolean,incrementButton:{type:Boolean,default:!0},decrementButton:{type:Boolean,default:!0},press:{type:Boolean,default:!0},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onInputChange","onLazyChange","onIncrement","onDecrement"]},rules:Array,onBeforeChange:le(),onChange:le(),onIncrement:le(),onDecrement:le(),"onUpdate:modelValue":le()},We=100,Ge=600,{name:Ii,n:Bi,classes:Pi}=Ye("counter"),Fi=["inputmode","readonly","disabled"];function qi(e,n){var i=Be("var-icon"),r=Be("var-button"),t=Be("var-form-details");return fe(),he("div",{class:ee(e.classes(e.n(),e.n("$--box")))},[ge("div",Mn({class:e.classes(e.n("controller"),e.formatElevation(e.elevation,2),[e.disabled||e.formDisabled,e.n("--disabled")],[e.errorMessage,e.n("--error")]),style:{background:e.color?e.color:void 0}},e.$attrs),[x(r,{class:ee(e.classes(e.n("decrement-button"),[!e.decrementButton,e.n("--hidden")],[e.disabled||e.formDisabled,e.n("--not-allowed")])),style:Pe({width:e.toSizeUnit(e.buttonSize),height:e.toSizeUnit(e.buttonSize)}),round:"","var-counter-cover":"",ripple:e.ripple&&e.decrementButton&&!e.disabled&&!e.formDisabled&&!e.readonly&&!e.formReadonly&&!e.disableDecrement&&!e.isMin,onClick:e.decrement,onTouchstart:e.pressDecrement,onTouchend:e.releaseDecrement,onTouchcancel:e.releaseDecrement},{default:ce(()=>[x(i,{name:"minus"})]),_:1},8,["class","style","ripple","onClick","onTouchstart","onTouchend","onTouchcancel"]),Sn(ge("input",{class:ee(e.classes(e.n("input"),[e.disabled||e.formDisabled,e.n("--not-allowed")])),style:Pe({width:e.toSizeUnit(e.inputWidth),fontSize:e.toSizeUnit(e.inputTextSize)}),inputmode:e.toNumber(e.decimalLength)===0?"numeric":"decimal",readonly:e.readonly||e.formReadonly,disabled:e.disabled||e.formDisabled||e.disableInput,"onUpdate:modelValue":n[0]||(n[0]=s=>e.inputValue=s),onChange:n[1]||(n[1]=function(){return e.handleChange&&e.handleChange(...arguments)})},null,46,Fi),[[Cn,e.inputValue]]),x(r,{class:ee(e.classes(e.n("increment-button"),[!e.incrementButton,e.n("--hidden")],[e.disabled||e.formDisabled,e.n("--not-allowed")])),style:Pe({width:e.toSizeUnit(e.buttonSize),height:e.toSizeUnit(e.buttonSize)}),round:"","var-counter-cover":"",ripple:e.ripple&&e.incrementButton&&!e.disabled&&!e.formDisabled&&!e.readonly&&!e.formReadonly&&!e.disableIncrement&&!e.isMax,onClick:e.increment,onTouchstart:e.pressIncrement,onTouchend:e.releaseIncrement,onTouchcancel:e.releaseIncrement},{default:ce(()=>[x(i,{name:"plus"})]),_:1},8,["class","style","ripple","onClick","onTouchstart","onTouchend","onTouchcancel"])],16),x(t,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var an=je({name:Ii,components:{VarButton:mn,VarIcon:gn,VarFormDetails:Je},directives:{Ripple:pn},inheritAttrs:!1,props:ki,setup(e){var n=wn(""),{bindForm:i,form:r}=Vn(),{errorMessage:t,validateWithTrigger:s,validate:o,resetValidation:u}=vn(),{readonly:l,disabled:a}=r??{},f=ze(()=>{var{max:m,modelValue:k}=e;return m!=null&&T(k)>=T(m)}),c=ze(()=>{var{min:m,modelValue:k}=e;return m!=null&&T(k)<=T(m)}),d,g,E,v,B={reset:b,validate:C,resetValidation:u};W(i,B),Nn(()=>e.modelValue,m=>{$(M(String(m))),W(e.onChange,T(m))}),$(M(String(e.modelValue)));function C(){return o(e.rules,e.modelValue)}function F(m){Tn(()=>{var{validateTrigger:k,rules:R,modelValue:U}=e;s(k,m,R,U)})}function b(){var{min:m}=e;W(e["onUpdate:modelValue"],m!=null?T(m):0),u()}function M(m){var{decimalLength:k,max:R,min:U}=e,A=T(m);return R!=null&&A>T(R)&&(A=T(R)),U!=null&&A<T(U)&&(A=T(U)),m=String(A),k!=null&&(m=A.toFixed(T(k))),m}function ne(m){var{lazyChange:k,onBeforeChange:R}=e,{value:U}=m.target,A=M(U);k?W(R,T(A),D):$(A),F("onInputChange")}function O(){var{disabled:m,readonly:k,disableDecrement:R,decrementButton:U,lazyChange:A,step:Se,modelValue:Ce,onDecrement:Me,onBeforeChange:Te}=e;if(!(a!=null&&a.value||l!=null&&l.value||m||k||R||!U)&&!c.value){var De=new X(T(Ce)).minus(new X(T(Se))).toString(),ue=M(De),ae=T(ue);W(Me,ae),A?W(Te,ae,D):($(ue),F("onDecrement"))}}function ie(){var{disabled:m,readonly:k,disableIncrement:R,incrementButton:U,lazyChange:A,step:Se,modelValue:Ce,onIncrement:Me,onBeforeChange:Te}=e;if(!(a!=null&&a.value||l!=null&&l.value||m||k||R||!U)&&!f.value){var De=new X(T(Ce)).plus(new X(T(Se))).toString(),ue=M(De),ae=T(ue);W(Me,ae),A?W(Te,ae,D):($(ue),F("onIncrement"))}}function re(){var{press:m,lazyChange:k}=e;!m||k||(v=window.setTimeout(()=>{_()},Ge))}function Q(){var{press:m,lazyChange:k}=e;!m||k||(E=window.setTimeout(()=>{y()},Ge))}function oe(){g&&clearTimeout(g),v&&clearTimeout(v)}function L(){d&&clearTimeout(d),E&&clearTimeout(E)}function y(){d=window.setTimeout(()=>{ie(),y()},We)}function _(){g=window.setTimeout(()=>{O(),_()},We)}function $(m){n.value=m;var k=T(m);W(e["onUpdate:modelValue"],k)}function D(m){$(M(String(m))),F("onLazyChange")}return{inputValue:n,errorMessage:t,formDisabled:a,formReadonly:l,isMax:f,isMin:c,n:Bi,classes:Pi,formatElevation:En,validate:C,reset:b,resetValidation:u,handleChange:ne,decrement:O,increment:ie,pressDecrement:re,pressIncrement:Q,releaseDecrement:oe,releaseIncrement:L,toSizeUnit:bn,toNumber:T}}});an.render=qi;const ln=an;Xe(ln);var Li=ln;export{Je as F,Li as _,Vn as u};
