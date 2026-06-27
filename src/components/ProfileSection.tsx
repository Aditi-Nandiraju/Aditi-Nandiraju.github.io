import SectionHeader from "./SectionHeader";
import profileImg from "../assets/profile_picture.jpeg";

const ProfileSection = () => {
  const profileSrc = profileImg;
  const bio = 
  `AI and web development enthusiast building practical, real-world solutions. From AI-powered tools like an Intelligent Excuse Generator to hackathon projects and research work, I focus on turning ideas into functional products while continuously learning and improving.
Currently exploring AI/ML integration in web apps with React and Node.js.
Open to collaboration and freelance opportunities.`;

  return (
    <section className="mb-16">
      <SectionHeader title="Profile" />
      <div className="glass-card p-8 flex flex-col md:flex-row gap-8 items-start">
        <img
          src={profileSrc}
          alt="Profile photo"
          width={160}
          height={160}
          className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-2 border-primary/30 shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1">Aditi Nandiraju</h3>
          <p className="text-primary font-medium mb-4">Aspiring AIML Engineer</p>
          <textarea
            className="auto-textarea"
            defaultValue={bio}
            rows={1}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
