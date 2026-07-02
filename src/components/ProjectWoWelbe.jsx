import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/projects/wowelbe/login.png",
  "/images/projects/wowelbe/home.png",
  "/images/projects/wowelbe/shop.png",
  "/images/projects/wowelbe/characters.png",
  "/images/projects/wowelbe/characters-prev.png",
  "/images/projects/wowelbe/cart.png",
  "/images/projects/wowelbe/payment-prev.png",
  "/images/projects/wowelbe/payment.png",
  "/images/projects/wowelbe/guides.png",
  "/images/projects/wowelbe/guides1.png",
  "/images/projects/wowelbe/rankings.png",
];

export default function ProjectWoWelbe() {

  return (

    <section className="w-full rounded-3xl bg-[#0b172599] border border-cyan-400/20 shadow-2xl p-6 sm:p-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

        {/* Carrusel */}

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

        {/* Información */}

        <div className="space-y-6">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-300">
            WoWelbe
          </h2>

          <p className="text-gray-300 leading-7 text-base sm:text-lg">

            Portal web desarrollado para un servidor privado de
            World of Warcraft Wrath of the Lich King.

            Integra autenticación compatible con el servidor,
            sistema de tienda, personajes y pagos online utilizando React + Spring Boot.

          </p>

          <div className="flex flex-wrap gap-3 justify-center items-center">

            {
              [
                "React",
                "Spring Boot",
                "Java",
                "MySQL",
                "JWT",
                "SRP6",
                "Tailwind",
                "Mercado Pago"
              ].map((tech) => (

                <span
                  key={tech}
                  className="px-4 py-2 rounded-full
                bg-cyan-500/10
                  border border-cyan-400/20
                text-cyan-300"
                >

                  {tech}

                </span>

              ))
            }

          </div>

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Características
            </h3>

            <ul className="space-y-2 text-gray-300">

              <li>✔ Autenticación compatible con World of Warcraft mediante encriptación SRP6.</li>

              <li>✔ Sistema de personajes conectado directamente al servidor.</li>

              <li>✔ Tienda Premium integrada.</li>

              <li>✔ Compra de objetos, monturas, mascotas y servicios.</li>

              <li>✔ Integración con Mercado Pago.</li>

              <li>✔ Acreditación automática mediante Webhooks.</li>

              <li>✔ Sistema Special Points [PE] y Donation Points [PD].</li>

              <li>✔ Backend REST con Spring Boot.</li>

            </ul>

          </div>

          <div className="flex gap-4 justify-center items-center flex-wrap">

            <a
              href="https://wowelbe.netlify.app"
              target="_blank"
              className="px-6 py-3 rounded-xl
              bg-green-500/20
              hover:bg-green-500/40
              transition">

              Ver Sitio de prueba

            </a>

          </div>

        </div>

      </div>

    </section>

  );

}