/* =============================================================================
   MOTOR COMPARTILHADO · não precisa ser editado.
   Usado pelo index.html (capa), marca.html (Guia) e conteudo.html (Conteúdo).
   Todo o conteúdo vive em dados.js.
   ============================================================================= */

var $=function(s,e){return (e||document).querySelector(s)};
var $$=function(s,e){return Array.prototype.slice.call((e||document).querySelectorAll(s))};
var esc=function(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")};
var br=function(s){return esc(s).replace(/\n/g,"<br>")};
var enf=function(s){return br(s).replace(/\*([^*]+)\*/g,'<em class="oc">$1</em>')};
var at=function(s){return esc(s).replace(/"/g,"&quot;")};

var guarda={
  ler:function(k,p){try{var v=localStorage.getItem(k);return v?JSON.parse(v):p}catch(e){return p}},
  salvar:function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};

function copiar(t){
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).catch(fb);}else fb();
  function fb(){var ta=document.createElement("textarea");ta.value=t;document.body.appendChild(ta);
    ta.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(ta);}
}
function feedback(b,txt){var o=b.textContent;b.textContent=txt;b.classList.add("feito");
  setTimeout(function(){b.textContent=o;b.classList.remove("feito")},1700);}

function avisar(m){var d=document.createElement("div");
  d.setAttribute("style","position:fixed;left:0;right:0;top:0;z-index:999;background:#6B4433;color:#F5F0E6;font:600 15px/1.5 Archivo,sans-serif;padding:16px 20px");
  d.textContent=m;document.body.appendChild(d);}

/* carrega o dados.js sempre fresco e devolve o controle para a página */
function comDados(cb){
  var e=document.createElement("script");
  e.src="dados.js?t="+Date.now();
  e.onload=function(){ try{ cb(); }catch(err){ avisar("O dados.js carregou mas tem um erro de digitação: "+err.message); } };
  e.onerror=function(){ avisar("Não encontrei o arquivo dados.js. Ele precisa estar na mesma pasta."); };
  document.head.appendChild(e);
}

/* ---------- montagem das folhas ---------- */
var H=[];
function folha(cls,inner,id){H.push('<section class="folha '+cls+'"'+(id?' id="'+id+'"':'')+'><div class="conteudo">'+inner+'</div></section>')}
function divisor(g){H.push('<section class="folha divisor" id="'+g.id+'"><div class="conteudo"><div class="num">'+g.n+'</div><h2>'+esc(g.l)+'</h2></div></section>')}
function mig(grupo,pagina){return '<div class="migalha">'+esc(CASA)+' / <b>'+esc(grupo)+'</b>'+(pagina?' / '+esc(pagina):'')+'</div>'}
function usar(t){return t? '<div class="usar"><span class="rot">use quando</span><span class="tx">'+br(t)+'</span></div>' : ''}
var EDN={linha:"ed-linha",linhag:"ed-linha g",ponte:"ed-ponte",destaque:"ed-destaque",destaquem:"ed-destaque m",forte:"ed-forte",fortew:"ed-forte w",seqm:"ed-seq m",destaqueg:"ed-destaque g",recuo:"ed-recuo",assin:"ed-assinatura",seq:"ed-seq"};
function ed(itens){return '<div class="editorial">'+itens.map(function(i){
  if(i.n==="pausa") return '<div class="ed-pausa'+(i.g?" g":"")+'"></div>';
  return '<p class="'+(EDN[i.n]||"ed-linha")+'">'+br(i.t)+'</p>';
}).join("")+'</div>'}
function mais(rotulo,corpo){var arr=Object.prototype.toString.call(corpo)==="[object Array]";
  return '<details class="mais"><summary>'+esc(rotulo)+'</summary><div class="corpo'+(arr?" corpo-ed":"")+'">'+(arr?ed(corpo):br(corpo))+'</div></details>'}
function montar(){ $("#main").innerHTML=H.join(""); }

/* ---------- navegação geral ---------- */
function irPara(id){
  if(id==="diagnostico"){ var d=$("#fundoDiag"); if(d){d.classList.add("ver"); fecharMenu();} return; }
  if(id==="whatsapp"){ window.open(CONSULTORA.whatsapp,"_blank","noopener"); return; }
  if(id.indexOf(".html")>-1){ window.location.href=id; return; }
  var el=document.getElementById(id);
  if(el){ el.scrollIntoView({behavior:"smooth",block:"start"}); fecharMenu(); }
}
function fecharMenu(){var r=$("#rail"); if(r) r.classList.remove("aberto")}
function ligarGerais(){
  document.addEventListener("click",function(e){
    var b=e.target.closest("[data-alvo]"); if(b){ irPara(b.dataset.alvo); return; }
    var f=e.target.closest("[data-fecha]"); if(f){ $("#"+f.dataset.fecha).classList.remove("ver"); return; }
    if(window.innerWidth<=980 && $("#rail").classList.contains("aberto") &&
       !$("#rail").contains(e.target) && !$("#menuBt").contains(e.target)) fecharMenu();
  });
  $("#btTopo").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});fecharMenu()});
  $("#menuBt").addEventListener("click",function(e){e.stopPropagation();$("#rail").classList.toggle("aberto")});
  $$(".fundo").forEach(function(f){f.addEventListener("click",function(e){if(e.target===f)f.classList.remove("ver")})});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")$$(".fundo").forEach(function(f){f.classList.remove("ver")})});
}

