import { allProducts } from './product-catalog.js';
import { matchesSearch } from './ui-types.js';
import { onReady } from './dom-utils.js';
import { buildWhatsAppUrl } from './whatsapp.js';
export const state = {
    searchQuery: '', currentPage: 1, selectedCategory: 'all', brand: 'All'
};
const PHONE = '923136246828';
const PAGE_SIZE = 12;
const escapeHtml = (value) => value.replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
const filteredProducts = () => { const q = state.searchQuery.trim(); return allProducts.filter(p => { const brandOk = state.brand === 'All' || p.brand.toLowerCase() === state.brand.toLowerCase() || p.processor.toLowerCase() === state.brand.toLowerCase(); const text = `${p.brand} ${p.model} ${p.processor} ${p.gen} ${p.memory} ${p.storage}`; return brandOk && (!q || matchesSearch(text, q)); }); };
const render = () => { const grid = document.getElementById('laptopGrid'); if (!grid)
    return; const products = filteredProducts(); const totalPages = Math.max(1, Math.ceil(products.length / PAGE_SIZE)); state.currentPage = Math.min(state.currentPage, totalPages); const start = (state.currentPage - 1) * PAGE_SIZE; const visible = products.slice(start, start + PAGE_SIZE); grid.innerHTML = visible.map(p => { const message = `Assalam-o-Alaikum, mujhe ${p.model} ke bare mein maloomat chahiye. Specs: ${p.processor}, ${p.gen} Gen, ${p.memory}, ${p.storage}.`; const wa = buildWhatsAppUrl(PHONE, message); return `<article class="card"><div class="pic"><div style="font-size:58px">💻</div></div><div class="info"><div class="name">${escapeHtml(p.model)}</div><div class="spec">${escapeHtml(p.brand)} • ${escapeHtml(p.processor)} • ${escapeHtml(p.gen)} Gen • ${escapeHtml(p.memory)} • ${escapeHtml(p.storage)}</div><div class="stock">Available Qty: ${p.qty}</div><div class="buttons"><a class="buttons button wa" href="${wa}" target="_blank" rel="noopener">WhatsApp Order</a></div></div></article>`; }).join(''); const oldPager = document.getElementById('ts-product-pager'); oldPager?.remove(); const pager = document.createElement('div'); pager.id = 'ts-product-pager'; pager.style.cssText = 'width:92%;max-width:1280px;margin:18px auto;display:flex;gap:8px;justify-content:center;align-items:center;flex-wrap:wrap'; pager.innerHTML = `<button class="chip" ${state.currentPage <= 1 ? 'disabled' : ''} id="ts-prev">Previous</button><span style="color:#aaa">Page ${state.currentPage} / ${totalPages} • ${products.length} models</span><button class="chip" ${state.currentPage >= totalPages ? 'disabled' : ''} id="ts-next">Next</button>`; grid.parentElement?.appendChild(pager); document.getElementById('ts-prev')?.addEventListener('click', () => { if (state.currentPage > 1) {
    state.currentPage--;
    render();
} }); document.getElementById('ts-next')?.addEventListener('click', () => { if (state.currentPage < totalPages) {
    state.currentPage++;
    render();
} }); };
export const renderLaptops = () => { const input = document.getElementById('search'); state.searchQuery = input?.value ?? ''; state.currentPage = 1; render(); };
export const setBrand = (brand, button) => { state.brand = brand; state.currentPage = 1; document.querySelectorAll('.chip').forEach(el => el.classList.remove('active')); button?.classList.add('active'); render(); };
onReady(() => { const input = document.getElementById('search'); input?.addEventListener('input', () => { state.searchQuery = input.value; state.currentPage = 1; render(); }); window.renderLaptops = renderLaptops; window.setBrand = setBrand; render(); });
