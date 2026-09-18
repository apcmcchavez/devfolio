// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- Legacy runtime pending TypeScript migration.
// @ts-nocheck
/**
 * Browser-only portfolio behavior. Loaded after React has mounted.
 * The original preview's working click interactions, music and effects have
 * been adapted to use file assets instead of giant embedded data URLs.
 */
let initialized = false;
export function initializePortfolio() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

/* ---- feature block 1 ---- */

const customCursor=document.getElementById('customCursor');
document.addEventListener('mousemove',e=>{customCursor.style.left=e.clientX+'px';customCursor.style.top=e.clientY+'px'});
document.addEventListener('mouseleave',()=>customCursor.style.opacity='0');
document.addEventListener('mouseenter',()=>customCursor.style.opacity='1');

const menu=document.getElementById('menu'), loader=document.getElementById('loader'), portfolio=document.getElementById('portfolio');
const startBtn=document.getElementById('startBtn'), heartCanvas=document.getElementById('heartCanvas'), loaderFill=document.getElementById('loaderFill');
const hctx=heartCanvas.getContext('2d');
const HM=[[0,1,1,0,0,1,1,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0],[0,0,0,1,1,0,0,0]];
const PX=18,pixels=[]; HM.forEach((r,y)=>r.forEach((v,x)=>v&&pixels.push([x,y])));
function drawHeart(n){hctx.clearRect(0,0,144,126);pixels.forEach(([x,y],i)=>{hctx.fillStyle=i<n?`hsl(${265+(i/pixels.length)*65},78%,${48+(i/pixels.length)*24}%)`:'rgba(139,69,232,.13)';hctx.fillRect(x*PX,y*PX,PX,PX);hctx.strokeStyle='rgba(5,2,14,.45)';hctx.strokeRect(x*PX+.5,y*PX+.5,PX-1,PX-1);})}
drawHeart(0);

function resetPortfolioToAbout(){
  const area=document.getElementById('scrollArea');
  if(!area)return;
  // Avoid inheriting the site's smooth-scrolling behavior for this reset.
  area.style.scrollBehavior='auto';
  area.scrollTop=0;
  const about=document.getElementById('about');
  if(about)about.setAttribute('tabindex','-1');
  document.querySelectorAll('.nav-item[data-target]').forEach(button=>{
    const isAbout=button.dataset.target==='about';
    button.classList.toggle('active',isAbout);
    if(isAbout)button.setAttribute('aria-current','location');
    else button.removeAttribute('aria-current');
  });
  requestAnimationFrame(()=>{
    area.scrollTop=0;
    area.style.scrollBehavior='';
  });
}

startBtn.onclick=()=>{
  resetPortfolioToAbout();
  menu.classList.remove('active');loader.classList.add('active');let f=0;
  const iv=setInterval(()=>{f++;drawHeart(f);loaderFill.style.width=(f/pixels.length*100)+'%';if(f>=pixels.length){clearInterval(iv);setTimeout(()=>{loader.classList.remove('active');portfolio.classList.add('active');resetPortfolioToAbout();initGalaxy();},450)}},42);
};

