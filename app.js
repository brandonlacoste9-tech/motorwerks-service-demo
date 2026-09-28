const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.gallery": "Gallery", "nav.visit": "Visit us", "nav.faq": "FAQ", "nav.contact": "Contact",
  "nav.call": "07419 821989",
  "hero.kicker": "78 Stour St, Birmingham · Car servicing & repairs",
  "hero.title": "Dealership-level work,<br>without dealership prices.",
  "hero.sub": "Motorwerks Service and Repairs gives Birmingham drivers dealership-standard servicing and repairs — with dealership-approved parts — at a fraction of the cost.",
  "hero.cta1": "Book your car in", "hero.cta2": "See services",
  "walkin.w1t": "Mon – Sat 10am – 6pm", "walkin.w1d": "Open six days a week · Sun closed",
  "walkin.w2t": "Servicing & repairs", "walkin.w2d": "Oil services to accident damage repairs",
  "walkin.w3t": "Free health check", "walkin.w3d": "On every major service",
  "stats.hoursNum": "Mon – Sat", "stats.hours": "Open 6 days a week",
  "stats.partsNum": "Approved parts", "stats.parts": "Dealership-approved parts fitted",
  "stats.checkNum": "Free", "stats.check": "health check with major services",
  "stats.quoteNum": "Free", "stats.quote": "quotes before every job",
  "services.kicker": "What we do", "services.title": "Servicing and repairs, big jobs and small",
  "services.s1t": "Car Servicing", "services.s1d": "Interim, full and major servicing — with free screenwash and antifreeze top-ups on every major service.",
  "services.s2t": "Car Repairs", "services.s2d": "From small simple oil services through to accident damage repairs — all at very competitive prices.",
  "services.s3t": "Brakes & Clutches", "services.s3d": "Brake repairs, clutch repairs and full brake system checks — stopping power you can trust.",
  "services.s4t": "Engine Diagnostics", "services.s4d": "Warning lights, strange noises, poor running — we find the cause and fix it properly.",
  "services.s5t": "Engine & Exhaust Work", "services.s5d": "Engine repairs, exhaust systems and cylinder heads — the heavy jobs, handled properly.",
  "services.s6t": "Alloy Wheel Refurbishment", "services.s6d": "Kerb-damaged or scuffed alloys refurbished and repaired back to their best.",
  "why.kicker": "Why choose us", "why.title": "Dealership standard, independent prices",
  "why.intro": "Motorwerks is a fast-growing Birmingham garage built on recommended customers. The promise is simple: a dealership-level professional job on your vehicle, at a fraction of the dealership price.",
  "why.l1t": "Dealership-approved parts", "why.l1d": "We use dealership-approved parts — never the cheapest box on the shelf.",
  "why.l2t": "Free health checks", "why.l2d": "Free health check on every vehicle, plus free screenwash and antifreeze top-ups on all major services.",
  "why.l3t": "Attention to detail", "why.l3d": "Our goal is a service that exceeds your expectations — every single time.",
  "why.l4t": "Birmingham, open six days", "why.l4d": "On Stour St, Monday to Saturday, 10am to 6pm.",
  "gallery.kicker": "The workshop in action", "gallery.title": "A tidy shop, careful work",
  "gallery.c1": "Major servicing, done properly",
  "gallery.c2": "Brake inspection up on the lift",
  "gallery.c3": "Find us on Stour St, Birmingham",
  "visit.kicker": "Come and say hello", "visit.title": "Pop in — walk-ins welcome",
  "visit.more": "Birmingham — Monday to Saturday, 10am to 6pm. Call 07419 821989 or just drop by.",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "What are your opening hours?",
  "faq.a1": "Monday to Saturday, 10am to 6pm. Closed Sundays.",
  "faq.q2": "Do I need an appointment?",
  "faq.a2": "Call ahead so we can set time aside for you — or walk in during opening hours. Call 07419 821989.",
  "faq.q3": "What's included in a major service?",
  "faq.a3": "A full major service includes a free health check on your vehicle, plus free screenwash and antifreeze top-ups.",
  "faq.q4": "How much will the work cost?",
  "faq.a4": "Every job gets a free quote before we start, and our prices are a fraction of what a main dealer charges.",
  "contact.kicker": "Come see us", "contact.title": "Book your car in",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Sat: 10:00 AM – 6:00 PM<br>Sun: closed",
  "contact.cta": "Call now to book",
  "footer.tag": "Car servicing & repairs · Birmingham"
}};

const lang = "en";

function applyLang() {
  document.documentElement.lang = "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "Motorwerks Service and Repairs — Car Servicing & Repairs in Birmingham";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang();
