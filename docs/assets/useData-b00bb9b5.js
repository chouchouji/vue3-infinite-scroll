var j=Object.defineProperty;var J=(t,e,i)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var m=(t,e,i)=>(J(t,typeof e!="symbol"?e+"":e,i),i);import{d as K,r as S,j as A,K as Q,ac as X,b as x,_ as tt,o as w,q as O,a as et,V as it,a7 as nt,x as P,y as st}from"./main-6ac63d88.js";const rt="auto",R="start",ot="center",at="end",C="vertical",F="horizontal",dt={[C]:"top",[F]:"left"},lt={[C]:"height",[F]:"width"},ct={width:{type:[Number,String],required:!0},height:{type:[Number,String],required:!0},data:{type:Array,required:!0,default:[]},direction:{type:String,default:C},itemSize:[Number,Array,Function],scrollToIndex:{type:Number,default:0},scrollToOffset:{type:Number,default:0},scrollToAlignment:{type:String,default:rt},overscanCount:{type:Number,default:4},estimatedSize:Number},W={position:"absolute",left:0,width:"100%",height:"100%"},ut={position:"relative",overflow:"hidden",width:"100%",minHeight:"100%"},ht={overflow:"auto",willChange:"transform",WebkitOverflowScrolling:"touch"},u=t=>typeof t=="string",_=t=>typeof t=="number",ft=t=>typeof t=="boolean",mt=t=>t===window,St=()=>typeof window<"u",gt=t=>t==null?0:u(t)?(t=parseFloat(t),t=Number.isNaN(t)?0:t,t):ft(t)?Number(t):t,It=t=>window.getComputedStyle(t),zt=t=>{if(mt(t)){const e=t.innerWidth,i=t.innerHeight,n={x:0,y:0,top:0,left:0,right:e,bottom:i,width:e,height:i};return{...n,toJSON:()=>n}}return t.getBoundingClientRect()};function yt(){const{width:t,height:e}=zt(window);return{vw:t,vh:e,vMin:Math.min(t,e),vMax:Math.max(t,e)}}const $=t=>u(t)&&t.endsWith("rem"),Mt=t=>u(t)&&t.endsWith("em")&&!t.endsWith("rem"),At=t=>u(t)&&t.endsWith("px")||_(t),xt=t=>u(t)&&t.endsWith("%"),v=t=>u(t)&&t.endsWith("vw"),V=t=>u(t)&&t.endsWith("vh"),k=t=>u(t)&&t.endsWith("vmin"),D=t=>u(t)&&t.endsWith("vmax"),Tt=t=>u(t)&&t.startsWith("calc("),Nt=t=>u(t)&&t.startsWith("var("),wt=t=>{if(_(t))return t;if(At(t))return+t.replace("px","");if(!St())return 0;const{vw:e,vh:i,vMin:n,vMax:o}=yt();if(v(t))return+t.replace("vw","")*e/100;if(V(t))return+t.replace("vh","")*i/100;if(k(t))return+t.replace("vmin","")*n/100;if(D(t))return+t.replace("vmax","")*o/100;if($(t)){const r=+t.replace("rem",""),d=It(document.documentElement).fontSize;return r*parseFloat(d)}return u(t)?gt(t):0},I=t=>{if(t!=null)return xt(t)||v(t)||V(t)||Mt(t)||$(t)||Tt(t)||Nt(t)||k(t)||D(t)?t:`${wt(t)}px`};class Ot{constructor({itemCount:e,itemSizeGetter:i,estimatedItemSize:n}){m(this,"itemSizeGetter");m(this,"itemCount");m(this,"estimatedItemSize");m(this,"lastMeasuredIndex");m(this,"itemSizeAndPositionData");this.itemSizeGetter=i,this.itemCount=e,this.estimatedItemSize=n,this.itemSizeAndPositionData={},this.lastMeasuredIndex=-1}updateConfig({itemCount:e,estimatedItemSize:i}){this.itemCount=e,this.estimatedItemSize=i}getLastMeasuredIndex(){return this.lastMeasuredIndex}destroy(){for(const e in this.itemSizeAndPositionData)delete this.itemSizeAndPositionData[e]}getSizeAndPositionForIndex(e){if(e<0||e>=this.itemCount)throw Error(`Requested index ${e} is outside of range 0..${this.itemCount}`);if(e>this.lastMeasuredIndex){const i=this.getSizeAndPositionOfLastMeasuredItem();let n=i.offset+i.size;for(let o=this.lastMeasuredIndex+1;o<=e;o++){const r=this.itemSizeGetter(o);if(r==null||isNaN(r))throw Error(`Invalid size returned for index ${o} of value ${r}`);this.itemSizeAndPositionData[o]={offset:n,size:r},n+=r}this.lastMeasuredIndex=e}return this.itemSizeAndPositionData[e]}getSizeAndPositionOfLastMeasuredItem(){return this.lastMeasuredIndex>=0?this.itemSizeAndPositionData[this.lastMeasuredIndex]:{offset:0,size:0}}getTotalSize(){const e=this.getSizeAndPositionOfLastMeasuredItem();return e.offset+e.size+(this.itemCount-this.lastMeasuredIndex-1)*this.estimatedItemSize}getUpdatedOffsetForIndex({align:e=R,containerSize:i,currentOffset:n,targetIndex:o}){if(i<=0)return 0;const r=this.getSizeAndPositionForIndex(o),d=r.offset,l=d-i+r.size;let c;switch(e){case at:c=l;break;case ot:c=d-(i-r.size)/2;break;case R:c=d;break;default:c=Math.max(l,Math.min(d,n))}const z=this.getTotalSize();return Math.max(0,Math.min(z-i,c))}getVisibleRange({containerSize:e,offset:i,overscanCount:n}){if(this.getTotalSize()===0)return{};const r=i+e;let d=this.findNearestItem(i);if(typeof d>"u")throw Error(`Invalid offset ${i} specified`);const l=this.getSizeAndPositionForIndex(d);i=l.offset+l.size;let c=d;for(;i<r&&c<this.itemCount-1;)c++,i+=this.getSizeAndPositionForIndex(c).size;return n&&(d=Math.max(0,d-n),c=Math.min(c+n,this.itemCount-1)),{start:d,stop:c}}resetItem(e){this.lastMeasuredIndex=Math.min(this.lastMeasuredIndex,e-1)}findNearestItem(e){if(isNaN(e))throw Error(`Invalid offset ${e} specified`);e=Math.max(0,e);const i=this.getSizeAndPositionOfLastMeasuredItem(),n=Math.max(0,this.lastMeasuredIndex);return i.offset>=e?this.binarySearch({high:n,low:0,offset:e}):this.exponentialSearch({index:n,offset:e})}binarySearch({low:e,high:i,offset:n}){let o=0,r=0;for(;e<=i;){if(o=e+Math.floor((i-e)/2),r=this.getSizeAndPositionForIndex(o).offset,r===n)return o;r<n?e=o+1:r>n&&(i=o-1)}return e>0?e-1:0}exponentialSearch({index:e,offset:i}){let n=1;for(;e<this.itemCount&&this.getSizeAndPositionForIndex(e).offset<i;)e+=n,n*=2;return this.binarySearch({high:Math.min(e,this.itemCount-1),low:Math.floor(e/2),offset:i})}}const Pt=K({name:"InfiniteList",props:ct,setup(t){let e={},i,n=0,o=0;const r=S(0),d=S(8),l=S(null),c=S(),z=S(),b=A(()=>t.data?t.data.length:0),T=A(()=>t.estimatedSize||50),G=A(()=>t.data?t.data.slice(r.value,Math.min(t.data.length,d.value+1)):[]),B=A(()=>t.direction==="horizontal"?"scrollLeft":"scrollTop"),q=()=>({...ht,width:I(t.width),height:I(t.height)}),L=()=>{const s={...ut},a=I(i.getTotalSize());return t.direction==="horizontal"?(s.width=a,s):(s.height=a,s)},U=s=>{const a=s+r.value,f=e[a];if(f)return f;if(!i)return W;const{size:g,offset:h}=i.getSizeAndPositionForIndex(a);return e[a]={...W,[lt[t.direction]]:I(g),[dt[t.direction]]:I(h)}},p=()=>{H(),l.value.addEventListener("scroll",E),n=t.scrollToOffset||t.scrollToIndex!=null&&M(t.scrollToIndex,t.scrollToAlignment)||0,setTimeout(()=>{t.scrollToOffset!=null?N(t.scrollToOffset):t.scrollToIndex!=null&&N(M(t.scrollToIndex,t.scrollToAlignment))},0),z.value=q(),c.value=L()},H=()=>(i||(i=new Ot({itemCount:b.value,estimatedItemSize:T.value,itemSizeGetter:s=>Y(s)})),i),E=s=>{const a=t.direction==="vertical"?l.value.scrollTop:l.value.scrollLeft;a<0||n===a||s.target!==l.value||(n=a,y())},y=()=>{const{width:s,height:a,direction:f,overscanCount:g}=t,h=i.getVisibleRange({containerSize:f==="horizontal"?s:a,offset:n||0,overscanCount:g});h.start!=null&&h.stop!=null&&(r.value=h.start,d.value=h.stop),c.value=L(),n!==o&&N(n)},N=s=>{l.value&&(l.value[B.value]=s,o=s)},Y=s=>{const a=t.itemSize;return typeof a=="function"?a(s):Array.isArray(a)?a[s]:a||T.value},M=(s,a)=>{(s<0||s>=b.value)&&(s=0);const{width:f,height:g,direction:h}=t;return i.getUpdatedOffsetForIndex({align:a,containerSize:h==="horizontal"?f:g,currentOffset:n||0,targetIndex:s})},Z=()=>{for(let s in e)delete e[s]};return Q(()=>{setTimeout(p,0)}),X(()=>{Z(),i.destroy(),l.value.removeEventListener("scroll",E)}),x(()=>t.data,s=>{i.updateConfig({itemCount:(s==null?void 0:s.length)||0,estimatedItemSize:T.value}),n=0,o=0,e={},i.resetItem(0)}),x(()=>t.scrollToOffset,s=>{n=s,y()}),x(()=>t.scrollToIndex,s=>{n=M(s,t.scrollToAlignment),y()}),x(()=>t.scrollToAlignment,s=>{n=M(t.scrollToIndex,s),y()}),{start:r,visibleData:G,wrapStyle:z,innerStyle:c,rootNode:l,getItemStyle:U}}});function Ct(t,e,i,n,o,r){return w(),O("div",{ref:"rootNode",style:P(t.wrapStyle)},[et("div",{style:P(t.innerStyle)},[(w(!0),O(it,null,nt(t.visibleData,(d,l)=>(w(),O("div",{key:l+t.start,style:P(t.getItemStyle(l))},[st(t.$slots,"default",{item:d,index:l+t.start})],4))),128))],4)],4)}const Et=tt(Pt,[["render",Ct]]);function Rt(){const t=S([]);return Array(1e5).fill("Hello World").forEach((i,n)=>{t.value.push({index:n,text:i})}),t}export{Et as I,Rt as u};
