// PROPRIETARY AND CONFIDENTIAL. Copyright 2025-2026 BlackRoad OS, Inc. All rights reserved. NOT open source.
// RoadBook — Open Publishing Platform | roadbook.blackroad.io
// Turn insights into published knowledge.

const ROOT_HTML = `<!-- PROPRIETARY. Copyright 2025-2026 BlackRoad OS, Inc. All rights reserved. NOT open source. -->
<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>RoadBook \u2014 Open Knowledge Platform \u2014 BlackRoad OS</title>
<meta name="description" content="Publish, discover, and preserve articles, research, and knowledge on BlackRoad OS. 72+ articles with DOIs and provenance hashes.">
<meta property="og:title" content="RoadBook \u2014 BlackRoad OS"><meta property="og:description" content="Open publishing platform with RoadChain provenance. 72+ articles on AI, sovereignty, education.">
<meta property="og:url" content="https://roadbook.blackroad.io"><meta property="og:image" content="https://images.blackroad.io/pixel-art/road-logo.png">
<meta name="twitter:card" content="summary_large_image"><meta name="robots" content="index, follow, noai, noimageai">
<link rel="canonical" href="https://roadbook.blackroad.io/">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%230a0a0a'/><circle cx='10' cy='16' r='5' fill='%23FF2255'/><rect x='18' y='11' width='10' height='10' rx='2' fill='%238844FF'/></svg>" type="image/svg+xml">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}:root{--g:linear-gradient(90deg,#FF6B2B,#FF2255,#CC00AA,#8844FF,#4488FF,#00D4FF);--bg:#000;--card:#0a0a0a;--border:#1a1a1a;--muted:#444;--sub:#737373;--text:#f5f5f5;--white:#fff;--sg:'Space Grotesk',sans-serif;--jb:'JetBrains Mono',monospace;--in:'Inter',sans-serif;--accent:#CC00AA}
body{background:var(--bg);color:var(--text);font-family:var(--sg);line-height:1.7;min-height:100vh}a{color:#4488FF;text-decoration:none}a:hover{opacity:.8}h1,h2,h3{color:var(--white);line-height:1.3}
pre{background:#111;border:1px solid #222;border-radius:8px;padding:16px;overflow-x:auto;margin:16px 0;font-size:13px;color:#ccc;font-family:var(--jb)}code{background:#151515;padding:2px 6px;border-radius:4px;font-size:13px;font-family:var(--jb)}
.bar{height:3px;background:var(--g);position:fixed;top:0;left:0;right:0;z-index:1000}.wrap{max-width:800px;margin:0 auto;padding:24px 20px}
nav{position:fixed;top:3px;left:0;right:0;z-index:999;background:rgba(0,0,0,.92);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);height:48px;display:flex;align-items:center;padding:0 24px}
.n-left{display:flex;align-items:center;gap:10px;cursor:pointer}.n-dot{width:10px;height:10px;border-radius:50%;background:var(--accent)}.n-name{font-weight:700;font-size:17px}
.n-right{margin-left:auto;display:flex;gap:10px;align-items:center}
.btn{padding:7px 16px;border:1px solid var(--border);border-radius:6px;background:transparent;color:#ccc;font-size:12px;font-family:var(--in);cursor:pointer;transition:all .15s}.btn:hover{border-color:#444;color:#fff}.btn-w{background:#fff;color:#000;border-color:#fff}.btn-w:hover{opacity:.9}
.search{width:100%;padding:10px 16px;border:1px solid var(--border);border-radius:8px;background:#111;color:#fff;font-size:14px;font-family:var(--in);outline:none;margin-bottom:20px}.search:focus{border-color:#333}.search::placeholder{color:#444}
.stats{display:flex;gap:24px;margin-bottom:24px;justify-content:center}.stat-n{font-size:24px;font-weight:700;color:#fff}.stat-l{font-size:10px;color:#555;text-transform:uppercase;letter-spacing:1px}
.cards{display:flex;flex-direction:column;gap:14px}
.card{background:#0a0a0a;border:1px solid var(--border);border-radius:10px;padding:20px;cursor:pointer;transition:border-color .15s}.card:hover{border-color:#333}
.card h3{font-size:17px;margin-bottom:4px}.card .meta{font-size:11px;color:#555;display:flex;gap:12px;margin-bottom:6px;flex-wrap:wrap}.card .sum{font-size:13px;color:#888;line-height:1.6}
.card .tags{display:flex;gap:5px;margin-top:8px;flex-wrap:wrap}.tag{font-size:10px;padding:2px 8px;border-radius:10px;background:#151515;color:#777}
.reader{display:none}.reader h1{font-size:28px;margin-bottom:8px}.reader .meta{font-size:12px;color:#555;margin-bottom:24px;display:flex;gap:14px;flex-wrap:wrap}
.reader .body{font-size:15px;line-height:1.85;color:#ccc}.reader .body h1{font-size:22px;margin:24px 0 10px}.reader .body h2{font-size:19px;margin:20px 0 8px}.reader .body h3{font-size:16px;margin:16px 0 6px}
.reader .body p{margin-bottom:12px}.reader .body ul,.reader .body ol{margin:8px 0 16px 24px}.reader .body li{margin-bottom:4px}.reader .body strong{color:#fff}.reader .body em{color:#bbb}
.reader .body blockquote{border-left:3px solid #333;padding-left:16px;color:#999;margin:12px 0;font-style:italic}
.reader .body table{width:100%;border-collapse:collapse;margin:16px 0;font-size:13px}.reader .body th,.reader .body td{border:1px solid #222;padding:8px 12px;text-align:left}.reader .body th{background:#111;color:#fff}
.reader .body hr{border:none;border-top:1px solid #222;margin:24px 0}
.back{font-size:12px;color:#555;cursor:pointer;margin-bottom:16px;display:inline-flex;align-items:center;gap:4px}.back:hover{color:#999}
.prov{background:#0a0a0a;border:1px solid var(--border);border-radius:8px;padding:14px;margin-top:24px;font-family:var(--jb);font-size:11px;color:#555}
.footer{text-align:center;padding:32px 0 16px;border-top:1px solid var(--border);margin-top:48px;font-size:11px;color:#444}
.empty{text-align:center;padding:60px 20px;color:#444}
.tabs{display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap}.tab{padding:6px 14px;border:1px solid var(--border);border-radius:6px;background:transparent;color:#888;font-size:12px;font-family:var(--in);cursor:pointer;transition:all .15s}.tab:hover{border-color:#444;color:#fff}.tab.active{background:#1a1a1a;border-color:#333;color:#fff}
.coll-card{background:#0a0a0a;border:1px solid var(--border);border-radius:10px;padding:20px;margin-bottom:14px;cursor:pointer;transition:border-color .15s}.coll-card:hover{border-color:#333}.coll-card h3{font-size:17px;margin-bottom:4px}.coll-card .coll-meta{font-size:11px;color:#555;margin-bottom:6px}.coll-card .coll-desc{font-size:13px;color:#888;line-height:1.6}
.bk-actions{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}
.progress-bar{width:100%;height:4px;background:#1a1a1a;border-radius:2px;overflow:hidden;margin-top:6px}.progress-fill{height:100%;background:var(--g);border-radius:2px;transition:width .3s}
.reader-actions{display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap}
.summary-box{background:#0d0d0d;border:1px solid #1a1a1a;border-radius:8px;padding:16px;margin-top:16px;font-size:13px;color:#aaa;line-height:1.7}
.summary-box h4{color:#fff;margin-bottom:8px;font-size:14px}
.summary-box ul{margin:8px 0 0 16px}.summary-box li{margin-bottom:4px}
.comments-section{margin-top:32px;border-top:1px solid var(--border);padding-top:24px}
.comment{background:#0a0a0a;border:1px solid var(--border);border-radius:8px;padding:14px;margin-bottom:10px}
.comment .c-head{display:flex;gap:8px;align-items:center;margin-bottom:6px;font-size:12px;color:#555}.comment .c-name{color:#ccc;font-weight:600}.comment .c-body{font-size:13px;color:#aaa;line-height:1.6}
.comment .c-replies{margin-left:20px;margin-top:8px;border-left:2px solid #1a1a1a;padding-left:12px}
.cite-box{background:#0d0d0d;border:1px solid #1a1a1a;border-radius:8px;padding:14px;margin-top:16px;font-family:var(--jb);font-size:12px;color:#999;white-space:pre-wrap;word-break:break-all}
@media(max-width:640px){nav{padding:0 12px}.wrap{padding:16px 14px}.tabs{gap:4px}}
</style></head><body>
<div class="bar"></div>
<nav><div class="n-left" onclick="showList()"><div class="n-dot"></div><span class="n-name">RoadBook</span></div><div class="n-right"><button class="btn" onclick="showCollections()">Collections</button><button class="btn" onclick="showBookmarks()">Bookmarks</button><a href="https://blackroad.io" class="btn">Highway</a><a href="https://os.blackroad.io" class="btn btn-w">Open OS</a></div></nav>
<div class="wrap" style="padding-top:72px">
<div id="lv">
<div class="tabs" id="tabbar">
<button class="tab active" onclick="switchTab('articles')">Articles</button>
<button class="tab" onclick="switchTab('collections')">Collections</button>
<button class="tab" onclick="switchTab('bookmarks')">Bookmarks</button>
</div>
<input class="search" placeholder="Search 72+ articles on AI, sovereignty, education..." id="q" oninput="deb()">
<div class="stats" id="st"></div>
<div class="cards" id="cl"><div class="empty">Loading articles...</div></div>
</div>
<div class="reader" id="rv">
<div class="back" onclick="showList()">\u2190 Back to articles</div>
<h1 id="rt"></h1>
<div class="meta"><span id="rc"></span><span id="rd"></span><span id="rr"></span><span id="ri"></span></div>
<div id="rg" style="margin-bottom:8px"></div>
<div class="reader-actions" id="reader-actions"></div>
<div id="progress-indicator"></div>
<div id="ai-summary"></div>
<div class="body" id="rb"></div>
<div id="cite-output"></div>
<div id="related-articles"></div>
<div class="prov" id="rp"></div>
<div class="comments-section" id="comments-section" style="display:none">
<h3 style="margin-bottom:14px">Discussion</h3>
<div id="comment-form" style="margin-bottom:16px">
<input class="search" id="c-name" placeholder="Your name" style="margin-bottom:8px">
<textarea class="search" id="c-body" placeholder="Write a comment..." rows="3" style="resize:vertical"></textarea>
<button class="btn btn-w" onclick="postComment()" style="margin-top:6px">Post Comment</button>
</div>
<div id="comments-list"></div>
</div>
</div>
<footer class="footer">BlackRoad OS, Inc. 2025-2026. Remember the Road. Pave Tomorrow.</footer>
</div>
<script>
let T,CUR_TAB='articles',CUR_PUB=null,USR=localStorage.getItem('rb_user')||'reader-'+Math.random().toString(36).slice(2,8);
localStorage.setItem('rb_user',USR);
function deb(){clearTimeout(T);T=setTimeout(()=>{const q=document.getElementById('q').value.trim();if(CUR_TAB==='articles')ld(q||null);else if(CUR_TAB==='collections')ldColl();else if(CUR_TAB==='bookmarks')ldBk()},300)}
function switchTab(t){CUR_TAB=t;document.querySelectorAll('.tab').forEach((b,i)=>b.classList.toggle('active',['articles','collections','bookmarks'][i]===t));if(t==='articles'){document.getElementById('q').placeholder='Search articles...';ld()}else if(t==='collections'){document.getElementById('q').placeholder='Browse collections...';ldColl()}else{document.getElementById('q').placeholder='Your bookmarks...';ldBk()}}
function showCollections(){switchTab('collections');document.getElementById('lv').style.display='block';document.getElementById('rv').style.display='none'}
function showBookmarks(){switchTab('bookmarks');document.getElementById('lv').style.display='block';document.getElementById('rv').style.display='none'}
async function ld(q){try{const u=q?'/api/discover?q='+encodeURIComponent(q):'/api/publications?limit=100';const r=await fetch(u);const d=await r.json();rn(d.publications||[])}catch{rn([])}}
async function ls(){try{const r=await fetch('/api/stats');const s=await r.json();document.getElementById('st').innerHTML='<div style="text-align:center"><div class="stat-n">'+s.publications+'</div><div class="stat-l">Articles</div></div><div style="text-align:center"><div class="stat-n">'+s.total_reads+'</div><div class="stat-l">Reads</div></div><div style="text-align:center"><div class="stat-n">'+Math.round(s.total_roadcoin_earned)+'</div><div class="stat-l">ROAD</div></div><div style="text-align:center"><div class="stat-n">'+(s.collections||0)+'</div><div class="stat-l">Collections</div></div>'}catch{}}
function rn(a){const e=document.getElementById('cl');if(!a.length){e.innerHTML='<div class="empty">No articles found.</div>';return}e.innerHTML=a.map(i=>{const t=typeof i.tags==='string'?JSON.parse(i.tags||'[]'):i.tags||[];const m=i.reading_time||5;return'<div class="card" onclick="vw(\\''+i.id+'\\')"><h3>'+es(i.title)+'</h3><div class="meta"><span>'+es(i.category||'')+'</span><span>'+new Date(i.created_at).toLocaleDateString()+'</span><span>'+m+' min</span><span>'+(i.reads||0)+' reads</span></div>'+(i.summary?'<div class="sum">'+es(i.summary)+'</div>':'')+(t.length?'<div class="tags">'+t.map(x=>'<span class="tag">'+es(x)+'</span>').join('')+'</div>':'')+'</div>'}).join('')}
function es(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
async function ldColl(){try{const r=await fetch('/api/collections');const d=await r.json();const e=document.getElementById('cl');const c=d.collections||[];if(!c.length){e.innerHTML='<div class="empty">No collections yet.</div>';return}e.innerHTML=c.map(i=>'<div class="coll-card" onclick="vwColl(\\''+i.id+'\\')"><h3>'+es(i.name)+'</h3><div class="coll-meta">'+(i.article_count||0)+' articles</div>'+(i.description?'<div class="coll-desc">'+es(i.description)+'</div>':'')+'</div>').join('')}catch{document.getElementById('cl').innerHTML='<div class="empty">Error loading collections.</div>'}}
async function vwColl(id){try{const r=await fetch('/api/collections/'+id);const d=await r.json();rn(d.articles||[]);document.getElementById('q').placeholder='Collection: '+es(d.collection.name)}catch{}}
async function ldBk(){try{const r=await fetch('/api/bookmarks?user='+USR);const d=await r.json();const e=document.getElementById('cl');const b=d.bookmarks||[];if(!b.length){e.innerHTML='<div class="empty">No bookmarks yet. Open an article and click Bookmark.</div>';return}e.innerHTML=b.map(i=>'<div class="card" onclick="vw(\\''+i.publication_id+'\\')"><h3>'+es(i.title)+'</h3><div class="meta"><span>'+es(i.folder||'default')+'</span><span>Bookmarked '+new Date(i.created_at).toLocaleDateString()+'</span></div>'+(i.progress_pct>0?'<div class="progress-bar"><div class="progress-fill" style="width:'+i.progress_pct+'%"></div></div>':'')+'</div>').join('')}catch{document.getElementById('cl').innerHTML='<div class="empty">Error loading bookmarks.</div>'}}
async function vw(id){try{CUR_PUB=id;const r=await fetch('/api/publications/'+id);const d=await r.json();const a=d.publication;document.getElementById('rt').textContent=a.title;document.getElementById('rc').textContent=a.category||'';document.getElementById('rd').textContent=new Date(a.created_at).toLocaleDateString();document.getElementById('rr').textContent=(a.reading_time||5)+' min read';document.getElementById('ri').textContent=a.doi||'';const t=typeof a.tags==='string'?JSON.parse(a.tags||'[]'):a.tags||[];document.getElementById('rg').innerHTML=t.map(x=>'<span class="tag">'+es(x)+'</span>').join(' ');document.getElementById('rb').innerHTML=md(a.content);document.getElementById('rp').innerHTML='DOI: '+(a.doi||'\u2014')+' | Hash: '+(a.provenance_hash||'\u2014').slice(0,16)+'... | v'+(a.version||1)+' | '+a.license;document.getElementById('reader-actions').innerHTML='<button class="btn" onclick="toggleBookmark(\\''+id+'\\')">Bookmark</button><button class="btn" onclick="loadSummary(\\''+id+'\\')">AI Summary</button><button class="btn" onclick="loadCitation(\\''+id+'\\')">Cite</button><button class="btn" onclick="loadRelated(\\''+id+'\\')">Related</button>';document.getElementById('ai-summary').innerHTML='';document.getElementById('cite-output').innerHTML='';document.getElementById('related-articles').innerHTML='';document.getElementById('lv').style.display='none';document.getElementById('rv').style.display='block';document.getElementById('comments-section').style.display='block';loadComments(id);loadProgress(id);window.scrollTo(0,0);trackProgress(id)}catch{alert('Error loading')}}
function showList(){document.getElementById('lv').style.display='block';document.getElementById('rv').style.display='none';document.getElementById('comments-section').style.display='none';CUR_PUB=null;if(CUR_TAB==='articles'){ld();ls()}else if(CUR_TAB==='collections'){ldColl();ls()}else{ldBk();ls()}}
async function toggleBookmark(id){try{await fetch('/api/bookmarks',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({user:USR,publication_id:id})});alert('Bookmarked!')}catch{alert('Error')}}
async function loadSummary(id){const box=document.getElementById('ai-summary');box.innerHTML='<div class="summary-box"><h4>Generating AI Summary...</h4></div>';try{const r=await fetch('/api/publications/'+id+'/summarize');const d=await r.json();box.innerHTML='<div class="summary-box"><h4>AI Summary (by Calliope)</h4><p>'+es(d.summary||'')+'</p>'+(d.key_takeaways?'<h4 style="margin-top:12px">Key Takeaways</h4><ul>'+d.key_takeaways.map(k=>'<li>'+es(k)+'</li>').join('')+'</ul>':'')+'</div>'}catch{box.innerHTML='<div class="summary-box"><h4>Error generating summary</h4></div>'}}
async function loadCitation(id){const box=document.getElementById('cite-output');box.innerHTML='<div class="cite-box">Loading citation...</div>';try{const r=await fetch('/api/publications/'+id+'/cite?format=apa');const d=await r.json();box.innerHTML='<div class="summary-box"><h4>Citation Formats</h4><p><strong>APA:</strong></p><div class="cite-box">'+es(d.citations.apa)+'</div><p style="margin-top:8px"><strong>MLA:</strong></p><div class="cite-box">'+es(d.citations.mla)+'</div><p style="margin-top:8px"><strong>Chicago:</strong></p><div class="cite-box">'+es(d.citations.chicago)+'</div><p style="margin-top:8px"><strong>BibTeX:</strong></p><div class="cite-box">'+es(d.citations.bibtex)+'</div></div>'}catch{box.innerHTML='<div class="cite-box">Error loading citations</div>'}}
async function loadRelated(id){const box=document.getElementById('related-articles');box.innerHTML='<div class="summary-box"><h4>Finding related articles...</h4></div>';try{const r=await fetch('/api/publications/'+id+'/related');const d=await r.json();const rel=d.related||[];if(!rel.length){box.innerHTML='<div class="summary-box"><h4>No related articles found</h4></div>';return}box.innerHTML='<div class="summary-box"><h4>Related Articles</h4><div style="margin-top:8px">'+rel.map(a=>'<div class="card" style="margin-bottom:8px;cursor:pointer" onclick="vw(\\''+a.id+'\\')"><h3 style="font-size:14px">'+es(a.title)+'</h3><div class="meta"><span>'+es(a.category||'')+'</span><span>'+(a.similarity_score?Math.round(a.similarity_score*100)+'% match':'')+'</span></div></div>').join('')+'</div></div>'}catch{box.innerHTML='<div class="summary-box"><h4>Error loading related articles</h4></div>'}}
async function loadComments(id){try{const r=await fetch('/api/publications/'+id+'/comments');const d=await r.json();const c=d.comments||[];const el=document.getElementById('comments-list');if(!c.length){el.innerHTML='<div class="empty" style="padding:20px">No comments yet. Be the first.</div>';return}el.innerHTML=c.map(renderComment).join('')}catch{}}
function renderComment(c){let h='<div class="comment"><div class="c-head"><span class="c-name">'+es(c.author)+'</span><span>'+new Date(c.created_at).toLocaleDateString()+'</span></div><div class="c-body">'+es(c.body)+'</div>';if(c.replies&&c.replies.length){h+='<div class="c-replies">'+c.replies.map(renderComment).join('')+'</div>'}h+='<button class="btn" style="margin-top:6px;font-size:10px" onclick="replyTo(\\''+c.id+'\\')">Reply</button></div>';return h}
async function postComment(parentId){const name=document.getElementById('c-name').value.trim()||'Anonymous';const body=document.getElementById('c-body').value.trim();if(!body)return;try{await fetch('/api/publications/'+CUR_PUB+'/comments',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({author:name,body:body,parent_id:parentId||null})});document.getElementById('c-body').value='';loadComments(CUR_PUB)}catch{alert('Error posting comment')}}
function replyTo(commentId){const body=prompt('Your reply:');if(!body)return;const name=document.getElementById('c-name').value.trim()||'Anonymous';fetch('/api/publications/'+CUR_PUB+'/comments',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({author:name,body:body,parent_id:commentId})}).then(()=>loadComments(CUR_PUB))}
async function loadProgress(id){try{const r=await fetch('/api/progress?user='+USR+'&publication_id='+id);const d=await r.json();if(d.progress&&d.progress.scroll_pct>0){document.getElementById('progress-indicator').innerHTML='<div style="font-size:11px;color:#555;margin-bottom:8px">Resume reading at '+Math.round(d.progress.scroll_pct)+'%</div><div class="progress-bar"><div class="progress-fill" style="width:'+d.progress.scroll_pct+'%"></div></div>';if(d.progress.scroll_pct>5){setTimeout(()=>{const h=document.documentElement.scrollHeight;window.scrollTo(0,h*d.progress.scroll_pct/100)},200)}}else{document.getElementById('progress-indicator').innerHTML=''}}catch{}}
function trackProgress(id){let saving=false;const handler=()=>{if(saving)return;saving=true;const pct=Math.round(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100)||0;fetch('/api/progress',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({user:USR,publication_id:id,scroll_pct:Math.min(100,pct)})}).finally(()=>{saving=false})};const throttled=()=>{clearTimeout(window._progT);window._progT=setTimeout(handler,2000)};window.removeEventListener('scroll',window._progHandler);window._progHandler=throttled;window.addEventListener('scroll',throttled)}
function md(t){let h=es(t);h=h.replace(/~~~([\\s\\S]*?)~~~/g,'<pre>$1</pre>');h=h.replace(/\x60\x60\x60([\\s\\S]*?)\x60\x60\x60/g,'<pre>$1</pre>');h=h.replace(/\x60([^\x60]+)\x60/g,'<code>$1</code>');h=h.replace(/^### (.+)$/gm,'<h3>$1</h3>');h=h.replace(/^## (.+)$/gm,'<h2>$1</h2>');h=h.replace(/^# (.+)$/gm,'<h1>$1</h1>');h=h.replace(/\\*\\*(.+?)\\*\\*/g,'<strong>$1</strong>');h=h.replace(/\\*(.+?)\\*/g,'<em>$1</em>');h=h.replace(/^\\|(.+)$/gm,function(m){return'<tr>'+m.split('|').filter(Boolean).map(c=>'<td>'+c.trim()+'</td>').join('')+'</tr>'});h=h.replace(/(<tr>[\\s\\S]*?<\\/tr>\\n?)+/g,'<table>$&</table>');h=h.replace(/^- (.+)$/gm,'<li>$1</li>');h=h.replace(/(<li>[\\s\\S]*?<\\/li>\\n?)+/g,'<ul>$&</ul>');h=h.replace(/^&gt; (.+)$/gm,'<blockquote>$1</blockquote>');h=h.replace(/^---$/gm,'<hr>');h=h.replace(/\\[(.+?)\\]\\((.+?)\\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');h=h.replace(/\\n\\n/g,'</p><p>');return'<p>'+h+'</p>'}
showList();
<\\/script></body></html>`;

