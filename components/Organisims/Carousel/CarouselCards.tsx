import React, {useState} from 'react'
import { View } from "react-native"
import Carousel, {Pagination} from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './Carousel'
import { images } from '../../../data'






  interface IProps {
  data : string[]
}

const CarouselCards = (props: IProps) => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = useState(0)
  const {data} = props



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