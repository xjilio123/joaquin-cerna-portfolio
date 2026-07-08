import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
} from "lucide-react";
import joaquinAsset from "@/assets/joaquin.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const EMAIL = "joaquin200314@gmail.com";
const CV_URL = "/JOAQUIN_CERNA_ROJAS_CV.pdf";

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

const projects = [
  {
    name: "ETL & Dashboards — JPC Garrita",
    description:
      "Procesos ETL en Python y SQL, modelado dimensional y dashboards interactivos en Power BI para visualizar KPIs de negocio y detectar tendencias.",
    tech: ["Python", "SQL", "Power BI", "EDA"],
    href: null,
  },
  {
    name: "Automatización QA — Ña Vishe",
    description:
      "Pruebas automatizadas E2E con Playwright, NodeJS y TypeScript. Gestión ágil con Scrum y control de versiones en GitHub sobre entorno Chromium.",
    tech: ["Playwright", "TypeScript", "NodeJS", "GitHub"],
    href: "https://github.com/",
  },
  {
    name: "Soporte & Documentación — Facultad de Derecho USMP",
    description:
      "Continuidad operativa de equipos y sistemas, atención de incidencias y documentación técnica para optimizar tiempos de respuesta del área.",
    tech: ["Soporte TI", "Outlook", "Hardware", "Software"],
    href: null,
  },
  {
    name: "EXPO EPICS USMP — IoT & BD",
    description:
      "Proyectos académicos de IoT y diseño de bases de datos presentados en la EXPO EPICS de la Universidad de San Martín de Porres.",
    tech: ["IoT", "SQL Server", "Modelado", "Prototipado"],
    href: null,
  },
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

const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#certificados", label: "Certificados" },
  { href: "#cv", label: "CV" },
  { href: "#contacto", label: "Contacto" },
];

