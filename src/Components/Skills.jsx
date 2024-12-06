import SkillsCard from "./SkillsCard";

const Skills = () => {
  const skillItems = [ 
    {
      imgSrc: '/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/html-5.svg',
      label: 'HTML',
      desc: 'Markup language'
    },
    {
      imgSrc: '/css3.svg',
      label: 'CSS',
      desc: 'Style sheet language'
    },
    {
      imgSrc: '/javascript.svg',
      label: 'JavaScript',
      desc: 'Programming language'
    },
    {
      imgSrc: '/typescript.svg',
      label: 'TypeScript',
      desc: 'Superset of JavaScript'
    },
    {
      imgSrc: '/react.svg',
      label: 'React',
      desc: 'JavaScript library'
    },
    {
      imgSrc: '/next-js.svg',
      label: 'Next.js',
      desc: 'React framework'
    },
    { 
      imgSrc: '/tailwindcss.svg',
      label: 'Tailwind CSS',
      desc: 'Utility-first CSS framework'
    },
    {
      imgSrc: '/bootstrap.svg',
      label: 'Bootstrap',
      desc: 'CSS framework'
    },
    {
      imgSrc: '/node.svg',
      label: 'Node.js',
      desc: 'JavaScript runtime'
    },
    {
      imgSrc: '/expressjs.svg',
      label: 'Express.js',
      desc: 'Framework for Node.js'
    },
    {
      imgSrc: '/mongodb.svg',
      label: 'MongoDB',
      desc: 'NoSQL database'
    },
    {
      imgSrc: '/mysql-3.svg',
      label: 'MySQL',
      desc: 'Relational database'
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
                {skillItems.map(({imgSrc , label , desc},i)=>(
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