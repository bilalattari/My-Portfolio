import Head from "next/head";
import Link from "next/link";

const Index = () => {
  return (
    <main>
      <Head>
        <link legacyBehavior rel="stylesheet" href="demo/css/style.css" />
      </Head>
      <section id="home" className="theme-bg">
        <div className="container">
          <div className="row justify-content-center p-100px-tb align-items-center">
            <div className="col-md-12 col-lg-9 text-center">
              <div className="section-title text-center">
                <h2 className="white-color">
                  Tony – Bootstrap Portfolio Template.
                </h2>
                <div className="btn-bar p-15px-t">
                  <a
                    className="m-btn m-btn-t-white m-btn-shadow"
                    href="#"
                    target="_blank"
                  >
                    <span>Buy Now</span>
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* col */}
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </section>
      <section id="demo" className="page-section demo-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="product">
                <Link legacyBehavior href="/index-01">
                  <a target="_blank">
                    <div className="product-img">
                      <img src="demo/img/1.jpg" alt="image" />
                    </div>
                    <div className="product-info">
                      <h2>Home option 1</h2>
                    </div>
                  </a>
                </Link>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-12 col-md-4">
              <div className="product">
                <Link legacyBehavior href="/index-02">
                  <a target="_blank">
                    <div className="product-img">
                      <img src="demo/img/2.jpg" alt="image" />
                    </div>
                    <div className="product-info">
                      <h2>Home option 2</h2>
                    </div>
                  </a>
                </Link>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-12 col-md-4">
              <div className="product">
                <Link legacyBehavior href="/index-03">
                  <a target="_blank">
                    <div className="product-img">
                      <img src="demo/img/3.jpg" alt="image" />
                    </div>
                    <div className="product-info">
                      <h2>Home option 3</h2>
                    </div>
                  </a>
                </Link>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-12 col-md-4">
              <div className="product">
                <Link legacyBehavior href="/index-04">
                  <a target="_blank">
                    <div className="product-img">
                      <img src="demo/img/4.jpg" alt="image" />
                    </div>
                    <div className="product-info">
                      <h2>Home option 4</h2>
                    </div>
                  </a>
                </Link>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-12 col-md-4">
              <div className="product">
                <Link legacyBehavior href="/index-05">
                  <a target="_blank">
                    <div className="product-img">
                      <img src="demo/img/5.jpg" alt="image" />
                    </div>
                    <div className="product-info">
                      <h2>Home option 5</h2>
                    </div>
                  </a>
                </Link>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-12 col-md-4">
              <div className="product">
                <Link legacyBehavior href="/index-06">
                  <a target="_blank">
                    <div className="product-img">
                      <img src="demo/img/6.jpg" alt="image" />
                    </div>
                    <div className="product-info">
                      <h2>Home option 6</h2>
                    </div>
                  </a>
                </Link>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-12 col-md-4">
              <div className="product">
                <div className="product-img">
                  <img src="demo/img/cm.jpg" alt="image" />
                </div>
                <div className="product-info">
                  <h2>Coming Soon</h2>
                </div>
              </div>
            </div>{" "}
            {/* col */}
          </div>
        </div>
      </section>
      <section className="purchase-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <span className="dark-color">You are at the right step now</span>
              <div className="clearfix" />
              <h3 className="font-alt dark-color p-30px-b">
                Purchase The <span className="theme-color">tony</span> and Make
                Your Own Bootstrap Based Landing Page Templates.
              </h3>
              <div className="clearfix" />
              <a className="m-btn m-btn-t-theme" href="#" target="_blank">
                <i className="fas fa-shopping-cart" /> Buy Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Index;
