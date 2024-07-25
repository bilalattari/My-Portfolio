import Isotope from 'isotope-layout'
import { useEffect, useRef, useState } from 'react'

const Work = () => {
  // Isotope
  const isotope = useRef()
  const [filterKey, setFilterKey] = useState('*')
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope('.portfolio-content', {
        itemSelector: '.grid-item',
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-item'
        },
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      })
    }, 1000)
    //     return () => isotope.current.destroy();
  }, [])
  return (
    <section id='work' className='section'>
      <div className='container'>
        <div className='row sm-m-25px-b m-35px-b'>
          <div className='col-md-12'>
            <div className='section-title'>
              <h3 className='dark-color text-uppercase'>LATEST WORKS</h3>
              <p className='text-uppercase small'>
                SENIOR WEB & MOBILE APP DEVELOPER
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='portfolio-content lightbox-gallery'>

        <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/portfolio-11.jpg' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                  <a href='https://www.qrinsight.co/' target='_blank'>
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/web-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/portfolio-8.jpeg' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                  <a
                    href='https://apps.apple.com/us/app/lift-learn/id6470154996'
                    target='_blank'
                  >
                   <span
                      className='rounded-circle p-3 ml-2'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/appstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>{' '}
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/portfolio-12.jpg' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                {/* <a
                    href='https://play.google.com/store/apps/details?id=com.myguiltydog'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/playstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a> */}
                  <a
                    href='https://apps.apple.com/us/app/rec-cess/id6517371290'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3 ml-2'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/appstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/portfolio-7.jpeg' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                <a
                    href='https://play.google.com/store/apps/details?id=com.myguiltydog'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/playstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                  <a
                    href='https://apps.apple.com/dk/app/my-guilty-dogs/id6464316408'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3 ml-2'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/appstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>{' '}
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/portfolio-9.jpeg' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                  <a href='http://countasset.com/' target='_blank'>
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/web-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>{' '}
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/portfolio-1.jpeg' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                  <a
                    href='https://play.google.com/store/apps/details?id=com.sarfkidunya'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/playstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                  <a
                    href='https://apps.apple.com/us/app/sarfk-ki-dunya/id6449247765'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3 ml-2'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/appstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>{' '}
          {/* grid item */}
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/portfolio-2.jpeg' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                  <a
                    href='https://play.google.com/store/apps/details?id=com.nahwkidunya'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/playstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                  <a
                    href='https://apps.apple.com/us/app/nahw-ki-dunya-learn-arabic/id1575739040'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3 ml-2'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/appstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>{' '}
          {/* grid item */}
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/portfolio-3.jpeg' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                  <a
                    href='https://play.google.com/store/apps/details?id=com.gufhtugupublication'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/playstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                  <a
                    href='https://apps.apple.com/us/app/gufhtugu-urdu-books-library/id1614142319'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3 ml-2'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/appstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>{' '}
          {/* grid item */}
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/portfolio-4.jpeg' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                  <a
                    href='https://play.google.com/store/apps/details?id=com.qariuser'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/playstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                  <a href='' target='_blank'>
                    <span
                      className='rounded-circle p-3 ml-2'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/appstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>{' '}
          {/* grid item */}
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/portfolio-5.jpeg' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                  <a
                    href='https://play.google.com/store/apps/details?id=com.zeeshanusmani'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/playstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                  <a
                    href='https://apps.apple.com/sn/app/zeeshan-usmani/id1642532228'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3 ml-2'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/appstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>{' '}
          {/* grid item */}
          <div className='grid-item product branding'>
            <div
              className='portfolio-box-01'
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
            >
              <div className='portfolio-img'>
                <img src='static/img/portfolio-6.jpeg' alt='image' />
              </div>
              <div className='portfolio-info'>
                <div>
                  <a
                    href='https://play.google.com/store/apps/details?id=com.pippipyalah'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/playstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                  <a
                    href='https://apps.apple.com/us/app/pip-pip-yalah-covoiturage/id1459525543'
                    target='_blank'
                  >
                    <span
                      className='rounded-circle p-3 ml-2'
                      style={{ backgroundColor: '#fff' }}
                    >
                      <img
                        src='static/img/appstore-icon.png'
                        width='20'
                        alt='icon'
                      />
                    </span>
                  </a>
                </div>
                {/* <h5>Our Photography</h5>
                <span>Design</span> */}
              </div>
              {/* <a className="link-overlay" href="#" /> */}
            </div>
          </div>{' '}
          {/* grid item */}
        </div>{' '}
        {/* portfolio-content */}
      </div>
    </section>
  )
}
export default Work
