const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
const backTop=document.getElementById('backTop');
const progress=document.getElementById('scrollProgress');
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
const current=location.pathname.split('/').pop()||'index.html';
const pageKey=current==='index.html'?'home':current.replace('.html','');
document.querySelectorAll('.nav-links a[data-page]').forEach(a=>{if(a.dataset.page===pageKey)a.classList.add('active')});
function scrollUI(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%';backTop.classList.toggle('visible',scrollY>400)}
addEventListener('scroll',scrollUI,{passive:true});scrollUI();
backTop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
document.getElementById('year').textContent=new Date().getFullYear();
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}
