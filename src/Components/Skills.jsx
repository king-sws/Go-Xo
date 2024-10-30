import SkillsCard from "./SkillsCard";

const Skills = () => {
    const skillItem = [
        {
          imgSrc: '/figma.svg',
          label: 'Figma',
          desc: 'Design tool'
        },
        {
          imgSrc: '/css3.svg',
          label: 'CSS',
          desc: 'User Interface'
        },
        {
          imgSrc: '/javascript.svg',
          label: 'JavaScript',
          desc: 'Interaction'
        },
        {
          imgSrc: '/typescript.svg',
          label: 'TypeScript',
          desc: 'Interaction'
        },
        {
          imgSrc: '/php.svg',
          label: 'PHP',
          desc: 'Web Server'
        },
        {
          imgSrc: '/laravel-2.svg',
          label: 'Laravel',
          desc: 'PHP Framework'
        },
        {
          imgSrc: '/mysql-3.svg',
          label: 'MySQL',
          desc: 'Database'
        },
        {
          imgSrc: '/react.svg',
          label: 'React',
          desc: 'Framework'
        },
        {
          imgSrc: '/next-js.svg',
          label: 'NextJS',
          desc: 'Framework'
        },
        { 
          imgSrc: '/tailwindcss.svg',
          label: 'TailwindCSS',
          desc: 'User Interface'
        },
      ];
  return (
    <section id="" className="sec" >
        <div className="container">
            <div className="">
                <h2 className="headline-2 reveal-up " >Essential Tools I use</h2>
                <p className="text-zinc-400 mt-3 reveal-up mb-8 max-w-[50ch] " >Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3 ">
                {skillItem.map(({imgSrc , label , desc},i)=>(
                    <div key={i} className="skill-item">
                        <SkillsCard img={imgSrc} label={label} desc={desc} classes="up" />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills