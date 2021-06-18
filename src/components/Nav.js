function Nav({changeRoute}) {
  const toProducts = () => {
    changeRoute('products')
  }  

  const toTeam = () => {
    changeRoute('team')
  }  

  const toContact = () => {
    changeRoute('contact')
  }  

  return (
    <div className='fixed z-10 top-0 left-0 w-screen flex justify-around h-32 items-center bg-gray-900 text-gray-100 shadow-2xl'>
      <div className='font-bold text-4xl font-serif cursor-pointer' onClick={() => changeRoute('home')}>🅄🅁🅃🄷</div>
      <div className='flex w-80 justify-around font-mono text-md lg:text-lg text-gray-50'>
        <div className='cursor-pointer' onClick={toProducts}>Products</div>
        <div className='cursor-pointer' onClick={toTeam}>Team</div>
        <div className='cursor-pointer' onClick={toContact}>Contact</div>
      </div>
    </div>
  );
}

export default Nav;