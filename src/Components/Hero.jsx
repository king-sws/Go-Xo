import { FaArrowDown } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";


const Hero = () => {
  return (
    <section id="home" className="lg:pt-[6rem] pt-28">
        <div className="container lg:grid lg:grid-cols-2 lg:gap-10 items-center ">
            <div className="">
                <div className="flex gap-3 ">
                <img src="/avatar-1.jpg" alt="" className="rounded-lg" />
                <div className="relative flex items-center gap-2">
                    <div className="rounded-full bg-emerald-400 w-2 h-2 animate-ping  " />
                    <h1 className="text-sm text-gray-400 " >Available for work</h1>
                </div>
                </div>
                <div className="">
                    <h1 className="headline-1 max-w-[15ch] sm:max-w-[20ch] mt-5 mb-8 " >Building Scalable Modern Websites for the Future</h1>
                </div>
                <div className="flex items-center gap-6 ">
                    <button className="btn btn-primary" >
                        <a href="/Resume-BF.pdf" target="_blank" className="flex items-center gap-3" >
                            Download CV <FaDownload />
                        </a>
                    </button>
                    <button className="btn btn-out" >
                        <a href="#about" className="flex items-center gap-3" >
                        Scroll Down <FaArrowDown />
                        </a>
                    </button>
                    
                    
                    
                </div>
                
            </div>
            <div className="hidden lg:block">
                <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden " >
                    <img src="/hero-banner.png" width={656} height={800} className="w-full" alt="" />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero