(function(){
 const menu=document.querySelector('[data-menu-toggle]');
 const nav=document.querySelector('[data-mobile-nav]');
 if(menu&&nav){
   const close=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu +'};
   menu.addEventListener('click',()=>{const opening=!nav.classList.contains('open');nav.classList.toggle('open',opening);menu.setAttribute('aria-expanded',String(opening));menu.textContent=opening?'Close ×':'Menu +'});
   nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
   document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 }
 const filters=[...document.querySelectorAll('[data-filter]')];
 const entries=[...document.querySelectorAll('[data-category]')];
 filters.forEach(f=>f.addEventListener('click',()=>{
  const category=f.dataset.filter;
  filters.forEach(x=>{const active=x===f;x.classList.toggle('active',active);x.setAttribute('aria-pressed',String(active))});
  entries.forEach(x=>{x.hidden=category!=='all'&&!x.dataset.category.split(' ').includes(category)});
 }));
})();
