function Contact() {
    return (
        <div style={{marginTop: '8rem'}} className='bg-gray-200'>
            <div style={{height:'90vh'}} className='py-10 mx-auto bg-gray-200 w-screen max-w-screen-2xl flex flex-wrap'>
                <div className='h-full w-full lg:w-1/3 bg-gray-300 lg:border-8 lg:border-gray-200 flex flex-col justify-evenly px-3'>
                    <div className='text-5xl font-mono'>Individual</div>
                    <div className='text-gray-500 text-2xl'><span className='text-gray-800 text-5xl'>FREE</span>/Hour</div>
                    <div className='text-xl'>Training and Consulting.<br />Live code collaboration.<br />Scheduled in a timely manner.</div>
                    <div className='cursor-pointer w-11/12 py-5 bg-gray-50 text-xl text-center font-bold'><a href="mailto:sy2940@nyu.edu">CONTACT US</a></div>
                </div>
                <div className='h-full w-full lg:w-1/3 bg-gray-400 lg:border-8 lg:border-gray-200 flex flex-col justify-evenly px-3'>
                    <div className='text-5xl font-mono'>Team</div>
                    <div className='text-gray-600 text-2xl'><span className='text-gray-800 text-5xl'>$99</span>/App</div>
                    <div className='text-xl text-gray-900'>Live code collaboration.<br />Customized technical support.<br />Help launch your full stack app</div>
                    <div className='cursor-pointer w-11/12 py-5 bg-gray-100 text-xl text-center font-bold'><a href="mailto:sy2940@nyu.edu">CONTACT US</a></div>
                </div>
                <div className='h-full w-full lg:w-1/3 bg-gray-500 lg:border-8 lg:border-gray-200 flex flex-col justify-evenly px-3'>
                    <div className='text-5xl font-mono text-gray-100'>Enterprise</div>
                    <div className='text-gray-300 text-2xl'><span className='text-gray-100 text-5xl'>$999</span>/Project</div>
                    <div className='text-xl text-gray-200'>Customized technical support.<br />Full stack collaboration.<br />Lifetime scaling and management on project.</div>
                    <div className='cursor-pointer w-11/12 py-5 bg-gray-200 text-xl text-center font-bold'><a href="mailto:sy2940@nyu.edu">CONTACT US</a></div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Contact;