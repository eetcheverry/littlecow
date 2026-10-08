/* LittleCow — static PWA front-end */
(() => {
  const I18N = {
    es: {
      "nav.how":"Cómo funciona","nav.ai":"IA","nav.screens":"La app","nav.faq":"Preguntas","nav.cta":"Sumate",
      "hero.badge":"🚀 Beta abierta pronto","hero.t1":"Juntá la vaquita.","hero.t2":"Llegá a la luna.",
      "hero.lead":"LittleCow es la forma más simple de juntar plata entre varios para un objetivo concreto. Viajes de egresados, regalos, eventos: todos aportan, todos ven el avance, nadie persigue a nadie.",
      "hero.cta1":"Crear mi vaquita","hero.cta2":"Ver cómo funciona",
      "hero.p1":"comisión en beta","hero.p2":"idiomas","hero.p3":"aportantes",
      "hero.toast":"🎉 <b>Sofi</b> sumó <b>{m150}</b>",
      "demo.goalName":"Viaje a Bariloche 2027","demo.goalSub":"5° B · Colegio Nacional","demo.of":"de",
      "cards.c1t":"Un objetivo, un link","cards.c1d":"Creá la vaquita, poné la meta y la fecha. Compartí el link por WhatsApp y listo.",
      "cards.c2t":"Cuotas a medida","cards.c2d":"Cada uno aporta lo que puede: de una, en cuotas mensuales o con monto libre.",
      "cards.c3t":"Transparencia total","cards.c3d":"Todos ven quién aportó, cuánto falta y en qué se usa. Cero planillas, cero dudas.",
      "how.kicker":"Cómo funciona","how.title":"Del grupo de WhatsApp a la meta, en 3 pasos",
      "how.s1t":"Creá la vaquita","how.s1d":"Nombre, meta, fecha límite y foto. La IA te ayuda a calcular cuánto necesitan.",
      "how.s2t":"Invitá a tu tripulación","how.s2d":"Compartí el link o QR. Cada miembro elige su plan de aporte en segundos.",
      "how.s3t":"Despegue 🚀","how.s3d":"Seguí el avance en vivo, recibí recordatorios amables y celebren cuando lleguen.",
      "calc.kicker":"Probalo","calc.title":"¿Cuánto pone cada uno?","calc.lead":"Mové los valores y mirá cómo se reparte la vaquita.",
      "calc.goal":"Meta","calc.people":"Personas","calc.months":"Meses","calc.each":"Cada uno, por mes","calc.total":"Total por persona:",
      "calc.mo":"mes","calc.mos":"meses",
      "tip.low":"Cuota liviana: sumá un 10% de colchón para imprevistos y siguen tranquilos.",
      "tip.mid":"Buen equilibrio. Tip: activá recordatorios automáticos 3 días antes de cada cuota.",
      "tip.high":"Cuota alta. Probá sumar {n} meses más o una rifa: baja a {x} por mes.",
      "uses.kicker":"Para qué sirve","uses.title":"Cualquier misión que necesite combustible",
      "uses.u1t":"Viajes de egresados","uses.u1d":"El clásico. Cuotas, padres, rifas y todo en un lugar.",
      "uses.u2t":"Regalos grupales","uses.u2d":"El cumple del jefe o el casamiento de tu amiga, sin el que no puso.",
      "uses.u3t":"Equipos y clubes","uses.u3d":"Camisetas, torneos, viajes del equipo.",
      "uses.u4t":"Causas solidarias","uses.u4d":"Ayudá a alguien del barrio con transparencia total.",
      "ai.kicker":"✦ Con inteligencia artificial","ai.title":"Un copiloto que hace la parte aburrida",
      "ai.lead":"La IA de LittleCow está pensada para lo que más cuesta en una vaquita: calcular, recordar y conciliar.",
      "ai.a1t":"Planificador de meta","ai.a1d":"Describí el viaje en una frase y te sugiere un presupuesto realista (pasajes, alojamiento, imprevistos) y un plan de cuotas.",
      "ai.a2t":"Lector de comprobantes","ai.a2d":"Subí la captura de la transferencia y la IA detecta monto, fecha y quién pagó. Conciliación automática.",
      "ai.a3t":"Recordatorios con onda","ai.a3d":"Mensajes personalizados y amables para WhatsApp, en el tono del grupo. Nadie queda como el cobrador.",
      "ai.a4t":"Pronóstico de llegada","ai.a4d":"Según el ritmo de aportes, predice si llegan a la fecha y propone ajustes antes de que sea tarde.",
      "ai.a5t":"Historia de la campaña","ai.a5d":"Genera la descripción y la imagen para compartir la vaquita, en español o inglés.",
      "ai.q":"Viaje a Bariloche, 32 chicos, julio 2027",
      "ai.r":"Presupuesto estimado: <b>{m20000}</b> (incluye 10% de imprevistos). Con 10 cuotas son <b>{m63}/mes</b> por persona. ¿Armo la vaquita? 🐮",
      "screens.kicker":"La app","screens.title":"Así se ve tu vaquita",
      "dash.home":"Inicio","dash.cows":"Vaquitas","dash.people":"Miembros","dash.payments":"Pagos","dash.ai":"Copiloto IA",
      "dash.active":"Activa","dash.goal":"Meta del grupo","dash.goalD":"Pasajes, hotel y excursiones",
      "dash.raised":"Recaudado","dash.days":"Días restantes","dash.members":"Miembros","dash.member":"MIEMBRO","dash.paid":"APORTADO",
      "ph.p1t":"¡Hola, Sofi!","ph.p1d":"Tu próxima cuota vence en 3 días","ph.next":"Próxima cuota","ph.pay":"Aportar ahora",
      "ph.p2t":"Bariloche 2027","ph.f1":"Sofi aportó","ph.f2":"Juan aportó","ph.f3":"Ana aportó",
      "ph.p3t":"Copiloto ✦","ph.b1":"Leí tu comprobante: {m63} · 12/10 · Juan López ✅","ph.b2":"Con este ritmo llegan 3 semanas antes 🎉","ph.ask":"Preguntale algo…",
      "ph.c1":"Tu aporte, simple","ph.c2":"Avance en vivo","ph.c3":"IA que concilia",
      "faq.kicker":"Preguntas","faq.title":"Lo que todos preguntan",
      "faq.q1":"¿Por qué “vaquita”?","faq.a1":"En Argentina “hacer una vaquita” es juntar plata entre varios. Nuestra vaca es astronauta porque las metas grupales llegan lejos.",
      "faq.q2":"¿Cuánto cuesta?","faq.a2":"Durante la beta, crear y usar vaquitas es gratis. Después vamos a cobrar una comisión chica y transparente.",
      "faq.q3":"¿Quién tiene la plata?","faq.a3":"Los fondos se procesan con proveedores de pago regulados. El organizador retira cuando el grupo lo aprueba.",
      "faq.q4":"¿Funciona en el celular?","faq.a4":"Sí. LittleCow es una PWA: la instalás desde el navegador como una app, sin pasar por la tienda.",
      "join.title":"Subite a la nave","join.lead":"Dejanos tu mail y te avisamos cuando abra la beta.","join.ph":"tu@email.com",
      "join.btn":"Avisame","join.ok":"¡Listo! Te avisamos pronto 🚀","join.install":"Instalar app",
      "footer.t":"Hecho con 🐮 en Buenos Aires.",
      "meta.title":"LittleCow — Juntá la vaquita"
    },
    en: {
      "nav.how":"How it works","nav.ai":"AI","nav.screens":"The app","nav.faq":"FAQ","nav.cta":"Join",
      "hero.badge":"🚀 Open beta coming soon","hero.t1":"Pool it together.","hero.t2":"Shoot for the moon.",
      "hero.lead":"LittleCow is the easiest way to raise money with a group for one clear goal. Graduation trips, gifts, events: everyone chips in, everyone sees the progress, nobody chases anybody.",
      "hero.cta1":"Start my LittleCow","hero.cta2":"See how it works",
      "hero.p1":"fees during beta","hero.p2":"languages","hero.p3":"contributors",
      "hero.toast":"🎉 <b>Sofi</b> added <b>{m150}</b>",
      "demo.goalName":"Bariloche Trip 2027","demo.goalSub":"Class of '27 · Senior trip","demo.of":"of",
      "cards.c1t":"One goal, one link","cards.c1d":"Create your LittleCow, set the goal and deadline. Share the link in the group chat. Done.",
      "cards.c2t":"Flexible installments","cards.c2d":"Everyone chips in their way: all at once, monthly installments or any amount.",
      "cards.c3t":"Fully transparent","cards.c3d":"Everyone sees who paid, what's left and where it goes. No spreadsheets, no doubts.",
      "how.kicker":"How it works","how.title":"From group chat to goal in 3 steps",
      "how.s1t":"Create your LittleCow","how.s1d":"Name, goal, deadline and a photo. AI helps you figure out how much you need.",
      "how.s2t":"Invite your crew","how.s2d":"Share the link or QR. Each member picks their contribution plan in seconds.",
      "how.s3t":"Liftoff 🚀","how.s3d":"Track progress live, send friendly reminders and celebrate when you get there.",
      "calc.kicker":"Try it","calc.title":"How much does everyone chip in?","calc.lead":"Move the sliders and watch the pot split itself.",
      "calc.goal":"Goal","calc.people":"People","calc.months":"Months","calc.each":"Each person, per month","calc.total":"Total per person:",
      "calc.mo":"month","calc.mos":"months",
      "tip.low":"Light installment: add a 10% buffer for surprises and you're set.",
      "tip.mid":"Nice balance. Tip: turn on automatic reminders 3 days before each payment.",
      "tip.high":"That's steep. Try {n} more months or a raffle: it drops to {x} a month.",
      "uses.kicker":"Use cases","uses.title":"Any mission that needs fuel",
      "uses.u1t":"Graduation trips","uses.u1d":"The classic. Installments, parents, raffles — all in one place.",
      "uses.u2t":"Group gifts","uses.u2d":"The boss's birthday or your friend's wedding, without the one who never paid.",
      "uses.u3t":"Teams & clubs","uses.u3d":"Jerseys, tournaments, team trips.",
      "uses.u4t":"Good causes","uses.u4d":"Help someone in your community with full transparency.",
      "ai.kicker":"✦ AI-powered","ai.title":"A copilot that does the boring part",
      "ai.lead":"LittleCow's AI targets the hardest parts of group money: planning, reminding and reconciling.",
      "ai.a1t":"Goal planner","ai.a1d":"Describe the trip in one sentence and get a realistic budget (flights, lodging, buffer) plus an installment plan.",
      "ai.a2t":"Receipt reader","ai.a2d":"Upload a transfer screenshot and AI picks up amount, date and payer. Automatic reconciliation.",
      "ai.a3t":"Friendly nudges","ai.a3d":"Personalized, kind reminders for WhatsApp in your group's tone. Nobody has to be the bad guy.",
      "ai.a4t":"Arrival forecast","ai.a4d":"Based on the contribution pace, it predicts whether you'll make it and suggests tweaks early.",
      "ai.a5t":"Campaign story","ai.a5d":"Generates the description and share image for your LittleCow, in English or Spanish.",
      "ai.q":"Bariloche trip, 32 students, July 2027",
      "ai.r":"Estimated budget: <b>{m20000}</b> (10% buffer included). Over 10 installments that's <b>{m63}/mo</b> per person. Shall I set it up? 🐮",
      "screens.kicker":"The app","screens.title":"Here's what your LittleCow looks like",
      "dash.home":"Home","dash.cows":"LittleCows","dash.people":"Members","dash.payments":"Payments","dash.ai":"AI Copilot",
      "dash.active":"Active","dash.goal":"Group goal","dash.goalD":"Flights, hotel and tours",
      "dash.raised":"Raised","dash.days":"Days left","dash.members":"Members","dash.member":"MEMBER","dash.paid":"CONTRIBUTED",
      "ph.p1t":"Hi, Sofi!","ph.p1d":"Your next installment is due in 3 days","ph.next":"Next installment","ph.pay":"Chip in now",
      "ph.p2t":"Bariloche 2027","ph.f1":"Sofi chipped in","ph.f2":"Juan chipped in","ph.f3":"Ana chipped in",
      "ph.p3t":"Copilot ✦","ph.b1":"Read your receipt: {m63} · 10/12 · Juan López ✅","ph.b2":"At this pace you'll arrive 3 weeks early 🎉","ph.ask":"Ask me anything…",
      "ph.c1":"Chipping in, simple","ph.c2":"Live progress","ph.c3":"AI that reconciles",
      "faq.kicker":"FAQ","faq.title":"What everyone asks",
      "faq.q1":"Why a cow?","faq.a1":"In Argentina, “hacer una vaquita” (making a little cow) means pooling money. Ours is an astronaut because group goals go far.",
      "faq.q2":"How much does it cost?","faq.a2":"During the beta, creating and using LittleCows is free. Later we'll charge a small, transparent fee.",
      "faq.q3":"Who holds the money?","faq.a3":"Funds are processed by regulated payment providers. The organizer withdraws when the group approves.",
      "faq.q4":"Does it work on my phone?","faq.a4":"Yes. LittleCow is a PWA: install it from your browser like an app, no app store needed.",
      "join.title":"Hop on board","join.lead":"Leave your email and we'll let you know when the beta opens.","join.ph":"you@email.com",
      "join.btn":"Notify me","join.ok":"You're in! We'll be in touch 🚀","join.install":"Install app",
      "footer.t":"Made with 🐮 in Buenos Aires.",
      "meta.title":"LittleCow — Pool money with your crew"
    }
  };

  const MEMBERS = [
    ["Sofía Martínez","sofi@mail.com",425,"#FFB3CC"],["Juan López","juan@mail.com",378,"#C8F56A"],
    ["Ana Rodríguez","ana@mail.com",625,"#B9A4FF"],["Tomás Pérez","tomi@mail.com",315,"#FFD66E"],
    ["Lucía Gómez","lu@mail.com",500,"#9FE3CF"],["Mateo Díaz","mateo@mail.com",252,"#FFC59E"]
  ];
  const PER_PERSON = 625;

  const qs = (s, r = document) => r.querySelector(s);
  const qsa = (s, r = document) => [...r.querySelectorAll(s)];
  const store = { get(k){ try { return localStorage.getItem(k); } catch { return null; } }, set(k,v){ try { localStorage.setItem(k,v); } catch {} } };

  let lang = store.get("lc-lang") || "es";
  if (!I18N[lang]) lang = "es";

  const locale = () => (lang === "es" ? "es-AR" : "en-US");
  /* demo amounts are stored in USD; the Spanish version shows them as realistic ARS figures */
  const CURRENCY = {
    es: { currency:"ARS", currencyDisplay:"code", scale:4000, round:5000 },
    en: { currency:"USD", scale:1, round:1 }
  };
  const money = n => {
    const { scale, round, ...fmt } = CURRENCY[lang];
    const v = Math.round(n * scale / round) * round;
    return new Intl.NumberFormat(locale(), { style:"currency", maximumFractionDigits:0, ...fmt }).format(v);
  };
  const fill = s => s.replace(/\{m(\d+)\}/g, (_, n) => money(+n));
  const t = k => I18N[lang][k] ?? I18N.es[k] ?? k;

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    qsa("[data-i18n]").forEach(el => el.textContent = fill(t(el.dataset.i18n)));
    qsa("[data-i18n-html]").forEach(el => el.innerHTML = fill(t(el.dataset.i18nHtml)));
    qsa("[data-i18n-ph]").forEach(el => el.placeholder = t(el.dataset.i18nPh));
    qsa("[data-money]").forEach(el => el.textContent = money(+el.dataset.money));
    qsa(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    renderMembers();
    calc();
  }

  qsa(".lang button").forEach(b => b.addEventListener("click", () => {
    lang = b.dataset.lang; store.set("lc-lang", lang); applyLang();
  }));

  /* members list */
  function renderMembers() {
    const ul = qs("#memberList"); if (!ul) return;
    ul.innerHTML = MEMBERS.map(([n, e, a, c], i) => {
      const ini = n.split(" ").map(w => w[0]).join("");
      const p = Math.min(100, Math.round(a / PER_PERSON * 100));
      return `<li style="animation-delay:${i * 90}ms"><span class="who"><i style="--c:${c}">${ini}</i><span>${n}<small>${e}</small></span></span><span class="amt">${money(a)}<span class="bar"><span style="--p:${p}%"></span></span></span></li>`;
    }).join("");
  }

  /* calculator */
  const iGoal = qs("#iGoal"), iPeople = qs("#iPeople"), iMonths = qs("#iMonths");
  function paintRange(r) { r.style.setProperty("--v", ((r.value - r.min) / (r.max - r.min) * 100) + "%"); }
  function calc() {
    if (!iGoal) return;
    const g = +iGoal.value, p = +iPeople.value, m = +iMonths.value;
    [iGoal, iPeople, iMonths].forEach(paintRange);
    qs("#oGoal").textContent = money(g);
    qs("#oPeople").textContent = p;
    qs("#oMonths").textContent = `${m} ${m === 1 ? t("calc.mo") : t("calc.mos")}`;
    const total = g / p, monthly = total / m;
    const out = qs("#rMonthly");
    out.textContent = money(Math.ceil(monthly));
    out.classList.remove("bump"); void out.offsetWidth; out.classList.add("bump");
    qs("#rTotal").textContent = money(Math.ceil(total));
    qs("#jarFill").style.height = (18 + Math.min(1, monthly / 300) * 72) + "%";
    let tip;
    if (monthly < 50) tip = t("tip.low");
    else if (monthly < 150) tip = t("tip.mid");
    else {
      const extra = Math.min(24 - m, Math.max(2, Math.ceil(m * 0.5))) || 0;
      tip = extra > 0 ? t("tip.high").replace("{n}", extra).replace("{x}", money(Math.ceil(total / (m + extra)))) : t("tip.mid");
    }
    qs("#aiTip").textContent = tip;
  }
  [iGoal, iPeople, iMonths].forEach(r => r && r.addEventListener("input", calc));

  /* reveal on scroll */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .15 });
  qsa(".reveal").forEach(el => io.observe(el));
  requestAnimationFrame(() => setTimeout(() => qsa(".hero .progress").forEach(p => p.classList.add("go")), 300));

  /* nav shadow */
  const nav = qs(".nav");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });

  /* subtle tilt on hero card */
  const card = qs(".tilt");
  if (card && matchMedia("(pointer:fine)").matches) {
    qs(".hero-visual").addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });
    qs(".hero-visual").addEventListener("pointerleave", () => card.style.transform = "");
  }

  /* waitlist (static: stored locally until a backend exists) */
  const form = qs("#joinForm");
  form && form.addEventListener("submit", e => {
    e.preventDefault();
    const email = qs("#email").value.trim();
    const list = JSON.parse(store.get("lc-waitlist") || "[]"); list.push({ email, lang, at: Date.now() });
    store.set("lc-waitlist", JSON.stringify(list));
    form.hidden = true; qs("#joinOk").hidden = false;
  });

  /* PWA install + service worker */
  let deferred;
  addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferred = e; qs("#installBtn").hidden = false; });
  qs("#installBtn").addEventListener("click", async () => { if (!deferred) return; deferred.prompt(); await deferred.userChoice; deferred = null; qs("#installBtn").hidden = true; });
  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js");

  qs("#year").textContent = new Date().getFullYear();
  applyLang();
})();
