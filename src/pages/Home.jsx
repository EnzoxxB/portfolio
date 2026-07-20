import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  const cvFile =
  i18n.resolvedLanguage === "en"
    ? "/cv/CV_Enzo_Balderrama_EN.pdf"
    : "/cv/CV_Enzo_Balderrama_ES.pdf";

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="
            w-fit
            h-fit
            text-center
            text-white
            mt-4
            mx-auto
            p-8
            space-y-6
            bg-[#0b1725aa]
            rounded-2xl
            shadow-2xl
            border
            border-cyan-400/20
            mb-8
            transition-all
            duration-300
            ">
            <h1 className="text-6xl font-bold mb-4 animate-fade-in animate-blue-glow">{t("home.title")}</h1>
            <p className="text-2xl mb-8 animate-fade-in animate-blue-glow">{t("home.role")}</p>
            <p className="text-lg mb-8 animate-fade-in animate-blue-glow">{t("home.description")}</p>
            <div className="flex space-x-4 animate-fade-in items-center justify-center">
                <Link
                to="/projects"
                className="bg-blue-500/20 hover:bg-blue-700/20 animate-blue-glow text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                {t("home.projects")}
                </Link>
                <a 
                href={cvFile}
                download 
                className="bg-green-500/20 hover:bg-green-700/20 animate-green-glow text-white font-bold py-2 px-4 rounded transition duration-300">{t("home.cv")}</a>
            </div>
        </div>
    </section>
    
  )
}

export default Home;