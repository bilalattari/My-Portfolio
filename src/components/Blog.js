const Blog = () => {
  return (
    <section id="blog" className="section white-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">Latest Blogs</h3>
              <p className="text-uppercase small">
                A Lead UX &amp; UI designer based in Canada
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-grid-img">
                <a href="#">
                  <img src="static/img/blog-1.jpg" alt="image" />
                </a>
              </div>
              <div className="blog-gird-info">
                <div className="b-meta">
                  <span className="date">02 Mar 2023</span>
                  <span className="meta">Design</span>
                </div>
                <h5>
                  <a href="#">Make your Marketing website</a>
                </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="btn-grid">
                  <a className="m-btn-link" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-lg-4 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-grid-img">
                <a href="#">
                  <img src="static/img/blog-2.jpg" alt="image" />
                </a>
              </div>
              <div className="blog-gird-info">
                <div className="b-meta">
                  <span className="date">02 Mar 2023</span>
                  <span className="meta">Design</span>
                </div>
                <h5>
                  <a href="#">Make your Marketing website</a>
                </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="btn-grid">
                  <a className="m-btn-link" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-lg-4 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-grid-img">
                <a href="#">
                  <img src="static/img/blog-3.jpg" alt="image" />
                </a>
              </div>
              <div className="blog-gird-info">
                <div className="b-meta">
                  <span className="date">02 Mar 2023</span>
                  <span className="meta">Design</span>
                </div>
                <h5>
                  <a href="#">Make your Marketing website</a>
                </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="btn-grid">
                  <a className="m-btn-link" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* col */}
        </div>
      </div>
    </section>
  );
};
export default Blog;
