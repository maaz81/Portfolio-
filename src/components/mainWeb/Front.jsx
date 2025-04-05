import React , {useEffect,useRef} from 'react';
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'; 

const Front = () => {
    const conterRef = useRef(null);
    useEffect(() => {
      if(!conterRef.current) return;
      const scroll = new LocomotiveScroll({
        el:conterRef.current,
        smooth:true,
        smartphone:{
          smooth: true,
        },
        tablet:{
          smooth:true,
        },
        lerp: 0.1

      });
      window.scroll = scroll;
      return()=>{
        if(scroll) scroll.destroy
      };
    }, [])
    
return (

    <div ref={conterRef} data-scroll-container  className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-indigo-900 to-indigo-500 text-white p-6 sm:p-10">
        <h2 data-scroll data-scroll-speed='0.3'  className="text-2xl sm:text-2xl md:3xl mb-6 sm:mb-8 underline underline-offset-8 text-center">
            Check the Github Repository
        </h2>
        <a className='bg-blue-500 px-3 py-1 rounded-md text-xl mb-3 mt-3 text-white' href="https://github.com/maaz81/">Github </a> 
        <p data-scroll data-scroll-speed='-0.3' className="text-lg sm:text-2xl text-center mb-4">
            Passionate about crafting responsive and dynamic web experiences
        </p>
        <p className="text-base sm:text-xl text-center">
            Using modern technologies to bring ideas to life on the web.
        </p>
    </div>
)
}

export default Front