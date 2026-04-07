export interface Env { STORE: KVNamespace; DB: D1Database; SERVICE_NAME: string; VERSION: string; }
const SVC = "roadbook";
function json(d: unknown, s = 200) { return new Response(JSON.stringify(d,null,2),{status:s,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","X-BlackRoad-Service":SVC}}); }
async function track(env: Env, req: Request, path: string) { const cf=(req as any).cf||{}; env.DB.prepare("INSERT INTO analytics(subdomain,path,country,ua,ts)VALUES(?,?,?,?,?)").bind(SVC,path,cf.country||"",req.headers.get("User-Agent")?.slice(0,150)||"",Date.now()).run().catch(()=>{}); }

function page(entries: any[], signals: any[]): Response {
  const html=`<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><title>RoadBook — BlackRoad Publishing</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#030303;--card:#0a0a0a;--border:#111;--text:#f0f0f0;--sub:#444;--blue:#4488FF;--grad:linear-gradient(135deg,#4488FF,#CC00AA)}
html,body{min-height:100vh;background:var(--bg);color:var(--text);font-family:'Space Grotesk',sans-serif}
.grad-bar{height:2px;background:var(--grad)}
.wrap{max-width:1000px;margin:0 auto;padding:32px 20px}
h1{font-size:2rem;font-weight:700;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:4px}
.sub{font-size:.75rem;color:var(--sub);font-family:'JetBrains Mono',monospace;margin-bottom:28px}
.grid{display:grid;grid-template-columns:2fr 1fr;gap:20px}
.ct{font-size:.65rem;color:var(--sub);text-transform:uppercase;letter-spacing:.08em;font-family:'JetBrains Mono',monospace;margin-bottom:14px}
.entry{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:20px;margin-bottom:10px;transition:border-color .15s;cursor:pointer}
.entry:hover{border-color:#1a1a1a}
.entry-cat{font-size:.65rem;font-family:'JetBrains Mono',monospace;color:var(--blue);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px}
.entry-title{font-size:1.05rem;font-weight:700;margin-bottom:6px;line-height:1.3}
.entry-excerpt{font-size:.8rem;color:var(--sub);line-height:1.6;margin-bottom:8px}
.entry-meta{font-size:.65rem;font-family:'JetBrains Mono',monospace;color:#333;display:flex;gap:10px}
.tag{padding:1px 7px;background:#111;border:1px solid #1a1a1a;border-radius:3px;color:#555}
.sidebar-card{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:16px;margin-bottom:12px}
.sig-item{padding:8px 0;border-bottom:1px solid #0d0d0d;font-size:.75rem}
.sig-item:last-child{border-bottom:none}
.sig-src{font-size:.62rem;font-family:'JetBrains Mono',monospace;color:var(--blue);margin-bottom:2px}
.search-bar{display:flex;gap:8px;margin-bottom:20px}
.search-bar input{flex:1;padding:10px 14px;background:var(--card);border:1px solid var(--border);border-radius:8px;color:var(--text);font-family:'Space Grotesk',sans-serif;font-size:.85rem;outline:none}
.search-bar input:focus{border-color:var(--blue)}
.search-bar button{padding:10px 18px;background:var(--blue);color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:700;font-size:.82rem}
.empty{color:var(--sub);font-size:.85rem;padding:20px 0}
@media(max-width:700px){.grid{grid-template-columns:1fr}}
</style></head><body>
<div class="grad-bar"></div>
<div class="wrap">
<h1>RoadBook</h1>
<div class="sub">roadbook.blackroad.io · knowledge publisher · connected to codex</div>
<div class="search-bar">
  <input type="text" id="q" placeholder="Search codex, signals, math..." autocomplete="off">
  <button onclick="doSearch()">Search</button>
</div>
<div class="grid">
  <div>
    <div class="ct">From Your Codex (${entries.length} entries)</div>
    <div id="entries">
    ${entries.length?entries.map(e=>{
      let tags=[];try{tags=JSON.parse(e.tags||'[]')}catch{}
      return`<div class="entry" onclick="window.open('https://codex.blackroad.io','_blank')">
        <div class="entry-cat">${e.category||'general'} ${e.notebook_page?'· p.'+e.notebook_page:''}</div>
        <div class="entry-title">${e.title}</div>
        <div class="entry-excerpt">${(e.body||'').slice(0,180)}...</div>
        <div class="entry-meta"><span>${e.created_at?.slice(0,10)||''}</span>${tags.slice(0,3).map((t:string)=>`<span class="tag">${t}</span>`).join('')}</div>
      </div>`;}).join(''):`<div class="empty">No codex entries yet — <a href="https://codex.blackroad.io" style="color:var(--blue)">add them at codex.blackroad.io</a></div>`}
    </div>
  </div>
  <div>
    <div class="sidebar-card">
      <div class="ct">Latest Signals</div>
      ${signals.length?signals.map(s=>`<div class="sig-item"><div class="sig-src">${s.source}</div><div style="font-size:.75rem">${s.title?.slice(0,80)||''}</div></div>`).join(''):`<div class="empty" style="font-size:.75rem">Signals fire hourly from arXiv</div>`}
    </div>
    <div class="sidebar-card">
      <div class="ct">Quick Links</div>
      ${[["Codex","https://codex.blackroad.io"],["Math Pipeline","https://math.blackroad.io"],["Signals","https://signals.blackroad.io"],["Oracle","https://oracle.blackroad.io"]].map(([n,u])=>`<a href="${u}" target="_blank" style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid #0d0d0d;font-size:.78rem;color:var(--text);text-decoration:none"><span>${n}</span><span style="color:var(--blue);font-size:.65rem">↗</span></a>`).join('')}
    </div>
  </div>
</div>
</div>
<script src="https://cdn.blackroad.io/br.js"></script>
<script>
async function doSearch(){
  var q=document.getElementById('q').value.trim();if(!q)return;
  var r=await fetch('https://roadview.blackroad.io/api/search?q='+encodeURIComponent(q));
  var d=await r.json();
  var el=document.getElementById('entries');
  if(!d.results?.length){el.innerHTML='<div class="empty">No results for "'+q+'"</div>';return;}
  el.innerHTML=d.results.map(function(r){return'<div class="entry"><div class="entry-cat">'+r.source+'</div><div class="entry-title">'+r.title+'</div><div class="entry-excerpt">'+(r.excerpt||'').replace(/<[^>]+>/g,'').slice(0,180)+'</div><div class="entry-meta"><a href="'+r.url+'" target="_blank" style="color:#4488FF">open →</a></div></div>';}).join('');
}
document.getElementById('q').addEventListener('keydown',function(e){if(e.key==='Enter')doSearch();});
</script>
</body></html>`;
  return new Response(html,{headers:{"Content-Type":"text/html;charset=UTF-8"}});
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    if(req.method==="OPTIONS")return new Response(null,{status:204,headers:{"Access-Control-Allow-Origin":"*"}});
    const url=new URL(req.url);const path=url.pathname;
    track(env,req,path);
    if(path==="/health")return json({service:SVC,status:"ok",version:env.VERSION,ts:Date.now()});
    const [entriesRes,signalsRes]=await Promise.all([
      env.DB.prepare("SELECT id,title,body,category,notebook_page,tags,created_at FROM codex_entries ORDER BY id DESC LIMIT 20").all().catch(()=>({results:[]})),
      env.DB.prepare("SELECT source,title,url,relevance_score FROM signals_log ORDER BY relevance_score DESC LIMIT 8").all().catch(()=>({results:[]})),
    ]);
    return page(entriesRes.results as any[],signalsRes.results as any[]);
  }
};
