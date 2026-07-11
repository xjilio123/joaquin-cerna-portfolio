import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Database,
  BarChart3,
  Code2,
  Bot,
  GraduationCap,
  Award,
  Briefcase,
  Sparkles,
  MapPin,
  ArrowRight,
  FileText,
  Palette,
  Languages,
} from "lucide-react";
import joaquinAsset from "@/assets/joaquin.jpg.asset.json";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export const Route = createFileRoute("/")({
  component: Index,
});

const EMAIL = "joaquin200314@gmail.com";
const CV_URL = "/JOAQUIN_CERNA_ROJAS_CV.pdf";

type ThemeKey = "default" | "fire" | "mono";
type Lang = "es" | "en";

const THEMES: { key: ThemeKey; label: string; colors: [string, string, string] }[] = [
  { key: "default", label: "Azul / Morado", colors: ["#0F172A", "#2563EB", "#7C3AED"] },
  { key: "fire", label: "Rojo / Naranja", colors: ["#0F0704", "#DC2626", "#F97316"] },
  { key: "mono", label: "Blanco / Negro", colors: ["#000000", "#525252", "#FFFFFF"] },
];

type Dict = {
  navHome: string; navAbout: string; navSkills: string; navProjects: string;
  navCerts: string; navCV: string; navContact: string;
  location: string; subtitle: string; intro: string;
  viewProjects: string; downloadCV: string;
  aboutTitle: string; aboutKicker: string; aboutBody: ReactNode;
  eduTitle: string; eduText: string; expTitle: string; expText: string;
  certTitle: string; certText: string;
  skillsTitle: string; skillsKicker: string;
  universityProjectsTitle: string; universityProjectsKicker: string;
  personalProjectsTitle: string; personalProjectsKicker: string;
  personalLandingTitle: string; personalDataTitle: string; personalEcommerceTitle: string;
  certsTitle: string; certsKicker: string;
  cvTitle: string; cvKicker: string;
  contactTitle: string; contactKicker: string;
  contactHead: string; contactHeadHi: string; contactHeadTail: string; contactBody: string;
  copyEmail: string; copied: string; footer: string; themeLabel: string;
};

