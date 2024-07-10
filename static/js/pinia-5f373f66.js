import{i as r}from"./vue-demi-71ba0ef2.js";import{al as l,r as p,am as u}from"./@vue-5b74f5fb.js";/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const f=Symbol();var o;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(o||(o={}));function _(){const t=l(!0),s=t.run(()=>p({}));let c=[],i=[];const a=u({install(e){a._a=e,e.provide(f,a),e.config.globalProperties.$pinia=a,i.forEach(n=>c.push(n)),i=[]},use(e){return!this._a&&!r?i.push(e):c.push(e),this},_p:c,_a:null,_e:t,_s:new Map,state:s});return a}export{_ as c};
