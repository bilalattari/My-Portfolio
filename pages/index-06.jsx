import About from "@/src/components/About";
import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Testiminails from "@/src/components/Testiminails";
import Layout from "@/src/layouts/Layout";

import Services from "@/src/components/Services";
import dynamic from "next/dynamic";
import Head from "next/head";

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const Index5 = () => {
  return (
    <Layout headerColor={"dark"} isTransparent={true}>
      <Head>
        <link href="static/style/master-pink.css" rel="stylesheet" />
      </Head>
      {/* Home Banner */}
      <section id="home" className="home-banner-03">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-md-6 full-scree bg-cover"
              style={{ backgroundImage: "url(static/img/home-banner-2.jpg)" }}
            ></div>
            <div className="col-md-6">
              <div className="ht-text">
                <h6>Hello There!</h6>
                <h1>I'm Rachel Roth</h1>
                <p>
                  I'm the pixel crafter based in Canada. I make the visual to be
                  more interactive.
                </p>
                <div className="nav social-icons">
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
