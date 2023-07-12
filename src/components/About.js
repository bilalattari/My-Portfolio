const About = () => {
  return (
    <section id='about' className='section gray-bg'>
      <div className='container'>
        <div className='row sm-m-25px-b m-35px-b'>
          <div className='col-md-12'>
            <div className='section-title'>
              <h3 className='dark-color text-uppercase'>ABOUT ME</h3>
              <p className='text-uppercase small'>
                Senior &amp; Mobile and Web APP Developer
              </p>
            </div>
          </div>
        </div>
        <div className='row align-items-center'>
          <div className='col-lg-5 m-15px-tb'>
            <div className='about-me-img box-shadow'>
              <img src='static/img/Profile.jpeg' alt='image' />
              <div className='nav social-icon'>
                <a href='https://www.facebook.com/BilalRaza1235/'>
                  <i className='fab fa-facebook-f' />
                </a>
                <a href='https://twitter.com/Attaribilal3'>
                  <i className='fab fa-twitter' />
                </a>
                <a href='https://github.com/bilalattari'>
                  <i className='fab fa-github' />
                </a>
                <a href='https://www.linkedin.com/in/bilal-raza-0082a8186/'>
                  <i className='fab fa-linkedin-in' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-7 m-15px-tb'>
            <div className='about-me'>
              <h4>I'M Bilal Raza</h4>
              <h6>
                Senior <span className='theme-color'>Mobile &amp; Web</span> app
                developer
              </h6>
              <p>
                I specialize in creating high-quality Mobile and Web Apps for
                clients worldwide. With a vast portfolio of successful projects,
                I have developed numerous applications, ranging from social
                media apps to quiz apps, educational apps, and various custom
                apps tailored to meet the unique requirements of each client.
              </p>
              <div className='row about-list'>
                <div className='col-md-6'>
                  <div className='media'>
                    <label>Birthday</label>
                    <p>19th april 1997</p>
                  </div>
                  <div className='media'>
                    <label>Age</label>
                    <p>26 Yr</p>
                  </div>
                  <div className='media'>
                    <label>Residence</label>
                    <p>Pakistan</p>
                  </div>
                  <div className='media'>
                    <label>Address</label>
                    <p>Karachi, Pakistan</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='media'>
                    <label>E-mail</label>
                    <p>attari1235@gmail.com</p>
                  </div>
                  <div className='media'>
                    <label>Phone</label>
                    <p>+923132933803</p>
                  </div>
                  <div className='media'>
                    <label>Github</label>
                    <p>/bilalattari</p>
                  </div>
                  <div className='media'>
                    <label>Freelance</label>
                    <p>Available</p>
                  </div>
                </div>
              </div>
              <div className='btn-bar'>
                <a
                  className='m-btn m-btn-theme'
                  target='_blank'
                  href="https://firebasestorage.googleapis.com/v0/b/mycv-2cf47.appspot.com/o/Bilal's%20Resume.pdf?alt=media&token=45a05ddc-8f1e-472a-9774-b23be2fa9e9c"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
