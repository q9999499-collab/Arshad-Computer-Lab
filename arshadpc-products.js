(()=>{
const WA='923136246828',EP='03249070454',EPN='Muhammad Huzaifa';
const ROOT='https://arshadpc.com';
const handles={
'AULA SC300 Mechanical Gaming Mouse Rechargeable':'aula-sc300','GamePro GM500W RGB USB White Gaming Mouse':'gamepro-gm500w-rgb-usb-white-gaming-mouse','Transparent Wireless Mouse Rechargeable':'transparent-wireless-mouse-rechargeable','HP Bluetooth & Wireless Dual Model Mouse W10 RGB':'hp-bluetooth-wireless-dual-model-mouse-w10-rgb-rechargeable','Shortcut Keys Mouse Pad':'shortcut-keys-mouse-pad','MOTOSPEED CK103 RGB Mechanical Gaming Keyboard':'motospeed-ck103-rgb-led-backlit-wired-mechanical-gaming-keyboard','Mini Foldable Touch Bluetooth Keyboard':'mini-foldable-touch-bluetooth-keyboard','Gaming Keyboard RGB':'gaming-keyboard-rgb','IHOYI Wired Game Mouse':'ihoyi-wired-game-mouse-7-button','Disheng Gaming Set 3in1':'disheng-gaming-set-3in1','Rii PC Controller PS3 Wired USB Gamepad':'rii-pc-controller-ps3-gaming-controllers-wired-usb-gamepad','S CM-039 2.4Ghz Wireless Gaming Joystick':'s-cm-039-2-4ghz-usb-wireless-gaming-joystick-game-controller','Retro Wireless Bluetooth Speaker E3404':'retro-wireless-bluetooth-speaker-e3404','RGB Party Speaker Double Speaker':'rgb-party-speaker-double-speaker','Mini X1 Wireless Bluetooth Speaker':'mini-x1-wireless-bluetooth-speaker','USB 3.0 SATA External Casing':'usb-3-0-sata-external-casing','5G Dual Band 1300Mbps Wireless USB Adapter':'5g-dual-band-1300mbps-wireless-usb-adapter','8-in-1 USB-C Hub Adapter 4K HDMI RJ45 SD/TF':'8-in-1-usb-c-hub-adapter','Type C USB Hub - 4 Ports':'type-c-usb-hub-4-ports','N99 Laptop Cooling Pad Dual Fans 14-17':'n99-laptop-cooling-pad-dual-fans-14-17','18 Inch Laptop Stand Folding Storage Bracket':'18-inch-laptop-stand-creative-folding-storage-bracket','HDMI Cable 10 Meter Full HD High Speed':'hdmi-cable-10-meter-full-hd-high-speed'
};
function wa(t){window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(t),'_blank','noopener')}
function cleanUI(){
 document.querySelectorAll('.cartadd,[onclick^="addCart"],#cartCount').forEach(e=>{const p=e.closest('button');(p||e).remove()});
 document.querySelectorAll('.bottomnav button').forEach(b=>{if(/cart|saved|sort/i.test(b.textContent))b.remove()});
 document.querySelectorAll('.actions .iconbtn').forEach(b=>{if(/saved|wishlist|cart|sort/i.test(b.textContent))b.remove()});
 document.querySelectorAll('button,a,span,div,h1,h2,h3,h4').forEach(el=>{if(el.children.length===0&&el.textContent.trim()==='ArshadPc')el.textContent='Arshad Computer Lab'});
 document.querySelectorAll('button,a').forEach(el=>{if(/^(saved|sort)$/i.test(el.textContent.trim()))el.remove()});
}
async function loadRealImage(row){
 const info=row.querySelector('.info'),img=row.querySelector('img');if(!info||!img||img.dataset.realLoaded)return;
 const name=info.querySelector('.name')?.textContent?.trim();if(!name)return;
 const handle=handles[name];if(!handle)return;
 try{const r=await fetch(ROOT+'/products/'+handle+'.js',{mode:'cors'});if(!r.ok)return;const p=await r.json();const src=p?.featured_image||p?.images?.[0];if(src){img.src=src.startsWith('//')?'https:'+src:src;img.dataset.realLoaded='1';img.alt=name;}}catch(e){/* keep existing image */}
}
function upgrade(){
 cleanUI();
 document.querySelectorAll('.row').forEach(row=>{
   const order=row.querySelector('.order'),info=row.querySelector('.info');if(!order||!info)return;
   const text=info.querySelector('.name')?.textContent?.trim()||'this product';
   order.textContent='💬 WhatsApp Order';order.onclick=()=>wa('Assalam o Alaikum, mujhe '+text+' chahiye.');
   let b=row.querySelector('.acl-easy');if(!b){b=document.createElement('button');b.className='acl-easy';row.appendChild(b)}
   b.textContent='💳 Easypaisa';b.style.cssText='flex:1;border:0;padding:10px;border-radius:8px;font-weight:800;cursor:pointer;background:#087f3e;color:#fff';
   b.onclick=()=>wa('Assalam o Alaikum, main '+text+' ke liye Easypaisa payment karna chahta hoon. Account Name: '+EPN+'. Number: '+EP+'. Transaction ID: ');
   loadRealImage(row);
 });
 let pay=document.getElementById('acl-direct-payment');if(!pay){pay=document.createElement('section');pay.id='acl-direct-payment';pay.style.cssText='max-width:1280px;width:92%;margin:28px auto;background:linear-gradient(135deg,#f0faf3,#fff);border:2px solid #16a34a;border-radius:16px;padding:22px;box-shadow:0 5px 20px #0001';pay.innerHTML='<h2>💳 Pay via Easypaisa</h2><p>Account Name: <b>'+EPN+'</b></p><div style="font-size:26px;font-weight:900;color:#16803c">'+EP+'</div><p>Payment ke baad transaction ID WhatsApp par bhejein.</p><button id="acl-pay-confirm" style="border:0;border-radius:9px;padding:12px 18px;font-weight:800;background:#16a34a;color:#fff;cursor:pointer">💬 Send Payment Confirmation</button>';document.querySelector('main')?.appendChild(pay);pay.querySelector('#acl-pay-confirm').onclick=()=>wa('Assalam o Alaikum, main Easypaisa payment kar chuka hoon. Account Name: '+EPN+'. Number: '+EP+'. Transaction ID: ')}
}
function start(){upgrade();[700,1600,3000,5000].forEach(t=>setTimeout(upgrade,t))}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();new MutationObserver(upgrade).observe(document.body,{subtree:true,childList:true});
})();