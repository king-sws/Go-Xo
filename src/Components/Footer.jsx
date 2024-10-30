import { FaAngleRight } from "react-icons/fa";


const Footer = () => {
    const sitemap = [
        {
          label: 'Home',
          href: '#home'
        },
        {
          label: 'About',
          href: '#about'
        },
        {
          label: 'Work',
          href: '#work'
        },
        {
          label: 'Reviews',
          href: '#reviews'
        },
        {
          label: 'Contact me',
          href: '#contact'
        }
      ];
      
      const socials = [
        {
          label: 'GitHub',
          href: 'https://www.github.com/king-sws'
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/oussama-boufi'
        },
        {
          label: 'Twitter X',
          href: 'https://x.com/codewithsadee_'
        },
        {
          label: 'Instagram',
          href: 'https://www.linkedin.com/in/oussama-boufi'
        },
        {
          label: 'CodePen',
          href: 'https://www.linkedin.com/in/oussama-boufi'
        }
      ];

      const date = new Date().getFullYear()

  return (
    <section className="sec">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] up" >Let&apos;s work together today!</h2>
                    <button className="btn btn-primary" >
                        <a href="mailto:oboufi88@gmail.com" className="flex items-center gap-3" >
                        Start project <FaAngleRight />

                        </a>
                    </button>
                </div>
                <div className="grid grid-cols-2 ml-10 ">
                    <div className="up">
                        <p className="mb-2" >Sitemap</p>
                        <ul>
                            {sitemap.map((item, i)=>(
                                <li className="block text-sm text-zinc-400 hover:text-zinc-200 transition-colors py-1" key={i} >
                                    <a href={item.href} className="" alt={item.label} > {item.label} </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="up" >
                        <p className="mb-2">Socials</p>
                        <ul>
                            {socials.map((item, i)=>(
                                <li className="block text-sm text-zinc-400 hover:text-zinc-200 transition-colors py-1" key={i} >
                                    <a href={item.href} className="" alt={item.label} > {item.label} </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
            <div className="flex up items-center justify-between pt-10 pb-5 ">
                <a href="/" className="" >
                    <img src="/logo.svg" alt="" width={40} height={40} className="" />

                </a>
                <p className="text-sm text-zinc-500">
                    &copy; {date} <span className="text-zinc-200">Oussama.</span> 

                </p>
            </div>
        </div>
    </section>
  )
}

export default Footer