import React from "react"
import { Fade } from "react-reveal"
import HeroImage from "../../images/sekolah3.jpeg"

const FeatureSection = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4 mt-10 py-10 rounded-3xl"
      style={{
        background: "linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)",
      }}
    >
      {/* Bagian Box dengan Fade */}
      <Fade bottom>
        <div className="flex flex-wrap justify-center text-center">
          {/* TKJ */}
          <div
            className="w-72 p-8 m-5 rounded-xl border border-blue-300 transform transition duration-500 hover:scale-110 hover:shadow-[0_0_25px_#3b82f6]"
            style={{
              background: "linear-gradient(to right, #1e3a8a, #3b82f6)",
            }}
          >
            <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
              Teknik Komputer dan Jaringan (TKJ)
            </h3>
          </div>

          {/* TKR */}
          <div
            className="w-72 p-8 m-5 rounded-xl border border-blue-300 transform transition duration-500 hover:scale-110 hover:shadow-[0_0_25px_#3b82f6]"
            style={{
              background: "linear-gradient(to right, #1e3a8a, #3b82f6)",
            }}
          >
            <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
              Teknik Kendaraan Ringan Otomotif (TKRO)
            </h3>
          </div>

         </div>
      </Fade>

      {/* Bagian Hero dengan Fade */}
      <Fade bottom delay={300}>
        <div className="mt-10 flex flex-col lg:flex-row gap-5 items-center bg-white/20 backdrop-blur-sm p-8 rounded-2xl">
          <div className="lg:w-1/2">
            <img
              className="rounded-xl h-64 w-full object-cover sm:h-80 md:h-96 lg:h-full shadow-md"
              src={HeroImage}
              alt="HeroImage"
            />
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            <h2 className="text-white text-3xl font-semibold drop-shadow-md">
               SMK GAPURA PERTIWI
            </h2>
            <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-300 mt-2 drop-shadow-md">
              Membangun Generasi Unggul dan Siap Kerja
            </h3>
            <p>Menorehkan Prestasi di Bidang Pendidikan Vokasi</p>
              sebuah lembaga pendidikan swasta di bawah naungan Kementerian Pendidikan dan Kebudayaan, berdiri kokoh di Jalan Raya Kronjo KM. 1,2, Kali Asin, Kecamatan Sukamulya, 
              Kabupaten Tangerang, Provinsi Banten. Dengan Akreditasi B yang diraih pada 09 September 2019 berdasarkan SK No.755/BAN-SM/SK/2019, 
               sekolah ini menunjukkan komitmennya dalam menyediakan pendidikan vokasi berkualitas bagi generasi muda.
            <div className="mt-6 flex justify-center lg:justify-end gap-3">
              <a
                href="tel:#"
                className="bg-white/30 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all backdrop-blur-sm border border-white/40"
              >
                Hubungi Kami
              </a>
              <a
                href="/gallery"
                className="border border-white/40 text-white hover:bg-blue-700 hover:border-blue-700 hover:text-white px-8 py-3 rounded-md font-medium transition-all backdrop-blur-sm"
              >
                Lihat Galeri
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default FeatureSection