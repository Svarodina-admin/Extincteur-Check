(async()=>{
  try{
    let b64="";
    for(let i=0;i<5;i++){
      const r=await fetch("./js_chunk_"+i+".txt?t="+Date.now());
      if(!r.ok)throw new Error("chunk "+i);
      b64+=await r.text();
    }
    const code=decodeURIComponent(escape(atob(b64)));
    const blob=new Blob([code],{type:"text/javascript"});
    const url=URL.createObjectURL(blob);
    await import(url);
  }catch(e){console.error(e);alert("Erreur chargement app: "+e.message)}
})();
