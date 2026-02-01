import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Technical Skills",
    description: "Autocade, Microsoft Excel, Word, Photoshop, Soil Analysis & Land Preparation, Fertilization & Plant Nutrition Management, Landscape Drawings & Project Specifications Review, Environmental Sustainability Practices.",
  },
  {
    icon: Rocket,
    title: "Landscape Construction & Maintenance",
    description: "Hardscape & Softscape Works Supervision, Irrigation Systems Installation & Maintenance, Turf Management & Planting Techniques, Preventive & Corrective Maintenance Planning, Site Supervision & Quality Assurance.",
  },
  {
    icon: Users,
    title: "Nursery Management & Plant Production",
    description: "Plant Propagation & Cultivation, Nursery Operations & Resource Planning, Pest & Disease Management.",
  },
  {
    icon: Lightbulb,
    title: "Project Management",
    description: "Landscape Project Planning & Execution, Budgeting, Cost Control & Resource Allocation, Coordination with Clients, Consultants.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Landscape Engineer,
              <span className="font-serif italic font-normal text-white"> Construction & Maintenance.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Motivated Landscape Engineer with a Bachelor’s degree in Agriculture (General Division – Al-Azhar University). Experienced in landscape construction, maintenance, and nursery management, with a proven role in delivering
                large-scale projects such as The Crown Compound.
              </p>
              <p>Passionate about developing sustainable green spaces and ensuring high-quality standards in both softscape and hardscape works.</p>
              <p>Soft Skills: Strong Leadership & Decision-Making, Communication & Team Collaboration, Problem Solving & Critical Thinking, Time Management & Multitasking.</p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to engineer outdoor spaces that are not just functional, but truly inspiring — landscapes that clients value and environments that sustain themselves."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
