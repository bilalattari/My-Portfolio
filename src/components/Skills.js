import { useEffect } from "react";
import { tony } from "../layouts/utils";

const Skills = () => {
  useEffect(() => {
    tony.activeSkillProgress();
  }, []);
  return (
    <section className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Skills</h3>
              <p className="text-uppercase small">
                Mobile and Web App Developer
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6 m-15px-tb">
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">React Native</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={92}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">Reactjs / Next js</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={72}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>75%</span>
                </div>
              </div>
            </div>
            <div className="skill-lt">
              <h6 className="dark-color">Rest APIs</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">Firebase</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={86}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>86%</span>
                </div>
              </div>
            </div>
            {/* /skill */}
            {/* end skill */}
            {/* skill */}
            <div className="skill-lt">
              <h6 className="dark-color">UI/UX</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>50%</span>
                </div>
              </div>
            </div>
            {/* end skill */}
          </div>
          <div className="col-lg-5 m-15px-tb">
            <div className="row">
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon">
                    <i className="fas fa-compact-disc" />
                  </div>
                  <div className="media-body">
                    <h5>100+ Clients</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon">
                    <i className="fas fa-trophy" />
                  </div>
                  <div className="media-body">
                    <h5>40+ Apps on Store</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <div className="feature-box-2 media align-items-center">
                  <div className="icon">
                    <i className="fas fa-mug-hot" />
                  </div>
                  <div className="media-body">
                    <h5>Trainer at SMIT</h5>
                  </div>
                </div>
              </div>
              <div className="col-6 m-15px-tb">
                <a
                  className="feature-box-2 media align-items-center"
                  href="https://www.fiverr.com/users/bilalraza590"
                >
                  <div className="icon">
                    <i className="fas fa-flag" />
                  </div>
                  <div className="media-body">
                    <h5>100+ Orders on Fiver</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
