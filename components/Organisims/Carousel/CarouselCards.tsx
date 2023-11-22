import React, {useState} from 'react'
import { View } from "react-native"
import Carousel, {Pagination} from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './Carousel'




const data = [
    {
      title: "Aenean leo",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
  ];

const CarouselCards = () => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = useState(0)
  

  return (
    <View>
    <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        style={{marginTop: -190, paddingBottom: -90}} 
        autoplay
        autoplayInterval={3000}
/>
    </View>
  )
}


export default CarouselCards