import Enterprise from '../imgs/enterprise.png'
import Robo from '../imgs/robo.png'
import Doge from '../imgs/doge.png'
import Hack from '../imgs/hack.png'
import '../components/Products.css'

function Team() {
    return (
        <div style={{marginTop: '8rem'}} className='bg-gray-200 flex flex-col items-center'>
            <div style={{height: '400px'}} className='bg-gray-50 w-screen max-w-screen-xl mx-auto my-10 flex'>
                <div className='w-1/2 h-full flex flex-col items-center justify-center'>
                    <div className='font-mono font-bold text-3xl p-5'>Suning Yao</div>
                    <div className='font-mono text-xl p-2'>CEO/CTO of URTH.ink</div>
                    <div className='font-mono text-xl p-1'>Ex-Microsoft Engineer</div>
                    <div className='font-mono text-xl p-1'>Ex-Unionpay Developer</div>
                    <div className='font-mono text-xl p-1'>NYU BS in Math</div>
                </div>
                <img className='w-52 sm:w-auto sm:h-auto lg:px-40 py-20' src={Enterprise} alt="" />
            </div>
            <div style={{height: '400px'}} className='bg-gray-50 w-screen max-w-screen-xl mx-auto my-10 flex'>
                <img className='w-52 sm:w-7/12 sm:h-auto lg:px-28 py-32 lg:py-8' src={Hack} alt="" />
                <div className='w-1/2 h-full flex flex-col items-center justify-center text-left'>
                    <div className='font-mono font-bold text-3xl p-5'>Yufei Ma</div>
                    <div className='font-mono text-xl p-2'>CMO of URTH.ink</div>
                    <div className='font-mono text-xl p-1'>Economics Major</div>
                    <div className='font-mono text-xl p-1'>Marketing Lead</div>
                    <div className='font-mono text-xl p-1'>Finance Master</div>
                </div>
            </div>
            <div style={{height: '400px'}} className='bg-gray-50 w-screen max-w-screen-xl mx-auto my-10 flex'>
                <div className='w-1/2 h-full flex flex-col items-center justify-center'>
                    <div className='font-mono font-bold text-3xl p-5'>Jax Yan</div>
                    <div className='font-mono text-xl p-2'>CFO of URTH.ink</div>
                    <div className='font-mono text-xl p-1'>Philosopher Mind</div>
                    <div className='font-mono text-xl p-1'>Crypto Investor</div>
                    <div className='font-mono text-xl p-1'>Business Leader</div>
                </div>
                <img className='w-52 sm:w-auto sm:h-auto lg:px-48 py-2' src={Robo} alt="" />
            </div>
            <div style={{height: '400px'}} className='bg-gray-50 w-screen max-w-screen-xl mx-auto my-10 flex'>
                <img className='w-52 sm:w-auto sm:h-auto lg:px-28 py-32 lg:py-8' src={Doge} alt="" />
                <div className='w-1/2 h-full flex flex-col items-center justify-center text-left'>
                    <div className='font-mono font-bold text-3xl p-5'>Bryce Zhu</div>
                    <div className='font-mono text-xl p-2'>COO of URTH.ink</div>
                    <div className='font-mono text-xl p-1'>C++ Developer</div>
                    <div className='font-mono text-xl p-1'>IoT Device Expert</div>
                    <div className='font-mono text-xl p-1'>MatLab Expert</div>
                </div>
            </div>
      </div>
    );
  }
  
  export default Team;