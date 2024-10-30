
const About = () => {
    const aboutItems = [
        {
          label: 'Project done',
          number: 32
        },
        {
          label: 'Years of experience',
          number: 3
        }
      ];
  return (
    <section id="about" className="sec">
        <div className="container">
            <div className="bg-zinc-800/50 p-7 up rounded-lg md:p-12">
                <p className="flex tracking-wide text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] " >Welcome! I&apos;m Oussama, a professional web developer with a knack for crafting visually
                     stunning and highly functional websites. Combining creativity 
                     and technical expertise. I transform your vision into digital masterpiece
                      that excels in both appearance and performance.
                </p>
                <div className="flex flex-wrap gap-5 md:gap-7 items-center">
                    {aboutItems.map(({label, number}, key) => (
                        <div className="" key={key} >
                            <div className="flex items-center md:mb-2 gap-1 ">
                                <span className="text-2xl font-semibold md:text-4xl" >{number}</span>
                                <span className="text-cyan-300 text-xl " >+</span>
                            </div>
                            <p className="text-sm text-zinc-400" >{label}</p>
                        </div>
                    ) )}
                    <img src="/logo.svg" alt="" className="ml-auto md:w-[40px] " />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About