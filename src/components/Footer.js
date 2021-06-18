function Footer() {
    return (
      <div className='w-screen flex justify-around h-32 items-center bg-gray-900 text-gray-100 shadow-2xl'>
        <div className='font-bold text-4xl font-serif text-gray-900'>🅄🅁🅃🄷</div>
        <div className='flex w-80 justify-around font-mono text-md lg:text-lg text-gray-50'>
          <div className='cursor-pointer'><a href="https://github.com/fewwwww/urth.ink">Github</a></div>
          <div className='cursor-pointer'><a href="https://github.com/fewwwww">Author</a></div>
          <div className='cursor-pointer'><a href="mailto:sy2940@nyu.edu">Contact</a></div>
        </div>
      </div>
    );
  }
  
  export default Footer;