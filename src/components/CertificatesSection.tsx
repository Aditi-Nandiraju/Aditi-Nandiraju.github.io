import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ImageLightbox from "./ImageLightbox";
import event1 from "../assets/ai_for_everyone.png";
import event2 from "../assets/machine learning with python.png";
import event3 from "../assets/intro_to_db.png";
import event4 from "../assets/os_virtualization.png";
import event5 from "../assets/os_memory_management.png";
import event6 from "../assets/data_warehousing.png";
import event7 from "../assets/algorithmic_thinking.png";
import event8 from "../assets/msml.png";
import event9 from "../assets/ml_statistics.png";
import event10 from "../assets/ml_linear_algebra.png";
import event11 from "../assets/nlp_linkedin.png";
import event12 from "../assets/msml.png";

const certs = [
  {
    title: "AI For Everyone",
    description: "Skills-Machine Learning, Artificial Intelligence, AI Product Strategy, Artificial Neural Networks, Data Ethics, AI Enablement, Data Science, Responsible AI, Deep Learning",
    image: event1,
  },
  {
    title: "Machine Learning with python",
    description: "Unsupervised Learning, Regression Analysis, Decision Tree Learning, Model Evaluation, Python Programming, Applied Machine Learning, Logistic Regression, Classification Algorithms, Dimensionality Reduction, Supervised Learning, Feature Engineering, Predictive Modeling",
    image: event2,
  },
  {
    title: "Introduction to Databases",
    description: "Database Management Systems, MySQL, Database Design, Data Integrity, Query Languages, Data Manipulation, Databases, SQL, Database Administration, Relational Databases",
    image: event3,
  },
  {
    title: "Intro to Operating Systems 1: Virtualization",
    description: "C (Programming Language), Virtualization, OS Process Management, Operating Systems, Application Programming Interface (API), Virtual Machines, System Programming",
    image: event4,
  },
  {
    title: "Intro to Operating Systems 2: Memory Management",
    description: "C (Programming Language), Linux, Virtual Machines, System Programming, Virtualization, Operating Systems, Performance Tuning",
    image: event5,
  },
  {
    title: "Data Warehousing: Schema, ETL, Optimal Performance",
    description: "Snowflake Schema, Data Integration, Database Design, Business Intelligence, Data Management, Extract, Transform, Load, Data Modeling, Data Warehousing, Performance Tuning, Star Schema, Databases, Data Transformation",
    image: event6,
  },
  {
    title: "Foundations of Algorithmic Thinking with Python",
    description: "python, Algorithmic Thinking, Data Structures, Problem Solving, Computational Complexity",
    image: event7,
  },
  {
    title: "Machine Learning Statistical Foundations Professional Certificate by Wolfram Research",
    description: "Wolfram Language,Machine Learning,Linear Algebra",
    image: event8,
  },
  {
    title: "Built-in Machine Learning in the Wolfram Language",
    description: "Wolfram Language,Machine Learning",
    image: event9,
  },
  {
    title: "Machine Learning Foundations: Statistics",
    description: "Statistics,Probability,Data Analysis",
    image: event10,
  },
  {
    title: "Machine Learning Foundations: Linear Algebra",
    description: "Linear Algebra,Matrix Operations,Vector Spaces",
    image: event11,
  },
  {
    title: "Introduction to NLP and LLMs: Principles and Practical Applications",
    description: "Natural Language Processing, Large Language Models, AI Applications, Text Analysis, Machine Learning, Deep Learning, NLP Techniques",
    image: event12,
  },
  
];

const CertificatesSection = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="mb-16">
      <SectionHeader title="Certificates & Courses" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c) => (
          <div key={c.title} className="glass-card overflow-hidden flex flex-col">
            <div className="aspect-[3/4] h-36 w-full bg-muted/10 flex items-center justify-center">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="h-full w-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setLightbox({ src: c.image, alt: c.title })}
              />
            </div>
            <div className="p-6 flex-1">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
            </div>
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

export default CertificatesSection;
