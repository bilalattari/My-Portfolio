import About from "@/src/components/About";
import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Testiminails from "@/src/components/Testiminails";
import Layout from "@/src/layouts/Layout";

import Services from "@/src/components/Services";
import dynamic from "next/dynamic";

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const Index5 = () => {
  return (
    <Layout>
      {/* Home Banner */}
      <section id="home" className="home-banner-02 video-bg">
        <div className="video-bg-container">
          <video src="static/video/video.mp4" autoPlay loop muted />
        </div>
        <div className="container">
          <div className="row full-screen align-items-center p-100px-tb">
            <div className="col-12">
              <div className="ht-text text-center">
                <h6>Hello There!</h6>
                <h1>I'm Tony Smith</h1>
                <div className="nav social-icons justify-content-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="go-to go-to-next">
          <a href="#about">
            <span />
          </a>
        </div>
      </section>

      {/* End Home Banner */}
      {/* about us */}
      <About />
      {/* end about us */}
      {/* fun */}
      <Skills />
      {/* End fun */}
      {/* resume */}
      <Services />
      {/* End resume */}
      {/* Work */}
      <Work />
      {/* End work */}
      {/* Testiminails */}
      <Testiminails />
      {/* End Testiminails */}
      {/* Blog */}
      <Blog />
      {/* End Blog */}
      <Contact />
    </Layout>
  );
};
export default Index5;
