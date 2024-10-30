import ReviewCard from "./ReviewCard";

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Review = () => {
    const reviews = [
        {
          content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
          name: 'Sophia Ramirez',
          imgSrc: '/people-1.jpg',
          company: 'PixelForge'
        },
        {
          content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
          name: 'Ethan Caldwell',
          imgSrc: '/people-2.jpg',
          company: 'NexaWave'
        },
        {
          content: 'Outstanding developer! Built a great fucking robust site with perfect functionality. Efficient and detail-oriented.',
          name: 'Liam Bennett',
          imgSrc: '/people-3.jpg',
          company: 'CodeCraft'
        },
        {
          content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
          name: 'Noah Williams',
          imgSrc: '/people-4.jpg',
          company: 'BrightWeb'
        },
        {
          content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
          name: 'Ava Thompson',
          imgSrc: '/people-5.jpg',
          company: 'TechMosaic'
        },
        {
          content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
          name: 'Jonathan',
          imgSrc: '/people-6.jpg',
          company: 'Skyline Digital'
        }
      ];

      useGSAP(()=>{
        gsap.to('.slide', {
            scrollTrigger :{
                trigger: '.slide',
                scrub : true
            },
            x: '-1000'
        })
      })
      
  return (
    <section id="reviews" className="sec overflow-hidden">
        <div className="container">
            <div className="">
                <h2 className="headline-2 mb-8 up " >What Our Customers Say</h2>
                <div className="slide flex items-stretch gap-3 w-fit rounded-lg">
                    {reviews.map((review, index) => (
                        <div key={index} className="review">
                            <ReviewCard name={review.name} content={review.content} company={review.company} imgSrc={review.imgSrc} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Review