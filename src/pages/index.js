import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Seo
        title=" SMK GAPURA PERTIWI"
        description="Holo is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS."
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
     {/* MAPS SEKOLAH */}
<div style={{ padding: "40px 20px" }}>
  <h2>📍 Lokasi SMK Gapura Pertiwi</h2>

  <div
    style={{
      width: "100%",
      height: "400px",
      borderRadius: "16px",
      overflow: "hidden",
      marginTop: "10px",
    }}
  >
    <iframe
      src="https://www.google.com/maps?q=SMK+Gapura+Pertiwi+Tangerang&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      title="Lokasi SMK Gapura Pertiwi"
    ></iframe>
  </div>
</div>
      <FeaturedBlog></FeaturedBlog>
      <Testimonial></Testimonial>
    </Layout>
  </div>
)

export default IndexPage
