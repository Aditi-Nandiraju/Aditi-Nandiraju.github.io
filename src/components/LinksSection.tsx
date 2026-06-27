import SectionHeader from "./SectionHeader";

const LinksSection = () => {
  const links = [
    { label: "GitHub", url: "https://github.com/Aditi-Nandiraju" },
    { label: "LeetCode", url: "https://leetcode.com/u/_Aditi________/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/aditi-nandiraju-402940322/" },
    { label: "HackerRank", url: "https://www.hackerrank.com/profile/aditi_nandiraju" },
    { label: "Devpost", url: "https://devpost.com/aditi-nandiraju2?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" },
  ];

  return (
    <section className="mb-16">
      <SectionHeader title="Links" />
      <div className="glass-card p-8">
        <ul className="font-mono text-sm leading-relaxed space-y-2">
          {links.map(({ label, url }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
              >
                {url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LinksSection;
