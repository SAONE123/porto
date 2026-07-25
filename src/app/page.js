import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      <main className="max-w-4xl mx-auto py-20 px-6 lg:px-8 space-y-24">
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-bold tracking-tight">
              Halo, Saya{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Alfian Nurdienansyah Setyobudi
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
              fungsional. Saya mengutamakan kode yang bersih, terdokumentasi
              dengan baik, dan arsitektur yang dapat diskalakan.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://wa.me/6285691941488"
                className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:opacity-90 transition shadow-lg"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 shadow-2xl rounded-2xl overflow-hidden ring-4 ring-white dark:ring-zinc-800">
            <div className="absolute inset-0 bg-zinc-200 animate-pulse dark:bg-zinc-800" />
            <Image
              src="/mypic.png"
              alt="Foto Profil"
              fill
              className="object-cover transition-all duration-500"
              priority
            />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">
            Tentang Saya
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify">
            I am a software developer with experience building modern web
            applications and digital solutions. I enjoy turning ideas into
            applications that are easy to use, reliable, and well-organized. I
            focus on writing clean, maintainable code and creating systems that
            can grow as needed. I have agraduated from Universitas Sultan Ageng
            Tirtayasa with a degree in Agribusiness. During my studies, I joined
            the Kampus Merdeka Program, where I focused on Web Development. This
            experience helped me strengthen my programming skills and gain
            practical experience in software development.I look forward to
            expanding my experience, improving my technical skills, and
            contributing to projects that create value for users.
          </p>
        </section>
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
              "AWS /AZURE",
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

        <section className="space-y-6">
          <h2 className="text-3xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">
            Pendidikan
          </h2>
          <div className="space-y-8">
            {[
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
                  "Membantu mengatur dan memelihara database untuk berbagai proyek, memastikan integritas data dan efisiensi query.",
              },
              {
                role: "Digital Transformation Company (Project)",
                company: "Secret",
                period: "March 2025 - September 2025",
                description:
                  "Mendigitalkan sistem mamagement dan pembiayaan perusahaan dari manual ke digital, termasuk pembuatan aplikasi berbasis web untuk mempermudah proses internal perusahaan.",
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
                file: "/serti/algoritma.pdf",
                image: "/serti/algoritma.png",
              },
              {
                name: "Professional Full Stack Developer",
                issuer: "Kampus Merdeka ",
                date: "2023",
                file: "/serti/Webdev.pdf",
                image: "/serti/Webdev.png",
              },
              {
                name: "CSS Materialize",
                issuer: "Hacktiv8 Indonesia",
                date: "2023",
                file: "/serti/CSS.pdf",
                image: "/serti/CSS.png",
              },
              {
                name: "Document Object Model (DOM)",
                issuer: "Hacktiv8 Indonesia",
                date: "2023",
                file: "/serti/DOM.pdf",
                image: "/serti/DOM.png",
              },
            ].map((cert, index) => (
              <a
                key={index}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center gap-6 p-4 bg-zinc-100 dark:bg-zinc-900/50 rounded-xl border border-transparent hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all hover:shadow-md"
              >
                <div className="relative w-full sm:w-32 h-44 sm:h-20 shrink-0 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white p-1">
                  <Image
                    src={cert.image}
                    alt={`Preview ${cert.name}`}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-zinc-500">{cert.issuer}</p>
                </div>

                <span className="text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-md text-sm self-start sm:self-center">
                  {cert.date}
                </span>
              </a>
            ))}
          </div>
        </section>

        <footer className="pt-20 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Alfian Nurdienansyah Setyobudi</p>
        </footer>
      </main>
    </div>
  );
}
