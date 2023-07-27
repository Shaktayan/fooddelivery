
import Carousel from "react-multi-carousel";
import {styled} from "@mui/material";
import { bannerData } from "../../constants/data";
import 'react-multi-carousel/lib/styles.css';

const Image = styled('img')({
    width: '100%',
    height : 400

})

const responsive = {
      desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Banner =() =>{

    return (
        <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        autoPlay={true}
        keyBoardControl={true}
        infinite={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
            {
                bannerData.map(data => (
                    <Image src={data.url} alt="banner" />
                ))
            }

        </Carousel>
    )
}
export default Banner;