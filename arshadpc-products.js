(() => {
  const products = [
    ['AULA SC300 Mechanical Gaming Mouse Rechargeable',2999,3999,'🖱️','Mouse','https://arshadpc.com/collections/featured-collection-1/products/aula-sc300'],
    ['GamePro GM500W RGB USB White Gaming Mouse',2999,3999,'🖱️','Mouse','https://arshadpc.com/'],
    ['Transparent Wireless Mouse Rechargeable',999,1299,'🖱️','Mouse','https://arshadpc.com/'],
    ['HP Bluetooth & Wireless Dual Model Mouse (W10) RGB Rechargeable',599,999,'🖱️','Mouse','https://arshadpc.com/'],
    ['Shortcut Keys Mouse Pad',799,999,'🖱️','Mouse Pad','https://arshadpc.com/'],
    ['MOTOSPEED CK103 RGB LED Backlit Wired Mechanical Gaming Keyboard, 103 Keys',5299,6500,'⌨️','Keyboard','https://arshadpc.com/'],
    ['Mini Foldable Touch 3.0 Bluetooth Keyboard For Samsung Dex Win / IOS / Android System',4999,5999,'⌨️','Keyboard','https://arshadpc.com/'],
    ['Gaming KeyBoard RGB',1999,2999,'⌨️','Keyboard','https://arshadpc.com/'],
    ['IHOYI Wired Game Mouse, 7-Button',1199,1999,'🖱️','Mouse','https://arshadpc.com/'],
    ['Disheng Gaming Set 3in1',4999,6999,'🎮','Gaming','https://arshadpc.com/'],
    ['Rii PC Controller, PS3 Gaming Controllers Wired USB Gamepad',1499,1999,'🎮','Gaming','https://arshadpc.com/'],
    ['S CM-039 2.4Ghz USB Wireless Gaming Joystick Game Controller',2499,3999,'🎮','Gaming','https://arshadpc.com/'],
    ['Retro Wireless Bluetooth Speaker E3404 Big Speaker',3999,4999,'🔊','Speaker','https://arshadpc.com/'],
    ['RGB Party Speaker Double Speaker',2999,4999,'🔊','Speaker','https://arshadpc.com/'],
    ['Mini X1 Wireless Bluetooth Speaker',699,999,'🔊','Speaker','https://arshadpc.com/'],
    ['USB 3.0 SATA External Casing',1499,1999,'💾','Storage','https://arshadpc.com/'],
    ['5G Dual Band 1300Mbps Wireless USB Adapter',2199,3999,'📡','Networking','https://arshadpc.com/'],
    ['8-in-1 USB-C Hub Adapter - 4K HDMI, RJ45, SD/TF, Fast Charging',2199,2999,'🔌','Hub','https://arshadpc.com/'],
    ['Type C USB Hub - 4 Ports',449,999,'🔌','Hub','https://arshadpc.com/'],
    ['N99 Laptop Cooling Pad Dual Fans Silent Cooler Stand 14-17',2499,3999,'❄️','Laptop Accessory','https://arshadpc.com/'],
    ['18 Inch Laptop Stand Creative Folding Storage Bracket',999,1999,'💻','Laptop Accessory','https://arshadpc.com/'],
    ['HDMI Cable 10 Meter Full HD High Speed for CCTV Camera, LED',1250,1999,'🔗','Cable','https://arshadpc.com/']
  ];

  function money(n){ return 'Rs.' + Number(n).toLocaleString('en-PK'); }
  function render(){
    if(document.getElementById('arshadpc-catalog')) return;
    const section=document.createElement('section');
    section.id='arshadpc-catalog';
    section.style.cssText='margin:36px auto;padding:0;max-width:1250px;width:92%;';
    section.innerHTML=`<div style="background:linear-gradient(120deg,#081a30,#123b69);color:#fff;border-radius:14px;padding:22px;margin-bottom:16px"><h2 style="margin:0 0 6px">ArshadPc Products</h2><p style="margin:0;opacity:.9">Latest accessories, gaming gear and computer products from ArshadPc.</p></div><div id="arshadpc-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px"></div>`;
    const grid=section.querySelector('#arshadpc-grid');
    products.forEach(([name,price,old,icon,cat,url])=>{
      const discount=Math.round((1-price/old)*100);
      const card=document.createElement('article');
      card.style.cssText='background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 9px #00000012;border:1px solid #e7ebf0';
      card.innerHTML=`<div style="height:170px;background:#eef2f7;display:flex;align-items:center;justify-content:center;font-size:64px">${icon}</div><div style="padding:13px"><div style="font-size:11px;color:#2563eb;font-weight:800;text-transform:uppercase">${cat}</div><div style="font-weight:800;line-height:1.35;margin:5px 0;min-height:42px">${name}</div><div style="font-size:13px;color:#8b9299;text-decoration:line-through">${money(old)} <span style="text-decoration:none;background:#e8f7ec;color:#187a36;padding:3px 6px;border-radius:4px">-${discount}%</span></div><div style="font-size:20px;font-weight:800;color:#0b1f3a;margin:4px 0 10px">${money(price)}</div><a href="${url}" target="_blank" rel="noopener" style="display:block;text-align:center;background:#2563eb;color:#fff;padding:10px;border-radius:6px;font-weight:800">View Product</a></div>`;
      grid.appendChild(card);
    });
    const main=document.querySelector('main');
    if(main) main.appendChild(section); else document.body.appendChild(section);
    const style=document.createElement('style');
    style.textContent='@media(max-width:1000px){#arshadpc-grid{grid-template-columns:repeat(3,1fr)!important}}@media(max-width:650px){#arshadpc-grid{grid-template-columns:repeat(2,1fr)!important;gap:10px!important}#arshadpc-grid article>div:first-child{height:140px!important}}';
    document.head.appendChild(style);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',render); else render();
})();
