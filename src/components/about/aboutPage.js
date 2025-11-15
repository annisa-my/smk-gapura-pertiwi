import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row mb-5 max-h-80">
          <div className="w-2/4 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-5xl mt-5 font-bold text-white">
              test<br></br>
            </h1>
            <p className="mt-5 text-white opacity-70">
              test
            </p>
          </div>
          <div className="overflow-hidden rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6 object-cover object-center h-full w-full">
            <img src={Image3} alt="image"></img>
          </div>
        </div>
      </Fade> */}

      <Fade bottom cascade>
  <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-center">

    {/* Card 1 - Prestasi */}
    <div className="w-full sm:w-1/3 bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transform transition duration-500 hover:scale-105 border border-purple-200">
      <h3 className="text-purple-700 text-2xl font-semibold">Prestasi</h3>
      <h4 className="mt-4 text-gray-700 text-lg">
        SMK Gapura Pertiwi terus mencetak siswa berprestasi yang disiplin, kreatif, dan berdaya saing tinggi.
      </h4>
    </div>

    {/* Card 2 - Fasilitas */}
    <div className="w-full sm:w-1/3 bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transform transition duration-500 hover:scale-105 border border-purple-200">
      <h3 className="text-purple-700 text-2xl font-semibold">Fasilitas</h3>
      <h4 className="mt-4 text-gray-700 text-lg">
        Dilengkapi Ruang Praktek, ruang belajar nyaman, dan teknologi pendukung pembelajaran.
      </h4>
    </div>

    {/* Card 3 - Kegiatan */}
    <div className="w-full sm:w-1/3 bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transform transition duration-500 hover:scale-105 border border-purple-200">
      <h3 className="text-purple-700 text-2xl font-semibold">Kegiatan</h3>
      <h4 className="mt-4 text-gray-700 text-lg">
        Beragam kegiatan ekstrakurikuler membentuk karakter, kepemimpinan, dan kerja sama antar siswa.
      </h4>
    </div>

    {/* Card 4 - Guru & Pembimbing */}
    <div className="w-full sm:w-1/3 bg-gradient-to-br from-white to-purple-100 p-8 rounded-2xl shadow-md hover:shadow-xl transform transition duration-500 hover:scale-105 border border-purple-200">
      <h3 className="text-purple-700 text-2xl font-semibold">kualitas guru</h3>
      <h4 className="mt-4 text-gray-700 text-lg">
        Tenaga pendidik profesional dan berpengalaman siap membimbing siswa menuju kesuksesan.
      </h4>
    </div>

  </div>
</Fade>


      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold">Kualitas dan Kompetensi</h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Saatnya Meningkatkan Skill ke Level Berikutnya
        </h3>

        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Di SMK Gapura Pertiwi, setiap siswa dibimbing untuk menemukan potensinya. 
          Menggunakan pendekatan pembelajaran praktis dan teknologi terbaru, 
          kami membantu generasi muda membuka peluang karier terbaik sejak di bangku sekolah.
        </p>
      </div>
    </div>
  )
}

export default WorkPage
