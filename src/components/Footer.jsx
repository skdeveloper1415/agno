import Logo from '../assets/logo.png';
import X from '../assets/x.png'
import In from '../assets/in.png'
import Mail from '../assets/mail.png'
import Join from '../assets/join.png'


function Footer() {
  return (
    <div className='bg-[#f9f9f9] pt-[60px] pb-8 px-10'>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/*col*/}
        <div>
          <img src={Logo} alt="logo" className='w-[300px]' />
        </div>
        {/*col*/}
        <div className='grid grid-cols-2'>
          {/*col*/}
          <div className='flex flex-col gap-6'>
            <div className='text-[#202020] font-bold'>Connect with us</div>
            <ul className='flex flex-col gap-2.5'>
              <li><a href="" className='flex items-center gap-2.5'><img src={X} alt="" /> <span className='text-[#202020]'>@AgnoAgi</span> </a></li>
              <li><a href="" className='flex items-center gap-2.5'><img src={In} alt="" /> <span className='text-[#202020]'>@agno-agi</span> </a></li>
              <li><a href="" className='flex items-center gap-2.5'><img src={Mail} alt="" /> <span className='text-[#202020]'>support@agno.com</span> </a></li>
            </ul>
          </div>
          {/*col*/}
          <div>
            <div>
              <div className='flex flex-col gap-2 items-start'>
                <h4 className='text-lg font-semibold'>Join our Discourse community</h4>
                <p className='text-base'>Get support, share and connect with AI developers.</p>
                <a href='' className='border border-[#e0e0e0] p-2 rounded-lg '><span className='bg-[#E0E0E0] text-black font-light px-2 py-1 rounded-4xl flex items-center gap-2.5'><img src={Join} alt="" /> Join our community</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-5 max-lg:flex-wrap">
        <div>
          <p>© 2025 Agno. All rights reserved.</p>
        </div>
        <div className='underline text-black flex items-center gap-2.5'>
          <button href=''>Terms of Service</button>
          <button href=''>Privacy Policy</button>
        </div>
      </div>
    </div>
  )
}

export default Footer