const T: Record<Lang, Dict> = {
  es: {
    navHome: "Inicio", navAbout: "Sobre mí", navSkills: "Habilidades",
    navProjects: "Proyectos", navCerts: "Certificados", navCV: "CV", navContact: "Contacto",
    location: "Lima, Perú · Disponible para proyectos",
    subtitle: "Data Analytics · Business Intelligence · Automatización de Procesos",
    intro: "Convierto datos en decisiones. Diseño procesos ETL, modelos dimensionales y dashboards interactivos que revelan patrones, miden KPIs y automatizan lo que antes tomaba horas.",
    viewProjects: "Ver Proyectos", downloadCV: "Descargar CV",
    aboutTitle: "Sobre mí", aboutKicker: "Perfil",
    aboutBody: (
      <>
        Egresado de <strong className="text-foreground">Ingeniería de Computación y Sistemas</strong>{" "}
        (USMP, 2026-1) con enfoque profesional en Data Analytics, Business Intelligence y automatización de procesos. Experiencia en ETL, limpieza y transformación de datos, modelado dimensional y diseño de dashboards interactivos. Manejo avanzado de{" "}
        <strong className="text-foreground">SQL, Power BI y Excel</strong> y conocimiento de Python para EDA y automatización. Trabajo bajo metodología Scrum con control de versiones en GitHub.
      </>
    ),
    eduTitle: "Educación", eduText: "USMP — Ing. de Computación y Sistemas · 2021–2026",
    expTitle: "Experiencia", expText: "Analista de Datos · QA · Soporte TI",
    certTitle: "Certificaciones", certText: "Huawei · UNI · CertiProf · Santander",
    skillsTitle: "Habilidades", skillsKicker: "Stack técnico",
    universityProjectsTitle: "Proyectos Universitarios", universityProjectsKicker: "Trabajo académico",
    personalProjectsTitle: "Proyectos Personales", personalProjectsKicker: "Iniciativas propias",
    personalLandingTitle: "Landing Page", personalDataTitle: "Data Analytics", personalEcommerceTitle: "E-commerce",
    certsTitle: "Certificados", certsKicker: "Formación continua",
    cvTitle: "Curriculum Vitae", cvKicker: "Documento",
    contactTitle: "Contacto", contactKicker: "Hablemos",
    contactHead: "¿Tienes un proyecto de", contactHeadHi: "datos", contactHeadTail: "?",
    contactBody: "Estoy disponible para colaborar en proyectos de BI, análisis de datos y automatización. Conversemos.",
    copyEmail: "Copiar correo", copied: "Copiado",
    footer: "Hecho con cuidado en Lima, Perú.", themeLabel: "Tema",
  },
  en: {
    navHome: "Home", navAbout: "About", navSkills: "Skills",
    navProjects: "Projects", navCerts: "Certificates", navCV: "CV", navContact: "Contact",
    location: "Lima, Peru · Open to projects",
    subtitle: "Data Analytics · Business Intelligence · Process Automation",
    intro: "I turn data into decisions. I design ETL processes, dimensional models and interactive dashboards that reveal patterns, measure KPIs and automate what used to take hours.",
    viewProjects: "View Projects", downloadCV: "Download CV",
    aboutTitle: "About me", aboutKicker: "Profile",
    aboutBody: (
      <>
        Graduate in <strong className="text-foreground">Computing &amp; Systems Engineering</strong>{" "}
        (USMP, 2026-1) focused on Data Analytics, Business Intelligence and process automation. Experience with ETL, data cleansing and transformation, dimensional modeling and interactive dashboard design. Advanced skills in{" "}
        <strong className="text-foreground">SQL, Power BI and Excel</strong> plus working knowledge of Python for EDA and automation. Scrum methodology with version control on GitHub.
      </>
    ),
    eduTitle: "Education", eduText: "USMP — Computing & Systems Eng. · 2021–2026",
    expTitle: "Experience", expText: "Data Analyst · QA · IT Support",
    certTitle: "Certifications", certText: "Huawei · UNI · CertiProf · Santander",
    skillsTitle: "Skills", skillsKicker: "Tech stack",
    universityProjectsTitle: "University Projects", universityProjectsKicker: "Academic work",
    personalProjectsTitle: "Personal Projects", personalProjectsKicker: "Own initiatives",
    personalLandingTitle: "Landing Page", personalDataTitle: "Data Analytics", personalEcommerceTitle: "E-commerce",
    certsTitle: "Certificates", certsKicker: "Continuous learning",
    cvTitle: "Curriculum Vitae", cvKicker: "Document",
    contactTitle: "Contact", contactKicker: "Let's talk",
    contactHead: "Have a", contactHeadHi: "data", contactHeadTail: " project?",
    contactBody: "I'm available to collaborate on BI, data analytics and automation projects. Let's chat.",
    copyEmail: "Copy email", copied: "Copied",
    footer: "Made with care in Lima, Peru.", themeLabel: "Theme",
  },
};

const universityProjectsI18n: Record<Lang, { name: string; description: string }[]> = {
  es: [
    { name: "ETL & Dashboards — JPC Garrita", description: "Procesos ETL en Python y SQL, modelado dimensional y dashboards interactivos en Power BI para visualizar KPIs de negocio y detectar tendencias." },
    { name: "Automatización QA — Ña Vishe", description: "Pruebas automatizadas E2E con Playwright, NodeJS y TypeScript. Gestión ágil con Scrum y control de versiones en GitHub sobre entorno Chromium." },
    { name: "Soporte & Documentación — Facultad de Derecho USMP", description: "Continuidad operativa de equipos y sistemas, atención de incidencias y documentación técnica para optimizar tiempos de respuesta del área." },
    { name: "EXPO EPICS USMP — IoT & BD", description: "Proyectos académicos de IoT y diseño de bases de datos presentados en la EXPO EPICS de la Universidad de San Martín de Porres." },
  ],
  en: [
    { name: "ETL & Dashboards — JPC Garrita", description: "ETL processes in Python and SQL, dimensional modeling and interactive Power BI dashboards to visualize business KPIs and spot trends." },
    { name: "QA Automation — Ña Vishe", description: "End-to-end automated testing with Playwright, NodeJS and TypeScript. Agile Scrum workflow and Git version control on a Chromium environment." },
    { name: "Support & Docs — USMP Law School", description: "Operational continuity of equipment and systems, incident handling and technical documentation to shorten response times." },
    { name: "EXPO EPICS USMP — IoT & DB", description: "Academic IoT and database design projects presented at the EXPO EPICS of Universidad de San Martín de Porres." },
  ],
};

