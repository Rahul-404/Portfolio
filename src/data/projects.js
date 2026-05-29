export const projects = [
  {
    id: "aws-mlops-pipeline",
    title: "End-to-End MLOps with CI/CD on AWS",
    category: "ml", // Lowercase keys to match filter buttons
    badgeText: "ML",
    description: "Automated ML pipeline with CI/CD, model training, evaluation, registry, and deployment using AWS services.",
    tags: ["AWS", "SageMaker", "ECR", "Docker", "GitHub Actions"],
    theme: {
      accentColor: "#a855f7", // Purple
      glowBg: "rgba(168,85,247,0.15)",
      badgeClass: "bg-purple-500/10 text-purple-400 border-purple-500/30 group-hover:border-purple-400/60 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]",
      textHoverClass: "group-hover:text-purple-400",
      iconHoverClass: "hover:text-purple-400",
      primaryBtnClass: "bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border-purple-500/20"
    },
    links: {
      demoType: "live", // Options: 'live', 'video', 'none'
      demoUrl: "#",
      sourceUrl: "#",
      caseStudyUrl: "#",
      archModalId: "rag-arch-modal"
    }
  },
  {
    id: "aws-mlops-ci-cd",
    title: "End-to-End MLOps with CI/CD on AWS",
    category: "mlops",
    badgeText: "MLOps",
    description: "Automated ML pipeline with CI/CD, model training, evaluation, registry, and deployment using AWS services.",
    tags: ["AWS", "SageMaker", "ECR", "Docker", "GitHub Actions"],
    theme: {
      accentColor: "#6366f1", // Indigo
      glowBg: "rgba(99,102,241,0.12)",
      badgeClass: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30 group-hover:border-indigo-400/60 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]",
      textHoverClass: "group-hover:text-indigo-400",
      iconHoverClass: "hover:text-indigo-400",
      primaryBtnClass: "bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border-indigo-500/20"
    },
    links: {
      demoType: "live",
      demoUrl: "#",
      sourceUrl: "#",
      caseStudyUrl: "#",
      archModalId: "rag-arch-modal"
    }
  },
  {
    id: "rag-chatbot-nlp",
    title: "RAG Chatbot System",
    category: "nlp",
    badgeText: "NLP",
    description: "Retrieval augmented generation system with vector DB and FastAPI backend.",
    tags: ["LangChain", "FAISS", "FastAPI"],
    theme: {
      accentColor: "#10b981", // Emerald
      glowBg: "rgba(16,185,129,0.12)",
      badgeClass: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 group-hover:border-emerald-400/60 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]",
      textHoverClass: "group-hover:text-emerald-400",
      iconHoverClass: "hover:text-emerald-400",
      primaryBtnClass: "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/20"
    },
    links: {
      demoType: "live",
      demoUrl: "#",
      sourceUrl: "#",
      caseStudyUrl: "#",
      archModalId: "rag-arch-modal"
    }
  },
  {
    id: "rag-chatbot-genai",
    title: "RAG Chatbot System",
    category: "genai",
    badgeText: "GenAI",
    description: "Retrieval augmented generation system with vector DB and FastAPI backend.",
    tags: ["LangChain", "FAISS", "FastAPI"],
    theme: {
      accentColor: "#f59e0b", // Amber
      glowBg: "rgba(245,158,11,0.12)",
      badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/30 group-hover:border-amber-400/60 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.35)]",
      textHoverClass: "group-hover:text-amber-400",
      iconHoverClass: "hover:text-amber-400",
      primaryBtnClass: "bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border-amber-500/20"
    },
    links: {
      demoType: "live",
      demoUrl: "#",
      sourceUrl: "#",
      caseStudyUrl: "#",
      archModalId: "rag-arch-modal"
    }
  },
  {
    id: "rag-data-engineering",
    title: "RAG Chatbot System",
    category: "dataeng",
    badgeText: "Data Engineering",
    description: "Retrieval augmented generation system with vector DB and FastAPI backend.",
    tags: ["LangChain", "FAISS", "FastAPI"],
    theme: {
      accentColor: "#f97316", // Orange
      glowBg: "rgba(249,115,22,0.11)",
      badgeClass: "bg-orange-500/10 text-orange-400 border-orange-500/30 group-hover:border-orange-400/60 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]",
      textHoverClass: "group-hover:text-orange-400",
      iconHoverClass: "hover:text-orange-400",
      primaryBtnClass: "bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/20" // Specialized Blue button requested in your code
    },
    links: {
      demoType: "video", // Triggers video SVG icon logic cleanly
      demoUrl: "YOUR_VIDEO_LINK",
      sourceUrl: "#",
      caseStudyUrl: "#",
      archModalId: "rag-arch-modal"
    }
  },
  {
    id: "rag-mlops-docs",
    title: "RAG Chatbot System",
    category: "mlops",
    badgeText: "MLOps",
    description: "Retrieval augmented generation system with vector DB and FastAPI backend.",
    tags: ["LangChain", "FAISS", "FastAPI"],
    theme: {
      accentColor: "#e11d48", // Rose
      glowBg: "rgba(225,29,72,0.11)",
      badgeClass: "bg-rose-500/10 text-rose-400 border-rose-500/30 group-hover:border-purple-400/60 group-hover:shadow-[0_0_20px_rgba(225,29,72,0.35)]",
      textHoverClass: "group-hover:text-rose-400",
      iconHoverClass: "hover:text-rose-400",
      primaryBtnClass: "bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border-rose-500/20"
    },
    links: {
      demoType: "docs", // Triggers multi-button logic setup: Live Demo AND API Docs!
      demoUrl: "#",
      docsUrl: "YOUR_DOCS_LINK",
      sourceUrl: "#",
      caseStudyUrl: "#",
      archModalId: "rag-arch-modal"
    }
  }
];