(()=>{
if(window.__ACL_CATALOG_BOOTED)return;window.__ACL_CATALOG_BOOTED=true;
function load(){
  const hero=document.querySelector('.hero');
  if(hero){
    hero.innerHTML='';
    hero.style.backgroundImage="url('./website-banner.jpg')";
    hero.style.backgroundSize='cover';
    hero.style.backgroundPosition='center';
    hero.style.backgroundRepeat='no-repeat';
    hero.style.minHeight='420px';
    hero.style.padding='0';
    hero.style.cursor='pointer';
    hero.setAttribute('aria-label','Arshad Computer Lab premium laptop banner');
    hero.onclick=()=>document.getElementById('shop')?.scrollIntoView({behavior:'smooth'});
  }
  if(window.__ACL_STOCK_LOADER)return;window.__ACL_STOCK_LOADER=true;const s=document.createElement('script');s.src='./creative-stock.js';s.onload=()=>window.__aclStock&&window.renderLaptops&&window.renderLaptops();document.body.appendChild(s)
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',load);else load();
})();