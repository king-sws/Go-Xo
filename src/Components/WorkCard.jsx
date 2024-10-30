import PropTypes from "prop-types"

const WorkCard = ({imgSrc,title,tags,projectLink,classes}) => {
  return (
    <div className={'relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinv-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ' + classes}>
        <figure className="img-box aspect-square rounded-lg mb-4" >
            <img src={imgSrc} alt={title} loading="lazy" className="img-cover rounded-lg " />
        </figure>
        <div className="flex items-center justify-between">
            <div className="title-1 mb-3">
                <h3 className="" > {title} </h3>
            
                <div className="flex flex-wrap items-center gap-2 mt-4  ">
                    {tags.map((item , i)=>(
                        <span key={i} className="h-8 text-sm text-zoinc-400 rounded-lg bg-zinc-50/5 grid items-center px-2"> {item} </span>
                    ))}
                </div>
                </div>
                <div className="w-11 h-11 rounded-lg bg-sky-400 grid place-items-center text-zinc-950 shrink-0">
                    <span className="material-symbols-outlined" aria-hidden='true' >arrow_outward</span>
                </div>
            
        </div>
        <a href={projectLink} className="absolute inset-0"></a>
    </div>
  )
}
WorkCard.PropTypes ={
    imgSrc:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    tags:PropTypes.arrayOf(PropTypes.string).isRequired,
    projectLink:PropTypes.string.isRequired,
    classes:PropTypes.string
}
export default WorkCard