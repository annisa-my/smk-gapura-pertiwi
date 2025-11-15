import React from "react"
import gapura1 from "../../images/gapura1.jpg"
import gapura3 from "../../images/gapura3.webp"
import gapura2 from "../../images/gapura1.jpg"

const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
     <img alt="Image" src={gapura1}></img>
     <img alt="Image" src={gapura3}></img>
     <img alt="Image" src={gapura1}></img>
     
    </div>
  )
}

export default AboutGrid