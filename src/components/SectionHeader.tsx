interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <div className="flex items-center mb-8">
    <h2 className="section-title">{title}</h2>
  </div>
);

export default SectionHeader;
