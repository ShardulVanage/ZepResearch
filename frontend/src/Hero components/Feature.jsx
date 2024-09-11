import { cn } from "../lib/utils";
import {
  IconAffiliate,
  IconAd,
  IconTournament,
  IconNotebook,
  IconTrendingUp,
  IconPictureInPicture,
  IconScript,
  IconPodium,
} from "@tabler/icons-react";

export function Features() {
  const features = [
    {
      title: "Conferences & Webinars",
      description:
        "Expertly organized events that connect academics and foster meaningful interactions.",
      icon: <IconPodium />,
    },
    {
      title: "Journals & Publications",
      description:
        "Diverse platforms for showcasing research, advancing knowledge, and academic visibility.",
      icon: <IconNotebook />,
    },
    {
      title: "Peer Review Management",
      description:
        "Streamlined process connecting researchers with reviewers for quality feedback.",
      icon: <IconTournament />,
    },
    {
      title: "Event Promotion & Marketing",
      description: "Strategic strategies to enhance event visibility and attract broad participation",
      icon: <IconAd />,
    },
    {
      title: "Manuscript Preparation",
      description: "Professional assistance in formatting and refining manuscripts for successful publication.",
      icon: <IconScript />,
    },
    {
      title: "Online Courses",
      description:
        "High-quality courses designed to enhance skills and knowledge in research.",
      icon: <IconPictureInPicture />,
    },
    {
      title: "Networking & Collaboration",
      description:
        "Opportunities to connect with global academics for collaborative projects and growth.",
      icon: <IconAffiliate />,
    },
    {
      title: "Research Training & Workshops",
      description: "Specialized sessions to build expertise in research methods and academic writing.",
      icon: <IconTrendingUp />,
    },
  ];
  return (
    (
    <>
    <div className="pt-12">
    <h1 className="  font-bold tracking-tight  drop-shadow-md text-3xl md:text-4xl lg:text-5xl text-center mt-12 font-JosefinSans">Comprehensive Services We Offer</h1>
           <p className='py-2 drop-shadow-md text-base md:text-xl font-PTSerif'>Your One-Stop Hub for Academic Excellence and Innovation</p>
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
      </ div>
      </>
    )
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    (<div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>)
  );
};