let galaxyStarted=false;
function initGalaxy(){
 if(galaxyStarted)return; galaxyStarted=true;
 const c=document.getElementById('galaxy'),ctx=c.getContext('2d');let W,H;
 const resize=()=>{W=c.width=innerWidth;H=c.height=innerHeight};resize();addEventListener('resize',resize);
 class Blob{constructor(){this.reset(true)}reset(init){this.x=Math.random()*W;this.y=init?Math.random()*H:(Math.random()<.5?-200:H+200);this.r=65+Math.random()*165;this.vx=(Math.random()-.5)*.28;this.vy=(Math.random()-.5)*.18;this.ph=Math.random()*6.28;this.sp=.005+Math.random()*.005;this.h=255+Math.random()*58;this.a=.038+Math.random()*.06;this.w=Math.random()*6.28;this.ws=.009+Math.random()*.008}update(){this.ph+=this.sp;this.w+=this.ws;this.x+=this.vx+Math.sin(this.ph*1.2)*.38;this.y+=this.vy+Math.cos(this.ph*.8)*.3;if(this.x<-300||this.x>W+300||this.y<-300||this.y>H+300)this.reset(false)}draw(){const rx=this.r*(1+.17*Math.cos(this.w*.7)),ry=this.r*(1+.17*Math.sin(this.w*.9)),g=ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,Math.max(rx,ry));g.addColorStop(0,`hsla(${this.h},78%,56%,${this.a})`);g.addColorStop(1,`hsla(${this.h+22},68%,36%,0)`);ctx.save();ctx.beginPath();ctx.ellipse(this.x,this.y,rx,ry,this.w*.3,0,Math.PI*2);ctx.fillStyle=g;ctx.fill();ctx.restore()}}
 class Ribbon{constructor(){this.y=Math.random()*H;this.amp=22+Math.random()*52;this.freq=.003+Math.random()*.004;this.ph=Math.random()*6.28;this.sp=.0025+Math.random()*.003;this.thick=5+Math.random()*17;this.h=260+Math.random()*50;this.vy=(Math.random()-.5)*.07}update(){this.ph+=this.sp;this.y+=this.vy;if(this.y<-80||this.y>H+80)this.y=this.y<0?H+80:-80}draw(){ctx.save();ctx.beginPath();for(let x=0;x<W;x+=4){const y=this.y+Math.sin(x*this.freq+this.ph)*this.amp;if(x===0){
  ctx.moveTo(x,y);
}else{
  ctx.lineTo(x,y);
}}ctx.strokeStyle=`hsla(${this.h},73%,53%,.075)`;ctx.lineWidth=this.thick;ctx.stroke();ctx.restore()}}
 class Spark{constructor(){this.reset()}reset(){this.x=Math.random()*W;this.y=Math.random()*H;this.sz=Math.random()<.11?4:2;this.life=0;this.max=65+Math.random()*105;this.h=255+Math.random()*82}update(){this.life++;if(this.life>this.max)this.reset()}draw(){const t=this.life/this.max,a=t<.3?t/.3:(1-t)/.7;ctx.fillStyle=`hsla(${this.h},88%,76%,${a*.62})`;ctx.fillRect(this.x,this.y,this.sz,this.sz);if(this.sz>2){ctx.fillRect(this.x-this.sz,this.y+this.sz*.5,this.sz*3,1);ctx.fillRect(this.x+this.sz*.5,this.y-this.sz,1,this.sz*3)}}}
 const blobs=Array.from({length:18},()=>new Blob()), ribbons=Array.from({length:7},()=>new Ribbon()), sparks=Array.from({length:70},()=>new Spark());
 (function frame(){ctx.clearRect(0,0,W,H);const bg=ctx.createLinearGradient(0,0,W,H);bg.addColorStop(0,'#05020e');bg.addColorStop(.5,'#08031a');bg.addColorStop(1,'#05020e');ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);ribbons.forEach(x=>{x.update();x.draw()});blobs.forEach(x=>{x.update();x.draw()});sparks.forEach(x=>{x.update();x.draw()});requestAnimationFrame(frame)})();
 const stars=document.getElementById('stars');for(let i=0;i<110;i++){const s=document.createElement('i');s.className='star';const z=Math.random()*2.4+.5;s.style.cssText=`width:${z}px;height:${z}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${1.2+Math.random()*3.8}s;opacity:${.18+Math.random()*.7}`;stars.appendChild(s)}
}

document.querySelectorAll('.nav-item[data-target]').forEach(btn=>btn.addEventListener('click',()=>{document.getElementById(btn.dataset.target).scrollIntoView({behavior:'smooth',block:'start'})}));
const scrollArea=document.getElementById('scrollArea');
const sectionEls=[...document.querySelectorAll('.section')];
const initialNav=document.querySelector('.nav-item[data-target="about"]');
if(initialNav){initialNav.classList.add('active');initialNav.setAttribute('aria-current','location');}

scrollArea.addEventListener('scroll',()=>{let best=sectionEls[0],dist=1e9;sectionEls.forEach(s=>{const d=Math.abs(s.getBoundingClientRect().top-scrollArea.getBoundingClientRect().top-20);if(d<dist){dist=d;best=s}});document.querySelectorAll('.nav-item[data-target]').forEach(b=>{const active=b.dataset.target===best.id;b.classList.toggle('active',active);if(active)b.setAttribute('aria-current','location');else b.removeAttribute('aria-current');});});

