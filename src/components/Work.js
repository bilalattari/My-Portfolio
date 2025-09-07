import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const Work = () => {
  // Portfolio data array
  const portfolioData = [
    {
      id: 13,
      image: "static/img/portfolio-15.jpeg",
      links: [
        {
          url: "https://play.google.com/store/apps/details?id=com.seeratemustufa&hl=en",
          icon: "static/img/playstore-icon.png",
          alt: "Play Store"
        }
      ]
    },
    {
      id: 14,
      image: "static/img/portfolio-14.jpeg",
      links: [
        {
          url: "https://play.google.com/store/apps/details?id=com.hukumjanab&hl=en",
          icon: "static/img/playstore-icon.png",
          alt: "Play Store"
        },
        {
          url: "https://apps.apple.com/pk/app/kaacib/id6747888720",
          icon: "static/img/appstore-icon.png",
          alt: "App Store"
        }
      ]
    },
    {
      id: 1,
      image: "static/img/portfolio-13.jpeg",
      links: [
        {
          url: "https://apps.apple.com/us/app/rez-ai/id6743659597",
          icon: "static/img/appstore-icon.png",
          alt: "App Store"
        }
      ]
    },
    {
      id: 2,
      image: "static/img/portfolio-11.jpg",
      links: [
        {
          url: "https://www.qrinsight.co/",
          icon: "static/img/web-icon.png",
          alt: "Website"
        }
      ]
    },
    {
      id: 3,
      image: "static/img/portfolio-8.jpeg",
      links: [
        {
          url: "https://apps.apple.com/us/app/lift-learn/id6470154996",
          icon: "static/img/appstore-icon.png",
          alt: "App Store"
        }
      ]
    },
    {
      id: 4,
      image: "static/img/portfolio-12.jpg",
      links: [
        {
          url: "https://apps.apple.com/us/app/rec-cess/id6517371290",
          icon: "static/img/appstore-icon.png",
          alt: "App Store"
        }
      ]
    },
    {
      id: 5,
      image: "static/img/portfolio-7.jpeg",
      links: [
        {
          url: "https://play.google.com/store/apps/details?id=com.myguiltydog",
          icon: "static/img/playstore-icon.png",
          alt: "Play Store"
        },
        {
          url: "https://apps.apple.com/dk/app/my-guilty-dogs/id6464316408",
          icon: "static/img/appstore-icon.png",
          alt: "App Store"
        }
      ]
    },
    {
      id: 6,
      image: "static/img/portfolio-1.jpeg",
      links: [
        {
          url: "https://play.google.com/store/apps/details?id=com.sarfkidunya",
          icon: "static/img/playstore-icon.png",
          alt: "Play Store"
        },
        {
          url: "https://apps.apple.com/us/app/sarfk-ki-dunya/id6449247765",
          icon: "static/img/appstore-icon.png",
          alt: "App Store"
        }
      ]
    },
    {
      id: 7,
      image: "static/img/portfolio-2.jpeg",
      links: [
        {
          url: "https://play.google.com/store/apps/details?id=com.nahwkidunya",
          icon: "static/img/playstore-icon.png",
          alt: "Play Store"
        },
        {
          url: "https://apps.apple.com/us/app/nahw-ki-dunya-learn-arabic/id1575739040",
          icon: "static/img/appstore-icon.png",
          alt: "App Store"
        }
      ]
    },
    {
      id: 8,
      image: "static/img/portfolio-3.jpeg",
      links: [
        {
          url: "https://play.google.com/store/apps/details?id=com.gufhtugupublication",
          icon: "static/img/playstore-icon.png",
          alt: "Play Store"
        },
        {
          url: "https://apps.apple.com/us/app/gufhtugu-urdu-books-library/id1614142319",
          icon: "static/img/appstore-icon.png",
          alt: "App Store"
        }
      ]
    },
    {
      id: 9,
      image: "static/img/portfolio-4.jpeg",
      links: [
        {
          url: "https://play.google.com/store/apps/details?id=com.qariuser",
          icon: "static/img/playstore-icon.png",
          alt: "Play Store"
        },
        {
          url: "",
          icon: "static/img/appstore-icon.png",
          alt: "App Store"
        }
      ]
    },
    {
      id: 10,
      image: "static/img/portfolio-5.jpeg",
      links: [
        {
          url: "https://play.google.com/store/apps/details?id=com.zeeshanusmani",
          icon: "static/img/playstore-icon.png",
          alt: "Play Store"
        },
        {
          url: "https://apps.apple.com/sn/app/zeeshan-usmani/id1642532228",
          icon: "static/img/appstore-icon.png",
          alt: "App Store"
        }
      ]
    },
    {
      id: 11,
      image: "static/img/portfolio-6.jpeg",
      links: [
        {
          url: "https://play.google.com/store/apps/details?id=com.pippipyalah",
          icon: "static/img/playstore-icon.png",
          alt: "Play Store"
        },
        {
          url: "https://apps.apple.com/us/app/pip-pip-yalah-covoiturage/id1459525543",
          icon: "static/img/appstore-icon.png",
          alt: "App Store"
        }
      ]
    },
    {
      id: 12,
      image: "static/img/portfolio-9.jpeg",
      links: [
        {
          url: "http://countasset.com/",
          icon: "static/img/web-icon.png",
          alt: "Website"
        }
      ]
    },

  ];

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
                SENIOR WEB & MOBILE APP DEVELOPER
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="portfolio-content lightbox-gallery">
          {portfolioData.map((item) => (
            <div key={item.id} className="grid-item product branding">
              <div
                className="portfolio-box-01"
                style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              >
                <div className="portfolio-img">
                  <img src={item.image} alt="image" />
                </div>
                <div className="portfolio-info">
                  <div>
                    {item.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          className={`rounded-circle p-3 ${index > 0 ? "ml-2" : ""
                            }`}
                          style={{ backgroundColor: "#fff" }}
                        >
                          <img
                            src={link.icon}
                            width="20"
                            alt={link.alt}
                          />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Work;
