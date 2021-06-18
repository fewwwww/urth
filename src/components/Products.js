import Enterprise from '../imgs/enterprise.png'
import '../components/Products.css'

function Products() {
    return (
        <div style={{marginTop: '8rem'}} className='bg-gray-200 flex flex-col items-center'>
            <div style={{paddingTop: '5rem'}} className='text-xl lg:text-5xl p-5 lg:p-10 font-mono text-gray-800'>Demo created by URTH.ink</div>
            <div className='bg-gray-200 w-screen max-w-screen-2xl mx-auto flex flex-wrap sm:flex-nowrap'>
                <div id='frame' className='relative z-0 bg-gray-100 w-full p-3 lg:p-10 border-gray-200 border-8 flex flex-col items-center overflow-scroll'>
                    <div className='text-md hidden sm:block lg:text-3xl text-left lg:text-center font-mono text-gray-700'>
                        Basic to-do list app
                    </div>
                    <div className='absolute hidden top-28 lg:block'><iframe src="https://fewwwww.github.io/dtodolist/" name="myiFrame" scrolling="yes" frameborder="1" marginheight="0px" marginwidth="0px" height="600px" width="600px" allowfullscreen></iframe></div>
                    <div className='absolute hidden top-4 sm:block lg:hidden'><iframe src="https://fewwwww.github.io/dtodolist/" name="myiFrame" scrolling="yes" frameborder="1" marginheight="0px" marginwidth="0px" height="300px" width="300px" allowfullscreen></iframe></div>
                    <div className='absolute block sm:hidden lg:hidden'><iframe src="https://fewwwww.github.io/dtodolist/" name="myiFrame" scrolling="yes" frameborder="1" marginheight="0px" marginwidth="0px" height="350px" width="250px" allowfullscreen></iframe></div>
                </div>
                <div className='bg-gray-100 w-full p-3 lg:p-10 border-gray-200 border-8 flex flex-col items-center'>
                    <div className='text-md lg:text-3xl text-left font-mono text-gray-800'>
                        Trust us, every app is as simple as this to-do list app.
                        <br />
                        Becuase We deal with the database and server implementation.
                        <br />
                        <br />
                        <span className='font-bold'>You just save $$$.</span>
                        <br />
                        <span className='font-bold'>A lot more $$$.</span>
                    </div>    
                    <img className='w-1/2 h-auto' src={Enterprise} alt="" />
                </div>
            </div>
            <div className='bg-gray-200 w-screen h-32'>
            </div>
      </div>
    );
  }
  
  export default Products;