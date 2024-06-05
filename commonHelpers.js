import{S as f,i as m}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function h(s){const o="https://pixabay.com/api/",n=new URLSearchParams({key:"44240844-fac6cf8e273222cb69c263295",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),r=`${o}?${n}`;return fetch(r).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})}let c;function d(s,o){const n=s.map(r=>`
      <li>
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}">
        </a>
        
        <ul class="info">
          <li>Likes: ${r.likes}</li>
          <li>Views: ${r.views}</li>
          <li>Comments: ${r.comments}</li>
          <li>Downloads: ${r.downloads}</li>
        </ul>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",n),c?c.refresh():c=new f(".gallery a",{})}function l(s){m.error({message:s})}const a=document.querySelector(".form"),p=document.querySelector(".search-input"),u=document.querySelector(".gallery");a.addEventListener("submit",s=>{s.preventDefault();const o=p.value.trim();if(o===""){l("Please enter a search query!");return}u.innerHTML="",h(o).then(n=>{if(n.hits.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}d(n.hits,u)}).catch(n=>{l("Something went wrong. Please try again later."),console.error(n)}),a.reset()});
//# sourceMappingURL=commonHelpers.js.map
