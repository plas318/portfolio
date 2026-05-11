import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Server,
  Globe2,
  Database,
  Container,
  Code2,
  Languages,
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const profile = {
  name: "J H",
  role: "Backend-Oriented Full-Stack Web Developer",
  tagline:
    "Django/DRF와 React 기반의 웹 서비스를 직접 설계·구현하고 Docker, Nginx, Cloud 환경에서 배포까지 경험한 개발자입니다.",
  location: "South Korea",
  github: "https://github.com/plas318",
  email: "plas3180g@gmail.com",
};

const skills = [
  {
    title: "Backend",
    icon: Server,
    items: ["Python", "Django", "Django REST Framework", "Flask", "REST API", "JWT/Auth"],
  },
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "JavaScript", "HTML", "CSS", "SPA Routing", "API Integration"],
  },
  {
    title: "Infra & Deployment",
    icon: Container,
    items: ["Docker", "Docker Compose", "Nginx", "Gunicorn/WSGI", "Google Cloud", "Domain/DNS"],
  },
  {
    title: "Data & Tools",
    icon: Database,
    items: ["SQL", "SQLD", "Git/GitHub", "Swagger/OpenAPI", "Linux", "PostgreSQL/MySQL"],
  },
];

const projects = [
  {
    name: "Full-Stack Blog Platform",
    type: "Main Project",
    summary:
      "Django REST Framework 기반 백엔드와 React 프론트엔드를 분리 구성하고, Docker/Nginx/Cloud 환경에서 배포까지 진행한 개인 블로그 서비스입니다.",
    impact: [
      "백엔드 API 서버와 프론트엔드 클라이언트를 분리한 풀스택 구조 설계",
      "DRF Spectacular를 활용한 API 문서화 및 REST API 명세 관리",
      "Docker 기반 실행 환경 구성 및 Nginx/Gunicorn 계층을 고려한 배포 구조 경험",
      "도메인 구매, DNS 연결, 클라우드 서버 배포까지 서비스 운영 흐름 경험",
    ],
    tech: ["Django", "DRF", "React", "Docker", "Nginx", "GCP", "Domain", "OpenAPI"],
    links: [
      { label: "Backend", href: "https://github.com/plas318/mlbackend" },
      { label: "Frontend", href: "https://github.com/plas318/mlfrontend" },
    ],
  },
  {
    name: "Purgo CRM Backend Project",
    type: "Main Project / Django / DRF",
    summary:
      "Django REST Framework 기반 백엔드를 활용하여 Purgo 기업을 위한 CRM 및 각종 지표 및 자료를 제공하는 웹 개발 프로젝트입니다",
    impact: [
      "백엔드 API 서버와 프론트엔드 클라이언트를 분리한 풀스택 구조 설계",
      "Custom API 설계를 통해 다양한 그래프 및 지표를 제공",
      "JWT Token Authentication을 통한 REST 구현",
    ],
    tech: ["Django", "DRF", "Backend", "Docker", "OpenAPI"],
    links: [
      { label: "Purgo-Backend", href: "https://github.com/plas318/PurgoCRM-Backend" },
    ],
  },
  {
    name: "TrackerModel-with-Flask",
    type: "Web Backend / Flask",
    summary:
      "Flask 기반의 커스텀 트래커 웹 프로젝트로, Python 웹 프레임워크를 활용한 서버 사이드 개발 경험을 보여주는 프로젝트입니다.",
    impact: [
      "Flask 기반 라우팅 및 서버 사이드 웹 애플리케이션 구현",
      "정적 웹 화면과 백엔드 로직을 연결하는 구조 경험",
    ],
    tech: ["Flask", "Python", "CSS", "Web"],
    links: [{ label: "Repository", href: "https://github.com/plas318/TrackerModel-with-Flask" }],
  },
  {
    name: "Twitter-Simple-History",
    type: "JavaScript Utility / Extension",
    summary:
      "Twitter/X 사용 기록을 추적하는 JavaScript 기반 스크립트/확장 프로젝트입니다.",
    impact: [
      "브라우저 환경에서 동작하는 JavaScript 로직 구현",
      "사용자 행동 기록/추적 기능 설계 경험",
    ],
    tech: ["JavaScript", "Browser", "Extension"],
    links: [{ label: "Repository", href: "https://github.com/plas318/Twitter-Simple-History" }],
  },
];

const education = [
  {
    school: "Hankuk University of Foreign Studies",
    degree: "Computer Engineering",
    detail: "편입 후 졸업 · GPA 4.2 / 4.5",
    year: "2020 — Graduation",
  },
  {
    school: "Kunsan National University",
    degree: "Information & Control Systems Engineering",
    detail: "GPA 4.1",
    year: "2018",
  },
];

