import{S as m,i as h}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function y(r){const n="https://pixabay.com/api/",s=new URLSearchParams({key:"44240844-fac6cf8e273222cb69c263295",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${n}?${s}`;return fetch(t).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})}let c;function p(r,n){const s=r.map(t=>`
      <li>
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}">
        </a>
        
        <ul class="info">
          <li>Likes: ${t.likes}</li>
          <li>Views: ${t.views}</li>
          <li>Comments: ${t.comments}</li>
          <li>Downloads: ${t.downloads}</li>
        </ul>
      </li>
    `).join("");n.insertAdjacentHTML("beforeend",s),c?c.refresh():c=new m(".gallery a",{})}function l(r){h.error({message:r})}function g(r){r.style.display="block"}function u(r){r.style.display="none"}const f=document.querySelector(".form"),w=document.querySelector(".search-input"),d=document.querySelector(".gallery"),a=document.querySelector(".loader");f.addEventListener("submit",r=>{r.preventDefault();const n=w.value.trim();if(n===""){l("Please enter a search query!");return}d.innerHTML="",g(a),y(n).then(s=>{if(u(a),s.hits.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}p(s.hits,d)}).catch(s=>{u(a),l("Something went wrong. Please try again later."),console.error(s)}),f.reset()});
//# sourceMappingURL=commonHelpers.js.map
