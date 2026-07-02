import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    return (

        <section className="w-full rounded-3xl bg-[#0b1725cc] backdrop-blur-lg border border-cyan-400/20 shadow-2xl p-6 sm:p-10">

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
                        TechBeStore
                    </h2>

                    <p className="text-gray-300 leading-7 text-base sm:text-lg">

                        <strong>TechBeStore</strong> es una plataforma de escritorio desarrollada
                        con <strong>ElectronJS</strong>, <strong>React</strong> y
                        <strong> Vite</strong>, creada para brindar una solución moderna de
                        gestión comercial para pequeños y medianos negocios.

                        <br /><br />

                        A diferencia de una aplicación tradicional, fue diseñada como una
                        plataforma reutilizable y completamente personalizable. Cada
                        implementación puede adaptarse a la identidad del cliente,
                        permitiendo modificar nombre, logotipo, colores y configuraciones
                        específicas del comercio sin alterar la arquitectura principal del
                        sistema.

                        <br /><br />

                        Gracias a SQLite, toda la información permanece almacenada localmente,
                        ofreciendo una experiencia rápida, segura y completamente funcional
                        incluso sin conexión a Internet.

                    </p>

                    {/* Tecnologías */}

                    <div className="flex flex-wrap gap-3">

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
                            Plataforma adaptable
                        </h3>

                        <p className="text-gray-300 leading-7">

                            TechBeStore fue concebido como un producto reutilizable.
                            Cada cliente puede contar con una versión personalizada del
                            sistema, incorporando su propia identidad visual y ajustando
                            funcionalidades según las necesidades particulares del negocio.

                        </p>

                    </div>

                    {/* Características */}

                    <div>

                        <h3 className="text-2xl font-semibold mb-4">
                            Características
                        </h3>

                        <ul className="space-y-2 text-gray-300">

                            <li>✔ Plataforma completamente personalizable para cada comercio.</li>

                            <li>✔ Personalización de nombre, logotipo e identidad visual.</li>

                            <li>✔ Gestión de productos, categorías y control de stock.</li>

                            <li>✔ Sistema completo de ventas con administración de clientes.</li>

                            <li>✔ Generación de presupuestos y documentos comerciales.</li>

                            <li>✔ Historial de ventas y búsquedas avanzadas.</li>

                            <li>✔ Importación masiva y actualización de productos.</li>

                            <li>✔ Sistema de licencias para habilitación del software.</li>

                            <li>✔ Funcionamiento 100% offline mediante SQLite.</li>

                        </ul>

                    </div>

                    {/* Arquitectura */}

                    <div>

                        <h3 className="text-2xl font-semibold mb-4">
                            Arquitectura
                        </h3>

                        <ul className="space-y-2 text-gray-300">

                            <li>🖥️ ElectronJS como entorno de escritorio multiplataforma.</li>

                            <li>⚛️ React + Vite para una interfaz rápida y moderna.</li>

                            <li>🔒 Comunicación segura entre procesos mediante Preload API e IPC.</li>

                            <li>🗄️ Persistencia local utilizando SQLite.</li>

                            <li>📦 Arquitectura modular preparada para incorporar nuevos módulos.</li>

                        </ul>

                    </div>

                    {/* Botones */}

                    <div className="flex flex-wrap gap-4">

                        <a
                            href="https://drive.google.com/file/d/1yEqYUtSQCKmnY4MgkfAl5unY4GlVwjOq/view?usp=sharing"
                            className="px-6 py-3 rounded-xl bg-green-500/20 hover:bg-green-500/40 transition"
                        >
                            Descargar versión de evaluación
                        </a>

                        <a
                            href="mailto:enzoxxb@gmail.com"
                            className="px-6 py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/40 transition"
                        >
                            Solicitar licencia
                        </a>

                    </div>

                    <p className="text-sm text-gray-400">

                        La versión de evaluación requiere una licencia temporal.
                        Si deseas probar la aplicación, puedes solicitar una licencia de
                        prueba escribiendo a <span className="text-cyan-300">enzoxxb@gmail.com</span>.

                    </p>

                </div>

            </div>

        </section>

        );
}