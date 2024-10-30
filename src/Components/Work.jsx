import WorkCard from "./WorkCard";

const Work = () => {
    const works = [
        {
          imgSrc: '/Hotql.png',
          title: 'Hotel reservations',
          tags: ['API', 'MVC', 'Development'],
          projectLink: 'https://www.github.com/king-sws'
        },
        {
          imgSrc: '/Proto.png',
          title: 'A Portfolio Web',
          tags: ['API', 'SPA'],
          projectLink : "https://www.github.com/king-sws"
        },
        {
          imgSrc: '/Robot.png',
          title: 'Next Payment Method',
          tags: ['Development', 'API'],
          projectLink: 'https://www.github.com/king-sws'
        },
        {
          imgSrc: '/first1.png',
          title: 'CRM new website',
          tags: ['Web-design', 'Development'],
          projectLink: 'https://www.github.com/king-sws'
        },
        {
          imgSrc: '/Dach.png',
          title: 'DashBord website',
          tags: ['eCommerce', 'Development'],
          projectLink: 'https://www.github.com/king-sws'
        },
        {
          imgSrc: '/ho.jpeg',
          title: 'Health App',
          tags: ['Web-design', 'Development'],
          projectLink: 'https://www.github.com/king-sws'
        },
      ];
  return (
    <section id="work" className="sec">
        <div className="container">
            <div className="">
                <h1 className="headline-2 mb-8 up " >My portfolio highlights</h1>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-x-4 gap-y-5 ">
                {works.map(({imgSrc,title,tags,projectLink},i)=>(
                    <div key={i} className="work-card">
                        <WorkCard imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes='up' />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work