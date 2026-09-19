document.querySelectorAll('.experience-item,.project-card,.video-card,.publication-list a').forEach((el,i)=>{
  el.style.opacity='0';
  el.style.transform='translateY(18px)';
  el.style.transition=`opacity .6s ease ${Math.min(i*40,300)}ms, transform .6s ease ${Math.min(i*40,300)}ms`;
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity='1';
      entry.target.style.transform='none';
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
document.querySelectorAll('.experience-item,.project-card,.video-card,.publication-list a').forEach(el=>observer.observe(el));
