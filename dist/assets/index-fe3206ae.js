import{j as fe,_ as q,E as R,f as Et,l as $t,n as Nt}from"./base-2d76bf36.js";import{u as Mt,E as Tt}from"./el-input-138a7ff7.js";import{E as Ke}from"./el-button-5652621b.js";import{_ as Vt}from"./_plugin-vue_export-helper-c27b6911.js";import{h as It,b as pe,g as X,d as F,j as G,a as b,B as ee,o as v,c as A,G as ye,m as T,w as D,Q as ce,q as y,p as h,f as s,K as x,t as Z,R as Ce,T as Je,D as Ae,a1 as Be,ar as Re,k as S,N as le,l as z,y as we,C as At,P as j,as as xe,i as Bt,s as Ot,F as et,n as Dt,u as Pt,M as Ft,V as ie,z as Lt,e as I,x as Me,v as B,E as K,H as zt,a4 as me,r as J,at as tt,au as We,aq as Ht,av as Ut,S as Kt,aw as Xe,ax as nt,$ as Te,ay as je,az as Rt,aA as xt,X as Wt}from"./index-062bc65c.js";import{i as ue,T as qe,b as Xt}from"./constants-7adfcb3d.js";import{u as ot,i as Ee}from"./focus-trap-ab7b36dd.js";import{U as ne,C as ke,I as Ve}from"./event-9519ab40.js";import{u as _e,b as lt,a as at,c as st,d as rt}from"./use-form-item-1bf4140a.js";import{d as Ie,E as ge,t as jt,m as qt,a as Yt,u as Zt}from"./typescript-fccbaa16.js";import{u as Gt,E as Qt}from"./index-cc42d60c.js";import{C as Jt}from"./index-2277bda3.js";import{d as en}from"./debounce-b1df008c.js";import"./index-f8748455.js";const Oe=e=>{let o,n;return e.type==="touchend"?(n=e.changedTouches[0].clientY,o=e.changedTouches[0].clientX):e.type.startsWith("touch")?(n=e.touches[0].clientY,o=e.touches[0].clientX):(n=e.clientY,o=e.clientX),{clientX:o,clientY:n}},tn=e=>["",...It].includes(e),nn=pe({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String,dotStyle:{type:X([String,Object,Array])},badgeStyle:{type:X([String,Object,Array])},offset:{type:X(Array),default:[0,0]},dotClass:{type:String},badgeClass:{type:String}}),on=["textContent"],ln=F({name:"ElBadge"}),an=F({...ln,props:nn,setup(e,{expose:o}){const n=e,t=G("badge"),a=b(()=>n.isDot?"":ee(n.value)&&ee(n.max)?n.max<n.value?`${n.max}+`:n.value===0&&!n.showZero?"":`${n.value}`:`${n.value}`),r=b(()=>{var l,d,i,c,g,p;return[{backgroundColor:n.color,marginRight:fe(-((d=(l=n.offset)==null?void 0:l[0])!=null?d:0)),marginTop:fe((c=(i=n.offset)==null?void 0:i[1])!=null?c:0)},(g=n.dotStyle)!=null?g:{},(p=n.badgeStyle)!=null?p:{}]});return _e({from:"dot-style",replacement:"badge-style",version:"2.8.0",scope:"el-badge",ref:"https://element-plus.org/en-US/component/badge.html"},b(()=>!!n.dotStyle)),_e({from:"dot-class",replacement:"badge-class",version:"2.8.0",scope:"el-badge",ref:"https://element-plus.org/en-US/component/badge.html"},b(()=>!!n.dotClass)),o({content:a}),(l,d)=>(v(),A("div",{class:h(s(t).b())},[ye(l.$slots,"default"),T(Je,{name:`${s(t).namespace.value}-zoom-in-center`,persisted:""},{default:D(()=>[ce(y("sup",{class:h([s(t).e("content"),s(t).em("content",l.type),s(t).is("fixed",!!l.$slots.default),s(t).is("dot",l.isDot),l.dotClass,l.badgeClass]),style:x(s(r)),textContent:Z(s(a))},null,14,on),[[Ce,!l.hidden&&(s(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var sn=q(an,[["__file","badge.vue"]]);const rn=Ae(sn),un=pe({color:{type:X(Object),required:!0},vertical:{type:Boolean,default:!1}});let $e=!1;function he(e,o){if(!Be)return;const n=function(r){var l;(l=o.drag)==null||l.call(o,r)},t=function(r){var l;document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",t),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",t),document.onselectstart=null,document.ondragstart=null,$e=!1,(l=o.end)==null||l.call(o,r)},a=function(r){var l;$e||(r.preventDefault(),document.onselectstart=()=>!1,document.ondragstart=()=>!1,document.addEventListener("mousemove",n),document.addEventListener("mouseup",t),document.addEventListener("touchmove",n),document.addEventListener("touchend",t),$e=!0,(l=o.start)==null||l.call(o,r))};e.addEventListener("mousedown",a),e.addEventListener("touchstart",a)}const cn=e=>{const o=we(),n=Re(),t=Re();function a(l){l.target!==n.value&&r(l)}function r(l){if(!t.value||!n.value)return;const i=o.vnode.el.getBoundingClientRect(),{clientX:c,clientY:g}=Oe(l);if(e.vertical){let p=g-i.top;p=Math.max(n.value.offsetHeight/2,p),p=Math.min(p,i.height-n.value.offsetHeight/2),e.color.set("alpha",Math.round((p-n.value.offsetHeight/2)/(i.height-n.value.offsetHeight)*100))}else{let p=c-i.left;p=Math.max(n.value.offsetWidth/2,p),p=Math.min(p,i.width-n.value.offsetWidth/2),e.color.set("alpha",Math.round((p-n.value.offsetWidth/2)/(i.width-n.value.offsetWidth)*100))}}return{thumb:n,bar:t,handleDrag:r,handleClick:a}},dn=(e,{bar:o,thumb:n,handleDrag:t})=>{const a=we(),r=G("color-alpha-slider"),l=S(0),d=S(0),i=S();function c(){if(!n.value||e.vertical)return 0;const N=a.vnode.el,m=e.color.get("alpha");return N?Math.round(m*(N.offsetWidth-n.value.offsetWidth/2)/100):0}function g(){if(!n.value)return 0;const N=a.vnode.el;if(!e.vertical)return 0;const m=e.color.get("alpha");return N?Math.round(m*(N.offsetHeight-n.value.offsetHeight/2)/100):0}function p(){if(e.color&&e.color.value){const{r:N,g:m,b:W}=e.color.toRgb();return`linear-gradient(to right, rgba(${N}, ${m}, ${W}, 0) 0%, rgba(${N}, ${m}, ${W}, 1) 100%)`}return""}function M(){l.value=c(),d.value=g(),i.value=p()}le(()=>{if(!o.value||!n.value)return;const N={drag:m=>{t(m)},end:m=>{t(m)}};he(o.value,N),he(n.value,N),M()}),z(()=>e.color.get("alpha"),()=>M()),z(()=>e.color.value,()=>M());const w=b(()=>[r.b(),r.is("vertical",e.vertical)]),_=b(()=>r.e("bar")),E=b(()=>r.e("thumb")),L=b(()=>({background:i.value})),$=b(()=>({left:fe(l.value),top:fe(d.value)}));return{rootKls:w,barKls:_,barStyle:L,thumbKls:E,thumbStyle:$,update:M}},fn="ElColorAlphaSlider",hn=F({name:fn}),pn=F({...hn,props:un,setup(e,{expose:o}){const n=e,{bar:t,thumb:a,handleDrag:r,handleClick:l}=cn(n),{rootKls:d,barKls:i,barStyle:c,thumbKls:g,thumbStyle:p,update:M}=dn(n,{bar:t,thumb:a,handleDrag:r});return o({update:M,bar:t,thumb:a}),(w,_)=>(v(),A("div",{class:h(s(d))},[y("div",{ref_key:"bar",ref:t,class:h(s(i)),style:x(s(c)),onClick:_[0]||(_[0]=(...E)=>s(l)&&s(l)(...E))},null,6),y("div",{ref_key:"thumb",ref:a,class:h(s(g)),style:x(s(p))},null,6)],2))}});var vn=q(pn,[["__file","alpha-slider.vue"]]);const mn=F({name:"ElColorHueSlider",props:{color:{type:Object,required:!0},vertical:Boolean},setup(e){const o=G("color-hue-slider"),n=we(),t=S(),a=S(),r=S(0),l=S(0),d=b(()=>e.color.get("hue"));z(()=>d.value,()=>{M()});function i(w){w.target!==t.value&&c(w)}function c(w){if(!a.value||!t.value)return;const E=n.vnode.el.getBoundingClientRect(),{clientX:L,clientY:$}=Oe(w);let N;if(e.vertical){let m=$-E.top;m=Math.min(m,E.height-t.value.offsetHeight/2),m=Math.max(t.value.offsetHeight/2,m),N=Math.round((m-t.value.offsetHeight/2)/(E.height-t.value.offsetHeight)*360)}else{let m=L-E.left;m=Math.min(m,E.width-t.value.offsetWidth/2),m=Math.max(t.value.offsetWidth/2,m),N=Math.round((m-t.value.offsetWidth/2)/(E.width-t.value.offsetWidth)*360)}e.color.set("hue",N)}function g(){if(!t.value)return 0;const w=n.vnode.el;if(e.vertical)return 0;const _=e.color.get("hue");return w?Math.round(_*(w.offsetWidth-t.value.offsetWidth/2)/360):0}function p(){if(!t.value)return 0;const w=n.vnode.el;if(!e.vertical)return 0;const _=e.color.get("hue");return w?Math.round(_*(w.offsetHeight-t.value.offsetHeight/2)/360):0}function M(){r.value=g(),l.value=p()}return le(()=>{if(!a.value||!t.value)return;const w={drag:_=>{c(_)},end:_=>{c(_)}};he(a.value,w),he(t.value,w),M()}),{bar:a,thumb:t,thumbLeft:r,thumbTop:l,hueValue:d,handleClick:i,update:M,ns:o}}});function gn(e,o,n,t,a,r){return v(),A("div",{class:h([e.ns.b(),e.ns.is("vertical",e.vertical)])},[y("div",{ref:"bar",class:h(e.ns.e("bar")),onClick:o[0]||(o[0]=(...l)=>e.handleClick&&e.handleClick(...l))},null,2),y("div",{ref:"thumb",class:h(e.ns.e("thumb")),style:x({left:e.thumbLeft+"px",top:e.thumbTop+"px"})},null,6)],2)}var bn=q(mn,[["render",gn],["__file","hue-slider.vue"]]);const yn=pe({modelValue:String,id:String,showAlpha:Boolean,colorFormat:String,disabled:Boolean,size:At,popperClass:{type:String,default:""},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},teleported:Gt.teleported,predefine:{type:X(Array)},validateEvent:{type:Boolean,default:!0},...ot(["ariaLabel"])}),Cn={[ne]:e=>j(e)||Ee(e),[ke]:e=>j(e)||Ee(e),activeChange:e=>j(e)||Ee(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent},it=Symbol("colorPickerContextKey"),Ye=function(e,o,n){return[e,o*n/((e=(2-o)*n)<1?e:2-e)||0,e/2]},kn=function(e){return typeof e=="string"&&e.includes(".")&&Number.parseFloat(e)===1},_n=function(e){return typeof e=="string"&&e.includes("%")},te=function(e,o){kn(e)&&(e="100%");const n=_n(e);return e=Math.min(o,Math.max(0,Number.parseFloat(`${e}`))),n&&(e=Number.parseInt(`${e*o}`,10)/100),Math.abs(e-o)<1e-6?1:e%o/Number.parseFloat(o)},Ze={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},be=e=>{e=Math.min(Math.round(e),255);const o=Math.floor(e/16),n=e%16;return`${Ze[o]||o}${Ze[n]||n}`},Ge=function({r:e,g:o,b:n}){return Number.isNaN(+e)||Number.isNaN(+o)||Number.isNaN(+n)?"":`#${be(e)}${be(o)}${be(n)}`},Ne={A:10,B:11,C:12,D:13,E:14,F:15},Y=function(e){return e.length===2?(Ne[e[0].toUpperCase()]||+e[0])*16+(Ne[e[1].toUpperCase()]||+e[1]):Ne[e[1].toUpperCase()]||+e[1]},wn=function(e,o,n){o=o/100,n=n/100;let t=o;const a=Math.max(n,.01);n*=2,o*=n<=1?n:2-n,t*=a<=1?a:2-a;const r=(n+o)/2,l=n===0?2*t/(a+t):2*o/(n+o);return{h:e,s:l*100,v:r*100}},Qe=(e,o,n)=>{e=te(e,255),o=te(o,255),n=te(n,255);const t=Math.max(e,o,n),a=Math.min(e,o,n);let r;const l=t,d=t-a,i=t===0?0:d/t;if(t===a)r=0;else{switch(t){case e:{r=(o-n)/d+(o<n?6:0);break}case o:{r=(n-e)/d+2;break}case n:{r=(e-o)/d+4;break}}r/=6}return{h:r*360,s:i*100,v:l*100}},re=function(e,o,n){e=te(e,360)*6,o=te(o,100),n=te(n,100);const t=Math.floor(e),a=e-t,r=n*(1-o),l=n*(1-a*o),d=n*(1-(1-a)*o),i=t%6,c=[n,l,r,r,d,n][i],g=[d,n,n,l,r,r][i],p=[r,r,d,n,n,l][i];return{r:Math.round(c*255),g:Math.round(g*255),b:Math.round(p*255)}};class de{constructor(o={}){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="";for(const n in o)xe(o,n)&&(this[n]=o[n]);o.value?this.fromString(o.value):this.doOnChange()}set(o,n){if(arguments.length===1&&typeof o=="object"){for(const t in o)xe(o,t)&&this.set(t,o[t]);return}this[`_${o}`]=n,this.doOnChange()}get(o){return o==="alpha"?Math.floor(this[`_${o}`]):this[`_${o}`]}toRgb(){return re(this._hue,this._saturation,this._value)}fromString(o){if(!o){this._hue=0,this._saturation=100,this._value=100,this.doOnChange();return}const n=(t,a,r)=>{this._hue=Math.max(0,Math.min(360,t)),this._saturation=Math.max(0,Math.min(100,a)),this._value=Math.max(0,Math.min(100,r)),this.doOnChange()};if(o.includes("hsl")){const t=o.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter(a=>a!=="").map((a,r)=>r>2?Number.parseFloat(a):Number.parseInt(a,10));if(t.length===4?this._alpha=Number.parseFloat(t[3])*100:t.length===3&&(this._alpha=100),t.length>=3){const{h:a,s:r,v:l}=wn(t[0],t[1],t[2]);n(a,r,l)}}else if(o.includes("hsv")){const t=o.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter(a=>a!=="").map((a,r)=>r>2?Number.parseFloat(a):Number.parseInt(a,10));t.length===4?this._alpha=Number.parseFloat(t[3])*100:t.length===3&&(this._alpha=100),t.length>=3&&n(t[0],t[1],t[2])}else if(o.includes("rgb")){const t=o.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter(a=>a!=="").map((a,r)=>r>2?Number.parseFloat(a):Number.parseInt(a,10));if(t.length===4?this._alpha=Number.parseFloat(t[3])*100:t.length===3&&(this._alpha=100),t.length>=3){const{h:a,s:r,v:l}=Qe(t[0],t[1],t[2]);n(a,r,l)}}else if(o.includes("#")){const t=o.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(t))return;let a,r,l;t.length===3?(a=Y(t[0]+t[0]),r=Y(t[1]+t[1]),l=Y(t[2]+t[2])):(t.length===6||t.length===8)&&(a=Y(t.slice(0,2)),r=Y(t.slice(2,4)),l=Y(t.slice(4,6))),t.length===8?this._alpha=Y(t.slice(6))/255*100:(t.length===3||t.length===6)&&(this._alpha=100);const{h:d,s:i,v:c}=Qe(a,r,l);n(d,i,c)}}compare(o){return Math.abs(o._hue-this._hue)<2&&Math.abs(o._saturation-this._saturation)<1&&Math.abs(o._value-this._value)<1&&Math.abs(o._alpha-this._alpha)<1}doOnChange(){const{_hue:o,_saturation:n,_value:t,_alpha:a,format:r}=this;if(this.enableAlpha)switch(r){case"hsl":{const l=Ye(o,n/100,t/100);this.value=`hsla(${o}, ${Math.round(l[1]*100)}%, ${Math.round(l[2]*100)}%, ${this.get("alpha")/100})`;break}case"hsv":{this.value=`hsva(${o}, ${Math.round(n)}%, ${Math.round(t)}%, ${this.get("alpha")/100})`;break}case"hex":{this.value=`${Ge(re(o,n,t))}${be(a*255/100)}`;break}default:{const{r:l,g:d,b:i}=re(o,n,t);this.value=`rgba(${l}, ${d}, ${i}, ${this.get("alpha")/100})`}}else switch(r){case"hsl":{const l=Ye(o,n/100,t/100);this.value=`hsl(${o}, ${Math.round(l[1]*100)}%, ${Math.round(l[2]*100)}%)`;break}case"hsv":{this.value=`hsv(${o}, ${Math.round(n)}%, ${Math.round(t)}%)`;break}case"rgb":{const{r:l,g:d,b:i}=re(o,n,t);this.value=`rgb(${l}, ${d}, ${i})`;break}default:this.value=Ge(re(o,n,t))}}}const Sn=F({props:{colors:{type:Array,required:!0},color:{type:Object,required:!0},enableAlpha:{type:Boolean,required:!0}},setup(e){const o=G("color-predefine"),{currentColor:n}=Bt(it),t=S(r(e.colors,e.color));z(()=>n.value,l=>{const d=new de;d.fromString(l),t.value.forEach(i=>{i.selected=d.compare(i)})}),Ot(()=>{t.value=r(e.colors,e.color)});function a(l){e.color.fromString(e.colors[l])}function r(l,d){return l.map(i=>{const c=new de;return c.enableAlpha=e.enableAlpha,c.format="rgba",c.fromString(i),c.selected=c.value===d.value,c})}return{rgbaColors:t,handleSelect:a,ns:o}}}),En=["onClick"];function $n(e,o,n,t,a,r){return v(),A("div",{class:h(e.ns.b())},[y("div",{class:h(e.ns.e("colors"))},[(v(!0),A(et,null,Dt(e.rgbaColors,(l,d)=>(v(),A("div",{key:e.colors[d],class:h([e.ns.e("color-selector"),e.ns.is("alpha",l._alpha<100),{selected:l.selected}]),onClick:i=>e.handleSelect(d)},[y("div",{style:x({backgroundColor:l.value})},null,4)],10,En))),128))],2)],2)}var Nn=q(Sn,[["render",$n],["__file","predefine.vue"]]);const Mn=F({name:"ElSlPanel",props:{color:{type:Object,required:!0}},setup(e){const o=G("color-svpanel"),n=we(),t=S(0),a=S(0),r=S("hsl(0, 100%, 50%)"),l=b(()=>{const c=e.color.get("hue"),g=e.color.get("value");return{hue:c,value:g}});function d(){const c=e.color.get("saturation"),g=e.color.get("value"),p=n.vnode.el,{clientWidth:M,clientHeight:w}=p;a.value=c*M/100,t.value=(100-g)*w/100,r.value=`hsl(${e.color.get("hue")}, 100%, 50%)`}function i(c){const p=n.vnode.el.getBoundingClientRect(),{clientX:M,clientY:w}=Oe(c);let _=M-p.left,E=w-p.top;_=Math.max(0,_),_=Math.min(_,p.width),E=Math.max(0,E),E=Math.min(E,p.height),a.value=_,t.value=E,e.color.set({saturation:_/p.width*100,value:100-E/p.height*100})}return z(()=>l.value,()=>{d()}),le(()=>{he(n.vnode.el,{drag:c=>{i(c)},end:c=>{i(c)}}),d()}),{cursorTop:t,cursorLeft:a,background:r,colorValue:l,handleDrag:i,update:d,ns:o}}}),Tn=y("div",null,null,-1),Vn=[Tn];function In(e,o,n,t,a,r){return v(),A("div",{class:h(e.ns.b()),style:x({backgroundColor:e.background})},[y("div",{class:h(e.ns.e("white"))},null,2),y("div",{class:h(e.ns.e("black"))},null,2),y("div",{class:h(e.ns.e("cursor")),style:x({top:e.cursorTop+"px",left:e.cursorLeft+"px"})},Vn,6)],6)}var An=q(Mn,[["render",In],["__file","sv-panel.vue"]]);const Bn=["onKeydown"],On=["id","aria-label","aria-labelledby","aria-description","aria-disabled","tabindex"],Dn=F({name:"ElColorPicker"}),Pn=F({...Dn,props:yn,emits:Cn,setup(e,{expose:o,emit:n}){const t=e,{t:a}=Pt(),r=G("color"),{formItem:l}=lt(),d=at(),i=st(),{inputId:c,isLabeledByFormItem:g}=rt(t,{formItemContext:l}),p=S(),M=S(),w=S(),_=S(),E=S(),L=S(),{isFocused:$,handleFocus:N,handleBlur:m}=Mt(E,{beforeBlur(f){var V;return(V=_.value)==null?void 0:V.isFocusInsideContent(f)},afterBlur(){ae(!1),se()}}),W=f=>{if(i.value)return ze();N(f)};let u=!0;const C=Ft(new de({enableAlpha:t.showAlpha,format:t.colorFormat||"",value:t.modelValue})),k=S(!1),P=S(!1),Q=S(""),pt=b(()=>!t.modelValue&&!P.value?"transparent":bt(C,t.showAlpha)),Se=b(()=>!t.modelValue&&!P.value?"":C.value),vt=b(()=>g.value?void 0:t.label||t.ariaLabel||a("el.colorpicker.defaultLabel"));_e({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-color-picker",ref:"https://element-plus.org/en-US/component/color-picker.html"},b(()=>!!t.label));const mt=b(()=>g.value?l==null?void 0:l.labelId:void 0),gt=b(()=>[r.b("picker"),r.is("disabled",i.value),r.bm("picker",d.value),r.is("focused",$.value)]);function bt(f,V){if(!(f instanceof de))throw new TypeError("color should be instance of _color Class");const{r:U,g:He,b:Ue}=f.toRgb();return V?`rgba(${U}, ${He}, ${Ue}, ${f.get("alpha")/100})`:`rgb(${U}, ${He}, ${Ue})`}function ae(f){k.value=f}const ve=en(ae,100,{leading:!0});function De(){i.value||ae(!0)}function Pe(){ve(!1),se()}function se(){ie(()=>{t.modelValue?C.fromString(t.modelValue):(C.value="",ie(()=>{P.value=!1}))})}function yt(){i.value||ve(!k.value)}function Fe(){C.fromString(Q.value)}function Ct(){const f=C.value;n(ne,f),n("change",f),t.validateEvent&&(l==null||l.validate("change").catch(V=>Ie())),ve(!1),ie(()=>{const V=new de({enableAlpha:t.showAlpha,format:t.colorFormat||"",value:t.modelValue});C.compare(V)||se()})}function kt(){ve(!1),n(ne,null),n("change",null),t.modelValue!==null&&t.validateEvent&&(l==null||l.validate("change").catch(f=>Ie())),se()}function _t(f){if(k.value&&(Pe(),$.value)){const V=new FocusEvent("focus",f);m(V)}}function Le(f){f.preventDefault(),f.stopPropagation(),ae(!1),se()}function wt(f){switch(f.code){case ge.enter:case ge.space:f.preventDefault(),f.stopPropagation(),De(),L.value.focus();break;case ge.esc:Le(f);break}}function St(){E.value.focus()}function ze(){E.value.blur()}return le(()=>{t.modelValue&&(Q.value=Se.value)}),z(()=>t.modelValue,f=>{f?f&&f!==C.value&&(u=!1,C.fromString(f)):P.value=!1}),z(()=>Se.value,f=>{Q.value=f,u&&n("activeChange",f),u=!0}),z(()=>C.value,()=>{!t.modelValue&&!P.value&&(P.value=!0)}),z(()=>k.value,()=>{ie(()=>{var f,V,U;(f=p.value)==null||f.update(),(V=M.value)==null||V.update(),(U=w.value)==null||U.update()})}),Lt(it,{currentColor:Se}),o({color:C,show:De,hide:Pe,focus:St,blur:ze}),(f,V)=>(v(),I(s(Qt),{ref_key:"popper",ref:_,visible:k.value,"show-arrow":!1,"fallback-placements":["bottom","top","right","left"],offset:0,"gpu-acceleration":!1,"popper-class":[s(r).be("picker","panel"),s(r).b("dropdown"),f.popperClass],"stop-popper-mouse-event":!1,effect:"light",trigger:"click",teleported:f.teleported,transition:`${s(r).namespace.value}-zoom-in-top`,persistent:"",onHide:V[2]||(V[2]=U=>ae(!1))},{content:D(()=>[ce((v(),A("div",{onKeydown:Me(Le,["esc"])},[y("div",{class:h(s(r).be("dropdown","main-wrapper"))},[T(bn,{ref_key:"hue",ref:p,class:"hue-slider",color:s(C),vertical:""},null,8,["color"]),T(An,{ref_key:"sv",ref:M,color:s(C)},null,8,["color"])],2),f.showAlpha?(v(),I(vn,{key:0,ref_key:"alpha",ref:w,color:s(C)},null,8,["color"])):B("v-if",!0),f.predefine?(v(),I(Nn,{key:1,ref:"predefine","enable-alpha":f.showAlpha,color:s(C),colors:f.predefine},null,8,["enable-alpha","color","colors"])):B("v-if",!0),y("div",{class:h(s(r).be("dropdown","btns"))},[y("span",{class:h(s(r).be("dropdown","value"))},[T(s(Tt),{ref_key:"inputRef",ref:L,modelValue:Q.value,"onUpdate:modelValue":V[0]||(V[0]=U=>Q.value=U),"validate-event":!1,size:"small",onKeyup:Me(Fe,["enter"]),onBlur:Fe},null,8,["modelValue","onKeyup"])],2),T(s(Ke),{class:h(s(r).be("dropdown","link-btn")),text:"",size:"small",onClick:kt},{default:D(()=>[K(Z(s(a)("el.colorpicker.clear")),1)]),_:1},8,["class"]),T(s(Ke),{plain:"",size:"small",class:h(s(r).be("dropdown","btn")),onClick:Ct},{default:D(()=>[K(Z(s(a)("el.colorpicker.confirm")),1)]),_:1},8,["class"])],2)],40,Bn)),[[s(Jt),_t]])]),default:D(()=>[y("div",zt({id:s(c),ref_key:"triggerRef",ref:E},f.$attrs,{class:s(gt),role:"button","aria-label":s(vt),"aria-labelledby":s(mt),"aria-description":s(a)("el.colorpicker.description",{color:f.modelValue||""}),"aria-disabled":s(i),tabindex:s(i)?-1:f.tabindex,onKeydown:wt,onFocus:W,onBlur:V[1]||(V[1]=(...U)=>s(m)&&s(m)(...U))}),[s(i)?(v(),A("div",{key:0,class:h(s(r).be("picker","mask"))},null,2)):B("v-if",!0),y("div",{class:h(s(r).be("picker","trigger")),onClick:yt},[y("span",{class:h([s(r).be("picker","color"),s(r).is("alpha",f.showAlpha)])},[y("span",{class:h(s(r).be("picker","color-inner")),style:x({backgroundColor:s(pt)})},[ce(T(s(R),{class:h([s(r).be("picker","icon"),s(r).is("icon-arrow-down")])},{default:D(()=>[T(s(Et))]),_:1},8,["class"]),[[Ce,f.modelValue||P.value]]),ce(T(s(R),{class:h([s(r).be("picker","empty"),s(r).is("icon-close")])},{default:D(()=>[T(s($t))]),_:1},8,["class"]),[[Ce,!f.modelValue&&!P.value]])],6)],2)],2)],16,On)]),_:1},8,["visible","popper-class","teleported","transition"]))}});var Fn=q(Pn,[["__file","color-picker.vue"]]);const ut=Ae(Fn),Ln=pe({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:tn},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:ue},activeActionIcon:{type:ue},activeIcon:{type:ue},inactiveIcon:{type:ue},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:X(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0},...ot(["ariaLabel"])}),zn={[ne]:e=>me(e)||j(e)||ee(e),[ke]:e=>me(e)||j(e)||ee(e),[Ve]:e=>me(e)||j(e)||ee(e)},Hn=["onClick"],Un=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],Kn=["aria-hidden"],Rn=["aria-hidden"],xn=["aria-hidden"],ct="ElSwitch",Wn=F({name:ct}),Xn=F({...Wn,props:Ln,emits:zn,setup(e,{expose:o,emit:n}){const t=e,{formItem:a}=lt(),r=at(),l=G("switch"),{inputId:d}=rt(t,{formItemContext:a}),i=st(b(()=>t.loading)),c=S(t.modelValue!==!1),g=S(),p=S(),M=b(()=>[l.b(),l.m(r.value),l.is("disabled",i.value),l.is("checked",$.value)]),w=b(()=>[l.e("label"),l.em("label","left"),l.is("active",!$.value)]),_=b(()=>[l.e("label"),l.em("label","right"),l.is("active",$.value)]),E=b(()=>({width:fe(t.width)}));z(()=>t.modelValue,()=>{c.value=!0});const L=b(()=>c.value?t.modelValue:!1),$=b(()=>L.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(L.value)||(n(ne,t.inactiveValue),n(ke,t.inactiveValue),n(Ve,t.inactiveValue)),z($,u=>{var C;g.value.checked=u,t.validateEvent&&((C=a==null?void 0:a.validate)==null||C.call(a,"change").catch(k=>Ie()))});const N=()=>{const u=$.value?t.inactiveValue:t.activeValue;n(ne,u),n(ke,u),n(Ve,u),ie(()=>{g.value.checked=$.value})},m=()=>{if(i.value)return;const{beforeChange:u}=t;if(!u){N();return}const C=u();[We(C),me(C)].includes(!0)||jt(ct,"beforeChange must return type `Promise<boolean>` or `boolean`"),We(C)?C.then(P=>{P&&N()}).catch(P=>{}):C&&N()},W=()=>{var u,C;(C=(u=g.value)==null?void 0:u.focus)==null||C.call(u)};return le(()=>{g.value.checked=$.value}),_e({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-switch",ref:"https://element-plus.org/en-US/component/switch.html"},b(()=>!!t.label)),o({focus:W,checked:$}),(u,C)=>(v(),A("div",{class:h(s(M)),onClick:tt(m,["prevent"])},[y("input",{id:s(d),ref_key:"input",ref:g,class:h(s(l).e("input")),type:"checkbox",role:"switch","aria-checked":s($),"aria-disabled":s(i),"aria-label":u.label||u.ariaLabel,name:u.name,"true-value":u.activeValue,"false-value":u.inactiveValue,disabled:s(i),tabindex:u.tabindex,onChange:N,onKeydown:Me(m,["enter"])},null,42,Un),!u.inlinePrompt&&(u.inactiveIcon||u.inactiveText)?(v(),A("span",{key:0,class:h(s(w))},[u.inactiveIcon?(v(),I(s(R),{key:0},{default:D(()=>[(v(),I(J(u.inactiveIcon)))]),_:1})):B("v-if",!0),!u.inactiveIcon&&u.inactiveText?(v(),A("span",{key:1,"aria-hidden":s($)},Z(u.inactiveText),9,Kn)):B("v-if",!0)],2)):B("v-if",!0),y("span",{ref_key:"core",ref:p,class:h(s(l).e("core")),style:x(s(E))},[u.inlinePrompt?(v(),A("div",{key:0,class:h(s(l).e("inner"))},[u.activeIcon||u.inactiveIcon?(v(),I(s(R),{key:0,class:h(s(l).is("icon"))},{default:D(()=>[(v(),I(J(s($)?u.activeIcon:u.inactiveIcon)))]),_:1},8,["class"])):u.activeText||u.inactiveText?(v(),A("span",{key:1,class:h(s(l).is("text")),"aria-hidden":!s($)},Z(s($)?u.activeText:u.inactiveText),11,Rn)):B("v-if",!0)],2)):B("v-if",!0),y("div",{class:h(s(l).e("action"))},[u.loading?(v(),I(s(R),{key:0,class:h(s(l).is("loading"))},{default:D(()=>[T(s(Nt))]),_:1},8,["class"])):s($)?ye(u.$slots,"active-action",{key:1},()=>[u.activeActionIcon?(v(),I(s(R),{key:0},{default:D(()=>[(v(),I(J(u.activeActionIcon)))]),_:1})):B("v-if",!0)]):s($)?B("v-if",!0):ye(u.$slots,"inactive-action",{key:2},()=>[u.inactiveActionIcon?(v(),I(s(R),{key:0},{default:D(()=>[(v(),I(J(u.inactiveActionIcon)))]),_:1})):B("v-if",!0)])],2)],6),!u.inlinePrompt&&(u.activeIcon||u.activeText)?(v(),A("span",{key:1,class:h(s(_))},[u.activeIcon?(v(),I(s(R),{key:0},{default:D(()=>[(v(),I(J(u.activeIcon)))]),_:1})):B("v-if",!0),!u.activeIcon&&u.activeText?(v(),A("span",{key:1,"aria-hidden":!s($)},Z(u.activeText),9,xn)):B("v-if",!0)],2)):B("v-if",!0)],10,Hn))}});var jn=q(Xn,[["__file","switch.vue"]]);const dt=Ae(jn),ft=["success","info","warning","error"],O=qt({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",plain:!1,offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Be?document.body:void 0}),qn=pe({customClass:{type:String,default:O.customClass},center:{type:Boolean,default:O.center},dangerouslyUseHTMLString:{type:Boolean,default:O.dangerouslyUseHTMLString},duration:{type:Number,default:O.duration},icon:{type:ue,default:O.icon},id:{type:String,default:O.id},message:{type:X([String,Object,Function]),default:O.message},onClose:{type:X(Function),default:O.onClose},showClose:{type:Boolean,default:O.showClose},type:{type:String,values:ft,default:O.type},plain:{type:Boolean,default:O.plain},offset:{type:Number,default:O.offset},zIndex:{type:Number,default:O.zIndex},grouping:{type:Boolean,default:O.grouping},repeatNum:{type:Number,default:O.repeatNum}}),Yn={destroy:()=>!0},H=Ht([]),Zn=e=>{const o=H.findIndex(a=>a.id===e),n=H[o];let t;return o>0&&(t=H[o-1]),{current:n,prev:t}},Gn=e=>{const{prev:o}=Zn(e);return o?o.vm.exposed.bottom.value:0},Qn=(e,o)=>H.findIndex(t=>t.id===e)>0?16:o,Jn=["id"],eo=["innerHTML"],to=F({name:"ElMessage"}),no=F({...to,props:qn,emits:Yn,setup(e,{expose:o}){const n=e,{Close:t}=Xt,{ns:a,zIndex:r}=Ut("message"),{currentZIndex:l,nextZIndex:d}=r,i=S(),c=S(!1),g=S(0);let p;const M=b(()=>n.type?n.type==="error"?"danger":n.type:"info"),w=b(()=>{const k=n.type;return{[a.bm("icon",k)]:k&&qe[k]}}),_=b(()=>n.icon||qe[n.type]||""),E=b(()=>Gn(n.id)),L=b(()=>Qn(n.id,n.offset)+E.value),$=b(()=>g.value+L.value),N=b(()=>({top:`${L.value}px`,zIndex:l.value}));function m(){n.duration!==0&&({stop:p}=Kt(()=>{u()},n.duration))}function W(){p==null||p()}function u(){c.value=!1}function C({code:k}){k===ge.esc&&u()}return le(()=>{m(),d(),c.value=!0}),z(()=>n.repeatNum,()=>{W(),m()}),Yt(document,"keydown",C),Zt(i,()=>{g.value=i.value.getBoundingClientRect().height}),o({visible:c,bottom:$,close:u}),(k,P)=>(v(),I(Je,{name:s(a).b("fade"),onBeforeLeave:k.onClose,onAfterLeave:P[0]||(P[0]=Q=>k.$emit("destroy")),persisted:""},{default:D(()=>[ce(y("div",{id:k.id,ref_key:"messageRef",ref:i,class:h([s(a).b(),{[s(a).m(k.type)]:k.type},s(a).is("center",k.center),s(a).is("closable",k.showClose),s(a).is("plain",k.plain),k.customClass]),style:x(s(N)),role:"alert",onMouseenter:W,onMouseleave:m},[k.repeatNum>1?(v(),I(s(rn),{key:0,value:k.repeatNum,type:s(M),class:h(s(a).e("badge"))},null,8,["value","type","class"])):B("v-if",!0),s(_)?(v(),I(s(R),{key:1,class:h([s(a).e("icon"),s(w)])},{default:D(()=>[(v(),I(J(s(_))))]),_:1},8,["class"])):B("v-if",!0),ye(k.$slots,"default",{},()=>[k.dangerouslyUseHTMLString?(v(),A(et,{key:1},[B(" Caution here, message could've been compromised, never use user's input as message "),y("p",{class:h(s(a).e("content")),innerHTML:k.message},null,10,eo)],2112)):(v(),A("p",{key:0,class:h(s(a).e("content"))},Z(k.message),3))]),k.showClose?(v(),I(s(R),{key:2,class:h(s(a).e("closeBtn")),onClick:tt(u,["stop"])},{default:D(()=>[T(s(t))]),_:1},8,["class","onClick"])):B("v-if",!0)],46,Jn),[[Ce,c.value]])]),_:3},8,["name","onBeforeLeave"]))}});var oo=q(no,[["__file","message.vue"]]);let lo=1;const ht=e=>{const o=!e||j(e)||nt(e)||Te(e)?{message:e}:e,n={...O,...o};if(!n.appendTo)n.appendTo=document.body;else if(j(n.appendTo)){let t=document.querySelector(n.appendTo);Rt(t)||(t=document.body),n.appendTo=t}return n},ao=e=>{const o=H.indexOf(e);if(o===-1)return;H.splice(o,1);const{handler:n}=e;n.close()},so=({appendTo:e,...o},n)=>{const t=`message_${lo++}`,a=o.onClose,r=document.createElement("div"),l={...o,id:t,onClose:()=>{a==null||a(),ao(g)},onDestroy:()=>{je(null,r)}},d=T(oo,l,Te(l.message)||nt(l.message)?{default:Te(l.message)?l.message:()=>l.message}:null);d.appContext=n||oe._context,je(d,r),e.appendChild(r.firstElementChild);const i=d.component,g={id:t,vnode:d,vm:i,handler:{close:()=>{i.exposed.visible.value=!1}},props:d.component.props};return g},oe=(e={},o)=>{if(!Be)return{close:()=>{}};if(ee(Xe.max)&&H.length>=Xe.max)return{close:()=>{}};const n=ht(e);if(n.grouping&&H.length){const a=H.find(({vnode:r})=>{var l;return((l=r.props)==null?void 0:l.message)===n.message});if(a)return a.props.repeatNum+=1,a.props.type=n.type,a.handler}const t=so(n,o);return H.push(t),t.handler};ft.forEach(e=>{oe[e]=(o={},n)=>{const t=ht(o);return oe({...t,type:e},n)}});function ro(e){for(const o of H)(!e||e===o.props.type)&&o.handler.close()}oe.closeAll=ro;oe._context=null;const io=xt(oe,"$message");const uo={name:"baseTree",components:{ElSwitch:dt,ElColorPicker:ut},setup(){return{cloneNodeDrag:S(!0)}},data(){return{data:{id:1,label:"xxx科技有限公司",children:[{id:2,pid:1,label:"产品研发部",style:{color:"#fff",background:"#108ffe"},children:[{id:6,pid:2,label:"禁止编辑节点",disabled:!0},{id:8,pid:2,label:"禁止拖拽节点",noDragging:!0},{id:10,pid:2,label:"测试"}]},{id:3,pid:1,label:"客服部",children:[{id:11,pid:3,label:"客服一部"},{id:12,pid:3,label:"客服二部"}]},{id:4,pid:1,label:"业务部"}]},horizontal:!0,collapsable:!0,onlyOneNode:!1,expandAll:!0,disaled:!1,style:{background:"#fff",color:"#5e6d82"}}},created(){},methods:{onMenus({node:e,command:o}){console.log(e,o)},onExpand(e,o){console.log(e,o)},onExpandAll(e){console.log(e)},nodeDragMove(e){console.log(e)},beforeDragEnd(e,o){return new Promise((n,t)=>{o||t(),e.id===o.id?t():n()})},nodeDragEnd(e,o){console.log(e,o)},onNodeDblclick(){console.log("onNodeDblclick")},onNodeClick(e,o){io.info(o.label)},expandChange(){},toggleExpand(e,o){Array.isArray(e)?e.forEach(n=>{n.expand=o,n.children&&this.toggleExpand(n.children,o)}):(e.expand=o,e.children&&this.toggleExpand(e.children,o))}}},co={style:{display:"flex",padding:"10px"}},fo={style:{"margin-right":"10px"}},ho={style:{"margin-right":"10px"}},po={style:{"margin-right":"10px"}},vo={style:{"margin-right":"10px"}},mo={style:{"margin-right":"10px"}},go={style:{padding:"0 10px 10px"}},bo={style:{height:"400px"}};function yo(e,o,n,t,a,r){const l=dt,d=ut,i=Wt("vue3-tree-org");return v(),A("div",null,[y("div",co,[y("div",fo,[T(l,{modelValue:a.horizontal,"onUpdate:modelValue":o[0]||(o[0]=c=>a.horizontal=c)},null,8,["modelValue"]),K(" 横向")]),y("div",ho,[T(l,{modelValue:a.collapsable,"onUpdate:modelValue":o[1]||(o[1]=c=>a.collapsable=c)},null,8,["modelValue"]),K(" 可收起")]),y("div",po,[T(l,{modelValue:a.disaled,"onUpdate:modelValue":o[2]||(o[2]=c=>a.disaled=c)},null,8,["modelValue"]),K(" 禁止编辑")]),y("div",vo,[T(l,{modelValue:a.onlyOneNode,"onUpdate:modelValue":o[3]||(o[3]=c=>a.onlyOneNode=c)},null,8,["modelValue"]),K(" 仅拖动当前节点")]),y("div",mo,[T(l,{modelValue:t.cloneNodeDrag,"onUpdate:modelValue":o[4]||(o[4]=c=>t.cloneNodeDrag=c)},null,8,["modelValue"]),K(" 拖动节点副本")])]),y("div",go,[K(" 背景色："),T(d,{modelValue:a.style.background,"onUpdate:modelValue":o[5]||(o[5]=c=>a.style.background=c),size:"small"},null,8,["modelValue"]),K("  文字颜色："),T(d,{modelValue:a.style.color,"onUpdate:modelValue":o[6]||(o[6]=c=>a.style.color=c),size:"small"},null,8,["modelValue"]),K("  ")]),y("div",bo,[T(i,{data:a.data,center:"",horizontal:a.horizontal,collapsable:a.collapsable,"label-style":a.style,"only-one-node":a.onlyOneNode,"clone-node-drag":t.cloneNodeDrag,"before-drag-end":r.beforeDragEnd,onOnNodeDrag:r.nodeDragMove,onOnNodeDragEnd:r.nodeDragEnd,onOnContextmenu:r.onMenus,onOnExpand:r.onExpand,onOnNodeDblclick:r.onNodeDblclick,onOnNodeClick:r.onNodeClick},null,8,["data","horizontal","collapsable","label-style","only-one-node","clone-node-drag","before-drag-end","onOnNodeDrag","onOnNodeDragEnd","onOnContextmenu","onOnExpand","onOnNodeDblclick","onOnNodeClick"])])])}const Oo=Vt(uo,[["render",yo]]);export{Oo as default};
