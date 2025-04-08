// import data from "../../../data/index.json";

// export default function Experience() {
//     return (
//         <section className="work--section" id="Experience">
//           <div className="portfolio--container">
//             <h2 className="work--section--heading">Experience</h2>
//           </div>
//           <div className="work--section--container">
//             {data?.experience?.slice().reverse().map((item, index) => ( 
//               <div key={index} className="work--section--card">
//                 <div className="work--section--header">
//                   <div className="work--section--img">
//                     <img src={item.src} alt={item.title} />
//                   </div>
//                   <h3 className="work--section--title">{item.title}</h3>
//                 </div>

//                 <div className="work--section--card--content">
//                   <p className="work--section--description">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//     );
// }

import React, { useState, useEffect } from "react";
import data from "../../../data/index.json";
import { useNavigate } from "react-router-dom";

export default function Experience() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (item) => {
    if (isMobile) {
      navigate(`/experience/${item.id}`, { state: { item } });
    }
  };

  return (
    <section className="work--section" id="Experience">
      <div className="portfolio--container">
        <h2 className="work--section--heading">Experience</h2>
      </div>
      <div className="work--section--container">
        {data?.experience?.slice().reverse().map((item, index) => (
          <div
            key={index}
            className="work--section--card"
            onClick={() => handleClick(item)}
          >
            <div className="work--section--header">
              <div className="work--section--img">
                <img src={item.src} alt={item.title} />
              </div>
              <h3 className="work--section--title">{item.title}</h3>
            </div>
            {!isMobile && (
              <div className="work--section--card--content">
                <p className="work--section--description">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
