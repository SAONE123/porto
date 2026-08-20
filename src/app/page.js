"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [displayName, setDisplayName] = useState("");
  const fullName = "Alfian Nurdienansyah Setyobudi";

  useEffect(() => {
    if (activeSection === "home") {
      setDisplayName("");
      let i = 0;
      const interval = setInterval(() => {
        if (i < fullName.length) {
          setDisplayName((prev) => fullName.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-5xl font-bold tracking-tight">
                Halo, Saya{" "}
                <span className="text-blue-600 dark:text-blue-400 inline-block min-h-[1.2em]">
                  {displayName}
                  <span className="inline-block w-[3px] h-[0.8em] bg-blue-600 dark:bg-blue-400 ml-1 animate-pulse" />
                </span>
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Software Engineer | Web Developer | Database Management | Cloud
                Infrastructure
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Saya adalah seorang profesional pengembangan perangkat lunak
                dengan fokus pada ekosistem modern. Saya memiliki pengalaman dalam
                mengubah ide kompleks menjadi solusi digital yang elegan dan
                fungsional.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <button
                  onClick={() => setActiveSection("experience")}
                  className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:opacity-90 transition shadow-lg"
                >
                  Lihat Pengalaman
                </button>
              </div>
            </div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 shadow-2xl rounded-2xl overflow-hidden ring-4 ring-white dark:ring-zinc-800">
              <Image
                src="/mypic.png"
                alt="Foto Profil"
                fill
                className="object-cover"
                priority
              />
            </div>
          </section>
        );
      case "bio":
        return (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">
              Tentang Saya
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify">
              I am a software developer with experience building modern web
              applications and digital solutions. I enjoy turning ideas into
              applications that are easy to use, reliable, and well-organized. I
              focus on writing clean, maintainable code and creating systems that
              can grow as needed. I have graduated from Universitas Sultan Ageng
              Tirtayasa with a degree in Agribusiness. During my studies, I joined
              the Kampus Merdeka Program, where I focused on Web Development. This
              experience helped me strengthen my programming skills and gain
              practical experience in software development.
            </p>
          </section>
        );
      case "skills":
        return (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">
              Bidang yang Dikuasai
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "React / Next.js",
                "Node.js",
                "TypeScript",
                "Tailwind CSS",
                "PostgreSQL",
                "MongoDB",
                "MySQL",
                "Cloud Infrastructure",
                "API Design",
                "UI/UX Development",
                "NoSQL Databases",
                "AWS / AZURE",
                "React Native",
                "Web Optimization",
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center font-medium shadow-sm hover:border-blue-500 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        );
      case "education":
        return (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">
              Pendidikan
            </h2>
            <div className="space-y-8">
              {[
                {
                  school: "SMA PERMATA INSANI ISLAMIC SCHOOL",
                  degree: "SMA",
                  period: "2017 — 2019",
                },
                {
                  school: "UNIVERSITAS SULTAN AGENG TIRTAYASA",
                  degree: "Sarjana AGRIBISNIS",
                  period: "2020 — 2024",
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:justify-between gap-2"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                      {edu.school}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="text-zinc-500 font-medium italic">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </section>
        );
      case "experience":
        return (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">
              Pengalaman Kerja
            </h2>
            <div className="space-y-8">
              {[
                {
                  role: "Software Developer (Freelance/Project)",
                  company: "Self-Employed",
                  period: "2022 — Sekarang",
                  description:
                    "Mengembangkan berbagai aplikasi web menggunakan React dan Next.js. Fokus pada optimasi performa dan integrasi API pihak ketiga untuk meningkatkan pengalaman pengguna.",
                },
                {
                  role: "Database Management (Freelance)",
                  company: "Infinityfree Hosting",
                  period: "February 2024 - May 2024",
                  description:
                    "Membantu mengatur dan memelihara database untuk berbagai proyek, memastikan integritas data and efisiensi query.",
                },
                {
                  role: "Digital Transformation Company (Project)",
                  company: "Secret",
                  period: "March 2025 - September 2025",
                  description:
                    "Mendigitalkan sistem management dan pembiayaan perusahaan dari manual ke digital.",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:justify-between gap-2"
                >
                  <div className="max-w-2xl">
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                      {job.role}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg font-medium">
                      {job.company}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed text-justify">
                      {job.description}
                    </p>
                  </div>
                  <span className="text-zinc-500 font-medium italic">
                    {job.period}
                  </span>
                </div>
              ))}
            </div>
          </section>
        );
      case "certificates":
        return (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">
              Sertifikat
            </h2>
            <div className="grid gap-4">
              {[
                {
                  name: "ALGORITMA TINGKAT LANJUT",
                  issuer: "Hacktiv8 Indonesia",
                  date: "2023",
                  image: "/serti/algoritma.png",
                },
                {
                  name: "Professional Full Stack Developer",
                  issuer: "Kampus Merdeka ",
                  date: "2023",
                  image: "/serti/Webdev.png",
                },
                {
                  name: "CSS Materialize",
                  issuer: "Hacktiv8 Indonesia",
                  date: "2023",
                  image: "/serti/CSS.png",
                },
                {
                  name: "Document Object Model (DOM)",
                  issuer: "Hacktiv8 Indonesia",
                  date: "2023",
                  image: "/serti/DOM.png",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="group flex flex-col sm:flex-row sm:items-center gap-6 p-4 bg-zinc-100 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 transition-all"
                >
                  <div className="relative w-full sm:w-32 h-20 shrink-0 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white p-1">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{cert.name}</h3>
                    <p className="text-zinc-500">{cert.issuer}</p>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-md text-sm">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </section>
        );
      case "projects":
        return (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">
              Proyek Pilihan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "DSHR - Payroll & HR Management",
                  description: "A comprehensive platform for managing payroll and human resources, featuring automated calculations and employee management.",
                  tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
                  link: "https://dshr.my.id/",
                },
                {
                  title: "Portfolio Website",
                  description: "Personal portfolio website built with Next.js and Tailwind CSS.",
                  tech: ["Next.js", "Tailwind CSS"],
                  link: "#",
                },
                {
                  title: "E-Commerce System",
                  description: "Modern e-commerce platform with full checkout flow.",
                  tech: ["React", "Node.js", "PostgreSQL"],
                  link: "#",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-blue-500 transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Lihat Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 overflow-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-1 overflow-y-auto p-6 lg:p-8 mt-16 no-scrollbar">
        <div className="max-w-4xl mx-auto min-h-full flex items-center justify-center py-12">
          <div className="w-full">
            {renderSection()}
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Alfian Nurdienansyah Setyobudi</p>
      </footer>
    </div>
  );
}
