import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
   {
    id: 1,
    title: "Mohamed Portfolio",
    description: "A beautiful Portfolio page app using HTML&CSS and React , tailwind.",
    image: "/projects/mp.png",
    tags: ["Html", "React", "Css","tailwind"],
    demoUrl: "https://mohamedmontaser.vercel.app/",
    githubUrl: "https://github.com/MohamedMonto/Portfolio",
    category: "React"
  },
  {
    id: 2,
    title: "Barbar-Shop-Website-Design",
    description: "A beautiful landing page app using HTML&CSS and bootstrap.",
    image: "/projects/project1.png",
    tags: ["Html", "Bootstrap", "Css"],
    demoUrl: "https://barbar-shop-website-design-eight.vercel.app/",
    githubUrl: "https://github.com/MohamedMonto/Barbar-Shop-Website-Design",
    category: "HTML & CSS"
  },
  {
    id: 3,
    title: "Daniels  Portfolio ",
    description:
      "A beautiful Portfolio landing page app using HTML&CSS and bootstrap.",
    image: "/projects/project2.png",
    tags: ["Html", "Bootstrap", "Css"],
    demoUrl: "https://daniels-kappa.vercel.app/",
    githubUrl: "https://github.com/MohamedMonto/Daniels",
    category: "HTML & CSS"
  },
  {
    id: 4,
    title: "Healthy Food",
    description:
      "ed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.",
    image: "/projects/project3.png",
    tags: ["Html", "Bootstrap", "Css"],
    demoUrl: "https://mealify-zeta.vercel.app/",
    githubUrl: "https://github.com/MohamedMonto/Mealify",
    category: "HTML & CSS"
  },
    {
    id: 5,
    title: "Bulid-Con",
    description:
      "Your Dream House We Provide Best Quality Services Ever",
    image: "/projects/project4.png",
    tags: ["Html", "Bootstrap", "Css"],
    demoUrl: "https://bulid-con.vercel.app/",
    githubUrl: "https://github.com/MohamedMonto/BulidCon",
    category: "HTML & CSS"
  },
    {
    id: 6,
    title: "DevFolio Portfolio ",
    description:
      "A beautiful Portfolio landing page app using HTML&CSS and bootstrap.",
    image: "/projects/project5.png",
    tags: ["Html", "Bootstrap", "Css"],
    demoUrl: "https://dev-folio-plum.vercel.app/",
    githubUrl: "https://github.com/MohamedMonto/DevFolio",
    category: "HTML & CSS"
  },
    {
    id: 7,
    title: "Mohamed Portfolio",
    description:
      "A beautiful Portfolio landing page app using HTML&CSS and bootstrap.",
    image: "/projects/project6.png",
    tags: ["Html", "Bootstrap", "Css"],
    demoUrl: "https://fokir-sigma.vercel.app/",
    githubUrl: "https://github.com/MohamedMonto/Fokir",
    category: "HTML & CSS"
  },
    {
    id: 8,
    title: "Bookmarker",
    description:
      "Full-featured Bookmark your favorite sites  with user authentication and payment processing.",
    image: "/projects/project7.png",
    tags: ["React", "Html", "Css"],
    demoUrl: "https://bookmarker-dusky.vercel.app/",
    githubUrl: "https://github.com/MohamedMonto/Bookmarker",
    category: "React"
  },

];

const categories = ["all", "React", "HTML & CSS"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full cursor-pointer transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/MohamedMonto"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
