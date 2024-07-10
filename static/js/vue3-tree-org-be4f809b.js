import{a as A,o as L,c as q,_ as $e,$ as G,Q as ae,d as ye,r as S,K as ne,Y as Te,ad as ce,W as he,a2 as pe,a3 as Se,S as Ne,ac as Oe,V as ee,T as Ke,O as xe,a4 as Qe,h as Ze,l as I,f as Ae,G as et,I as We,M as qe,w as ue,n as ge,aa as tt,F as Ye,ah as ot,ag as Pe,B as nt}from"./@vue-5b74f5fb.js";var at="vue3-tree-org",lt="4.2.2";const w=function(e){return Object.prototype.toString.call(e)==="[object Object]"},H=function(e){return typeof e=="string"},Q=function(e){return typeof e=="number"},V={print:(e,t,o)=>H(t)||typeof o=="boolean",pretty:(e,t,o)=>H(t)&&H(e)||typeof o=="string",primary:(e,t)=>H(e)||typeof t=="boolean",success:(e,t)=>H(e)||typeof t=="boolean",info:(e,t)=>H(e)||typeof t=="boolean",warning:(e,t)=>H(e)||typeof t=="boolean",danger:(e,t)=>H(e)||typeof t=="boolean"};function de(e="default"){let t="";switch(e){case"primary":t="#2d8cf0";break;case"success":t="#19be6b";break;case"info":t="#909399";break;case"warning":t="#ff9900";break;case"danger":t="#ff4d4f";break;case"default":t="#35495E";break;default:t=e}return t}V.print=function(e,t="default",o=!1){return typeof e=="object"?(console.dir(e),!0):(o?console.log(`%c ${e} `,`background:${de(t)}; padding: 2px; border-radius: 4px;color: #fff;`):console.log(`%c ${e} `,`color: ${de(t)};`),!0)},V.pretty=function(e,t,o="primary"){return console.log(`%c ${e} %c ${t} %c`,`background:${de(o)};border:1px solid ${de(o)}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,`border:1px solid ${de(o)}; padding: 1px; border-radius: 0 4px 4px 0; color: ${de(o)};`,"background:transparent"),!0},V.primary=function(e,t=!1){return this.print&&this.print(e,"primary",t),!0},V.success=function(e,t=!1){return this.print&&this.print(e,"success",t),!0},V.info=function(e,t=!1){return this.print&&this.print(e,"info",t),!0},V.warning=function(e,t=!1){return this.print&&this.print(e,"warning",t),!0},V.danger=function(e,t=!1){return this.print&&this.print(e,"danger",t),!0};var rt={async install(e){e.config.globalProperties.$log=V,V.pretty("["+at+"] "+lt,"success")}};const ie=function(){let e=!1;return{get:()=>e,set:t=>{e=t}}}(),Ue=function(e,t,o){const{id:r,children:f}=t;if(e[r]===o)return e;if(Array.isArray(e[f])){const m=e[f];for(let d=0,g=m.length;d<g;d++){const p=m[d],h=Ue(p,t,o);if(h)return h}}},dt=function(e,t){const{parenNode:o,onlyOneNode:r,cloneNodeDrag:f}=t;if(o.value){const{keys:m}=t,{id:d,pid:g,children:p}=m,h=o.value.$$data,u=JSON.parse(JSON.stringify(e.$$data));f?(function(n,i,b){const{children:E}=i;if(w(n))z(n);else if(Array.isArray(n))for(let x=0,C=n.length;x<C;x++)z(n[x]);function z(x){if(b(x),Array.isArray(x[E])){const C=x[E];for(let k=0,y=C.length;k<y;k++)z(C[k])}}}(u,m,function(n){typeof n[d]=="string"&&n[d].indexOf("clone-node")!==-1&&(n[d]=`clone-node-${n[d]}`)}),r&&Array.isArray(u[p])&&(u[p]=[]),u[m.pid]=h[m.id],h[p]?h[p].push(u):h[p]=[u]):(function(n,i){const{keys:b,data:E,onlyOneNode:z}=i,{id:x,pid:C,children:k}=b,y=Ue(E,b,n[C]),$=y[k];let s;for(let M=0,Y=$.length;M<Y;M++)if($[M][x]===n[x]){$.splice(M,1),s=M;break}const N=n[k];z&&s!==void 0&&N&&(n[k]=[],N.forEach(M=>{M[C]=y[x]}),y[k].splice(s,0,...N))}(u,t),u[g]=h[d],h[p]?h[p].push(u):h[p]=[].concat(u))}},Ie={beforeMount(e,t){const{l:o,t:r}=t.modifiers,{drag:f,dragData:m,node:d,emit:g,beforeDragEnd:p,initNodes:h}=t.value,{value:u}=t,n={...m};e.addEventListener("mousedown",function(s){const N=s.target;if(f===!1||s.button!==0||d.focused||d.$$data.noDragging||N.className.indexOf("tree-org-node-btn")>-1)return!1;(function(M){M.stopPropagation(),z=M.screenX,x=M.screenY,b=0,n.contextmenu.value=!1;const{keys:Y,onlyOneNode:J}=n;if(J){const{children:U}=Y,P={...d.$$data};P[U]=[],n.cloneData.value=h(P)}else n.cloneData.value=h(d.$$data)})(s),document.addEventListener("mousemove",C),document.addEventListener("mouseup",k),$("start")});let i,b=0,E=!1,z=0,x=0;function C(s){return s.preventDefault(),!(Math.abs(s.screenX-z)<5&&Math.abs(s.screenY-x)<5)&&(E||(E=!0,function(N){ie.set(!0),n.nodeMoving.value=!0,d.moving=!0;let M=e;for(;!M.classList.contains("tree-org-node");)b+=M.offsetLeft,M=M.offsetParent;b+=2,i=document.querySelector("#clone-tree-org"),i&&(i.style.width=`${M.clientWidth}px`,i.style.opacity="0.8",i.style.left=N.clientX-b+"px",i.style.top=N.clientY+2+"px")}(s)),o&&r&&u?(i&&(i.style.left=s.clientX-b+"px",i.style.top=s.clientY+2+"px"),void $("move")):o&&u?(e.style.left=s.clientX-b+"px",void $("move")):void(r&&u&&(e.style.top=s.clientY+"px",$("move"))))}function k(s){if(document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",k),E){if(typeof p=="function"){const N=p(d,n.parenNode.value);N&&N.then?N.then(()=>{y(s)},()=>{}):N!==!1&&y(s)}else y(s);E=!1,i=null,d.moving=!1,n.nodeMoving.value=!1,setTimeout(()=>{ie.set(!1)},200)}}function y(s){const N=document.querySelector(".tree-org-node__moving");if(N&&N.contains(s.target))return $("end"),!1;dt(d,n),$("end")}function $(s){s!=="start"?s!=="move"?s==="end"&&g("on-node-drag-end",d,n.parenNode.value):g("on-node-drag",d):g("on-node-drag-start",d)}}},ke={onClick:"onNodeClick",onDblclick:"onNodeDblclick",onContextmenu:"onNodeContextmenu",onMouseenter:"onNodeMouseenter",onMouseleave:"onNodeMouseleave"};function st(e,t){if(typeof e=="function")return function(o){o.target.className.indexOf("org-tree-node-btn")>-1||e(o,t)}}const Je=(e,t,o)=>!(Array.isArray(e[t])&&e[t].length>0)&&!o||e.isLeaf,He=(e,t,o)=>{const{attrs:r}=o,f=["tree-org-node"],m=[],{expand:d,children:g,id:p}=t;return Je(t,"children",r.lazy)?f.push("is-leaf"):r.collapsable&&!d&&f.push("collapsed"),t.moving&&f.push("tree-org-node__moving"),m.push(ct(e,t,o)),r.collapsable&&!d||m.push(ut(e,g,o)),pe(e("div",{class:f,key:p},m),[[Se,!t.hidden]])},ct=(e,t,o)=>{const{attrs:r}=o,f=r.props,m=r.renderContent,{label:d}=t,g=[];if(o.slots.default)g.push(o.slots.default({node:t}));else if(typeof m=="function"){V.warning("scoped-slot header is easier to use. We recommend users to use scoped-slot header.");const s=m(e,t);s&&g.push(s)}else g.push(e("div",{class:"tree-org-node__text"},d));r.collapsable&&!Je(t,"children",r.lazy)&&g.push(((s,N,M)=>{const{attrs:Y}=M,J=Y.onOnExpand,U=["tree-org-node__expand"];N.expand&&U.push("expanded");const P=[];return M.slots.expand?P.push(M.slots.expand({node:N})):P.push(s("span",{class:"tree-org-node__expand-btn"})),s("span",{class:U,onMousedown:X=>{X.stopPropagation()},onDblclick:X=>{X.stopPropagation()},onClick:X=>{X.stopPropagation(),J&&J(X,N)}},P)})(e,t,o));const p=["tree-org-node__inner"];let{labelStyle:h,labelClassName:u,selectedClassName:n,selectedKey:i}=r;typeof u=="function"&&(u=u(t)),u&&p.push(u),t.className&&p.push(t.className),typeof n=="function"&&(n=n(t)),i!==void 0&&(i=Array.isArray(i)?i:[i]),n&&i&&i.includes(t.id)&&p.push(n);const b=["tree-org-node__content"];t.$$root&&b.push(`is-root_${r.suffix}`),t.label||b.push("is-empty"),t.$$focused&&b.push("is-edit");const E=Pe("nodedrag"),z=[];r.vNodedrag&&E&&!t.$$root&&z.push([E,Object.assign({node:t},r.vNodedrag),"",{l:!0,t:!0}]);const x={};for(const s in ke)if(Object.prototype.hasOwnProperty.call(ke,s)){const N=r[ke[s]];N&&(x[s]=st(N,t))}const C=r.onNodeFocus,k=r.onNodeBlur,y=Pe("focus"),$=[[Se,t.$$focused]];return y&&$.push([y,t.$$focused]),e("div",{class:b},[pe(e("div",{class:p,style:t.style?t.style:h,...x},g),z),pe(e("textarea",{class:"tree-org-node__textarea",placeholder:"请输入节点名称",value:t.label,onFocus:s=>{C&&C(s,t.$$data,t)},onInput:s=>{t.label=s.target.value},onBlur:s=>{t.$$data.focused!==void 0&&(t.$$data.focused=!1),t.$$data[f.label]=s.target.value,t.$$focused=!1,k&&k(s,t.$$data,t)},onClick:s=>s.stopPropagation()}),$)])},ut=(e,t,o)=>{if(Array.isArray(t)&&t.length){const r=t.filter(f=>!f.$$hidden).map(f=>He(e,f,o));return e("div",{class:"tree-org-node__children"},r)}return""},Le=(e,t)=>e.data&&Object.keys(e.data).length!==0?(e.data.$$root=!e.isClone,He(Ze,e.data,t)):"";Le.directives={focus:{mounted(e,{value:t}){t&&e.focus()},updated(e,{value:t}){t&&e.focus()}},nodedrag:Ie};var we=ye({props:{scale:String,tools:Object},setup(e,{emit:t}){const o=S(!1),r=S(!1);function f(p){r.value=!r.value,t("onFullscreen",p)}function m(){document.isFullScreen||document.mozIsFullScreen||document.webkitIsFullScreen||!r.value||f("esc")}const d=I(()=>o.value?"全部收起":"全部展开"),g=I(()=>r.value?"退出全屏":"全屏");return Ae(()=>{window.addEventListener("resize",m)}),et(()=>{window.removeEventListener("resize",m)}),{expanded:o,fullscreen:r,expandTitle:d,fullTiltle:g,handleExpand:function(){o.value=!o.value,t("onExpand")},handleScale:function(p){p==="out"?t("onScale",.1):p==="in"?t("onScale",-.1):t("onRestore")},handleFullscreen:f}}});const it={class:"zm-tree-handle"},pt={key:0,class:"zm-tree-percent"},ft=["title"],mt={class:"zm-tree-svg"},vt=[A("span",{class:"zm-tree-icon"},"+",-1)],gt=[A("span",{class:"zm-tree-icon"},"-",-1)],ht=[A("span",{class:"zm-tree-restore"},null,-1)],yt=["title"],bt={class:"zm-tree-svg"};function Xe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function Me(e,t,o,r=1){return{deltaX:Math.round(t/r/e[0])*e[0],deltaY:Math.round(o/r/e[1])*e[1]}}function se(e,t,o){return e<t?t:o<e?o:e}we.render=function(e,t,o,r,f,m){return L(),q("div",it,[e.tools.scale?(L(),q("div",pt,$e(e.scale),1)):G("v-if",!0),e.tools.expand?(L(),q("div",{key:1,onClick:t[0]||(t[0]=(...d)=>e.handleExpand&&e.handleExpand(...d)),title:e.expandTitle,class:"zm-tree-handle-item"},[A("span",mt,[A("i",{class:ae(["treefont",e.expanded?"icon-collapse":"icon-expand"])},null,2)])],8,ft)):G("v-if",!0),e.tools.zoom?(L(),q("div",{key:2,onClick:t[1]||(t[1]=d=>e.handleScale("out")),title:"放大",class:"zm-tree-handle-item zoom-out"},vt)):G("v-if",!0),e.tools.zoom?(L(),q("div",{key:3,onClick:t[2]||(t[2]=d=>e.handleScale("in")),title:"缩小",class:"zm-tree-handle-item zoom-in"},gt)):G("v-if",!0),e.tools.restore?(L(),q("div",{key:4,onClick:t[3]||(t[3]=d=>e.handleScale("restore")),title:"还原",class:"zm-tree-handle-item"},ht)):G("v-if",!0),e.tools.fullscreen?(L(),q("div",{key:5,onClick:t[4]||(t[4]=(...d)=>e.handleFullscreen&&e.handleFullscreen(...d)),title:e.fullTiltle,class:"zm-tree-handle-item"},[A("span",bt,[A("i",{class:ae(["treefont",e.fullscreen?"icon-unfullscreen":"icon-fullscreen"])},null,2)])],8,yt)):G("v-if",!0)])},we.__file="src/components/tools/tools.vue";const ve=function(e,t,o,r=!1){e&&t&&o&&e.addEventListener(t,o,r)},te=function(e,t,o,r=!1){e&&t&&o&&e.removeEventListener(t,o,r)},xt=(e,{emit:t},o)=>{const r={start:"mousedown",move:"mousemove",stop:"mouseup"},f={start:"touchstart",move:"touchmove",stop:"touchend"},m={userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none"},d={userSelect:"auto",MozUserSelect:"auto",WebkitUserSelect:"auto",MsUserSelect:"auto"};let g=r;const p=S(e.x),h=S(e.y),u=S(e.z),n=S(e.active),i=S(!1),b=S(0),E=S(0),z=S(0),x=S(0),C=S(0),k=S(0);let y={},$={};function s(){y={mouseX:0,mouseY:0,x:0,y:0,w:0,h:0},$={minLeft:-1/0,maxLeft:1/0,minRight:-1/0,maxRight:1/0,minTop:-1/0,maxTop:1/0,minBottom:-1/0,maxBottom:1/0}}function N(){if(e.parent){const[c,R]=M();C.value=c||0,k.value=R||0}}function M(){if(e.parent&&o.eleRef.value){const c=window.getComputedStyle(o.eleRef.value.parentNode,null);return[parseInt(c.getPropertyValue("width"),10),parseInt(c.getPropertyValue("height"),10)]}return[0,0]}function Y(c){if(c instanceof MouseEvent&&c.which!==1)return;const R=c.target||c.srcElement;if(R&&o.eleRef.value&&o.eleRef.value.contains(R)){if(e.dragCancel&&function(O,j,K){let B=O;const Z=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].find(l=>B&&Xe(B[l]))||"";if(!Xe(B[Z]))return!1;do{if(B[Z](j))return!0;if(B===K)return!1;B=B.parentNode}while(B);return!1}(R,e.dragCancel,o.eleRef.value))return void(i.value=!1);n.value||(n.value=!0,t("activated"),t("update:active",!0)),e.draggable&&(i.value=!0),c instanceof MouseEvent?(y.mouseX=c.pageX,y.mouseY=c.pageY):(y.mouseX=c.touches[0].pageX,y.mouseY=c.touches[0].pageY),y.left=p.value,y.right=b.value,y.top=h.value,y.bottom=E.value,e.parent&&($=J()),ve(document.documentElement,g.move,P),ve(document.documentElement,g.stop,X)}}function J(){const c=e.grid;return{minLeft:p.value%c[0],maxLeft:Math.floor((C.value-z.value-p.value)/c[0])*c[0]+p.value,minRight:b.value%c[0],maxRight:Math.floor((C.value-z.value-b.value)/c[0])*c[0]+b.value,minTop:h.value%c[1],maxTop:Math.floor((k.value-x.value-h.value)/c[1])*c[1]+h.value,minBottom:E.value%c[1],maxBottom:Math.floor((k.value-x.value-E.value)/c[1])*c[1]+E.value}}function U(c){const R=c.target||c.srcElement;o.eleRef.value&&!o.eleRef.value.contains(R)&&n.value&&!e.preventDeactivation&&(n.value=!1,t("deactivated"),t("update:active",!1))}function P(c){i.value&&function(R){const O=e.axis,j=e.grid;let K=0,B=0;R instanceof MouseEvent?(K=R.pageX,B=R.pageY):(K=R.touches[0].pageX,B=R.touches[0].pageY);const Z=O&&O!=="y"?y.mouseX-K:0,l=O&&O!=="x"?y.mouseY-B:0,{deltaX:a,deltaY:v}=Me(j,Z,l,e.scale),D=se(y.left-a,$.minLeft,$.maxLeft),_=se(y.top-v,$.minTop,$.maxTop),F=se(y.right+a,$.minRight,$.maxRight),T=se(y.bottom+v,$.minBottom,$.maxBottom);p.value=D,h.value=_,b.value=F,E.value=T,t("dragging",p.value,h.value)}(c)}function X(){s(),i.value&&(i.value=!1,t("dragstop",p.value,h.value))}We(()=>{s()}),Ae(()=>{!e.enableNativeDrag&&o.eleRef.value&&(o.eleRef.value.ondragstart=()=>!1);const[c,R]=M();if(C.value=c,k.value=R,o.eleRef.value){const[O,j]=function(K){const B=window.getComputedStyle(K);return[parseFloat(B.getPropertyValue("width")),parseFloat(B.getPropertyValue("height"))]}(o.eleRef.value);z.value=O,x.value=j,b.value=C.value-z.value-p.value,E.value=k.value-x.value-h.value}ve(document.documentElement,"mousedown",U),ve(document.documentElement,"touchend touchcancel",U),ve(window,"resize",N)}),qe(()=>{te(document.documentElement,"mousedown",U),te(document.documentElement,"touchstart",X),te(document.documentElement,"mousemove",P),te(document.documentElement,"touchmove",P),te(document.documentElement,"mouseup",X),te(document.documentElement,"touchend touchcancel",U),te(window,"resize",N)});const De=I(()=>({transform:`translate(${p.value}px, ${h.value}px)`,zIndex:u.value,...i.value&&e.disableUserSelect?m:d}));return ue(()=>e.active,c=>{n.value=c,t(c?"activated":"deactivated")}),ue(()=>e.z,c=>{(c>=0||c==="auto")&&(u.value=c)}),ue(()=>e.x,c=>{i.value||(e.parent&&($=J()),function(R){const{deltaX:O}=Me(e.grid,R,h.value,e.scale),j=se(O,$.minLeft,$.maxLeft);p.value=j,b.value=C.value-z.value-j}(c))}),ue(()=>e.y,c=>{i.value||(e.parent&&($=J()),function(R){const{deltaY:O}=Me(e.grid,p.value,R,e.scale),j=se(O,$.minTop,$.maxTop);h.value=j,E.value=k.value-x.value-j}(c))}),{enabled:n,dragging:i,style:De,resetBoundsAndMouseState:s,elementTouchDown:function(c){g=f,Y(c)},elementMouseDown:function(c){g=r,Y(c)}}},_e=Symbol("wrapper");function $t(e,t){if((o=e)===null||typeof o!="object"||e.__elPropsReservedKey)return e;var o;const{values:r,required:f,default:m,type:d,validator:g}=e,p=r||g?h=>{let u=!1,n=[];if(r&&(n=[...r,m],u=u||n.includes(h)),g&&(u=u||g(h)),!u&&n.length>0){const i=[...new Set(n)].map(b=>JSON.stringify(b)).join(", ");nt(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${i}], got value ${JSON.stringify(h)}.`)}return u}:void 0;return{type:typeof d=="object"&&Object.getOwnPropertySymbols(d).includes(_e)?d[_e]:d,validator:p,__elPropsReservedKey:!0,default:m,required:!!f}}const ze=e=>function(t){let o=-1;const r=t?t.length:0,f={};for(;++o<r;){const m=t[o];f[m[0]]=m[1]}return f}(Object.entries(e).map(([t,o])=>[t,$t(o,t)])),le=e=>({[_e]:e});var Re=ye({replace:!0,name:"Draggable",props:ze({className:{type:String,default:"zm-draggable"},classNameDraggable:{type:String,default:"draggable"},classNameDragging:{type:String,default:"dragging"},classNameActive:{type:String,default:"active"},disableUserSelect:{type:Boolean,default:!0},enableNativeDrag:{type:Boolean,default:!1},preventDeactivation:{type:Boolean,default:!1},active:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},x:{type:Number,default:0},y:{type:Number,default:0},z:{type:[String,Number],default:"auto",validator:e=>typeof e=="string"?e==="auto":e>=0},dragCancel:String,axis:{type:String,default:"both",validator:e=>["x","y","both"].includes(e)},grid:{type:Array,default:()=>[1,1]},parent:{type:Boolean,default:!1},scale:{type:Number,default:1,validator:e=>e>0}}),emits:{activated:()=>!0,deactivated:()=>!0,dragging:(e,t)=>Q(e)&&Q(t),dragstop:(e,t)=>Q(e)&&Q(t),"update:active":e=>typeof e=="boolean"},setup(e,t){const o=S(),r=xt(e,t,{eleRef:o});return{top,eleRef:o,...r}}});Re.render=function(e,t,o,r,f,m){return L(),q("div",{style:Te(e.style),class:ae([{[e.classNameActive]:e.enabled,[e.classNameDragging]:e.dragging,[e.classNameDraggable]:e.draggable},e.className]),ref:"eleRef",onMousedown:t[0]||(t[0]=(...d)=>e.elementMouseDown&&e.elementMouseDown(...d)),onTouchstart:t[1]||(t[1]=(...d)=>e.elementTouchDown&&e.elementTouchDown(...d))},[ne(e.$slots,"default")],38)},Re.__file="src/components/draggable/src/draggable.vue";var Fe=ye({components:{TreeOrgNode:Le},props:ze({data:{type:Object,required:!0},props:{type:le(Object)},modelValue:Boolean,horizontal:Boolean,selectedKey:String,collapsable:Boolean,renderContent:Function,labelStyle:Object,labelClassName:{type:[Function,String]}}),setup:(e,t)=>({defaultSlot:!!t.slots.default,expandSlot:!!t.slots.expand})});Fe.render=function(e,t,o,r,f,m){const d=ce("tree-org-node");return L(),he(Ke,{to:"body"},[pe(A("div",{id:"clone-tree-org",class:ae(["clone-tree-org tree-org",{horizontal:e.horizontal,collapsable:e.collapsable}])},[Ne(d,{data:e.data,props:e.props,isClone:!1,horizontal:e.horizontal,labelStyle:e.labelStyle,collapsable:e.collapsable,renderContent:e.renderContent,labelClassName:e.labelClassName},Oe({_:2},[e.defaultSlot?{name:"default",fn:ee(({node:g})=>[ne(e.$slots,"default",{node:g})])}:void 0,e.expandSlot?{name:"expand",fn:ee(({node:g})=>[ne(e.$slots,"expand",{node:g})])}:void 0]),1032,["data","props","horizontal","labelStyle","collapsable","renderContent","labelClassName"])],2),[[Se,e.modelValue]])])},Fe.__file="src/components/clone-org/clone-org.vue";const Nt=(e,{emit:t},o)=>{const r=S("");function f(u,n,i){if(u[n.id]===i)return u;if(Array.isArray(u[n.children])){const b=u[n.children];for(let E=0,z=b.length;E<z;E++){const x=f(b[E],n,i);if(x)return x}}}function m(){const{props:u,data:n,node:i}=e;if(e.nodeDelete)return void e.nodeDelete(i.$$data);if(i.$$root)return void V.pretty("[提示] ","根节点不允许删除","danger");const{id:b,children:E}=u,z=f(n,u,i.pid);if(z){const x=z[E];for(let C=0,k=x.length;C<k;C++)if(x[C][b]===i.id){x.splice(C,1),t("onNodeDelete",i.$$data,i);break}}}function d(){const{nodeEdit:u,node:n}=e;u?u(n.$$data):(n.$$focused=!0,t("onNodeFocus",n.$$data))}function g(u){if(e.modelValue){if(o.eleRef.value&&o.eleRef.value.contains(u.target))return!1;t("update:modelValue",!1)}}const p=I(()=>({left:`${e.x}px`,top:`${e.y}px`})),h=I(()=>!e.disabled&&!e.node.disabled);return Ae(()=>{document.addEventListener("mousedown",g)}),qe(()=>{document.removeEventListener("mousedown",g)}),{position:p,editable:h,handleMenu:function(u){const n=u.target;if(n.className==="zm-tree-menu-item"){const i=n.getAttribute("action");switch(i){case"copy":(function(){if(e.nodeCopy)return void e.nodeCopy(e.node.$$data);r.value=e.node.label,ge(()=>{o.inputRef&&o.inputRef.value&&(o.inputRef&&o.inputRef.value.select(),navigator.clipboard.writeText(r.value).then(function(){V.pretty("[提示] ","文本复制成功","success")},function(){V.pretty("[错误] ","浏览器不支持","danger")}),t("onNodeCopy",r.value))})})();break;case"add":(function(){if(e.nodeAdd)return void e.nodeAdd(e.node.$$data);const{id:b,pid:E,label:z,expand:x,children:C}=e.props,{node:k}=e,y={[b]:String(new Date().getTime()),[E]:k.id,[z]:"",[x]:!1,[C]:[],newNode:!0,focused:!0};Array.isArray(k.children)?k.$$data[C].push(y):k.$$data[C]=[y],t("onNodeFocus",y)})();break;case"edit":d();break;case"delete":m()}t("contextmenu",{command:i,node:e.node,data:e.node.$$data}),t("update:modelValue",!1)}},handleEdit:d,handleClose:g,afterEnter:function(){t("opened")},afterLeave:function(){t("closed")}}};var Be=ye({name:"Contextmenu",props:ze({modelValue:{type:Boolean,required:!0},data:{type:Object,required:!0},node:{type:le(Object),required:!0},props:{type:le(Object)},x:Number,y:Number,menus:{type:le(Array)},nodeAdd:Function,nodeDelete:Function,nodeEdit:Function,nodeCopy:Function,disabled:Boolean}),emits:{onNodeDelete:(e,t)=>w(e)&&w(t),onNodeCopy:e=>H(e),contextmenu:e=>w(e),onNodeFocus:e=>w(e),opened:()=>!0,closed:()=>!0,"update:modelValue":e=>typeof e=="boolean"},setup(e,t){const o=S(),r=S();return{eleRef:r,inputRef:o,copyText:S(""),oldData:xe({}),...Nt(e,t,{inputRef:o,eleRef:r})}}});const St=["action"];Be.render=function(e,t,o,r,f,m){return L(),he(Ke,{to:"body"},[Ne(Qe,{name:"dialog-fade",onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,persisted:""},{default:ee(()=>[pe(A("div",{style:Te(e.position),onClick:t[1]||(t[1]=(...d)=>e.handleMenu&&e.handleMenu(...d)),ref:"eleRef",class:"zm-tree-contextmenu"},[A("ul",null,[(L(!0),q(Ye,null,tt(e.menus,d=>(L(),q(Ye,null,[e.editable||!["add","edit","delete"].includes(d.command)?(L(),q("li",{class:"zm-tree-menu-item",action:d.command,key:d.command},$e(d.name),9,St)):G("v-if",!0)],64))),256))]),pe(A("textarea",{class:"copy-textarea",ref:"inputRef","onUpdate:modelValue":t[0]||(t[0]=d=>e.copyText=d)},null,512),[[ot,e.copyText]])],4),[[Se,e.modelValue]])]),_:1},8,["onAfterEnter","onAfterLeave"])])},Be.__file="src/components/contextmenu/src/contextmenu.vue";const zt=[{name:"复制文本",command:"copy"},{name:"新增节点",command:"add"},{name:"编辑节点",command:"edit"},{name:"删除节点",command:"delete"}],Dt=ze({data:{type:Object,required:!0},center:Boolean,props:{type:le(Object),default:()=>({id:"id",pid:"pid",label:"label",expand:"expand",children:"children"})},toolBar:{type:[Object,Boolean],default:()=>({expand:!0,scale:!0,zoom:!0,restore:!0,fullscreen:!0})},disabled:{type:Boolean,default:!1},scalable:{type:Boolean,default:!0},draggable:{type:Boolean,default:!0},draggableOnNode:{type:Boolean,default:!1},nodeDraggable:{type:Boolean,default:!0},cloneNodeDrag:{type:Boolean,default:!0},onlyOneNode:{type:Boolean,default:!0},clickDelay:{type:Number,default:260},lazy:Boolean,load:{type:le(Function)},defaultExpandLevel:Number,defaultExpandKeys:{type:Array,default:()=>[]},beforeDragEnd:Function,horizontal:Boolean,selectedKey:{type:[Array,String,Number]},collapsable:Boolean,renderContent:Function,labelStyle:Object,labelClassName:{type:[Function,String]},selectedClassName:{type:[Function,String]},defineMenus:{type:le([Array,Function]),default:()=>zt},nodeAdd:Function,nodeDelete:Function,nodeEdit:Function,nodeCopy:Function,filterNodeMethod:Function}),Et=(e,{emit:t},o)=>{const r=S(0),f=S(0),m=S(!1);function d(l,a){const v=o.zoomRef.value,D=o.treeRef.value;let _=v.clientWidth/2;const F=v.clientHeight/2;let T=v.clientHeight-D.clientHeight,W=v.clientWidth-D.clientWidth;if(T>0&&(T=0),W>0&&(W=0),e.center){const re=(v.clientWidth-D.clientWidth)/2;W-=re,_-=re}r.value=l>_?_:l<W?W:l,f.value=a<T?T:a>F?F:a}function g(l,a){d(l,a),setTimeout(()=>{ie.set(!1)},200),t("on-drag-stop",{x:l,y:a})}const p=S(!1),h=xe({value:{}}),u=S(!1),n=S(0),i=S(0),b=S({}),E=S([]),z=S(1);function x(l){if(!e.scalable)return;const a=Number((Number(z.value)+l).toFixed(1));z.value=l>0?Math.min(3,a):Math.max(.3,a)}function C(l,a,v){if(m.value=!0,console.log(e.center,e.horizontal,l.offsetLeft,a),!e.center||e.horizontal){const _=l.offsetLeft-a;r.value-=_}const D=l.offsetTop-v;f.value-=D,d(r.value,f.value)}let k;const y=xe(Object.assign({id:"id",pid:"pid",label:"label",expand:"expand",children:"children",isLeaf:"isLeaf"},e.props)),$=S(!1);function s(l){l.forEach(a=>{a.expand&&(a.expand=!1,O.delete(a.id)),a.children&&s(a.children)})}const N=S(!1);function M(l,a){Array.isArray(l)?l.forEach(v=>{a&&O.add(v.id),v.expand=a,a&&O.add(v.id),v.children&&M(v.children,a)}):(a&&O.add(l.id),l.expand=a,a&&O.add(l.id),l.children&&M(l.children,a))}function Y(l){K.value=j(l)}const J=I(()=>({width:100/z.value+"%",height:100/z.value+"%",transform:`scale(${z.value})`})),U=I(()=>`${Math.round(100*z.value)}%`),P=I(()=>e.draggableOnNode&&!e.nodeDraggable?"":`.tree-org-node__content:not(.is-root_${Z})>.tree-org-node__inner`),X=I(()=>N.value?"收起全部节点":"展开全部节点"),De=I(()=>N.value?"收起全部节点":"展开全部节点"),c=S({}),R=I(()=>{const{cloneNodeDrag:l,onlyOneNode:a,data:v}=e;return{drag:e.nodeDraggable,dragData:{keys:y,nodeMoving:p,stopClick:ie,parenNode:h,cloneNodeDrag:l,onlyOneNode:a,contextmenu:u,cloneData:c,data:v},beforeDragEnd:e.beforeDragEnd,initNodes:j,emit:t}});ue(()=>e.horizontal,()=>{ge(()=>{g(r.value,f.value)})});let O=new Set(e.defaultExpandKeys);function j(l){const{defaultExpandLevel:a=0}=e,v=(D,_)=>{const{id:F,label:T,pid:W,expand:re,children:fe,isLeaf:Ee}=y,be={};Object.keys(D).map(me=>{["hidden","disabled","className","style"].includes(me)&&(be[me]=D[me])});const je=D[fe],Ge=_+1,Ve=D[re],Ce=D[F];return(Ve||Ve===void 0&&_<a)&&O.add(Ce),{...be,id:Ce,label:D[T],pid:D[W],expand:O.has(Ce),children:je?je.map(me=>v(me,Ge)):void 0,isLeaf:D[Ee],$$level:_,$$data:D,$$focused:D.focused||!1}};return v(l,0)}const K=S(j(e.data));ue(()=>e.data,(l,a)=>{l!==a&&(O=new Set(e.defaultExpandKeys)),Y(e.data)},{deep:!0});const B=xe({visible:!0,data:{expand:!0,scale:!0,zoom:!0,restore:!0,fullscreen:!0}});We(()=>{typeof e.toolBar=="object"?Object.assign(B.data,e.toolBar):e.toolBar||(B.visible=!1)});const Z=function(l){l=l||32;const a="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",v=a.length;let D="";for(let _=0;_<l;_++)D+=a.charAt(Math.floor(Math.random()*v));return D}(6);return{keys:y,left:r,top:f,menuX:n,menuY:i,suffix:Z,nodeMoving:p,zoomStyle:J,tools:B,zoomPercent:U,dragCancel:P,expandTitle:X,fullTiltle:De,nodeargs:R,expanded:N,fullscreen:$,treeData:K,autoDragging:m,contextmenu:u,nodeMenus:E,menuData:b,cloneData:c,filter:function(l){const a=e.filterNodeMethod;if(!a)throw new Error("[Tree] filterNodeMethod is required when filter");const v=function(D){const _=D.children||[];if(_.forEach(F=>{F.$$hidden=!a.call(F,l,F),v(F)}),D.$$hidden&&_.length){let F=!0;F=_.some(T=>!T.$$hidden),D.$$hidden=!F}l&&!D.$$hidden&&D.children&&(D.expand=!0)};v(K.value)},setData:Y,zoomWheel:function(l){e.scalable&&(l.preventDefault(),l.deltaY<0?x(.1):x(-.1),t("on-zoom",z.value))},onDrag:function(l,a){ie.set(!0),m.value=!1,r.value=l,f.value=a,t("on-drag",{x:l,y:a})},onDragStop:g,expandChange:function(){N.value=!N.value,N.value||(O.clear(),ge(()=>{g(r.value,f.value)})),M(K.value,N.value),t("on-expand-all",N.value)},handleFullscreen:function(l){$.value=!$.value,l!=="esc"&&($.value?function(){const a=o.eleRef.value;a.requestFullscreen&&a.requestFullscreen()}():document.exitFullscreen&&document.exitFullscreen())},zoomOrgchart:x,restoreOrgchart:function(){z.value=1,r.value=0,f.value=0,t("on-restore")},handleExpand:function(l,a){l.stopPropagation();const v=document.querySelector(`.is-root_${Z}`);if(v){const D=v.offsetLeft,_=v.offsetTop;a.expand=!a.expand;let F=!0;a.expand?(O.add(a.id),e.lazy&&e.load&&(F=!1,function(T,W,re){W(T,(fe,Ee)=>{const{children:be}=y;T.isLeaf=!fe.length,fe.length&&(T.$$data[be]=fe,Ee&&re())})}(a,e.load,()=>{ge(()=>{C(v,D,_)})}))):!a.expand&&a.children&&(O.delete(a.id),s(a.children)),ge(()=>{F&&C(v,D,_)}),t("on-expand",l,a.$$data,a)}},getExpandKeys:function(){return[...O]},setExpandKeys:function(l){O=new Set(l),Y(e.data)},nodeMouseenter:function(l,a){return p.value&&(h.value=a),t("on-node-mouseenter",l,a.$$data,a),!0},nodeMouseleave:function(l,a){return p.value&&(h.value=null),t("on-node-mouseleave",l,a.$$data,a),!0},nodeContextmenu:function(l,a){l.stopPropagation(),l.preventDefault();const{defineMenus:v}=e;Array.isArray(v)?E.value=v:typeof v=="function"&&(E.value=v(l,a)||[]),u.value=!0,n.value=l.clientX,i.value=l.clientY,b.value=a},handleFocus:function(l,a,v){t("on-node-focus",l,a,v)},handleBlur:function(l,a,v){const{id:D,label:_}=y,F=b.value.children||[];for(let T=F.length;T>0;T--){const W=F[T-1];if(W[D]===""&&W[_]===""){F.splice(T-1,1);break}}t("on-node-blur",l,a,v)},handleClick:function(l,a){ie.get()||(clearTimeout(k),k=setTimeout(()=>{t("on-node-click",l,a.$$data,a)},e.clickDelay))},handleDblclick:function(l,a){clearTimeout(k),t("on-node-dblclick",l,a.$$data,a)}}};var oe=ye({name:"vue3TreeOrg",components:{Tools:we,CloneOrg:Fe,Draggable:Re,Contextmenu:Be,TreeOrgNode:Le},directives:{nodedrag:Ie},props:Dt,emits:{"on-drag":({x:e,y:t})=>Q(e)&&Q(t),"on-drag-stop":({x:e,y:t})=>Q(e)&&Q(t),"on-restore":()=>!0,"on-zoom":e=>Q(e),"on-expand":(e,t,o)=>e instanceof MouseEvent&&w(o)&&w(t),"on-expand-all":e=>typeof e=="boolean","on-node-blur":(e,t,o)=>e instanceof FocusEvent&&w(o)&&w(t),"on-node-click":(e,t,o)=>e instanceof MouseEvent&&w(o)&&w(t),"on-node-dblclick":(e,t,o)=>e instanceof MouseEvent&&w(o)&&w(t),"on-node-mouseenter":(e,t,o)=>e instanceof MouseEvent&&w(o)&&w(t),"on-node-mouseleave":(e,t,o)=>e instanceof MouseEvent&&w(o)&&w(t),"on-contextmenu":e=>w(e),"on-node-copy":e=>H(e),"on-node-delete":e=>w(e),"on-node-drag-start":e=>w(e),"on-node-drag":e=>w(e),"on-node-drag-end":(e,t)=>w(e)&&w(t),"on-node-focus":(e,t,o)=>e instanceof FocusEvent&&w(o)&&w(t)},setup(e,t){const o=!!t.slots.default,r=!!t.slots.expand,f=S(),m=S(),d=S();return{eleRef:f,treeRef:m,zoomRef:d,defaultSlot:o,expandSlot:r,...Et(e,t,{eleRef:f,treeRef:m,zoomRef:d})}}});const Ct={ref:"eleRef",class:"zm-tree-org"},kt={class:"tree-org-node__text"},Mt=A("span",{class:"tree-org-node__expand-btn"},null,-1),Ot={class:"tree-org-node__text"},wt=A("span",{class:"tree-org-node__expand-btn"},null,-1);oe.render=function(e,t,o,r,f,m){const d=ce("tree-org-node"),g=ce("Draggable"),p=ce("Tools"),h=ce("clone-org"),u=ce("Contextmenu");return L(),q("div",Ct,[A("div",{ref:"zoomRef",class:ae(["zoom-container",{"is-center":e.center&&!e.horizontal}]),style:Te(e.zoomStyle),onWheel:t[0]||(t[0]=(...n)=>e.zoomWheel&&e.zoomWheel(...n))},[Ne(g,{x:e.left,y:e.top,class:ae({dragging:e.autoDragging}),onDragging:e.onDrag,onDragstop:e.onDragStop,draggable:e.draggable,"drag-cancel":e.dragCancel},{default:ee(()=>[A("div",{ref:"treeRef",class:ae(["tree-org",{horizontal:e.horizontal,collapsable:e.collapsable}])},[Ne(d,{data:e.treeData,props:e.keys,lazy:e.lazy,suffix:e.suffix,horizontal:e.horizontal,labelStyle:e.labelStyle,collapsable:e.collapsable,renderContent:e.renderContent,selectedKey:e.selectedKey,defaultExpandLevel:e.defaultExpandLevel,selectedClassName:e.selectedClassName,labelClassName:e.labelClassName,vNodedrag:e.nodeargs,onOnExpand:e.handleExpand,onNodeClick:e.handleClick,onNodeDblclick:e.handleDblclick,onNodeMouseenter:e.nodeMouseenter,onNodeMouseleave:e.nodeMouseleave,onNodeContextmenu:e.nodeContextmenu,onNodeFocus:e.handleFocus,onNodeBlur:e.handleBlur},Oe({_:2},[e.defaultSlot?{name:"default",fn:ee(({node:n})=>[ne(e.$slots,"default",{node:n},()=>[A("div",kt,[A("span",null,$e(n.label),1)])])])}:void 0,e.expandSlot?{name:"expand",fn:ee(({node:n})=>[ne(e.$slots,"expand",{node:n},()=>[Mt])])}:void 0]),1032,["data","props","lazy","suffix","horizontal","labelStyle","collapsable","renderContent","selectedKey","defaultExpandLevel","selectedClassName","labelClassName","vNodedrag","onOnExpand","onNodeClick","onNodeDblclick","onNodeMouseenter","onNodeMouseleave","onNodeContextmenu","onNodeFocus","onNodeBlur"])],2)]),_:3},8,["x","y","class","onDragging","onDragstop","draggable","drag-cancel"])],38),e.tools.visible?(L(),he(p,{key:0,tools:e.tools.data,scale:e.zoomPercent,onOnExpand:e.expandChange,onOnScale:e.zoomOrgchart,onOnRestore:e.restoreOrgchart,onOnFullscreen:e.handleFullscreen},null,8,["tools","scale","onOnExpand","onOnScale","onOnRestore","onOnFullscreen"])):G("v-if",!0),e.nodeDraggable?(L(),he(h,{key:1,modelValue:e.nodeMoving,"onUpdate:modelValue":t[1]||(t[1]=n=>e.nodeMoving=n),props:e.keys,data:e.cloneData,horizontal:e.horizontal,"label-style":e.labelStyle,collapsable:e.collapsable,"render-content":e.renderContent,"label-class-name":e.labelClassName},Oe({_:2},[e.defaultSlot?{name:"default",fn:ee(({node:n})=>[ne(e.$slots,"default",{node:n},()=>[A("div",Ot,[A("span",null,$e(n[e.keys.label]),1)])])])}:void 0,e.expandSlot?{name:"expand",fn:ee(({node:n})=>[ne(e.$slots,"expand",{node:n},()=>[wt])])}:void 0]),1032,["modelValue","props","data","horizontal","label-style","collapsable","render-content","label-class-name"])):G("v-if",!0),e.nodeMenus.length?(L(),he(u,{key:2,modelValue:e.contextmenu,"onUpdate:modelValue":t[2]||(t[2]=n=>e.contextmenu=n),x:e.menuX,y:e.menuY,node:e.menuData,data:e.data,props:e.keys,menus:e.nodeMenus,disabled:e.disabled,"node-add":e.nodeAdd,"node-delete":e.nodeDelete,"node-edit":e.nodeEdit,"node-copy":e.nodeCopy,onContextmenu:t[3]||(t[3]=n=>{e.$emit("on-contextmenu",n)}),onOnNodeCopy:t[4]||(t[4]=n=>{e.$emit("on-node-copy",n)}),onOnNodeDelete:t[5]||(t[5]=n=>{e.$emit("on-node-delete",n)})},null,8,["modelValue","x","y","node","data","props","menus","disabled","node-add","node-delete","node-edit","node-copy"])):G("v-if",!0)],512)},oe.__file="src/components/tree-org/src/tree.vue",oe.install=function(e){e.component(oe.name,oe)};const _t=[oe];var Ft={install:function(e){_t.forEach(t=>{e.component(t.name,t)}),e.use(rt)},Vue3TreeOrg:oe};export{Ft as R};
