(async()=>{
  let b64='';
  for(let i=0;i<5;i++){
    const r=await fetch('./chunk_'+i+'.txt?t='+Date.now());
    if(!r.ok){alert('Erreur chargement module '+i);return}
    b64+=await r.text();
  }
  const code=decodeURIComponent(escape(atob(b64)));
  const s=document.createElement('script');
  s.type='module';
  s.textContent=code;
  document.head.appendChild(s);
})();
