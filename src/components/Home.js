import Merge from '../imgs/merge.png'
import Doge from '../imgs/doge.png'
import Future from '../imgs/future.png'

function Home() {

    return (
    <div style={{marginTop: '8rem'}} className='bg-gray-200'>
      <div className='bg-gray-200 w-screen max-w-screen-2xl mx-auto flex p-3 lg:p-10'>
          <div className='flex flex-col justify-center'>
            <div className='text-gray-800 text-3xl lg:text-7xl py-3'>Link the Earth by <span className='font-extrabold'>NoDB</span></div>
            <div className='text-gray-700 text-md lg:text-2xl py-1'>We make database <span className='font-bold'>free</span>, <span className='font-bold'>decentralized</span>, and <span className='font-bold'>secure</span>.</div>
            <div className='text-gray-700 text-md lg:text-2xl py-1'>Reimagine web applications.</div>
            <div className='text-gray-700 text-md lg:text-2xl py-1'>Powered by GUNDB and Web Container.</div>
          </div>
          <img className='w-2/3 py-16' src={Merge} alt="" />
      </div>
      <div className='bg-gray-100 w-screen max-w-screen-2xl mx-auto flex'>
          <div className='w-full p-3 lg:p-20 border-gray-200 border-8 flex flex-col items-center'>
            <div className='text-md lg:text-3xl text-left lg:text-center text-gray-800'><span className='font-bold'>Zero database fee </span> 
            with <br />decentralized data in browsers <br />+ secure with cryptography <br />+ real-time data syncing</div>
            <img className='w-full h-auto' src={Future} alt="" />
          </div>
          <div className='w-full p-3 lg:p-20 border-gray-200 border-8 flex flex-col items-center'>
            <div className='text-md lg:text-3xl text-left lg:text-center text-gray-800'>You just build your app and scale. 
            <br />We set up <span className='font-bold'>authentication</span>.<br />We implement <span className='font-bold'>storage</span>.<br />We build your <span className='font-bold'>storage</span>.</div>
            <img className='w-full h-auto' src={Doge} alt="" />
          </div>
      </div>
      <div className='bg-gray-200 w-screen h-32'>
      </div>
    </div>
    );
  }
  
  export default Home;