/* ---------- trilha, endereços, próxima tela e progresso ----------
   GRUPOS = lista de grupos, ou null para uma trilha simples de uma tela por item. */
function navegacao(GRUPOS){
  function slug(t){return t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")
    .replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
  var telas=[];

  if(GRUPOS){
    $("#navAbas").innerHTML=GRUPOS.map(function(g){
      return '<div class="grp" data-g="'+g.id+'">'+
        '<button class="aba" data-alvo="'+g.id+'"><span class="nb">'+g.n+'</span><span class="lb">'+esc(g.l)+'</span></button>'+
        '<div class="sub" id="sub-'+g.id+'"></div></div>';
    }).join("");
    var ids=GRUPOS.map(function(g){return g.id}), gAtual=GRUPOS[0].id, mapa={};
    GRUPOS.forEach(function(g){mapa[g.id]=[]});
    $$(".folha").forEach(function(f){
      if(f.id && ids.indexOf(f.id)>=0) gAtual=f.id;
      f.dataset.g=gAtual;
      if(f.classList.contains("divisor")) return;
      var m=f.querySelector(".migalha");
      var nome=m?m.textContent.split("/").pop().trim():"";
      if(!nome) return;
      if(!f.id) f.id=slug(nome)||("t"+telas.length);
      mapa[gAtual].push({id:f.id,nome:nome});
      telas.push({id:f.id,nome:nome,el:f});
    });
    Object.keys(mapa).forEach(function(g){
      var el=document.getElementById("sub-"+g); if(!el||!mapa[g].length) return;
      el.innerHTML=mapa[g].map(function(t){
        return '<button class="subi" data-alvo="'+t.id+'">'+esc(t.nome)+'</button>';
      }).join("");
    });
  } else {
    $$(".folha").forEach(function(f,i){
      var m=f.querySelector(".migalha");
      var nome=m?m.textContent.split("/").pop().trim():(f.dataset.nome||"");
      if(!nome) return;
      if(!f.id) f.id=slug(nome)||("t"+i);
      telas.push({id:f.id,nome:nome,el:f});
    });
    $("#navAbas").innerHTML='<div class="grp on" data-g="tudo">'+
      '<div class="sub" id="sub-tudo" style="display:block">'+
      telas.map(function(t,i){
        return '<button class="subi reta" data-alvo="'+t.id+'"><i>'+("0"+(i+1)).slice(-2)+'</i>'+esc(t.nome)+'</button>';
      }).join("")+'</div></div>';
  }

  telas.forEach(function(t,i){
    var p=telas[i+1]; if(!p) return;
    var b=document.createElement("button");
    b.className="proxima"; b.dataset.alvo=p.id;
    b.innerHTML='<span class="rot">próxima</span><span class="nm">'+esc(p.nome)+' &rarr;</span>';
    t.el.querySelector(".conteudo").appendChild(b);
  });

  function ativar(f){
    var g=f.dataset.g;
    if(g){
      $$(".grp").forEach(function(x){x.classList.toggle("on",x.dataset.g===g)});
      $$(".aba").forEach(function(b){b.classList.toggle("on",b.dataset.alvo===g)});
    }
    $$(".subi").forEach(function(b){b.classList.toggle("on",b.dataset.alvo===f.id)});
  }
  if("IntersectionObserver" in window){
    var ob=new IntersectionObserver(function(es){
      es.forEach(function(en){ if(en.isIntersecting) ativar(en.target); });
    },{rootMargin:"-45% 0px -45% 0px"});
    $$(".folha").forEach(function(f){ob.observe(f)});
  }
  if($$(".folha")[0]) ativar($$(".folha")[0]);

  /* a página é montada por JS, então a âncora da URL precisa ser reaplicada */
  if(location.hash && location.hash.length>1){
    var alvo=document.getElementById(location.hash.slice(1));
    if(alvo) setTimeout(function(){alvo.scrollIntoView({behavior:"auto",block:"start"})},60);
  }
  window.addEventListener("hashchange",function(){
    var a2=document.getElementById(location.hash.slice(1));
    if(a2) a2.scrollIntoView({behavior:"smooth",block:"start"});
  });

  var barra=$("#prog"), tick=false;
  function progresso(){
    var h=document.documentElement.scrollHeight-window.innerHeight;
    barra.style.transform="scaleX("+(h>0?Math.min(window.scrollY/h,1):0)+")";
    tick=false;
  }
  window.addEventListener("scroll",function(){if(!tick){tick=true;requestAnimationFrame(progresso)}},{passive:true});
  window.addEventListener("resize",progresso); progresso();
}

/* ---------- animação de entrada e contadores ---------- */
function animacoes(){
  var suave=!window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  $$(".folha .conteudo").forEach(function(el){el.classList.add("sobe")});
  if("IntersectionObserver" in window && suave){
    var o1=new IntersectionObserver(function(es){es.forEach(function(en){
      if(en.isIntersecting){en.target.classList.add("dentro");o1.unobserve(en.target)}})},{threshold:.08});
    $$(".sobe").forEach(function(el){o1.observe(el)});
  } else $$(".sobe").forEach(function(el){el.classList.add("dentro")});
  function animar(el){
    var alvo=parseFloat(el.dataset.conta);
    if(!suave){el.textContent=alvo;return}
    var t0=performance.now();
    (function passo(t){var k=Math.min((t-t0)/900,1);
      el.textContent=Math.round(alvo*(1-Math.pow(1-k,3)));
      if(k<1) requestAnimationFrame(passo);})(t0);
  }
  if("IntersectionObserver" in window){
    var o2=new IntersectionObserver(function(es){es.forEach(function(en){
      if(en.isIntersecting){animar(en.target);o2.unobserve(en.target)}})},{threshold:.5});
    $$("[data-conta]").forEach(function(el){o2.observe(el)});
  } else $$("[data-conta]").forEach(animar);
}

/* ---------- memória compartilhada entre as duas páginas ---------- */
var MEM={
  leu:function(){return guarda.ler("jm-leu",false)},
  marcarLeu:function(){guarda.salvar("jm-leu",true)},
  ultimaVisita:function(){return guarda.ler("jm-visita",0)},
  registrarVisita:function(){var a=this.ultimaVisita();guarda.salvar("jm-visita",Date.now());return a},
  diasDesde:function(t){return t?Math.floor((Date.now()-t)/86400000):0}
};
