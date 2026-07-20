import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
        <div className="fixed top-6 right-6 z-50">
          <div className="flex overflow-hidden rounded-xl border border-cyan-400/20 bg-[#0b1725cc] backdrop-blur-md shadow-lg">

            <button
              onClick={() => i18n.changeLanguage("es")}
              className={`px-4 py-2 font-semibold transition ${
                i18n.language.startsWith("es")
                  ? "bg-cyan-500/50 text-white"
                  : "text-gray-300 hover:bg-cyan-500/20"
              }`}
            >
              ES
            </button>

            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`px-4 py-2 font-semibold transition ${
                i18n.language.startsWith("en")
                  ? "bg-cyan-500/50 text-white"
                  : "text-gray-300 hover:bg-cyan-500/20"
              }`}
            >
              EN
            </button>

          </div>
        </div>
  );
}