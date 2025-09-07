const Services = () => {
  // Services data array - arranged in logical flow
  const servicesData = [
    {
      id: 1,
      icon: 'icon-desktop',
      title: 'Full-Stack Web Development',
      description: 'Building scalable web applications using MERN stack, Next.js, and modern frameworks. Delivering SaaS platforms, e-commerce solutions, and enterprise applications with responsive design and optimal performance across all devices.'
    },
    {
      id: 2,
      icon: 'icon-mobile',
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile apps with React Native, delivering native performance on iOS and Android platforms. Successfully launched 10+ apps on App Store and Google Play Store with thousands of downloads and positive reviews.'
    },
    {
      id: 3,
      icon: 'icon-target',
      title: 'UI/UX Development',
      description: 'Creating intuitive user interfaces with modern design principles and best practices. Implementing responsive layouts, accessibility standards, and seamless user experiences across all devices and platforms consistently.'
    },
    {
      id: 4,
      icon: 'icon-tools-2',
      title: 'Backend Architecture & DevOps',
      description: 'Designing robust backend systems, RESTful APIs, and microservices architecture. Implementing CI/CD pipelines, cloud deployment (AWS, Azure), and database optimization for high-traffic applications and scalability.'
    },
    {
      id: 5,
      icon: 'icon-chat',
      title: 'Technical Leadership & Mentoring',
      description: 'Leading development teams, conducting code reviews, and mentoring junior developers effectively. Proven track record in project management, technical decision-making, and delivering successful projects from concept to launch.'
    },
    {
      id: 6,
      icon: 'icon-pricetags',
      title: 'Consulting & Training',
      description: 'Providing technical consulting for startups and enterprises to optimize their development processes. Offering comprehensive training sessions on modern web technologies, best practices, and development methodologies.'
    }
  ];

  return (
    <section id='services' className='section gray-bg'>
      <div className='container'>
        <div className='row sm-m-25px-b m-35px-b'>
          <div className='col-md-12'>
            <div className='section-title'>
              <h3 className='dark-color text-uppercase'>My Services</h3>
              <p className='text-uppercase small'>
                Full-Stack Software Engineer offering end-to-end development services for Web & Mobile apps.
                I help businesses and startups build scalable, user-friendly, and future-ready solutions using MERN, Next.js, and React Native. My services include:              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          {servicesData.map((service) => (
            <div key={service.id} className='col-sm-6 col-lg-4 m-15px-tb'>
              <div className='feature-box-1 box-shadow-lg'>
                <div className='icon'>
                  <i className={service.icon} />
                </div>
                <div className='feature-content'>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
export default Services
