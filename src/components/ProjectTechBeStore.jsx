import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useTranslation } from "react-i18next";

const images = [
    "/images/projects/techbestore/home.png",
    "/images/projects/techbestore/invalidLicense.png",
    "/images/projects/techbestore/addProduct.png",
    "/images/projects/techbestore/addProductImport.png",
    "/images/projects/techbestore/productList.png",
    "/images/projects/techbestore/productListFilter.png",
    "/images/projects/techbestore/productListPriceMod.png",
    "/images/projects/techbestore/saleForm.png",
    "/images/projects/techbestore/saleForm2.png",
    "/images/projects/techbestore/saleSuccess.png",
];

export default function ProjectTechBe() {
    const { t } = useTranslation();

    return (

        <section className="w-full rounded-3xl bg-[#0b172599] border border-cyan-400/20 shadow-2xl p-6 sm:p-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

                {/* ===================== */}
                {/* Carrusel */}
                {/* ===================== */}

                <div>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3500 }}
                        loop
                        className="rounded-2xl overflow-hidden shadow-xl"
                    >

                        {images.map((image, index) => (

                            <SwiperSlide key={index}>

                                <img
                                    src={image}
                                    className="w-full h-[220px] sm:h-[300px] lg:h-[450px] object-cover"
                                />

                            </SwiperSlide>

                        ))}

                    </Swiper>

                </div>

                {/* ===================== */}
                {/* Información */}
                {/* ===================== */}

                <div className="space-y-6">

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-300">
                        {t("projectTechBeStore.title")}
                    </h2>

                    <p className="text-gray-300 text-base sm:text-lg">

                        {t("projectTechBeStore.description")}

                    </p>

                    {/* Tecnologías */}

                    <div className="flex flex-wrap gap-3 items-center justify-center">

                        {[
                            "ElectronJS",
                            "React",
                            "Vite",
                            "SQLite",
                            "TailwindCSS",
                            "JavaScript"
                        ].map((tech) => (

                            <span
                                key={tech}
                                className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300"
                            >
                                {tech}
                            </span>

                        ))}

                    </div>

                    {/* Solución adaptable */}

                    <div className="rounded-xl bg-cyan-500/10 border border-cyan-400/20 p-5">

                        <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                            {t("projectTechBeStore.adaptableTitle")}
                        </h3>

                        <p className="text-gray-300 leading-7">

                            {t("projectTechBeStore.adaptableDescription")}

                        </p>

                    </div>

                    {/* Características */}

                    <div>

                        <h3 className="text-2xl font-semibold mb-4">
                            {t("projectTechBeStore.featuresTitle")}
                        </h3>

                        <ul className="space-y-2 text-gray-300">
                            {t("projectTechBeStore.features", { returnObjects: true }).map((feature, index) => (
                                <li key={index}>✔ {feature}</li>
                            ))}
                        </ul>

                    </div>

                    {/* Botones */}

                    <div className="flex flex-wrap gap-4 justify-center items-center">

                        <a
                            href="https://drive.google.com/file/d/1yEqYUtSQCKmnY4MgkfAl5unY4GlVwjOq/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl bg-green-500/20 hover:bg-green-500/40 transition"
                        >
                            {t("projectTechBeStore.download")}
                        </a>

                        <a
                            href="mailto:enzoxxb@gmail.com"
                            className="px-6 py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/40 transition"
                        >
                            {t("projectTechBeStore.license")}
                        </a>

                    </div>

                    <p className="text-gray-200 bg-amber-500/20 rounded">

                        {t("projectTechBeStore.note")} <span className="text-cyan-300">enzoxxb@gmail.com</span>.

                    </p>

                </div>

            </div>

        </section>

        );
}