import "./cards.scss"
import React from 'react'





const Cards = ({data}) => {
  return (

    <div className="cards">

      <div className="w-row">
          <div></div>
        <div className="columnImg">
          <img
            src={data.src}
            loading="lazy"
            width="163"
            sizes="(max-width: 479px) 70vw, (max-width: 767px) 163px, (max-width: 991px) 134.1640625px, 163px"
            alt="Medical API example data"
            srcSet={data.srcSet}
            className="image-84"
          />
        </div>
        <div className="medical-api">
          <h2 className="heading-10">{data.heading}</h2>
          <p className="paragraph-8">
            {data.desc}
            <br />
            &zwj;
            <br />
            &zwj;
          </p>
        </div>
      </div>
      
  
    </div>
    
  )
}

export default Cards
