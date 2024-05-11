import "../styles/slideShow.scss"
import { useState } from "react";

function SlideShow({datas, setDatas}) {

    const [index, setIndex] = useState(0)

    const handelClick = () => {  
        setIndex(index + 1 )         
      }    
    
    return (
        <div>            
            {datas.map((data) => {           
                return (                   
                    <div key={`${data.title}-${index}`} className="gallery">
                        <img src={data.pictures[index]} alt="vue appartement" />
                        <button onClick={handelClick}>suivant</button>
                        <h2>{index}</h2>
                    </div>
                )
            })}                
        </div>
    )
}

export default SlideShow

// function SlideShow({ datas }) {
//     const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide

//     const nextSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % datas.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide - 1 + datas.length) % datas.length);
//     };

//     return (
//         <div className="slideshow-container">
//             <div className="slides">
//                 {datas.map((data, index) => (
//                     <div key={data.id} className={index === currentSlide ? "slide active" : "slide"}>
//                         <img src={data.pictures[0]} alt={data.title} />
//                     </div>
//                 ))}
//             </div>
//             {datas.length > 1 && (
//                 <div className="controls">
//                     <button onClick={prevSlide}>&#10094;</button>
//                     <button onClick={nextSlide}>&#10095;</button>
//                 </div>
//             )}
//             {datas.length > 1 && (
//                 <div className="pagination">
//                     {datas.map((data, index) => (
//                         <span
//                             key={data.id}
//                             className={index === currentSlide ? "dot active" : "dot"}
//                             onClick={() => setCurrentSlide(index)}
//                         ></span>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

