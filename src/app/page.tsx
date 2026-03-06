'use client'

import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        // CUSTOM CURSOR
        const cur = document.getElementById('cursor')!
        const ring = document.getElementById('cursor-ring')!
        let mx = 0, my = 0, rx = 0, ry = 0
        const onMouseMove = (e: MouseEvent) => {
            mx = e.clientX; my = e.clientY
            cur.style.left = mx + 'px'; cur.style.top = my + 'px'
        }
        document.addEventListener('mousemove', onMouseMove)
        const animRing = () => {
            rx += (mx - rx) * .1; ry += (my - ry) * .1
            ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
            requestAnimationFrame(animRing)
        }
        animRing()

        // VHS GLITCH
        const glitch = document.getElementById('vhs-glitch')!
        const triggerGlitch = () => {
            glitch.classList.add('on')
            setTimeout(() => glitch.classList.remove('on'), 100)
            setTimeout(triggerGlitch, 5000 + Math.random() * 10000)
        }
        setTimeout(triggerGlitch, 4000)

        // STARS
        const sl = document.getElementById('stars-layer')!
        for (let i = 0; i < 140; i++) {
            const s = document.createElement('div')
            s.className = 'star'
            const sz = Math.random() * 2.5 + .4
            s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random() * 100}%;left:${Math.random() * 100}%;--d:${(Math.random() * 3.5 + 1.2).toFixed(2)}s;animation-delay:${(Math.random() * 5).toFixed(2)}s;opacity:${(Math.random() * .55 + .08).toFixed(2)}`
            sl.appendChild(s)
        }

        // PIXEL HEART PRELOADER
        const c = document.getElementById('heart-canvas') as HTMLCanvasElement
        const ctx = c.getContext('2d')!
        const PX = 18
        const HM = [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0]
        ]
        c.width = 8 * PX; c.height = 7 * PX
        const px: [number, number][] = []
        for (let r = 0; r < 7; r++)
            for (let cl = 0; cl < 8; cl++)
                if (HM[r][cl]) px.push([cl, r])
        const total = px.length; let filled = 0
        const bar = document.getElementById('pbar')!
        const draw = (n: number) => {
            ctx.clearRect(0, 0, c.width, c.height)
            px.forEach(([cl, r], i) => {
                const x = cl * PX, y = r * PX
                if (i < n) {
                    const t = i / total, h = 260 + t * 80, l = 45 + t * 25
                    ctx.fillStyle = `hsl(${h},75%,${l}%)`
                    ctx.fillRect(x, y, PX, PX)
                    if (Math.random() < .18) {
                        ctx.fillStyle = 'rgba(255,255,255,.35)'
                        ctx.fillRect(x + 2, y + 2, PX - 4, PX - 4)
                    }
                    if (i === n - 1) {
                        ctx.fillStyle = 'rgba(255,255,255,.8)'
                        ctx.fillRect(x + PX / 2 - 1, y, 2, PX)
                        ctx.fillRect(x, y + PX / 2 - 1, PX, 2)
                    }
                } else {
                    ctx.fillStyle = 'rgba(139,69,232,.12)'
                    ctx.fillRect(x, y, PX, PX)
                }
                ctx.strokeStyle = 'rgba(5,2,14,.5)'
                ctx.lineWidth = 1
                ctx.strokeRect(x + .5, y + .5, PX - 1, PX - 1)
            })
        }
        draw(0)
        const iv = setInterval(() => {
            filled = Math.min(filled + 1, total)
            draw(filled)
            bar.style.width = (filled / total * 100) + '%'
            if (filled >= total) {
                clearInterval(iv)
                setTimeout(() => {
                    const preloader = document.getElementById('preloader')!
                    preloader.classList.add('out')
                    setTimeout(initAppear, 300)
                }, 750)
            }
        }, 58)

        // GALAXY BG
        const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement
        const bgCtx = canvas.getContext('2d')!
        let W = 0, H = 0
        const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
        resize()
        window.addEventListener('resize', resize)

        class Blob {
            x = 0; y = 0; r = 0; vx = 0; vy = 0; ph = 0; sp = 0; hue = 0; alpha = 0; w = 0; ws = 0
            constructor() { this.reset(true) }
            reset(init: boolean) {
                this.x = Math.random() * W
                this.y = init ? Math.random() * H : (Math.random() < .5 ? -200 : H + 200)
                this.r = 65 + Math.random() * 165
                this.vx = (Math.random() - .5) * .28
                this.vy = (Math.random() - .5) * .18
                this.ph = Math.random() * Math.PI * 2
                this.sp = .005 + Math.random() * .005
                this.hue = 255 + Math.random() * 58
                this.alpha = .038 + Math.random() * .06
                this.w = Math.random() * Math.PI * 2
                this.ws = .009 + Math.random() * .008
            }
            update() {
                this.ph += this.sp; this.w += this.ws
                this.x += this.vx + Math.sin(this.ph * 1.2) * .38
                this.y += this.vy + Math.cos(this.ph * .8) * .3
                if (this.x < -300 || this.x > W + 300 || this.y < -300 || this.y > H + 300) this.reset(false)
            }
            draw() {
                const rX = this.r * (1 + .17 * Math.cos(this.w * .7))
                const rY = this.r * (1 + .17 * Math.sin(this.w * .9))
                const g = bgCtx.createRadialGradient(this.x, this.y, 0, this.x, this.y, Math.max(rX, rY))
                g.addColorStop(0, `hsla(${this.hue},78%,56%,${this.alpha})`)
                g.addColorStop(1, `hsla(${this.hue + 22},68%,36%,0)`)
                bgCtx.save(); bgCtx.beginPath()
                bgCtx.ellipse(this.x, this.y, rX, rY, this.w * .3, 0, Math.PI * 2)
                bgCtx.fillStyle = g; bgCtx.fill(); bgCtx.restore()
            }
        }

        class Ribbon {
            y = 0; amp = 0; freq = 0; ph = 0; sp = 0; thick = 0; hue = 0; vy = 0
            constructor() {
                this.y = Math.random() * H; this.amp = 22 + Math.random() * 52
                this.freq = .003 + Math.random() * .004; this.ph = Math.random() * Math.PI * 2
                this.sp = .0025 + Math.random() * .003; this.thick = 5 + Math.random() * 17
                this.hue = 260 + Math.random() * 50; this.vy = (Math.random() - .5) * .07
            }
            update() {
                this.ph += this.sp; this.y += this.vy
                if (this.y < -80 || this.y > H + 80) this.y = this.y < 0 ? H + 80 : -80
            }
            draw() {
                bgCtx.save(); bgCtx.beginPath()
                for (let x = 0; x < W; x += 4) {
                    const y = this.y + Math.sin(x * this.freq + this.ph) * this.amp
                    x === 0 ? bgCtx.moveTo(x, y) : bgCtx.lineTo(x, y)
                }
                bgCtx.strokeStyle = `hsla(${this.hue},73%,53%,.075)`
                bgCtx.lineWidth = this.thick; bgCtx.stroke(); bgCtx.restore()
            }
        }

        class Spark {
            x = 0; y = 0; sz = 0; life = 0; max = 0; hue = 0
            constructor() { this.reset() }
            reset() {
                this.x = Math.random() * W; this.y = Math.random() * H
                this.sz = Math.random() < .11 ? 4 : 2; this.life = 0
                this.max = 65 + Math.random() * 105; this.hue = 255 + Math.random() * 82
            }
            update() { this.life++; if (this.life > this.max) this.reset() }
            draw() {
                const t = this.life / this.max, a = t < .3 ? (t / .3) : (1 - t) / .7
                bgCtx.fillStyle = `hsla(${this.hue},88%,76%,${a * .62})`
                bgCtx.fillRect(this.x, this.y, this.sz, this.sz)
                if (this.sz > 2) {
                    bgCtx.fillRect(this.x - this.sz, this.y + this.sz * .5, this.sz * 3, 1)
                    bgCtx.fillRect(this.x + this.sz * .5, this.y - this.sz, 1, this.sz * 3)
                }
            }
        }

        const blobs = Array.from({ length: 18 }, () => new Blob())
        const ribbons = Array.from({ length: 7 }, () => new Ribbon())
        const sparks = Array.from({ length: 70 }, () => new Spark())
        let animFrame: number
        const frame = () => {
            bgCtx.clearRect(0, 0, W, H)
            const bg = bgCtx.createLinearGradient(0, 0, W, H)
            bg.addColorStop(0, '#05020e'); bg.addColorStop(.5, '#08031a'); bg.addColorStop(1, '#05020e')
            bgCtx.fillStyle = bg; bgCtx.fillRect(0, 0, W, H)
            ribbons.forEach(r => { r.update(); r.draw() })
            blobs.forEach(b => { b.update(); b.draw() })
            sparks.forEach(s => { s.update(); s.draw() })
            animFrame = requestAnimationFrame(frame)
        }
        frame()

        // MUSIC WIDGET
        const widget = document.getElementById('musicWidget')!
        const closeBtn = document.getElementById('mwClose')!
        const minBtn = document.getElementById('mwMin')!
        const dragHandle = document.getElementById('mwDragHandle')!
        const playBtn = document.getElementById('mwPlay')!
        const playIcon = document.getElementById('mwPlayIcon')!
        const prevBtn = document.getElementById('mwPrev')!
        const nextBtn = document.getElementById('mwNext')!
        const miniPlayBtn = document.getElementById('mwMiniPlay')!
        const miniPlayIcon = document.getElementById('mwMiniPlayIcon')!
        const miniPrevBtn = document.getElementById('mwMiniPrev')
        const miniNextBtn = document.getElementById('mwMiniNext')
        const volBtn = document.getElementById('mwVol')!
        const volMeter = document.getElementById('mwVolMeter')!
        const seek = document.getElementById('mwSeek') as HTMLInputElement
        const tCur = document.getElementById('mwTimeCur')!
        const tDur = document.getElementById('mwTimeDur')!
        const titleEl = document.getElementById('mwSongTitle')!
        const artistEl = document.getElementById('mwSongArtist')!
        const headerSub = document.getElementById('mwHeaderSub')!
        const miniTitleEl = document.getElementById('mwMiniTitle')!
        const miniArtistEl = document.getElementById('mwMiniArtist')!
        const listEl = widget.querySelector('.mw__list')!
        const toggle = document.getElementById('music-toggle')!
        const label = document.getElementById('music-label')!
        const noteIcon = toggle.querySelector('.note-icon')!

        const playlist = [
            { title: 'Pleaser', artist: 'Wallows' },
            { title: 'Minsan', artist: 'Munimuni' },
            { title: 'End of Beginning', artist: 'Djo' },
            { title: 'Surrender', artist: 'Natalie Taylor' },
            { title: 'Goodbye To A World', artist: 'Porter Robinson' },
        ]
        let idx = 0
        const volLevels = [.25, .6, 1.0]; let volState = 0
        const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext
        let actx: AudioContext | null = null
        let osc: OscillatorNode | null = null
        let gain: GainNode | null = null
        let isTone = false, fakeCur = 0, rafId: number | null = null
        const fakeDur = 230

        const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

        const renderList = () => {
            listEl.innerHTML = ''
            playlist.forEach((t, i) => {
                const row = document.createElement('div')
                row.className = 'mw__row' + (i === idx ? ' is-active' : '')
                row.innerHTML = `<div class="mw__idx">${String(i + 1).padStart(2, '0')}</div><div class="mw__rowTitle">${t.title}</div><div class="mw__rowArtist">${t.artist}</div>`
                row.addEventListener('click', () => { loadTrack(i); play() })
                listEl.appendChild(row)
            })
        }

        const loadTrack = (i: number) => {
            idx = (i + playlist.length) % playlist.length
            const t = playlist[idx]
            titleEl.textContent = t.title; artistEl.textContent = t.artist
            miniTitleEl.textContent = t.title; miniArtistEl.textContent = t.artist
            headerSub.textContent = 'click ▶ to play'
            fakeCur = 0; seek.value = '0'; tCur.textContent = '0:00'; tDur.textContent = fmt(fakeDur)
            if (isTone) { stopTone(); startTone() }
            renderList()
        }

        const setPlayIcon = (p: boolean) => {
            const s = p ? '<path d="M6 5h4v14H6zM14 5h4v14h-4z"></path>' : '<path d="M8 5v14l12-7z"></path>'
            playIcon.innerHTML = s; miniPlayIcon.innerHTML = s
        }
        const updateToggle = (p: boolean) => {
            label.textContent = p ? 'listening...' : 'play'
            noteIcon.textContent = p ? '♫' : '♪'
            if (p) toggle.classList.add('playing')
            else toggle.classList.remove('playing')
        }

        const startTone = () => {
            if (!AudioCtxClass) return
            if (!actx) actx = new AudioCtxClass()
            if (actx.state === 'suspended') actx.resume()
            if (osc) return
            osc = actx.createOscillator(); gain = actx.createGain()
            osc.type = 'sine'; osc.frequency.value = 196 + (idx * 22)
            gain.gain.value = volLevels[volState] * .10
            osc.connect(gain).connect(actx.destination); osc.start()
            isTone = true; headerSub.textContent = 'playing…'
            setPlayIcon(true); updateToggle(true)
            if (rafId) cancelAnimationFrame(rafId)
            rafId = requestAnimationFrame(tick)
        }

        const stopTone = () => {
            if (osc) { try { osc.stop() } catch (e) { } osc.disconnect(); osc = null }
            if (gain) { gain.disconnect(); gain = null }
            isTone = false; headerSub.textContent = 'paused'
            setPlayIcon(false); updateToggle(false)
            if (rafId) cancelAnimationFrame(rafId)
        }

        const tick = () => {
            if (!isTone) return
            fakeCur = Math.min(fakeDur, fakeCur + .25)
            tCur.textContent = fmt(fakeCur)
            seek.value = String(Math.round((fakeCur / fakeDur) * 100))
            if (fakeCur >= fakeDur) { loadTrack(idx + 1); play(); return }
            rafId = requestAnimationFrame(tick)
        }

        const play = () => { if (!isTone) startTone() }
        const togglePlay = () => { isTone ? stopTone() : play() }

        playBtn.addEventListener('click', togglePlay)
        miniPlayBtn.addEventListener('click', togglePlay)
        miniNextBtn?.addEventListener('click', () => { loadTrack(idx + 1); play() })
        miniPrevBtn?.addEventListener('click', () => { loadTrack(idx - 1); play() })
        nextBtn.addEventListener('click', () => { loadTrack(idx + 1); play() })
        prevBtn.addEventListener('click', () => { loadTrack(idx - 1); play() })
        seek.addEventListener('input', () => { fakeCur = (Number(seek.value) / 100) * fakeDur; tCur.textContent = fmt(fakeCur) })

        const setVolMeter = () => {
            volMeter.classList.remove('l1', 'l2', 'l3')
            volMeter.classList.add(volState === 0 ? 'l1' : volState === 1 ? 'l2' : 'l3')
            if (gain) gain.gain.value = volLevels[volState] * .10
        }
        volBtn.addEventListener('click', () => { volState = (volState + 1) % volLevels.length; setVolMeter() })
        setVolMeter()

        closeBtn.addEventListener('click', () => { widget.classList.remove('is-open'); widget.setAttribute('aria-hidden', 'true') })

        let dragging = false, sx = 0, sy = 0, sl2 = 0, st = 0
        const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n))
        dragHandle.addEventListener('pointerdown', (e) => {
            if ((e.target as HTMLElement).closest('button')) return
            dragging = true; widget.classList.add('dragging')
            const r = widget.getBoundingClientRect()
            sl2 = r.left; st = r.top; sx = e.clientX; sy = e.clientY
            widget.style.left = r.left + 'px'; widget.style.top = r.top + 'px'; widget.style.right = 'auto'
        })
        window.addEventListener('pointermove', (e) => {
            if (!dragging) return
            const r = widget.getBoundingClientRect()
            widget.style.left = clamp(sl2 + (e.clientX - sx), 10, window.innerWidth - r.width - 10) + 'px'
            widget.style.top = clamp(st + (e.clientY - sy), 10, window.innerHeight - r.height - 10) + 'px'
        })
        window.addEventListener('pointerup', () => { dragging = false; widget.classList.remove('dragging') })

        renderList(); loadTrack(0)

        // NAV toggle
        const openWidget = () => {
            widget.classList.add('is-open'); widget.setAttribute('aria-hidden', 'false')
            if (!widget.dataset.positioned) {
                widget.dataset.positioned = '1'
                widget.style.top = '92px'; widget.style.right = '18px'; widget.style.left = 'auto'
            }
        }
        document.getElementById('music-toggle')?.addEventListener('click', openWidget)

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animFrame)
        }
    }, [])

    return (
        <>
            <div id="cursor" />
            <div id="cursor-ring" />
            <div id="vhs-overlay" />
            <div id="vhs-scanline" />
            <div id="vhs-glitch" />
            <canvas id="bg-canvas" />
            <div className="stars-layer" id="stars-layer" />

            {/* PRELOADER */}
            <div id="preloader">
                <canvas id="heart-canvas" />
                <div id="pl-sub">loading universe...</div>
                <div id="pl-name">✦ iyah.dev ✦</div>
                <div id="pbar-wrap"><div id="pbar" /></div>
            </div>

            {/* NAV */}
            <header id="site-nav">
                <div className="nav-brand">
                    <div className="nav-logo-box">✦</div>
                    <div className="nav-brand-text">
                        <div className="t">IYAH.exe</div>
                    </div>
                </div>
                <button className="burger" onClick={(e) => document.getElementById('site-nav')?.classList.toggle('open')}>
                    <span /><span /><span />
                </button>
                <nav className="nav-links">
                    <a className="chip" href="#about"><span className="k">01</span> About</a>
                    <a className="chip" href="#experience"><span className="k">02</span> Exp</a>
                    <a className="chip" href="#skills"><span className="k">03</span> Skills</a>
                    <a className="chip" href="#certs"><span className="k">04</span> Certs</a>
                    <a className="chip" href="#work"><span className="k">05</span> Projects</a>
                    <a className="chip" href="#contact"><span className="k">06</span> Contact</a>
                    <button id="music-toggle">
                        <span className="note-icon">♪</span>
                        <span id="music-label">play</span>
                    </button>
                </nav>
            </header>

            <main>
                {/* HERO */}
                <section id="about">
                    <div id="hero">
                        <div className="hero-inner appear">
                            <div>
                                <div className="avatar-card glass glass-hover pixelFrame">
                                    <div className="avatar-wrap">🌸</div>
                                    <div className="name-tag">IYAH CHAVEZ</div>
                                    <div className="full-name">Mariyah Vanna Monique Chavez</div>
                                    <div className="sub-tag">cs student · fresh grad · pixel witch</div>
                                    <div className="badges">
                                        <span className="badge">APC grad</span>
                                        <span className="badge">software systems</span>
                                        <span className="badge">cyber curious</span>
                                    </div>
                                    <div className="socials" style={{ gap: '14px' }}>
                                        <a className="social-btn" href="https://www.linkedin.com/in/mariyah-vanna-monique-chavez-4b309b285" target="_blank" style={{ fontSize: '1.4rem', padding: '10px' }}>
                                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a className="social-btn" href="#" target="_blank" style={{ fontSize: '1.4rem', padding: '10px' }}>
                                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                        <a className="social-btn" href="#" target="_blank" style={{ fontSize: '1.4rem', padding: '10px' }}>
                                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-right">
                                <div className="about-card glass glass-hover pixelFrame">
                                    <div style={{ fontFamily: 'var(--sfont)', fontSize: '.90rem', color: 'var(--pink)', letterSpacing: '.2em', marginBottom: '10px' }}>▸ ABOUT_ME.TXT</div>
                                    <div className="about-text">
                                        Hi! I&apos;m Iyah — a <strong>BS Computer Science graduate</strong> from Asia Pacific College, Makati,
                                        specializing in <strong>Software Systems</strong> with electives in <strong>cybersecurity</strong>
                                        {' '}(because apparently one major wasn&apos;t chaotic enough 😅).<br /><br />
                                        I&apos;m a <span className="lol">certified fresh grad</span> — no corporate war stories yet, but I&apos;ve got org
                                        leadership, design chops, real projects, and the unmatched energy of someone who
                                        has never been jaded by office politics. <strong>That&apos;s a feature, not a bug.</strong>
                                    </div>
                                </div>
                                <div className="info-grid">
                                    <div className="info-chip"><div className="info-chip-label">Location</div><div className="info-chip-val">📍 Makati, PH</div></div>
                                    <div className="info-chip"><div className="info-chip-label">Status</div><div className="info-chip-val" style={{ color: 'var(--sage)' }}>● open to work</div></div>
                                    <div className="info-chip"><div className="info-chip-label">Degree</div><div className="info-chip-val" style={{ fontSize: '.80rem' }}>BSCS · Software Systems</div></div>
                                    <div className="info-chip"><div className="info-chip-label">School</div><div className="info-chip-val" style={{ fontSize: '.80rem' }}>Asia Pacific College</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section id="experience" className="page-section appear">
                    <div className="section-title">✦ Experience</div>
                    <div style={{ marginBottom: '14px', padding: '12px 16px', background: 'rgba(127,235,161,.07)', border: '1px solid rgba(127,235,161,.16)', borderRadius: '12px', fontSize: '.78rem', color: 'rgba(127,235,161,.8)', fontStyle: 'italic' }}>
                        💡 No corporate gigs yet — but org leadership hits different. Here&apos;s where I actually learned things.
                    </div>
                    <div className="exp-list">
                        <div className="exp-card glass glass-hover pixelFrame">
                            <div className="exp-org-badge">💜</div>
                            <div>
                                <div className="exp-role">Marketing Director</div>
                                <div className="exp-org">Microsoft Community · Asia Pacific College</div>
                                <div className="exp-meta">Aug 2024 – Dec 2025 · 1 yr 5 mos · Full-time · Hybrid, Makati</div>
                                <div className="exp-tags">
                                    <span className="exp-tag">Graphic Design</span>
                                    <span className="exp-tag">Team Leadership</span>
                                    <span className="exp-tag">Microsoft Ecosystem</span>
                                    <span className="exp-tag">Marketing Strategy</span>
                                </div>
                            </div>
                        </div>
                        <div className="exp-card glass glass-hover pixelFrame">
                            <div className="exp-org-badge">🔐</div>
                            <div>
                                <div className="exp-role">Assistant Marketing Executive</div>
                                <div className="exp-org">Junior Information Systems Security Association (JISSA) · APC Chapter</div>
                                <div className="exp-meta">Aug 2024 – Dec 2025 · 1 yr 5 mos · Part-time · Hybrid, Makati</div>
                                <div className="exp-tags">
                                    <span className="exp-tag">Graphic Design</span>
                                    <span className="exp-tag">Leadership</span>
                                    <span className="exp-tag">InfoSec Community</span>
                                    <span className="exp-tag">Content Creation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SKILLS */}
                <section id="skills" className="page-section appear">
                    <div className="section-title">✦ Skills &amp; Tools</div>
                    <div className="capsGrid">
                        <div className="caps glass glass-hover pixelFrame">
                            <div className="caps-title-row"><div className="h">CORE STRENGTHS</div><div className="tag">workflow + collaboration</div></div>
                            <div className="pillRow">
                                <span className="pill">Team contributor</span><span className="pill">Planning</span>
                                <span className="pill">Organization</span><span className="pill">Detail-focused</span>
                                <span className="pill">Process-oriented</span><span className="pill">Research + analysis</span>
                            </div>
                        </div>
                        <div className="caps glass glass-hover pixelFrame">
                            <div className="caps-title-row"><div className="h">TOOLS</div><div className="tag">design + productivity</div></div>
                            <div className="pillRow">
                                <span className="pill">Microsoft 365</span><span className="pill">Figma</span>
                                <span className="pill">Canva</span><span className="pill small">workflow-friendly</span>
                            </div>
                        </div>
                        <div className="caps glass glass-hover pixelFrame">
                            <div className="caps-title-row"><div className="h">DEV FOUNDATIONS</div><div className="tag">learning by building</div></div>
                            <div className="pillRow">
                                <span className="pill">Java</span><span className="pill">Python</span><span className="pill">HTML</span>
                                <span className="pill">CSS</span><span className="pill">JavaScript</span><span className="pill">Vue.js</span>
                                <span className="pill">MySQL / SQL</span><span className="pill small">Foundational</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CURRENTLY */}
                <section className="page-section appear">
                    <div className="section-title">✦ Currently</div>
                    <div className="sticky-grid">
                        <div style={{ paddingTop: '14px' }}>
                            <div className="sticky s-purple" style={{ transform: 'rotate(2deg)' }}>
                                <div className="spin" /><span className="s-icon">📖</span>
                                <div className="s-label">Learning</div>
                                <div className="s-text">Cybersecurity electives + diving deeper into network security concepts</div>
                            </div>
                        </div>
                        <div style={{ paddingTop: '14px' }}>
                            <div className="sticky s-rose" style={{ transform: 'rotate(-1.5deg)' }}>
                                <div className="spin" style={{ background: 'var(--violet)' }} /><span className="s-icon">🚀</span>
                                <div className="s-label">Building</div>
                                <div className="s-text">Portfolio projects to show what I can actually do (hi, you&apos;re looking at one)</div>
                            </div>
                        </div>
                        <div style={{ paddingTop: '14px' }}>
                            <div className="sticky s-cream" style={{ transform: 'rotate(1deg)' }}>
                                <div className="spin" style={{ background: 'var(--lavender)' }} /><span className="s-icon">🎮</span>
                                <div className="s-label">Playing</div>
                                <div className="s-text">Honkai Star Rail (send help), Stardew Valley when I need to calm down</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CERTIFICATIONS */}
                <section id="certs" className="page-section appear">
                    <div className="section-title">✦ Certifications</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                        {[
                            { name: 'Oracle Cloud Infrastructure (OCI)', subtitle: 'AI Foundations Associate (Exam 1Z0-1122-25)', color: '#F80000' },
                            { name: 'Oracle Cloud Infrastructure (OCI)', subtitle: 'Generative AI Professional (Exam 1Z0-1127-25)', color: '#F80000' }
                        ].map((cert, idx) => (
                            <div key={idx} className="glass glass-hover pixelFrame" style={{ padding: '20px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: cert.color + '20', border: `1px solid ${cert.color}30`, boxShadow: `0 0 15px ${cert.color}40`, color: cert.color }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ shapeRendering: 'crispEdges' }}>
                                        <path d="M4 2h16v2H4V2zm0 2V4H2v16h2V4zm16 0v16h2V4h-2zM4 20h16v2H4v-2zm4-12h8v2H8V8zm0 4h8v2H8v-2z" />
                                    </svg>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <div style={{ fontFamily: 'var(--sfont)', fontSize: '.75rem', color: 'var(--cream)', lineHeight: '1.4', letterSpacing: '0.05em' }}>
                                        {cert.name}
                                    </div>
                                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '.9rem', color: 'var(--lavender)', fontWeight: 600 }}>
                                        {cert.subtitle}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PROJECTS */}
                <section id="work" className="page-section appear">
                    <div className="section-title">✦ Projects</div>
                    <div className="proj-list">
                        <div className="proj-card glass glass-hover pixelFrame">
                            <div className="proj-num">001</div>
                            <div className="proj-name">THIS PORTFOLIO ✦</div>
                            <div className="proj-desc">The galaxy-themed personal website you&apos;re looking at right now. Features a pixel heart preloader, draggable cassette music player, animated galaxy canvas background, VHS effects, and custom cursor.</div>
                            <div className="proj-tags"><span className="proj-tag">Next.js</span><span className="proj-tag">TypeScript</span><span className="proj-tag">Tailwind</span></div>
                            <a className="view-btn" href="#">VIEW ↗</a>
                        </div>
                        <div className="proj-card glass glass-hover pixelFrame">
                            <div className="proj-num">002</div>
                            <div className="proj-name">ADD YOUR PROJECT</div>
                            <div className="proj-desc">Replace this with one of your real school or personal projects.</div>
                            <div className="proj-tags"><span className="proj-tag">Java</span><span className="proj-tag">Python</span><span className="proj-tag">MySQL</span></div>
                            <a className="view-btn" href="#">VIEW ↗</a>
                        </div>
                    </div>
                </section>

                {/* PLAYER STATS */}
                <section className="page-section appear">
                    <div className="section-title">✦ Player Stats</div>
                    <p style={{ fontSize: '.8rem', color: 'rgba(197,171,255,.58)', marginBottom: '22px', fontStyle: 'italic' }}>when i&apos;m not staring at a compiler error...</p>
                    <div className="interests-grid">
                        {[['📺', 'Binge Watching'], ['�', 'Video Games'], ['�', 'Editing Videos'], ['🎭', 'Musicals'], ['🃏', 'Board Games'], ['📖', 'Reading'], ['�', 'Arts and Crafts']].map(([emoji, label]) => (
                            <div key={label} className="interest-bubble">{emoji}<span>{label}</span></div>
                        ))}
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="page-section appear">
                    <div className="contact-wrap glass pixelFrame">
                        <div className="terminal-bar">
                            <div className="tdot" style={{ background: '#ff5f57' }} />
                            <div className="tdot" style={{ background: '#febc2e' }} />
                            <div className="tdot" style={{ background: '#28c840' }} />
                            <div className="ttitle">CONTACT_ME.EXE</div>
                        </div>
                        <div className="contact-heading">&gt; let&apos;s work together ✦</div>
                        <div className="contact-sub">
                            Fresh eyes, genuine enthusiasm, and zero bad habits picked up from toxic workplaces.
                            If you&apos;re looking for someone <em>eager to learn and grow</em>, I&apos;m your girl. 🌸
                        </div>
                        <div className="contact-links">
                            <a className="contact-btn" href="mailto:iyah@example.com">✉ email me</a>
                        </div>
                    </div>
                </section>
            </main>

            <footer>© 2026 mariyah vanna monique chavez · iyah.dev · built with ✦ &amp; too much lofi music · makati, ph</footer>

            {/* MUSIC WIDGET */}
            <div id="musicWidget" className="mw" aria-hidden="true">
                <div className="mw__header" id="mwDragHandle">
                    <div className="mw__title">
                        <span className="mw__badge">COZY CORNER</span>
                        <span className="mw__sub" id="mwHeaderSub">click ▶ to play</span>
                    </div>
                    <div className="mw__headBtns">
                        <button id="mwClose" className="mw__iconBtn">
                            <img src="/exit.png" alt="close" style={{ width: '14px', height: '14px' }} />
                        </button>
                    </div>
                </div>
                <div className="mw__miniBar">
                    <div className="mw__miniTitle">
                        <b id="mwMiniTitle">Pleaser</b>
                        <span id="mwMiniArtist">Wallows</span>
                    </div>
                    <div className="mw__controls" style={{ gap: '4px' }}>
                        <button id="mwMiniPrev" className="mw__btn" style={{ minWidth: '32px', height: '32px', padding: '0' }}><svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zM20 6v12L10 12z" /></svg></button>
                        <button id="mwMiniPlay" className="mw__btn mw__btn--play" style={{ minWidth: '40px', height: '32px', padding: '0' }}>
                            <svg id="mwMiniPlayIcon" viewBox="0 0 24 24">
                                <path d="M8 5v14l12-7z" />
                            </svg>
                        </button>
                        <button id="mwMiniNext" className="mw__btn" style={{ minWidth: '32px', height: '32px', padding: '0' }}><svg viewBox="0 0 24 24"><path d="M16 6h2v12h-2zM4 6v12l10-6z" /></svg></button>
                    </div>
                </div>
                <div className="mw__hero">
                    <img
                        src="/cassette.png"
                        alt="Cassette"
                        className="mw__cassette"
                    />
                </div>
                <div className="mw__now">
                    <div className="mw__track">
                        <div id="mwSongTitle" className="mw__song">Pleaser</div>
                        <div id="mwSongArtist" className="mw__artist">Wallows</div>
                    </div>
                    <div className="mw__progress">
                        <span id="mwTimeCur" className="mw__time">0:00</span>
                        <input id="mwSeek" className="mw__seek" type="range" min="0" max="100" defaultValue="0" />
                        <span id="mwTimeDur" className="mw__time">0:00</span>
                    </div>
                    <div className="mw__controls">
                        <button id="mwPrev" className="mw__btn"><svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zM20 6v12L10 12z" /></svg></button>
                        <button id="mwPlay" className="mw__btn mw__btn--play"><svg id="mwPlayIcon" viewBox="0 0 24 24"><path d="M8 5v14l12-7z" /></svg></button>
                        <button id="mwNext" className="mw__btn"><svg viewBox="0 0 24 24"><path d="M16 6h2v12h-2zM4 6v12l10-6z" /></svg></button>
                        <button id="mwVol" className="mw__btn mw__btn--vol"><div id="mwVolMeter" className="mw__volMeter l1"><i /><i /><i /></div></button>
                    </div>
                </div>
                <div className="mw__list" />
            </div>
        </>
    )
}

function initAppear() {
    const obs = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
        { threshold: .08 }
    )
    document.querySelectorAll('.appear').forEach(el => obs.observe(el))
}