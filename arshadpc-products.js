(()=>{
const WA='923136246828',EP='03249070454',EPN='Muhammad Huzaifa';
const money=n=>'Rs. '+Number(n).toLocaleString('en-PK');
const payText=x=>'Assalam o Alaikum, main '+x+' ke liye Easypaisa payment karna chahta hoon. Account: '+EPN+' ('+EP+'). Transaction ID: ';
function wa(t){window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(t),'_blank','noopener')}
function upgrade(){
 document.querySelectorAll('.cartadd').forEach(b=>b.remove());
 document.querySelectorAll('[onclick^="addCart"]').forEach(b=>b.remove());
 document.querySelectorAll('#cartCount').forEach(e=>{const p=e.closest('button');if(p)p.remove()});
 document.querySelectorAll('.bottomnav button').forEach(b=>{if(/Cart/i.test(b.textContent))b.remove()});
 document.querySelectorAll('.row').forEach(row=>{
   if(row.querySelector('.acl-easy'))return;
   const order=row.querySelector('.order');
   if(!order)return;
   const text=order.closest('.info')?.querySelector('.name')?.textContent?.trim()||'this product';
   order.textContent='💬 WhatsApp Order';
   order.onclick=()=>wa('Assalam o Alaikum, mujhe '+text+' chahiye.');
   const b=document.createElement('button');b.className='acl-easy';b.textContent='💳 Easypaisa';b.style.cssText='flex:1;border:0;padding:10px;border-radius:8px;font-weight:800;cursor:pointer;background:#087f3e;color:#fff';b.onclick=()=>wa(payText(text));row.appendChild(b);
 });
 document.querySelectorAll('#acl').forEach(e=>e.remove());
 const pay=document.getElementById('acl-direct-payment');
 if(!pay){const s=document.createElement('section');s.id='acl-direct-payment';s.style.cssText='max-width:1280px;width:92%;margin:28px auto;background:linear-gradient(135deg,#f0faf3,#fff);border:2px solid #16a34a;border-radius:16px;padding:22px;box-shadow:0 5px 20px #0001';s.innerHTML='<h2 style="margin:0 0 8px">💳 Pay via Easypaisa</h2><p style="margin:5px 0">Account Name: <b>'+EPN+'</b></p><div style="font-size:26px;font-weight:900;color:#16803c">'+EP+'</div><p style="color:#667085">Payment ke baad transaction ID WhatsApp par bhejein.</p><button id="acl-pay-confirm" style="border:0;border-radius:9px;padding:12px 18px;font-weight:800;background:#16a34a;color:#fff;cursor:pointer">💬 Send Payment Confirmation</button>';const main=document.querySelector('main');if(main)main.appendChild(s);else document.body.appendChild(s);s.querySelector('#acl-pay-confirm').onclick=()=>wa('Assalam o Alaikum, main Easypaisa payment kar chuka hoon. Account: '+EPN+' ('+EP+'). Transaction ID: ')}
}
function start(){upgrade();setTimeout(upgrade,500);setTimeout(upgrade,1500);setTimeout(upgrade,3000)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();new MutationObserver(upgrade).observe(document.body,{subtree:true,childList:true});
})();