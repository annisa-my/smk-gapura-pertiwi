import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-14 mb-14">
      <Fade bottom>
        <div className="w-full h-full flex flex-row justify-between items-center bg-gradient-to-r from-blue-800 to-blue-500 p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12 shadow-lg">
          
          {/* Kotak Testimonial */}
          <div className="w-3/4 xxs:w-full xs:w-full bg-white/10 backdrop-blur-md p-10 rounded-lg border border-white/20 lg:p-10 text-white">
            
            <div className="font-semibold text-xl xxs:text-sm sm:text-xl font-notoserif leading-relaxed">
              “SMKS Gapura Pertiwi memiliki akreditasi <span className="text-yellow-300 font-bold">B</span>, 
              berdasarkan sertifikat <span className="text-yellow-300">755/BAN-SM/SK/2019</span>. 

            </div>

            <div className="mt-10">
              <h3 className="text-yellow-400 text-2xl font-bold tracking-wide">SMK GAPURA PERTIWI</h3>
              <p className="text-white text-sm opacity-80">Google Review</p>
            </div>
          </div>

        </div>
      </Fade>
    </div>
  )
}

export default Testimonial
