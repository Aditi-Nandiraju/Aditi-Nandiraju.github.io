import SectionHeader from "./SectionHeader";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Spendwise- an expense tracker",
    description: "Full stack app for the user to enter their expenses and track their spending",
    github: "https://github.com/Aditi-Nandiraju/expense_tracker-v2-with-database",
    demo: "expense-tracker-mongodb.netlify.app",
  },
  {
    title: "LinkTrack",
    description: "LinkTrack is a secure web application that transforms long URLs into manageable short links-set click limits, toggle link availability, and update destination URLs in real-time",
    github: "https://github.com/Aditi-Nandiraju/link-buddy",
  },
  {
    title: "CurioBuddy- a learning app",
    description: "guided science learning web app for kids. Students follow a roadmap through topics, watching curated YouTube videos and answering AI-graded comprehension questions in real time.",
    github: "https://github.com/Aditi-Nandiraju/Curiobuddy_learning_app",
    demo:"https://curio-buddy-learning-app.netlify.app/"
  },
  {
    title: "Stylometry app to identify author of a text",
    description: "implements an authorship verification system using stylometric analysis and machine learning. Given two input texts, the system predicts whether they were written by the same author or by different authors",
    github: "https://github.com/Aditi-Nandiraju/NLP_stylometry_author",
    demo:"nlpstylometry.streamlit.app/"
  },
  {
    title: "Automatic face detection and blurring using CV",
    description: "Blur a specific person's face in a video. Select them by clicking their face — the tool tracks and blurs only that person through the entire clip, leaving everyone else untouched.",
    github: "https://github.com/Aditi-Nandiraju/automatic-facelur-using-CV",
  },
  {
    title: "Emotion encrypt",
    description: "An AI-powered web app that detects the emotion in your message using a real transformer model, then encrypts the text with AES-256 — so feelings stay visible, but words stay private.",
    github:"https://github.com/Aditi-Nandiraju/emotion-encrypt",
    demo:"https://emotion-encryption.netlify.app/"
  },
  {
    title: "AI clip extracter",
    description: "Turning 60-minute knowledge into 60-second impact.Mentors and educators create hours of valuable content—but today’s audience consumes it in short, engaging bursts. An Automated Content Repurposing Engine that transforms long-form videos into bite-sized, viral-ready clips.",
    github: "https://github.com/Aditi-Nandiraju/AttentionAI-",
  },
  {
    title: "Idea Organizer",
    description: "A simple web app to jot down and organize your ideas. It features a clean interface for adding, editing, and categorizing ideas, making it easy to keep track of your creative thoughts. Built with React and localStorage for data persistence.",
    github: "https://github.com/Aditi-Nandiraju/idea_organizer",
    demo: "https://idea-organizer.netlify.app/"
  },
  
];

const ProjectsSection = () => (
  <section className="mb-16">
    <SectionHeader title="Projects" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <div key={p.title} className="glass-card flex flex-col">
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
            <div className="flex gap-3">
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors">
                <Github size={16} /> GitHub
              </a>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
