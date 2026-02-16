import{a as m,S as p,i as l}from"./assets/vendor-DQiTczw4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="54613743-5c52f100f8c0e070db7d9ab0d",g="https://pixabay.com/api/";function y(i){return m.get(g,{params:{key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const a=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function b(){c&&c.classList.add("is-active")}function L(){c&&c.classList.remove("is-active")}function v(){a&&(a.innerHTML="")}function q(i){if(!a)return;const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img class="gallery-image" src="${o}" alt="${e}" />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${t}</p>
            <p class="info-item"><b>Views</b> ${s}</p>
            <p class="info-item"><b>Comments</b> ${u}</p>
            <p class="info-item"><b>Downloads</b> ${f}</p>
          </div>
        </li>
      `).join("");a.insertAdjacentHTML("beforeend",r),h.refresh()}const P=document.querySelector(".form");P.addEventListener("submit",i=>{i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){l.warning({message:"Please enter a search query.",position:"topRight"});return}v(),b(),y(r).then(o=>{if(!o.hits||o.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}q(o.hits)}).catch(()=>{l.error({message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
