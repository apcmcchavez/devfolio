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
<button className="panel ach-card gallery-trigger" data-gallery="/images/achievements-certifications-awards/ai-foundations-associate.png" data-gallery-title="Oracle Cloud Infrastructure AI Foundations Associate"><div className="ach-id">ACHIEVEMENT_01</div><img alt="View AI Foundations Associate certificate" className="" draggable={false} src="/images/school.png"/><div><div className="ach-title">ORACLE CLOUD INFRASTRUCTURE (OCI)</div><div className="bodycopy small">AI Foundations Associate (Exam 1Z0-1122-25)</div></div></button>
<button className="panel ach-card gallery-trigger" data-gallery="/images/achievements-certifications-awards/generative-ai-professional.png" data-gallery-title="Oracle Cloud Infrastructure Generative AI Professional"><div className="ach-id">ACHIEVEMENT_02</div><img alt="View Generative AI Professional certificate" className="" draggable={false} src="/images/school.png"/><div><div className="ach-title">ORACLE CLOUD INFRASTRUCTURE (OCI)</div><div className="bodycopy small">Generative AI Professional (Exam 1Z0-1127-25)</div></div></button>
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
<h3 className="project-title">HERMES: RANDOM FOREST AND LSTM ENSEMBLE FOR DETECTING LLM-GENERATED SQL INJECTION AND XSS IN SIMULATED HONEYPOT TRAFFIC</h3>
<div className="bodycopy">Research project using a Random Forest and LSTM ensemble to detect LLM-generated SQL injection and XSS payloads in simulated honeypot traffic.</div>
<div className="project-tags"><span className="tag">Python</span><span className="tag">AI</span><span className="tag">ModSecurity</span><span className="tag">OWASP CRS</span></div>
<div className="proj-actions">
<button aria-label="Project link coming soon" className="proj-btn" data-sfx="click" data-toast="Oops, that one isn&apos;t available yet. We&apos;ll get back to you soon!" title="Coming soon"><img alt="View project" draggable={false} src="/images/view-website.png"/></button>
<button aria-label="Source code link coming soon" className="proj-btn" data-sfx="click" data-toast="Oops, that one isn&apos;t available yet. We&apos;ll get back to you soon!" title="Coming soon"><img alt="Repository" draggable={false} src="/images/view-source.png"/></button>
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
<button aria-label="Project link coming soon" className="proj-btn" data-sfx="click" data-toast="Oops, that one isn&apos;t available yet. We&apos;ll get back to you soon!" title="Coming soon"><img alt="View project" draggable={false} src="/images/view-website.png"/></button>
<button aria-label="Source code link coming soon" className="proj-btn" data-sfx="click" data-toast="Oops, that one isn&apos;t available yet. We&apos;ll get back to you soon!" title="Coming soon"><img alt="Repository" draggable={false} src="/images/view-source.png"/></button>
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
<button aria-label="Project link coming soon" className="proj-btn" data-sfx="click" data-toast="Oops, that one isn&apos;t available yet. We&apos;ll get back to you soon!" title="Coming soon"><img alt="View project" draggable={false} src="/images/view-website.png"/></button>
<button aria-label="Source code link coming soon" className="proj-btn" data-sfx="click" data-toast="Oops, that one isn&apos;t available yet. We&apos;ll get back to you soon!" title="Coming soon"><img alt="Source" draggable={false} src="/images/view-source.png"/></button>
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
<button className="panel quest side-quest-trigger" data-gallery="/images/side-quests/binge-watching/b99.png,/images/side-quests/binge-watching/modern_family.png,/images/side-quests/binge-watching/the_good_place.png,/images/side-quests/binge-watching/gravity_falls.png,/images/side-quests/binge-watching/rick_and_morty.png,/images/side-quests/binge-watching/star_vs_the_forces_of_evil.png,/images/side-quests/binge-watching/abbott_elementary.png,/images/side-quests/binge-watching/a_series_of_unfortunate_events.png,/images/side-quests/binge-watching/bridgerton.png" data-gallery-info="Brooklyn Nine-Nine::SHOW TITLE: Brooklyn Nine-Nine | SEASONS: 8 seasons | EPISODES: 153 episodes | DATE: September 17, 2013 - September 16, 2021 | SYNOPSIS: Detectives and staff of the fictional 99th Precinct mix police cases with workplace comedy and chaotic friendships.||Modern Family::SHOW TITLE: Modern Family | SEASONS: 11 seasons | EPISODES: 250 episodes | DATE: September 23, 2009 - April 8, 2020 | SYNOPSIS: Three interconnected families navigate marriage, parenting, careers, and everyday chaos.||The Good Place::SHOW TITLE: The Good Place | SEASONS: 4 seasons | EPISODES: 53 episodes | DATE: September 19, 2016 - January 30, 2020 | SYNOPSIS: Eleanor and the residents of an afterlife uncover strange truths while trying to become better people.||Gravity Falls::SHOW TITLE: Gravity Falls | SEASONS: 2 seasons | EPISODES: 40 regular episodes | DATE: June 15, 2012 - February 15, 2016 | SYNOPSIS: Twins Dipper and Mabel uncover supernatural mysteries and secret history in a strange summer town.||Rick and Morty::SHOW TITLE: Rick and Morty | SEASONS: 8 seasons currently released | EPISODES: 71 episodes currently released | DATE: December 2, 2013 - present | SYNOPSIS: A scientist drags his grandson through alternate dimensions, aliens, and complicated family problems.||Star vs. the Forces of Evil::SHOW TITLE: Star vs. the Forces of Evil | SEASONS: 4 seasons | EPISODES: 77 episodes | DATE: January 18, 2015 - May 19, 2019 | SYNOPSIS: A magical princess and her friend travel between dimensions while facing monsters and royal secrets.||Abbott Elementary::SHOW TITLE: Abbott Elementary | SEASONS: 5 seasons currently released | EPISODES: 100+ episodes | DATE: December 7, 2021 - present | SYNOPSIS: Teachers at an underfunded Philadelphia school work to support students through limited resources and daily chaos.||A Series of Unfortunate Events::SHOW TITLE: A Series of Unfortunate Events | SEASONS: 3 seasons | EPISODES: 25 episodes | DATE: January 13, 2017 - January 1, 2019 | SYNOPSIS: The Baudelaire siblings survive Count Olaf while investigating the secrets around their family.||Bridgerton::SHOW TITLE: Bridgerton | SEASONS: 4 seasons currently released | EPISODES: 32 episodes currently released | DATE: December 25, 2020 - present | SYNOPSIS: Regency-era families navigate romance, marriage, scandals, and social competition." data-gallery-title="Favorite shows"><img alt="Binge watching" className="" draggable={false} src="/images/binge-watching.png"/><span>BINGE<br/>WATCHING</span></button>
<button className="panel quest side-quest-trigger" data-gallery="/images/side-quests/video-games/lethal_company.png,/images/side-quests/video-games/apex_legends.png,/images/side-quests/video-games/valorant.png,/images/side-quests/video-games/stardew_valley.png,/images/side-quests/video-games/cookie_run_kingdom.png,/images/side-quests/video-games/honkai_star_rail.png,/images/side-quests/video-games/peak.png,/images/side-quests/video-games/dont_starve_together.png,/images/side-quests/video-games/raft.png,/images/side-quests/video-games/it_takes_two.png" data-gallery-info="Lethal Company::NAME: Lethal Company | TYPE: Cooperative survival horror | RELEASED: October 9, 2023 (Early Access) | LORE: Employees collect scrap from abandoned moons filled with dangerous creatures while meeting a profit quota.||Apex Legends::NAME: Apex Legends | TYPE: Hero-based battle royale / FPS | RELEASED: February 4, 2019 | LORE: Legends compete in the Apex Games while the Titanfall universe expands around them.||VALORANT::NAME: VALORANT | TYPE: Tactical first-person shooter | RELEASED: June 2, 2020 | LORE: Agents of the VALORANT Protocol face conflicts involving alternate versions of Earth.||Stardew Valley::NAME: Stardew Valley | TYPE: Farming simulation / RPG | RELEASED: February 26, 2016 | LORE: An inherited farm becomes a path to restoring a community and uncovering valley secrets.||Cookie Run: Kingdom::NAME: Cookie Run: Kingdom | TYPE: RPG / strategy / kingdom-building | RELEASED: January 19, 2021 | LORE: Players build a Cookie Kingdom while ancient Cookies face magical conflicts.||Honkai: Star Rail::NAME: Honkai: Star Rail | TYPE: Turn-based RPG | RELEASED: April 26, 2023 | LORE: The Astral Express travels between worlds shaped by cosmic beings called Aeons.||PEAK::NAME: PEAK | TYPE: Cooperative climbing / survival adventure | RELEASED: June 16, 2025 | LORE: Stranded players cooperate through dangerous terrain to climb toward a mysterious summit.||Don't Starve Together::NAME: Don't Starve Together | TYPE: Cooperative survival game | RELEASED: April 21, 2016 | LORE: Players gather, craft, and survive supernatural threats in a hostile wilderness.||Raft::NAME: Raft | TYPE: Survival / crafting / exploration | RELEASED: May 23, 2018 - June 20, 2022 | LORE: Survivors expand a tiny raft and investigate a world changed by catastrophe.||It Takes Two::NAME: It Takes Two | TYPE: Cooperative action-adventure platformer | RELEASED: March 26, 2021 | LORE: A couple turned into dolls must cooperate through fantastical challenges." data-gallery-title="Favorite video games"><img alt="Video games" className="" draggable={false} src="/images/video-games.png"/><span>VIDEO<br/>GAMES</span></button>
<button className="panel quest side-quest-trigger unavailable-quest" data-sfx="click" data-toast="Oops, that one isn&apos;t available yet. We&apos;ll get back to you soon!" data-gallery-title="Video editing" aria-label="Editing videos coming soon" title="Coming soon"><img alt="Video editing" className="" draggable={false} src="/images/video-editing.png"/><span>EDITING<br/>VIDEOS</span></button>
<button className="panel quest side-quest-trigger" data-gallery="/images/side-quests/musicals/epic.png,/images/side-quests/musicals/hamilton.png,/images/side-quests/musicals/dear_evan_hansen.png,/images/side-quests/musicals/six.png,/images/side-quests/musicals/heathers.png,/images/side-quests/musicals/waitress.png,/images/side-quests/musicals/maybe_happy_ending.png" data-gallery-info="EPIC: The Musical::TITLE: EPIC: The Musical | STORY: Odysseus attempts to return home after the Trojan War while facing gods, monsters, temptation, and loss. | FAVORITE SONG: Wouldn't You Like||Hamilton::TITLE: Hamilton | STORY: Alexander Hamilton's life told through hip-hop, R&B, pop, soul, and musical theater. | FAVORITE SONG: Wait for It||Dear Evan Hansen::TITLE: Dear Evan Hansen | STORY: A socially isolated student becomes caught in a misunderstanding that grows beyond his control. | FAVORITE SONG: Waving Through a Window||Six: The Musical::TITLE: Six: The Musical | STORY: Henry VIII's six wives reclaim their identities through a pop concert. | FAVORITE SONG: Get Down||Heathers: The Musical::TITLE: Heathers: The Musical | STORY: Veronica navigates popularity, bullying, relationships, and serious consequences. | FAVORITE SONG: Seventeen||Waitress::TITLE: Waitress | STORY: Jenna dreams of escaping an unhappy marriage and starting a new life. | FAVORITE SONG: She Used to Be Mine||Maybe Happy Ending::TITLE: Maybe Happy Ending | STORY: Two helper robots explore companionship, memories, purpose, and human-like love. | FAVORITE SONG: When You're in Love" data-gallery-title="Favorite musicals"><img alt="Musicals" className="" draggable={false} src="/images/musicals.png"/><span>MUSICALS</span></button>
<button className="panel quest side-quest-trigger" data-gallery="/images/side-quests/tabletop-games/love_letter.png,/images/side-quests/tabletop-games/colonists.png,/images/side-quests/tabletop-games/uno.png,/images/side-quests/tabletop-games/one_night_ultimate_werewolf.png,/images/side-quests/tabletop-games/exploding kittens.png,/images/side-quests/tabletop-games/codenames.png,/images/side-quests/tabletop-games/organ_attack.png,/images/side-quests/tabletop-games/scrabble.png,/images/side-quests/tabletop-games/monopoly.png" data-gallery-info="Love Letter::TYPE: Deduction / card game | CONCEPT: Deliver a love letter to the princess while using card abilities to eliminate opponents.||Colonist::TYPE: Strategy / resource management | CONCEPT: Collect resources, build settlements and roads, trade, and reach victory points.||UNO::TYPE: Matching card game | CONCEPT: Match colors or numbers while using special cards to change the game.||One Night Ultimate Werewolf::TYPE: Social deduction game | CONCEPT: Players use secret roles and clues to identify the Werewolves.||Exploding Kittens::TYPE: Card game | CONCEPT: Draw cards while avoiding an Exploding Kitten and manipulating the deck.||Codenames::TYPE: Word / party / deduction game | CONCEPT: Teams identify secret words through one-word clues.||OrganATTACK::TYPE: Educational / strategy card game | CONCEPT: Collect organs and interfere with opponents while keeping your body functioning.||Scrabble::TYPE: Word / strategy board game | CONCEPT: Create words with letter tiles and score bonuses across a crossword board.||Monopoly::TYPE: Economic / property-trading board game | CONCEPT: Buy, trade, and develop properties while trying to bankrupt opponents." data-gallery-title="Favorite tabletop games"><img alt="Tabletop games" className="" draggable={false} src="/images/board-games.png"/><span>TABLETOP<br/>GAMES</span></button>
<button className="panel quest side-quest-trigger" data-gallery="/images/side-quests/reading/solo_leveling.png,/images/side-quests/reading/fragrant_flower.png,/images/side-quests/reading/crush_at_work.png,/images/side-quests/reading/wotakoi.png,/images/side-quests/reading/sweat_and_soap.png,/images/side-quests/reading/meet_mom.png,/images/side-quests/reading/villains_are_destined_to_die.png,/images/side-quests/reading/omniscient.png,/images/side-quests/reading/estate_developer.png,/images/side-quests/reading/makeup_remover.png" data-gallery-info="Solo Leveling::AUTHOR: Chugong | TYPE: Manhwa / web novel | CHAPTERS: 200 webtoon chapters | STATUS: Completed | SYNOPSIS: A weak hunter gains a mysterious system and becomes increasingly powerful.||The Fragrant Flower Blooms With Dignity::AUTHOR: Saka Mikami | TYPE: Manga | CHAPTERS: 100+ chapters and ongoing | STATUS: Ongoing | SYNOPSIS: Two students from rival schools grow close despite their different environments.||I Have a Crush at Work::AUTHOR: Akamaru Enomoto | TYPE: Manga | CHAPTERS: 100+ chapters | STATUS: Completed | SYNOPSIS: Coworkers secretly balance romance and professional life.||Wotakoi: Love Is Hard for Otaku::AUTHOR: Fujita | TYPE: Manga | CHAPTERS: 86 chapters | STATUS: Completed | SYNOPSIS: Adult dating and otaku culture meet in a workplace romance.||Sweat and Soap::AUTHOR: Kintetsu Yamada | TYPE: Manga | CHAPTERS: 97 chapters | STATUS: Completed | SYNOPSIS: An unconventional romance begins through a cosmetics worker's self-consciousness.||On the Way to Meet Mom::AUTHOR: Korean webcomic/manhwa | TYPE: Webtoon / Manhwa | CHAPTERS: Varies by platform | STATUS: Completed | SYNOPSIS: A heartfelt journey centered on family, love, and loss.||Villains Are Destined to Die::AUTHOR: Gwon Gyeoeul | TYPE: Manhwa / web novel | CHAPTERS: 200+ webtoon chapters | STATUS: Ongoing | SYNOPSIS: A villainess must survive dangerous dating-simulation routes.||Omniscient Reader::AUTHOR: Sing Shong | TYPE: Manhwa / web novel | CHAPTERS: 200+ webtoon chapters | STATUS: Ongoing | SYNOPSIS: The only reader of a novel uses its knowledge after the story becomes reality.||The Greatest Estate Developer::AUTHOR: BK_Moon | TYPE: Manhwa / web novel | CHAPTERS: 200+ webtoon chapters | STATUS: Ongoing | SYNOPSIS: An engineer uses his knowledge to save a fantasy estate from financial disaster.||The Makeup Remover::AUTHOR: Lee Yeon | TYPE: Webtoon | CHAPTERS: 108 chapters | STATUS: Completed | SYNOPSIS: A makeup competition explores beauty standards, confidence, and identity." data-gallery-title="Favorite books"><img alt="Reading" className="" draggable={false} src="/images/reading.png"/><span>READING</span></button>
<button className="panel quest side-quest-trigger" data-gallery="/images/side-quests/arts-and-crafts/painting_1.png,/images/side-quests/arts-and-crafts/craft_1.png,/images/side-quests/arts-and-crafts/craft_2.png" data-gallery-info="Painting One::TYPE: Digital painting | DATE: 2024 | OTHER INFO: A colorful character and environment study.||Craft One::TYPE: Paper craft | DATE: 2023 | OTHER INFO: A small handmade decoration and texture experiment.||Craft Two::TYPE: Mixed media art | DATE: 2022 | OTHER INFO: An experimental piece combining color, shape, and layered materials." data-gallery-title="Arts and crafts"><img alt="Arts and crafts" className="" draggable={false} src="/images/arts-and-crafts.png"/><span>ARTS AND<br/>CRAFTS</span></button>
</div>
<div aria-label="Side quest image carousel" className="side-quest-carousel" id="sideQuestCarousel" hidden>
<div className="side-quest-carousel-head"><span className="gallery-kicker">QUEST MEDIA LOG</span><strong id="sideQuestTitle">FAVORITE SHOWS</strong><button aria-label="Close side quest carousel" className="side-quest-close" id="sideQuestClose">×</button></div>
<div className="side-quest-content"><div className="side-quest-viewport"><div className="side-quest-track" id="sideQuestTrack"></div></div>
<div className="side-quest-info" id="sideQuestInfo" hidden><span className="gallery-kicker">SELECTED MEDIA</span><strong id="sideQuestInfoTitle"></strong><p id="sideQuestInfoCopy"></p></div></div>
<div className="side-quest-carousel-foot"><button aria-label="Previous image" className="side-quest-arrow" id="sideQuestPrev">‹</button><div className="side-quest-dots" id="sideQuestDots"></div><button aria-label="Next image" className="side-quest-arrow" id="sideQuestNext">›</button></div>
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
</div><div aria-live="polite" className="toast" id="toast"></div><div aria-hidden="true" className="gallery-overlay" id="galleryOverlay">
<div aria-labelledby="galleryTitle" aria-modal="true" className="gallery-dialog" role="dialog">
<button aria-label="Close gallery" className="gallery-close" data-sfx="click" id="galleryClose">×</button>
<div className="gallery-kicker">MEDIA LOG</div>
<h3 id="galleryTitle">GALLERY</h3>
<div className="gallery-frame"><img alt="" id="galleryImage" src="/images/achievements-certifications-awards/ai-foundations-associate.png"/><span className="gallery-count" id="galleryCount"></span></div>
<div className="gallery-controls"><button aria-label="Previous image" data-sfx="click" id="galleryPrev">◀</button><button aria-label="Next image" data-sfx="click" id="galleryNext">▶</button></div>
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