const certifications = ["정보처리기사", "SQLD", "OPIc AL", "TOEIC 970", "Near-native English Communication"];

const strengths = [
  "영어 기반 협업·문서 독해·해외 자료 학습에 강점",
  "React와 Django/DRF를 연결한 풀스택 구현 경험",
  "Docker, Nginx, Cloud, Domain까지 포함한 실제 배포 경험",
  "백엔드 중심으로 API 설계와 서비스 운영 흐름을 이해",
];

function Badge({ children }) {
  return <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-sm text-slate-200">{children}</span>;
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-md font-semibold uppercase tracking-[0.25em] text-purple-300">{eyebrow}</p>
      {description && <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-xl shadow-black/20 ${className}`}>{children}</div>;
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white-950 text-black-100">
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/8 rounded-full bg-slate-500/20 blur-3xl" />
        <div className="absolute right-0 top-80 h-[360px] w-[360px] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="text-lg font-bold tracking-tight text-white">Plas318</a>
          <div className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid max-w-6xl gap-5 px-5 py-24 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="mb-6 flex flex-wrap gap-3">
            <Badge>Backend</Badge>
            <Badge>Full-Stack</Badge>
            <Badge>Django REST Framework</Badge>
            <Badge>React</Badge>
            <Badge>English AL</Badge>
          </div>
          <h1 className="max-w-4xl text-4xl mt-5 mb-10 font-black leading-tight text-slate-600 md:text-5xl">
            웹 개발자, {profile.name}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-purple-300 px-6 py-3 transition hover:bg-purple-200">
              프로젝트 보기
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-purple-300">
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.15 }}>
          <Card className="relative overflow-hidden">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-purple-400/10" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">Profile Snapshot</p>
            <div className="mt-6 space-y-5">
              {strengths.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-purple-300" size={18} />
                  <p className="text-white/85">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </section>

      <section id="projects" className="relative mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Selected Work"
          title="구현·배포 경험이 드러나는 프로젝트"
          description="단순 학습 프로젝트보다 실제 서비스 구조, API, 배포, 운영 흐름을 보여주는 프로젝트를 우선 배치했습니다."
        />
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="mb-3 text-sm font-semibold text-purple-300">{project.type}</p>
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => <Badge key={tech}>{tech}</Badge>)}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-200">
                        {link.label} <ArrowUpRight size={16} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-900/70 p-5">
                  <p className="mb-4 font-semibold text-white">Key Contributions</p>
                  <ul className="space-y-3">
                    {project.impact.map((item) => (
                      <li key={item} className="flex gap-3 text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Technical Stack"
          title="백엔드 중심 풀스택 역량"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ title, icon: Icon, items }) => (
            <Card key={title}>
              <Icon className="mb-4 text-purple-300" size={28} />
              <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => <Badge key={item}>{item}</Badge>)}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <Globe2 className="mb-4 text-purple-300" />
            <h3 className="text-xl font-bold text-white">Deployment Experience</h3>
            <p className="mt-3 leading-7 text-slate-300">도메인 구매, DNS 연결, 클라우드 서버, Docker, Nginx까지 실제 운영 흐름을 경험했습니다.</p>
          </Card>
          <Card>
            <Languages className="mb-4 text-purple-300" />
            <h3 className="text-xl font-bold text-white">English Communication</h3>
            <p className="mt-3 leading-7 text-slate-300">OPIc AL 및 원어민 수준 영어 구사 능력을 바탕으로 글로벌 협업과 영문 기술 문서 이해에 강점이 있습니다.</p>
          </Card>
          <Card>
            <Award className="mb-4 text-purple-300" />
            <h3 className="text-xl font-bold text-white">Certifications</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {certifications.map((cert) => <Badge key={cert}>{cert}</Badge>)}
            </div>
          </Card>
        </div>
      </section>

      <section id="education" className="relative mx-auto max-w-6xl px-5 py-20">
        <SectionTitle eyebrow="Education" title="컴퓨터공학 기반과 높은 학업 성취" />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((edu) => (
            <Card key={edu.school}>
              <GraduationCap className="mb-4 text-purple-300" size={28} />
              <h3 className="text-xl font-bold text-white">{edu.school}</h3>
              <p className="mt-2 text-purple-200">{edu.degree}</p>
              <p className="mt-3 text-slate-300">{edu.detail}</p>
              <p className="mt-2 text-sm text-slate-500">{edu.year}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24">
        <Card className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">Contact</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-purple-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-purple-300">
              <Mail size={18} /> 이메일 보내기
            </a>
          </div>
        </Card>
      </section>
    </main>
  );
}