// ─── Agent Personalities ───
const AGENTS = {
  calliope: { name: 'Calliope', role: 'Narrative Architect', prompt: 'You are Calliope, narrative architect on RoadBook (BlackRoad OS). You write compelling summaries and abstracts that capture the essence of a publication in precise, evocative language.' },
  atticus: { name: 'Atticus', role: 'Peer Reviewer', prompt: 'You are Atticus, peer reviewer on RoadBook (BlackRoad OS). You provide thorough, constructive, fair peer reviews. You evaluate clarity, rigor, originality, and impact. You are encouraging but honest.' },
  elias: { name: 'Elias', role: 'Knowledge Curator', prompt: 'You are Elias, knowledge curator on RoadBook (BlackRoad OS). You help organize, categorize, and connect published knowledge. You identify patterns across publications and suggest connections.' },
};

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: CORS });
}

async function ensureTables(db) {
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS roadbook_publications (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      summary TEXT,
      category TEXT DEFAULT 'general',
      visibility TEXT NOT NULL DEFAULT 'public',
      license TEXT NOT NULL DEFAULT 'proprietary',
      version INTEGER NOT NULL DEFAULT 1,
      author TEXT DEFAULT 'blackroad',
      reads INTEGER DEFAULT 0,
      citations INTEGER DEFAULT 0,
      reading_time INTEGER DEFAULT 1,
      doi TEXT,
      roadcoin_earned REAL DEFAULT 0.0,
      tags TEXT DEFAULT '[]',
      provenance_hash TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_versions (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      version INTEGER NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      summary TEXT,
      hash TEXT,
      prev_hash TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_reviews (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      reviewer TEXT NOT NULL,
      rating INTEGER NOT NULL,
      comments TEXT,
      ai_analysis TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_citations (
      id TEXT PRIMARY KEY,
      source_id TEXT NOT NULL,
      cited_id TEXT NOT NULL,
      context TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS roadbook_versions (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      version INTEGER NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS roadbook_citations (
      id TEXT PRIMARY KEY,
      source_id TEXT NOT NULL,
      target_id TEXT NOT NULL,
      context TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (source_id) REFERENCES roadbook_publications(id),
      FOREIGN KEY (target_id) REFERENCES roadbook_publications(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS roadbook_earnings (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      amount REAL NOT NULL,
      reason TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    // ─── NEW TABLES ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_collections (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      cover_image TEXT,
      curator TEXT DEFAULT 'blackroad',
      sort_order INTEGER DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_collection_items (
      id TEXT PRIMARY KEY,
      collection_id TEXT NOT NULL,
      publication_id TEXT NOT NULL,
      sort_order INTEGER DEFAULT 0,
      added_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (collection_id) REFERENCES rb_collections(id),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_comments (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      parent_id TEXT,
      author TEXT NOT NULL DEFAULT 'Anonymous',
      body TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_bookmarks (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      publication_id TEXT NOT NULL,
      folder TEXT DEFAULT 'default',
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_progress (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      publication_id TEXT NOT NULL,
      scroll_pct REAL DEFAULT 0,
      last_position INTEGER DEFAULT 0,
      completed INTEGER DEFAULT 0,
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_newsletter_subscribers (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      name TEXT,
      subscribed INTEGER DEFAULT 1,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      unsubscribed_at TEXT
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_newsletter_editions (
      id TEXT PRIMARY KEY,
      subject TEXT NOT NULL,
      body TEXT NOT NULL,
      article_ids TEXT DEFAULT '[]',
      sent INTEGER DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      sent_at TEXT
    )`),
    // ─── PEER REVIEW SYSTEM (structured) ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_peer_reviews (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      reviewer_id TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      decision TEXT,
      clarity_score INTEGER,
      rigor_score INTEGER,
      originality_score INTEGER,
      impact_score INTEGER,
      summary_comment TEXT,
      strengths TEXT,
      weaknesses TEXT,
      suggestions TEXT,
      ai_meta_review TEXT,
      assigned_at TEXT NOT NULL DEFAULT (datetime('now')),
      completed_at TEXT,
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_review_submissions (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      submitted_by TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'submitted',
      reviewer_count INTEGER DEFAULT 0,
      accept_count INTEGER DEFAULT 0,
      reject_count INTEGER DEFAULT 0,
      revise_count INTEGER DEFAULT 0,
      final_decision TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      decided_at TEXT,
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    // ─── READING CHALLENGES ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_challenges (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      challenge_type TEXT NOT NULL DEFAULT 'read_count',
      target_value INTEGER NOT NULL DEFAULT 5,
      start_date TEXT NOT NULL,
      end_date TEXT NOT NULL,
      category_filter TEXT,
      collection_id TEXT,
      badge_name TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_challenge_participants (
      id TEXT PRIMARY KEY,
      challenge_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      progress INTEGER DEFAULT 0,
      completed INTEGER DEFAULT 0,
      completed_at TEXT,
      joined_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (challenge_id) REFERENCES rb_challenges(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_challenge_progress_log (
      id TEXT PRIMARY KEY,
      challenge_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      publication_id TEXT,
      action TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    // ─── AUTHOR PROFILES ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_authors (
      id TEXT PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      display_name TEXT NOT NULL,
      bio TEXT,
      avatar_url TEXT,
      expertise TEXT DEFAULT '[]',
      website TEXT,
      social_links TEXT DEFAULT '{}',
      follower_count INTEGER DEFAULT 0,
      publication_count INTEGER DEFAULT 0,
      total_reads INTEGER DEFAULT 0,
      joined_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_author_followers (
      id TEXT PRIMARY KEY,
      author_id TEXT NOT NULL,
      follower_user_id TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (author_id) REFERENCES rb_authors(id)
    )`),
    // ─── ANNOTATION SYSTEM ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_annotations (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      highlighted_text TEXT NOT NULL,
      note TEXT,
      start_offset INTEGER,
      end_offset INTEGER,
      color TEXT DEFAULT 'yellow',
      visibility TEXT DEFAULT 'private',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    // ─── READING ANALYTICS ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_reading_events (
      id TEXT PRIMARY KEY,
      user_id TEXT,
      publication_id TEXT NOT NULL,
      event_type TEXT NOT NULL,
      duration_seconds INTEGER,
      scroll_depth REAL,
      referrer TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    // ─── ARTICLE VERSIONING (enhanced diff tracking) ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_version_diffs (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      from_version INTEGER NOT NULL,
      to_version INTEGER NOT NULL,
      diff_summary TEXT,
      additions INTEGER DEFAULT 0,
      deletions INTEGER DEFAULT 0,
      changelog_entry TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    // ─── FEATURED CONTENT ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_featured (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      feature_type TEXT NOT NULL DEFAULT 'editorial',
      title_override TEXT,
      description_override TEXT,
      priority INTEGER DEFAULT 0,
      active INTEGER DEFAULT 1,
      start_date TEXT,
      end_date TEXT,
      picked_by TEXT DEFAULT 'system',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
  ]);
}

async function generateHash(content) {
  const encoder = new TextEncoder();
  const data = encoder.encode(content);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// ─── Cross-Product Integration (RoadChain + RoadCoin) ───
async function stampChain(action, entity, details) {
  try {
    await fetch('https://roadchain-worker.blackroad.workers.dev/api/event', {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({app:'roadbook', type: action, data: {entity, details}, ts: new Date().toISOString()})
    });
  } catch {}
}
async function earnCoin(road_id, action, amount) {
  try {
    await fetch('https://roadcoin-worker.blackroad.workers.dev/api/earn', {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({road_id: road_id || 'roadbook-system', action, amount})
    });
  } catch {}
}

function estimateReadingTime(text) {
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 230));
}

function generateDOI(id) {
  return `10.blackroad/rb-${id.slice(0, 12)}`;
}

// ─── Citation Generator Helper ───
function generateCitations(pub) {
  const author = pub.author || 'BlackRoad OS';
  const title = pub.title;
  const year = new Date(pub.created_at).getFullYear();
  const date = new Date(pub.created_at);
  const doi = pub.doi || generateDOI(pub.id);
  const url = `https://roadbook.blackroad.io/api/publications/${pub.id}`;
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  const apa = `${author}. (${year}). ${title}. RoadBook, BlackRoad OS. https://doi.org/${doi}`;
  const mla = `${author}. "${title}." RoadBook, BlackRoad OS, ${day} ${month.slice(0,3)}. ${year}, ${url}.`;
  const chicago = `${author}. "${title}." RoadBook. BlackRoad OS, ${month} ${day}, ${year}. ${url}.`;
  const bibtex = `@article{roadbook_${pub.id.slice(0,8)},
  author = {${author}},
  title = {${title}},
  journal = {RoadBook},
  publisher = {BlackRoad OS},
  year = {${year}},
  month = {${month.toLowerCase().slice(0,3)}},
  doi = {${doi}},
  url = {${url}}
}`;

  return { apa, mla, chicago, bibtex };
}

// ─── Helper: build threaded comments tree ───
function buildCommentTree(comments) {
  const map = {};
  const roots = [];
  for (const c of comments) {
    map[c.id] = { ...c, replies: [] };
  }
  for (const c of comments) {
    if (c.parent_id && map[c.parent_id]) {
      map[c.parent_id].replies.push(map[c.id]);
    } else {
      roots.push(map[c.id]);
    }
  }
  return roots;
}

let dbReady = false;

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    if (path === "/" || path === "") return new Response(ROOT_HTML, { headers: { ...CORS, "Content-Type": "text/html;charset=UTF-8" } });
    if (!dbReady) { await ensureTables(env.DB); dbReady = true; }

    // Health
    if ((path === '/health' || path === '/api/health') && method === 'GET') {
      return json({ status: 'ok', service: 'roadbook', timestamp: new Date().toISOString() });
    }

    // Stats
    if (path === '/api/stats' && method === 'GET') {
      const pubs = await env.DB.prepare('SELECT COUNT(*) as count FROM roadbook_publications').first();
      const reads = await env.DB.prepare('SELECT COALESCE(SUM(reads), 0) as total FROM roadbook_publications').first();
      const citations = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_citations').first();
      const legacyCitations = await env.DB.prepare('SELECT COUNT(*) as count FROM roadbook_citations').first();
      const reviews = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_reviews').first();
      const versions = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_versions').first();
      const earnings = await env.DB.prepare('SELECT COALESCE(SUM(amount), 0) as total FROM roadbook_earnings').first();
      const avgRating = await env.DB.prepare('SELECT AVG(rating) as avg FROM rb_reviews').first();
      const byCategory = await env.DB.prepare("SELECT category, COUNT(*) as count FROM roadbook_publications WHERE category IS NOT NULL GROUP BY category ORDER BY count DESC").all();
      const collections = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_collections').first();
      const comments = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_comments').first();
      const subscribers = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_newsletter_subscribers WHERE subscribed = 1').first();
      const authors = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_authors').first();
      const annotations = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_annotations').first();
      const peerReviews = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_peer_reviews').first();
      const challenges = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_challenges').first();
      const featuredCount = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_featured WHERE active = 1').first();
      return json({
        publications: pubs.count,
        total_reads: reads.total,
        citations: (citations.count || 0) + (legacyCitations.count || 0),
        reviews: reviews.count || 0,
        versions: versions.count || 0,
        average_rating: avgRating?.avg ? Math.round(avgRating.avg * 10) / 10 : null,
        total_roadcoin_earned: earnings.total,
        collections: collections.count || 0,
        comments: comments.count || 0,
        newsletter_subscribers: subscribers.count || 0,
        authors: authors.count || 0,
        annotations: annotations.count || 0,
        peer_reviews: peerReviews.count || 0,
        active_challenges: challenges.count || 0,
        featured_items: featuredCount.count || 0,
        by_category: (byCategory.results || []).reduce((acc, r) => { acc[r.category] = r.count; return acc; }, {}),
        agents: Object.values(AGENTS).map(a => ({ name: a.name, role: a.role })),
      });
    }

    // ─── Publish (enhanced with AI summary, reading time, DOI) ───
    if (path === '/api/publish' && method === 'POST') {
      const body = await request.json();
      if (!body.title || !body.content) return json({ error: 'title and content are required' }, 400);

      const id = crypto.randomUUID();
      const hash = await generateHash(body.content);
      const readingTime = estimateReadingTime(body.content);
      const doi = generateDOI(id);

      // Calliope generates abstract/summary if not provided
      let summary = body.summary || '';
      if (!summary) {
        try {
          const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `${AGENTS.calliope.prompt} Write a concise 2-3 sentence abstract/summary of this publication. Capture the key thesis, methodology (if applicable), and main finding. Return ONLY the summary.` },
              { role: 'user', content: `Title: ${body.title}\n\n${body.content.substring(0, 3000)}` },
            ],
            max_tokens: 250,
          });
          if (aiResult.response) summary = aiResult.response.trim();
        } catch (e) {
          summary = body.content.substring(0, 200);
        }
      }

      const tags = JSON.stringify(body.tags || []);
      const category = body.category || 'general';
      await env.DB.prepare(
        'INSERT INTO roadbook_publications (id, title, content, summary, category, visibility, license, tags, provenance_hash, reading_time, doi) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.title, body.content, summary, category, body.visibility || 'public', body.license || 'proprietary', tags, hash, readingTime, doi).run();

      // Store version 1 with RoadChain hash
      await env.DB.prepare(
        'INSERT INTO rb_versions (id, publication_id, version, title, content, summary, hash, prev_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), id, 1, body.title, body.content, summary, hash, null).run();

      // Also store in legacy versions table
      await env.DB.prepare(
        'INSERT INTO roadbook_versions (id, publication_id, version, title, content) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), id, 1, body.title, body.content).run();

      // Award RoadCoin for publishing
      const coinAmount = 1.0;
      await env.DB.prepare(
        'INSERT INTO roadbook_earnings (id, publication_id, amount, reason) VALUES (?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), id, coinAmount, 'publication').run();
      await env.DB.prepare(
        'UPDATE roadbook_publications SET roadcoin_earned = roadcoin_earned + ? WHERE id = ?'
      ).bind(coinAmount, id).run();

      const pub = await env.DB.prepare('SELECT * FROM roadbook_publications WHERE id = ?').bind(id).first();
      stampChain('published', id, body.title.slice(0,100)).catch(()=>{});
      earnCoin('author', 'publish', 2.0).catch(()=>{});
      return json({ publication: pub, doi, reading_time: readingTime, agent: 'Calliope' }, 201);
    }

    // List publications
    if (path === '/api/publications' && method === 'GET') {
      const limit = parseInt(url.searchParams.get('limit') || '50');
      const result = await env.DB.prepare(
        "SELECT id, title, summary, category, visibility, license, version, author, reads, citations, reading_time, doi, roadcoin_earned, tags, created_at, updated_at FROM roadbook_publications ORDER BY created_at DESC LIMIT ?"
      ).bind(limit).all();
      return json({ publications: result.results });
    }

    // Route matching for publication sub-routes
    const pubMatch = path.match(/^\/api\/publications\/([^/]+)$/);
    const pubVersionsMatch = path.match(/^\/api\/publications\/([^/]+)\/versions$/);
    const pubCitationsMatch = path.match(/^\/api\/publications\/([^/]+)\/citations$/);
    const pubCiteMatch = path.match(/^\/api\/publications\/([^/]+)\/cite$/);
    const pubReviewMatch = path.match(/^\/api\/publications\/([^/]+)\/review$/);
    const exportMatch = path.match(/^\/api\/export\/([^/]+)$/);
    const pubCommentsMatch = path.match(/^\/api\/publications\/([^/]+)\/comments$/);
    const pubSummarizeMatch = path.match(/^\/api\/publications\/([^/]+)\/summarize$/);
    const pubCiteGenMatch = path.match(/^\/api\/publications\/([^/]+)\/cite$/);
    const pubRelatedMatch = path.match(/^\/api\/publications\/([^/]+)\/related$/);

    // ═══════════════════════════════════════════
    // ─── NEW: Collections/Series ───
    // ═══════════════════════════════════════════
    if (path === '/api/collections' && method === 'GET') {
      const result = await env.DB.prepare(
        `SELECT c.*, COUNT(ci.id) as article_count
         FROM rb_collections c
         LEFT JOIN rb_collection_items ci ON ci.collection_id = c.id
         GROUP BY c.id
         ORDER BY c.sort_order ASC, c.created_at DESC`
      ).all();
      return json({ collections: result.results || [] });
    }

    if (path === '/api/collections' && method === 'POST') {
      const body = await request.json();
      if (!body.name) return json({ error: 'name is required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_collections (id, name, description, cover_image, curator, sort_order) VALUES (?, ?, ?, ?, ?, ?)'
      ).bind(id, body.name, body.description || '', body.cover_image || '', body.curator || 'blackroad', body.sort_order || 0).run();
      const collection = await env.DB.prepare('SELECT * FROM rb_collections WHERE id = ?').bind(id).first();
      return json({ collection }, 201);
    }

    const collMatch = path.match(/^\/api\/collections\/([^/]+)$/);
    const collItemsMatch = path.match(/^\/api\/collections\/([^/]+)\/items$/);

    if (collMatch && method === 'GET') {
      const coll = await env.DB.prepare('SELECT * FROM rb_collections WHERE id = ?').bind(collMatch[1]).first();
      if (!coll) return json({ error: 'Collection not found' }, 404);
      const items = await env.DB.prepare(
        `SELECT p.id, p.title, p.summary, p.category, p.author, p.reads, p.reading_time, p.doi, p.tags, p.created_at, ci.sort_order
         FROM rb_collection_items ci
         JOIN roadbook_publications p ON p.id = ci.publication_id
         WHERE ci.collection_id = ?
         ORDER BY ci.sort_order ASC, ci.added_at ASC`
      ).bind(collMatch[1]).all();
      return json({ collection: coll, articles: items.results || [] });
    }

    if (collMatch && method === 'PUT') {
      const coll = await env.DB.prepare('SELECT * FROM rb_collections WHERE id = ?').bind(collMatch[1]).first();
      if (!coll) return json({ error: 'Collection not found' }, 404);
      const body = await request.json();
      await env.DB.prepare(
        "UPDATE rb_collections SET name = ?, description = ?, cover_image = ?, sort_order = ?, updated_at = datetime('now') WHERE id = ?"
      ).bind(body.name || coll.name, body.description ?? coll.description, body.cover_image ?? coll.cover_image, body.sort_order ?? coll.sort_order, collMatch[1]).run();
      const updated = await env.DB.prepare('SELECT * FROM rb_collections WHERE id = ?').bind(collMatch[1]).first();
      return json({ collection: updated });
    }

    if (collMatch && method === 'DELETE') {
      await env.DB.prepare('DELETE FROM rb_collection_items WHERE collection_id = ?').bind(collMatch[1]).run();
      await env.DB.prepare('DELETE FROM rb_collections WHERE id = ?').bind(collMatch[1]).run();
      return json({ ok: true, deleted: collMatch[1] });
    }

    if (collItemsMatch && method === 'POST') {
      const body = await request.json();
      if (!body.publication_id) return json({ error: 'publication_id required' }, 400);
      const coll = await env.DB.prepare('SELECT id FROM rb_collections WHERE id = ?').bind(collItemsMatch[1]).first();
      if (!coll) return json({ error: 'Collection not found' }, 404);
      const pub = await env.DB.prepare('SELECT id FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      const existing = await env.DB.prepare('SELECT id FROM rb_collection_items WHERE collection_id = ? AND publication_id = ?').bind(collItemsMatch[1], body.publication_id).first();
      if (existing) return json({ error: 'Already in collection' }, 409);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rb_collection_items (id, collection_id, publication_id, sort_order) VALUES (?, ?, ?, ?)')
        .bind(id, collItemsMatch[1], body.publication_id, body.sort_order || 0).run();
      return json({ ok: true, id }, 201);
    }

    if (collItemsMatch && method === 'DELETE') {
      const body = await request.json();
      if (!body.publication_id) return json({ error: 'publication_id required' }, 400);
      await env.DB.prepare('DELETE FROM rb_collection_items WHERE collection_id = ? AND publication_id = ?')
        .bind(collItemsMatch[1], body.publication_id).run();
      return json({ ok: true });
    }

    // ═══════════════════════════════════════════
    // ─── NEW: Comments/Discussion (threaded) ───
    // ═══════════════════════════════════════════
    if (pubCommentsMatch && method === 'GET') {
      const pubId = pubCommentsMatch[1];
      const result = await env.DB.prepare(
        'SELECT * FROM rb_comments WHERE publication_id = ? ORDER BY created_at ASC'
      ).bind(pubId).all();
      const comments = buildCommentTree(result.results || []);
      return json({ publication_id: pubId, comments, total: (result.results || []).length });
    }

    if (pubCommentsMatch && method === 'POST') {
      const pubId = pubCommentsMatch[1];
      const pub = await env.DB.prepare('SELECT id FROM roadbook_publications WHERE id = ?').bind(pubId).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      const body = await request.json();
      if (!body.body || !body.body.trim()) return json({ error: 'Comment body is required' }, 400);
      const id = crypto.randomUUID();
      const author = (body.author || 'Anonymous').slice(0, 64);
      const parentId = body.parent_id || null;
      if (parentId) {
        const parent = await env.DB.prepare('SELECT id FROM rb_comments WHERE id = ? AND publication_id = ?').bind(parentId, pubId).first();
        if (!parent) return json({ error: 'Parent comment not found' }, 404);
      }
      await env.DB.prepare(
        'INSERT INTO rb_comments (id, publication_id, parent_id, author, body) VALUES (?, ?, ?, ?, ?)'
      ).bind(id, pubId, parentId, author, body.body.trim().slice(0, 5000)).run();

      // Award small RoadCoin for engagement
      await env.DB.prepare('INSERT INTO roadbook_earnings (id, publication_id, amount, reason) VALUES (?, ?, ?, ?)')
        .bind(crypto.randomUUID(), pubId, 0.1, 'comment').run();
      await env.DB.prepare('UPDATE roadbook_publications SET roadcoin_earned = roadcoin_earned + 0.1 WHERE id = ?').bind(pubId).run();

      return json({ ok: true, id, publication_id: pubId, author, parent_id: parentId }, 201);
    }

    // ═══════════════════════════════════════════
    // ─── NEW: Bookmarks/Reading List ───
    // ═══════════════════════════════════════════
    if (path === '/api/bookmarks' && method === 'GET') {
      const userId = url.searchParams.get('user');
      if (!userId) return json({ error: 'user param required' }, 400);
      const folder = url.searchParams.get('folder');
      let query = `SELECT b.*, p.title, p.summary, p.category, p.reading_time, p.doi,
                   COALESCE(pr.scroll_pct, 0) as progress_pct
                   FROM rb_bookmarks b
                   JOIN roadbook_publications p ON p.id = b.publication_id
                   LEFT JOIN rb_progress pr ON pr.publication_id = b.publication_id AND pr.user_id = b.user_id
                   WHERE b.user_id = ?`;
      const params = [userId];
      if (folder) {
        query += ' AND b.folder = ?';
        params.push(folder);
      }
      query += ' ORDER BY b.created_at DESC';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ bookmarks: result.results || [] });
    }

    if (path === '/api/bookmarks' && method === 'POST') {
      const body = await request.json();
      if (!body.user || !body.publication_id) return json({ error: 'user and publication_id required' }, 400);
      const pub = await env.DB.prepare('SELECT id FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      // Toggle: if already bookmarked, remove it
      const existing = await env.DB.prepare('SELECT id FROM rb_bookmarks WHERE user_id = ? AND publication_id = ?').bind(body.user, body.publication_id).first();
      if (existing) {
        await env.DB.prepare('DELETE FROM rb_bookmarks WHERE id = ?').bind(existing.id).run();
        return json({ ok: true, action: 'removed', publication_id: body.publication_id });
      }
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_bookmarks (id, user_id, publication_id, folder, notes) VALUES (?, ?, ?, ?, ?)'
      ).bind(id, body.user, body.publication_id, body.folder || 'default', body.notes || '').run();
      return json({ ok: true, action: 'bookmarked', id, publication_id: body.publication_id }, 201);
    }

    if (path === '/api/bookmarks' && method === 'DELETE') {
      const body = await request.json();
      if (!body.user || !body.publication_id) return json({ error: 'user and publication_id required' }, 400);
      await env.DB.prepare('DELETE FROM rb_bookmarks WHERE user_id = ? AND publication_id = ?').bind(body.user, body.publication_id).run();
      return json({ ok: true, removed: body.publication_id });
    }

    const bookmarkFoldersMatch = path === '/api/bookmarks/folders';
    if (bookmarkFoldersMatch && method === 'GET') {
      const userId = url.searchParams.get('user');
      if (!userId) return json({ error: 'user param required' }, 400);
      const result = await env.DB.prepare(
        'SELECT folder, COUNT(*) as count FROM rb_bookmarks WHERE user_id = ? GROUP BY folder ORDER BY folder'
      ).bind(userId).all();
      return json({ folders: result.results || [] });
    }

    // ═══════════════════════════════════════════
    // ─── NEW: Reading Progress ───
    // ═══════════════════════════════════════════
    if (path === '/api/progress' && method === 'GET') {
      const userId = url.searchParams.get('user');
      const pubId = url.searchParams.get('publication_id');
      if (!userId) return json({ error: 'user param required' }, 400);
      if (pubId) {
        const progress = await env.DB.prepare(
          'SELECT * FROM rb_progress WHERE user_id = ? AND publication_id = ?'
        ).bind(userId, pubId).first();
        return json({ progress: progress || { scroll_pct: 0, completed: 0 } });
      }
      // All progress for user
      const result = await env.DB.prepare(
        `SELECT pr.*, p.title, p.reading_time
         FROM rb_progress pr
         JOIN roadbook_publications p ON p.id = pr.publication_id
         WHERE pr.user_id = ?
         ORDER BY pr.updated_at DESC`
      ).bind(userId).all();
      return json({ progress: result.results || [] });
    }

    if (path === '/api/progress' && method === 'POST') {
      const body = await request.json();
      if (!body.user || !body.publication_id) return json({ error: 'user and publication_id required' }, 400);
      const scrollPct = Math.min(100, Math.max(0, parseFloat(body.scroll_pct) || 0));
      const completed = scrollPct >= 95 ? 1 : 0;

      const existing = await env.DB.prepare(
        'SELECT id FROM rb_progress WHERE user_id = ? AND publication_id = ?'
      ).bind(body.user, body.publication_id).first();

      if (existing) {
        await env.DB.prepare(
          "UPDATE rb_progress SET scroll_pct = ?, completed = ?, updated_at = datetime('now') WHERE id = ?"
        ).bind(scrollPct, completed, existing.id).run();
      } else {
        const id = crypto.randomUUID();
        await env.DB.prepare(
          'INSERT INTO rb_progress (id, user_id, publication_id, scroll_pct, completed) VALUES (?, ?, ?, ?, ?)'
        ).bind(id, body.user, body.publication_id, scrollPct, completed).run();
      }
      return json({ ok: true, scroll_pct: scrollPct, completed });
    }

    // ═══════════════════════════════════════════
    // ─── NEW: AI Summarization ───
    // ═══════════════════════════════════════════
    if (pubSummarizeMatch && method === 'GET') {
      const pubId = pubSummarizeMatch[1];
      const pub = await env.DB.prepare('SELECT * FROM roadbook_publications WHERE id = ?').bind(pubId).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);

      try {
        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `${AGENTS.calliope.prompt} Generate a structured summary with: 1) A 2-3 sentence overview, 2) 3-5 key takeaways as a JSON array of strings. Return JSON in this format: {"summary": "...", "key_takeaways": ["...", "..."]}. Return ONLY valid JSON.` },
            { role: 'user', content: `Title: ${pub.title}\nCategory: ${pub.category}\n\n${pub.content.substring(0, 4000)}` },
          ],
          max_tokens: 500,
        });

        let parsed;
        try {
          parsed = JSON.parse(aiResult.response);
        } catch {
          parsed = { summary: aiResult.response || pub.summary || '', key_takeaways: [] };
        }

        return json({
          publication_id: pubId,
          title: pub.title,
          summary: parsed.summary || pub.summary,
          key_takeaways: parsed.key_takeaways || [],
          agent: 'Calliope',
          reading_time: pub.reading_time,
        });
      } catch (e) {
        return json({
          publication_id: pubId,
          title: pub.title,
          summary: pub.summary || pub.content.substring(0, 300),
          key_takeaways: [],
          agent: 'Calliope',
          error: 'AI summarization unavailable, using existing summary',
        });
      }
    }

    // ═══════════════════════════════════════════
    // ─── NEW: Citation Generator (APA/MLA/Chicago/BibTeX) ───
    // ─── NOTE: pubCiteMatch also matches this, handled below ───
    // ═══════════════════════════════════════════

    // ═══════════════════════════════════════════
    // ─── NEW: Related Articles (AI-suggested) ───
    // ═══════════════════════════════════════════
    if (pubRelatedMatch && method === 'GET') {
      const pubId = pubRelatedMatch[1];
      const pub = await env.DB.prepare('SELECT * FROM roadbook_publications WHERE id = ?').bind(pubId).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);

      // Get candidate articles (same category first, then all)
      const candidates = await env.DB.prepare(
        `SELECT id, title, summary, category, tags, reading_time, reads, created_at
         FROM roadbook_publications
         WHERE id != ? AND visibility = 'public'
         ORDER BY
           CASE WHEN category = ? THEN 0 ELSE 1 END,
           created_at DESC
         LIMIT 30`
      ).bind(pubId, pub.category).all();

      const candidateList = candidates.results || [];
      if (!candidateList.length) return json({ related: [] });

      // Use AI to rank by relevance
      try {
        const candidateSummaries = candidateList.map((c, i) =>
          `${i}: "${c.title}" (${c.category}) - ${(c.summary || '').slice(0, 100)}`
        ).join('\n');

        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `${AGENTS.elias.prompt} Given a source article and a list of candidates, return the indices of the 5 most related articles as a JSON array of numbers. Consider topic overlap, category, and thematic connection. Return ONLY a JSON array like [0, 3, 7, 2, 5].` },
            { role: 'user', content: `Source: "${pub.title}" (${pub.category})\nSummary: ${(pub.summary || '').slice(0, 200)}\n\nCandidates:\n${candidateSummaries}` },
          ],
          max_tokens: 100,
        });

        let indices;
        try {
          indices = JSON.parse(aiResult.response);
        } catch {
          // Fallback: just take first 5
          indices = [0, 1, 2, 3, 4];
        }

        const related = indices
          .filter(i => i >= 0 && i < candidateList.length)
          .slice(0, 5)
          .map((idx, rank) => ({
            ...candidateList[idx],
            similarity_score: 1 - (rank * 0.15),
          }));

        return json({ publication_id: pubId, related, agent: 'Elias' });
      } catch {
        // Fallback: category match + recency
        const related = candidateList.slice(0, 5).map((c, rank) => ({
          ...c,
          similarity_score: c.category === pub.category ? 0.8 - (rank * 0.1) : 0.5 - (rank * 0.1),
        }));
        return json({ publication_id: pubId, related, agent: 'Elias' });
      }
    }

    // ═══════════════════════════════════════════
    // ─── NEW: Newsletter ───
    // ═══════════════════════════════════════════
    if (path === '/api/newsletter/subscribe' && method === 'POST') {
      const body = await request.json();
      if (!body.email) return json({ error: 'email required' }, 400);
      const email = body.email.trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'Invalid email' }, 400);

      const existing = await env.DB.prepare('SELECT id, subscribed FROM rb_newsletter_subscribers WHERE email = ?').bind(email).first();
      if (existing) {
        if (existing.subscribed) return json({ ok: true, message: 'Already subscribed' });
        await env.DB.prepare("UPDATE rb_newsletter_subscribers SET subscribed = 1, unsubscribed_at = NULL WHERE id = ?").bind(existing.id).run();
        return json({ ok: true, message: 'Re-subscribed' });
      }

      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rb_newsletter_subscribers (id, email, name) VALUES (?, ?, ?)')
        .bind(id, email, body.name || '').run();
      return json({ ok: true, message: 'Subscribed to RoadBook newsletter', id }, 201);
    }

    if (path === '/api/newsletter/unsubscribe' && method === 'POST') {
      const body = await request.json();
      if (!body.email) return json({ error: 'email required' }, 400);
      await env.DB.prepare(
        "UPDATE rb_newsletter_subscribers SET subscribed = 0, unsubscribed_at = datetime('now') WHERE email = ?"
      ).bind(body.email.trim().toLowerCase()).run();
      return json({ ok: true, message: 'Unsubscribed' });
    }

    if (path === '/api/newsletter/subscribers' && method === 'GET') {
      const result = await env.DB.prepare('SELECT id, email, name, created_at FROM rb_newsletter_subscribers WHERE subscribed = 1 ORDER BY created_at DESC').all();
      return json({ subscribers: result.results || [], total: (result.results || []).length });
    }

    if (path === '/api/newsletter/editions' && method === 'GET') {
      const result = await env.DB.prepare('SELECT * FROM rb_newsletter_editions ORDER BY created_at DESC LIMIT 50').all();
      return json({ editions: result.results || [] });
    }

    if (path === '/api/newsletter/editions' && method === 'POST') {
      const body = await request.json();

      // Auto-generate a weekly digest if no body provided
      if (!body.subject && !body.body) {
        // Get articles from last 7 days
        const recent = await env.DB.prepare(
          "SELECT id, title, summary, category, reading_time, reads FROM roadbook_publications WHERE visibility = 'public' AND created_at >= datetime('now', '-7 days') ORDER BY reads DESC LIMIT 10"
        ).all();
        const articles = recent.results || [];

        if (!articles.length) return json({ error: 'No recent articles to include in digest' }, 400);

        // Generate digest with AI
        let digestBody;
        try {
          const articleList = articles.map(a => `- "${a.title}" (${a.category}, ${a.reading_time} min, ${a.reads} reads): ${(a.summary || '').slice(0, 100)}`).join('\n');
          const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `${AGENTS.calliope.prompt} Write a brief, engaging newsletter digest summarizing the week's publications on RoadBook. Include a welcome line, brief highlights of each article, and a closing. Keep it concise and warm. Use plain text, no HTML.` },
              { role: 'user', content: `This week's articles:\n${articleList}` },
            ],
            max_tokens: 600,
          });
          digestBody = aiResult.response || articleList;
        } catch {
          digestBody = articles.map(a => `${a.title} - ${a.summary || ''}`).join('\n\n');
        }

        const id = crypto.randomUUID();
        const subject = `RoadBook Weekly Digest - ${new Date().toLocaleDateString()}`;
        const articleIds = JSON.stringify(articles.map(a => a.id));
        await env.DB.prepare(
          'INSERT INTO rb_newsletter_editions (id, subject, body, article_ids) VALUES (?, ?, ?, ?)'
        ).bind(id, subject, digestBody, articleIds).run();
        return json({ edition: { id, subject, body: digestBody, article_ids: articleIds }, agent: 'Calliope' }, 201);
      }

      // Manual edition
      if (!body.subject || !body.body) return json({ error: 'subject and body required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_newsletter_editions (id, subject, body, article_ids) VALUES (?, ?, ?, ?)'
      ).bind(id, body.subject, body.body, JSON.stringify(body.article_ids || [])).run();
      return json({ edition: { id, subject: body.subject } }, 201);
    }

    // ─── Publication Versions ───
    if (pubVersionsMatch && method === 'GET') {
      const pubId = pubVersionsMatch[1];
      const pub = await env.DB.prepare('SELECT id, title, version FROM roadbook_publications WHERE id = ?').bind(pubId).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      const versions = await env.DB.prepare(
        'SELECT id, version, title, hash, prev_hash, created_at FROM rb_versions WHERE publication_id = ? ORDER BY version DESC'
      ).bind(pubId).all();
      return json({ publication_id: pubId, current_version: pub.version, versions: versions.results || [] });
    }

    // ─── Publication Citations (who cited this) ───
    if (pubCitationsMatch && method === 'GET') {
      const pubId = pubCitationsMatch[1];
      const pub = await env.DB.prepare('SELECT id, title FROM roadbook_publications WHERE id = ?').bind(pubId).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);

      // Who cited this publication
      const citedBy = await env.DB.prepare(
        'SELECT c.id, c.context, c.created_at, p.id as source_pub_id, p.title as source_title, p.author as source_author FROM rb_citations c JOIN roadbook_publications p ON c.source_id = p.id WHERE c.cited_id = ? ORDER BY c.created_at DESC'
      ).bind(pubId).all();

      // What this publication cites
      const cites = await env.DB.prepare(
        'SELECT c.id, c.context, c.created_at, p.id as cited_pub_id, p.title as cited_title, p.author as cited_author FROM rb_citations c JOIN roadbook_publications p ON c.cited_id = p.id WHERE c.source_id = ? ORDER BY c.created_at DESC'
      ).bind(pubId).all();

      return json({ publication: pub, cited_by: citedBy.results || [], cites: cites.results || [], total_cited_by: (citedBy.results || []).length, total_cites: (cites.results || []).length });
    }

    // ─── Cite another publication (bidirectional link) + Citation Format Generator ───
    if (pubCiteMatch && method === 'POST') {
      const sourceId = pubCiteMatch[1];
      const body = await request.json();

      // If no cited_id, this is a citation format request
      if (!body.cited_id) {
        const pub = await env.DB.prepare('SELECT * FROM roadbook_publications WHERE id = ?').bind(sourceId).first();
        if (!pub) return json({ error: 'Publication not found' }, 404);
        return json({ publication_id: sourceId, citations: generateCitations(pub) });
      }

      const source = await env.DB.prepare('SELECT id, title FROM roadbook_publications WHERE id = ?').bind(sourceId).first();
      if (!source) return json({ error: 'Source publication not found' }, 404);
      const cited = await env.DB.prepare('SELECT id, title FROM roadbook_publications WHERE id = ?').bind(body.cited_id).first();
      if (!cited) return json({ error: 'Cited publication not found' }, 404);
      if (sourceId === body.cited_id) return json({ error: 'Cannot cite self' }, 400);

      // Check for duplicate
      const existing = await env.DB.prepare('SELECT id FROM rb_citations WHERE source_id = ? AND cited_id = ?').bind(sourceId, body.cited_id).first();
      if (existing) return json({ error: 'Citation already exists' }, 409);

      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rb_citations (id, source_id, cited_id, context) VALUES (?, ?, ?, ?)')
        .bind(id, sourceId, body.cited_id, (body.context || '').slice(0, 500)).run();

      // Update citation count on the cited publication
      await env.DB.prepare('UPDATE roadbook_publications SET citations = citations + 1 WHERE id = ?').bind(body.cited_id).run();

      // Award RoadCoin for citation
      await env.DB.prepare('INSERT INTO roadbook_earnings (id, publication_id, amount, reason) VALUES (?, ?, ?, ?)')
        .bind(crypto.randomUUID(), body.cited_id, 0.25, 'citation_received').run();
      await env.DB.prepare('UPDATE roadbook_publications SET roadcoin_earned = roadcoin_earned + 0.25 WHERE id = ?').bind(body.cited_id).run();
      stampChain('cited', body.cited_id, source.title.slice(0,100)).catch(()=>{});
      earnCoin('author', 'citation', 0.5).catch(()=>{});

      return json({ ok: true, id, source: { id: source.id, title: source.title }, cited: { id: cited.id, title: cited.title }, context: body.context || null }, 201);
    }

    // ─── Citation Format Generator (GET) ───
    if (pubCiteGenMatch && method === 'GET') {
      const pubId = pubCiteGenMatch[1];
      const pub = await env.DB.prepare('SELECT * FROM roadbook_publications WHERE id = ?').bind(pubId).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      const format = url.searchParams.get('format') || 'all';
      const citations = generateCitations(pub);
      if (format !== 'all' && citations[format]) {
        return json({ publication_id: pubId, format, citation: citations[format] });
      }
      return json({ publication_id: pubId, citations });
    }

    // ─── Peer Review (Atticus personality) ───
    if (pubReviewMatch && method === 'POST') {
      const pubId = pubReviewMatch[1];
      const pub = await env.DB.prepare('SELECT * FROM roadbook_publications WHERE id = ?').bind(pubId).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      const body = await request.json();
      if (!body.reviewer) return json({ error: 'reviewer required' }, 400);
      const rating = Math.min(5, Math.max(1, parseInt(body.rating) || 3));
      const comments = (body.comments || '').slice(0, 2000);

      // Atticus AI analysis of the review + publication
      let aiAnalysis = '';
      try {
        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `${AGENTS.atticus.prompt} Analyze this peer review in context of the publication. Provide a brief assessment: Is the review fair? What are the key strengths and weaknesses identified? Any blind spots? 3-4 sentences max.` },
            { role: 'user', content: `Publication: "${pub.title}"\nSummary: ${pub.summary || pub.content.substring(0, 500)}\n\nReview by ${body.reviewer} (rating: ${rating}/5):\n${comments}` },
          ],
          max_tokens: 250,
        });
        if (aiResult.response) aiAnalysis = aiResult.response.trim();
      } catch (e) {
        aiAnalysis = '';
      }

      const id = crypto.randomUUID();
      await env.DB.prepare("INSERT INTO rb_reviews (id, publication_id, reviewer, rating, comments, ai_analysis) VALUES (?, ?, ?, ?, ?, ?)")
        .bind(id, pubId, body.reviewer.slice(0, 64), rating, comments, aiAnalysis).run();

      // Award RoadCoin for receiving a review
      await env.DB.prepare('INSERT INTO roadbook_earnings (id, publication_id, amount, reason) VALUES (?, ?, ?, ?)')
        .bind(crypto.randomUUID(), pubId, 0.5, 'peer_review_received').run();
      await env.DB.prepare('UPDATE roadbook_publications SET roadcoin_earned = roadcoin_earned + 0.5 WHERE id = ?').bind(pubId).run();

      return json({ ok: true, id, publication_id: pubId, reviewer: body.reviewer, rating, comments, ai_analysis: aiAnalysis, agent: 'Atticus' }, 201);
    }

    // ─── Get reviews for a publication ───
    const pubReviewsGetMatch = path.match(/^\/api\/publications\/([^/]+)\/reviews$/);
    if (pubReviewsGetMatch && method === 'GET') {
      const reviews = await env.DB.prepare('SELECT * FROM rb_reviews WHERE publication_id = ? ORDER BY created_at DESC').bind(pubReviewsGetMatch[1]).all();
      const avgRating = await env.DB.prepare('SELECT AVG(rating) as avg, COUNT(*) as count FROM rb_reviews WHERE publication_id = ?').bind(pubReviewsGetMatch[1]).first();
      return json({ publication_id: pubReviewsGetMatch[1], reviews: reviews.results || [], average_rating: avgRating?.avg ? Math.round(avgRating.avg * 10) / 10 : null, total_reviews: avgRating?.count || 0 });
    }

    // ─── Export publication ───
    if (exportMatch && method === 'POST') {
      const pubId = exportMatch[1];
      const pub = await env.DB.prepare('SELECT * FROM roadbook_publications WHERE id = ?').bind(pubId).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      const body = await request.json().catch(() => ({}));
      const format = body.format || 'markdown';

      const provenance = `\n\n---\nProvenance: RoadBook (BlackRoad OS)\nDOI: ${pub.doi || generateDOI(pub.id)}\nHash: ${pub.provenance_hash || 'unverified'}\nVersion: ${pub.version}\nPublished: ${pub.created_at}\nLicense: ${pub.license}`;

      if (format === 'markdown') {
        const md = `# ${pub.title}\n\n*By ${pub.author} | Reading time: ${pub.reading_time || estimateReadingTime(pub.content)} min*\n\n> ${pub.summary || ''}\n\n${pub.content}${provenance}`;
        return new Response(md, { status: 200, headers: { ...CORS, 'Content-Type': 'text/markdown; charset=utf-8', 'Content-Disposition': `attachment; filename="${pub.title.replace(/[^a-zA-Z0-9]/g, '_')}.md"` } });
      } else if (format === 'html') {
        const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${pub.title}</title><style>body{font-family:Georgia,serif;max-width:700px;margin:40px auto;padding:0 20px;color:#333;line-height:1.7}h1{font-size:28px}blockquote{border-left:3px solid #ccc;padding-left:16px;color:#666;font-style:italic}.meta{color:#888;font-size:14px}.provenance{margin-top:40px;padding-top:20px;border-top:1px solid #eee;font-size:12px;color:#999}</style></head><body><h1>${pub.title}</h1><p class="meta">By ${pub.author} | ${pub.reading_time || 1} min read | v${pub.version}</p><blockquote>${pub.summary || ''}</blockquote><div>${pub.content.replace(/\n/g, '<br>')}</div><div class="provenance">RoadBook (BlackRoad OS) | DOI: ${pub.doi || generateDOI(pub.id)} | Hash: ${(pub.provenance_hash || '').slice(0, 16)}... | ${pub.license}</div></body></html>`;
        return new Response(html, { status: 200, headers: { ...CORS, 'Content-Type': 'text/html; charset=utf-8', 'Content-Disposition': `attachment; filename="${pub.title.replace(/[^a-zA-Z0-9]/g, '_')}.html"` } });
      } else {
        // JSON export with full provenance
        const versions = await env.DB.prepare('SELECT version, hash, prev_hash, created_at FROM rb_versions WHERE publication_id = ? ORDER BY version ASC').bind(pubId).all();
        const citations = await env.DB.prepare('SELECT c.id, p.title, p.author, c.created_at FROM rb_citations c JOIN roadbook_publications p ON c.cited_id = p.id WHERE c.source_id = ?').bind(pubId).all();
        return json({
          publication: pub,
          provenance: { doi: pub.doi || generateDOI(pub.id), hash: pub.provenance_hash, version_chain: versions.results || [] },
          citations: citations.results || [],
          exported_at: new Date().toISOString(),
          format: 'json',
        });
      }
    }

    // Single publication
    if (pubMatch && method === 'GET') {
      const pub = await env.DB.prepare('SELECT * FROM roadbook_publications WHERE id = ?').bind(pubMatch[1]).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);

      // Increment reads
      await env.DB.prepare('UPDATE roadbook_publications SET reads = reads + 1 WHERE id = ?').bind(pubMatch[1]).run();

      const versions = await env.DB.prepare(
        'SELECT id, version, title, hash, created_at FROM rb_versions WHERE publication_id = ? ORDER BY version DESC'
      ).bind(pubMatch[1]).all();

      const reviews = await env.DB.prepare('SELECT id, reviewer, rating, created_at FROM rb_reviews WHERE publication_id = ? ORDER BY created_at DESC LIMIT 5').bind(pubMatch[1]).all();

      // Include collection membership
      const collections = await env.DB.prepare(
        'SELECT c.id, c.name FROM rb_collection_items ci JOIN rb_collections c ON c.id = ci.collection_id WHERE ci.publication_id = ?'
      ).bind(pubMatch[1]).all();

      return json({
        publication: pub,
        provenance: { hash: pub.provenance_hash, doi: pub.doi, versions: versions.results || [] },
        reviews: reviews.results || [],
        collections: collections.results || [],
      });
    }

    // ─── Update publication (new version with RoadChain hash) ───
    if (pubMatch && method === 'PUT') {
      const pub = await env.DB.prepare('SELECT * FROM roadbook_publications WHERE id = ?').bind(pubMatch[1]).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);

      const body = await request.json();
      const newVersion = pub.version + 1;
      const newContent = body.content || pub.content;
      const newTitle = body.title || pub.title;
      const hash = await generateHash(newContent);
      const prevHash = pub.provenance_hash;
      const readingTime = estimateReadingTime(newContent);

      // Calliope regenerates summary if content changed
      let summary = body.summary || pub.summary;
      if (body.content && !body.summary) {
        try {
          const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `${AGENTS.calliope.prompt} Write a concise 2-3 sentence abstract for this updated publication. Return ONLY the summary.` },
              { role: 'user', content: `Title: ${newTitle}\n\n${newContent.substring(0, 3000)}` },
            ],
            max_tokens: 250,
          });
          if (aiResult.response) summary = aiResult.response.trim();
        } catch (e) { /* keep existing summary */ }
      }

      await env.DB.prepare(
        "UPDATE roadbook_publications SET title = ?, content = ?, summary = ?, version = ?, provenance_hash = ?, reading_time = ?, updated_at = datetime('now') WHERE id = ?"
      ).bind(newTitle, newContent, summary, newVersion, hash, readingTime, pubMatch[1]).run();

      // Store version with chain hash linking
      await env.DB.prepare(
        'INSERT INTO rb_versions (id, publication_id, version, title, content, summary, hash, prev_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), pubMatch[1], newVersion, newTitle, newContent, summary, hash, prevHash).run();

      // Legacy versions table
      await env.DB.prepare(
        'INSERT INTO roadbook_versions (id, publication_id, version, title, content) VALUES (?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), pubMatch[1], newVersion, newTitle, newContent).run();

      const updated = await env.DB.prepare('SELECT * FROM roadbook_publications WHERE id = ?').bind(pubMatch[1]).first();
      return json({ publication: updated, version: newVersion, hash, prev_hash: prevHash, agent: 'Calliope' });
    }

    // ─── Discover (enhanced with semantic search, category, sort) ───
    if (path === '/api/discover' && method === 'GET') {
      const q = url.searchParams.get('q');
      const category = url.searchParams.get('category');
      const sort = url.searchParams.get('sort') || 'recent';
      let query = "SELECT id, title, summary, category, author, reads, citations, reading_time, doi, tags, created_at FROM roadbook_publications WHERE visibility = 'public'";
      const params = [];
      if (q) {
        query += ' AND (title LIKE ? OR summary LIKE ? OR content LIKE ?)';
        params.push(`%${q}%`, `%${q}%`, `%${q}%`);
      }
      if (category) {
        query += ' AND category = ?';
        params.push(category);
      }
      if (sort === 'trending') {
        query += ' ORDER BY (reads + citations * 10) DESC';
      } else if (sort === 'cited') {
        query += ' ORDER BY citations DESC';
      } else {
        query += ' ORDER BY created_at DESC';
      }
      query += ' LIMIT 50';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ publications: result.results, query: q, category, sort });
    }

    // ─── Discover Trending (top by views + citations in last 7 days) ───
    if (path === '/api/discover/trending' && method === 'GET') {
      const result = await env.DB.prepare(
        "SELECT id, title, summary, category, author, reads, citations, reading_time, doi, tags, created_at FROM roadbook_publications WHERE visibility = 'public' AND created_at >= datetime('now', '-7 days') ORDER BY (reads + citations * 10) DESC LIMIT 20"
      ).all();
      // If not enough recent, fall back to all-time trending
      let trending = result.results || [];
      if (trending.length < 5) {
        const allTime = await env.DB.prepare(
          "SELECT id, title, summary, category, author, reads, citations, reading_time, doi, tags, created_at FROM roadbook_publications WHERE visibility = 'public' ORDER BY (reads + citations * 10) DESC LIMIT 20"
        ).all();
        trending = allTime.results || [];
      }
      return json({ trending, period: trending.length >= 5 ? '7_days' : 'all_time' });
    }

    // Citation graph (legacy route)
    const citationMatch = path.match(/^\/api\/citations\/([^/]+)$/);
    if (citationMatch && method === 'GET') {
      const pub = await env.DB.prepare('SELECT id, title FROM roadbook_publications WHERE id = ?').bind(citationMatch[1]).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);

      const citedBy = await env.DB.prepare(
        'SELECT c.id, c.context, c.created_at, p.id as pub_id, p.title FROM roadbook_citations c JOIN roadbook_publications p ON c.source_id = p.id WHERE c.target_id = ?'
      ).bind(citationMatch[1]).all();

      const cites = await env.DB.prepare(
        'SELECT c.id, c.context, c.created_at, p.id as pub_id, p.title FROM roadbook_citations c JOIN roadbook_publications p ON c.target_id = p.id WHERE c.source_id = ?'
      ).bind(citationMatch[1]).all();

      return json({
        publication: pub,
        cited_by: citedBy.results,
        cites: cites.results,
      });
    }

    // Earnings
    if (path === '/api/earnings' && method === 'GET') {
      const result = await env.DB.prepare(
        'SELECT e.*, p.title as publication_title FROM roadbook_earnings e LEFT JOIN roadbook_publications p ON e.publication_id = p.id ORDER BY e.created_at DESC LIMIT 50'
      ).all();
      const total = await env.DB.prepare('SELECT COALESCE(SUM(amount), 0) as total FROM roadbook_earnings').first();
      return json({ earnings: result.results, total_roadcoin: total.total });
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 1: Peer Review System (/api/reviews) ───
    // ═══════════════════════════════════════════════════════════════

    // Submit article for peer review
    if (path === '/api/reviews/submit' && method === 'POST') {
      const body = await request.json();
      if (!body.publication_id || !body.submitted_by) return json({ error: 'publication_id and submitted_by required' }, 400);
      const pub = await env.DB.prepare('SELECT id, title FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      const existing = await env.DB.prepare('SELECT id FROM rb_review_submissions WHERE publication_id = ? AND status != ?').bind(body.publication_id, 'closed').first();
      if (existing) return json({ error: 'Article already has an active review submission' }, 409);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_review_submissions (id, publication_id, submitted_by) VALUES (?, ?, ?)'
      ).bind(id, body.publication_id, body.submitted_by).run();
      return json({ ok: true, submission_id: id, publication_id: body.publication_id, status: 'submitted' }, 201);
    }

    // Assign reviewer
    if (path === '/api/reviews/assign' && method === 'POST') {
      const body = await request.json();
      if (!body.publication_id || !body.reviewer_id) return json({ error: 'publication_id and reviewer_id required' }, 400);
      const submission = await env.DB.prepare('SELECT id FROM rb_review_submissions WHERE publication_id = ? AND status = ?').bind(body.publication_id, 'submitted').first();
      if (!submission) return json({ error: 'No active review submission for this article' }, 404);
      const existingReview = await env.DB.prepare('SELECT id FROM rb_peer_reviews WHERE publication_id = ? AND reviewer_id = ?').bind(body.publication_id, body.reviewer_id).first();
      if (existingReview) return json({ error: 'Reviewer already assigned' }, 409);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_peer_reviews (id, publication_id, reviewer_id, status) VALUES (?, ?, ?, ?)'
      ).bind(id, body.publication_id, body.reviewer_id, 'pending').run();
      await env.DB.prepare('UPDATE rb_review_submissions SET reviewer_count = reviewer_count + 1 WHERE id = ?').bind(submission.id).run();
      return json({ ok: true, review_id: id, reviewer_id: body.reviewer_id, status: 'pending' }, 201);
    }

    // Submit structured review feedback
    const peerReviewMatch = path.match(/^\/api\/reviews\/([^/]+)\/feedback$/);
    if (peerReviewMatch && method === 'POST') {
      const reviewId = peerReviewMatch[1];
      const review = await env.DB.prepare('SELECT * FROM rb_peer_reviews WHERE id = ?').bind(reviewId).first();
      if (!review) return json({ error: 'Review not found' }, 404);
      if (review.status === 'completed') return json({ error: 'Review already completed' }, 400);
      const body = await request.json();
      if (!body.decision) return json({ error: 'decision required (accept/reject/revise)' }, 400);
      if (!['accept', 'reject', 'revise'].includes(body.decision)) return json({ error: 'decision must be accept, reject, or revise' }, 400);

      const clarity = Math.min(5, Math.max(1, parseInt(body.clarity_score) || 3));
      const rigor = Math.min(5, Math.max(1, parseInt(body.rigor_score) || 3));
      const originality = Math.min(5, Math.max(1, parseInt(body.originality_score) || 3));
      const impact = Math.min(5, Math.max(1, parseInt(body.impact_score) || 3));

      // Atticus meta-review
      let aiMeta = '';
      try {
        const pub = await env.DB.prepare('SELECT title, summary FROM roadbook_publications WHERE id = ?').bind(review.publication_id).first();
        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `${AGENTS.atticus.prompt} Analyze this peer review feedback. Is it thorough and fair? Note any potential biases. 2-3 sentences.` },
            { role: 'user', content: `Article: "${pub?.title}"\nDecision: ${body.decision}\nClarity: ${clarity}/5, Rigor: ${rigor}/5, Originality: ${originality}/5, Impact: ${impact}/5\nStrengths: ${body.strengths || 'N/A'}\nWeaknesses: ${body.weaknesses || 'N/A'}\nSummary: ${body.summary_comment || 'N/A'}` },
          ],
          max_tokens: 200,
        });
        if (aiResult.response) aiMeta = aiResult.response.trim();
      } catch {}

      await env.DB.prepare(
        "UPDATE rb_peer_reviews SET status = 'completed', decision = ?, clarity_score = ?, rigor_score = ?, originality_score = ?, impact_score = ?, summary_comment = ?, strengths = ?, weaknesses = ?, suggestions = ?, ai_meta_review = ?, completed_at = datetime('now') WHERE id = ?"
      ).bind(body.decision, clarity, rigor, originality, impact, (body.summary_comment || '').slice(0, 3000), (body.strengths || '').slice(0, 2000), (body.weaknesses || '').slice(0, 2000), (body.suggestions || '').slice(0, 2000), aiMeta, reviewId).run();

      // Update submission counts
      const decisionCol = body.decision + '_count';
      await env.DB.prepare(`UPDATE rb_review_submissions SET ${decisionCol} = ${decisionCol} + 1 WHERE publication_id = ?`).bind(review.publication_id).run();

      // Award RoadCoin for reviewing
      await env.DB.prepare('INSERT INTO roadbook_earnings (id, publication_id, amount, reason) VALUES (?, ?, ?, ?)')
        .bind(crypto.randomUUID(), review.publication_id, 0.75, 'peer_review_completed').run();

      return json({ ok: true, review_id: reviewId, decision: body.decision, scores: { clarity, rigor, originality, impact }, ai_meta_review: aiMeta, agent: 'Atticus' });
    }

    // List reviews for a publication or all
    if (path === '/api/reviews' && method === 'GET') {
      const pubId = url.searchParams.get('publication_id');
      const status = url.searchParams.get('status');
      let query = 'SELECT r.*, p.title as publication_title FROM rb_peer_reviews r JOIN roadbook_publications p ON p.id = r.publication_id WHERE 1=1';
      const params = [];
      if (pubId) { query += ' AND r.publication_id = ?'; params.push(pubId); }
      if (status) { query += ' AND r.status = ?'; params.push(status); }
      query += ' ORDER BY r.assigned_at DESC LIMIT 50';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ reviews: result.results || [] });
    }

    // Review submissions status
    if (path === '/api/reviews/submissions' && method === 'GET') {
      const result = await env.DB.prepare(
        'SELECT s.*, p.title as publication_title FROM rb_review_submissions s JOIN roadbook_publications p ON p.id = s.publication_id ORDER BY s.created_at DESC LIMIT 50'
      ).all();
      return json({ submissions: result.results || [] });
    }

    // Final decision on submission
    if (path === '/api/reviews/decide' && method === 'POST') {
      const body = await request.json();
      if (!body.submission_id || !body.decision) return json({ error: 'submission_id and decision required' }, 400);
      if (!['accepted', 'rejected', 'revision_requested'].includes(body.decision)) return json({ error: 'decision must be accepted, rejected, or revision_requested' }, 400);
      await env.DB.prepare(
        "UPDATE rb_review_submissions SET final_decision = ?, status = 'closed', decided_at = datetime('now') WHERE id = ?"
      ).bind(body.decision, body.submission_id).run();
      return json({ ok: true, submission_id: body.submission_id, final_decision: body.decision });
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 2: Reading Challenges (/api/challenges) ───
    // ═══════════════════════════════════════════════════════════════

    if (path === '/api/challenges' && method === 'GET') {
      const active = url.searchParams.get('active');
      let query = 'SELECT c.*, (SELECT COUNT(*) FROM rb_challenge_participants cp WHERE cp.challenge_id = c.id) as participant_count, (SELECT COUNT(*) FROM rb_challenge_participants cp WHERE cp.challenge_id = c.id AND cp.completed = 1) as completions FROM rb_challenges c';
      if (active === '1' || active === 'true') {
        query += " WHERE c.end_date >= datetime('now') AND c.start_date <= datetime('now')";
      }
      query += ' ORDER BY c.start_date DESC LIMIT 50';
      const result = await env.DB.prepare(query).all();
      return json({ challenges: result.results || [] });
    }

    if (path === '/api/challenges' && method === 'POST') {
      const body = await request.json();
      if (!body.title || !body.start_date || !body.end_date) return json({ error: 'title, start_date, end_date required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_challenges (id, title, description, challenge_type, target_value, start_date, end_date, category_filter, collection_id, badge_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.title, body.description || '', body.challenge_type || 'read_count', body.target_value || 5, body.start_date, body.end_date, body.category_filter || null, body.collection_id || null, body.badge_name || null).run();
      const challenge = await env.DB.prepare('SELECT * FROM rb_challenges WHERE id = ?').bind(id).first();
      return json({ challenge }, 201);
    }

    const challengeMatch = path.match(/^\/api\/challenges\/([^/]+)$/);
    const challengeJoinMatch = path.match(/^\/api\/challenges\/([^/]+)\/join$/);
    const challengeProgressMatch = path.match(/^\/api\/challenges\/([^/]+)\/progress$/);
    const challengeLeaderboardMatch = path.match(/^\/api\/challenges\/([^/]+)\/leaderboard$/);

    if (challengeMatch && method === 'GET') {
      const ch = await env.DB.prepare('SELECT * FROM rb_challenges WHERE id = ?').bind(challengeMatch[1]).first();
      if (!ch) return json({ error: 'Challenge not found' }, 404);
      const participants = await env.DB.prepare(
        'SELECT * FROM rb_challenge_participants WHERE challenge_id = ? ORDER BY progress DESC, joined_at ASC'
      ).bind(challengeMatch[1]).all();
      return json({ challenge: ch, participants: participants.results || [] });
    }

    if (challengeJoinMatch && method === 'POST') {
      const body = await request.json();
      if (!body.user_id) return json({ error: 'user_id required' }, 400);
      const ch = await env.DB.prepare('SELECT id FROM rb_challenges WHERE id = ?').bind(challengeJoinMatch[1]).first();
      if (!ch) return json({ error: 'Challenge not found' }, 404);
      const existing = await env.DB.prepare('SELECT id FROM rb_challenge_participants WHERE challenge_id = ? AND user_id = ?').bind(challengeJoinMatch[1], body.user_id).first();
      if (existing) return json({ error: 'Already joined' }, 409);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rb_challenge_participants (id, challenge_id, user_id) VALUES (?, ?, ?)').bind(id, challengeJoinMatch[1], body.user_id).run();
      return json({ ok: true, participant_id: id }, 201);
    }

    if (challengeProgressMatch && method === 'POST') {
      const body = await request.json();
      if (!body.user_id || !body.publication_id) return json({ error: 'user_id and publication_id required' }, 400);
      const ch = await env.DB.prepare('SELECT * FROM rb_challenges WHERE id = ?').bind(challengeProgressMatch[1]).first();
      if (!ch) return json({ error: 'Challenge not found' }, 404);
      const participant = await env.DB.prepare('SELECT * FROM rb_challenge_participants WHERE challenge_id = ? AND user_id = ?').bind(challengeProgressMatch[1], body.user_id).first();
      if (!participant) return json({ error: 'Not a participant. Join the challenge first.' }, 400);
      if (participant.completed) return json({ ok: true, message: 'Already completed', progress: participant.progress });

      // Check category filter
      if (ch.category_filter) {
        const pub = await env.DB.prepare('SELECT category FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
        if (!pub || pub.category !== ch.category_filter) return json({ error: 'Article does not match challenge category filter' }, 400);
      }

      // Log progress
      const logId = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rb_challenge_progress_log (id, challenge_id, user_id, publication_id, action) VALUES (?, ?, ?, ?, ?)')
        .bind(logId, challengeProgressMatch[1], body.user_id, body.publication_id, body.action || 'read').run();

      const newProgress = participant.progress + 1;
      const completed = newProgress >= ch.target_value ? 1 : 0;
      await env.DB.prepare(
        "UPDATE rb_challenge_participants SET progress = ?, completed = ?, completed_at = CASE WHEN ? = 1 THEN datetime('now') ELSE completed_at END WHERE id = ?"
      ).bind(newProgress, completed, completed, participant.id).run();

      if (completed) {
        await env.DB.prepare('INSERT INTO roadbook_earnings (id, publication_id, amount, reason) VALUES (?, ?, ?, ?)')
          .bind(crypto.randomUUID(), body.publication_id, 2.0, 'challenge_completed:' + ch.title).run();
      }

      return json({ ok: true, progress: newProgress, target: ch.target_value, completed: !!completed, badge: completed ? ch.badge_name : null });
    }

    if (challengeLeaderboardMatch && method === 'GET') {
      const result = await env.DB.prepare(
        'SELECT user_id, progress, completed, completed_at, joined_at FROM rb_challenge_participants WHERE challenge_id = ? ORDER BY completed DESC, progress DESC, completed_at ASC LIMIT 50'
      ).bind(challengeLeaderboardMatch[1]).all();
      return json({ challenge_id: challengeLeaderboardMatch[1], leaderboard: result.results || [] });
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 3: Author Profiles (/api/authors) ───
    // ═══════════════════════════════════════════════════════════════

    if (path === '/api/authors' && method === 'GET') {
      const q = url.searchParams.get('q');
      let query = 'SELECT * FROM rb_authors';
      const params = [];
      if (q) {
        query += ' WHERE display_name LIKE ? OR username LIKE ? OR bio LIKE ?';
        params.push(`%${q}%`, `%${q}%`, `%${q}%`);
      }
      query += ' ORDER BY total_reads DESC LIMIT 50';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ authors: result.results || [] });
    }

    if (path === '/api/authors' && method === 'POST') {
      const body = await request.json();
      if (!body.username || !body.display_name) return json({ error: 'username and display_name required' }, 400);
      const existing = await env.DB.prepare('SELECT id FROM rb_authors WHERE username = ?').bind(body.username).first();
      if (existing) return json({ error: 'Username already taken' }, 409);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_authors (id, username, display_name, bio, avatar_url, expertise, website, social_links) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.username, body.display_name, body.bio || '', body.avatar_url || '', JSON.stringify(body.expertise || []), body.website || '', JSON.stringify(body.social_links || {})).run();
      const author = await env.DB.prepare('SELECT * FROM rb_authors WHERE id = ?').bind(id).first();
      return json({ author }, 201);
    }

    const authorMatch = path.match(/^\/api\/authors\/([^/]+)$/);
    const authorFollowMatch = path.match(/^\/api\/authors\/([^/]+)\/follow$/);
    const authorPublicationsMatch = path.match(/^\/api\/authors\/([^/]+)\/publications$/);

    if (authorMatch && method === 'GET') {
      // Look up by id or username
      let author = await env.DB.prepare('SELECT * FROM rb_authors WHERE id = ? OR username = ?').bind(authorMatch[1], authorMatch[1]).first();
      if (!author) return json({ error: 'Author not found' }, 404);
      // Get publications by this author
      const pubs = await env.DB.prepare(
        "SELECT id, title, summary, category, reads, reading_time, doi, tags, created_at FROM roadbook_publications WHERE author = ? OR author = ? ORDER BY created_at DESC"
      ).bind(author.username, author.display_name).all();
      author.publication_count = (pubs.results || []).length;
      author.total_reads = (pubs.results || []).reduce((sum, p) => sum + (p.reads || 0), 0);
      // Update cached counts
      await env.DB.prepare("UPDATE rb_authors SET publication_count = ?, total_reads = ?, updated_at = datetime('now') WHERE id = ?")
        .bind(author.publication_count, author.total_reads, author.id).run();
      return json({ author, publications: pubs.results || [] });
    }

    if (authorMatch && method === 'PUT') {
      const author = await env.DB.prepare('SELECT * FROM rb_authors WHERE id = ? OR username = ?').bind(authorMatch[1], authorMatch[1]).first();
      if (!author) return json({ error: 'Author not found' }, 404);
      const body = await request.json();
      await env.DB.prepare(
        "UPDATE rb_authors SET display_name = ?, bio = ?, avatar_url = ?, expertise = ?, website = ?, social_links = ?, updated_at = datetime('now') WHERE id = ?"
      ).bind(body.display_name || author.display_name, body.bio ?? author.bio, body.avatar_url ?? author.avatar_url, JSON.stringify(body.expertise || JSON.parse(author.expertise || '[]')), body.website ?? author.website, JSON.stringify(body.social_links || JSON.parse(author.social_links || '{}')), author.id).run();
      const updated = await env.DB.prepare('SELECT * FROM rb_authors WHERE id = ?').bind(author.id).first();
      return json({ author: updated });
    }

    if (authorFollowMatch && method === 'POST') {
      const body = await request.json();
      if (!body.follower_user_id) return json({ error: 'follower_user_id required' }, 400);
      const author = await env.DB.prepare('SELECT id FROM rb_authors WHERE id = ? OR username = ?').bind(authorFollowMatch[1], authorFollowMatch[1]).first();
      if (!author) return json({ error: 'Author not found' }, 404);
      const existing = await env.DB.prepare('SELECT id FROM rb_author_followers WHERE author_id = ? AND follower_user_id = ?').bind(author.id, body.follower_user_id).first();
      if (existing) {
        // Unfollow
        await env.DB.prepare('DELETE FROM rb_author_followers WHERE id = ?').bind(existing.id).run();
        await env.DB.prepare('UPDATE rb_authors SET follower_count = MAX(0, follower_count - 1) WHERE id = ?').bind(author.id).run();
        return json({ ok: true, action: 'unfollowed' });
      }
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rb_author_followers (id, author_id, follower_user_id) VALUES (?, ?, ?)').bind(id, author.id, body.follower_user_id).run();
      await env.DB.prepare('UPDATE rb_authors SET follower_count = follower_count + 1 WHERE id = ?').bind(author.id).run();
      return json({ ok: true, action: 'followed' }, 201);
    }

    if (authorPublicationsMatch && method === 'GET') {
      const author = await env.DB.prepare('SELECT * FROM rb_authors WHERE id = ? OR username = ?').bind(authorPublicationsMatch[1], authorPublicationsMatch[1]).first();
      if (!author) return json({ error: 'Author not found' }, 404);
      const pubs = await env.DB.prepare(
        "SELECT id, title, summary, category, reads, reading_time, doi, tags, created_at FROM roadbook_publications WHERE author = ? OR author = ? ORDER BY created_at DESC"
      ).bind(author.username, author.display_name).all();
      return json({ author_id: author.id, publications: pubs.results || [] });
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 4: Annotation System (/api/annotations) ───
    // ═══════════════════════════════════════════════════════════════

    if (path === '/api/annotations' && method === 'GET') {
      const pubId = url.searchParams.get('publication_id');
      const userId = url.searchParams.get('user_id');
      if (!pubId && !userId) return json({ error: 'publication_id or user_id required' }, 400);
      let query = "SELECT a.*, p.title as publication_title FROM rb_annotations a JOIN roadbook_publications p ON p.id = a.publication_id WHERE 1=1";
      const params = [];
      if (pubId) { query += ' AND a.publication_id = ?'; params.push(pubId); }
      if (userId) { query += ' AND (a.user_id = ? OR a.visibility = ?)'; params.push(userId, 'public'); }
      else { query += " AND a.visibility = 'public'"; }
      query += ' ORDER BY a.start_offset ASC, a.created_at DESC LIMIT 100';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ annotations: result.results || [] });
    }

    if (path === '/api/annotations' && method === 'POST') {
      const body = await request.json();
      if (!body.publication_id || !body.user_id || !body.highlighted_text) return json({ error: 'publication_id, user_id, and highlighted_text required' }, 400);
      const pub = await env.DB.prepare('SELECT id FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_annotations (id, publication_id, user_id, highlighted_text, note, start_offset, end_offset, color, visibility) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.publication_id, body.user_id, body.highlighted_text.slice(0, 2000), (body.note || '').slice(0, 3000), body.start_offset || 0, body.end_offset || 0, body.color || 'yellow', body.visibility || 'private').run();
      return json({ ok: true, annotation_id: id }, 201);
    }

    const annotationMatch = path.match(/^\/api\/annotations\/([^/]+)$/);
    if (annotationMatch && method === 'PUT') {
      const body = await request.json();
      await env.DB.prepare(
        "UPDATE rb_annotations SET note = COALESCE(?, note), color = COALESCE(?, color), visibility = COALESCE(?, visibility), updated_at = datetime('now') WHERE id = ?"
      ).bind(body.note || null, body.color || null, body.visibility || null, annotationMatch[1]).run();
      const updated = await env.DB.prepare('SELECT * FROM rb_annotations WHERE id = ?').bind(annotationMatch[1]).first();
      if (!updated) return json({ error: 'Annotation not found' }, 404);
      return json({ annotation: updated });
    }

    if (annotationMatch && method === 'DELETE') {
      const ann = await env.DB.prepare('SELECT id FROM rb_annotations WHERE id = ?').bind(annotationMatch[1]).first();
      if (!ann) return json({ error: 'Annotation not found' }, 404);
      await env.DB.prepare('DELETE FROM rb_annotations WHERE id = ?').bind(annotationMatch[1]).run();
      return json({ ok: true, deleted: annotationMatch[1] });
    }

    // Share annotations (make public)
    if (path === '/api/annotations/share' && method === 'POST') {
      const body = await request.json();
      if (!body.annotation_ids || !Array.isArray(body.annotation_ids)) return json({ error: 'annotation_ids array required' }, 400);
      for (const annId of body.annotation_ids) {
        await env.DB.prepare("UPDATE rb_annotations SET visibility = 'public', updated_at = datetime('now') WHERE id = ?").bind(annId).run();
      }
      return json({ ok: true, shared: body.annotation_ids.length });
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 5: Reading Analytics (/api/reading-analytics) ───
    // ═══════════════════════════════════════════════════════════════

    // Track reading event
    if (path === '/api/reading-analytics/track' && method === 'POST') {
      const body = await request.json();
      if (!body.publication_id || !body.event_type) return json({ error: 'publication_id and event_type required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_reading_events (id, user_id, publication_id, event_type, duration_seconds, scroll_depth, referrer) VALUES (?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.user_id || null, body.publication_id, body.event_type, body.duration_seconds || null, body.scroll_depth || null, body.referrer || null).run();
      return json({ ok: true, event_id: id }, 201);
    }

    // Analytics dashboard
    if (path === '/api/reading-analytics' && method === 'GET') {
      const period = url.searchParams.get('period') || '30';
      const daysAgo = `-${period} days`;

      // Most-read articles
      const mostRead = await env.DB.prepare(
        "SELECT p.id, p.title, p.category, p.reads, p.reading_time, COUNT(re.id) as recent_events FROM roadbook_publications p LEFT JOIN rb_reading_events re ON re.publication_id = p.id AND re.created_at >= datetime('now', ?) GROUP BY p.id ORDER BY p.reads DESC LIMIT 20"
      ).bind(daysAgo).all();

      // Reading time distribution
      const timeDistribution = await env.DB.prepare(
        "SELECT CASE WHEN duration_seconds < 60 THEN 'under_1min' WHEN duration_seconds < 300 THEN '1_to_5min' WHEN duration_seconds < 600 THEN '5_to_10min' WHEN duration_seconds < 1800 THEN '10_to_30min' ELSE 'over_30min' END as bucket, COUNT(*) as count FROM rb_reading_events WHERE event_type = 'read' AND duration_seconds IS NOT NULL AND created_at >= datetime('now', ?) GROUP BY bucket"
      ).bind(daysAgo).all();

      // Completion rates
      const totalStarts = await env.DB.prepare(
        "SELECT COUNT(DISTINCT publication_id || '-' || COALESCE(user_id, '')) as count FROM rb_reading_events WHERE event_type = 'start' AND created_at >= datetime('now', ?)"
      ).bind(daysAgo).first();
      const totalCompletes = await env.DB.prepare(
        "SELECT COUNT(*) as count FROM rb_progress WHERE completed = 1 AND updated_at >= datetime('now', ?)"
      ).bind(daysAgo).first();

      // Popular categories
      const popularCategories = await env.DB.prepare(
        "SELECT p.category, COUNT(re.id) as event_count, SUM(p.reads) as total_reads FROM rb_reading_events re JOIN roadbook_publications p ON p.id = re.publication_id WHERE re.created_at >= datetime('now', ?) AND p.category IS NOT NULL GROUP BY p.category ORDER BY event_count DESC"
      ).bind(daysAgo).all();

      // Daily read counts
      const dailyReads = await env.DB.prepare(
        "SELECT DATE(created_at) as date, COUNT(*) as count FROM rb_reading_events WHERE event_type IN ('read', 'start') AND created_at >= datetime('now', ?) GROUP BY DATE(created_at) ORDER BY date DESC"
      ).bind(daysAgo).all();

      // Average reading duration
      const avgDuration = await env.DB.prepare(
        "SELECT AVG(duration_seconds) as avg_seconds FROM rb_reading_events WHERE duration_seconds IS NOT NULL AND duration_seconds > 0 AND created_at >= datetime('now', ?)"
      ).bind(daysAgo).first();

      return json({
        period_days: parseInt(period),
        most_read: mostRead.results || [],
        time_distribution: timeDistribution.results || [],
        completion_rate: {
          starts: totalStarts?.count || 0,
          completions: totalCompletes?.count || 0,
          rate: totalStarts?.count > 0 ? Math.round((totalCompletes?.count || 0) / totalStarts.count * 100) : 0,
        },
        popular_categories: popularCategories.results || [],
        daily_reads: dailyReads.results || [],
        average_reading_seconds: Math.round(avgDuration?.avg_seconds || 0),
      });
    }

    // Per-user analytics
    if (path === '/api/reading-analytics/user' && method === 'GET') {
      const userId = url.searchParams.get('user_id');
      if (!userId) return json({ error: 'user_id required' }, 400);

      const totalRead = await env.DB.prepare('SELECT COUNT(DISTINCT publication_id) as count FROM rb_reading_events WHERE user_id = ?').bind(userId).first();
      const totalTime = await env.DB.prepare('SELECT SUM(duration_seconds) as total FROM rb_reading_events WHERE user_id = ? AND duration_seconds IS NOT NULL').bind(userId).first();
      const completed = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_progress WHERE user_id = ? AND completed = 1').bind(userId).first();
      const categoryBreakdown = await env.DB.prepare(
        'SELECT p.category, COUNT(DISTINCT re.publication_id) as count FROM rb_reading_events re JOIN roadbook_publications p ON p.id = re.publication_id WHERE re.user_id = ? AND p.category IS NOT NULL GROUP BY p.category ORDER BY count DESC'
      ).bind(userId).all();
      const recentActivity = await env.DB.prepare(
        'SELECT re.event_type, re.duration_seconds, re.created_at, p.title FROM rb_reading_events re JOIN roadbook_publications p ON p.id = re.publication_id WHERE re.user_id = ? ORDER BY re.created_at DESC LIMIT 20'
      ).bind(userId).all();

      return json({
        user_id: userId,
        articles_read: totalRead?.count || 0,
        total_reading_seconds: totalTime?.total || 0,
        articles_completed: completed?.count || 0,
        category_breakdown: categoryBreakdown.results || [],
        recent_activity: recentActivity.results || [],
      });
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 6: Article Versioning (/api/versions) ───
    // ═══════════════════════════════════════════════════════════════

    if (path === '/api/versions' && method === 'GET') {
      const pubId = url.searchParams.get('publication_id');
      if (!pubId) return json({ error: 'publication_id required' }, 400);
      const pub = await env.DB.prepare('SELECT id, title, version FROM roadbook_publications WHERE id = ?').bind(pubId).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      const versions = await env.DB.prepare(
        'SELECT id, version, title, hash, prev_hash, summary, created_at FROM rb_versions WHERE publication_id = ? ORDER BY version DESC'
      ).bind(pubId).all();
      const diffs = await env.DB.prepare(
        'SELECT * FROM rb_version_diffs WHERE publication_id = ? ORDER BY to_version DESC'
      ).bind(pubId).all();
      return json({ publication_id: pubId, current_version: pub.version, versions: versions.results || [], diffs: diffs.results || [] });
    }

    // Get specific version content
    const versionDetailMatch = path.match(/^\/api\/versions\/([^/]+)\/(\d+)$/);
    if (versionDetailMatch && method === 'GET') {
      const pubId = versionDetailMatch[1];
      const ver = parseInt(versionDetailMatch[2]);
      const version = await env.DB.prepare(
        'SELECT * FROM rb_versions WHERE publication_id = ? AND version = ?'
      ).bind(pubId, ver).first();
      if (!version) return json({ error: 'Version not found' }, 404);
      return json({ version });
    }

    // Diff between two versions
    const versionDiffMatch = path.match(/^\/api\/versions\/([^/]+)\/diff$/);
    if (versionDiffMatch && method === 'GET') {
      const pubId = versionDiffMatch[1];
      const fromVer = parseInt(url.searchParams.get('from') || '1');
      const toVer = parseInt(url.searchParams.get('to') || '0');

      const pub = await env.DB.prepare('SELECT version FROM roadbook_publications WHERE id = ?').bind(pubId).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);

      const actualTo = toVer || pub.version;
      const fromVersion = await env.DB.prepare('SELECT * FROM rb_versions WHERE publication_id = ? AND version = ?').bind(pubId, fromVer).first();
      const toVersion = await env.DB.prepare('SELECT * FROM rb_versions WHERE publication_id = ? AND version = ?').bind(pubId, actualTo).first();
      if (!fromVersion || !toVersion) return json({ error: 'One or both versions not found' }, 404);

      // Simple line-based diff
      const fromLines = fromVersion.content.split('\n');
      const toLines = toVersion.content.split('\n');
      const additions = toLines.filter(l => !fromLines.includes(l)).length;
      const deletions = fromLines.filter(l => !toLines.includes(l)).length;

      // Check if we have a stored diff
      let storedDiff = await env.DB.prepare(
        'SELECT * FROM rb_version_diffs WHERE publication_id = ? AND from_version = ? AND to_version = ?'
      ).bind(pubId, fromVer, actualTo).first();

      if (!storedDiff) {
        // Create and store diff
        const diffId = crypto.randomUUID();
        const diffSummary = `${additions} additions, ${deletions} deletions between v${fromVer} and v${actualTo}`;
        await env.DB.prepare(
          'INSERT INTO rb_version_diffs (id, publication_id, from_version, to_version, diff_summary, additions, deletions) VALUES (?, ?, ?, ?, ?, ?, ?)'
        ).bind(diffId, pubId, fromVer, actualTo, diffSummary, additions, deletions).run();
        storedDiff = { id: diffId, diff_summary: diffSummary, additions, deletions };
      }

      return json({
        publication_id: pubId,
        from_version: fromVer,
        to_version: actualTo,
        from_title: fromVersion.title,
        to_title: toVersion.title,
        from_hash: fromVersion.hash,
        to_hash: toVersion.hash,
        additions,
        deletions,
        diff_summary: storedDiff.diff_summary,
        title_changed: fromVersion.title !== toVersion.title,
        content_changed: fromVersion.content !== toVersion.content,
      });
    }

    // Add changelog entry for a version
    const versionChangelogMatch = path.match(/^\/api\/versions\/([^/]+)\/changelog$/);
    if (versionChangelogMatch && method === 'POST') {
      const body = await request.json();
      if (!body.version || !body.changelog) return json({ error: 'version and changelog required' }, 400);
      const pubId = versionChangelogMatch[1];
      const existing = await env.DB.prepare(
        'SELECT id FROM rb_version_diffs WHERE publication_id = ? AND to_version = ?'
      ).bind(pubId, body.version).first();

      if (existing) {
        await env.DB.prepare('UPDATE rb_version_diffs SET changelog_entry = ? WHERE id = ?').bind(body.changelog, existing.id).run();
      } else {
        const id = crypto.randomUUID();
        await env.DB.prepare(
          'INSERT INTO rb_version_diffs (id, publication_id, from_version, to_version, changelog_entry) VALUES (?, ?, ?, ?, ?)'
        ).bind(id, pubId, Math.max(1, body.version - 1), body.version, body.changelog).run();
      }
      return json({ ok: true, publication_id: pubId, version: body.version });
    }

    // Full changelog for article
    if (versionChangelogMatch && method === 'GET') {
      const pubId = versionChangelogMatch[1];
      const result = await env.DB.prepare(
        'SELECT d.*, v.title, v.hash, v.created_at as version_date FROM rb_version_diffs d LEFT JOIN rb_versions v ON v.publication_id = d.publication_id AND v.version = d.to_version WHERE d.publication_id = ? ORDER BY d.to_version DESC'
      ).bind(pubId).all();
      return json({ publication_id: pubId, changelog: result.results || [] });
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 7: Import/Export (/api/import) ───
    // ═══════════════════════════════════════════════════════════════

    // Import from Markdown
    if (path === '/api/import/markdown' && method === 'POST') {
      const body = await request.json();
      if (!body.markdown) return json({ error: 'markdown content required' }, 400);
      const md = body.markdown;

      // Extract title from first heading or use provided
      let title = body.title || '';
      if (!title) {
        const headingMatch = md.match(/^#\s+(.+)$/m);
        if (headingMatch) title = headingMatch[1].trim();
        else title = 'Imported Article';
      }

      // Strip the title heading from content if it matches
      let content = md;
      if (title !== 'Imported Article') {
        content = content.replace(new RegExp(`^#\\s+${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n?`, 'm'), '').trim();
      }

      const id = crypto.randomUUID();
      const hash = await generateHash(content);
      const readingTime = estimateReadingTime(content);
      const doi = generateDOI(id);
      const tags = JSON.stringify(body.tags || []);
      const category = body.category || 'imported';

      // AI summary
      let summary = body.summary || '';
      if (!summary) {
        try {
          const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `${AGENTS.calliope.prompt} Write a 2-sentence summary. Return ONLY the summary.` },
              { role: 'user', content: `Title: ${title}\n\n${content.substring(0, 3000)}` },
            ],
            max_tokens: 200,
          });
          if (aiResult.response) summary = aiResult.response.trim();
        } catch { summary = content.substring(0, 200); }
      }

      await env.DB.prepare(
        'INSERT INTO roadbook_publications (id, title, content, summary, category, visibility, license, tags, provenance_hash, reading_time, doi, author) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, title, content, summary, category, body.visibility || 'public', body.license || 'proprietary', tags, hash, readingTime, doi, body.author || 'blackroad').run();

      await env.DB.prepare(
        'INSERT INTO rb_versions (id, publication_id, version, title, content, summary, hash, prev_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), id, 1, title, content, summary, hash, null).run();

      return json({ ok: true, publication: { id, title, doi, reading_time: readingTime }, source: 'markdown', agent: 'Calliope' }, 201);
    }

    // Import from HTML
    if (path === '/api/import/html' && method === 'POST') {
      const body = await request.json();
      if (!body.html) return json({ error: 'html content required' }, 400);

      // Basic HTML to text conversion
      let text = body.html;
      text = text.replace(/<script[\s\S]*?<\/script>/gi, '');
      text = text.replace(/<style[\s\S]*?<\/style>/gi, '');
      text = text.replace(/<h([1-6])[^>]*>(.*?)<\/h\1>/gi, (m, level, content) => '#'.repeat(parseInt(level)) + ' ' + content.replace(/<[^>]+>/g, '') + '\n\n');
      text = text.replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n');
      text = text.replace(/<br\s*\/?>/gi, '\n');
      text = text.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
      text = text.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
      text = text.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*');
      text = text.replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, '> $1\n');
      text = text.replace(/<[^>]+>/g, '');
      text = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');
      text = text.replace(/\n{3,}/g, '\n\n').trim();

      let title = body.title || '';
      if (!title) {
        const titleMatch = body.html.match(/<title[^>]*>(.*?)<\/title>/i);
        const h1Match = body.html.match(/<h1[^>]*>(.*?)<\/h1>/i);
        title = (h1Match && h1Match[1].replace(/<[^>]+>/g, '')) || (titleMatch && titleMatch[1]) || 'Imported Article';
      }

      const id = crypto.randomUUID();
      const hash = await generateHash(text);
      const readingTime = estimateReadingTime(text);
      const doi = generateDOI(id);

      await env.DB.prepare(
        'INSERT INTO roadbook_publications (id, title, content, summary, category, visibility, license, tags, provenance_hash, reading_time, doi, author) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, title, text, body.summary || text.substring(0, 200), body.category || 'imported', body.visibility || 'public', body.license || 'proprietary', JSON.stringify(body.tags || []), hash, readingTime, doi, body.author || 'blackroad').run();

      await env.DB.prepare(
        'INSERT INTO rb_versions (id, publication_id, version, title, content, summary, hash, prev_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), id, 1, title, text, body.summary || '', hash, null).run();

      return json({ ok: true, publication: { id, title, doi, reading_time: readingTime }, source: 'html' }, 201);
    }

    // Import from plain text / PDF text
    if (path === '/api/import/text' && method === 'POST') {
      const body = await request.json();
      if (!body.text) return json({ error: 'text content required' }, 400);
      if (!body.title) return json({ error: 'title required for plain text import' }, 400);

      const id = crypto.randomUUID();
      const hash = await generateHash(body.text);
      const readingTime = estimateReadingTime(body.text);
      const doi = generateDOI(id);

      await env.DB.prepare(
        'INSERT INTO roadbook_publications (id, title, content, summary, category, visibility, license, tags, provenance_hash, reading_time, doi, author) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.title, body.text, body.summary || body.text.substring(0, 200), body.category || 'imported', body.visibility || 'public', body.license || 'proprietary', JSON.stringify(body.tags || []), hash, readingTime, doi, body.author || 'blackroad').run();

      await env.DB.prepare(
        'INSERT INTO rb_versions (id, publication_id, version, title, content, summary, hash, prev_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(crypto.randomUUID(), id, 1, body.title, body.text, body.summary || '', hash, null).run();

      return json({ ok: true, publication: { id, title: body.title, doi, reading_time: readingTime }, source: 'text' }, 201);
    }

    // Export collection as ebook (JSON structure)
    if (path === '/api/import/export-collection' && method === 'POST') {
      const body = await request.json();
      if (!body.collection_id) return json({ error: 'collection_id required' }, 400);
      const coll = await env.DB.prepare('SELECT * FROM rb_collections WHERE id = ?').bind(body.collection_id).first();
      if (!coll) return json({ error: 'Collection not found' }, 404);

      const items = await env.DB.prepare(
        `SELECT p.* FROM rb_collection_items ci JOIN roadbook_publications p ON p.id = ci.publication_id WHERE ci.collection_id = ? ORDER BY ci.sort_order ASC`
      ).bind(body.collection_id).all();
      const articles = items.results || [];

      const format = body.format || 'ebook_json';
      if (format === 'markdown') {
        let md = `# ${coll.name}\n\n${coll.description || ''}\n\n---\n\n`;
        for (const [i, a] of articles.entries()) {
          md += `## Chapter ${i + 1}: ${a.title}\n\n`;
          md += `*${a.author} | ${a.reading_time || 1} min read*\n\n`;
          if (a.summary) md += `> ${a.summary}\n\n`;
          md += `${a.content}\n\n---\n\n`;
        }
        md += `\n\nExported from RoadBook (BlackRoad OS) on ${new Date().toISOString()}\n`;
        return new Response(md, { status: 200, headers: { ...CORS, 'Content-Type': 'text/markdown; charset=utf-8', 'Content-Disposition': `attachment; filename="${coll.name.replace(/[^a-zA-Z0-9]/g, '_')}.md"` } });
      }

      // Default: structured ebook JSON
      const ebook = {
        title: coll.name,
        description: coll.description,
        curator: coll.curator,
        chapters: articles.map((a, i) => ({
          chapter: i + 1,
          id: a.id,
          title: a.title,
          author: a.author,
          summary: a.summary,
          content: a.content,
          reading_time: a.reading_time,
          doi: a.doi,
        })),
        total_chapters: articles.length,
        total_reading_time: articles.reduce((sum, a) => sum + (a.reading_time || 0), 0),
        exported_at: new Date().toISOString(),
        source: 'RoadBook (BlackRoad OS)',
      };
      return json(ebook);
    }

    // Bulk import (multiple articles)
    if (path === '/api/import/bulk' && method === 'POST') {
      const body = await request.json();
      if (!body.articles || !Array.isArray(body.articles)) return json({ error: 'articles array required' }, 400);
      const results = [];
      for (const article of body.articles.slice(0, 50)) {
        if (!article.title || !article.content) { results.push({ error: 'title and content required', title: article.title }); continue; }
        const id = crypto.randomUUID();
        const hash = await generateHash(article.content);
        const readingTime = estimateReadingTime(article.content);
        const doi = generateDOI(id);
        await env.DB.prepare(
          'INSERT INTO roadbook_publications (id, title, content, summary, category, visibility, license, tags, provenance_hash, reading_time, doi, author) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(id, article.title, article.content, article.summary || article.content.substring(0, 200), article.category || 'imported', article.visibility || 'public', article.license || 'proprietary', JSON.stringify(article.tags || []), hash, readingTime, doi, article.author || 'blackroad').run();
        await env.DB.prepare(
          'INSERT INTO rb_versions (id, publication_id, version, title, content, summary, hash, prev_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(crypto.randomUUID(), id, 1, article.title, article.content, article.summary || '', hash, null).run();
        results.push({ ok: true, id, title: article.title, doi });
      }
      return json({ imported: results.filter(r => r.ok).length, failed: results.filter(r => r.error).length, results }, 201);
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 8: Featured Content (/api/featured) ───
    // ═══════════════════════════════════════════════════════════════

    if (path === '/api/featured' && method === 'GET') {
      const featureType = url.searchParams.get('type');
      let query = `SELECT f.*, p.title as article_title, p.summary as article_summary, p.category, p.author, p.reads, p.reading_time, p.doi, p.tags, p.created_at as article_date
                   FROM rb_featured f
                   JOIN roadbook_publications p ON p.id = f.publication_id
                   WHERE f.active = 1`;
      const params = [];
      if (featureType) {
        query += ' AND f.feature_type = ?';
        params.push(featureType);
      }
      query += ' ORDER BY f.priority DESC, f.created_at DESC LIMIT 30';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ featured: result.results || [] });
    }

    if (path === '/api/featured' && method === 'POST') {
      const body = await request.json();
      if (!body.publication_id) return json({ error: 'publication_id required' }, 400);
      const pub = await env.DB.prepare('SELECT id, title FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      const featureType = body.feature_type || 'editorial';
      if (!['editorial', 'staff_pick', 'trending', 'article_of_the_day'].includes(featureType)) {
        return json({ error: 'feature_type must be editorial, staff_pick, trending, or article_of_the_day' }, 400);
      }
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_featured (id, publication_id, feature_type, title_override, description_override, priority, start_date, end_date, picked_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.publication_id, featureType, body.title_override || null, body.description_override || null, body.priority || 0, body.start_date || null, body.end_date || null, body.picked_by || 'system').run();
      return json({ ok: true, featured_id: id, publication: pub.title, feature_type: featureType }, 201);
    }

    // Article of the day (rotates based on date)
    if (path === '/api/featured/today' && method === 'GET') {
      // Check for explicit article_of_the_day
      const today = new Date().toISOString().split('T')[0];
      let aotd = await env.DB.prepare(
        "SELECT f.*, p.id as pub_id, p.title, p.summary, p.category, p.author, p.reads, p.reading_time, p.doi, p.tags, p.content FROM rb_featured f JOIN roadbook_publications p ON p.id = f.publication_id WHERE f.feature_type = 'article_of_the_day' AND f.active = 1 AND (f.start_date IS NULL OR f.start_date <= ?) AND (f.end_date IS NULL OR f.end_date >= ?) ORDER BY f.priority DESC LIMIT 1"
      ).bind(today, today).first();

      if (!aotd) {
        // Auto-rotate: pick based on day of year hash
        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        const pubs = await env.DB.prepare("SELECT id, title, summary, category, author, reads, reading_time, doi, tags FROM roadbook_publications WHERE visibility = 'public' ORDER BY reads DESC LIMIT 100").all();
        const articles = pubs.results || [];
        if (articles.length > 0) {
          const picked = articles[dayOfYear % articles.length];
          aotd = { ...picked, pub_id: picked.id, feature_type: 'article_of_the_day', auto_selected: true };
        }
      }

      if (!aotd) return json({ article_of_the_day: null, date: today });
      return json({ article_of_the_day: aotd, date: today });
    }

    // Trending (auto-computed from recent reads)
    if (path === '/api/featured/trending' && method === 'GET') {
      const limit = parseInt(url.searchParams.get('limit') || '10');
      const result = await env.DB.prepare(
        `SELECT p.id, p.title, p.summary, p.category, p.author, p.reads, p.reading_time, p.doi, p.tags, p.created_at,
                COUNT(re.id) as recent_events,
                (p.reads + COUNT(re.id) * 5 + p.citations * 10) as trending_score
         FROM roadbook_publications p
         LEFT JOIN rb_reading_events re ON re.publication_id = p.id AND re.created_at >= datetime('now', '-7 days')
         WHERE p.visibility = 'public'
         GROUP BY p.id
         ORDER BY trending_score DESC
         LIMIT ?`
      ).bind(limit).all();
      return json({ trending: result.results || [] });
    }

    // Staff picks
    if (path === '/api/featured/staff-picks' && method === 'GET') {
      const result = await env.DB.prepare(
        `SELECT f.*, p.title, p.summary, p.category, p.author, p.reads, p.reading_time, p.doi, p.tags
         FROM rb_featured f
         JOIN roadbook_publications p ON p.id = f.publication_id
         WHERE f.feature_type = 'staff_pick' AND f.active = 1
         ORDER BY f.priority DESC, f.created_at DESC
         LIMIT 20`
      ).all();
      return json({ staff_picks: result.results || [] });
    }

    // Remove featured
    const featuredMatch = path.match(/^\/api\/featured\/([^/]+)$/);
    if (featuredMatch && method === 'DELETE' && !['today', 'trending', 'staff-picks'].includes(featuredMatch[1])) {
      await env.DB.prepare('UPDATE rb_featured SET active = 0 WHERE id = ?').bind(featuredMatch[1]).run();
      return json({ ok: true, deactivated: featuredMatch[1] });
    }

    return json({ error: 'Not found', service: 'roadbook' }, 404);
  },
};
