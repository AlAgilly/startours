
import { starlogo } from './assets'
import './index.css'


function App() {

  return (
//     <>
// <div className='hero min-h-screen'>
// <nav className='grid grid-cols-5 relative items-center justify-center px-[100px] py-2'>
//       <div className='flex flex-inline items-center justify-end w-full col-span-2 gap-7 text-white'>
//       <a href="">Home</a>
//       <a href="">Servcies</a>
//       <a href="">Pricing</a>
//       </div>  
//       <img src={starlogo} alt="" className='h-[50px] m-auto'/>
//       <div className='flex flex-inline items-center justify-start col-span-2  gap-7 text-white'>
//       <a href="">About</a>
//       <a href="">Contact</a>
//       <a href="">Language</a>
//       </div>
//           </nav>
//       <div className='flex w-full items-center justify-end'>
//         <div className='w-1/2 content h-full mt-36 mr-16'>
//           <h1>Don't just visit Egypt, <br /> Experience it</h1>
//         </div>
//       </div>
// </div>
//     </>

    <>
<div className='hero pb-28 min-h-screen'>
<nav className='relative items-center justify-center nivnav'>
<div className='flex items-center px-5 py-5 topnav'>
<img src={starlogo} alt="" className='h-[50px]'/>
<h1>Star Tours</h1>
</div>
<div className='navy sticky top-0'>
<div className='flex flex-inline items-center justify-start w-full col-span-2 gap-2'>
      <a href="">Home</a>
      <a href="">Tours</a>
      <a href="">Pricing</a>
      <a href="">About</a>
      <a href="">Contact</a>
      </div>
</div>
          </nav>
      <div className='flex flex-row min-h-[500px] w-full justify-end p-16'>
      <div className='grid grid-cols-1 content w-1/2 items-center'>
      <h1>Dont just visit Egypt,<br/> <span className='boo'>Experience</span> it</h1>
      <div className='flex gap-7'>
      <a href="" className='wavebutton'>
  <span>Book Now</span>
  <div className='wave'></div>
</a>
<a href="" className='wavebutton2'>
  <span>Learn More</span>
  <div className='wave2'></div>
</a>
      </div>
      </div>

      </div>
</div>
<div className='min-h-screen'></div>
    </>
  )
}

export default App