const music=document.getElementById('musicWindow');
document.getElementById('openMusic').onclick=()=>{music.classList.add('open');music.setAttribute('aria-hidden','false')};
document.getElementById('musicClose').onclick=()=>{music.classList.remove('open');music.setAttribute('aria-hidden','true')};
/* V10: music playback handler installed by the full audio controller below. */
/* V10: old conflicting drag handlers removed. */

const quit=document.getElementById('quitOverlay');document.getElementById('quitTop').onclick=()=>quit.classList.add('open');
document.getElementById('quitNo').onclick=()=>quit.classList.remove('open');
document.getElementById('quitYes').onclick=()=>{quit.classList.remove('open');music.classList.remove('open');portfolio.classList.remove('active');resetPortfolioToAbout();menu.classList.add('active')};
document.getElementById('quitOverlay').addEventListener('click',e=>{if(e.target===quit)quit.classList.remove('open')});

document.getElementById('sysDate').textContent='SYS.DATE '+new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});


/* ---- feature block 2 ---- */

/* ===== Revision 7 interaction system ===== */

// V10: drag behavior installed once in the final enhancement script.

// Main-menu pointer parallax + stronger hold/drag depth
(function(){
  const menu=document.getElementById('menu');
  if(!menu) return;
  const layers=[...menu.querySelectorAll('.parallax-layer')];
  let pressed=false;
  function apply(e,strong=false){
    const r=menu.getBoundingClientRect();
    const nx=((e.clientX-r.left)/r.width-.5);
    const ny=((e.clientY-r.top)/r.height-.5);
    layers.forEach(layer=>{
      const d=parseFloat(layer.dataset.depth||0.3);
      const amp=strong?55:18;
      const rot=strong?2.4:.8;
      const tx=-nx*amp*d;
      const ty=-ny*amp*d;
      const rz=(nx*rot*d);
      const scale=1 + (strong?0.018:0.006)*d;
      layer.style.transform=`translate3d(${tx}px,${ty}px,${d*60}px) rotateY(${rz}deg) scale(${scale})`;
    });
  }
  menu.addEventListener('pointermove',e=>apply(e,pressed));
  menu.addEventListener('pointerdown',e=>{pressed=true;menu.classList.add('depth-active');apply(e,true)});
  window.addEventListener('pointerup',()=>{pressed=false;menu.classList.remove('depth-active');layers.forEach(l=>l.style.transform='')});
  menu.addEventListener('pointerleave',()=>{if(!pressed) layers.forEach(l=>l.style.transform='')});
})();

