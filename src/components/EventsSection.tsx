import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ImageLightbox from "./ImageLightbox";
import { Calendar } from "lucide-react";
import event1 from "../assets/GRINOVA-WINNER.jpg";
import event2 from "../assets/vibeathon_certificate.jpg";
import event3 from "../assets/Emotion-Aware_Encryption_Hackathon.png";
import event4 from "../assets/Cheat_Better.png";
import event5 from "../assets/clash_code_certificate.jpg";
import event6 from "../assets/hacktherank.jpg";
import event7 from "../assets/reserach_paper_certificate.png";
import event8 from "../assets/attentionx ai hackathon certiicate.jpg";
import event9 from "../assets/Vishwa CTF participation certificate.png";
import event10 from "../assets/AI webforge participation.png";
import event11 from "../assets/Byte battle participation.png";
import event12 from "../assets/tdpcl paper publish certificate.png";
import event13 from "../assets/Xpecto Data science contest.png";
import event14 from "../assets/Decode and display.png";
import event15 from "../assets/ML spark.png";
import event16 from "../assets/code strike certificate.png";

const events = [
  { name: "Grinova Ideathon", 
    description: "Won an ideathon solo in the eldercare domain" ,
    image: event1 },
    
  { name: "Vibeathon", 
    description: "Build, iterate, and deploy real-world solutions under strict time pressure. A test of rapid prototyping, prompt engineering, and full-stack development.",
    image: event2 },

  { name: "Emotion-Aware Encryption Hackathon", 
    description: "Participated in a hackathon focused on developing emotion-aware encryption techniques. Converts the input into a hased code before getting the AI to analyze it. Built using replit.ai   deployed app:https://emotion-encryption--aditin06.replit.app/" ,
    image: event3},

  { name: "Cheat Better", 
    description: "Vibecoding competetion with a focus on frontend development and unexpected challenges",
    image: event4},
  
  { name: "Clash code", 
    description: "ClashCode is a competitive coding contest designed to evaluate participants’ knowledge of Data Structures and Advanced Data Structures through real-time problem-solving challenges.",
    image: event5 },

  { name: "Hack the Rank", 
    description: "Participated in an online coding quiz by hackerrank on unstop",
    image: event6 },
  
  { name: "Research paper publication",
    description: "Published an abstract only paper on the topic-Ethical, legal and social implications of Generative AI in education and business ",
    image: event7 },

  { name: "AttentionX AI Hackathon",
    description: "Participated in a hackathon to develop a system to extract short clips of data from long form videos ",
    image: event8 },

  { name: "Vishwa CTF",
    description: "Jeopardy-style Capture The Flag (CTF) cybersecurity competition organized by CyberCell VIT. Participants solve security challenges across multiple domains to earn points and rank on the live leaderboard",
    image: event9 },

  { name: "AI webforge",
    description: "fast-paced challenge where you’ll design and develop a website to showcase your projects, skills, and achievements",
    image: event10 },

  { name: "Byte Battle",
    description: "The Ultimate Coding Showdown is an exciting competitive coding contest designed to evaluate problem-solving ability, logical thinking, and programming expertise through real-time coding challenges",
    image: event11 },

  { name: "Research paper publication",
    description: "Published a research paper on the topic 'AI enabled predictive monitoring for healthcare and aviation ",
    image: event12 },
  
  { name: "Xpecto- Data science contest",
    description: " Using Altair Rapidminer-data science and machine learning platform that enables users to build, train, and deploy predictive models . It provides tools for data preparation, visualization, and AI-driven analytics. Made a project on the domain Agriculture",
    image: event13 },

  { name: "Decode & Display – Data Visualization Challenge",
    description: "The challenge was to transform raw data into meaningful insights through effective visualizations using a real world dataset",
    image: event14 },

  { name: "ML SPARK – Machine Learning Challenge",
    description: "Machine Learning, Data Analysis, and problem-solving skills through real-world challenges.Build a machine learning model using Python on a given case study",
    image: event15 },

  { name: "CodeStrike",
    description: "Official Coding Championship by ByteBattle Global Community.A premier coding assessment designed to evaluate problem-solving skills, algorithmic thinking, and coding efficiency under real-world constraints",
    image: event16 },
];
const EventsSection = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="mb-16">
      <SectionHeader title="Events" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((e) => (
          <div key={e.name} className="glass-card p-6">
            <img
              src={e.image}
              alt={e.name}
              className="w-full h-40 object-cover rounded-lg mb-4 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setLightbox({ src: e.image, alt: e.name })}
            />
            <div className="flex items-center gap-2 mb-3">
              <Calendar size={18} className="text-primary" />
              <h3 className="text-lg font-heading font-semibold text-foreground">
                {e.name}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {e.description}
            </p>
          </div>
        ))}
      </div>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
};

export default EventsSection;