"use client";

import { useEffect } from "react";

/**
 * Iyah Devfolio: markup lives here, styles in globals.css, behavior in portfolio-runtime.ts.
 * Images and full-quality audio are in public/, so changing them is straightforward.
 */
export default function Home() {
  useEffect(() => {
    import("./portfolio-runtime").then(({ initializePortfolio }) => initializePortfolio());
  }, []);

  return (
    <>
<img alt="custom cursor" draggable={false} id="customCursor" src="/images/custom-cursor.png"/><section className="screen active" id="menu">
<div className="menu-layer"><img alt="pixel galaxy sky" className="menu-sky parallax-layer" data-depth="0.15" draggable={false} src="/images/pixel-galaxy-sky.png"/></div>
<div className="menu-layer"><img alt="city and water" className="menu-city parallax-layer" data-depth="0.35" draggable={false} src="/images/city-and-water.png"/></div>
<div className="menu-layer menu-roof-unified-layer"><img alt="Pixel-art rooftop foreground" className="menu-roof-unified parallax-layer" data-depth="0.62" draggable={false} src="/images/rooftop-unified.png"/></div>
<div className="menu-vignette"></div><div aria-hidden="true" className="menu-crt"></div>
<div className="menu-content">
<div className="menu-title">WANNA<br/><span className="menu-title-glow">VENTURE IN<br/>IYAH.DEV?</span></div>
<div aria-live="polite" className="start-label" id="startLabel">CLICK TO START</div>
<button aria-label="Enter Iyah Devfolio" className="start-button" data-sfx="loading" id="startBtn"><img alt="click to start" className="start-heart" draggable={false} src="/images/click-to-start.png"/></button>
<div className="start-exe"><span className="white-sixtyfour-text">iyah.exe</span></div>
</div>
</section><section className="screen" id="loader">
<canvas height="126" id="heartCanvas" width="144"></canvas>
<div className="loader-copy">LOADING UNIVERSE...</div>
<div className="loader-sub">✦ IYAH.DEV ✦</div>
<div className="loader-track"><div className="loader-fill" id="loaderFill"></div></div>
</section><section className="screen" id="portfolio">
<canvas id="galaxy"></canvas>
<div className="stars" id="stars"></div>
<div className="shell">
<header className="topbar">
<div className="window-title white-sixtyfour">iyah.exe</div>
<div className="win-controls"><span aria-hidden="true" className="win-btn win-decoration"><img alt="minimize" className="" draggable={false} src="/images/minimize.png"/></span>
<span aria-hidden="true" className="win-btn win-decoration"><img alt="maximize" className="" draggable={false} src="/images/maximize.png"/></span>
<button aria-label="Exit" className="win-btn" data-sfx="click" id="quitTop"><img alt="close" className="" draggable={false} src="/images/close.png"/></button>
</div>
</header>
<div className="mid">
<nav aria-label="Section navigation" className="nav">
<button className="nav-item" data-sfx="nav" data-target="about"><span className="face">(•_•)</span><span className="nav-tip">ABOUT</span></button>
<button className="nav-item" data-sfx="nav" data-target="experience"><span className="face">(&gt;_&lt;)</span><span className="nav-tip">EXPERIENCE</span></button>
<button className="nav-item" data-sfx="nav" data-target="skills"><span className="face">(^_^)</span><span className="nav-tip">SKILLS</span></button>
<button className="nav-item" data-sfx="nav" data-target="achievements"><span className="face">(*_*)</span><span className="nav-tip">ACHIEVEMENTS</span></button>
<button className="nav-item" data-sfx="nav" data-target="projects"><span className="face">(^o^)</span><span className="nav-tip">PROJECTS</span></button>
<button className="nav-item" data-sfx="nav" data-target="sidequests"><span className="face">(-_-)</span><span className="nav-tip">SIDE QUESTS</span></button>
<button className="nav-item" data-sfx="nav" data-target="system"><span className="face">(o_o)</span><span className="nav-tip">SYSTEM CHECK</span></button>
<div className="nav-divider"></div>
<button className="nav-item nav-music" data-sfx="click" id="openMusic"><img alt="music" className="" draggable={false} src="/images/music.png"/><span className="nav-tip">COZY CORNER</span></button>
</nav>
<main className="scroll-area" id="scrollArea">
<div className="content">
<section className="section" id="about">
<p className="kicker">01 // PROFILE DATA</p>
<div className="section-head">
<div className="section-icon-box"><img alt="about" className="section-icon" draggable={false} src="/images/about.png"/></div>
<h2 className="section-title">ABOUT ME.TXT</h2><div className="head-line"></div>
</div>
<div className="about-grid">
<article className="panel profile-card">
<div className="profile-window-label">PLAYER_01.profile</div>
<div className="profile-pic-wrap"><img alt="Iyah pixel portrait" className="profile-pic pixel-img" draggable={false} src="/images/profile-iyah.png"/></div>
<div className="name">IYAH CHAVEZ</div>
<p className="profile-lines">Mariyah Vanna<br/>Monique Chavez</p>
<p className="profile-lines">Boba and Matcha • Tech + Creativity</p>
<div className="socials">
<a aria-label="Visit Mariyah’s GitHub (opens new tab)" className="social social-bare" data-sfx="click" href="https://github.com/apcmcchavez" rel="noopener noreferrer" target="_blank"><img alt="GitHub" className="" draggable={false} src="/images/github.png"/></a>
<a aria-label="Visit Mariyah’s LinkedIn (opens new tab)" className="social social-bare" data-sfx="click" href="https://www.linkedin.com/in/mariyah-vanna-monique-chavez-4b309b285" rel="noopener noreferrer" target="_blank"><img alt="LinkedIn" className="" draggable={false} src="/images/linkedin.png"/></a>
</div>
</article>
<div>
<article className="panel bio-box">
<div className="title-row"><img alt="terminal" className="micro-icon" draggable={false} src="/images/terminal.png"/><span className="card-title">WHO_AM_I.txt</span></div>
<p className="bodycopy">Hi! I’m Iyah, a BS Computer Science student specializing in Software Systems at Asia Pacific College. I bring hands-on experience as a Project Manager, QA Tester, Developer, and Team Facilitator, backed by intermediate web development skills and Oracle Cloud AI certifications.</p>
<p className="bodycopy">I like work where organization, structured testing, creative problem-solving, and software development overlap — basically, where I can make something useful and make the process around it better too.</p>
</article>
<div className="info-grid">
<div className="panel info-pill"><img alt="location" className="" draggable={false} src="/images/location.png"/><div><div className="label">LOCATION</div><div className="value">Monrovia, CA</div></div></div>
<div className="panel info-pill"><img alt="status" className="" draggable={false} src="/images/status.png"/><div><div className="label">STATUS</div><div className="value">Open to internship / dev freelancing</div></div></div>
<div className="panel info-pill"><img alt="degree" className="" draggable={false} src="/images/degree.png"/><div><div className="label">DEGREE</div><div className="value">BSCS • Software Systems</div></div></div>
<div className="panel info-pill"><img alt="school" className="" draggable={false} src="/images/school.png"/><div><div className="label">SCHOOL</div><div className="value">Asia Pacific College — Makati, PH</div></div></div>
</div>
</div>
</div>
</section>
<section className="section" id="experience">
<p className="kicker">02 // EXPERIENCE</p>
<div className="section-head">
<div className="section-icon-box"><img alt="experience" className="section-icon" draggable={false} src="/images/experience.png"/></div>
<h2 className="section-title">QUEST.LOG</h2><div className="head-line"></div>
</div>
<div className="panel summary"><div className="title-row"><img alt="terminal" className="micro-icon" draggable={false} src="/images/terminal.png"/><span className="card-title">INFO SUMMARY.txt</span></div>
<div className="bodycopy">Leadership and creative work across student organizations, paired with practical coordination, communication, and design experience.</div>
</div>
<div className="exp-grid">
<article className="panel exp-card">
<div className="role-icon-wrap"><img alt="Marketing Director" className="role-icon" draggable={false} src="/images/marketing-director.png"/></div>
<div><h3 className="role-title">MARKETING<br/>DIRECTOR</h3><div className="role-org">APC Microsoft Community</div><div className="role-date">Aug 2024 – Dec 2025</div></div>
<p className="role-body">Led and coordinated marketing and creative work for student-community initiatives, including major event support and creative direction.</p>
<div className="full-span"><span className="tag">Leadership</span><span className="tag">Graphic Design</span><span className="tag">Team Coordination</span></div>
</article>
<article className="panel exp-card">
<div className="role-icon-wrap"><img alt="Assistant Marketing Executive" className="role-icon" draggable={false} src="/images/assistant-marketing-executive.png"/></div>
<div><h3 className="role-title">ASSISTANT MARKETING<br/>EXECUTIVE</h3><div className="role-org">Junior Information Systems Security Association</div><div className="role-date">Aug 2024 – Dec 2025</div></div>
<p className="role-body">Supported marketing and content work for a cybersecurity-focused student organization, balancing visual communication with technical community needs.</p>
<div className="full-span"><span className="tag">Content Creation</span><span className="tag">Graphic Design</span><span className="tag">Leadership</span></div>
</article>
</div>
</section>
<section className="section" id="skills">
<p className="kicker">03 // ITEM INVENTORY</p>
<div className="section-head">
<div className="section-icon-box"><img alt="skills" className="section-icon" draggable={false} src="/images/skills.png"/></div>
<h2 className="section-title">SKILLS.INV</h2><div className="head-line"></div>
</div>
<div className="skill-grid">
<article className="panel skill-card"><div className="card-title">CORE STRENGTHS</div><div><span className="tag">Team Contribution</span><span className="tag">Planning</span><span className="tag">Organization</span><span className="tag">Detail-focused</span><span className="tag">Process-oriented</span><span className="tag">Research</span></div></article>
<article className="panel skill-card"><div className="card-title">TOOLS</div><div><span className="tag">Microsoft 365</span><span className="tag">Figma</span><span className="tag">Canva</span><span className="tag">Workflow-friendly</span></div></article>
<article className="panel skill-card"><div className="card-title">DEV FOUNDATIONS</div><div><span className="tag">Java</span><span className="tag">Python</span><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">Vue.js</span><span className="tag">JavaScript</span><span className="tag">MySQL</span><span className="tag">Foundational</span></div></article>
</div>
</section>
<section className="section" id="achievements">
<p className="kicker">04 // ACHIEVEMENTS</p>
<div className="section-head">
<div className="section-icon-box"><img alt="achievements" className="section-icon" draggable={false} src="/images/achievements.png"/></div>
<h2 className="section-title">CERTIFICATIONS</h2><div className="head-line"></div>
</div>
<div className="ach-grid">
<article className="panel ach-card"><div className="ach-id">ACHIEVEMENT_01</div><img alt="badge" className="" draggable={false} src="/images/school.png"/><div><div className="ach-title">ORACLE CLOUD INFRASTRUCTURE (OCI)</div><div className="bodycopy small">AI Foundations Associate (Exam 1Z0-1122-25)</div></div></article>
<article className="panel ach-card"><div className="ach-id">ACHIEVEMENT_02</div><img alt="badge" className="" draggable={false} src="/images/school.png"/><div><div className="ach-title">ORACLE CLOUD INFRASTRUCTURE (OCI)</div><div className="bodycopy small">Generative AI Professional (Exam 1Z0-1127-25)</div></div></article>
</div>
</section>
<section className="section" id="projects">
<p className="kicker">05 // GAME SELECT</p>
<div className="section-head">
<div className="section-icon-box"><img alt="projects" className="section-icon" draggable={false} src="/images/projects.png"/></div>
<h2 className="section-title">FEATURED_PROJECTS.EXE</h2><div className="head-line"></div>
</div>
<div aria-label="Featured projects" className="projects">
<article className="panel project project-ref">
<div className="project-preview" data-image-slot="project-devfolio">
<span className="project-loading">▶ LOADING...</span>
</div>
<div className="project-copy">
<div className="project-id">GAME_CARD_001</div>
<h3 className="project-title">THIS DEVFOLIO</h3>
<div className="bodycopy">The portfolio you&apos;re exploring now: a retro pixel arcade meets Y2K desktop interface, with a click-to-enter hero, layered game-world scene, draggable widgets, music integration, and a one-page recruiter-friendly flow.</div>
<div className="project-tags"><span className="tag">React</span><span className="tag">TypeScript</span><span className="tag">Tailwind</span></div>
<div className="proj-actions">
<a aria-label="View live Devfolio" className="proj-btn" data-sfx="click" href="https://devfolio-iyah-chavez.vercel.app/" target="_blank" rel="noopener noreferrer"><img alt="View website" draggable={false} src="/images/view-website.png"/></a>
<a aria-label="View Devfolio repository" className="proj-btn" data-sfx="click" href="https://github.com/apcmcchavez/devfolio" target="_blank" rel="noopener noreferrer"><img alt="View source" draggable={false} src="/images/view-source.png"/></a>
</div>
</div>
</article>
<article className="panel project project-ref">
<div className="project-preview" data-image-slot="project-ai-gis"><span className="project-loading">▶ LOADING...</span></div>
<div className="project-copy">
<div className="project-id">GAME_CARD_002</div>
<h3 className="project-title">AI GATEWAY FOR INTRUSION SECURITY (AI-GIS)</h3>
<div className="bodycopy">Research focused on detecting LLM-generated SQL injection and XSS payloads, evaluated against a ModSecurity + OWASP CRS baseline.</div>
<div className="project-tags"><span className="tag">Python</span><span className="tag">AI</span><span className="tag">ModSecurity</span><span className="tag">OWASP CRS</span></div>
<div className="proj-actions">
<button aria-label="View project link coming soon" title="Link not added yet" className="proj-btn" disabled><img alt="View project" draggable={false} src="/images/view-website.png"/></button>
<button aria-label="View source code link coming soon" title="Link not added yet" className="proj-btn" disabled><img alt="Repository" draggable={false} src="/images/view-source.png"/></button>
</div>
</div>
</article>
<article className="panel project project-ref">
<div className="project-preview" data-image-slot="project-wah4h"><span className="project-loading">▶ LOADING...</span></div>
<div className="project-copy">
<div className="project-id">GAME_CARD_003</div>
<h3 className="project-title">WAH FOR HOSPITAL (WAH4H)</h3>
<div className="bodycopy">Hospital Information System developed by a four-person academic team, covering project management, QA leadership, issue tracking, and requirements verification.</div>
<div className="project-tags"><span className="tag">Project Management</span><span className="tag">QA Testing</span></div>
<div className="proj-actions">
<button aria-label="View project link coming soon" title="Link not added yet" className="proj-btn" disabled><img alt="View project" draggable={false} src="/images/view-website.png"/></button>
<button aria-label="View source code link coming soon" title="Link not added yet" className="proj-btn" disabled><img alt="Repository" draggable={false} src="/images/view-source.png"/></button>
</div>
</div>
</article>
<article className="panel project project-ref">
<div className="project-preview" data-image-slot="project-lunemint"><span className="project-loading">▶ LOADING...</span></div>
<div className="project-copy">
<div className="project-id">GAME_CARD_004</div>
<h3 className="project-title">LUNEMINT</h3>
<div className="bodycopy">A digital design storefront and seller management concept for ready-made digital products and custom commissions.</div>
<div className="project-tags"><span className="tag">Digital Commerce</span><span className="tag">Canva</span><span className="tag">Marketing</span><span className="tag">Prototype</span></div>
<div className="proj-actions">
<button aria-label="View project link coming soon" title="Link not added yet" className="proj-btn" disabled><img alt="View project" draggable={false} src="/images/view-website.png"/></button>
<button aria-label="View source code link coming soon" title="Link not added yet" className="proj-btn" disabled><img alt="Source" draggable={false} src="/images/view-source.png"/></button>
</div>
</div>
</article>
</div>
</section>
<section className="section" id="sidequests">
<p className="kicker">06 // OFF-DUTY</p>
<div className="section-head">
<div className="section-icon-box"><img alt="side quests" className="section-icon" draggable={false} src="/images/side-quests.png"/></div>
<h2 className="section-title">SIDE QUESTS</h2><div className="head-line"></div>
</div>
<div className="quest-grid">
<div className="panel quest"><img alt="Binge watching" className="" draggable={false} src="/images/binge-watching.png"/><span>BINGE<br/>WATCHING</span></div>
<div className="panel quest"><img alt="Video games" className="" draggable={false} src="/images/video-games.png"/><span>VIDEO<br/>GAMES</span></div>
<div className="panel quest"><img alt="Video editing" className="" draggable={false} src="/images/video-editing.png"/><span>EDITING<br/>VIDEOS</span></div>
<div className="panel quest"><img alt="Musicals" className="" draggable={false} src="/images/musicals.png"/><span>MUSICALS</span></div>
<div className="panel quest"><img alt="Board games" className="" draggable={false} src="/images/board-games.png"/><span>BOARD<br/>GAMES</span></div>
<div className="panel quest"><img alt="Reading" className="" draggable={false} src="/images/reading.png"/><span>READING</span></div>
<div className="panel quest"><img alt="Arts and crafts" className="" draggable={false} src="/images/arts-and-crafts.png"/><span>ARTS AND<br/>CRAFTS</span></div>
</div>
</section>
<section className="section" id="system">
<p className="kicker">07 // CURRENT STATUS</p>
<div className="section-head">
<div className="section-icon-box"><img alt="system check" className="section-icon" draggable={false} src="/images/system-check.png"/></div>
<h2 className="section-title">SYSTEM CHECK</h2><div className="head-line"></div>
</div>
<div className="system-layout-ref">
<div className="system-left">
<article className="panel stats stats-ref">
<div className="system-card-head"><img alt="player" className="system-head-icon" draggable={false} src="/images/status.png"/><span className="card-title">PLAYERS_STATS.TXT</span></div>
<div className="stats-main">
<div className="stats-avatar-col">
<div aria-label="Click Iyah to blink" className="stats-avatar-box stats-avatar-clear avatar-interactive" data-sfx="avatar" role="button" tabIndex={0} title="Click Iyah to blink"><img alt="Iyah with eyes open — click to blink" className="stats-gif pixel-img" data-blink-src="/images/closed-eyes-iyah.png" draggable={false} id="statsIyah" src="/images/iyah-with-eyes-open-click-to-blink.png"/></div>
<div aria-label="Status: ready to code" className="status-terminal"><span>STATUS:<br/>READY TO CODE</span><i aria-hidden="true"></i></div>
</div>
<div className="stats-values">
<div className="level">LVL 23</div>
<div aria-label="Play EXP sound" className="stat-line stat-interactive" data-sfx="exp" role="button" tabIndex={0} title="Click for a EXP sound">
<img alt="EXP" draggable={false} src="/images/exp.png"/>
<span className="stat-label">EXP</span><span className="stat-number">6,920 / 10,000</span>
</div>
<div className="stat-track-ref"><div className="stat-fill-ref exp-fill exp-value"></div></div>
<div aria-label="Play HP sound" className="stat-line stat-interactive" data-sfx="hp" role="button" tabIndex={0} title="Click for a HP sound">
<img alt="HP" draggable={false} src="/images/hp.png"/>
<span className="stat-label">HP</span><span className="stat-number">100 / 100</span>
</div>
<div className="stat-track-ref"><div className="stat-fill-ref hp-fill hp-value"></div></div>
<div aria-label="Play MP sound" className="stat-line stat-interactive" data-sfx="mp" role="button" tabIndex={0} title="Click for a MP sound">
<img alt="MP" draggable={false} src="/images/mp.png"/>
<span className="stat-label">MP</span><span className="stat-number">90 / 100</span>
</div>
<div className="stat-track-ref"><div className="stat-fill-ref mp-fill mp-value"></div></div>
<div aria-label="Play COINS sound" className="stat-line coins-line stat-interactive" data-sfx="coin" role="button" tabIndex={0} title="Click for a COINS sound">
<img alt="Coins" draggable={false} src="/images/coins.png"/>
<span className="stat-label">COINS</span><span className="stat-number">1,337</span>
</div>
</div>
</div>
</article>
<article className="panel contact contact-ref">
<div className="system-card-head"><img alt="contact" className="system-head-icon" draggable={false} src="/images/terminal.png"/><span className="card-title">CONTACT_ME.EXE</span></div>
<div className="contact-title">LET&apos;S WORK TOGETHER</div>
<p className="datatype-body">Fresh eyes, genuine enthusiasm, and zero bad habits picked up from toxic workplaces. If you&apos;re looking for someone eager to learn and grow, I&apos;m your girl.</p>
<a aria-label="Email Mariyah Chavez" className="email-me" data-sfx="click" href="mailto:mariyah.chavez23@gmail.com"><span className="white-sixtyfour-text">email me</span></a>
</article>
</div>
<article className="panel missions missions-ref">
<div className="system-card-head"><img alt="missions" className="system-head-icon" draggable={false} src="/images/terminal.png"/><span className="card-title">CURRENT_MISSION.SYS</span></div>
<div className="mission mission-ref"><img alt="Learning" draggable={false} src="/images/learning.png"/><div><h4>LEARNING</h4><p className="datatype-body">Cybersecurity, software systems, architecture, and whatever makes the next build better.</p></div></div>
<div className="mission mission-ref"><img alt="Building" draggable={false} src="/images/building.png"/><div><h4>BUILDING</h4><p className="datatype-body">Portfolio work, academic systems, research prototypes, and experiments.</p></div></div>
<div className="mission mission-ref"><img alt="Playing" draggable={false} src="/images/playing.png"/><div><h4>PLAYING</h4><p className="datatype-body">Games, creative side quests, and the occasional sanity-restoring break.</p></div></div>
</article>
</div>
</section>
</div>
</main>
</div>
<footer className="bottombar"><span>C:\PORTFOLIO\iyah.exe</span><span id="sysDate">SYS.DATE Sep 16, 2026</span></footer>
</div>
</section><div aria-hidden="true" className="music-window" id="musicWindow">
<div className="music-head" id="musicHead">
<div className="music-head-copy">
<strong>COZY CORNER</strong>
<span id="musicStatus">paused</span>
</div>
<button aria-label="Close music" className="music-close" data-sfx="click" id="musicClose">
<img alt="close music" draggable={false} src="/images/close-music.png"/>
</button>
</div>
<div className="music-inner music-inner-playlist">
<img alt="cassette" className="cassette-big" draggable={false} src="/images/music.png"/>
<div className="music-meta">
<div className="now-title">SUMMER IS FOR FALLING IN LOVE</div>
<div className="now-artist">SARAH KANG</div>
</div>
<div className="music-time-row">
<span>1:07</span>
<div className="music-progress">
<img alt="music progress" className="track-img" draggable={false} src="/images/music-progress.png"/>
<div className="prog"></div>
<i className="progress-knob"></i>
</div>
<span>3:06</span>
</div>
<div className="music-controls music-controls-playlist">
<div className="music-main-controls">
<button aria-label="Previous" className="music-control simple-music-control" data-sfx="click" id="prevBtn"><span className="skip-icon prev-icon"><i></i><b></b></span></button>
<button aria-label="Play/Pause" className="music-control main simple-music-control" data-sfx="click" id="playBtn"><span className="play-state play-shape" id="playIcon"></span></button>
<button aria-label="Next" className="music-control simple-music-control" data-sfx="click" id="nextBtn"><span className="skip-icon next-icon"><i></i><b></b></span></button>
</div>
<button aria-label="Volume" className="volume-btn">
<span></span><span></span><span></span></button>
</div>
<div className="playlist">
<button className="playlist-row">
<span className="track-no">01</span><span className="track-name">SAME OLD</span><span className="track-artist">FCJ</span>
</button>
<button className="playlist-row">
<span className="track-no">02</span><span className="track-name">GO HIGHER</span><span className="track-artist">HYBS</span>
</button>
<button className="playlist-row">
<span className="track-no">03</span><span className="track-name">FLOWER</span><span className="track-artist">JOHNNY STIMSON</span>
</button>
<button className="playlist-row active-track">
<span className="track-no">04</span><span className="track-name">SUMMER IS FOR FALLING<br/>IN LOVE</span><span className="track-artist">SARAH KANG</span>
</button>
<button className="playlist-row">
<span className="track-no">05</span><span className="track-name">PROMISE</span><span className="track-artist">LAUFEY</span>
</button>
</div>
</div>
</div><div className="quit-overlay" id="quitOverlay">
<div className="quit-dialog">
<h3>QUIT TO MAIN MENU?</h3>
<p>Your current scroll position will stay here if you choose NO.</p>
<div className="quit-actions"><button data-sfx="confirm" id="quitYes">YES</button><button data-sfx="click" id="quitNo">NO</button></div>
</div>
</div>
    </>
  );
}