// Pixel effects play only as a result of click or keyboard activation.
// No audible effects occur on load or on hover; there is no extra title-bar sound icon.
(function(){
  let audio=null;
  function getAudio(){
    const AudioContextClass=window.AudioContext||window.webkitAudioContext;
    if(!AudioContextClass) return null;
    if(!audio) audio=new AudioContextClass();
    if(audio.state==='suspended') audio.resume().catch(()=>{});
    return audio;
  }
  function note(ac,freq,time,duration=0.07,volume=0.022,wave='square'){
    const oscillator=ac.createOscillator();
    const gain=ac.createGain();
    oscillator.type=wave;
    oscillator.frequency.setValueAtTime(freq,time);
    gain.gain.setValueAtTime(0.0001,time);
    gain.gain.linearRampToValueAtTime(volume,time+0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001,time+duration);
    oscillator.connect(gain).connect(ac.destination);
    oscillator.start(time);
    oscillator.stop(time+duration+0.004);
  }
  function sound(kind){
    const ac=getAudio();if(!ac)return;
    const t=ac.currentTime+0.004;
    // Distinctive, brief, quiet game-like sounds; only explicit interactions play them.
    switch(kind){
      case 'loading': {
        // One rising, softened arcade charging sound; initiated solely by the visitor click.
        const osc=ac.createOscillator(),gain=ac.createGain();
        osc.type='triangle';
        osc.frequency.setValueAtTime(155,t);
        osc.frequency.exponentialRampToValueAtTime(920,t+1.64);
        gain.gain.setValueAtTime(.0001,t);
        gain.gain.linearRampToValueAtTime(.017,t+.16);
        gain.gain.setValueAtTime(.017,t+1.40);
        gain.gain.exponentialRampToValueAtTime(.0001,t+1.75);
        osc.connect(gain).connect(ac.destination);
        osc.start(t);osc.stop(t+1.77);
        note(ac,1047,t+1.73,.09,.014);
        break;
      }
      case 'coin':
        note(ac,988,t,0.075,0.035);
        note(ac,1318.51,t+0.062,0.13,0.030);
        break;
      case 'exp':
        note(ac,392,t,0.06,0.018);note(ac,523.25,t+0.055,0.06,0.023);note(ac,783.99,t+0.11,0.12,0.022);
        break;
      case 'hp':
        note(ac,440,t,0.08,0.020,'triangle');note(ac,659.25,t+0.07,0.15,0.022,'triangle');
        break;
      case 'mp':
        note(ac,622.25,t,0.11,0.018,'sine');note(ac,932.33,t+0.055,0.15,0.016,'sine');
        break;
      case 'avatar':
        note(ac,659.25,t,0.045,0.018);note(ac,830.61,t+0.05,0.08,0.022);break;
      case 'start':
        note(ac,392,t,0.075,0.017);note(ac,587.33,t+0.065,0.09,0.020);break;
      case 'confirm':
        note(ac,523.25,t,0.065,0.020);note(ac,392,t+0.06,0.095,0.018);break;
      case 'nav':
        note(ac,698.46,t,0.04,0.014);break;
      default:
        note(ac,466.16,t,0.043,0.015);break;
    }
  }
  document.querySelectorAll('[data-sfx]').forEach(el=>{
    el.addEventListener('click',()=>sound(el.dataset.sfx||'click'));
  });
  // Key activation for stat rows and the pixel character; buttons natively support Enter/Space.
  document.querySelectorAll('.stat-interactive, .avatar-interactive').forEach(el=>{
    el.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click();}
    });
  });
})();

// Small main-menu repeated-click easter egg on heart/start icon.
(function(){
  const s=document.getElementById('startBtn');
  if(!s) return;
  let taps=0,timer=null;
  s.addEventListener('click',()=>{
    taps++;
    clearTimeout(timer);
    if(taps>=4){
      s.animate([
        {transform:'translateY(-5px) scale(1.06) rotate(0deg)'},
        {transform:'translateY(-5px) scale(1.12) rotate(-6deg)'},
        {transform:'translateY(-5px) scale(1.12) rotate(6deg)'},
        {transform:'translateY(-5px) scale(1.06) rotate(0deg)'}
      ],{duration:420,easing:'steps(4,end)'});
      taps=0;
    }
    timer=setTimeout(()=>taps=0,1200);
  });
})();


/* ---- feature block 3 ---- */

/* V9 hero: cycling prompts only during intentional hover/focus; never flashes the label. */
(function(){
  const button=document.getElementById('startBtn');
  const label=document.getElementById('startLabel');
  const menu=document.getElementById('menu');
  if(!button||!label||!menu)return;
  const prompts=['ARE U SURE?','WELCOME, GAMER','PRESS TO ENTER'];
  let interval=null,index=0;
  const stop=()=>{
    if(interval!==null){clearInterval(interval);interval=null;}
    label.textContent='CLICK TO START';
    menu.classList.remove('title-awake');
  };
  const start=()=>{
    stop();index=0;
    menu.classList.add('title-awake');
    label.textContent=prompts[0];
    interval=setInterval(()=>{index=(index+1)%prompts.length;label.textContent=prompts[index];},1350);
  };
  button.addEventListener('pointerenter',start);
  button.addEventListener('pointerleave',stop);
  button.addEventListener('focus',start);
  button.addEventListener('blur',stop);
  button.addEventListener('click',stop);
  document.getElementById('quitYes')?.addEventListener('click',stop);
})();


/* ---- feature block 4 ---- */

