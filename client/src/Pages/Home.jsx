import { Box } from '@chakra-ui/react'
import React from 'react'
import Slider from './Slider'
// import data from "../dataslider/data.json"
import { useSelector } from 'react-redux'
import  { Slideshow } from './Carousel'


const Home = () => {

   const slidedata = useSelector((store)=>store.productdata.data)
    console.log(slidedata,'data')
    const face = slidedata.filter((item) => {
      return item.title.includes("Face");
    });

    const skin = slidedata.filter((item) => {
      return item.title.includes("Skin");
    });

    const eye = slidedata.filter((item) => {
      return item.title.includes("Eye");
    });
    // console.log(women,"sliderdata")


  return (
    <Box>
     {/* <Sidemenu></Sidemenu> */}
    <Slideshow></Slideshow>
    <div style={{marginTop:"4.5rem"}}>  <img style={{margin:"auto"}} src={"https://www.beautybebo.com/pub/media/blue_heaven.jpg"}></img></div>
  
    
    <Slider Sliderdata={face}></Slider>  
    <div style={{display:"flex",justifyContent:"space-around"}}> 
    <div><img  src={"https://www.beautybebo.com/pub/media/mega-menu/beeone.jpg"}></img></div>
     <div><img  src={"https://www.beautybebo.com/pub/media/mega-menu/beeone.jpg"}></img></div>
     </div>
    <Slider Sliderdata={skin}></Slider>  
    <div style={{marginTop:"3.5rem"}}> 
     <img style={{margin:"auto"}} src={"https://www.beautybebo.com/pub/media/mega-menu/homepage.jpg"}></img></div> 
    <Slider Sliderdata={eye}></Slider>   
    <div style={{marginTop:"3.5rem"}}>  <img style={{margin:"auto"}} src={"https://www.beautybebo.com/pub/media/mega-menu/offer.gif"}></img></div> 
     </Box>

  )
}

export default Home