function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. You can check out my repository of       
        <a href='https://github.com/amulyaabhinandan/Github-Finder'>
          {' '}
          <strong>Github Finder App</strong>.
        </a>{' '}
        
        
        <p>
        Developed by
        <strong>
          <a href='https://github.com/amulyaabhinandan'> Amulya Abhinandan</a>
        </strong>
        .
        </p>        
        
      </p>
      {/* <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-white' href='https://twitter.com/hassibmoddasser'>
          Hassib Moddasser
        </a>
      </p> */}
    </>
  )
}

export default About