/* V10: standalone enhancement — working songs, dragging, actual mail/social links and blink sprite. */
(function(){
 const avatar=document.querySelector('.avatar-interactive');
 const sprite=document.getElementById('statsIyah');
 if(avatar&&sprite){
   const neutral=sprite.src,blink=sprite.dataset.blinkSrc;
   let blinkTimer=0;
   avatar.addEventListener('click',()=>{
     clearTimeout(blinkTimer);
     sprite.src=blink;
     sprite.alt='Iyah blinking with eyes closed';
     avatar.classList.add('blinking');
     blinkTimer=setTimeout(()=>{
       sprite.src=neutral;
       sprite.alt='Iyah with eyes open — click to blink';
       avatar.classList.remove('blinking');
     },380);
   });
 }

 const windowEl=document.getElementById('musicWindow');
 const handle=document.getElementById('musicHead');
 if(windowEl&&handle){
   let drag=null;
   const move=(event)=>{
     if(!drag || event.pointerId!==drag.id)return;
     const maxX=Math.max(6,window.innerWidth-windowEl.offsetWidth-6);
     const maxY=Math.max(6,window.innerHeight-windowEl.offsetHeight-6);
     const x=Math.min(maxX,Math.max(6,event.clientX-drag.dx));
     const y=Math.min(maxY,Math.max(6,event.clientY-drag.dy));
     windowEl.style.setProperty('--music-x',x+'px');
     windowEl.style.setProperty('--music-y',y+'px');
     windowEl.style.setProperty('--music-right','auto');
   };
   handle.addEventListener('pointerdown',(event)=>{
     if(event.target.closest('button') || event.button!==0)return;
     const r=windowEl.getBoundingClientRect();
     drag={id:event.pointerId,dx:event.clientX-r.left,dy:event.clientY-r.top};
     handle.classList.add('is-dragging');
     handle.setPointerCapture(event.pointerId);
     event.preventDefault();
   });
   handle.addEventListener('pointermove',move);
   const stop=(event)=>{
     if(!drag||event.pointerId!==drag.id)return;
     drag=null;
     handle.classList.remove('is-dragging');
     if(handle.hasPointerCapture(event.pointerId))handle.releasePointerCapture(event.pointerId);
   };
   handle.addEventListener('pointerup',stop);
   handle.addEventListener('pointercancel',stop);
   window.addEventListener('resize',()=>{
     const x=windowEl.style.getPropertyValue('--music-x');
     if(!x)return;
     const r=windowEl.getBoundingClientRect();
     windowEl.style.setProperty('--music-x',Math.min(Math.max(6,window.innerWidth-windowEl.offsetWidth-6),Math.max(6,r.left))+'px');
     windowEl.style.setProperty('--music-y',Math.min(Math.max(6,window.innerHeight-windowEl.offsetHeight-6),Math.max(6,r.top))+'px');
   });
 }

 const media=document.createElement('audio');
 media.preload='metadata';
 media.setAttribute('aria-label','Cozy Corner music player');
 media.style.display='none';
 document.body.appendChild(media);
 const tracks=[{"title": "SAME OLD", "artist": "FCJ", "audio": "/music/same-old minus1.mp3"}, {"title": "GO HIGHER", "artist": "HYBS", "audio": "/music/go higher-minus1.mp3"}, {"title": "FLOWER", "artist": "JOHNNY STIMSON", "audio": "/music/flower-minus1.mp3"}, {"title": "SUMMER IS FOR FALLING IN LOVE", "artist": "SARAH KANG", "audio": "/music/summer is for falling in love-minus1.mp3"}, {"title": "PROMISE", "artist": "LAUFEY", "audio": "/music/promise-minus1.mp3"}];
 const rows=[...document.querySelectorAll('#musicWindow .playlist-row')];
 const currentTitle=document.querySelector('#musicWindow .now-title');
 const currentArtist=document.querySelector('#musicWindow .now-artist');
 const status=document.getElementById('musicStatus');
 const play=document.getElementById('playBtn');
 const playIcon=document.getElementById('playIcon');
 const prev=document.getElementById('prevBtn');
 const next=document.getElementById('nextBtn');
 const progress=document.querySelector('#musicWindow .music-progress');
 const timeLabels=document.querySelectorAll('#musicWindow .music-time-row > span');
 const volume=document.querySelector('#musicWindow .volume-btn');
 const open=document.getElementById('openMusic');
 const close=document.getElementById('musicClose');
 let index=3;
 let volumeStep=1;
 const volumeLevels=[0.28,0.62,1.0];
 media.volume=volumeLevels[volumeStep];
 const formatTime=(value)=>Number.isFinite(value)?Math.floor(value/60)+':'+String(Math.floor(value%60)).padStart(2,'0'):'0:00';
 function updatePlaybackUI(){
   const active=!media.paused;
   if(playIcon){playIcon.classList.toggle('play-shape',!active);playIcon.classList.toggle('pause-shape',active);}
   if(play)play.setAttribute('aria-label',active?'Pause music':'Play music');
   if(status)status.textContent=active?'playing...':'paused';
 }
 function progressUI(){
   const duration=media.duration;
   const percent=Number.isFinite(duration)&&duration>0?Math.min(100,Math.max(0,media.currentTime/duration*100)):0;
   if(progress)progress.style.setProperty('--progress',percent+'%');
   if(timeLabels.length===2){timeLabels[0].textContent=formatTime(media.currentTime);timeLabels[1].textContent=formatTime(duration);}
 }
 function selectedTrack(n,shouldPlay){
   index=(n+tracks.length)%tracks.length;
   const track=tracks[index];
   if(!track)return;
   if(currentTitle)currentTitle.textContent=track.title;
   if(currentArtist)currentArtist.textContent=track.artist;
   rows.forEach((row,i)=>{
     row.classList.toggle('active-track',i===index);
     row.setAttribute('aria-pressed',i===index?'true':'false');
   });
   if(media.src!==track.audio){media.src=track.audio;media.load();}
   media.currentTime=0;
   progressUI();
   if(shouldPlay){media.play().catch(()=>updatePlaybackUI());}
   else {media.pause();updatePlaybackUI();}
 }
 function ensureLoaded(){if(!media.src) selectedTrack(index,false);}
 if(open)open.addEventListener('click',()=>{ensureLoaded();updatePlaybackUI();});
 if(close)close.addEventListener('click',()=>{
   // Closing Cozy Corner only hides the panel; audio continues until Pause is pressed.
   updatePlaybackUI();
 });
 if(play)play.addEventListener('click',()=>{
   ensureLoaded();
   if(media.paused)media.play().catch(()=>updatePlaybackUI());else media.pause();
 });
 if(prev)prev.addEventListener('click',()=>{ensureLoaded();selectedTrack(index-1,!media.paused);});
 if(next)next.addEventListener('click',()=>{ensureLoaded();selectedTrack(index+1,!media.paused);});
 rows.forEach((row,i)=>row.addEventListener('click',()=>selectedTrack(i,true)));
 function seek(event){
   ensureLoaded();
   if(!Number.isFinite(media.duration)||!media.duration)return;
   const r=progress.getBoundingClientRect();
   const fraction=Math.min(1,Math.max(0,(event.clientX-r.left)/r.width));
   media.currentTime=fraction*media.duration;
   progressUI();
 }
 if(progress){
   progress.setAttribute('role','slider');progress.setAttribute('tabindex','0');
   progress.setAttribute('aria-label','Seek music');
   progress.addEventListener('pointerdown',e=>{
     if(e.button!==0)return;seek(e);progress.setPointerCapture(e.pointerId);
   });
   progress.addEventListener('pointermove',e=>{if(progress.hasPointerCapture(e.pointerId))seek(e);});
   progress.addEventListener('keydown',e=>{
     if(['ArrowRight','ArrowLeft','Home','End'].includes(e.key)){
       e.preventDefault();ensureLoaded();if(!Number.isFinite(media.duration))return;
       const delta=e.key==='ArrowRight'?5:e.key==='ArrowLeft'?-5:0;
       media.currentTime=e.key==='Home'?0:e.key==='End'?media.duration:Math.max(0,Math.min(media.duration,media.currentTime+delta));
     }
   });
 }
 if(volume){
   const labels=['normal','medium','high'];
   const update=()=>{
     media.volume=volumeLevels[volumeStep];volume.dataset.volume=String(volumeStep);
     volume.setAttribute('aria-label','Volume: '+labels[volumeStep]+'. Click to change.');
     volume.title='Volume: '+labels[volumeStep];
   };
   volume.addEventListener('click',()=>{volumeStep=(volumeStep+1)%3;update();});
   update();
 }
 media.addEventListener('loadedmetadata',progressUI);
 media.addEventListener('timeupdate',progressUI);
 media.addEventListener('durationchange',progressUI);
 media.addEventListener('play',updatePlaybackUI);
 media.addEventListener('pause',updatePlaybackUI);
 media.addEventListener('ended',()=>selectedTrack(index+1,true));
 media.addEventListener('error',()=>{if(status)status.textContent='Track unavailable';});
const quitYes = document.getElementById("quitYes");

if (quitYes) {
  quitYes.addEventListener("click", () => {
    // Stop the music immediately
    media.pause();

    // Reset the song and player to their initial state
    media.currentTime = 0;
    selectedTrack(3, false);

    // Refresh the player interface
    updatePlaybackUI();
    progressUI();
  });
}
 if(currentTitle)currentTitle.textContent=tracks[index].title;
 if(currentArtist)currentArtist.textContent=tracks[index].artist;
 updatePlaybackUI();
 progressUI();
})();


