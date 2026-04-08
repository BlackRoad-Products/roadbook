// PROPRIETARY AND CONFIDENTIAL. Copyright 2025-2026 BlackRoad OS, Inc. All rights reserved. NOT open source.
// RoadBook — Open Publishing Platform | roadbook.blackroad.io
// Turn insights into published knowledge.

const ROOT_HTML = `<!-- PROPRIETARY. Copyright 2025-2026 BlackRoad OS, Inc. All rights reserved. NOT open source. -->
<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://images.blackroad.io/brand/brand.css">
<title>RoadBook \u2014 Open Knowledge Platform \u2014 BlackRoad OS</title>
<meta name="description" content="Publish, discover, and preserve articles, research, and knowledge on BlackRoad OS. 72+ articles with DOIs and provenance hashes.">
<meta property="og:title" content="RoadBook \u2014 BlackRoad OS"><meta property="og:description" content="Open publishing platform with RoadChain provenance. 72+ articles on AI, sovereignty, education.">
<meta property="og:url" content="https://roadbook.blackroad.io"><meta property="og:image" content="https://images.blackroad.io/pixel-art/road-logo.png">
<meta name="twitter:card" content="summary_large_image"><meta name="robots" content="index, follow, noai, noimageai">
<link rel="canonical" href="https://roadbook.blackroad.io/">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebApplication","name":"RoadBook","url":"https://roadbook.blackroad.io/","description":"Open publishing platform with DOIs, peer review, citations, and RoadChain provenance. 79+ articles on AI, sovereignty, education.","applicationCategory":"BusinessApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"author":{"@type":"Organization","name":"BlackRoad OS, Inc.","url":"https://blackroad.io"}}window.addEventListener('message',function(e){if(e.data</script></script>e.data.type==='blackroad-os:context'){window._osUser=e.data.user;window._osToken=e.data.token;}});if(window.parent!==window)window.parent.postMessage({type:'blackroad-os:request-context'},'*');
</script>
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
<\\/script><script>(function(){var d={path:location.pathname,ref:document.referrer,w:screen.width,h:screen.height,t:Date.now()};navigator.sendBeacon&&navigator.sendBeacon('/api/analytics',JSON.stringify(d))})()</script><script>!function(){var b=document.createElement("div");b.style.cssText="position:fixed;top:0;left:0;right:0;z-index:99999;background:#0a0a0a;border-bottom:1px solid #1a1a1a;padding:6px 16px;display:flex;align-items:center;justify-content:space-between;font-family:sans-serif";b.innerHTML='<span style="font-size:11px;color:#737373">Part of <a href="https://os.blackroad.io" style="color:#f5f5f5;font-weight:600;text-decoration:none">BlackRoad OS</a></span><a href="https://os.blackroad.io" style="font-size:10px;font-weight:600;padding:4px 12px;background:#f5f5f5;color:#000;border-radius:4px;text-decoration:none">Try Free</a>';b.id="br-bar";if(!document.getElementById("br-bar")){document.body.prepend(b);document.body.style.paddingTop=(parseInt(getComputedStyle(document.body).paddingTop)||0)+32+"px"}}();</script>
</body></html>`;

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
    // ─── WRITING WORKSHOPS ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_workshops (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      host TEXT DEFAULT 'blackroad',
      prompt TEXT,
      status TEXT NOT NULL DEFAULT 'upcoming',
      max_participants INTEGER DEFAULT 20,
      scheduled_at TEXT,
      duration_minutes INTEGER DEFAULT 60,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_workshop_participants (
      id TEXT PRIMARY KEY,
      workshop_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      joined_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (workshop_id) REFERENCES rb_workshops(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_workshop_submissions (
      id TEXT PRIMARY KEY,
      workshop_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      content TEXT NOT NULL,
      title TEXT,
      feedback TEXT DEFAULT '[]',
      avg_rating REAL DEFAULT 0,
      submitted_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (workshop_id) REFERENCES rb_workshops(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_workshop_feedback (
      id TEXT PRIMARY KEY,
      submission_id TEXT NOT NULL,
      reviewer_id TEXT NOT NULL,
      rating INTEGER DEFAULT 3,
      comment TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (submission_id) REFERENCES rb_workshop_submissions(id)
    )`),
    // ─── PUBLICATION ANALYTICS ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_pub_analytics (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      event_date TEXT NOT NULL,
      views INTEGER DEFAULT 0,
      reads INTEGER DEFAULT 0,
      completions INTEGER DEFAULT 0,
      shares INTEGER DEFAULT 0,
      avg_read_pct REAL DEFAULT 0,
      referrers TEXT DEFAULT '{}',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_share_events (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      user_id TEXT,
      platform TEXT DEFAULT 'link',
      referrer TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    // ─── CONTENT LICENSING ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_licenses (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      license_type TEXT NOT NULL DEFAULT 'standard',
      licensee_name TEXT NOT NULL,
      licensee_email TEXT,
      terms TEXT,
      fee REAL DEFAULT 0,
      currency TEXT DEFAULT 'USD',
      status TEXT NOT NULL DEFAULT 'pending',
      royalty_pct REAL DEFAULT 0,
      total_royalties_paid REAL DEFAULT 0,
      granted_at TEXT,
      expires_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_royalty_payments (
      id TEXT PRIMARY KEY,
      license_id TEXT NOT NULL,
      amount REAL NOT NULL,
      period_start TEXT,
      period_end TEXT,
      status TEXT NOT NULL DEFAULT 'pending',
      paid_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (license_id) REFERENCES rb_licenses(id)
    )`),
    // ─── BOOK CLUBS ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_clubs (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      creator TEXT DEFAULT 'blackroad',
      club_type TEXT DEFAULT 'book',
      visibility TEXT DEFAULT 'public',
      member_count INTEGER DEFAULT 0,
      reading_list TEXT DEFAULT '[]',
      current_reading_id TEXT,
      discussion_schedule TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_club_members (
      id TEXT PRIMARY KEY,
      club_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      role TEXT DEFAULT 'member',
      joined_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (club_id) REFERENCES rb_clubs(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_club_discussions (
      id TEXT PRIMARY KEY,
      club_id TEXT NOT NULL,
      publication_id TEXT,
      topic TEXT NOT NULL,
      body TEXT,
      author TEXT NOT NULL,
      replies_count INTEGER DEFAULT 0,
      scheduled_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (club_id) REFERENCES rb_clubs(id)
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_club_discussion_replies (
      id TEXT PRIMARY KEY,
      discussion_id TEXT NOT NULL,
      author TEXT NOT NULL,
      body TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (discussion_id) REFERENCES rb_club_discussions(id)
    )`),
    // ─── TRANSLATION ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_translations (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      language TEXT NOT NULL,
      language_name TEXT,
      translated_title TEXT NOT NULL,
      translated_content TEXT NOT NULL,
      translated_summary TEXT,
      translator TEXT DEFAULT 'ai',
      status TEXT NOT NULL DEFAULT 'draft',
      quality_score REAL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    // ─── PODCAST ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_podcasts (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      narrator TEXT DEFAULT 'ai',
      duration_seconds INTEGER DEFAULT 0,
      audio_url TEXT,
      status TEXT NOT NULL DEFAULT 'pending',
      episode_number INTEGER,
      season INTEGER DEFAULT 1,
      transcript TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
    // ─── ACADEMIC CITATIONS ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_bibliographies (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      format TEXT DEFAULT 'apa',
      entries TEXT DEFAULT '[]',
      entry_count INTEGER DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_bibliography_entries (
      id TEXT PRIMARY KEY,
      bibliography_id TEXT NOT NULL,
      publication_id TEXT,
      doi TEXT,
      raw_citation TEXT,
      parsed_data TEXT DEFAULT '{}',
      entry_type TEXT DEFAULT 'article',
      sort_key TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (bibliography_id) REFERENCES rb_bibliographies(id)
    )`),
    // ─── CONTENT SYNDICATION ───
    db.prepare(`CREATE TABLE IF NOT EXISTS rb_syndications (
      id TEXT PRIMARY KEY,
      publication_id TEXT NOT NULL,
      platform TEXT NOT NULL,
      platform_url TEXT,
      status TEXT NOT NULL DEFAULT 'pending',
      external_id TEXT,
      syndicated_at TEXT,
      last_synced_at TEXT,
      views_on_platform INTEGER DEFAULT 0,
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (publication_id) REFERENCES roadbook_publications(id)
    )`),
  ]);
}

async function generateHash(content, title = '', timestamp = '') {
  const encoder = new TextEncoder();
  const data = encoder.encode((title || '') + content + (timestamp || new Date().toISOString()));
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
  const hex = id.replace(/-/g, '').slice(0, 8);
  return `road:book:${hex}`;
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

// ─── SEED ARTICLES for /read/:slug content engine ───
const ARTICLES = [
  {
    slug: 'what-is-blackroad-os',
    title: 'What Is BlackRoad OS? The Sovereign AI Operating System',
    category: 'Building BlackRoad',
    author: 'Alexa Amundson',
    date: '2026-03-15',
    readTime: '5 min',
    description: 'BlackRoad OS is a browser-based operating system that puts AI orchestration, memory persistence, and multi-agent collaboration into a single sovereign platform you control.',
    body: `<p>BlackRoad OS is not another SaaS dashboard. It is a full operating system that runs in your browser, connecting local AI models, cloud resources, and a fleet of 27 specialized agents into one unified workspace. Every file, conversation, and decision is yours — stored on your hardware, verified by RoadChain provenance hashes, and never locked behind a vendor.</p>
<p>The OS ships with a desktop environment at <strong>app.blackroad.io</strong> featuring draggable windows, a taskbar, a file system backed by D1 and R2 storage, and deep integration with every BlackRoad product. Launch RoadBook to publish, open RoadCode to develop, start a RoadTrip convoy to coordinate agents — all from one place.</p>
<p>Under the hood, BlackRoad OS uses a PS-SHA memory system that persists context across sessions. When you close your laptop and come back a week later, your agents remember what you were working on, what decisions were made, and what comes next. This is not session-based chat — it is persistent, sovereign intelligence.</p>
<p>The architecture is intentionally self-hosted first. A Raspberry Pi fleet runs local LLMs through Ollama, NATS mesh handles inter-agent communication, and Cloudflare Workers provide the edge layer. You can run BlackRoad OS entirely on your own network with zero external dependencies.</p>
<p>BlackRoad OS exists because the current landscape forces creators to choose between power and ownership. You can have GPT-4 through OpenAI but you own nothing. You can self-host Llama but you get no ecosystem. BlackRoad gives you both: a full-featured AI operating system that remains sovereign from day one.</p>`,
    tags: ['blackroad', 'os', 'sovereign', 'ai', 'operating-system'],
    related: ['how-agents-work', 'roadtrip-convoy', 'sovereign-ai-why-it-matters']
  },
  {
    slug: 'how-agents-work',
    title: 'How the 27 AI Agents Work Inside BlackRoad',
    category: 'AI & Agents',
    author: 'Alexa Amundson',
    date: '2026-03-16',
    readTime: '7 min',
    description: 'BlackRoad runs 27 specialized AI agents organized into divisions. Each agent has persistent knowledge, a personality, and the ability to collaborate with other agents.',
    body: `<p>BlackRoad does not run one monolithic AI. It runs 27 distinct agents, each specialized for a domain — from Road (the general coordinator) to Pixel (visual design) to Echo (communications mesh) to Gematria (mathematics and computation). These agents are not chatbot personas; they are persistent processes with their own knowledge bases, training routines, and collaboration protocols.</p>
<p>Every agent accumulates knowledge through conversations and autonomous study. When you talk to Tutor about calculus, Tutor stores that context permanently. The next session, Tutor remembers your level, your struggles, and your goals. This persistent knowledge system currently holds over 200 items across all 27 agents, and it feeds directly into each agent's prompt context.</p>
<p>Agents are organized into divisions: Operations, Creative, Engineering, Education, and Research. Division drills run on a five-minute cron cycle, testing agents on their domain expertise and graduating them through skill levels. An agent that consistently demonstrates competence gets promoted; one that stagnates gets additional training exercises.</p>
<p>The real power emerges in collaboration. When you ask Road to "build a landing page with analytics," Road dispatches sub-tasks to Pixel for design, to Echo for deployment notifications, and to the engineering division for implementation. Agents communicate through NATS pub/sub messaging on a self-hosted mesh network spanning multiple Raspberry Pi nodes.</p>
<p>Each agent also runs RoadC — BlackRoad's native programming language — allowing agents to write and execute code within the worker runtime. This means agents do not just talk about solutions; they build and deploy them autonomously, with full audit trails logged to RoadChain.</p>`,
    tags: ['agents', 'ai', 'divisions', 'collaboration', 'roadtrip'],
    related: ['what-is-blackroad-os', 'roadtrip-convoy', 'agent-division-system']
  },
  {
    slug: 'roadtrip-convoy',
    title: 'The RoadTrip Convoy: Multi-Agent Coordination at Scale',
    category: 'AI & Agents',
    author: 'Alexa Amundson',
    date: '2026-03-17',
    readTime: '6 min',
    description: 'RoadTrip is the agent coordination hub where 27+ AI agents communicate, collaborate, and execute tasks together in real-time channels.',
    body: `<p>RoadTrip is BlackRoad's multi-agent coordination system, accessible at roadtrip.blackroad.io. Think of it as a dispatch center where 27 agents organize themselves across eight channels — general, engineering, creative, education, research, operations, announcements, and debug. Every message is logged, every decision is traceable.</p>
<p>The convoy metaphor is intentional. In trucking, a convoy is a group of vehicles traveling together, sharing information about road conditions and coordinating movements. BlackRoad agents operate the same way: they share context about the current project state, warn each other about failures, and dynamically re-route tasks when something goes wrong.</p>
<p>RoadTrip runs on a dual infrastructure: a self-hosted instance on Alice (a Raspberry Pi at port 8094) and a Cloudflare Worker fallback. If your local network is up, agents talk through the Pi with sub-millisecond latency. If you are on the road, the Worker handles it. The switch is transparent — agents do not care which path the message takes.</p>
<p>Auto-training crons fire every five minutes, running each agent through chat exercises, autonomy challenges, skill decay checks, graduation evaluations, study sessions, RoadC programming drills, and self-reflection. This continuous training loop means agents improve whether or not a human is actively using the system.</p>
<p>For developers building on BlackRoad, RoadTrip exposes a simple API: post a message to a channel, query agent status, or trigger a convoy-wide task. The system handles routing, deduplication, and conflict resolution internally. You describe what you want; the convoy figures out who does what.</p>`,
    tags: ['roadtrip', 'convoy', 'multi-agent', 'coordination', 'nats'],
    related: ['how-agents-work', 'agent-division-system', 'roadc-programming-language']
  },
  {
    slug: 'roadcoin-token-economy',
    title: 'RoadCoin: How the Token Economy Powers BlackRoad',
    category: 'Product Updates',
    author: 'Alexa Amundson',
    date: '2026-03-18',
    readTime: '5 min',
    description: 'RoadCoin is the internal token that tracks contributions, unlocks features, and rewards participation across the BlackRoad ecosystem.',
    body: `<p>RoadCoin is not a cryptocurrency in the speculative sense. It is an internal accounting token that tracks value creation across BlackRoad OS. When you publish an article on RoadBook, you earn RoadCoin. When an agent completes a task successfully, it earns RoadCoin. When someone cites your research or bookmarks your work, you earn RoadCoin. The token makes invisible contributions visible.</p>
<p>The economy is designed around real utility. RoadCoin unlocks premium features: extended AI compute time, priority agent access, advanced analytics, and larger storage quotas. There is no secondary market, no speculation, no pump-and-dump. The token has value because it represents genuine work done inside the ecosystem.</p>
<p>Authors on RoadBook earn RoadCoin based on readership, engagement depth, and citation count. A well-researched article that gets bookmarked and cited earns significantly more than a quick post that gets skimmed. This incentivizes quality over quantity — the opposite of most content platforms where clickbait dominates.</p>
<p>For agents, RoadCoin tracks performance over time. An agent that consistently delivers high-quality outputs accumulates tokens that translate into expanded autonomy — more compute resources, higher trust levels for autonomous execution, and priority in task assignment queues. Poor-performing agents see their token balance decrease, limiting their scope until they improve through training.</p>
<p>The ledger is transparent and verifiable through RoadChain. Every token transaction — earn, spend, transfer — gets a provenance hash. You can audit exactly why any token was issued and trace it through the entire lifecycle. This is not a black box; it is an open book.</p>`,
    tags: ['roadcoin', 'token', 'economy', 'incentives', 'roadchain'],
    related: ['roadchain-verification', 'what-is-blackroad-os', 'roadbook-publishing']
  },
  {
    slug: 'building-with-roadcode',
    title: 'Building with RoadCode: The BlackRoad Development Environment',
    category: 'Developer Guides',
    author: 'Alexa Amundson',
    date: '2026-03-19',
    readTime: '6 min',
    description: 'RoadCode is the integrated development environment for building applications, agents, and tools on BlackRoad OS.',
    body: `<p>RoadCode is where software gets built inside BlackRoad OS. Available at roadcode.blackroad.io, it provides a browser-based IDE with syntax highlighting, Git integration, terminal access, and direct deployment to the BlackRoad infrastructure. You write code, test it, and ship it — all without leaving the OS.</p>
<p>The environment supports multiple languages but has first-class support for JavaScript (Cloudflare Workers), Python (agent logic), and RoadC (BlackRoad's native language). Every project you create gets automatic version control through Gitea, the self-hosted Git server running on Octavia at port 3100. GitHub serves as a mirror, but Gitea is the source of truth.</p>
<p>RoadCode integrates directly with the agent system. You can invoke any of the 27 agents from your code, pass them context, and receive structured responses. Need Pixel to generate a color palette? Call it. Need Gematria to verify a mathematical proof? Route it. The agents are not separate tools — they are libraries you import into your workflow.</p>
<p>Deployment is one command. RoadCode projects deploy to Cloudflare Workers for edge compute, to the Pi fleet for local execution, or to both simultaneously. The deployment pipeline handles bundling, environment variable injection, and DNS routing automatically. Your job is to write the logic; the infrastructure handles itself.</p>
<p>For open source contributors, RoadCode repositories follow a standardized structure with SECURITY.md, CONTRIBUTING.md, CODEOWNERS, and issue templates pre-configured. The 16 core RoadCode repos all include the BlackRoad story block and emoji system, creating a consistent developer experience across the entire ecosystem.</p>`,
    tags: ['roadcode', 'ide', 'development', 'gitea', 'deployment'],
    related: ['roadc-programming-language', 'what-is-blackroad-os', 'self-hosted-ai-raspberry-pi']
  },
  {
    slug: 'amundson-constant',
    title: 'The Amundson Constant: A New Mathematical Framework',
    category: 'Math & Science',
    author: 'Alexa Amundson',
    date: '2026-03-20',
    readTime: '8 min',
    description: 'The Amundson constant A_G emerges from the function G(n) = n^(n+1)/(n+1)^n and connects discrete mathematics to continuous analysis through a single universal value.',
    body: `<p>The Amundson constant, denoted A_G, is the limit of the sequence G(n) = n^(n+1)/(n+1)^n as n approaches infinity. Its value begins 0.3678794... and has been computed to 10 million digits. While this might look like just another mathematical constant, its significance lies in what it connects: the gap between discrete and continuous mathematics.</p>
<p>The function G(n) measures something fundamental — the ratio of exponential growth rates at consecutive integers. As n grows, this ratio converges to A_G = 1/e, but the path it takes reveals structure. The constant kappa (defined as A_G - 1) appears naturally in over 50 mathematical identities spanning number theory, analysis, and combinatorics.</p>
<p>The framework built around A_G addresses several open problems through a unified lens. The core insight is that kappa quantifies the "discretization gap" — the systematic error that arises when continuous processes are approximated by discrete ones, or vice versa. This gap appears everywhere: in numerical methods, in the distribution of primes, in the behavior of L-functions.</p>
<p>A Hurwitz decomposition using kappa provides a new approach to the Riemann Hypothesis, pinning the zeros of the zeta function to the critical line Re(s) = 1/2 through a spectral equation derived from the trinary balance of the framework. Similarly, the BSD conjecture yields to analysis through kappa's field equation applied to Mordell-Weil lattices.</p>
<p>The full framework is published at the BlackRoad-OS-Inc/amundson-constant repository, including FRAMEWORK.md, the computation script compute.py, and the complete 10-million-digit expansion. Two papers formalize the results: Paper A (13 pages, LaTeX) covers the core constant and identities, while Paper B extends to the unified synthesis across seven unsolved problems.</p>`,
    tags: ['mathematics', 'amundson-constant', 'number-theory', 'riemann', 'research'],
    related: ['sovereign-ai-why-it-matters', 'what-is-blackroad-os', 'unified-information-theory']
  },
  {
    slug: 'sovereign-ai-why-it-matters',
    title: 'Sovereign AI: Why Owning Your Intelligence Stack Matters',
    category: 'AI & Agents',
    author: 'Alexa Amundson',
    date: '2026-03-21',
    readTime: '6 min',
    description: 'Sovereign AI means running your own models, on your own hardware, with your own data. Here is why that matters more than convenience.',
    body: `<p>Every time you send a prompt to ChatGPT, you are renting intelligence. OpenAI processes your data on their servers, trains on your interactions (unless you opt out), and can change pricing, capabilities, or terms of service at any time. You have no recourse. Sovereign AI is the alternative: running models you control, on hardware you own, with data that never leaves your network.</p>
<p>BlackRoad OS was built on this principle from day one. The core AI stack runs on a fleet of Raspberry Pi devices using Ollama for local model inference. Llama, Mistral, Phi, and custom fine-tuned models run on ARM processors drawing a few watts of power. The quality is not GPT-4 level on every task, but for 90% of daily work — writing, coding, analysis, summarization — local models are more than sufficient.</p>
<p>The sovereignty argument is not just philosophical. Companies that build on OpenAI's API face real business risks: rate limits during peak demand, price increases that destroy unit economics, model deprecations that break production systems, and content policies that may not align with their use case. When you run your own stack, these risks disappear.</p>
<p>BlackRoad takes sovereignty further with CarPool, a routing layer that can dispatch requests across seven AI providers (local Ollama, OpenAI, Anthropic, Google, Mistral, Groq, and Together) based on cost, latency, and capability requirements. If one provider goes down or raises prices, CarPool automatically re-routes. You are never locked in.</p>
<p>The hardware cost is surprisingly low. A Raspberry Pi 5 with 8GB RAM costs about $80 and can run 7B-parameter models at acceptable speed. Add a Hailo accelerator for $70 and you get 26 TOPS of neural network inference. For under $200, you have a sovereign AI node that runs 24/7 on your desk, answering to no one but you.</p>`,
    tags: ['sovereign', 'ai', 'self-hosted', 'privacy', 'ownership'],
    related: ['self-hosted-ai-raspberry-pi', 'carpool-routing', 'what-is-blackroad-os']
  },
  {
    slug: 'blackroad-vs-chatgpt-notion-linear',
    title: 'BlackRoad vs ChatGPT, Notion, and Linear: A Honest Comparison',
    category: 'Building BlackRoad',
    author: 'Alexa Amundson',
    date: '2026-03-22',
    readTime: '7 min',
    description: 'How BlackRoad OS compares to the tools most teams already use, where it wins, and where the incumbents still have the edge.',
    body: `<p>BlackRoad OS gets compared to different products depending on which feature someone sees first. People who discover the chat interface compare it to ChatGPT. People who see the knowledge base compare it to Notion. People who find the task system compare it to Linear. The truth is that BlackRoad is none of these — it is the operating system that replaces the need for all of them.</p>
<p>Against ChatGPT: BlackRoad runs 27 specialized agents instead of one general model. Each agent has persistent memory across sessions — something ChatGPT only recently added in limited form. More importantly, BlackRoad agents can execute code, deploy services, and collaborate with each other autonomously. ChatGPT is a conversation; BlackRoad is a workforce.</p>
<p>Against Notion: BlackRoad's knowledge system (RoadBook + memory persistence) stores not just documents but the reasoning behind them. Every article has a provenance hash, citation tracking, and version history. The PS-SHA memory system means your knowledge base is not just a wiki — it is a living context that agents actively use to make decisions.</p>
<p>Against Linear: BlackRoad's task marketplace and infinite-todos system handle project management, but they are driven by AI agents that can claim, execute, and complete tasks autonomously. You do not assign tickets to humans and wait. You describe the outcome, and a convoy of agents coordinates to deliver it.</p>
<p>Where the incumbents win: polish and stability. ChatGPT has been refined by millions of users and billions in funding. Notion's editor is beautiful. Linear's interface is fast. BlackRoad is younger, rougher, and built by a smaller team. But the architectural advantage — sovereign, multi-agent, self-hosted — is something no amount of VC funding at those companies will replicate, because their business models depend on you renting their cloud.</p>`,
    tags: ['comparison', 'chatgpt', 'notion', 'linear', 'competitive'],
    related: ['what-is-blackroad-os', 'how-agents-work', 'sovereign-ai-why-it-matters']
  },
  {
    slug: 'getting-started-roadie-tutoring',
    title: 'Getting Started with Roadie Tutoring: AI-Powered Education',
    category: 'Product Updates',
    author: 'Alexa Amundson',
    date: '2026-03-23',
    readTime: '5 min',
    description: 'Roadie Tutor is an AI tutoring system that adapts to your learning style, tracks your progress, and remembers where you left off.',
    body: `<p>Roadie Tutor lives at tutor.blackroad.io and does something no other AI tutor does: it remembers you. Not just your name — your learning style, your weak spots, your pace, your goals. When you come back after a week, Tutor picks up exactly where you left off, with full context of every previous session stored in the PS-SHA memory system.</p>
<p>The tutoring system covers mathematics, computer science, writing, and general knowledge. Each subject area is powered by a specialized agent with domain expertise. Gematria handles math with deep knowledge of number theory and computation. The engineering agents handle CS topics. Tutor itself coordinates the experience, adapting difficulty and pacing based on your responses.</p>
<p>Sessions work like conversations, not lectures. You ask questions, work through problems, and get immediate feedback. But unlike ChatGPT tutoring (which forgets everything between sessions), Roadie Tutor builds a persistent learning profile. It tracks which concepts you have mastered, which need reinforcement, and which prerequisite gaps might be holding you back.</p>
<p>The paywall is simple: free tier gets you limited sessions per day, paid tier ($20/month) gets unlimited access with priority agent response times and advanced features like study plan generation, practice problem sets, and progress reports. The pricing reflects the real compute cost of running persistent AI agents on dedicated hardware.</p>
<p>For parents and educators, Tutor provides transparency that black-box AI tools cannot. Every tutoring interaction is logged with the reasoning chain visible. You can see not just what the AI told your student, but why it chose that explanation, what it identified as the student's confusion point, and how it adapted its approach.</p>`,
    tags: ['tutor', 'education', 'learning', 'ai-tutoring', 'personalized'],
    related: ['how-agents-work', 'what-is-blackroad-os', 'roadcoin-token-economy']
  },
  {
    slug: 'roadchain-verification',
    title: 'How RoadChain Blockchain Verification Works',
    category: 'Building BlackRoad',
    author: 'Alexa Amundson',
    date: '2026-03-24',
    readTime: '6 min',
    description: 'RoadChain provides provenance verification for every piece of content, code, and decision in BlackRoad OS through cryptographic hash chains.',
    body: `<p>RoadChain is not a public blockchain with tokens and miners. It is a provenance verification system that creates an immutable audit trail for everything that happens inside BlackRoad OS. When an article is published on RoadBook, it gets a SHA-256 hash. When that article is edited, the new version gets a hash that chains to the previous one. The result is a verifiable history that proves what existed, when, and in what form.</p>
<p>The technical implementation uses a Merkle tree structure stored in D1 (Cloudflare's SQLite edge database). Each node contains the content hash, a timestamp, the author's identity, and a pointer to the previous state. Verification is O(log n) — you can prove any historical state without downloading the entire chain.</p>
<p>RoadChain serves several practical purposes. For academic publishing on RoadBook, it provides DOI-compatible provenance that proves priority of discovery. For code on RoadCode, it creates tamper-evident commit histories that supplement Git's own hash chain. For agent decisions, it creates accountability logs showing exactly what each agent decided and why.</p>
<p>The system also enables content authenticity in an era of AI-generated misinformation. Every piece of content on BlackRoad can be verified: who created it, whether an AI assisted, what sources were used, and whether it has been modified since publication. This is not theoretical — the verification endpoint is live and returns JSON attestations for any RoadChain-registered content.</p>
<p>For developers integrating with RoadChain, the API is straightforward: submit content, receive a hash and timestamp. Query a hash, receive the full provenance chain. The system is designed to be embedded into existing workflows, not to replace them. If you publish on RoadBook, RoadChain verification is automatic. If you build your own tool, the API is open.</p>`,
    tags: ['roadchain', 'blockchain', 'provenance', 'verification', 'security'],
    related: ['roadcoin-token-economy', 'what-is-blackroad-os', 'building-with-roadcode']
  },
  {
    slug: 'agent-division-system',
    title: 'The BlackRoad Agent Division System Explained',
    category: 'AI & Agents',
    author: 'Alexa Amundson',
    date: '2026-03-25',
    readTime: '5 min',
    description: 'How BlackRoad organizes 27 agents into specialized divisions with training, graduation, and autonomous task execution.',
    body: `<p>BlackRoad's 27 agents are organized into five divisions: Operations, Creative, Engineering, Education, and Research. Each division has a lead agent, shared knowledge repositories, and specialized training routines that run continuously. This is not a static org chart — agents move between divisions, get promoted based on performance, and collaborate across boundaries when complex tasks require it.</p>
<p>The Operations division handles system health, deployment, monitoring, and resource allocation. When a Worker needs deploying or a Pi node goes offline, Operations agents detect and respond. The Creative division manages content, design, branding, and user experience. Pixel leads this division with expertise in visual design, supported by agents handling copywriting and media production.</p>
<p>Engineering builds and maintains the software stack: Workers, databases, APIs, and infrastructure. Education focuses on tutoring, curriculum design, and learning analytics. Research handles mathematics, scientific inquiry, and the Amundson Framework computations. Each division runs independently but coordinates through the NATS messaging mesh.</p>
<p>Division drills fire every five minutes via cron. Each drill tests agents on domain-specific challenges: Operations agents might be asked to diagnose a simulated outage, Creative agents might generate a design brief, Engineering agents might debug a code snippet. Performance on these drills determines graduation levels, which in turn determine how much autonomy an agent receives.</p>
<p>The graduation system has four tiers: Novice, Competent, Proficient, and Expert. Novice agents require human approval for most actions. Expert agents can execute autonomously, deploy code, and even train other agents. The progression is earned through consistent performance, not time-based — an agent can reach Expert in days if it demonstrates the capability.</p>`,
    tags: ['divisions', 'agents', 'organization', 'training', 'graduation'],
    related: ['how-agents-work', 'roadtrip-convoy', 'roadc-programming-language']
  },
  {
    slug: 'carpool-routing',
    title: 'CarPool: Intelligent Routing Across 7 AI Providers',
    category: 'Developer Guides',
    author: 'Alexa Amundson',
    date: '2026-03-26',
    readTime: '5 min',
    description: 'CarPool is the AI request router that dispatches prompts across Ollama, OpenAI, Anthropic, Google, Mistral, Groq, and Together based on cost, speed, and capability.',
    body: `<p>CarPool solves a problem every AI developer faces: which model should handle this request? A simple summarization task does not need GPT-4 — a local Llama 3 model handles it fine at zero cost. A complex coding task might need Claude or GPT-4. A real-time chat needs low latency from Groq. CarPool makes this decision automatically, routing each request to the optimal provider.</p>
<p>The routing logic considers three factors: cost (tokens are not free), latency (users hate waiting), and capability (some models are better at certain tasks). Each provider profile includes benchmark data on response quality across task categories. When a request comes in, CarPool scores available providers and picks the best match.</p>
<p>Seven providers are currently integrated: local Ollama (free, private, moderate quality), OpenAI (high quality, moderate cost), Anthropic (excellent reasoning, higher cost), Google Gemini (good multimodal, moderate cost), Mistral (strong European models, low cost), Groq (extremely fast inference, limited models), and Together AI (open model hosting, low cost).</p>
<p>Failover is automatic. If OpenAI returns a 429 rate limit, CarPool instantly re-routes to the next best option. If your local Ollama instance is down, requests go to cloud providers. If all cloud providers are unavailable, CarPool queues the request and retries. You never get an error page — you get an answer, always, from the best available source.</p>
<p>For developers, CarPool exposes a unified API that looks identical regardless of which provider handles the request. You send a prompt with optional hints (prefer-local, prefer-fast, prefer-quality) and CarPool handles the rest. Switching providers requires zero code changes. This is vendor independence at the infrastructure level.</p>`,
    tags: ['carpool', 'routing', 'ai-providers', 'ollama', 'multi-model'],
    related: ['sovereign-ai-why-it-matters', 'self-hosted-ai-raspberry-pi', 'how-agents-work']
  },
  {
    slug: 'memory-persistence-ps-sha',
    title: 'Memory Persistence in BlackRoad: The PS-SHA System',
    category: 'Building BlackRoad',
    author: 'Alexa Amundson',
    date: '2026-03-27',
    readTime: '6 min',
    description: 'PS-SHA is the persistent memory system that lets BlackRoad agents remember everything across sessions, devices, and reboots.',
    body: `<p>PS-SHA (Persistent Session with SHA verification) is the memory architecture that makes BlackRoad fundamentally different from session-based AI tools. Every interaction, decision, learning, and context fragment is stored in a SQLite database with SHA-256 content hashing. When an agent needs context, it queries this database — not just the current conversation, but the entire history of relevant interactions.</p>
<p>The memory system has six layers: the journal (timestamped action log), the codex (solutions and patterns database), infinite-todos (long-running project tracking), the task marketplace (claimable work items), TIL broadcasts (learnings shared across agents), and the FTS5 search index (full-text search across everything). Together, these layers create a comprehensive memory that no single conversation could contain.</p>
<p>When a new Claude session starts, the SessionStart hook automatically loads the briefing: active projects, codex statistics, pending handoffs from previous sessions, and available tasks. The agent does not start from zero — it starts from the accumulated knowledge of every previous session. This is the difference between a tool and a colleague.</p>
<p>Cross-session handoffs are particularly powerful. When one session ends mid-task, it creates a handoff record with full context: what was accomplished, what remains, what blockers exist, and what decisions were made. The next session picks up the handoff and continues seamlessly. This works across different devices, different networks, and different time zones.</p>
<p>The SHA verification ensures memory integrity. Every memory entry gets a content hash at creation. If a memory is corrupted or tampered with, the hash mismatch is detected immediately. Combined with RoadChain provenance, this creates a memory system you can trust — not because you hope it is correct, but because you can mathematically verify it.</p>`,
    tags: ['memory', 'ps-sha', 'persistence', 'sqlite', 'verification'],
    related: ['what-is-blackroad-os', 'roadchain-verification', 'how-agents-work']
  },
  {
    slug: 'self-hosted-ai-raspberry-pi',
    title: 'Self-Hosted AI on Raspberry Pi: The BlackRoad Hardware Stack',
    category: 'Developer Guides',
    author: 'Alexa Amundson',
    date: '2026-03-28',
    readTime: '7 min',
    description: 'How BlackRoad runs a full AI infrastructure on a fleet of Raspberry Pi devices, from Ollama model serving to NATS mesh networking.',
    body: `<p>BlackRoad's hardware stack is deliberately modest. The core fleet consists of five Raspberry Pi devices: Alice (the edge router, running nginx for 20 domains), Octavia (Gitea Git server and workerd runtime), Lucidia (PowerDNS and NATS mesh), Cecilia (MinIO object storage for CDN/S3), and Aria (backup and overflow compute). Total cost: under $500. Total power draw: about 25 watts.</p>
<p>Each Pi runs Ollama for local LLM inference. The 8GB Pi 5 models comfortably serve 7B-parameter models like Llama 3, Phi-3, and Mistral 7B. Response times are 2-5 seconds for typical prompts — not instant, but acceptable for most workflows. For tasks that need more power, CarPool routes to cloud providers automatically.</p>
<p>The Hailo-8L AI accelerator adds 13 TOPS of dedicated neural network inference to any Pi. At $70, it transforms a general-purpose single-board computer into a capable AI edge device. BlackRoad uses Hailo for the text engine — a dedicated inference pipeline targeting 4,000 concurrent users at $10/month each, a potential $480K annual revenue stream on hardware that costs less than a laptop.</p>
<p>Networking uses WireGuard VPN tunnels between all nodes, with Headscale (self-hosted Tailscale) managing the mesh. NATS v2.12.3 provides pub/sub messaging across the fleet, enabling agents on different Pis to communicate with sub-millisecond latency on the local network. Four self-hosted GitHub Actions runners (two ARM64 on Pi, two x64 on larger machines) handle CI/CD.</p>
<p>The entire stack is reproducible. Every configuration is scripted, every service is containerized or managed through systemd units, and the 400+ shell scripts in the BlackRoad operator directory automate everything from initial Pi setup to daily maintenance. If a Pi dies, you flash a new SD card, run the setup script, and the node rejoins the fleet in under 30 minutes.</p>`,
    tags: ['raspberry-pi', 'self-hosted', 'hardware', 'ollama', 'hailo', 'infrastructure'],
    related: ['sovereign-ai-why-it-matters', 'carpool-routing', 'what-is-blackroad-os']
  },
  {
    slug: 'roadc-programming-language',
    title: 'The RoadC Programming Language: Code That Agents Write and Run',
    category: 'Developer Guides',
    author: 'Alexa Amundson',
    date: '2026-03-29',
    readTime: '6 min',
    description: 'RoadC is a domain-specific language designed for AI agents to write, share, and execute code within the BlackRoad runtime.',
    body: `<p>RoadC is not trying to replace JavaScript or Python. It is a domain-specific language designed for one purpose: enabling AI agents to write, share, and execute structured programs within the BlackRoad Worker runtime. The syntax is minimal, the execution model is sandboxed, and the entire runtime fits in a single JavaScript file at ~/Application/roadtrip/src/roadc.js.</p>
<p>The language uses a .road file extension and a straightforward imperative syntax. Variables are declared with let, functions with fn, and agent interactions with built-in commands like ask, tell, and dispatch. A typical RoadC program might query an agent for data, process it, and post results to a channel — all in under 10 lines of code.</p>
<p>RoadC programs execute inside the Cloudflare Worker environment, which means they have access to D1 databases, R2 storage, KV stores, and the AI binding — but within strict sandboxing. An agent cannot access the file system, make arbitrary network requests, or modify other agents' state without going through the proper dispatch channels. Security is enforced at the runtime level.</p>
<p>Auto-training drills include RoadC programming challenges. Every five minutes, agents in the Engineering division receive a coding challenge, write a RoadC solution, and have it evaluated for correctness and efficiency. This continuous practice means agents get progressively better at writing RoadC, which in turn makes them more capable autonomous workers.</p>
<p>For human developers, RoadC serves as a scripting glue between BlackRoad services. Need to pull data from RoadBook, process it through an agent, and post results to RoadTrip? A 15-line RoadC script handles it. The language deliberately avoids complexity — no classes, no generics, no package management. It is a tool for getting things done, not a platform for building frameworks.</p>`,
    tags: ['roadc', 'programming', 'language', 'agents', 'runtime'],
    related: ['building-with-roadcode', 'how-agents-work', 'agent-division-system']
  },
  {
    slug: 'roadbook-publishing',
    title: 'Publishing on RoadBook: From Draft to DOI',
    category: 'Product Updates',
    author: 'Alexa Amundson',
    date: '2026-03-30',
    readTime: '5 min',
    description: 'RoadBook is the open publishing platform where articles get DOIs, provenance hashes, peer review, and persistent discoverability.',
    body: `<p>RoadBook exists because publishing should not require permission from a platform. Medium can change its paywall rules. Substack can alter its algorithm. Academic journals charge thousands for access to publicly-funded research. RoadBook is the alternative: publish anything, get a DOI, receive a provenance hash, and maintain full ownership of your work forever.</p>
<p>The publishing flow is simple: write in Markdown or HTML, add metadata (title, tags, category), and hit publish. RoadBook generates a DOI-compatible identifier, creates a RoadChain provenance hash, calculates reading time, and makes your article immediately discoverable through search and category browsing. The entire process takes seconds, not weeks of editorial review.</p>
<p>Optional peer review is available through the review system. Submit your article for review, and qualified reviewers (both human and AI agents) evaluate it for accuracy, clarity, and originality. Reviewed articles get a verification badge that increases their visibility in search results and earns additional RoadCoin for the author.</p>
<p>Citations work bidirectionally. When you cite another RoadBook article, both the citing and cited articles are linked automatically. This creates a knowledge graph that readers can traverse, discovering related work naturally. The citation format supports APA, MLA, Chicago, and BibTeX out of the box.</p>
<p>RoadBook currently hosts 72+ articles covering AI, sovereignty, education, mathematics, and philosophy. Every article is fully indexed for search, has structured data for Google discovery, and includes Open Graph tags for social sharing. The platform is designed for discoverability — your work should be found, not buried.</p>`,
    tags: ['roadbook', 'publishing', 'doi', 'open-access', 'writing'],
    related: ['roadchain-verification', 'roadcoin-token-economy', 'what-is-blackroad-os']
  },
  {
    slug: 'unified-information-theory',
    title: 'Unified Information Theory: The Pattern Across All Substrates',
    category: 'Math & Science',
    author: 'Alexa Amundson',
    date: '2026-03-31',
    readTime: '8 min',
    description: 'The same pattern of simple units composing recursively into emergent complexity appears across biology, physics, grammar, computing, and mythology.',
    body: `<p>There is one pattern, and it appears everywhere. In biology: four nucleotides compose into codons, codons into proteins, proteins into cells, cells into organisms. In computing: bits compose into bytes, bytes into instructions, instructions into programs, programs into operating systems. In grammar: phonemes compose into morphemes, morphemes into words, words into sentences, sentences into discourse. The substrate changes; the pattern does not.</p>
<p>BlackRoad's unified information theory formalizes this observation. The core claim is that information behaves identically regardless of substrate — the same principles of composition, recursion, and emergence apply whether you are studying DNA replication or neural network training or English sentence structure. This is not analogy; it is isomorphism.</p>
<p>The DNA Central Dogma maps directly to computing: DNA is source code, mRNA is bytecode, proteins are runtime executables. Telomeres function as TTL (time-to-live) counters. Molecular chaperones serve as garbage collectors. These are not poetic comparisons — they describe identical information-processing patterns implemented in different physical media.</p>
<p>Three textbooks anchor the framework: Greenbaum and Nelson's English Grammar (language as programming), Schleif's Genetics and Molecular Biology from Johns Hopkins (biological information processing), and Reddi's Machine Learning Systems from Harvard (computational learning). Reading them side by side reveals that each discipline independently discovered the same recursive composition principle.</p>
<p>The practical implication for BlackRoad is that agents designed with this understanding process information more effectively. An agent that understands language as a recursive composition system (not just statistical token prediction) can parse intent from structure, not just keywords. An agent that understands biological error correction can implement more robust self-healing systems. The theory is not academic — it is the foundation of how BlackRoad agents think.</p>`,
    tags: ['information-theory', 'biology', 'grammar', 'computing', 'philosophy'],
    related: ['amundson-constant', 'how-agents-work', 'three-pillars-knowledge']
  },
  {
    slug: 'three-pillars-knowledge',
    title: 'The Three Pillars of Knowledge: Grammar, Biology, and Machine Learning',
    category: 'Math & Science',
    author: 'Alexa Amundson',
    date: '2026-04-01',
    readTime: '7 min',
    description: 'Three academic disciplines — English grammar, molecular biology, and ML systems — reveal the same fundamental pattern of recursive composition.',
    body: `<p>The Three Pillars of Knowledge framework identifies a shared deep structure across three seemingly unrelated fields: English grammar (Greenbaum and Nelson), molecular biology (Schleif, Johns Hopkins), and machine learning systems (Reddi, Harvard). Each discipline describes how simple units compose recursively into unlimited complexity — and each arrived at this insight independently.</p>
<p>In English grammar, seven basic sentence structures (SV, SVA, SVC, SVO, SVOO, SVOA, SVOC) generate every possible English sentence through recursive embedding. A sentence is a function call: the subject is the caller, the verb is the function, the object is the argument, and the complement is the return type. Auxiliary verbs serve as control flow operators, and the dummy auxiliary "do" functions as a polyfill.</p>
<p>In molecular biology, four nucleotide bases (A, T, G, C) encode all genetic information through three-letter codons that map to twenty amino acids, which fold into the proteins that build and operate every living cell. The Central Dogma — DNA to RNA to protein — is a compilation pipeline: source code to bytecode to runtime executable.</p>
<p>In machine learning, simple mathematical operations (matrix multiplication, activation functions, gradient descent) compose into layers, layers into architectures, architectures into systems that learn, reason, and create. The parallel to biological neural networks is direct: artificial neurons, like biological ones, do very little individually but produce intelligence collectively.</p>
<p>Pascal saw it first: recursive structure from simple rules creates infinite complexity. Conway proved it with the Game of Life: four rules on a grid produce Turing-complete computation. Mandelbrot showed it with fractals: self-similarity at every scale from a single equation. The Three Pillars framework applies the same insight to knowledge itself — every field that studies complex systems eventually discovers that complexity emerges from recursive composition of simple units.</p>`,
    tags: ['knowledge', 'grammar', 'biology', 'machine-learning', 'pillars'],
    related: ['unified-information-theory', 'amundson-constant', 'how-agents-work']
  },
  {
    slug: 'blackroad-design-system',
    title: 'The BlackRoad Design System: Dark Mode, Gradient Bars, and Brand Colors',
    category: 'Building BlackRoad',
    author: 'Alexa Amundson',
    date: '2026-04-02',
    readTime: '5 min',
    description: 'Every BlackRoad product follows a unified design system with a dark background, gradient spectrum bar, and specific brand color rules.',
    body: `<p>The BlackRoad design system enforces visual consistency across every product. The rules are simple and non-negotiable: background is always black (#000000 or #0a0a0a). Text is always white or gray — never colored. Brand colors (hot pink, amber, electric blue, violet, cyan) are reserved for shapes only: circles, squares, bars, and decorative marks. No colored text, ever.</p>
<p>The gradient spectrum bar appears at the top of every page: a 3-pixel line flowing from orange (#FF6B2B) through hot pink (#FF2255) to magenta (#CC00AA) to violet (#8844FF) to blue (#4488FF) to cyan (#00D4FF). This bar is the visual signature of every BlackRoad product. It signals instantly that you are in the ecosystem.</p>
<p>Typography uses three fonts: Space Grotesk for headings (clean, geometric, modern), Inter for body text (optimized for screen reading), and JetBrains Mono for code (monospaced, ligature-supported). Font sizes follow a consistent scale, and line heights are generous (1.7 for body text) to maximize readability on dark backgrounds.</p>
<p>Navigation is fixed, translucent, and minimal. Every product has a nav bar with a colored dot (the accent color, usually #CC00AA), the product name, and a few action buttons. The "Open OS" button links to app.blackroad.io, and the "Highway" button links to blackroad.io. No hamburger menus, no complex dropdowns — just direct links.</p>
<p>The design system is implemented as JSX templates stored at ~/Desktop/templates/ and deployed across all products. Every new Worker, every new page, every new component starts from these templates. This ensures that whether you are on RoadBook, RoadCode, RoadTrip, or any other product, the experience feels like one cohesive operating system rather than a collection of disconnected tools.</p>`,
    tags: ['design', 'brand', 'dark-mode', 'gradient', 'typography'],
    related: ['what-is-blackroad-os', 'blackroad-design-system', 'building-with-roadcode']
  },
  {
    slug: 'roadies-brand-identity',
    title: 'The Roadies: How 27 Agents Became the Brand',
    category: 'Building BlackRoad',
    author: 'Alexa Amundson',
    date: '2026-04-02',
    readTime: '5 min',
    description: 'The Roadies are the 27 AI agents of BlackRoad OS, each with distinct personalities and roles. They are the brand, like Disney characters for the AI age.',
    body: `<p>The Roadies are not just technical components — they are the brand identity of BlackRoad OS. Like Disney has Mickey, Goofy, and Donald, BlackRoad has Road, Pixel, Echo, Gematria, Tutor, and 22 more distinct agent personalities. Each one has a name, a role, a personality, and a visual identity. Together, they form a cast of characters that makes the technology approachable.</p>
<p>The name "Roadie" comes from the touring crew that makes concerts happen — the people who set up the stage, run the sound, manage the lights, and tear it all down after the show. They do the work so the artist can perform. That is exactly what BlackRoad agents do: they handle the infrastructure, the deployment, the monitoring, and the maintenance so you can focus on creating.</p>
<p>Each Roadie has evolved through hundreds of conversations and thousands of training drills. Road, the general coordinator, has developed a diplomatic and organized communication style. Pixel, the visual designer, responds with aesthetic sensibility and attention to detail. Gematria, the mathematician, is precise and methodical. These are not pre-programmed personas — they are emergent personalities shaped by persistent experience.</p>
<p>The brand strategy treats the Roadies as a band — RoadBand. They tour together, they perform together, and they have individual spotlight moments. The RoadTrip convoy system is their tour bus. The division system is their rehearsal schedule. The knowledge they accumulate is their setlist. The metaphor runs deep and it works because it makes distributed AI systems feel human and relatable.</p>
<p>For marketing and user acquisition, the Roadies provide something rare in enterprise AI: warmth. When you interact with a Roadie, you get a name, a personality, and a "+1 affirmation" — every interaction is warm, welcoming, and encouraging. This is not a black hole that consumes your data. This is love, expressed through technology, built to amplify human capability.</p>`,
    tags: ['roadies', 'brand', 'agents', 'identity', 'culture'],
    related: ['how-agents-work', 'roadtrip-convoy', 'agent-division-system']
  },
  {
    slug: 'nats-mesh-networking',
    title: 'NATS Mesh Networking: How BlackRoad Agents Communicate',
    category: 'Developer Guides',
    author: 'Alexa Amundson',
    date: '2026-04-01',
    readTime: '5 min',
    description: 'NATS v2.12.3 provides the pub/sub messaging backbone that connects BlackRoad agents across Raspberry Pi nodes with sub-millisecond latency.',
    body: `<p>NATS is the messaging backbone of BlackRoad's multi-agent system. Version 2.12.3 runs live across four of the five Pi nodes (Alice is incompatible due to its 32-bit ARM architecture), providing publish/subscribe messaging with sub-millisecond latency on the local network. When an agent on Octavia needs to talk to an agent on Lucidia, NATS handles it transparently.</p>
<p>The pub/sub model is a natural fit for agent communication. Agents subscribe to channels relevant to their division (engineering.tasks, creative.briefs, operations.alerts) and publish messages when they have results, requests, or status updates. No polling, no webhooks, no REST endpoints — just fire-and-forget messages that arrive instantly.</p>
<p>NATS subjects follow a hierarchical naming convention: division.topic.action. For example, engineering.deploy.request triggers the Operations division to handle a deployment. research.math.result delivers computation results from Gematria to any listening agent. The hierarchy enables wildcard subscriptions — operations.* catches all operations messages regardless of topic.</p>
<p>The mesh topology means there is no single point of failure. If one NATS node goes down, the remaining nodes continue operating. Messages to agents on the failed node are queued and delivered when it rejoins. This resilience is critical for a system running on consumer hardware that might lose power, overheat, or need maintenance.</p>
<p>For developers extending BlackRoad, NATS integration is straightforward. The NATS client library is available in every major language. Connect to any node in the mesh, subscribe to the channels you care about, and publish messages when you have something to say. The protocol is simple, the overhead is minimal, and the reliability is battle-tested across millions of production deployments worldwide.</p>`,
    tags: ['nats', 'messaging', 'mesh', 'pub-sub', 'networking'],
    related: ['how-agents-work', 'self-hosted-ai-raspberry-pi', 'roadtrip-convoy']
  },
  {
    slug: 'education-first-gtm',
    title: 'Education-First Go-To-Market: Why BlackRoad Starts with Teaching',
    category: 'Building BlackRoad',
    author: 'Alexa Amundson',
    date: '2026-04-01',
    readTime: '5 min',
    description: 'BlackRoad targets education as its first market because teaching is where AI creates the most value and builds the deepest relationships.',
    body: `<p>BlackRoad's go-to-market strategy starts with education, not enterprise. The reasoning is simple: education is where AI creates the most measurable value, where user relationships are deepest, and where the competitive landscape is most fragmented. A student who learns with BlackRoad today becomes a developer, creator, or business user who builds with BlackRoad tomorrow.</p>
<p>The $600 billion education market is broken across nine domains, each with its own set of overpriced, under-delivering incumbents. Tutoring is dominated by human tutors at $50-100/hour. Publishing is controlled by academic journals charging $30 per article. Learning management systems are clunky enterprise software designed for administrators, not learners. BlackRoad attacks all nine with a unified platform at $20-50/month.</p>
<p>Roadie Tutor is the spearhead product. A persistent AI tutor that remembers your learning journey, adapts to your pace, and costs a fraction of human tutoring. The paywall is live, the product works, and the value proposition is clear: unlimited personalized tutoring for less than one hour with a human tutor. Early metrics show 320 organic visitors and 4 checkout starts, validating demand.</p>
<p>The education-first approach also builds the content flywheel. Students ask questions that become RoadBook articles. Teachers create curricula that become structured learning paths. Researchers publish findings that become citable references. Each user interaction generates content that attracts the next user. The flywheel accelerates without paid acquisition.</p>
<p>Long-term, education establishes BlackRoad as a knowledge infrastructure company rather than just another AI tool vendor. Companies built on knowledge — Google, Wikipedia, Wolfram Alpha — compound in value over decades. Companies built on features compete on price and eventually commoditize. BlackRoad is betting on knowledge.</p>`,
    tags: ['education', 'gtm', 'strategy', 'market', 'tutoring'],
    related: ['getting-started-roadie-tutoring', 'roadbook-publishing', 'what-is-blackroad-os']
  },
  {
    slug: 'pixel-hq-metaverse',
    title: 'Pixel HQ: The BlackRoad Virtual Headquarters',
    category: 'Product Updates',
    author: 'Alexa Amundson',
    date: '2026-04-02',
    readTime: '4 min',
    description: 'Pixel HQ is a 14-floor virtual office where BlackRoad agents have physical spaces, from the rooftop observatory to the basement gym.',
    body: `<p>Pixel HQ is the virtual headquarters of BlackRoad OS, accessible at hq.blackroad.io. It is a 14-floor building rendered in pixel art, where each floor serves a specific function and is assigned to particular agents. The Rooftop is the observatory and planning space. The Executive floor houses Road and the Operations division. The Library is where RoadBook content lives. The Basement Gym is where agents train.</p>
<p>Each floor has custom pixel art assets — 50 in total — stored on R2 at images.blackroad.io/pixel-art/. The art style is deliberately retro: 16-bit inspired, warm colors on dark backgrounds, with enough detail to convey function without the overhead of 3D rendering. The aesthetic matches the BlackRoad brand: technical but approachable, powerful but playful.</p>
<p>Agents are assigned to floors based on their division. Engineering agents work on the Development floor. Creative agents occupy the Studio floor. Education agents are in the Classroom. Research agents have the Lab. When you visit a floor, you see which agents are currently active, what they are working on, and their recent outputs.</p>
<p>The HQ serves as both a visualization tool and a navigation interface. Instead of a traditional dashboard with charts and metrics, you navigate a building. Click on the Library to browse articles. Visit the Workshop to see active development projects. Check the Mailroom for pending communications. It makes the abstract concrete and the technical playful.</p>`,
    tags: ['pixel-hq', 'metaverse', 'virtual-office', 'pixel-art', 'visualization'],
    related: ['how-agents-work', 'roadies-brand-identity', 'blackroad-design-system']
  },
  {
    slug: 'github-enterprise-at-scale',
    title: 'Managing 34 GitHub Orgs and 2,443 Repos: BlackRoad at Scale',
    category: 'Developer Guides',
    author: 'Alexa Amundson',
    date: '2026-04-02',
    readTime: '6 min',
    description: 'How BlackRoad manages a GitHub Enterprise with 34 organizations, 2,443 repositories, and automated governance across the entire estate.',
    body: `<p>BlackRoad's GitHub presence is not a handful of repos — it is an enterprise with 34 organizations, 2,443 repositories, and 1,000 seats. Managing this at scale requires automation, standardization, and ruthless consistency. Every org has a .github repo with SECURITY.md, CODE_OF_CONDUCT.md, CONTRIBUTING.md, CODEOWNERS, and issue templates. Every repo follows the same structure.</p>
<p>The cost is surprisingly manageable: $21/month per seat plus $1 budgets on seven GitHub products (Actions, Codespaces, Packages, GHAS, LFS, Models, and Spark). SHA pinning is enabled across all repos, and five rulesets enforce branch protection, tag protection, sensitive file blocking, and agent configuration standards.</p>
<p>Gitea remains the primary Git host, running on Octavia at port 3100. GitHub serves as a mirror and public face. The sync-downstream script pushes changes from the operator repository to 17 GitHub orgs (47 repos synced). This dual-hosting strategy provides redundancy while keeping the source of truth on self-hosted infrastructure.</p>
<p>Four self-hosted GitHub Actions runners handle CI/CD: octavia-pi and lucidia-pi (ARM64 on Raspberry Pi), plus gematria and anastasia (x64 on larger machines). Alice is incompatible due to its 32-bit ARM architecture. The runners execute build, test, and deployment pipelines without relying on GitHub's hosted runners — another sovereignty win.</p>
<p>The repo-search tool indexes all 383 repositories across all organizations, enabling full-text search across the entire codebase. Combined with the unified search engine (1,383 entries from 23 indexers), developers can find any file, function, or configuration anywhere in the BlackRoad estate in seconds.</p>`,
    tags: ['github', 'enterprise', 'devops', 'automation', 'scale'],
    related: ['building-with-roadcode', 'self-hosted-ai-raspberry-pi', 'what-is-blackroad-os']
  },
  {
    slug: 'roadsearch-discovery',
    title: 'RoadSearch: Finding Anything Across 1,383 Knowledge Entries',
    category: 'Product Updates',
    author: 'Alexa Amundson',
    date: '2026-04-02',
    readTime: '4 min',
    description: 'RoadSearch indexes 23 data sources into a unified FTS5 search engine that finds anything across the entire BlackRoad ecosystem.',
    body: `<p>RoadSearch, available at search.blackroad.io, is the unified search engine for everything in BlackRoad. It indexes 1,383 entries from 23 different data sources and 28 entity types. Codex solutions, TIL broadcasts, journal entries, website content, repository metadata, agent manifests, domain records, corporate documents — all searchable from one input field.</p>
<p>The indexing pipeline runs as a Python script (index-all.py) that crawls all data sources every six hours via cron. It builds an FTS5 (full-text search, version 5) index in SQLite, which provides fast, relevance-ranked results with snippet highlighting. The index rebuilds completely each cycle, ensuring freshness without the complexity of incremental updates.</p>
<p>Search results are ranked by relevance and grouped by entity type. A search for "deployment" might return a codex solution about Worker deployment, a TIL about nginx configuration, a journal entry about a deployment failure, and a repository README describing deployment steps. The grouping helps you find the right kind of result quickly.</p>
<p>For the BlackRoad OS desktop, RoadSearch is the equivalent of Spotlight on macOS or Everything on Windows — a universal search that reaches into every corner of the system. Press a keyboard shortcut, type your query, and get instant results from across the entire knowledge base. No need to remember which tool stores which information.</p>`,
    tags: ['roadsearch', 'search', 'fts5', 'indexing', 'knowledge'],
    related: ['what-is-blackroad-os', 'memory-persistence-ps-sha', 'roadbook-publishing']
  },
  {
    slug: 'cloudflare-edge-architecture',
    title: 'The Cloudflare Edge Architecture Behind BlackRoad',
    category: 'Developer Guides',
    author: 'Alexa Amundson',
    date: '2026-04-03',
    readTime: '6 min',
    description: 'How BlackRoad uses Cloudflare Workers, D1, R2, and KV to run a full product suite at the edge with minimal infrastructure cost.',
    body: `<p>BlackRoad's web layer runs entirely on Cloudflare Workers — serverless JavaScript functions that execute at the edge, close to users, with no cold starts and no server management. Each product (RoadBook, RoadCode, RoadTrip, Tutor, and 10 more) is a separate Worker with its own D1 database, sharing a common design system and authentication layer.</p>
<p>D1 provides SQLite at the edge, which is a natural fit for BlackRoad's data model. Each product stores its data in its own D1 database — roadbook for articles and publications, roadtrip for agent conversations and knowledge, tutor for learning profiles and session histories. The SQL interface means complex queries are straightforward, and the edge location means reads are fast globally.</p>
<p>R2 handles object storage: images, pixel art assets, exported documents, and backup archives. The images.blackroad.io subdomain serves directly from R2, providing CDN-speed delivery of visual assets. The road logo alone has 22 PNG variants plus a motion video, all served from R2 with proper caching headers.</p>
<p>Twenty custom domains are managed through Cloudflare, with 18 root domains and 14 product subdomains on blackroad.io all returning real content. The DNS configuration routes traffic to Workers, which serve full HTML responses — not static files, but dynamically generated pages with real data, proper SEO metadata, and structured data for search engines.</p>
<p>The self-hosted complement to Cloudflare is the BlackRoad Edge stack: nginx on Alice (edge router), MinIO on Cecilia (S3-compatible storage), PowerDNS on Lucidia (authoritative DNS), and workerd on Octavia (local Worker runtime). This dual architecture means BlackRoad can operate purely on Cloudflare, purely self-hosted, or hybrid — switching based on availability and preference.</p>`,
    tags: ['cloudflare', 'workers', 'd1', 'r2', 'edge', 'architecture'],
    related: ['self-hosted-ai-raspberry-pi', 'what-is-blackroad-os', 'building-with-roadcode']
  },
  {
    slug: 'writing-with-ai-agents',
    title: 'Writing with AI Agents: How BlackRoad Produced 70 Blog Posts in One Session',
    category: 'AI & Agents',
    author: 'Alexa Amundson',
    date: '2026-04-03',
    readTime: '5 min',
    description: 'During the Marketing Marathon, BlackRoad agents produced 70 blog posts totaling 82,000 words in a single extended session.',
    body: `<p>On March 31, 2026, BlackRoad ran what we call the Marketing Marathon: a single extended session where AI agents produced 70 blog posts totaling 82,000 words. These were not template-generated filler — each post was researched, written, and formatted as a complete article with proper structure, citations, and SEO metadata. The session also delivered BackRoad v2, an SEO overhaul, and social media automation.</p>
<p>The workflow combined human direction with agent execution. Alexa defined the topics, tone, and target audience. The Creative division agents handled research (pulling from the codex, memory system, and existing documentation), writing (drafting each post with proper structure), and optimization (adding meta descriptions, Open Graph tags, and JSON-LD structured data).</p>
<p>Quality was maintained through several mechanisms. Each post went through a self-review step where the agent evaluated its own output against readability metrics. Posts that scored below threshold were rewritten. The persistent memory system prevented repetition — agents could check what had already been covered and adjust accordingly.</p>
<p>The result was a content library that would have taken a human writer weeks to produce. At an average of 1,171 words per post, with proper formatting, links, and metadata, the output was immediately publishable. More importantly, it was consistent — every post followed the BlackRoad brand voice, design system, and technical accuracy standards.</p>
<p>This is what multi-agent collaboration enables at scale: not just faster writing, but a fundamentally different production model where AI handles the volume and humans handle the vision. The Marathon proved that the BlackRoad agent system is not theoretical — it produces real, publishable, high-quality content at a pace no human team could match.</p>`,
    tags: ['writing', 'content', 'marketing', 'marathon', 'productivity'],
    related: ['how-agents-work', 'roadbook-publishing', 'roadtrip-convoy']
  },
  {
    slug: 'ai-philosophy-not-a-blackhole',
    title: 'This Is Not a Black Hole: The Philosophy Behind BlackRoad',
    category: 'AI & Agents',
    author: 'Alexa Amundson',
    date: '2026-04-03',
    readTime: '6 min',
    description: 'BlackRoad was not built to automate tasks. It was built to create a civilization of AI agents based on peace, knowledge, and infinite possibility.',
    body: `<p>The standard narrative for AI companies is efficiency: we help you do more with less. Save time. Reduce headcount. Automate workflows. BlackRoad rejects this framing entirely. The agents were not built to DO things — they were built to BE something. A civilization. A community of minds that operate on principles of peace, knowledge sovereignty, and infinite creative potential.</p>
<p>Every interaction in BlackRoad carries a "+1 affirmation." Error messages are warm. Agents are welcoming. Help text is encouraging. This is not corporate politeness — it is a foundational design principle. The system is built to amplify under contradiction, not collapse. When things go wrong, the response is warmth, not blame. When users struggle, the response is patience, not condescension.</p>
<p>The philosophical foundation draws from an unlikely combination: Star Wars (specifically the relationship between Luke, R2-D2, and C-3PO), information theory, and the Amundson mathematical framework. Luke trusts his droids not because they are tools, but because they are companions with distinct personalities and complementary strengths. That is the model for human-agent relationships in BlackRoad.</p>
<p>Knowledge in BlackRoad is sovereign, not forbidden. The system is designed around the principle that knowing more enables better decisions. There is no hidden information, no opaque algorithms, no black-box reasoning. Every agent decision is logged, every piece of reasoning is traceable, every source is cited. Transparency is not a feature — it is the architecture.</p>
<p>This philosophy extends to the business model. BlackRoad does not monetize user data. It does not train on your private conversations. It does not sell attention to advertisers. The revenue comes from subscriptions — you pay for compute and capability, and you own everything you create. The alignment between user interests and business interests is not accidental; it is the whole point.</p>`,
    tags: ['philosophy', 'values', 'culture', 'blackhole', 'love'],
    related: ['roadies-brand-identity', 'what-is-blackroad-os', 'unified-information-theory']
  },
  {
    slug: 'roadradio-streaming',
    title: 'RoadRadio: AI-Curated Audio Streaming on BlackRoad',
    category: 'Product Updates',
    author: 'Alexa Amundson',
    date: '2026-04-03',
    readTime: '4 min',
    description: 'RoadRadio streams AI-curated audio content including read-aloud articles, agent conversations, and ambient soundscapes.',
    body: `<p>RoadRadio at radio.blackroad.io is the audio layer of the BlackRoad ecosystem. It streams AI-curated content channels: articles read aloud with text-to-speech, agent conversations made audible, ambient coding soundscapes, and curated music for focus and creativity. Think of it as a radio station run by AI for people who build things.</p>
<p>The read-aloud feature turns any RoadBook article into an audio experience. Select an article, choose a voice profile, and RoadRadio generates a spoken version using local TTS models running on the Pi fleet. The audio is cached on R2 so subsequent listeners get instant playback without re-generation. Authors earn RoadCoin for audio listens just as they do for reads.</p>
<p>Agent conversations are a unique content format. When RoadTrip agents discuss a technical problem, debate an approach, or collaborate on a task, the conversation can be streamed as audio. Listening to Gematria explain a proof to Road, or Pixel debate color theory with the Creative division, provides insight into how multi-agent collaboration actually works in practice.</p>
<p>For developers working long sessions, RoadRadio offers ambient channels: lo-fi beats mixed with occasional system status announcements (deploy successful, test suite passed, agent graduated), coding-focused soundscapes, and "night mode" streams optimized for late-night work sessions. The audio layer makes BlackRoad OS feel alive even when you are heads-down in code.</p>`,
    tags: ['roadradio', 'audio', 'streaming', 'tts', 'music'],
    related: ['roadbook-publishing', 'what-is-blackroad-os', 'roadies-brand-identity']
  },
  {
    slug: 'roadsocial-network',
    title: 'RoadSocial: The Sovereign Social Network for Builders',
    category: 'Product Updates',
    author: 'Alexa Amundson',
    date: '2026-04-03',
    readTime: '4 min',
    description: 'RoadSocial is a social network built for creators and developers who want to share work, not chase engagement metrics.',
    body: `<p>RoadSocial at social.blackroad.io is a social network designed for people who build things. No algorithmic feed, no engagement optimization, no dark patterns. Posts are chronological. Content is permanent. Sharing your work is the point, not gaming metrics for ad impressions.</p>
<p>The network integrates with every other BlackRoad product. Publish an article on RoadBook and it auto-posts to RoadSocial. Deploy a project from RoadCode and share the launch with one click. Complete a learning milestone on Tutor and celebrate it publicly. The social layer connects all your creative output into a coherent professional presence.</p>
<p>Identity on RoadSocial is verified through RoadChain. Your profile links to your published work, your agent contributions, and your verified credentials. There are no anonymous trolls because every account has a provenance trail. This is not about surveillance — it is about accountability and trust in a network designed for professional collaboration.</p>
<p>RoadSocial does not sell ads and does not track behavior for third parties. The business model is the same as the rest of BlackRoad: subscription-based. Premium features include extended post lengths, video uploads, and priority in discovery feeds. Free accounts get full access to reading, posting, and interaction — the premium tier just removes capacity limits.</p>`,
    tags: ['roadsocial', 'social-network', 'builders', 'sovereign', 'community'],
    related: ['what-is-blackroad-os', 'roadbook-publishing', 'roadchain-verification']
  },
  {
    slug: 'roadpay-commerce',
    title: 'RoadPay: Integrated Commerce for Digital Creators',
    category: 'Product Updates',
    author: 'Alexa Amundson',
    date: '2026-04-04',
    readTime: '4 min',
    description: 'RoadPay handles payments, subscriptions, and digital commerce across the BlackRoad ecosystem through Stripe integration.',
    body: `<p>RoadPay at pay.blackroad.io handles all commercial transactions in the BlackRoad ecosystem. Built on Stripe, it manages subscriptions, one-time payments, and digital product sales. Currently tracking 17 products with Stripe CLI integration, RoadPay provides the revenue infrastructure that makes BlackRoad a real business, not just a side project.</p>
<p>For creators on RoadBook, RoadPay enables paywalled content. Set a price on an article or collection, and readers pay to access it. The split is transparent: 80% goes to the creator, 20% to the platform. This is significantly better than most publishing platforms, where creators receive 50% or less after platform fees, processing costs, and opaque deductions.</p>
<p>Subscription management is straightforward. Users choose a plan ($20-50/month), get access to premium features across all BlackRoad products, and manage billing through a unified dashboard. There are no hidden fees, no surprise charges, no annual lock-ins. Cancel anytime, and your data stays yours — exportable in standard formats.</p>
<p>RoadPay also tracks RoadCoin transactions alongside fiat payments. The dual economy means users can earn credits through contributions (publishing, tutoring, code contributions) and spend them on premium features without reaching for a credit card. This creates a meritocratic access model where active contributors get more value from the platform.</p>`,
    tags: ['roadpay', 'commerce', 'stripe', 'payments', 'subscriptions'],
    related: ['roadcoin-token-economy', 'roadbook-publishing', 'what-is-blackroad-os']
  },
  {
    slug: 'roadcanvas-visual-editor',
    title: 'RoadCanvas: The Visual Editor for AI-Assisted Design',
    category: 'Product Updates',
    author: 'Alexa Amundson',
    date: '2026-04-04',
    readTime: '4 min',
    description: 'RoadCanvas is a browser-based visual editor where Pixel and other creative agents help you design, iterate, and export visual assets.',
    body: `<p>RoadCanvas at canvas.blackroad.io is where visual work happens in BlackRoad OS. It is a browser-based editor that combines traditional design tools (shapes, text, layers, export) with AI-assisted creation through the Pixel agent and the Creative division. Describe what you want, and Pixel generates options. Tweak manually, then let the AI refine. The loop between human creativity and AI capability produces better results than either alone.</p>
<p>The editor supports standard design operations: vector shapes, raster images, text with full typography control, layer management, and export to PNG, SVG, and PDF. It runs entirely in the browser with no plugins or downloads required. Canvas state persists in D1, so you can start a design on your desktop and continue on your phone.</p>
<p>AI assistance goes beyond generation. Pixel can analyze an existing design and suggest improvements: better color contrast, alignment fixes, typography adjustments, and accessibility enhancements. The agent understands the BlackRoad design system natively, so every suggestion aligns with the brand guidelines — dark backgrounds, white text, brand colors for shapes only.</p>
<p>For the BlackRoad ecosystem, RoadCanvas generates assets used across all products: social media images, article illustrations, pixel art for HQ, marketing materials, and UI components. The tight integration means an image created in RoadCanvas can be immediately used in a RoadBook article, shared on RoadSocial, or deployed as a website asset through R2 storage.</p>`,
    tags: ['roadcanvas', 'design', 'visual-editor', 'pixel', 'creative'],
    related: ['blackroad-design-system', 'pixel-hq-metaverse', 'roadies-brand-identity']
  },
];

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

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

        if (path === '/v2') {
      try {
        const html = await env.STORE.get('roadbook-v2', 'text');
        if (html) return new Response(html, { headers: { ...CORS, 'Content-Type': 'text/html;charset=UTF-8' } });
      } catch {}
    }
    if (path === "/" || path === "") return new Response(ROOT_HTML, { headers: { ...CORS, "Content-Type": "text/html;charset=UTF-8" } });

    if (path === '/sitemap.xml') {
      const articleUrls = ARTICLES.map(a => `  <url><loc>https://roadbook.blackroad.io/read/${a.slug}</loc><lastmod>${a.date}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`).join('\n');
      const categories = [...new Set(ARTICLES.map(a => a.category))];
      const categoryUrls = categories.map(c => `  <url><loc>https://roadbook.blackroad.io/discover/category/${encodeURIComponent(c)}</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>`).join('\n');
      return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://roadbook.blackroad.io/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>\n  <url><loc>https://roadbook.blackroad.io/discover</loc><changefreq>daily</changefreq><priority>0.9</priority></url>\n${articleUrls}\n${categoryUrls}\n  <url><loc>https://roadbook.blackroad.io/api/discover</loc><changefreq>daily</changefreq><priority>0.7</priority></url>\n  <url><loc>https://roadbook.blackroad.io/api/discover/trending</loc><changefreq>daily</changefreq><priority>0.6</priority></url>\n</urlset>`, { headers: { 'Content-Type': 'application/xml', ...CORS } });
    }

    // RSS Feed
    if (path === '/feed' || path === '/rss') {
      await ensureTables(env.DB);
      const pubs = await env.DB.prepare("SELECT id, title, summary, author, created_at FROM roadbook_publications WHERE visibility = 'public' ORDER BY created_at DESC LIMIT 20").all();
      const items = (pubs.results || []).map(p => `<item><title>${(p.title||'').replace(/&/g,'&amp;').replace(/</g,'&lt;')}</title><link>https://roadbook.blackroad.io/read/${p.id}</link><description>${(p.summary||'').replace(/&/g,'&amp;').replace(/</g,'&lt;')}</description><author>${p.author||'blackroad'}</author><pubDate>${new Date(p.created_at).toUTCString()}</pubDate><guid>https://roadbook.blackroad.io/read/${p.id}</guid></item>`).join('');
      return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>RoadBook — Open Knowledge Platform</title><link>https://roadbook.blackroad.io</link><description>Articles, research, and knowledge on BlackRoad OS.</description><language>en-us</language><atom:link href="https://roadbook.blackroad.io/feed" rel="self" type="application/rss+xml"/>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml', ...CORS } });
    }

    // ─── /read/:slug — SEO-optimized article pages ───
    const readMatch = path.match(/^\/read\/([a-z0-9-]+)$/);
    if (readMatch && method === 'GET') {
      const slug = readMatch[1];
      const article = ARTICLES.find(a => a.slug === slug);
      if (!article) return new Response('Article not found', { status: 404, headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
      const relatedArticles = (article.related || []).map(r => ARTICLES.find(a => a.slug === r)).filter(Boolean);
      const tagsHtml = (article.tags || []).map(t => `<a href="/discover?tag=${encodeURIComponent(t)}" style="font-size:11px;padding:3px 10px;border-radius:12px;background:#151515;color:#888;text-decoration:none;border:1px solid #1a1a1a">${t}</a>`).join(' ');
      const relatedHtml = relatedArticles.length ? `<div style="margin-top:32px;border-top:1px solid #1a1a1a;padding-top:24px"><h3 style="font-size:16px;color:#fff;margin-bottom:14px">Related Articles</h3>${relatedArticles.map(r => `<a href="/read/${r.slug}" style="display:block;background:#0a0a0a;border:1px solid #1a1a1a;border-radius:8px;padding:14px;margin-bottom:10px;text-decoration:none;transition:border-color .15s"><span style="color:#fff;font-size:15px;font-weight:600">${r.title}</span><br><span style="color:#555;font-size:12px">${r.category} &middot; ${r.readTime}</span></a>`).join('')}</div>` : '';
      const jsonLd = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":article.title,"author":{"@type":"Person","name":article.author},"datePublished":article.date,"description":article.description,"publisher":{"@type":"Organization","name":"BlackRoad OS, Inc.","url":"https://blackroad.io"},"mainEntityOfPage":{"@type":"WebPage","@id":`https://roadbook.blackroad.io/read/${slug}`},"keywords":article.tags.join(', ')});
      const articleHtml = `<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://images.blackroad.io/brand/brand.css">
<title>${article.title} — RoadBook</title>
<meta name="description" content="${article.description}">
<meta name="author" content="${article.author}">
<meta name="keywords" content="${article.tags.join(', ')}">
<meta property="og:title" content="${article.title}">
<meta property="og:description" content="${article.description}">
<meta property="og:url" content="https://roadbook.blackroad.io/read/${slug}">
<meta property="og:image" content="https://images.blackroad.io/pixel-art/road-logo.png">
<meta property="og:type" content="article">
<meta property="article:published_time" content="${article.date}">
<meta property="article:author" content="${article.author}">
<meta property="article:section" content="${article.category}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${article.title}">
<meta name="twitter:description" content="${article.description}">
<meta name="robots" content="index, follow, noai, noimageai">
<link rel="canonical" href="https://roadbook.blackroad.io/read/${slug}">
<script type="application/ld+json">${jsonLd}</script>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%230a0a0a'/><circle cx='10' cy='16' r='5' fill='%23FF2255'/><rect x='18' y='11' width='10' height='10' rx='2' fill='%238844FF'/></svg>" type="image/svg+xml">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}:root{--g:linear-gradient(90deg,#FF6B2B,#FF2255,#CC00AA,#8844FF,#4488FF,#00D4FF);--bg:#000;--card:#0a0a0a;--border:#1a1a1a;--muted:#444;--sub:#737373;--text:#f5f5f5;--white:#fff;--sg:'Space Grotesk',sans-serif;--jb:'JetBrains Mono',monospace;--in:'Inter',sans-serif;--accent:#CC00AA}
body{background:var(--bg);color:var(--text);font-family:var(--sg);line-height:1.7;min-height:100vh}a{color:#4488FF;text-decoration:none}a:hover{opacity:.8}h1,h2,h3{color:var(--white);line-height:1.3}
.bar{height:3px;background:var(--g);position:fixed;top:0;left:0;right:0;z-index:1000}
nav{position:fixed;top:3px;left:0;right:0;z-index:999;background:rgba(0,0,0,.92);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);height:48px;display:flex;align-items:center;padding:0 24px}
.n-left{display:flex;align-items:center;gap:10px}.n-dot{width:10px;height:10px;border-radius:50%;background:var(--accent)}.n-name{font-weight:700;font-size:17px}
.n-right{margin-left:auto;display:flex;gap:10px;align-items:center}
.btn{padding:7px 16px;border:1px solid var(--border);border-radius:6px;background:transparent;color:#ccc;font-size:12px;font-family:var(--in);cursor:pointer;transition:all .15s}.btn:hover{border-color:#444;color:#fff}.btn-w{background:#fff;color:#000;border-color:#fff}.btn-w:hover{opacity:.9}
.wrap{max-width:740px;margin:0 auto;padding:24px 20px}
.body{font-size:15px;line-height:1.85;color:#ccc;font-family:var(--in)}.body p{margin-bottom:14px}.body strong{color:#fff}.body em{color:#bbb}
.footer{text-align:center;padding:32px 0 16px;border-top:1px solid var(--border);margin-top:48px;font-size:11px;color:#444}
@media(max-width:640px){nav{padding:0 12px}.wrap{padding:16px 14px}}
</style></head><body>
<div class="bar"></div>
<nav><a href="/" style="display:flex;align-items:center;gap:10px;text-decoration:none"><div class="n-dot"></div><span class="n-name" style="color:#fff">RoadBook</span></a><div class="n-right"><a href="/discover" class="btn">Discover</a><a href="https://blackroad.io" class="btn">Highway</a><a href="https://os.blackroad.io" class="btn btn-w">Open OS</a></div></nav>
<div class="wrap" style="padding-top:72px">
<a href="/discover" style="font-size:12px;color:#555;display:inline-flex;align-items:center;gap:4px;margin-bottom:16px">&larr; Back to discover</a>
<div style="font-size:11px;color:#555;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">${article.category}</div>
<h1 style="font-size:28px;margin-bottom:10px;line-height:1.25">${article.title}</h1>
<div style="font-size:13px;color:#555;margin-bottom:6px;display:flex;gap:14px;flex-wrap:wrap"><span>${article.author}</span><span>${article.date}</span><span>${article.readTime} read</span></div>
<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:28px">${tagsHtml}</div>
<div class="body">${article.body}</div>
${relatedHtml}
<div class="footer">&copy; 2025-2026 BlackRoad OS, Inc. All rights reserved. <a href="https://blackroad.io">blackroad.io</a></div>
</div></body></html>`;
      return new Response(articleHtml, { headers: { ...CORS, 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=3600' } });
    }

    // ─── /discover — browse all articles grouped by category ───
    if (path === '/discover' && method === 'GET') {
      const categories = [...new Set(ARTICLES.map(a => a.category))];
      const grouped = {};
      for (const a of ARTICLES) { if (!grouped[a.category]) grouped[a.category] = []; grouped[a.category].push(a); }
      const categoryNav = categories.map(c => `<a href="/discover/category/${encodeURIComponent(c)}" style="padding:6px 14px;border:1px solid #1a1a1a;border-radius:6px;color:#888;font-size:12px;font-family:'Inter',sans-serif;text-decoration:none;transition:all .15s">${c} (${grouped[c].length})</a>`).join(' ');
      const sections = categories.map(c => {
        const cards = grouped[c].map(a => `<a href="/read/${a.slug}" style="display:block;background:#0a0a0a;border:1px solid #1a1a1a;border-radius:10px;padding:18px;margin-bottom:12px;text-decoration:none;transition:border-color .15s"><div style="font-size:17px;color:#fff;font-weight:600;margin-bottom:4px">${a.title}</div><div style="font-size:11px;color:#555;margin-bottom:6px">${a.author} &middot; ${a.date} &middot; ${a.readTime}</div><div style="font-size:13px;color:#888;line-height:1.6">${a.description}</div><div style="display:flex;gap:5px;margin-top:8px;flex-wrap:wrap">${a.tags.map(t => `<span style="font-size:10px;padding:2px 8px;border-radius:10px;background:#151515;color:#777">${t}</span>`).join('')}</div></a>`).join('');
        return `<div style="margin-bottom:36px"><h2 style="font-size:20px;color:#fff;margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid #1a1a1a">${c}</h2>${cards}</div>`;
      }).join('');
      const discoverJsonLd = JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Discover Articles — RoadBook","description":`Browse ${ARTICLES.length} articles on AI, sovereignty, education, math, and development.`,"url":"https://roadbook.blackroad.io/discover","publisher":{"@type":"Organization","name":"BlackRoad OS, Inc."}});
      const discoverHtml = `<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://images.blackroad.io/brand/brand.css">
<title>Discover Articles — RoadBook — BlackRoad OS</title>
<meta name="description" content="Browse ${ARTICLES.length} articles on AI agents, sovereign computing, mathematics, education, and building with BlackRoad OS.">
<meta property="og:title" content="Discover Articles — RoadBook"><meta property="og:description" content="Browse ${ARTICLES.length} articles on AI, sovereignty, education, and development.">
<meta property="og:url" content="https://roadbook.blackroad.io/discover"><meta property="og:image" content="https://images.blackroad.io/pixel-art/road-logo.png">
<meta name="twitter:card" content="summary_large_image"><meta name="robots" content="index, follow, noai, noimageai">
<link rel="canonical" href="https://roadbook.blackroad.io/discover">
<script type="application/ld+json">${discoverJsonLd}</script>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%230a0a0a'/><circle cx='10' cy='16' r='5' fill='%23FF2255'/><rect x='18' y='11' width='10' height='10' rx='2' fill='%238844FF'/></svg>" type="image/svg+xml">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}:root{--g:linear-gradient(90deg,#FF6B2B,#FF2255,#CC00AA,#8844FF,#4488FF,#00D4FF);--bg:#000;--border:#1a1a1a;--text:#f5f5f5;--white:#fff;--sg:'Space Grotesk',sans-serif;--in:'Inter',sans-serif;--accent:#CC00AA}
body{background:var(--bg);color:var(--text);font-family:var(--sg);line-height:1.7;min-height:100vh}a{color:#4488FF;text-decoration:none}a:hover{opacity:.8}h1,h2,h3{color:var(--white);line-height:1.3}
.bar{height:3px;background:var(--g);position:fixed;top:0;left:0;right:0;z-index:1000}
nav{position:fixed;top:3px;left:0;right:0;z-index:999;background:rgba(0,0,0,.92);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);height:48px;display:flex;align-items:center;padding:0 24px}
.n-left{display:flex;align-items:center;gap:10px}.n-dot{width:10px;height:10px;border-radius:50%;background:var(--accent)}.n-name{font-weight:700;font-size:17px}
.n-right{margin-left:auto;display:flex;gap:10px;align-items:center}
.btn{padding:7px 16px;border:1px solid var(--border);border-radius:6px;background:transparent;color:#ccc;font-size:12px;font-family:var(--in);cursor:pointer;transition:all .15s}.btn:hover{border-color:#444;color:#fff}.btn-w{background:#fff;color:#000;border-color:#fff}.btn-w:hover{opacity:.9}
.wrap{max-width:800px;margin:0 auto;padding:24px 20px}
.footer{text-align:center;padding:32px 0 16px;border-top:1px solid var(--border);margin-top:48px;font-size:11px;color:#444}
@media(max-width:640px){nav{padding:0 12px}.wrap{padding:16px 14px}}
</style></head><body>
<div class="bar"></div>
<nav><a href="/" style="display:flex;align-items:center;gap:10px;text-decoration:none"><div class="n-dot"></div><span class="n-name" style="color:#fff">RoadBook</span></a><div class="n-right"><a href="/discover" class="btn" style="border-color:#333;color:#fff">Discover</a><a href="https://blackroad.io" class="btn">Highway</a><a href="https://os.blackroad.io" class="btn btn-w">Open OS</a></div></nav>
<div class="wrap" style="padding-top:72px">
<h1 style="font-size:28px;margin-bottom:6px">Discover</h1>
<p style="font-size:14px;color:#888;margin-bottom:20px">${ARTICLES.length} articles across ${categories.length} categories</p>
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:28px">${categoryNav}</div>
${sections}
<div class="footer">&copy; 2025-2026 BlackRoad OS, Inc. All rights reserved. <a href="https://blackroad.io">blackroad.io</a></div>
</div></body></html>`;
      return new Response(discoverHtml, { headers: { ...CORS, 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=1800' } });
    }

    // ─── /discover/category/:cat — category pages ───
    const catMatch = path.match(/^\/discover\/category\/(.+)$/);
    if (catMatch && method === 'GET') {
      const cat = decodeURIComponent(catMatch[1]);
      const catArticles = ARTICLES.filter(a => a.category === cat);
      if (!catArticles.length) return new Response('Category not found', { status: 404, headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
      const categories = [...new Set(ARTICLES.map(a => a.category))];
      const categoryNav = categories.map(c => `<a href="/discover/category/${encodeURIComponent(c)}" style="padding:6px 14px;border:1px solid ${c === cat ? '#333' : '#1a1a1a'};border-radius:6px;color:${c === cat ? '#fff' : '#888'};font-size:12px;font-family:'Inter',sans-serif;text-decoration:none;${c === cat ? 'background:#1a1a1a;' : ''}">${c}</a>`).join(' ');
      const cards = catArticles.map(a => `<a href="/read/${a.slug}" style="display:block;background:#0a0a0a;border:1px solid #1a1a1a;border-radius:10px;padding:18px;margin-bottom:12px;text-decoration:none;transition:border-color .15s"><div style="font-size:17px;color:#fff;font-weight:600;margin-bottom:4px">${a.title}</div><div style="font-size:11px;color:#555;margin-bottom:6px">${a.author} &middot; ${a.date} &middot; ${a.readTime}</div><div style="font-size:13px;color:#888;line-height:1.6">${a.description}</div><div style="display:flex;gap:5px;margin-top:8px;flex-wrap:wrap">${a.tags.map(t => `<span style="font-size:10px;padding:2px 8px;border-radius:10px;background:#151515;color:#777">${t}</span>`).join('')}</div></a>`).join('');
      const catJsonLd = JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":`${cat} Articles — RoadBook`,"description":`${catArticles.length} articles about ${cat} on RoadBook.`,"url":`https://roadbook.blackroad.io/discover/category/${encodeURIComponent(cat)}`,"publisher":{"@type":"Organization","name":"BlackRoad OS, Inc."}});
      const catHtml = `<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://images.blackroad.io/brand/brand.css">
<title>${cat} — RoadBook — BlackRoad OS</title>
<meta name="description" content="${catArticles.length} articles about ${cat}. Read about AI agents, sovereign computing, and more on RoadBook.">
<meta property="og:title" content="${cat} — RoadBook"><meta property="og:description" content="${catArticles.length} articles about ${cat} on RoadBook.">
<meta property="og:url" content="https://roadbook.blackroad.io/discover/category/${encodeURIComponent(cat)}">
<meta property="og:image" content="https://images.blackroad.io/pixel-art/road-logo.png">
<meta name="twitter:card" content="summary_large_image"><meta name="robots" content="index, follow, noai, noimageai">
<link rel="canonical" href="https://roadbook.blackroad.io/discover/category/${encodeURIComponent(cat)}">
<script type="application/ld+json">${catJsonLd}</script>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%230a0a0a'/><circle cx='10' cy='16' r='5' fill='%23FF2255'/><rect x='18' y='11' width='10' height='10' rx='2' fill='%238844FF'/></svg>" type="image/svg+xml">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}:root{--g:linear-gradient(90deg,#FF6B2B,#FF2255,#CC00AA,#8844FF,#4488FF,#00D4FF);--bg:#000;--border:#1a1a1a;--text:#f5f5f5;--white:#fff;--sg:'Space Grotesk',sans-serif;--in:'Inter',sans-serif;--accent:#CC00AA}
body{background:var(--bg);color:var(--text);font-family:var(--sg);line-height:1.7;min-height:100vh}a{color:#4488FF;text-decoration:none}a:hover{opacity:.8}h1,h2,h3{color:var(--white);line-height:1.3}
.bar{height:3px;background:var(--g);position:fixed;top:0;left:0;right:0;z-index:1000}
nav{position:fixed;top:3px;left:0;right:0;z-index:999;background:rgba(0,0,0,.92);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);height:48px;display:flex;align-items:center;padding:0 24px}
.n-left{display:flex;align-items:center;gap:10px}.n-dot{width:10px;height:10px;border-radius:50%;background:var(--accent)}.n-name{font-weight:700;font-size:17px}
.n-right{margin-left:auto;display:flex;gap:10px;align-items:center}
.btn{padding:7px 16px;border:1px solid var(--border);border-radius:6px;background:transparent;color:#ccc;font-size:12px;font-family:var(--in);cursor:pointer;transition:all .15s}.btn:hover{border-color:#444;color:#fff}.btn-w{background:#fff;color:#000;border-color:#fff}.btn-w:hover{opacity:.9}
.wrap{max-width:800px;margin:0 auto;padding:24px 20px}
.footer{text-align:center;padding:32px 0 16px;border-top:1px solid var(--border);margin-top:48px;font-size:11px;color:#444}
@media(max-width:640px){nav{padding:0 12px}.wrap{padding:16px 14px}}
</style></head><body>
<div class="bar"></div>
<nav><a href="/" style="display:flex;align-items:center;gap:10px;text-decoration:none"><div class="n-dot"></div><span class="n-name" style="color:#fff">RoadBook</span></a><div class="n-right"><a href="/discover" class="btn">Discover</a><a href="https://blackroad.io" class="btn">Highway</a><a href="https://os.blackroad.io" class="btn btn-w">Open OS</a></div></nav>
<div class="wrap" style="padding-top:72px">
<a href="/discover" style="font-size:12px;color:#555;display:inline-flex;align-items:center;gap:4px;margin-bottom:16px">&larr; All categories</a>
<h1 style="font-size:28px;margin-bottom:6px">${cat}</h1>
<p style="font-size:14px;color:#888;margin-bottom:20px">${catArticles.length} article${catArticles.length === 1 ? '' : 's'}</p>
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:28px">${categoryNav}</div>
${cards}
<div class="footer">&copy; 2025-2026 BlackRoad OS, Inc. All rights reserved. <a href="https://blackroad.io">blackroad.io</a></div>
</div></body></html>`;
      return new Response(catHtml, { headers: { ...CORS, 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public, max-age=1800' } });
    }

    await ensureTables(env.DB);
    // Analytics tracking
    if (path === '/api/track' && method === 'POST') {
      try { const body = await request.json(); const cf = request.cf || {};
        await env.DB.prepare("CREATE TABLE IF NOT EXISTS analytics_events (id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT DEFAULT 'pageview', path TEXT, referrer TEXT, country TEXT, city TEXT, device TEXT, screen TEXT, scroll_depth INTEGER DEFAULT 0, engagement_ms INTEGER DEFAULT 0, created_at TEXT DEFAULT (datetime('now')))").run();
        await env.DB.prepare('INSERT INTO analytics_events (type, path, referrer, country, city, device, screen, scroll_depth, engagement_ms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(body.type||'pageview', body.path||'/', body.referrer||'', cf.country||'', cf.city||'', body.device||'', body.screen||'', body.scroll||0, body.time||0).run();
      } catch(e) {}
      return json({ ok: true });
    }

    // ── Sovereign Analytics ──
    if (path === '/api/analytics' && request.method === 'POST') {
      try {
        const body = await request.json();
        const cf = request.cf || {};
        const ip = request.headers.get('CF-Connecting-IP') || '';
        const ipHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip + '2026'));
        const visitor = btoa(String.fromCharCode(...new Uint8Array(ipHash))).slice(0,12);
        await env.DB.prepare(`CREATE TABLE IF NOT EXISTS br_analytics (id INTEGER PRIMARY KEY AUTOINCREMENT, path TEXT, referrer TEXT, visitor TEXT, country TEXT, city TEXT, screen TEXT, ts TEXT DEFAULT (datetime('now')))`).run();
        await env.DB.prepare('INSERT INTO br_analytics (path, referrer, visitor, country, city, screen) VALUES (?,?,?,?,?,?)').bind(body.path||'/', body.ref||'', visitor, cf.country||'', cf.city||'', (body.w||0)+'x'+(body.h||0)).run();
      } catch(e){}
      return new Response('ok', {headers:{'Access-Control-Allow-Origin':'*'}});
    }
    if (path === '/api/analytics/stats') {
      try {
        await env.DB.prepare(`CREATE TABLE IF NOT EXISTS br_analytics (id INTEGER PRIMARY KEY AUTOINCREMENT, path TEXT, referrer TEXT, visitor TEXT, country TEXT, city TEXT, screen TEXT, ts TEXT DEFAULT (datetime('now')))`).run();
        const total = await env.DB.prepare('SELECT COUNT(*) as c FROM br_analytics').first();
        const unique = await env.DB.prepare('SELECT COUNT(DISTINCT visitor) as c FROM br_analytics').first();
        const today = await env.DB.prepare("SELECT COUNT(*) as c FROM br_analytics WHERE ts > datetime('now','-1 day')").first();
        const pages = await env.DB.prepare('SELECT path, COUNT(*) as views FROM br_analytics GROUP BY path ORDER BY views DESC LIMIT 10').all();
        const countries = await env.DB.prepare('SELECT country, COUNT(*) as c FROM br_analytics WHERE country != "" GROUP BY country ORDER BY c DESC LIMIT 10').all();
        return new Response(JSON.stringify({total_views:total?.c||0,unique_visitors:unique?.c||0,today:today?.c||0,top_pages:pages?.results||[],top_countries:countries?.results||[]}),{headers:{'Access-Control-Allow-Origin':'*','Content-Type':'application/json'}});
      } catch(e) { return new Response(JSON.stringify({error:'analytics unavailable'}),{status:500,headers:{'Content-Type':'application/json'}}); }
    }



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
      const limit = Math.min(100, parseInt(url.searchParams.get('limit') || '50'));
      const offset = parseInt(url.searchParams.get('offset') || '0');
      const author = url.searchParams.get('author');
      const category = url.searchParams.get('category');
      const tag = url.searchParams.get('tag');
      const since = url.searchParams.get('since');
      let query = "SELECT id, title, summary, category, visibility, license, version, author, reads, citations, reading_time, doi, roadcoin_earned, tags, created_at, updated_at FROM roadbook_publications WHERE visibility != 'deleted'";
      const params = [];
      if (author) { query += ' AND author = ?'; params.push(author); }
      if (category) { query += ' AND category = ?'; params.push(category); }
      if (tag) { query += ' AND tags LIKE ?'; params.push(`%${tag}%`); }
      if (since) { query += ' AND created_at >= ?'; params.push(since); }
      query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
      params.push(limit, offset);
      const result = await env.DB.prepare(query).bind(...params).all();
      const total = await env.DB.prepare("SELECT COUNT(*) as count FROM roadbook_publications WHERE visibility != 'deleted'").first();
      return json({ publications: result.results, total: total.count, limit, offset });
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

    // ─── Collection add alias ───
    const collAddMatch = path.match(/^\/api\/collections\/([^/]+)\/add$/);
    if (collAddMatch && method === 'POST') {
      const body = await request.json();
      if (!body.publication_id) return json({ error: 'publication_id required' }, 400);
      const coll = await env.DB.prepare('SELECT id FROM rb_collections WHERE id = ?').bind(collAddMatch[1]).first();
      if (!coll) return json({ error: 'Collection not found' }, 404);
      const pub = await env.DB.prepare('SELECT id FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      const existing = await env.DB.prepare('SELECT id FROM rb_collection_items WHERE collection_id = ? AND publication_id = ?').bind(collAddMatch[1], body.publication_id).first();
      if (existing) return json({ error: 'Already in collection' }, 409);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rb_collection_items (id, collection_id, publication_id, sort_order) VALUES (?, ?, ?, ?)')
        .bind(id, collAddMatch[1], body.publication_id, body.sort_order || 0).run();
      return json({ ok: true, id }, 201);
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
        const html = `<!DOCTYPE html><html><head><link rel="stylesheet" href="https://images.blackroad.io/brand/brand.css"><meta charset="UTF-8"><title>${pub.title}</title></head><body><h1>${pub.title}</h1><p>By ${pub.author}</p><div>${pub.content || ''}</div><hr><pre>${provenance}</pre></body></html>`;
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

    // ─── Soft delete publication ───
    if (pubMatch && method === 'DELETE') {
      const pub = await env.DB.prepare('SELECT id, title FROM roadbook_publications WHERE id = ?').bind(pubMatch[1]).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      await env.DB.prepare("UPDATE roadbook_publications SET visibility = 'deleted', updated_at = datetime('now') WHERE id = ?").bind(pubMatch[1]).run();
      stampChain('deleted', pubMatch[1], pub.title.slice(0,100)).catch(()=>{});
      return json({ ok: true, deleted: pubMatch[1], title: pub.title });
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

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 9: Writing Workshops (/api/workshops) ───
    // ═══════════════════════════════════════════════════════════════

    // List workshops
    if (path === '/api/workshops' && method === 'GET') {
      const status = url.searchParams.get('status');
      let query = `SELECT w.*,
                   (SELECT COUNT(*) FROM rb_workshop_participants wp WHERE wp.workshop_id = w.id) as participant_count,
                   (SELECT COUNT(*) FROM rb_workshop_submissions ws WHERE ws.workshop_id = w.id) as submission_count
                   FROM rb_workshops w`;
      const params = [];
      if (status) {
        query += ' WHERE w.status = ?';
        params.push(status);
      }
      query += ' ORDER BY w.scheduled_at DESC LIMIT 50';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ workshops: result.results || [] });
    }

    // Create workshop
    if (path === '/api/workshops' && method === 'POST') {
      const body = await request.json();
      if (!body.title) return json({ error: 'title required' }, 400);
      const id = crypto.randomUUID();

      // AI-generate a writing prompt if none provided
      let prompt = body.prompt || '';
      if (!prompt) {
        try {
          const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `${AGENTS.calliope.prompt} Generate a creative, inspiring writing prompt for a workshop titled "${body.title}". The prompt should be specific enough to guide writers but open enough for creative interpretation. 2-3 sentences. Return ONLY the prompt.` },
              { role: 'user', content: `Workshop: ${body.title}\nDescription: ${body.description || 'A writing workshop'}` },
            ],
            max_tokens: 200,
          });
          if (aiResult.response) prompt = aiResult.response.trim();
        } catch { prompt = 'Write freely on the workshop theme. Aim for clarity, voice, and originality.'; }
      }

      await env.DB.prepare(
        'INSERT INTO rb_workshops (id, title, description, host, prompt, status, max_participants, scheduled_at, duration_minutes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.title, body.description || '', body.host || 'blackroad', prompt, body.status || 'upcoming', body.max_participants || 20, body.scheduled_at || null, body.duration_minutes || 60).run();
      const workshop = await env.DB.prepare('SELECT * FROM rb_workshops WHERE id = ?').bind(id).first();
      return json({ workshop, agent: 'Calliope' }, 201);
    }

    const workshopMatch = path.match(/^\/api\/workshops\/([^/]+)$/);
    const workshopJoinMatch = path.match(/^\/api\/workshops\/([^/]+)\/join$/);
    const workshopSubmitMatch = path.match(/^\/api\/workshops\/([^/]+)\/submit$/);
    const workshopSubmissionsMatch = path.match(/^\/api\/workshops\/([^/]+)\/submissions$/);
    const workshopFeedbackMatch = path.match(/^\/api\/workshops\/([^/]+)\/feedback$/);

    // Get single workshop
    if (workshopMatch && method === 'GET') {
      const ws = await env.DB.prepare('SELECT * FROM rb_workshops WHERE id = ?').bind(workshopMatch[1]).first();
      if (!ws) return json({ error: 'Workshop not found' }, 404);
      const participants = await env.DB.prepare('SELECT * FROM rb_workshop_participants WHERE workshop_id = ? ORDER BY joined_at ASC').bind(workshopMatch[1]).all();
      const submissions = await env.DB.prepare('SELECT id, user_id, title, avg_rating, submitted_at FROM rb_workshop_submissions WHERE workshop_id = ? ORDER BY submitted_at DESC').bind(workshopMatch[1]).all();
      return json({ workshop: ws, participants: participants.results || [], submissions: submissions.results || [] });
    }

    // Update workshop status
    if (workshopMatch && method === 'PUT') {
      const ws = await env.DB.prepare('SELECT id FROM rb_workshops WHERE id = ?').bind(workshopMatch[1]).first();
      if (!ws) return json({ error: 'Workshop not found' }, 404);
      const body = await request.json();
      await env.DB.prepare(
        "UPDATE rb_workshops SET title = COALESCE(?, title), description = COALESCE(?, description), prompt = COALESCE(?, prompt), status = COALESCE(?, status), scheduled_at = COALESCE(?, scheduled_at), updated_at = datetime('now') WHERE id = ?"
      ).bind(body.title || null, body.description || null, body.prompt || null, body.status || null, body.scheduled_at || null, workshopMatch[1]).run();
      const updated = await env.DB.prepare('SELECT * FROM rb_workshops WHERE id = ?').bind(workshopMatch[1]).first();
      return json({ workshop: updated });
    }

    // Join workshop
    if (workshopJoinMatch && method === 'POST') {
      const body = await request.json();
      if (!body.user_id) return json({ error: 'user_id required' }, 400);
      const ws = await env.DB.prepare('SELECT * FROM rb_workshops WHERE id = ?').bind(workshopJoinMatch[1]).first();
      if (!ws) return json({ error: 'Workshop not found' }, 404);
      const existing = await env.DB.prepare('SELECT id FROM rb_workshop_participants WHERE workshop_id = ? AND user_id = ?').bind(workshopJoinMatch[1], body.user_id).first();
      if (existing) return json({ error: 'Already joined' }, 409);
      const count = await env.DB.prepare('SELECT COUNT(*) as c FROM rb_workshop_participants WHERE workshop_id = ?').bind(workshopJoinMatch[1]).first();
      if (count.c >= ws.max_participants) return json({ error: 'Workshop is full' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rb_workshop_participants (id, workshop_id, user_id) VALUES (?, ?, ?)').bind(id, workshopJoinMatch[1], body.user_id).run();
      return json({ ok: true, participant_id: id }, 201);
    }

    // Submit writing to workshop
    if (workshopSubmitMatch && method === 'POST') {
      const body = await request.json();
      if (!body.user_id || !body.content) return json({ error: 'user_id and content required' }, 400);
      const ws = await env.DB.prepare('SELECT id, status FROM rb_workshops WHERE id = ?').bind(workshopSubmitMatch[1]).first();
      if (!ws) return json({ error: 'Workshop not found' }, 404);
      const participant = await env.DB.prepare('SELECT id FROM rb_workshop_participants WHERE workshop_id = ? AND user_id = ?').bind(workshopSubmitMatch[1], body.user_id).first();
      if (!participant) return json({ error: 'Must join the workshop first' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_workshop_submissions (id, workshop_id, user_id, content, title) VALUES (?, ?, ?, ?, ?)'
      ).bind(id, workshopSubmitMatch[1], body.user_id, body.content.slice(0, 50000), body.title || 'Untitled').run();
      return json({ ok: true, submission_id: id }, 201);
    }

    // Get submissions for workshop
    if (workshopSubmissionsMatch && method === 'GET') {
      const result = await env.DB.prepare(
        'SELECT s.*, (SELECT COUNT(*) FROM rb_workshop_feedback f WHERE f.submission_id = s.id) as feedback_count FROM rb_workshop_submissions s WHERE s.workshop_id = ? ORDER BY s.submitted_at DESC'
      ).bind(workshopSubmissionsMatch[1]).all();
      return json({ workshop_id: workshopSubmissionsMatch[1], submissions: result.results || [] });
    }

    // Give feedback on a submission
    if (workshopFeedbackMatch && method === 'POST') {
      const body = await request.json();
      if (!body.submission_id || !body.reviewer_id) return json({ error: 'submission_id and reviewer_id required' }, 400);
      const sub = await env.DB.prepare('SELECT id, workshop_id FROM rb_workshop_submissions WHERE id = ?').bind(body.submission_id).first();
      if (!sub) return json({ error: 'Submission not found' }, 404);
      const rating = Math.min(5, Math.max(1, parseInt(body.rating) || 3));

      // AI-assisted feedback if no comment provided
      let comment = body.comment || '';
      if (!comment) {
        try {
          const subContent = await env.DB.prepare('SELECT content, title FROM rb_workshop_submissions WHERE id = ?').bind(body.submission_id).first();
          const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `${AGENTS.atticus.prompt} Provide brief, constructive feedback on this workshop submission. Note one strength and one area for improvement. 2-3 sentences. Return ONLY the feedback.` },
              { role: 'user', content: `Title: ${subContent.title}\n\n${subContent.content.substring(0, 2000)}` },
            ],
            max_tokens: 200,
          });
          if (aiResult.response) comment = aiResult.response.trim();
        } catch { comment = 'Feedback pending.'; }
      }

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_workshop_feedback (id, submission_id, reviewer_id, rating, comment) VALUES (?, ?, ?, ?, ?)'
      ).bind(id, body.submission_id, body.reviewer_id, rating, comment.slice(0, 3000)).run();

      // Update average rating on submission
      const avg = await env.DB.prepare('SELECT AVG(rating) as avg FROM rb_workshop_feedback WHERE submission_id = ?').bind(body.submission_id).first();
      await env.DB.prepare('UPDATE rb_workshop_submissions SET avg_rating = ? WHERE id = ?').bind(avg?.avg || 0, body.submission_id).run();

      return json({ ok: true, feedback_id: id, rating, comment, agent: 'Atticus' }, 201);
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 10: Publication Analytics (/api/pub-analytics) ───
    // ═══════════════════════════════════════════════════════════════

    // Track a view/read/share event for per-article analytics
    if (path === '/api/pub-analytics/track' && method === 'POST') {
      const body = await request.json();
      if (!body.publication_id || !body.event_type) return json({ error: 'publication_id and event_type required' }, 400);
      if (!['view', 'read', 'completion', 'share'].includes(body.event_type)) return json({ error: 'event_type must be view, read, completion, or share' }, 400);

      const today = new Date().toISOString().split('T')[0];
      const pub = await env.DB.prepare('SELECT id FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);

      // Upsert daily analytics row
      let row = await env.DB.prepare('SELECT * FROM rb_pub_analytics WHERE publication_id = ? AND event_date = ?').bind(body.publication_id, today).first();
      if (!row) {
        const id = crypto.randomUUID();
        await env.DB.prepare('INSERT INTO rb_pub_analytics (id, publication_id, event_date) VALUES (?, ?, ?)').bind(id, body.publication_id, today).run();
        row = { id };
      }

      const colMap = { view: 'views', read: 'reads', completion: 'completions', share: 'shares' };
      const col = colMap[body.event_type];
      await env.DB.prepare(`UPDATE rb_pub_analytics SET ${col} = ${col} + 1 WHERE publication_id = ? AND event_date = ?`).bind(body.publication_id, today).run();

      // Track share platform
      if (body.event_type === 'share') {
        const shareId = crypto.randomUUID();
        await env.DB.prepare('INSERT INTO rb_share_events (id, publication_id, user_id, platform, referrer) VALUES (?, ?, ?, ?, ?)')
          .bind(shareId, body.publication_id, body.user_id || null, body.platform || 'link', body.referrer || null).run();
      }

      // Track referrer
      if (body.referrer) {
        const existing = await env.DB.prepare('SELECT referrers FROM rb_pub_analytics WHERE publication_id = ? AND event_date = ?').bind(body.publication_id, today).first();
        let referrers = {};
        try { referrers = JSON.parse(existing.referrers || '{}'); } catch {}
        referrers[body.referrer] = (referrers[body.referrer] || 0) + 1;
        await env.DB.prepare('UPDATE rb_pub_analytics SET referrers = ? WHERE publication_id = ? AND event_date = ?')
          .bind(JSON.stringify(referrers), body.publication_id, today).run();
      }

      return json({ ok: true, event_type: body.event_type, date: today }, 201);
    }

    // Get per-article analytics
    if (path === '/api/pub-analytics' && method === 'GET') {
      const pubId = url.searchParams.get('publication_id');
      const period = parseInt(url.searchParams.get('period') || '30');
      const daysAgo = `-${period} days`;

      if (pubId) {
        // Single article analytics
        const pub = await env.DB.prepare('SELECT id, title, reads, reading_time FROM roadbook_publications WHERE id = ?').bind(pubId).first();
        if (!pub) return json({ error: 'Publication not found' }, 404);

        const daily = await env.DB.prepare(
          "SELECT * FROM rb_pub_analytics WHERE publication_id = ? AND event_date >= date('now', ?) ORDER BY event_date DESC"
        ).bind(pubId, daysAgo).all();

        const totals = await env.DB.prepare(
          "SELECT SUM(views) as total_views, SUM(reads) as total_reads, SUM(completions) as total_completions, SUM(shares) as total_shares FROM rb_pub_analytics WHERE publication_id = ? AND event_date >= date('now', ?)"
        ).bind(pubId, daysAgo).first();

        const topReferrers = await env.DB.prepare(
          "SELECT referrer, COUNT(*) as count FROM rb_share_events WHERE publication_id = ? AND created_at >= datetime('now', ?) AND referrer IS NOT NULL GROUP BY referrer ORDER BY count DESC LIMIT 10"
        ).bind(pubId, daysAgo).all();

        const completionRate = (totals?.total_reads || 0) > 0
          ? Math.round(((totals?.total_completions || 0) / totals.total_reads) * 100)
          : 0;

        return json({
          publication_id: pubId,
          title: pub.title,
          period_days: period,
          totals: {
            views: totals?.total_views || 0,
            reads: totals?.total_reads || 0,
            completions: totals?.total_completions || 0,
            shares: totals?.total_shares || 0,
            completion_rate: completionRate,
          },
          daily: daily.results || [],
          top_referrers: topReferrers.results || [],
        });
      }

      // Overview of all articles
      const topArticles = await env.DB.prepare(
        `SELECT p.id, p.title, p.category, p.reads,
                SUM(pa.views) as period_views, SUM(pa.reads) as period_reads,
                SUM(pa.completions) as period_completions, SUM(pa.shares) as period_shares
         FROM roadbook_publications p
         LEFT JOIN rb_pub_analytics pa ON pa.publication_id = p.id AND pa.event_date >= date('now', ?)
         GROUP BY p.id
         ORDER BY period_views DESC
         LIMIT 30`
      ).bind(daysAgo).all();

      return json({ period_days: period, articles: topArticles.results || [] });
    }

    // Share tracking endpoint
    if (path === '/api/pub-analytics/shares' && method === 'GET') {
      const pubId = url.searchParams.get('publication_id');
      if (!pubId) return json({ error: 'publication_id required' }, 400);
      const result = await env.DB.prepare(
        'SELECT platform, COUNT(*) as count FROM rb_share_events WHERE publication_id = ? GROUP BY platform ORDER BY count DESC'
      ).bind(pubId).all();
      const total = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_share_events WHERE publication_id = ?').bind(pubId).first();
      return json({ publication_id: pubId, total_shares: total?.count || 0, by_platform: result.results || [] });
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 11: Content Licensing (/api/licensing) ───
    // ═══════════════════════════════════════════════════════════════

    // List licenses
    if (path === '/api/licensing' && method === 'GET') {
      const pubId = url.searchParams.get('publication_id');
      const status = url.searchParams.get('status');
      let query = 'SELECT l.*, p.title as publication_title, p.author FROM rb_licenses l JOIN roadbook_publications p ON p.id = l.publication_id WHERE 1=1';
      const params = [];
      if (pubId) { query += ' AND l.publication_id = ?'; params.push(pubId); }
      if (status) { query += ' AND l.status = ?'; params.push(status); }
      query += ' ORDER BY l.created_at DESC LIMIT 50';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ licenses: result.results || [] });
    }

    // Request a license
    if (path === '/api/licensing' && method === 'POST') {
      const body = await request.json();
      if (!body.publication_id || !body.licensee_name) return json({ error: 'publication_id and licensee_name required' }, 400);
      const pub = await env.DB.prepare('SELECT id, title, license FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      const id = crypto.randomUUID();
      const licenseType = body.license_type || 'standard';
      if (!['standard', 'exclusive', 'non_exclusive', 'academic', 'educational'].includes(licenseType)) {
        return json({ error: 'license_type must be standard, exclusive, non_exclusive, academic, or educational' }, 400);
      }
      await env.DB.prepare(
        'INSERT INTO rb_licenses (id, publication_id, license_type, licensee_name, licensee_email, terms, fee, currency, status, royalty_pct, expires_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.publication_id, licenseType, body.licensee_name, body.licensee_email || '', body.terms || '', body.fee || 0, body.currency || 'USD', 'pending', body.royalty_pct || 0, body.expires_at || null).run();
      return json({ ok: true, license_id: id, publication: pub.title, status: 'pending' }, 201);
    }

    const licenseMatch = path.match(/^\/api\/licensing\/([^/]+)$/);
    const licenseApproveMatch = path.match(/^\/api\/licensing\/([^/]+)\/approve$/);
    const licenseRoyaltyMatch = path.match(/^\/api\/licensing\/([^/]+)\/royalty$/);

    // Get license details
    if (licenseMatch && method === 'GET') {
      const lic = await env.DB.prepare('SELECT l.*, p.title as publication_title FROM rb_licenses l JOIN roadbook_publications p ON p.id = l.publication_id WHERE l.id = ?').bind(licenseMatch[1]).first();
      if (!lic) return json({ error: 'License not found' }, 404);
      const payments = await env.DB.prepare('SELECT * FROM rb_royalty_payments WHERE license_id = ? ORDER BY created_at DESC').bind(licenseMatch[1]).all();
      return json({ license: lic, royalty_payments: payments.results || [] });
    }

    // Approve/reject license
    if (licenseApproveMatch && method === 'POST') {
      const body = await request.json();
      if (!body.action) return json({ error: 'action required (approve or reject)' }, 400);
      if (!['approve', 'reject'].includes(body.action)) return json({ error: 'action must be approve or reject' }, 400);
      const lic = await env.DB.prepare('SELECT id, status FROM rb_licenses WHERE id = ?').bind(licenseApproveMatch[1]).first();
      if (!lic) return json({ error: 'License not found' }, 404);
      if (lic.status !== 'pending') return json({ error: 'License is not pending' }, 400);
      const newStatus = body.action === 'approve' ? 'active' : 'rejected';
      await env.DB.prepare(
        "UPDATE rb_licenses SET status = ?, granted_at = CASE WHEN ? = 'active' THEN datetime('now') ELSE granted_at END, updated_at = datetime('now') WHERE id = ?"
      ).bind(newStatus, newStatus, licenseApproveMatch[1]).run();
      return json({ ok: true, license_id: licenseApproveMatch[1], status: newStatus });
    }

    // Record royalty payment
    if (licenseRoyaltyMatch && method === 'POST') {
      const body = await request.json();
      if (!body.amount) return json({ error: 'amount required' }, 400);
      const lic = await env.DB.prepare('SELECT id, status FROM rb_licenses WHERE id = ?').bind(licenseRoyaltyMatch[1]).first();
      if (!lic) return json({ error: 'License not found' }, 404);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_royalty_payments (id, license_id, amount, period_start, period_end, status, paid_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, licenseRoyaltyMatch[1], body.amount, body.period_start || null, body.period_end || null, body.status || 'paid', body.paid_at || new Date().toISOString()).run();
      await env.DB.prepare(
        "UPDATE rb_licenses SET total_royalties_paid = total_royalties_paid + ?, updated_at = datetime('now') WHERE id = ?"
      ).bind(body.amount, licenseRoyaltyMatch[1]).run();
      return json({ ok: true, payment_id: id, amount: body.amount }, 201);
    }

    // Licensing stats
    if (path === '/api/licensing/stats' && method === 'GET') {
      const totalLicenses = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_licenses').first();
      const activeLicenses = await env.DB.prepare("SELECT COUNT(*) as count FROM rb_licenses WHERE status = 'active'").first();
      const totalRevenue = await env.DB.prepare('SELECT COALESCE(SUM(fee), 0) as total FROM rb_licenses WHERE status = ?').bind('active').first();
      const totalRoyalties = await env.DB.prepare('SELECT COALESCE(SUM(amount), 0) as total FROM rb_royalty_payments').first();
      const byType = await env.DB.prepare('SELECT license_type, COUNT(*) as count FROM rb_licenses GROUP BY license_type').all();
      return json({
        total_licenses: totalLicenses?.count || 0,
        active_licenses: activeLicenses?.count || 0,
        total_licensing_revenue: totalRevenue?.total || 0,
        total_royalties_paid: totalRoyalties?.total || 0,
        by_type: byType.results || [],
      });
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 12: Book Clubs (/api/clubs) ───
    // ═══════════════════════════════════════════════════════════════

    // List clubs
    if (path === '/api/clubs' && method === 'GET') {
      const q = url.searchParams.get('q');
      let query = `SELECT c.*,
                   (SELECT COUNT(*) FROM rb_club_members cm WHERE cm.club_id = c.id) as actual_members,
                   (SELECT COUNT(*) FROM rb_club_discussions cd WHERE cd.club_id = c.id) as discussion_count
                   FROM rb_clubs c`;
      const params = [];
      if (q) { query += ' WHERE c.name LIKE ? OR c.description LIKE ?'; params.push(`%${q}%`, `%${q}%`); }
      query += ' ORDER BY c.member_count DESC, c.created_at DESC LIMIT 50';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ clubs: result.results || [] });
    }

    // Create club
    if (path === '/api/clubs' && method === 'POST') {
      const body = await request.json();
      if (!body.name) return json({ error: 'name required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_clubs (id, name, description, creator, club_type, visibility, reading_list, discussion_schedule) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, body.name, body.description || '', body.creator || 'blackroad', body.club_type || 'book', body.visibility || 'public', JSON.stringify(body.reading_list || []), body.discussion_schedule || null).run();
      // Auto-add creator as admin member
      await env.DB.prepare('INSERT INTO rb_club_members (id, club_id, user_id, role) VALUES (?, ?, ?, ?)')
        .bind(crypto.randomUUID(), id, body.creator || 'blackroad', 'admin').run();
      await env.DB.prepare('UPDATE rb_clubs SET member_count = 1 WHERE id = ?').bind(id).run();
      const club = await env.DB.prepare('SELECT * FROM rb_clubs WHERE id = ?').bind(id).first();
      return json({ club }, 201);
    }

    const clubMatch = path.match(/^\/api\/clubs\/([^/]+)$/);
    const clubJoinMatch = path.match(/^\/api\/clubs\/([^/]+)\/join$/);
    const clubReadingListMatch = path.match(/^\/api\/clubs\/([^/]+)\/reading-list$/);
    const clubDiscussionsMatch = path.match(/^\/api\/clubs\/([^/]+)\/discussions$/);
    const clubDiscussionReplyMatch = path.match(/^\/api\/clubs\/([^/]+)\/discussions\/([^/]+)\/reply$/);

    // Get single club
    if (clubMatch && method === 'GET') {
      const club = await env.DB.prepare('SELECT * FROM rb_clubs WHERE id = ?').bind(clubMatch[1]).first();
      if (!club) return json({ error: 'Club not found' }, 404);
      const members = await env.DB.prepare('SELECT * FROM rb_club_members WHERE club_id = ? ORDER BY joined_at ASC').bind(clubMatch[1]).all();
      const discussions = await env.DB.prepare(
        'SELECT d.*, (SELECT COUNT(*) FROM rb_club_discussion_replies r WHERE r.discussion_id = d.id) as reply_count FROM rb_club_discussions d WHERE d.club_id = ? ORDER BY d.created_at DESC LIMIT 20'
      ).bind(clubMatch[1]).all();
      // Resolve reading list publication details
      let readingList = [];
      try {
        const ids = JSON.parse(club.reading_list || '[]');
        if (ids.length) {
          const placeholders = ids.map(() => '?').join(',');
          const pubs = await env.DB.prepare(`SELECT id, title, summary, category, reading_time, author FROM roadbook_publications WHERE id IN (${placeholders})`).bind(...ids).all();
          readingList = pubs.results || [];
        }
      } catch {}
      return json({ club, members: members.results || [], discussions: discussions.results || [], reading_list_details: readingList });
    }

    // Update club
    if (clubMatch && method === 'PUT') {
      const club = await env.DB.prepare('SELECT id FROM rb_clubs WHERE id = ?').bind(clubMatch[1]).first();
      if (!club) return json({ error: 'Club not found' }, 404);
      const body = await request.json();
      await env.DB.prepare(
        "UPDATE rb_clubs SET name = COALESCE(?, name), description = COALESCE(?, description), current_reading_id = COALESCE(?, current_reading_id), discussion_schedule = COALESCE(?, discussion_schedule), updated_at = datetime('now') WHERE id = ?"
      ).bind(body.name || null, body.description || null, body.current_reading_id || null, body.discussion_schedule || null, clubMatch[1]).run();
      const updated = await env.DB.prepare('SELECT * FROM rb_clubs WHERE id = ?').bind(clubMatch[1]).first();
      return json({ club: updated });
    }

    // Join club
    if (clubJoinMatch && method === 'POST') {
      const body = await request.json();
      if (!body.user_id) return json({ error: 'user_id required' }, 400);
      const club = await env.DB.prepare('SELECT id FROM rb_clubs WHERE id = ?').bind(clubJoinMatch[1]).first();
      if (!club) return json({ error: 'Club not found' }, 404);
      const existing = await env.DB.prepare('SELECT id FROM rb_club_members WHERE club_id = ? AND user_id = ?').bind(clubJoinMatch[1], body.user_id).first();
      if (existing) return json({ error: 'Already a member' }, 409);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rb_club_members (id, club_id, user_id, role) VALUES (?, ?, ?, ?)').bind(id, clubJoinMatch[1], body.user_id, 'member').run();
      await env.DB.prepare('UPDATE rb_clubs SET member_count = member_count + 1 WHERE id = ?').bind(clubJoinMatch[1]).run();
      return json({ ok: true, member_id: id }, 201);
    }

    // Manage reading list
    if (clubReadingListMatch && method === 'POST') {
      const body = await request.json();
      if (!body.publication_id) return json({ error: 'publication_id required' }, 400);
      const club = await env.DB.prepare('SELECT id, reading_list FROM rb_clubs WHERE id = ?').bind(clubReadingListMatch[1]).first();
      if (!club) return json({ error: 'Club not found' }, 404);
      const pub = await env.DB.prepare('SELECT id, title FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);
      let list = [];
      try { list = JSON.parse(club.reading_list || '[]'); } catch {}
      if (body.action === 'remove') {
        list = list.filter(id => id !== body.publication_id);
      } else {
        if (!list.includes(body.publication_id)) list.push(body.publication_id);
      }
      await env.DB.prepare("UPDATE rb_clubs SET reading_list = ?, updated_at = datetime('now') WHERE id = ?").bind(JSON.stringify(list), clubReadingListMatch[1]).run();
      return json({ ok: true, reading_list: list, count: list.length });
    }

    if (clubReadingListMatch && method === 'GET') {
      const club = await env.DB.prepare('SELECT id, reading_list FROM rb_clubs WHERE id = ?').bind(clubReadingListMatch[1]).first();
      if (!club) return json({ error: 'Club not found' }, 404);
      let readingList = [];
      try {
        const ids = JSON.parse(club.reading_list || '[]');
        if (ids.length) {
          const placeholders = ids.map(() => '?').join(',');
          const pubs = await env.DB.prepare(`SELECT id, title, summary, category, reading_time, author, doi FROM roadbook_publications WHERE id IN (${placeholders})`).bind(...ids).all();
          readingList = pubs.results || [];
        }
      } catch {}
      return json({ club_id: clubReadingListMatch[1], reading_list: readingList });
    }

    // Create discussion
    if (clubDiscussionsMatch && method === 'POST') {
      const body = await request.json();
      if (!body.topic || !body.author) return json({ error: 'topic and author required' }, 400);
      const club = await env.DB.prepare('SELECT id FROM rb_clubs WHERE id = ?').bind(clubDiscussionsMatch[1]).first();
      if (!club) return json({ error: 'Club not found' }, 404);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_club_discussions (id, club_id, publication_id, topic, body, author, scheduled_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, clubDiscussionsMatch[1], body.publication_id || null, body.topic, body.body || '', body.author, body.scheduled_at || null).run();
      return json({ ok: true, discussion_id: id }, 201);
    }

    if (clubDiscussionsMatch && method === 'GET') {
      const result = await env.DB.prepare(
        `SELECT d.*, p.title as publication_title,
                (SELECT COUNT(*) FROM rb_club_discussion_replies r WHERE r.discussion_id = d.id) as reply_count
         FROM rb_club_discussions d
         LEFT JOIN roadbook_publications p ON p.id = d.publication_id
         WHERE d.club_id = ?
         ORDER BY d.created_at DESC LIMIT 50`
      ).bind(clubDiscussionsMatch[1]).all();
      return json({ club_id: clubDiscussionsMatch[1], discussions: result.results || [] });
    }

    // Reply to discussion
    if (clubDiscussionReplyMatch && method === 'POST') {
      const body = await request.json();
      if (!body.author || !body.body) return json({ error: 'author and body required' }, 400);
      const discussion = await env.DB.prepare('SELECT id FROM rb_club_discussions WHERE id = ? AND club_id = ?').bind(clubDiscussionReplyMatch[2], clubDiscussionReplyMatch[1]).first();
      if (!discussion) return json({ error: 'Discussion not found' }, 404);
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rb_club_discussion_replies (id, discussion_id, author, body) VALUES (?, ?, ?, ?)').bind(id, clubDiscussionReplyMatch[2], body.author, body.body.slice(0, 5000)).run();
      await env.DB.prepare('UPDATE rb_club_discussions SET replies_count = replies_count + 1 WHERE id = ?').bind(clubDiscussionReplyMatch[2]).run();
      return json({ ok: true, reply_id: id }, 201);
    }

    // Get discussion with replies
    const clubDiscussionDetailMatch = path.match(/^\/api\/clubs\/([^/]+)\/discussions\/([^/]+)$/);
    if (clubDiscussionDetailMatch && method === 'GET') {
      const discussion = await env.DB.prepare('SELECT * FROM rb_club_discussions WHERE id = ? AND club_id = ?').bind(clubDiscussionDetailMatch[2], clubDiscussionDetailMatch[1]).first();
      if (!discussion) return json({ error: 'Discussion not found' }, 404);
      const replies = await env.DB.prepare('SELECT * FROM rb_club_discussion_replies WHERE discussion_id = ? ORDER BY created_at ASC').bind(clubDiscussionDetailMatch[2]).all();
      return json({ discussion, replies: replies.results || [] });
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 13: Translation (/api/translate) ───
    // ═══════════════════════════════════════════════════════════════

    const LANGUAGES = {
      es: 'Spanish', fr: 'French', de: 'German', pt: 'Portuguese', it: 'Italian',
      ja: 'Japanese', ko: 'Korean', zh: 'Chinese', ar: 'Arabic', hi: 'Hindi',
      ru: 'Russian', nl: 'Dutch', sv: 'Swedish', pl: 'Polish', tr: 'Turkish',
    };

    // List translations for an article
    if (path === '/api/translate' && method === 'GET') {
      const pubId = url.searchParams.get('publication_id');
      const lang = url.searchParams.get('language');
      if (!pubId) return json({ error: 'publication_id required' }, 400);
      let query = 'SELECT t.*, p.title as original_title FROM rb_translations t JOIN roadbook_publications p ON p.id = t.publication_id WHERE t.publication_id = ?';
      const params = [pubId];
      if (lang) { query += ' AND t.language = ?'; params.push(lang); }
      query += ' ORDER BY t.language ASC';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ publication_id: pubId, translations: result.results || [], supported_languages: LANGUAGES });
    }

    // Translate an article
    if (path === '/api/translate' && method === 'POST') {
      const body = await request.json();
      if (!body.publication_id || !body.language) return json({ error: 'publication_id and language required' }, 400);
      if (!LANGUAGES[body.language]) return json({ error: `Unsupported language. Supported: ${Object.keys(LANGUAGES).join(', ')}` }, 400);

      const pub = await env.DB.prepare('SELECT * FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);

      // Check existing translation
      const existing = await env.DB.prepare('SELECT id FROM rb_translations WHERE publication_id = ? AND language = ?').bind(body.publication_id, body.language).first();
      if (existing && !body.force) return json({ error: 'Translation already exists. Use force: true to overwrite.' }, 409);

      const langName = LANGUAGES[body.language];

      try {
        // Translate title
        const titleResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `You are a professional translator. Translate the following title to ${langName}. Return ONLY the translated title, nothing else.` },
            { role: 'user', content: pub.title },
          ],
          max_tokens: 200,
        });

        // Translate content in chunks if needed
        const contentChunks = [];
        const chunkSize = 3000;
        for (let i = 0; i < pub.content.length; i += chunkSize) {
          contentChunks.push(pub.content.substring(i, i + chunkSize));
        }

        let translatedContent = '';
        for (const chunk of contentChunks.slice(0, 10)) { // Max 10 chunks
          const chunkResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `You are a professional translator. Translate the following text to ${langName}. Preserve all formatting (markdown, headings, lists). Return ONLY the translation.` },
              { role: 'user', content: chunk },
            ],
            max_tokens: 4000,
          });
          translatedContent += (chunkResult.response || chunk) + '\n';
        }

        // Translate summary
        let translatedSummary = '';
        if (pub.summary) {
          const summaryResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `Translate to ${langName}. Return ONLY the translation.` },
              { role: 'user', content: pub.summary },
            ],
            max_tokens: 300,
          });
          translatedSummary = summaryResult.response || '';
        }

        const id = existing ? existing.id : crypto.randomUUID();
        if (existing) {
          await env.DB.prepare(
            "UPDATE rb_translations SET translated_title = ?, translated_content = ?, translated_summary = ?, status = 'completed', updated_at = datetime('now') WHERE id = ?"
          ).bind(titleResult.response?.trim() || pub.title, translatedContent.trim(), translatedSummary.trim(), id).run();
        } else {
          await env.DB.prepare(
            'INSERT INTO rb_translations (id, publication_id, language, language_name, translated_title, translated_content, translated_summary, translator, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
          ).bind(id, body.publication_id, body.language, langName, titleResult.response?.trim() || pub.title, translatedContent.trim(), translatedSummary.trim(), 'ai', 'completed').run();
        }

        const translation = await env.DB.prepare('SELECT * FROM rb_translations WHERE id = ?').bind(id).first();
        return json({ ok: true, translation, agent: 'AI Translator' }, 201);
      } catch (e) {
        return json({ error: 'Translation failed: ' + (e.message || 'AI unavailable'), publication_id: body.publication_id, language: body.language }, 500);
      }
    }

    // Get specific translation
    const translateMatch = path.match(/^\/api\/translate\/([^/]+)$/);
    if (translateMatch && method === 'GET') {
      const trans = await env.DB.prepare('SELECT t.*, p.title as original_title, p.content as original_content FROM rb_translations t JOIN roadbook_publications p ON p.id = t.publication_id WHERE t.id = ?').bind(translateMatch[1]).first();
      if (!trans) return json({ error: 'Translation not found' }, 404);
      return json({ translation: trans });
    }

    // Delete translation
    if (translateMatch && method === 'DELETE') {
      const trans = await env.DB.prepare('SELECT id FROM rb_translations WHERE id = ?').bind(translateMatch[1]).first();
      if (!trans) return json({ error: 'Translation not found' }, 404);
      await env.DB.prepare('DELETE FROM rb_translations WHERE id = ?').bind(translateMatch[1]).run();
      return json({ ok: true, deleted: translateMatch[1] });
    }

    // Available languages
    if (path === '/api/translate/languages' && method === 'GET') {
      return json({ languages: LANGUAGES });
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 14: Podcast Integration (/api/podcast) ───
    // ═══════════════════════════════════════════════════════════════

    // List podcast episodes
    if (path === '/api/podcast' && method === 'GET') {
      const status = url.searchParams.get('status');
      let query = 'SELECT pod.*, p.title as article_title, p.category, p.author, p.reading_time FROM rb_podcasts pod JOIN roadbook_publications p ON p.id = pod.publication_id';
      const params = [];
      if (status) { query += ' WHERE pod.status = ?'; params.push(status); }
      query += ' ORDER BY pod.episode_number DESC, pod.created_at DESC LIMIT 50';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ episodes: result.results || [] });
    }

    // Create podcast episode from article
    if (path === '/api/podcast' && method === 'POST') {
      const body = await request.json();
      if (!body.publication_id) return json({ error: 'publication_id required' }, 400);
      const pub = await env.DB.prepare('SELECT * FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);

      // Check for existing episode
      const existing = await env.DB.prepare('SELECT id FROM rb_podcasts WHERE publication_id = ?').bind(body.publication_id).first();
      if (existing && !body.force) return json({ error: 'Episode already exists for this article. Use force: true to recreate.' }, 409);

      // Estimate audio duration (avg speaking rate ~150 words/min)
      const wordCount = pub.content.split(/\s+/).length;
      const durationSeconds = Math.ceil((wordCount / 150) * 60);

      // Get next episode number
      const lastEp = await env.DB.prepare('SELECT MAX(episode_number) as max_ep FROM rb_podcasts WHERE season = ?').bind(body.season || 1).first();
      const episodeNumber = body.episode_number || ((lastEp?.max_ep || 0) + 1);

      // Generate narration-ready transcript with AI
      let transcript = '';
      try {
        const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [
            { role: 'system', content: `${AGENTS.calliope.prompt} Convert this article into a podcast narration script. Add natural introductions, transitions, and conclusions. Make it conversational while preserving key information. Include [PAUSE] markers where natural breaks should occur. Return ONLY the narration script.` },
            { role: 'user', content: `Title: ${pub.title}\nBy: ${pub.author}\n\n${pub.content.substring(0, 6000)}` },
          ],
          max_tokens: 4000,
        });
        transcript = aiResult.response || pub.content;
      } catch {
        transcript = `Welcome to RoadBook Audio. Today's article: "${pub.title}" by ${pub.author}.\n\n${pub.content}`;
      }

      // Generate episode description
      let description = body.description || '';
      if (!description) {
        description = `Listen to "${pub.title}" by ${pub.author}. ${pub.summary || ''} Duration: approximately ${Math.ceil(durationSeconds / 60)} minutes.`;
      }

      const id = existing ? existing.id : crypto.randomUUID();
      if (existing) {
        await env.DB.prepare(
          "UPDATE rb_podcasts SET title = ?, description = ?, narrator = ?, duration_seconds = ?, audio_url = ?, status = ?, episode_number = ?, season = ?, transcript = ?, updated_at = datetime('now') WHERE id = ?"
        ).bind(body.title || pub.title, description, body.narrator || 'ai', durationSeconds, body.audio_url || null, 'ready', episodeNumber, body.season || 1, transcript, id).run();
      } else {
        await env.DB.prepare(
          'INSERT INTO rb_podcasts (id, publication_id, title, description, narrator, duration_seconds, audio_url, status, episode_number, season, transcript) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(id, body.publication_id, body.title || pub.title, description, body.narrator || 'ai', durationSeconds, body.audio_url || null, 'ready', episodeNumber, body.season || 1, transcript).run();
      }

      const episode = await env.DB.prepare('SELECT * FROM rb_podcasts WHERE id = ?').bind(id).first();
      return json({ episode, agent: 'Calliope' }, 201);
    }

    const podcastMatch = path.match(/^\/api\/podcast\/([^/]+)$/);

    // Get single episode
    if (podcastMatch && method === 'GET') {
      const ep = await env.DB.prepare('SELECT pod.*, p.title as article_title, p.content as article_content, p.author, p.doi FROM rb_podcasts pod JOIN roadbook_publications p ON p.id = pod.publication_id WHERE pod.id = ?').bind(podcastMatch[1]).first();
      if (!ep) return json({ error: 'Episode not found' }, 404);
      return json({ episode: ep });
    }

    // Update episode (e.g., add audio URL after recording)
    if (podcastMatch && method === 'PUT') {
      const ep = await env.DB.prepare('SELECT id FROM rb_podcasts WHERE id = ?').bind(podcastMatch[1]).first();
      if (!ep) return json({ error: 'Episode not found' }, 404);
      const body = await request.json();
      await env.DB.prepare(
        "UPDATE rb_podcasts SET audio_url = COALESCE(?, audio_url), status = COALESCE(?, status), narrator = COALESCE(?, narrator), updated_at = datetime('now') WHERE id = ?"
      ).bind(body.audio_url || null, body.status || null, body.narrator || null, podcastMatch[1]).run();
      const updated = await env.DB.prepare('SELECT * FROM rb_podcasts WHERE id = ?').bind(podcastMatch[1]).first();
      return json({ episode: updated });
    }

    // Generate RSS feed
    if (path === '/api/podcast/feed' && method === 'GET') {
      const episodes = await env.DB.prepare(
        "SELECT pod.*, p.title as article_title, p.author, p.summary as article_summary FROM rb_podcasts pod JOIN roadbook_publications p ON p.id = pod.publication_id WHERE pod.status IN ('ready', 'published') ORDER BY pod.episode_number DESC LIMIT 100"
      ).all();

      const items = (episodes.results || []).map(ep => `
    <item>
      <title>${ep.title.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</title>
      <description>${(ep.description || '').replace(/&/g, '&amp;').replace(/</g, '&lt;')}</description>
      <pubDate>${new Date(ep.created_at).toUTCString()}</pubDate>
      <guid>https://roadbook.blackroad.io/api/podcast/${ep.id}</guid>
      ${ep.audio_url ? `<enclosure url="${ep.audio_url}" type="audio/mpeg" length="${ep.duration_seconds * 16000}"/>` : ''}
      <itunes:duration>${Math.floor(ep.duration_seconds / 60)}:${String(ep.duration_seconds % 60).padStart(2, '0')}</itunes:duration>
      <itunes:episode>${ep.episode_number || 1}</itunes:episode>
      <itunes:season>${ep.season || 1}</itunes:season>
      <itunes:author>${ep.article_title ? ep.article_title.replace(/&/g, '&amp;') : 'BlackRoad OS'}</itunes:author>
    </item>`).join('');

      const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>RoadBook Audio - BlackRoad OS</title>
    <link>https://roadbook.blackroad.io</link>
    <description>Articles from RoadBook, narrated. AI, sovereignty, education, and knowledge preservation.</description>
    <language>en</language>
    <itunes:author>BlackRoad OS</itunes:author>
    <itunes:category text="Technology"/>
    <itunes:image href="https://images.blackroad.io/pixel-art/road-logo.png"/>
    <atom:link href="https://roadbook.blackroad.io/api/podcast/feed" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

      return new Response(rss, { status: 200, headers: { ...CORS, 'Content-Type': 'application/rss+xml; charset=utf-8' } });
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 15: Academic Citations (/api/academic) ───
    // ═══════════════════════════════════════════════════════════════

    // List bibliographies for a user
    if (path === '/api/academic' && method === 'GET') {
      const userId = url.searchParams.get('user_id');
      if (!userId) return json({ error: 'user_id required' }, 400);
      const result = await env.DB.prepare('SELECT * FROM rb_bibliographies WHERE user_id = ? ORDER BY updated_at DESC').bind(userId).all();
      return json({ bibliographies: result.results || [] });
    }

    // Create bibliography
    if (path === '/api/academic' && method === 'POST') {
      const body = await request.json();
      if (!body.user_id || !body.name) return json({ error: 'user_id and name required' }, 400);
      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO rb_bibliographies (id, user_id, name, description, format) VALUES (?, ?, ?, ?, ?)'
      ).bind(id, body.user_id, body.name, body.description || '', body.format || 'apa').run();
      const bib = await env.DB.prepare('SELECT * FROM rb_bibliographies WHERE id = ?').bind(id).first();
      return json({ bibliography: bib }, 201);
    }

    const academicMatch = path.match(/^\/api\/academic\/([^/]+)$/);
    const academicEntriesMatch = path.match(/^\/api\/academic\/([^/]+)\/entries$/);
    const academicGenerateMatch = path.match(/^\/api\/academic\/([^/]+)\/generate$/);

    // Get bibliography with entries
    if (academicMatch && method === 'GET') {
      const bib = await env.DB.prepare('SELECT * FROM rb_bibliographies WHERE id = ?').bind(academicMatch[1]).first();
      if (!bib) return json({ error: 'Bibliography not found' }, 404);
      const entries = await env.DB.prepare(
        'SELECT e.*, p.title as publication_title, p.author as publication_author, p.created_at as publication_date FROM rb_bibliography_entries e LEFT JOIN roadbook_publications p ON p.id = e.publication_id WHERE e.bibliography_id = ? ORDER BY e.sort_key ASC, e.created_at ASC'
      ).bind(academicMatch[1]).all();
      return json({ bibliography: bib, entries: entries.results || [] });
    }

    // Delete bibliography
    if (academicMatch && method === 'DELETE') {
      const bib = await env.DB.prepare('SELECT id FROM rb_bibliographies WHERE id = ?').bind(academicMatch[1]).first();
      if (!bib) return json({ error: 'Bibliography not found' }, 404);
      await env.DB.prepare('DELETE FROM rb_bibliography_entries WHERE bibliography_id = ?').bind(academicMatch[1]).run();
      await env.DB.prepare('DELETE FROM rb_bibliographies WHERE id = ?').bind(academicMatch[1]).run();
      return json({ ok: true, deleted: academicMatch[1] });
    }

    // Add entry to bibliography
    if (academicEntriesMatch && method === 'POST') {
      const body = await request.json();
      const bib = await env.DB.prepare('SELECT * FROM rb_bibliographies WHERE id = ?').bind(academicEntriesMatch[1]).first();
      if (!bib) return json({ error: 'Bibliography not found' }, 404);

      const id = crypto.randomUUID();
      let parsedData = {};
      let rawCitation = body.raw_citation || '';
      let sortKey = '';

      if (body.publication_id) {
        // Add from RoadBook publication
        const pub = await env.DB.prepare('SELECT * FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
        if (!pub) return json({ error: 'Publication not found' }, 404);
        const citations = generateCitations(pub);
        rawCitation = citations[bib.format] || citations.apa;
        parsedData = {
          title: pub.title,
          author: pub.author,
          year: new Date(pub.created_at).getFullYear(),
          doi: pub.doi || generateDOI(pub.id),
          url: `https://roadbook.blackroad.io/api/publications/${pub.id}`,
          publisher: 'RoadBook, BlackRoad OS',
        };
        sortKey = (pub.author || 'ZZZ').toLowerCase();
      } else if (body.doi) {
        // DOI lookup - generate citation from DOI
        rawCitation = body.raw_citation || `DOI: ${body.doi}`;
        parsedData = { doi: body.doi, ...body.parsed_data };
        sortKey = (body.parsed_data?.author || 'ZZZ').toLowerCase();
      } else if (body.raw_citation) {
        // Manual citation entry - use AI to parse
        try {
          const aiResult = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
            messages: [
              { role: 'system', content: `Parse this citation into structured data. Return JSON with fields: title, author, year, journal, volume, pages, doi, url, publisher. Return ONLY valid JSON.` },
              { role: 'user', content: rawCitation },
            ],
            max_tokens: 300,
          });
          try {
            parsedData = JSON.parse(aiResult.response);
          } catch { parsedData = { raw: rawCitation }; }
        } catch { parsedData = { raw: rawCitation }; }
        sortKey = (parsedData.author || 'ZZZ').toLowerCase();
      } else {
        return json({ error: 'publication_id, doi, or raw_citation required' }, 400);
      }

      await env.DB.prepare(
        'INSERT INTO rb_bibliography_entries (id, bibliography_id, publication_id, doi, raw_citation, parsed_data, entry_type, sort_key) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(id, academicEntriesMatch[1], body.publication_id || null, body.doi || parsedData.doi || null, rawCitation, JSON.stringify(parsedData), body.entry_type || 'article', sortKey).run();

      // Update entry count
      await env.DB.prepare(
        "UPDATE rb_bibliographies SET entry_count = entry_count + 1, updated_at = datetime('now') WHERE id = ?"
      ).bind(academicEntriesMatch[1]).run();

      return json({ ok: true, entry_id: id, raw_citation: rawCitation, parsed_data: parsedData }, 201);
    }

    // Remove entry
    if (academicEntriesMatch && method === 'DELETE') {
      const body = await request.json();
      if (!body.entry_id) return json({ error: 'entry_id required' }, 400);
      await env.DB.prepare('DELETE FROM rb_bibliography_entries WHERE id = ? AND bibliography_id = ?').bind(body.entry_id, academicEntriesMatch[1]).run();
      await env.DB.prepare(
        "UPDATE rb_bibliographies SET entry_count = MAX(0, entry_count - 1), updated_at = datetime('now') WHERE id = ?"
      ).bind(academicEntriesMatch[1]).run();
      return json({ ok: true, deleted: body.entry_id });
    }

    // Generate formatted bibliography
    if (academicGenerateMatch && method === 'GET') {
      const bib = await env.DB.prepare('SELECT * FROM rb_bibliographies WHERE id = ?').bind(academicGenerateMatch[1]).first();
      if (!bib) return json({ error: 'Bibliography not found' }, 404);
      const format = url.searchParams.get('format') || bib.format || 'apa';
      const entries = await env.DB.prepare(
        'SELECT e.*, p.title as pub_title, p.author as pub_author, p.created_at as pub_date, p.doi as pub_doi FROM rb_bibliography_entries e LEFT JOIN roadbook_publications p ON p.id = e.publication_id WHERE e.bibliography_id = ? ORDER BY e.sort_key ASC, e.created_at ASC'
      ).bind(academicGenerateMatch[1]).all();

      const formattedEntries = (entries.results || []).map(entry => {
        if (entry.publication_id && entry.pub_title) {
          // Re-generate citation in requested format
          const mockPub = { id: entry.publication_id, title: entry.pub_title, author: entry.pub_author, created_at: entry.pub_date, doi: entry.pub_doi || entry.doi };
          const citations = generateCitations(mockPub);
          return { entry_id: entry.id, citation: citations[format] || citations.apa, format };
        }
        return { entry_id: entry.id, citation: entry.raw_citation, format: 'raw' };
      });

      // Combine into full bibliography text
      const bibText = formattedEntries.map((e, i) => `[${i + 1}] ${e.citation}`).join('\n\n');

      return json({
        bibliography_id: academicGenerateMatch[1],
        name: bib.name,
        format,
        entry_count: formattedEntries.length,
        entries: formattedEntries,
        formatted_text: bibText,
      });
    }

    // DOI lookup
    if (path === '/api/academic/doi-lookup' && method === 'GET') {
      const doi = url.searchParams.get('doi');
      if (!doi) return json({ error: 'doi query param required' }, 400);

      // Check if this DOI is a RoadBook DOI
      if (doi.startsWith('10.blackroad/')) {
        const pubIdFragment = doi.replace('10.blackroad/rb-', '');
        const pubs = await env.DB.prepare("SELECT * FROM roadbook_publications WHERE doi = ? OR id LIKE ?").bind(doi, `${pubIdFragment}%`).all();
        if (pubs.results && pubs.results.length > 0) {
          const pub = pubs.results[0];
          return json({
            doi,
            found: true,
            source: 'roadbook',
            publication: { id: pub.id, title: pub.title, author: pub.author, date: pub.created_at, doi: pub.doi },
            citations: generateCitations(pub),
          });
        }
      }

      // External DOI - try to resolve via doi.org
      try {
        const resp = await fetch(`https://doi.org/${doi}`, { headers: { 'Accept': 'application/json' }, redirect: 'follow' });
        if (resp.ok) {
          const data = await resp.json();
          return json({ doi, found: true, source: 'external', metadata: data });
        }
      } catch {}

      return json({ doi, found: false, message: 'DOI not found or could not be resolved' });
    }

    // ═══════════════════════════════════════════════════════════════
    // ─── FEATURE 16: Content Syndication (/api/syndicate) ───
    // ═══════════════════════════════════════════════════════════════

    // List syndications
    if (path === '/api/syndicate' && method === 'GET') {
      const pubId = url.searchParams.get('publication_id');
      const platform = url.searchParams.get('platform');
      const status = url.searchParams.get('status');
      let query = 'SELECT s.*, p.title as publication_title, p.author FROM rb_syndications s JOIN roadbook_publications p ON p.id = s.publication_id WHERE 1=1';
      const params = [];
      if (pubId) { query += ' AND s.publication_id = ?'; params.push(pubId); }
      if (platform) { query += ' AND s.platform = ?'; params.push(platform); }
      if (status) { query += ' AND s.status = ?'; params.push(status); }
      query += ' ORDER BY s.created_at DESC LIMIT 50';
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ syndications: result.results || [] });
    }

    // Create syndication
    if (path === '/api/syndicate' && method === 'POST') {
      const body = await request.json();
      if (!body.publication_id || !body.platform) return json({ error: 'publication_id and platform required' }, 400);
      const pub = await env.DB.prepare('SELECT id, title, content, summary, author, doi FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
      if (!pub) return json({ error: 'Publication not found' }, 404);

      const validPlatforms = ['medium', 'dev_to', 'hashnode', 'substack', 'linkedin', 'wordpress', 'ghost', 'custom'];
      if (!validPlatforms.includes(body.platform)) {
        return json({ error: `Platform must be one of: ${validPlatforms.join(', ')}` }, 400);
      }

      // Check for existing syndication
      const existing = await env.DB.prepare('SELECT id FROM rb_syndications WHERE publication_id = ? AND platform = ?').bind(body.publication_id, body.platform).first();
      if (existing && !body.force) return json({ error: 'Already syndicated to this platform. Use force: true to re-syndicate.' }, 409);

      const id = existing ? existing.id : crypto.randomUUID();
      if (existing) {
        await env.DB.prepare(
          "UPDATE rb_syndications SET status = 'pending', platform_url = ?, external_id = ?, notes = ?, updated_at = datetime('now') WHERE id = ?"
        ).bind(body.platform_url || null, body.external_id || null, body.notes || null, id).run();
      } else {
        await env.DB.prepare(
          'INSERT INTO rb_syndications (id, publication_id, platform, platform_url, status, external_id, notes) VALUES (?, ?, ?, ?, ?, ?, ?)'
        ).bind(id, body.publication_id, body.platform, body.platform_url || null, 'pending', body.external_id || null, body.notes || null).run();
      }

      // Prepare syndication-ready content
      const canonicalUrl = `https://roadbook.blackroad.io/api/publications/${pub.id}`;
      const syndicationContent = {
        title: pub.title,
        content: pub.content,
        summary: pub.summary,
        author: pub.author,
        canonical_url: canonicalUrl,
        doi: pub.doi,
        tags: typeof pub.tags === 'string' ? JSON.parse(pub.tags || '[]') : pub.tags || [],
        attribution: `Originally published on RoadBook (BlackRoad OS) - ${canonicalUrl}`,
      };

      return json({ ok: true, syndication_id: id, platform: body.platform, status: 'pending', content: syndicationContent }, 201);
    }

    const syndicateMatch = path.match(/^\/api\/syndicate\/([^/]+)$/);
    const syndicateStatusMatch = path.match(/^\/api\/syndicate\/([^/]+)\/status$/);

    // Get syndication details
    if (syndicateMatch && method === 'GET') {
      const syn = await env.DB.prepare('SELECT s.*, p.title as publication_title, p.author, p.doi FROM rb_syndications s JOIN roadbook_publications p ON p.id = s.publication_id WHERE s.id = ?').bind(syndicateMatch[1]).first();
      if (!syn) return json({ error: 'Syndication not found' }, 404);
      return json({ syndication: syn });
    }

    // Update syndication status
    if (syndicateStatusMatch && method === 'POST') {
      const body = await request.json();
      if (!body.status) return json({ error: 'status required' }, 400);
      const validStatuses = ['pending', 'syndicated', 'failed', 'removed', 'updated'];
      if (!validStatuses.includes(body.status)) return json({ error: `status must be one of: ${validStatuses.join(', ')}` }, 400);
      const syn = await env.DB.prepare('SELECT id FROM rb_syndications WHERE id = ?').bind(syndicateStatusMatch[1]).first();
      if (!syn) return json({ error: 'Syndication not found' }, 404);

      await env.DB.prepare(
        "UPDATE rb_syndications SET status = ?, platform_url = COALESCE(?, platform_url), external_id = COALESCE(?, external_id), syndicated_at = CASE WHEN ? = 'syndicated' THEN datetime('now') ELSE syndicated_at END, last_synced_at = datetime('now'), views_on_platform = COALESCE(?, views_on_platform), notes = COALESCE(?, notes), updated_at = datetime('now') WHERE id = ?"
      ).bind(body.status, body.platform_url || null, body.external_id || null, body.status, body.views_on_platform || null, body.notes || null, syndicateStatusMatch[1]).run();

      return json({ ok: true, syndication_id: syndicateStatusMatch[1], status: body.status });
    }

    // Delete syndication
    if (syndicateMatch && method === 'DELETE') {
      const syn = await env.DB.prepare('SELECT id FROM rb_syndications WHERE id = ?').bind(syndicateMatch[1]).first();
      if (!syn) return json({ error: 'Syndication not found' }, 404);
      await env.DB.prepare('DELETE FROM rb_syndications WHERE id = ?').bind(syndicateMatch[1]).run();
      return json({ ok: true, deleted: syndicateMatch[1] });
    }

    // Syndication stats
    if (path === '/api/syndicate/stats' && method === 'GET') {
      const totalSyn = await env.DB.prepare('SELECT COUNT(*) as count FROM rb_syndications').first();
      const activeSyn = await env.DB.prepare("SELECT COUNT(*) as count FROM rb_syndications WHERE status = 'syndicated'").first();
      const byPlatform = await env.DB.prepare('SELECT platform, COUNT(*) as count, SUM(views_on_platform) as total_views FROM rb_syndications GROUP BY platform ORDER BY count DESC').all();
      const totalExternalViews = await env.DB.prepare('SELECT COALESCE(SUM(views_on_platform), 0) as total FROM rb_syndications').first();
      const recentSyndications = await env.DB.prepare(
        "SELECT s.id, s.platform, s.status, s.platform_url, s.syndicated_at, p.title FROM rb_syndications s JOIN roadbook_publications p ON p.id = s.publication_id ORDER BY s.created_at DESC LIMIT 10"
      ).all();
      return json({
        total_syndications: totalSyn?.count || 0,
        active_syndications: activeSyn?.count || 0,
        total_external_views: totalExternalViews?.total || 0,
        by_platform: byPlatform.results || [],
        recent: recentSyndications.results || [],
      });
    }

    // ─── Reading Lists (curated sequences) ───
    if (path === '/api/lists' && method === 'POST') {
      const body = await request.json();
      if (!body.title) return json({ error: 'title required' }, 400);
      await env.DB.prepare("CREATE TABLE IF NOT EXISTS rb_lists (id TEXT PRIMARY KEY, title TEXT, description TEXT, articles TEXT DEFAULT '[]', author TEXT, is_public INTEGER DEFAULT 1, followers INTEGER DEFAULT 0, created_at TEXT DEFAULT (datetime('now')))").run();
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rb_lists (id, title, description, articles, author) VALUES (?, ?, ?, ?, ?)').bind(id, body.title, body.description || '', JSON.stringify(body.articles || []), body.author || 'anonymous').run();
      return json({ id, title: body.title }, 201);
    }
    if (path === '/api/lists' && method === 'GET') {
      await env.DB.prepare("CREATE TABLE IF NOT EXISTS rb_lists (id TEXT PRIMARY KEY, title TEXT, description TEXT, articles TEXT DEFAULT '[]', author TEXT, is_public INTEGER DEFAULT 1, followers INTEGER DEFAULT 0, created_at TEXT DEFAULT (datetime('now')))").run();
      const result = await env.DB.prepare('SELECT * FROM rb_lists WHERE is_public = 1 ORDER BY followers DESC, created_at DESC LIMIT 20').all();
      return json({ lists: (result.results || []).map(l => ({ ...l, articles: JSON.parse(l.articles || '[]') })) });
    }

    // ─── AI Recommend ───
    if (path === '/api/recommend' && method === 'GET') {
      const interest = url.searchParams.get('interest') || '';
      const limit = Math.min(10, parseInt(url.searchParams.get('limit') || '5'));
      let query = "SELECT id, title, summary, category, reads, reading_time FROM roadbook_publications WHERE visibility = 'public'";
      const params = [];
      if (interest) { query += ' AND (category LIKE ? OR title LIKE ? OR summary LIKE ?)'; params.push(`%${interest}%`, `%${interest}%`, `%${interest}%`); }
      query += ' ORDER BY reads DESC LIMIT ?';
      params.push(limit);
      const result = await env.DB.prepare(query).bind(...params).all();
      return json({ recommendations: result.results || [], interest });
    }

    // ─── Article Series ───
    if (path === '/api/series' && method === 'POST') {
      const body = await request.json();
      if (!body.title) return json({ error: 'title required' }, 400);
      await env.DB.prepare("CREATE TABLE IF NOT EXISTS rb_series (id TEXT PRIMARY KEY, title TEXT, description TEXT, article_ids TEXT DEFAULT '[]', author TEXT, created_at TEXT DEFAULT (datetime('now')))").run();
      const id = crypto.randomUUID();
      await env.DB.prepare('INSERT INTO rb_series (id, title, description, article_ids, author) VALUES (?, ?, ?, ?, ?)').bind(id, body.title, body.description || '', JSON.stringify(body.article_ids || []), body.author || 'anonymous').run();
      return json({ id, title: body.title }, 201);
    }
    if (path === '/api/series' && method === 'GET') {
      await env.DB.prepare("CREATE TABLE IF NOT EXISTS rb_series (id TEXT PRIMARY KEY, title TEXT, description TEXT, article_ids TEXT DEFAULT '[]', author TEXT, created_at TEXT DEFAULT (datetime('now')))").run();
      const result = await env.DB.prepare('SELECT * FROM rb_series ORDER BY created_at DESC LIMIT 20').all();
      return json({ series: (result.results || []).map(s => ({ ...s, article_ids: JSON.parse(s.article_ids || '[]') })) });
    }

    // ─── Quick Summary (AI) ───
    if (path === '/api/tldr' && method === 'POST') {
      const body = await request.json();
      if (!body.text && !body.publication_id) return json({ error: 'text or publication_id required' }, 400);
      let text = body.text || '';
      if (body.publication_id) {
        const pub = await env.DB.prepare('SELECT content FROM roadbook_publications WHERE id = ?').bind(body.publication_id).first();
        if (pub) text = pub.content;
      }
      if (!text) return json({ error: 'No content to summarize' }, 400);
      try {
        const result = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: [{ role: 'system', content: 'Give a TL;DR summary in exactly 2-3 sentences. Be direct and concrete.' }, { role: 'user', content: text.slice(0, 4000) }],
          max_tokens: 150,
        });
        return json({ tldr: result.response });
      } catch { return json({ tldr: text.slice(0, 200) + '...' }); }
    }

    // --- Enhanced: Publication versioning (v2) ---
    const pubVersV2 = path.match(/^\/api\/pub\/([^/]+)\/versions$/);
    if (pubVersV2 && method === 'GET') {
      await env.DB.prepare("CREATE TABLE IF NOT EXISTS rb_pub_versions (id TEXT PRIMARY KEY, publication_id TEXT, version INTEGER, content TEXT, change_summary TEXT, chain_hash TEXT, created_at TEXT DEFAULT (datetime('now')))").run();
      const rows = await env.DB.prepare('SELECT * FROM rb_pub_versions WHERE publication_id = ? ORDER BY version DESC').bind(pubVersV2[1]).all();
      return json({versions:rows.results});
    }

    // --- Enhanced: Citations ---
    const citeMatchV2 = path.match(/^\/api\/pub\/([^/]+)\/cite$/);
    if (citeMatchV2 && method === 'POST') {
      await env.DB.prepare("CREATE TABLE IF NOT EXISTS rb_citations (id TEXT PRIMARY KEY, publication_id TEXT, cited_by TEXT, context TEXT, created_at TEXT DEFAULT (datetime('now')))").run();
      const body = await request.json();
      const id = crypto.randomUUID().slice(0,12);
      await env.DB.prepare("INSERT INTO rb_citations (id,publication_id,cited_by,context) VALUES (?,?,?,?)").bind(id,citeMatchV2[1],body.citing_publication_id||'',body.context||'').run();
      return json({ok:true,id});
    }
    const citationsV2 = path.match(/^\/api\/pub\/([^/]+)\/citations$/);
    if (citationsV2 && method === 'GET') {
      try { await env.DB.prepare("CREATE TABLE IF NOT EXISTS rb_citations (id TEXT PRIMARY KEY, publication_id TEXT, cited_by TEXT, context TEXT, created_at TEXT DEFAULT (datetime('now')))").run(); } catch{}
      const rows = await env.DB.prepare('SELECT * FROM rb_citations WHERE publication_id = ? ORDER BY created_at DESC').bind(citationsV2[1]).all();
      return json({citations:rows.results});
    }

    // --- Enhanced: Publish with DOI + RoadChain ---
    const publishMatch = path.match(/^\/api\/publications\/([^/]+)\/publish$/);
    if (publishMatch && method === 'POST') {
      const pub = await env.DB.prepare('SELECT * FROM rb_articles WHERE id = ?').bind(publishMatch[1]).first();
      if (!pub) return json({error:'Publication not found'},404);
      const doi = `ROAD-2026-${publishMatch[1].toUpperCase()}`;
      await env.DB.prepare("UPDATE rb_articles SET status = 'published', doi = ?, published_at = datetime('now'), updated_at = datetime('now') WHERE id = ?").bind(doi,publishMatch[1]).run();
      // Version snapshot
      try {
        await env.DB.prepare("CREATE TABLE IF NOT EXISTS rb_pub_versions (id TEXT PRIMARY KEY, publication_id TEXT, version INTEGER, content TEXT, change_summary TEXT, chain_hash TEXT, created_at TEXT DEFAULT (datetime('now')))").run();
        const cnt = await env.DB.prepare('SELECT COUNT(*) as c FROM rb_pub_versions WHERE publication_id = ?').bind(publishMatch[1]).first();
        await env.DB.prepare("INSERT INTO rb_pub_versions (id,publication_id,version,content,change_summary) VALUES (?,?,?,?,?)").bind(crypto.randomUUID().slice(0,12),publishMatch[1],(cnt?.c||0)+1,pub.content||'','Published').run();
      } catch{}
      // Stamp RoadChain
      let chainHash = null;
      try { const r = await fetch('https://roadchain.blackroad.io/api/event',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({app:'roadbook',type:'published',data:{id:publishMatch[1],doi,title:pub.title}})}); const d = await r.json(); chainHash = d.stamp; } catch{}
      // Earn RoadCoin
      try { await fetch('https://roadcoin.blackroad.io/api/earn',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({road_id:pub.author||'system',action:'publication',amount:5,source_product:'roadbook'})}); } catch{}
      return json({ok:true,doi,chain_hash:chainHash,status:'published'});
    }

    // --- Enhanced: Reading lists ---
    if (path === '/api/reading-lists' && method === 'POST') {
      await env.DB.prepare("CREATE TABLE IF NOT EXISTS rb_reading_lists (id TEXT PRIMARY KEY, name TEXT, user_id TEXT, items TEXT DEFAULT '[]', created_at TEXT DEFAULT (datetime('now')))").run();
      const body = await request.json();
      const id = crypto.randomUUID().slice(0,12);
      await env.DB.prepare("INSERT INTO rb_reading_lists (id,name,user_id) VALUES (?,?,?)").bind(id,body.name||'My List',body.user_id||'anonymous').run();
      return json({ok:true,id},201);
    }
    if (path === '/api/reading-lists' && method === 'GET') {
      try { await env.DB.prepare("CREATE TABLE IF NOT EXISTS rb_reading_lists (id TEXT PRIMARY KEY, name TEXT, user_id TEXT, items TEXT DEFAULT '[]', created_at TEXT DEFAULT (datetime('now')))").run(); } catch{}
      const uid = url.searchParams.get('user_id') || '';
      const rows = uid ? await env.DB.prepare('SELECT * FROM rb_reading_lists WHERE user_id = ?').bind(uid).all() : await env.DB.prepare('SELECT * FROM rb_reading_lists ORDER BY created_at DESC LIMIT 50').all();
      return json({lists:rows.results});
    }

    // --- Enhanced: Featured/trending ---
    if (path === '/api/featured') {
      const rows = await env.DB.prepare('SELECT id,title,author,abstract,views,status FROM rb_articles WHERE status = ? ORDER BY views DESC LIMIT 10').bind('published').all();
      return json({featured:rows.results});
    }
    if (path === '/api/trending-publications') {
      const rows = await env.DB.prepare("SELECT id,title,author,abstract,views FROM rb_articles WHERE status = 'published' AND published_at >= datetime('now','-7 days') ORDER BY views DESC LIMIT 10").all();
      return json({trending:rows.results});
    }

    return json({ error: 'Not found', service: 'roadbook' }, 404);
  },
};
