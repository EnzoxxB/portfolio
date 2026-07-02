import ProjectTechBe from "../components/ProjectTechBeStore";
import ProjectWoWelbe from "../components/ProjectWoWelbe";

const Projects = () => {
  return (
    <section className="flex flex-col min-h-screen px-8 py-6">
        <a href="/" className="inline-flex items-center gap-2 text-lg animate-blue-glow font-extrabold text-white rounded transition duration-300">
            ← Volver
        </a>
        <div className="
            w-fit
            h-fit
            justify-center
            items-center
            self-center
            text-center
            text-white
            mt-4
            mx-auto
            p-8
            space-y-6
            bg-[#000914a4]
            backdrop-blur-xs
            rounded-2xl
            shadow-2xl
            border
            border-cyan-400/20
            mb-8
            transition-all
            duration-300
            ">
            <ProjectWoWelbe/>
            <ProjectTechBe/>
        </div>
    </section>
  )
}

export default Projects;