const universityProjectMeta: { tech: string[] }[] = [
  { tech: ["Python", "SQL", "Power BI", "EDA"] },
  { tech: ["Playwright", "TypeScript", "NodeJS", "GitHub"] },
  { tech: ["Soporte TI", "Outlook", "Hardware", "Software"] },
  { tech: ["IoT", "SQL Server", "Modelado", "Prototipado"] },
];

type PersonalProject = { name: string; description: string; tech: string[] };
const personalProjectsI18n: Record<Lang, Record<"landing" | "data" | "ecommerce", PersonalProject[]>> = {
  es: {
    landing: [
      { name: "Sitio corporativo responsive", description: "Landing page moderna con diseño mobile-first, formulario de contacto y secciones de servicios optimizadas para conversión.", tech: ["React", "Tailwind CSS", "Vite"] },
      { name: "Página de producto SaaS", description: "Hero con llamada a la acción, pricing cards y testimonios; enfocada en presentar un producto digital de forma clara.", tech: ["React", "TypeScript", "Figma"] },
    ],
    data: [
      { name: "Dashboard de ventas", description: "Panel interactivo con KPIs de ventas, tendencias mensuales y segmentación de clientes usando datos de ejemplo.", tech: ["Power BI", "SQL", "Excel"] },
      { name: "Análisis de churn", description: "Modelo exploratorio para identificar clientes propensos a cancelar y proponer acciones de retención.", tech: ["Python", "Pandas", "Matplotlib"] },
    ],
    ecommerce: [
      { name: "Tienda de productos digitales", description: "Catálogo de productos, carrito de compras y flujo de checkout simplificado para productos descargables.", tech: ["React", "Stripe", "Tailwind CSS"] },
      { name: "Marketplace de cursos", description: "Listado de cursos con filtros, detalle de contenido y simulación de proceso de inscripción.", tech: ["Next.js", "PostgreSQL", "Prisma"] },
    ],
  },
  en: {
    landing: [
      { name: "Responsive corporate site", description: "Modern landing page with mobile-first design, contact form and service sections optimized for conversion.", tech: ["React", "Tailwind CSS", "Vite"] },
      { name: "SaaS product page", description: "Hero with call-to-action, pricing cards and testimonials; focused on presenting a digital product clearly.", tech: ["React", "TypeScript", "Figma"] },
    ],
    data: [
      { name: "Sales dashboard", description: "Interactive panel with sales KPIs, monthly trends and customer segmentation using sample data.", tech: ["Power BI", "SQL", "Excel"] },
      { name: "Churn analysis", description: "Exploratory model to identify customers likely to cancel and propose retention actions.", tech: ["Python", "Pandas", "Matplotlib"] },
    ],
    ecommerce: [
      { name: "Digital products store", description: "Product catalog, shopping cart and simplified checkout flow for downloadable products.", tech: ["React", "Stripe", "Tailwind CSS"] },
      { name: "Course marketplace", description: "Course listing with filters, content detail and simulated enrollment process.", tech: ["Next.js", "PostgreSQL", "Prisma"] },
    ],
  },
};

const skills = [
  { name: "SQL", icon: Database },
  { name: "Power BI", icon: BarChart3 },
  { name: "Python", icon: Code2 },
  { name: "Excel", icon: BarChart3 },
  { name: "Tableau", icon: BarChart3 },
  { name: "SQL Server", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "GitHub", icon: Github },
  { name: "Scrum", icon: Sparkles },
  { name: "Jira", icon: Sparkles },
  { name: "Power Automate", icon: Bot },
  { name: "Power Apps", icon: Bot },
  { name: "ChatGPT", icon: Bot },
  { name: "Claude", icon: Bot },
  { name: "Copilot", icon: Bot },
  { name: "Gemini", icon: Bot },
];

