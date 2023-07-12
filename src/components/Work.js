import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const Work = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-content", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">LATEST WORKS</h3>
              <p className="text-uppercase small">
                A Lead UX &amp; UI designer based in Canada
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="portfolio-content lightbox-gallery">
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/portfolio-1.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Our Photography</h5>
                <span>Design</span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/portfolio-6.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Our Photography</h5>
                <span>Design</span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/portfolio-2.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Our Photography</h5>
                <span>Design</span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/portfolio-3.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Our Photography</h5>
                <span>Design</span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/portfolio-4.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Our Photography</h5>
                <span>Design</span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/portfolio-5.jpg" alt="image" />
              </div>
              <div className="portfolio-info">
                <h5>Our Photography</h5>
                <span>Design</span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "}
          {/* grid item */}
        </div>{" "}
        {/* portfolio-content */}
      </div>
    </section>
  );
};
export default Work;
