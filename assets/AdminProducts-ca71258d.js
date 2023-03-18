import{A as U,G as I,h as n,n as F,j as p,m as M,r as k,o as r,c as u,b as e,y,z as N,e as c,k as w,H as $,F as P,B as S,a as h,w as x,I as v,C as o}from"./index-dd60df5d.js";const j={class:"admin-main__products"},q={class:"admin-main__search"},z=["placeholder"],E=e("i",{class:"fal fa-times-square"},null,-1),G=[E],H={class:"admin-main__products-header"},O=e("option",{selected:"",value:""},"Все Категории",-1),R=["value"],T=e("i",{class:"fal fa-plus"},null,-1),J={class:"table table-hover mt-5 admin-main__products-main"},K=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"Название"),e("th",{scope:"col"},"ID"),e("th",{scope:"col"},"Категория"),e("th",{scope:"col"},"Цена"),e("th",{scope:"col"},"Количество (кг)"),e("th",{scope:"col"},"Дата Создание"),e("th",{scope:"col"},"Дата Изменении")])],-1),Q={class:"table-tr"},W={scope:"row",class:"table-name"},X=["src"],Y={scope:"col"},Z=e("i",{class:"fal fa-pencil"},null,-1),ee=["onClick"],te=e("i",{class:"fal fa-trash-alt"},null,-1),se=[te],ae={class:"admin-pagination"},ce={__name:"AdminProducts",setup(le){const D=U(),s=I(),V=D.categories;let _=n(s.products);const A=n("Поиск..."),i=n("");let g=n(s.total),d=n(1),f=n(0);const m=F({get:()=>s.search,set:a=>{a?s.search=a:s.search=null,s.searchProducts()}}),C=a=>{d.value=a,f.value=v*a-v,s.getProducts(f.value,i.value)},B=a=>{s.deleteProduct(a)};return p(()=>s.products,()=>{_.value=s.products},{deep:!0}),p(()=>s.total,()=>{g.value=s.total},{deep:!0}),p(()=>s.searchArray,()=>{s.searchArray.length?_.value=s.searchArray:_.value=s.products},{deep:!0}),p(()=>i.value,()=>{s.getProducts(0,i.value)},{deep:!0}),M(()=>{s.search=""}),(a,l)=>{const b=k("router-link"),L=k("vue-awesome-paginate");return r(),u("div",j,[e("div",q,[y(e("input",{type:"text",placeholder:A.value,"onUpdate:modelValue":l[0]||(l[0]=t=>w(m)?m.value=t:null)},null,8,z),[[N,c(m)]]),e("button",{onClick:l[1]||(l[1]=t=>m.value="")},G)]),e("div",H,[y(e("select",{"onUpdate:modelValue":l[2]||(l[2]=t=>i.value=t),class:"form-select","aria-label":"Default select example"},[O,(r(!0),u(P,null,S(c(V),t=>(r(),u("option",{key:t.id,value:t.id},o(t.name),9,R))),128))],512),[[$,i.value]]),h(b,{to:"/admin-panel/products/add",class:"admin-main__products-header-button",click:"add"},{default:x(()=>[T]),_:1})]),e("table",J,[K,(r(!0),u(P,null,S(c(_),t=>(r(),u("tbody",{key:t.id},[e("tr",Q,[e("th",W,[e("img",{src:t.image_url,alt:"",class:"table-img"},null,8,X),e("span",null,o(t.name),1)]),e("td",null,o(t.id),1),e("td",Y,o(t.category_name),1),e("td",null,o(t.price?t.price.toLocaleString():0)+" сум ",1),e("td",null,o(t.amount?t.amount.toLocaleString():0)+" кг ",1),e("td",null,o(new Date(t.created_at).toLocaleDateString()),1),e("td",null,o(new Date(t.updated_at).toLocaleDateString()),1),e("td",null,[h(b,{to:`/admin-panel/products/edit/${t.id}`,class:"btn btn-primary"},{default:x(()=>[Z]),_:2},1032,["to"])]),e("td",null,[e("button",{class:"btn btn-danger",onClick:oe=>B(t.id)},se,8,ee)])])]))),128))]),e("div",ae,[h(L,{"total-items":c(g),"items-per-page":c(v),"max-pages-shown":2,modelValue:c(d),"onUpdate:modelValue":l[3]||(l[3]=t=>w(d)?d.value=t:d=t),"on-click":C},null,8,["total-items","items-per-page","modelValue"])])])}}};export{ce as default};
