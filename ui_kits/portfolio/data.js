// Portfolio data — all copy in one place so components stay focused on layout.
window.PORTFOLIO = {
  person: {
    name: "Syed Muhammad Huzaifa",
    title: "AI Engineer · Full-Stack Developer · Automation Specialist",
    location: "Karachi, Pakistan",
    phone: "+92 328 0614092",
    email: "pc19405syedmuhammadhuzaifa@gmail.com",
    github: "https://github.com/SMH125194055",
    linkedin: "https://www.linkedin.com/in/syed-muhammad-huzaifa-903927221/",
    upwork: "https://www.upwork.com/freelancers/~01b65c5891d76aaecc?viewMode=1",
    fiverr: "https://www.fiverr.com/smh125huzaifa/buying?source=avatar_menu_profile",
    resumeUrl: "#",
    tagline:
      "I build production AI systems, SaaS platforms, and automation pipelines.",
    taglineSub:
      "RAG · Agentic AI · Next.js · React Native · FastAPI · Docker.",
    typewriter: [
      "AI Engineer",
      "Full-Stack Developer",
      "RAG & LLM Specialist",
      "Automation Builder",
    ],
  },

  about: {
    p1:
      "I'm an AI Engineer and Full-Stack Developer based in Karachi, Pakistan. I graduated with a BS in Computer Science from FAST NUCES in 2025 (Dean's List) and have hands-on experience delivering production AI systems, SaaS platforms, and automation pipelines — currently building agentic AI, LLM-powered chatbots, and workflow automation at a technology company, after a year as AI Applied Research Engineer at QLU.ai.",
    p2:
      "I don't just build models — I ship complete products. From autonomous lead generation platforms processing thousands of prospects daily with GPT-4o, to multi-tenant AI chatbot SaaS platforms with pgvector RAG knowledge bases and Stripe billing, I own the full stack: AI model → FastAPI service → React frontend → Docker deployment → CI/CD pipeline.",
    p3:
      "I'm also a published researcher — my paper on multi-stream perceptual audio similarity for voice clone detection was accepted at AIRC (2025), achieving 23.5% improvement in Pearson correlation (0.5909) over baseline pooling methods. I've placed 3rd in two national AI competitions — Procom CV (sonography segmentation) and PaysysLab AI (YOLO v11 biometric fingerprint extraction).",
    stats: [
      { value: 15, suffix: "+", label: "Projects shipped",   accent: "var(--accent)" },
      { value: 2,  suffix: "",  label: "Competition podiums", accent: "var(--gold)" },
      { value: 819, suffix: "+", label: "GitHub commits",     accent: "var(--infra)" },
      { value: 1,  suffix: "",  label: "Published paper",     accent: "var(--ai)" },
    ],
  },

  skills: [
    { row: "AI / ML",            cat: "ai",          items: ["PyTorch","TensorFlow","LangChain","LangGraph","OpenAI","Claude","Gemini","Hugging Face","QLoRA","RAG","pgvector","YOLO","Whisper","Agentic AI"] },
    { row: "Backend",            cat: "backend",     items: ["Python","FastAPI","Node.js","Fastify","Express","PHP","Cloudflare Workers","BullMQ","Redis","REST APIs","WebSockets","SSE","Nginx"] },
    { row: "Frontend & Mobile",  cat: "frontend",    items: ["React 18","Next.js 14","Vite","TypeScript","JavaScript","React Native","Expo","Tailwind CSS","shadcn-ui","Framer Motion","Vue.js 3"] },
    { row: "Databases & Infra",  cat: "infra",       items: ["PostgreSQL","pgvector","Redis 7","MongoDB","MySQL","SQLite","Supabase","Firebase","Docker","AWS EC2","Vercel","GitHub Actions","CI/CD"] },
    { row: "Integrations",       cat: "integration", items: ["HubSpot","Stripe","Booqable","WhatsApp Web.js","Apollo.io","Apify","EverWebinar","Playwright","Prometheus"] },
  ],

  featured: [
    {
      glyph: "🤖",
      title: "AI Lead Automation Workflow",
      tags: [
        ["TypeScript","frontend"], ["Next.js 14","frontend"], ["PostgreSQL","infra"],
        ["Redis","infra"], ["BullMQ","backend"], ["Docker","infra"],
        ["GPT-4o","ai"], ["Apify","integration"],
      ],
      desc: "Fully autonomous 24/7 lead outreach system. Scrapes prospects from Apollo.io via Apify, generates individually personalized cold emails using GPT-4o with company and role context, delivers through a BullMQ Redis job queue with retry logic, and monitors inbound replies with AI sentiment analysis to surface hot leads instantly. Real-time Next.js 14 + Recharts dashboard shows pipeline health, reply rates, and lead status live. One-command Docker Compose setup.",
      metrics: ["⚡ 1,000+ emails/day", "🎯 AI sentiment classification", "📊 Real-time dashboard"],
      github: "#", demo: "#", accent: "ai",
    },
    {
      glyph: "💬",
      title: "Chatty Bot — Multi-Tenant AI Chatbot SaaS",
      tags: [
        ["React 18","frontend"], ["Vite","frontend"], ["Fastify","backend"],
        ["PostgreSQL","infra"], ["pgvector","ai"], ["Redis","infra"],
        ["BullMQ","backend"], ["Stripe","integration"], ["Docker","infra"],
      ],
      desc: "Production-ready multi-tenant SaaS platform where businesses deploy branded AI chatbots on their websites in minutes. Each tenant gets a fully isolated pgvector RAG knowledge base, Stripe billing, per-tenant quota enforcement, and an embeddable widget.js — one script tag, any website. Includes a super-admin panel with tenant impersonation, Bull Board queue monitoring, Playwright E2E tests, and Prometheus health checks.",
      metrics: ["🏢 Multi-tenant", "🧠 RAG knowledge base", "💳 Stripe billing", "🔌 Embeddable widget"],
      github: "#", accent: "frontend",
    },
    {
      glyph: "🚀",
      title: "FireStx — Golf Club Rental Platform",
      tags: [
        ["React","frontend"], ["Vite","frontend"], ["Node.js","backend"],
        ["MongoDB","infra"], ["Docker","infra"], ["AWS EC2","infra"],
        ["Vercel","infra"], ["CI/CD","infra"],
      ],
      desc: "Full-stack golf club rental booking platform with an 8-step guided rental wizard, real-time Booqable inventory management, JWT authentication, and saved club 'bag' favourites. Frontend deployed on Vercel, backend on AWS EC2, with complete Bitbucket Pipelines CI/CD covering test and production environments. Nginx reverse proxy, Docker Compose, MongoDB.",
      metrics: ["☁️ Vercel + AWS", "🔄 Full CI/CD", "📦 Real-time inventory", "🔐 JWT Auth"],
      github: "#", accent: "infra",
    },
  ],

  grid: [
    { glyph: "🌐", title: "WordPress AI Chatbot + HubSpot CRM", tags:[["Claude API","ai"],["Cloudflare Workers","backend"],["WordPress","integration"],["HubSpot","integration"]],
      desc: "Claude-powered chatbot on Cloudflare Workers embedded in WordPress. Captures qualified leads into HubSpot CRM. CORS security, rate limiting, mobile-responsive UI.", github: "#", accent: "ai" },
    { glyph: "🎯", title: "EverWebinar AI Bot", tags:[["Python","backend"],["Playwright","integration"],["Claude","ai"],["Docker","infra"],["AWS EC2","infra"]],
      desc: "Python + Playwright bot joining live webinar sessions, classifying 50+ attendee intent categories via Claude few-shot learning, responding with contextual cooldowns.", github: "#", accent: "ai" },
    { glyph: "📱", title: "WhatsApp Business Platform", tags:[["React","frontend"],["Vite","frontend"],["Express","backend"],["SQLite","infra"],["whatsapp-web.js","integration"]],
      desc: "Full-stack dashboard combining real-time WhatsApp management (QR-based), invoice creation, and revenue analytics — all in one app.", github: "#", accent: "frontend" },
    { glyph: "📧", title: "Email Automation Service", tags:[["Python","backend"],["OpenAI GPT","ai"],["Gmail IMAP","integration"],["SMTP","integration"],["SQLite","infra"]],
      desc: "Multi-account Gmail watcher with domain allowlist filtering, AI-powered replies per business profile, and SQLite deduplication.", github: "#", accent: "integration" },
    { glyph: "🩺", title: "AI Diabetic Foot Ulcer App (FYP)", tags:[["React Native","frontend"],["FastAPI","backend"],["PyTorch","ai"],["Supabase","infra"]],
      desc: "React Native app with deep learning DFU staging, heatmap visualization, and similar-case retrieval. Addresses Pakistan's high DFU amputation rate.", github: "#", accent: "ai" },
    { glyph: "🎥", title: "Video Anomaly Detection — UCF-Crime", tags:[["PyTorch","ai"],["CNN-LSTM","ai"],["Computer Vision","ai"],["TPU","infra"]],
      desc: "Hybrid CNN-LSTM with attention mechanism — 74.8% accuracy across 14 anomaly classes. 40% faster training via TPU acceleration. Triplet loss embeddings.", github: "#", accent: "ai" },
    { glyph: "🛒", title: "AK Center E-Commerce Platform", tags:[["PHP","backend"],["Laravel 10","backend"],["Vue.js 3","frontend"],["Firebase","infra"],["MySQL","infra"]],
      desc: "Full-stack e-commerce with Vue.js 3 SPA, Laravel 10 admin panel, AI product chatbot widget, barcode/QR generation, PDF exports.", github: "#", accent: "backend" },
    { glyph: "🖐️", title: "Fingerprint Extraction — PaysysLab 3rd Place", tags:[["YOLO v11","ai"],["OpenCV","ai"],["Python","backend"],["Biometrics","ai"]],
      desc: "YOLO v11 pipeline for fingertip detection and biometric fingerprint extraction. 3rd place in PaysysLab national AI competition.", github: "#", accent: "ai" },
    { glyph: "🏥", title: "Sonography Segmentation — Procom 3rd Place", tags:[["PyTorch","ai"],["Image Segmentation","ai"],["Medical Imaging","ai"]],
      desc: "Deep learning segmentation for post-surgery pain management using sonography images. 3rd place in Procom Computer Vision Competition.", github: "#", accent: "ai" },
    { glyph: "📸", title: "PASCAL VOC 2007 Object Detection", tags:[["TensorFlow","ai"],["MobileNetV2","ai"],["Transfer Learning","ai"]],
      desc: "Multi-task learning with MobileNetV2 backbone — 70% classification accuracy, 0.75 mIoU with focal loss for class imbalance.", github: "#", accent: "ai" },
  ],

  experience: [
    {
      glyph: "🏢",
      title: "AI & Full-Stack Developer",
      org: "Technology Company",
      meta: "Mar 2026 – Present · Karachi, Pakistan",
      current: true,
      desc: "Building production AI systems, SaaS platforms, and automation tools. Key projects: AI Lead Automation (Next.js + BullMQ + GPT-4o), Chatty Bot SaaS (pgvector + Stripe), WordPress AI Chatbots (Cloudflare Workers + HubSpot), FireStx (AWS + CI/CD).",
      tags: [["TypeScript","frontend"],["Next.js","frontend"],["React","frontend"],["Python","backend"],["FastAPI","backend"],["PostgreSQL","infra"],["Redis","infra"],["Docker","infra"],["AWS","infra"],["Claude API","ai"]],
    },
    {
      glyph: "🔬",
      title: "AI Applied Research Engineer",
      org: "QLU.ai",
      meta: "Aug 2025 – Feb 2026",
      desc: "Built Perplexity-style agentic search (Gemini 2.5 Flash + Serper), fine-tuned QLoRA ranking models, real-time voice cloning (Chatterbox + Silero VAD + Whisper ~5s), co-authored AIRC research paper (23.5% improvement in Pearson correlation).",
      tags: [["QLoRA","ai"],["LangGraph","ai"],["Gemini","ai"],["Whisper","ai"],["PyTorch","ai"],["RAG","ai"]],
    },
    {
      glyph: "💻",
      title: "Junior Full-Stack Developer",
      org: "Alahdeen",
      meta: "Jun 2025 – Aug 2025",
      desc: "Built product filtering, company pages, review system, and ACL admin portal. React + PHP + MySQL + Hostinger.",
      tags: [["React","frontend"],["PHP","backend"],["MySQL","infra"]],
    },
    {
      glyph: "🤝",
      title: "Software Engineer Fellow",
      org: "HeadStarter AI",
      meta: "Jul 2024 – Sep 2024",
      desc: "Built a production RAG-powered chatbot, Pantry Tracker web app, and AI-powered portfolio — shipped across the 7-week fellowship.",
      tags: [["RAG","ai"],["React","frontend"]],
    },
    {
      glyph: "🧪",
      title: "Machine Learning Intern",
      org: "InternCareer",
      meta: "Aug 2024 – Sep 2024 · Remote",
      desc: "Developed and evaluated machine learning models as part of a 2-month remote internship program.",
      tags: [["PyTorch","ai"],["Python","backend"]],
    },
    {
      glyph: "🎓",
      title: "BS Computer Science",
      org: "FAST NUCES Karachi",
      meta: "Aug 2021 – Jun 2025 · Dean's List",
      desc: "Deep Learning · Computer Vision · AI · Data Science · Information Retrieval · DevOps · Software Engineering.",
      tags: [],
    },
  ],

  achievements: [
    {
      glyph: "📄", tone: "gold",
      title: "Published Researcher",
      subtitle: "Multi-stream Perceptual Audio Similarity for Voice Clone Detection",
      where: "Accepted at AIRC, 2025",
      desc: "Engineered Multiscale Temporal Fusion architecture — 23.5% improvement in Pearson correlation (0.5909) over baseline pooling methods.",
      badge: "AIRC 2025",
    },
    {
      glyph: "🥉", tone: "bronze",
      title: "3rd Place — Procom Computer Vision Competition",
      subtitle: "FAST NUCES National Competition",
      desc: "Built deep learning segmentation model for post-surgery pain management using sonography images.",
      badge: "Computer Vision · Medical Imaging",
    },
    {
      glyph: "🥉", tone: "bronze",
      title: "3rd Place — PaysysLab AI Competition",
      subtitle: "National AI Competition",
      desc: "Developed YOLO v11 fingertip detection and biometric fingerprint extraction pipeline from palm images.",
      badge: "Biometrics · YOLO v11",
    },
    {
      glyph: "🎓", tone: "silver",
      title: "Dean's List",
      subtitle: "FAST NUCES — BS Computer Science",
      desc: "Academic excellence recognition for outstanding performance across Computer Science courses.",
      badge: "FAST NUCES · 2025",
    },
  ],

  certs: [
    "Docker Training Course for the Absolute Beginner",
  ],

  languages: [
    { name: "English", level: "Professional Working" },
    { name: "Urdu",    level: "Native" },
  ],
};
