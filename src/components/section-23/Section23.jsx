import React from 'react'
import "./section23.scss"
import Cards from '../cards/Cards'
const Section23 = () => {
  let data = [
    {
      id:1,
      heading:"Ted",
      desc:"Don't let manual administration slow you down. Ted automates your workflow and seamlessly integrates to legacy systems. Care delivery made simple, fast and easier with AI. ",
      src:"https://firebasestorage.googleapis.com/v0/b/eacc-16da4.appspot.com/o/WhatsApp%20Image%202024-02-07%20at%2011.38.07.jpeg?alt=media&token=0dce5643-d431-4dd0-8c77-984bfcec8ce2"
    },
    {
      id:2,
      heading:"Wellness Insight ",
      desc:"Lay a strong foundation for Parent relationship. Care delivers rich wellness insights to parents fostering an informative and preventative enviornment for childcare management.",
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStoDZGkc9DcRcRogMVRDCjLfKpdtJqLDV8dEHLgGFWxSAHUBJQbnOgKd9CU8Vmp49oeKY&usqp=CAU"
    },
    {
      id:3,
      heading:"Free Consultancy",
      desc:"We help parents understand their policy, get answers to their burning questions, and help with claims if they ever have to use their policy, all at the same place.",
      src:"https://static.vecteezy.com/system/resources/thumbnails/000/966/159/small/doctor-consulting-with-patient.jpg"

    }
  ]
  return (
    <div className='section23'>
    <Cards data={data[0]}/>
  
    <Cards data={data[1]}/>
    <Cards data={data[2]}/>
    </div>
  )
}

export default Section23
