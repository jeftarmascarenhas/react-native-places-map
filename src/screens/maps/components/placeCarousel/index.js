import React from 'react'
import { Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import * as S from './styled'

export const { PlaceList, PlaceInfor, PlaceTitle, PlaceRating, PlacePhoto } = S

const PlaceCarousel = ({ children, onMomentumScrollEnd }) => {
  return (
    <S.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      onMomentumScrollEnd={onMomentumScrollEnd}
    >
      {children}
    </S.ScrollView>
  )
}

PlaceCarousel.propTypes = {
  children: PropTypes.node.isRequired,
  onMomentumScrollEnd: PropTypes.func.isRequired,
}

export default PlaceCarousel
