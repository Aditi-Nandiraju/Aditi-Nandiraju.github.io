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