const certificates = [
  { name: "Huawei — Seeds for the Future (IA, 5G, Ciberseguridad)", year: "2025" },
  { name: "UNI — SQL Server Base de Datos", year: "2025" },
  { name: "CAMCOP — Gestión de datos con Excel", year: "2025" },
  { name: "Santander Open Academy — Ciencia de Datos & Power BI", year: "2025" },
  { name: "CertiProf — Business Intelligence Foundation", year: "2023" },
  { name: "Netzun — Power BI, SQL, Power Apps, Tableau, Python", year: "2025-2026" },
  { name: "Cisco — Introducción a la Seguridad Cibernética", year: "2021" },
  { name: "ICPNA — Inglés Avanzado (MET, University of Michigan)", year: "2021" },
];

function Index() {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<ThemeKey>("default");
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as ThemeKey | null) || "default";
    const savedLang = (localStorage.getItem("lang") as Lang | null) || "es";
    setTheme(savedTheme);
    setLang(savedLang);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = T[lang];
  const nav = [
    { href: "#inicio", label: t.navHome },
    { href: "#sobre-mi", label: t.navAbout },
    { href: "#habilidades", label: t.navSkills },
    { href: "#proyectos", label: t.navProjects },
    { href: "#certificados", label: t.navCerts },
    { href: "#cv", label: t.navCV },
    { href: "#contacto", label: t.navContact },
  ];
  const universityProjects = universityProjectsI18n[lang].map((p, i) => ({ ...p, tech: universityProjectMeta[i].tech }));
  const personalProjects = personalProjectsI18n[lang];
  const currentTheme = THEMES.find((x) => x.key === theme)!;
  const cycleTheme = () => {
    const idx = THEMES.findIndex((x) => x.key === theme);
    setTheme(THEMES[(idx + 1) % THEMES.length].key);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* noop */ }
  };

  return (
    <div className="min-h-screen text-foreground">
      <AnimatedBackground />

      {/* NAVBAR */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={cycleTheme}
              title={`${t.themeLabel}: ${currentTheme.label}`}
              aria-label={t.themeLabel}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-2 text-xs font-medium backdrop-blur hover:border-primary transition"
            >
              <Palette className="w-4 h-4 text-primary" />
              <span className="flex items-center gap-1">
                {currentTheme.colors.map((c) => (
                  <span
                    key={c}
                    className="w-3 h-3 rounded-full border border-white/20"
                    style={{ background: c }}
                  />
                ))}
              </span>
            </button>
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              aria-label="Language"
              title={lang === "es" ? "Switch to English" : "Cambiar a español"}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-2 text-xs font-semibold backdrop-blur hover:border-primary transition"
            >
              <Languages className="w-4 h-4 text-primary" />
              {lang.toUpperCase()}
            </button>
            <a href="#inicio" className="hidden lg:flex items-center gap-2 font-bold tracking-tight ml-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-brand grid place-items-center text-primary-foreground text-sm">JC</span>
              <span>Joaquín Cerna</span>
            </a>
          </div>
          <ul className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-foreground transition-colors">{n.label}</a>
              </li>
            ))}
          </ul>
          <a
            href={CV_URL}
            download
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground shadow-brand hover:opacity-90 transition"
          >
            <Download className="w-4 h-4" />
            CV
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <MapPin className="w-3.5 h-3.5" />
              {t.location}
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Joaquín Alessandro <br />
              <span className="text-gradient-brand">Cerna Rojas</span>
            </h1>
            <p className="mt-4 text-base md:text-lg font-medium text-muted-foreground">{t.subtitle}</p>
            <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">{t.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#proyectos" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-brand hover:opacity-90 transition">
                {t.viewProjects} <ArrowRight className="w-4 h-4" />
              </a>
              <a href={CV_URL} download className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold hover:bg-card transition backdrop-blur">
                <Download className="w-4 h-4" /> {t.downloadCV}
              </a>
            </div>
          </div>

          <div className="relative mx-auto animate-avatar-float">
            <div className="absolute -inset-6 rounded-full bg-gradient-brand blur-3xl opacity-50" />
            <div className="absolute -inset-1 rounded-full bg-gradient-brand opacity-80" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-background bg-card shadow-brand">
              <img src={joaquinAsset.url} alt="Joaquín Cerna" width={800} height={800} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Section id="sobre-mi" title={t.aboutTitle} kicker={t.aboutKicker}>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl border border-border bg-card/60 p-6 md:p-8 backdrop-blur">
            <p className="text-muted-foreground leading-relaxed">{t.aboutBody}</p>
          </div>
          <div className="grid gap-4">
            <MiniCard icon={GraduationCap} title={t.eduTitle} text={t.eduText} />
            <MiniCard icon={Briefcase} title={t.expTitle} text={t.expText} />
            <MiniCard icon={Award} title={t.certTitle} text={t.certText} />
          </div>
        </div>
      </Section>

      <Section id="habilidades" title={t.skillsTitle} kicker={t.skillsKicker}>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <div key={s.name} className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm backdrop-blur hover:border-primary hover:-translate-y-0.5 transition">
              <s.icon className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
              {s.name}
            </div>
          ))}
        </div>
      </Section>

      <Section id="proyectos" title={t.projectsTitle} kicker={t.projectsKicker}>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article key={p.name} className="group relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur hover:border-primary/60 transition">
              <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-[0.06] transition" />
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((tt) => (
                  <span key={tt} className="text-xs rounded-md border border-border bg-background/40 px-2 py-1 text-muted-foreground">{tt}</span>
                ))}
              </div>
              {p.href && (
                <a href={p.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition">
                  <Github className="w-4 h-4" /> {t.viewGithub}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section id="certificados" title={t.certsTitle} kicker={t.certsKicker}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((c) => (
            <div key={c.name} className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur hover:border-accent/60 transition">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-brand grid place-items-center shrink-0">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-snug">{c.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="cv" title={t.cvTitle} kicker={t.cvKicker}>
        <div className="rounded-2xl border border-border bg-card/60 p-4 md:p-6 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4 text-primary" />
              JOAQUIN_CERNA_ROJAS_CV.pdf
            </div>
            <a href={CV_URL} download className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-primary-foreground shadow-brand hover:opacity-90 transition">
              <Download className="w-4 h-4" /> {t.downloadCV}
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border border-border bg-background/50">
            <object data={CV_URL} type="application/pdf" className="w-full h-[80vh]">
              <iframe src={CV_URL} title="CV Joaquín Cerna" className="w-full h-[80vh]" />
            </object>
          </div>
        </div>
      </Section>

      <Section id="contacto" title={t.contactTitle} kicker={t.contactKicker}>
        <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10 backdrop-blur text-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            {t.contactHead} <span className="text-gradient-brand">{t.contactHeadHi}</span>{t.contactHeadTail}
          </h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{t.contactBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://linkedin.com/in/joaquincernarojas14" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-primary transition">
              <Linkedin className="w-4 h-4 text-primary" /> LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-primary transition">
              <Github className="w-4 h-4 text-primary" /> GitHub
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-brand hover:opacity-90 transition">
              <Mail className="w-4 h-4" /> {EMAIL}
            </a>
            <button onClick={copyEmail} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-accent transition">
              {copied ? (<><Check className="w-4 h-4 text-accent" /> {t.copied}</>) : (<><Copy className="w-4 h-4" /> {t.copyEmail}</>)}
            </button>
          </div>
        </div>
      </Section>

      <footer className="max-w-6xl mx-auto px-6 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Joaquín Alessandro Cerna Rojas · {t.footer}
      </footer>
    </div>
  );
}

function Section({ id, title, kicker, children }: { id: string; title: string; kicker?: string; children: ReactNode; }) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          {kicker && (<p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{kicker}</p>)}
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          <div className="mt-3 h-[2px] w-16 bg-gradient-brand rounded-full" />
        </div>
        {children}
      </div>
    </section>
  );
}

function MiniCard({ icon: Icon, title, text }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string; }) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-gradient-brand grid place-items-center shrink-0">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{text}</p>
      </div>
    </div>
  );
}