import PropTypes from "prop-types"

const ReviewCard = ({content, name, imgSrc, company }) => {
    const rating = new Array(5);
    rating.fill({
        icon : 'star',
        style : {fontVariationSettings: '"FILL" 1 ' }
    })
  return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
            <div className="flex items-center gap-1 mb-3 ">
                {rating.map(({icon, style},key)=>(
                    <span className="material-symbols-outlined text-yellow-300 text-[18px] " style={style} key={key} >
                        {icon}
                    </span>
                ))}
            </div>
            <div className="text-zinc-400 mb-8">
                {content}
            </div>
            <div className="flex items-center gap-4 mt-auto">
                <figure className="img-box rounded-lg" >
                    <img src={imgSrc} width={44} height={44} alt="h" loading="lazy" className="img-cover rounded-[6px]  " />
                </figure>
                <div className="">
                    <div className="">
                        <p> {name} </p>
                    </div>
                    <div className="text-sm text-zinc-400 tracking-wider">
                        <p> {company} </p>
                    </div>
                </div>
                
                </div>
        </div>
    )
}
ReviewCard.prototype = {
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
}
export default ReviewCard