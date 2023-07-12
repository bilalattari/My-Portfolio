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

const Index2 = () => {
  return (
    <Layout>
      {/* Home Banner */}
      <section
        id="home"
        className="home-banner-02 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(static/img/home-banner-1.jpg)" }}
      >
        <div className="container">
          <div className="row full-screen align-items-center p-100px-tb">
            <div className="col-12">
              <div className="ht-text text-center">
                <h6>Hello There!</h6>
                <h1>I'm Tony Smith</h1>
                <div className="nav ht-list justify-content-center">
                  <span>Web Designer</span> <span>Web Developer</span>{" "}
                  <span>UI/UX Designer</span>
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
export default Index2;
