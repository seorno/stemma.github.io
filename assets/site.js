const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.navlinks');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    toggle.textContent = '☰';
  }));
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sceneWrap = document.querySelector('.scene-wrap');
const scene = document.querySelector('.scene');
if (sceneWrap && scene && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  sceneWrap.addEventListener('mousemove', e => {
    const r = sceneWrap.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width-.5;
    const y = (e.clientY-r.top)/r.height-.5;
    scene.style.transform = `rotate(${1.5 + x*1.4}deg) translate(${x*6}px, ${y*5}px)`;
  });
  sceneWrap.addEventListener('mouseleave', () => scene.style.transform='rotate(1.5deg)');
}

document.querySelectorAll('.feature-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.feature-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel-inner').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.panel);
    if (target) target.classList.add('active');
  });
});

document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.post-card').forEach(card => {
      card.classList.toggle('hidden', f !== 'all' && card.dataset.type !== f);
    });
  });
});
