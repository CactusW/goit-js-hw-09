import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector(".feedback-form"),l=t.elements.email,s=t.querySelector("textarea");t.querySelector("button");const o="feedback-form-state",e={email:"",message:""};t.addEventListener("input",m);function m(a){e.email=l.value.trim(),e.message=s.value.trim(),localStorage.setItem(o,JSON.stringify(e))}function n(){const a=localStorage.getItem(o);if(a){const r=JSON.parse(a);e.email=r.email||"",e.message=r.message||"",l.value=e.email,s.value=e.message}}n();t.addEventListener("submit",a=>{if(a.preventDefault(),!l.value||!s.value)return alert("Fill please all fields");console.log(e),localStorage.removeItem(o),e.email="",e.message="",t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
