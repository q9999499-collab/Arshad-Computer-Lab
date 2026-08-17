(()=>{
const WA='923136246828',EP='03249070454',EPN='Muhammad Huzaifa',SRC='https://arshadpc.com/wp-json/wc/store/v1/products?per_page=100';
const norm=s=>String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
function wa(t){window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(t),'_blank','noopener')}
function upgrade(){
 document.querySelectorAll('.cartadd,[onclick^="addCart"]').forEach(b=>b.remove());
 document.querySelectorAll('#cartCount').forEach(e=>{const p=e.closest('button');if(p)p.remove()});
 document.querySelectorAll('.bottomnav button').forEach(b=>{if(/Cart/i.test(b.textContent))b.remove()});
 document.querySelectorAll('.row').forEach(row=>{
   const order=row.querySelector('.order'),info=row.querySelector('.info'); if(!order||!info)return;
   const text=info.querySelector('.name')?.textContent?.trim()||'this product';
   order.textContent='💬 WhatsApp Order';order.onclick=()=>wa('Assalam o Alaikum, mujhe '+text+' chahiye.');
   let b=row.querySelector('.acl-easy');if(!b){b=document.createElement('button');b.className='acl-easy';row.appendChild(b)}
   b.textContent='💳 Easypaisa';b.style.cssText='flex:1;border:0;padding:10px;border-radius:8px;font-weight:800;cursor:pointer;background:#087f3e;color:#fff';
   b.onclick=()=>wa('Assalam o Alaikum, main '+text+' ke liye Easypaisa payment karna chahta hoon. Account Name: '+EPN+'. Number: '+EP+'. Transaction ID: ');
 });
 let pay=document.getElementById('acl-direct-payment');
 if(!pay){pay=document.createElement('section');pay.id='acl-direct-payment';pay.style.cssText='max-width:1280px;width:92%;margin:28px auto;background:linear-gradient(135deg,#f0faf3,#fff);border:2px solid #16a34a;border-radius:16px;padding:22px;box-shadow:0 5px 20px #0001';pay.innerHTML='<h2 style="margin:0 0 8px">💳 Pay via Easypaisa</h2><p>Account Name: <b>'+EPN+'</b></p><div style="font-size:26px;font-weight:900;color:#16803c">'+EP+'</div><p>Payment ke baad transaction ID WhatsApp par bhejein.</p><button id="acl-pay-confirm" style="border:0;border-radius:9px;padding:12px 18px;font-weight:800;background:#16a34a;color:#fff;cursor:pointer">💬 Send Payment Confirmation</button>';document.querySelector('main')?.appendChild(pay);pay.querySelector('#acl-pay-confirm').onclick=()=>wa('Assalam o Alaikum, main Easypaisa payment kar chuka hoon. Account Name: '+EPN+'. Number: '+EP+'. Transaction ID: ')}
}
function bestMatch(name,products){const n=norm(name);let best=null,score=0;for(const p of products){const pn=norm(p.name);if(pn===n)return p;const a=new Set(n.split(' ')),b=new Set(pn.split(' '));let hit=0;a.forEach(x=>{if(x.length>2&&b.has(x))hit++});const s=hit/Math.max(1,Math.min(a.size,b.size));if(s>score){score=s;best=p}}return score>=.45?best:null}
function applyImages(products){
 document.querySelectorAll('.row').forEach(row=>{const name=row.querySelector('.name')?.textContent;if(!name)return;const p=bestMatch(name,products);const src=p?.images?.[0]?.src;if(!src)return;const img=row.querySelector('.pic img');if(img){img.src=src;img.alt=p.name;img.loading='lazy';img.onerror=()=>{img.removeAttribute('src')}}});
 const old=document.getElementById('arshadpc-real-catalog');if(old)return;
 const section=document.createElement('section');section.id='arshadpc-real-catalog';section.style.cssText='max-width:1280px;width:92%;margin:35px auto';
 section.innerHTML='<div style="background:linear-gradient(120deg,#071a33,#1257a6);color:#fff;border-radius:16px;padding:22px;margin-bottom:16px"><h2 style="margin:0 0 5px">ArshadPc Products</h2><p style="margin:0;opacity:.9">Real product images loaded from the ArshadPc catalog.</p></div><div id="arshadpc-real-grid" style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px"></div>';
 const grid=section.querySelector('#arshadpc-real-grid');products.forEach(p=>{const img=p.images?.[0]?.src;if(!img)return;const card=document.createElement('article');card.style.cssText='background:#fff;border:1px solid #e5e9f1;border-radius:14px;overflow:hidden;box-shadow:0 5px 16px #14213d0d';const price=p.prices?.price?Number(p.prices.price)/100:null;const regular=p.prices?.regular_price?Number(p.prices.regular_price)/100:null;card.innerHTML='<div style="height:210px;background:#f4f6f9;padding:12px;display:flex;align-items:center;justify-content:center"><img src="'+img.replace(/"/g,'&quot;')+'" alt="" loading="lazy" style="width:100%;height:100%;object-fit:contain"></div><div style="padding:14px"><div style="font-weight:900;min-height:42px">'+p.name+'</div><div style="font-size:12px;color:#8b95a5;text-decoration:line-through">'+(regular?'Rs. '+regular.toLocaleString('en-PK'):'')+'</div><div style="font-size:21px;font-weight:900;color:#09254a;margin:4px 0 10px">'+(price?'Rs. '+price.toLocaleString('en-PK'):'Contact for price')+'</div><div style="display:flex;gap:8px"><button class="acl-wa" style="flex:1;border:0;padding:10px;border-radius:8px;font-weight:800;background:#16a34a;color:#fff;cursor:pointer">💬 WhatsApp Order</button><button class="acl-ep" style="flex:1;border:0;padding:10px;border-radius:8px;font-weight:800;background:#087f3e;color:#fff;cursor:pointer">💳 Easypaisa</button></div></div>';
 card.querySelector('.acl-wa').onclick=()=>wa('Assalam o Alaikum, mujhe '+p.name+' chahiye. Price: '+(price?'Rs. '+price:'Contact for price'));
 card.querySelector('.acl-ep').onclick=()=>wa('Assalam o Alaikum, main '+p.name+' ke liye Easypaisa payment karna chahta hoon. Account Name: '+EPN+'. Number: '+EP+'. Transaction ID: ');
 grid.appendChild(card)});
 const main=document.querySelector('main');if(main)main.appendChild(section);
}
async function loadRealImages(){try{const r=await fetch(SRC,{headers:{Accept:'application/json'}});if(!r.ok)throw new Error('catalog '+r.status);const products=await r.json();if(Array.isArray(products)&&products.length){applyImages(products)}}catch(e){console.warn('ArshadPc images could not be loaded:',e)}}
function start(){upgrade();[500,1500,3000,5000].forEach(t=>setTimeout(upgrade,t));loadRealImages()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();new MutationObserver(()=>upgrade()).observe(document.body,{subtree:true,childList:true});
})();