function Index() {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="min-h-screen text-foreground">
      {/* ANIMATED SITEWIDE BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-animated-grid opacity-60" />
        <div className="absolute top-[-10%] left-[-10%] w-[45rem] h-[45rem] rounded-full bg-brand-blue/30 blur-[120px] animate-blob-1" />
        <div className="absolute top-[30%] right-[-15%] w-[40rem] h-[40rem] rounded-full bg-brand-purple/30 blur-[120px] animate-blob-2" />
        <div className="absolute bottom-[-10%] left-[20%] w-[35rem] h-[35rem] rounded-full bg-primary/25 blur-[120px] animate-blob-3" />
      </div>

      {/* NAVBAR */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/70 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="w-8 h-8 rounded-lg bg-gradient-brand grid place-items-center text-primary-foreground text-sm">
              JC
            </span>
            <span className="hidden sm:inline">Joaquín Cerna</span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="hover:text-foreground transition-colors"
                >
                  {n.label}
                </a>
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
      <section
        id="inicio"
        className="relative pt-36 pb-24 px-6 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <MapPin className="w-3.5 h-3.5" />
              Lima, Perú · Disponible para proyectos
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Joaquín Alessandro <br />
              <span className="text-gradient-brand">Cerna Rojas</span>
            </h1>
            <p className="mt-4 text-base md:text-lg font-medium text-muted-foreground">
              Data Analytics · Business Intelligence · Automatización de Procesos
            </p>
            <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
              Convierto datos en decisiones. Diseño procesos ETL, modelos
              dimensionales y dashboards interactivos que revelan patrones,
              miden KPIs y automatizan lo que antes tomaba horas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-brand hover:opacity-90 transition"
              >
                Ver Proyectos <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={CV_URL}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold hover:bg-card transition backdrop-blur"
              >
                <Download className="w-4 h-4" />
                Descargar CV
              </a>
            </div>
          </div>

          <div className="relative mx-auto animate-avatar-float">
            <div className="absolute -inset-6 rounded-full bg-gradient-brand blur-3xl opacity-50" />
            <div className="absolute -inset-1 rounded-full bg-gradient-brand opacity-80" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-background bg-card shadow-brand">
              <img
                src={joaquinAsset.url}
                alt="Joaquín Cerna"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <Section id="sobre-mi" title="Sobre mí" kicker="Perfil">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl border border-border bg-card/60 p-6 md:p-8 backdrop-blur">
            <p className="text-muted-foreground leading-relaxed">
              Egresado de <strong className="text-foreground">Ingeniería de Computación y Sistemas</strong>{" "}
              (USMP, 2026-1) con enfoque profesional en Data Analytics,
              Business Intelligence y automatización de procesos. Experiencia
              en ETL, limpieza y transformación de datos, modelado dimensional
              y diseño de dashboards interactivos. Manejo avanzado de{" "}
              <strong className="text-foreground">SQL, Power BI y Excel</strong>{" "}
              y conocimiento de Python para EDA y automatización. Trabajo bajo
              metodología Scrum con control de versiones en GitHub.
            </p>
          </div>
          <div className="grid gap-4">
            <MiniCard icon={GraduationCap} title="Educación" text="USMP — Ing. de Computación y Sistemas · 2021–2026" />
            <MiniCard icon={Briefcase} title="Experiencia" text="Analista de Datos · QA · Soporte TI" />
            <MiniCard icon={Award} title="Certificaciones" text="Huawei · UNI · CertiProf · Santander" />
          </div>
        </div>
      </Section>

      {/* HABILIDADES */}
      <Section id="habilidades" title="Habilidades" kicker="Stack técnico">
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <div
              key={s.name}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm backdrop-blur hover:border-primary hover:-translate-y-0.5 transition"
            >
              <s.icon className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
              {s.name}
            </div>
          ))}
        </div>
      </Section>

      {/* PROYECTOS */}
      <Section id="proyectos" title="Proyectos" kicker="Trabajo destacado">
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur hover:border-primary/60 transition"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-[0.06] transition" />
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-md border border-border bg-background/40 px-2 py-1 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition"
                >
                  <Github className="w-4 h-4" /> Ver en GitHub
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* CERTIFICADOS */}
      <Section id="certificados" title="Certificados" kicker="Formación continua">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((c) => (
            <div
              key={c.name}
              className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur hover:border-accent/60 transition"
            >
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

      {/* CV */}
      <Section id="cv" title="Curriculum Vitae" kicker="Documento">
        <div className="rounded-2xl border border-border bg-card/60 p-4 md:p-6 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4 text-primary" />
              JOAQUIN_CERNA_ROJAS_CV.pdf
            </div>
            <a
              href={CV_URL}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-primary-foreground shadow-brand hover:opacity-90 transition"
            >
              <Download className="w-4 h-4" /> Descargar CV
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border border-border bg-background/50">
            <object
              data={CV_URL}
              type="application/pdf"
              className="w-full h-[80vh]"
            >
              <iframe
                src={CV_URL}
                title="CV Joaquín Cerna"
                className="w-full h-[80vh]"
              />
            </object>
          </div>
        </div>
      </Section>

      {/* CONTACTO */}
      <Section id="contacto" title="Contacto" kicker="Hablemos">
        <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10 backdrop-blur text-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            ¿Tienes un proyecto de <span className="text-gradient-brand">datos</span>?
          </h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Estoy disponible para colaborar en proyectos de BI, análisis de datos
            y automatización. Conversemos.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://linkedin.com/in/joaquincernarojas14"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-primary transition"
            >
              <Linkedin className="w-4 h-4 text-primary" /> LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-primary transition"
            >
              <Github className="w-4 h-4 text-primary" /> GitHub
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-brand hover:opacity-90 transition"
            >
              <Mail className="w-4 h-4" /> {EMAIL}
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-accent transition"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-accent" /> Copiado
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copiar correo
                </>
              )}
            </button>
          </div>
        </div>
      </Section>

      <footer className="max-w-6xl mx-auto px-6 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Joaquín Alessandro Cerna Rojas · Hecho con
        cuidado en Lima, Perú.
      </footer>
    </div>
  );
}

function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          {kicker && (
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              {kicker}
            </p>
          )}
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h2>
          <div className="mt-3 h-[2px] w-16 bg-gradient-brand rounded-full" />
        </div>
        {children}
      </div>
    </section>
  );
}

function MiniCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-gradient-brand grid place-items-center shrink-0">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