/* ---- feature block 5 ---- */


/* V11: show the ACTUAL uploaded grabbing-hand asset over the draggable header.
   The original music window's captured-pointer X/Y dragging stays unchanged. */
(function(){
 const header=document.getElementById('musicHead');
 const cursor=document.getElementById('customCursor');
 if(!header||!cursor)return;
 const ordinary=cursor.src;
 const grabbing='/images/ui/cursor-grab.png';
 let isDragging=false;
 const set=(on)=>{
   cursor.src=on?grabbing:ordinary;
   cursor.classList.toggle('is-grabbing',on);
 };
 const overHeader=()=>{
   const r=header.getBoundingClientRect();
   return lastX>=r.left&&lastX<=r.right&&lastY>=r.top&&lastY<=r.bottom;
 };
 let lastX=-1,lastY=-1;
 document.addEventListener('pointermove',e=>{lastX=e.clientX;lastY=e.clientY;},{passive:true});
 header.addEventListener('pointerenter',()=>set(true));
 header.addEventListener('pointerleave',()=>{if(!isDragging)set(false)});
 header.addEventListener('pointerdown',e=>{
   if(e.button!==0||e.target.closest('button'))return;
   isDragging=true;set(true);
 });
 const finish=()=>{if(!isDragging)return;isDragging=false;set(overHeader());};
 window.addEventListener('pointerup',finish);
 window.addEventListener('pointercancel',finish);
 window.addEventListener('blur',()=>{isDragging=false;set(false)});
 // If music closes while the cursor is over its handle, restore normal cursor.
 document.getElementById('musicClose')?.addEventListener('click',()=>{isDragging=false;set(false)});
 document.getElementById('quitYes')?.addEventListener('click',()=>{isDragging=false;set(false)});
})();


/* ---- feature block 6 ---- */


/* V12: keep custom grab-hand cursor attached to the pointer even under pointer capture. */
(function(){
  const cursor=document.getElementById('customCursor');
  const head=document.getElementById('musicHead');
  if(!cursor||!head)return;
  const follow=(event)=>{
    if(event.pointerType && event.pointerType!=='mouse' && event.pointerType!=='pen')return;
    cursor.style.left=event.clientX+'px';
    cursor.style.top=event.clientY+'px';
    cursor.style.opacity='1';
  };
  // Both are intentional: document tracks ordinary movement; head tracks captured movement.
  document.addEventListener('pointermove',follow,{capture:true,passive:true});
  head.addEventListener('pointermove',follow,{capture:true,passive:true});
  head.addEventListener('pointerdown',follow,{capture:true});
  head.addEventListener('pointerup',follow,{capture:true});
  head.addEventListener('pointercancel',follow,{capture:true});
})();

}
