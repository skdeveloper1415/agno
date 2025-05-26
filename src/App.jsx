import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import './App.css'
import VerticalMode from './components/VerticalMode';
import Compliance from '../src/assets/1.png';
import DATA from '../src/assets/2.png';
import YourAgent from '../src/assets/3.png';
import Legal from '../src/assets/4.png';
import Marketing from '../src/assets/5.png';

function App() {
useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div className='flex items-center justify-center flex-col pt-32 gap-2.5 max-lg:px-5 text-center'>
        <div className='text-[#646464] border border-[#e0e0e0] rounded-lg py-1 px-2 text-xs'>Introducing the Global Agent Hackathon</div>
        <div className='text-base lg:text-[72px] font-bold text-[#202020]'>AI Agents for Engineers</div>
        <div className='flex items-center justify-center w-full'><VerticalMode /></div>
        <div>
          <p>Open source tools for building, shipping and monitoring Agentic systems</p>
        </div>
        <div className='flex items-center gap-2 justify-end pt-2.5'>
            <a href='' className='border border-[#e0e0e0] p-2 rounded-lg'><span className='bg-[#E0E0E0] text-black font-light px-2 py-1 rounded-4xl'>Build your AGENT</span></a>
            <a href='' className='border border-[#e0e0e0] p-2 rounded-lg'><span className='bg-[#FF4017] text-white font-light px-2 py-1 rounded-4xl'>TRY DEMO</span></a>
        </div>
      </div>
      <div className='flex items-center px-24 py-20'>
        <div data-aos="fade-right"><img src={Compliance} alt="" /></div>
        <div data-aos="fade-right"><img src={DATA} alt="" /></div>
        <div><img src={YourAgent} alt="" /></div>
        <div data-aos="fade-left"><img src={Legal} alt="" /></div>
        <div data-aos="fade-left"><img src={Marketing} alt="" /></div>
      </div>
    </>
  )
}

export default App
