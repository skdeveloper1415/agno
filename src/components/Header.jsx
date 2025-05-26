import { Menubar } from 'primereact/menubar';
import Logo from '../assets/logo.png';

function Header() {
    const items = [
        {
            label: 'Blog',
        },
        {
            label: 'Docs',
        },
        {
            label: '27K',
        },
        {
            label: 'Changelog',
        }
    ];
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 px-10 pt-5'>
        <div><img src={Logo} alt="logo" className='w-[4.5625rem]' /></div>
        <div className='flex items-center justify-center max-lg:grow max-lg:w-full max-lg:justify-end'><Menubar model={items} className="my-custom-class" /></div>
        <div className='flex items-center gap-2 justify-end max-lg:hidden'>
            <a href='' className='border border-[#e0e0e0] p-2 rounded-lg'><span className='bg-[#E0E0E0] text-black font-light px-2 py-1 rounded-4xl'>LOGIN</span></a>
            <a href='' className='border border-[#e0e0e0] p-2 rounded-lg'><span className='bg-[#FF4017] text-white font-light px-2 py-1 rounded-4xl'>TRY DEMO</span></a>
        </div>
    </div>
  )
}

export default Header