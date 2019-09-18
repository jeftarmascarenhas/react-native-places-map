import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Alert,
  Text,
  Image,
  Dimensions,
} from 'react-native'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

import { images, mapsOptions } from '../../utils'
import placeResults from '../../fake-data/places'
import MarkerPlaces from './components/markerPlaces'
import PlaceCarousel, {
  PlaceInfor,
  PlaceList,
  PlaceTitle,
  PlaceRating,
  PlacePhoto,
} from './components/placeCarousel'
import * as S from './styled'

const { width } = Dimensions.get('window')

const Maps = () => {
  const [currentPosition, setCurrentPosition] = useState({
    latitude: 0,
    longitude: 0,
  })

  const [places, setPlaces] = useState([])

  let mapViewRef = null
  const urlPhoto =
    'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='
  const apiKey = 'AIzaSyD1So5tKMwRkLBp6BCiH-Dvq3XB8de1Iyg'
  const getUrlWithParams = (
    lat,
    long,
    radius = 1500,
    type = 'restaurant',
    API = 'AIzaSyD1So5tKMwRkLBp6BCiH-Dvq3XB8de1Iyg',
  ) => {
    return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1500&type=restaurant&key=${apiKey}`
  }

  const handleOnMomentumScrollEnd = event => {
    const scrolled = event.nativeEvent.contentOffset.x
    const place = scrolled > 0 ? scrolled / width : 0
    const { location } = places[place].geometry
    const { lat: latitude, lng: longitude } = location
    mapViewRef.animateCamera({
      center: {
        latitude,
        longitude,
      },
    })
  }

  useEffect(() => {
    // const getPlaces = async (latitude, longitude) => {
    //   try {
    //     const url = getUrlWithParams(latitude, longitude)
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     const { results } = data
    //     setPlaces(results)
    //   } catch (error) {
    //     Alert.alert(JSON.stringify(error))
    //   }
    // }
    const getPlaces = (latitude, longitude) => {
      setPlaces(placeResults.results)
    }
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        setCurrentPosition({ latitude, longitude })
        getPlaces(latitude, longitude)
      },
      error => {
        Alert.alert('Error', JSON.stringify(error))
      },
    )
  }, [])

  return (
    <S.Container>
      <MapView
        ref={map => {
          mapViewRef = map
        }}
        style={{ ...StyleSheet.absoluteFillObject }}
        rotateEnabled={false}
        customMapStyle={mapsOptions.customMapStyle}
        initialRegion={{
          ...currentPosition,
          latitudeDelta: 0.0142,
          longitudeDelta: 0.0231,
        }}
      >
        <Marker coordinate={currentPosition} />
        {!!places.length && <MarkerPlaces places={places} />}
      </MapView>
      {!!places.length && (
        <PlaceCarousel onMomentumScrollEnd={handleOnMomentumScrollEnd}>
          {places.map((place, idx) => (
            <PlaceList width={width} key={idx}>
              <PlacePhoto
                source={{
                  uri:
                    'https://lh4.googleusercontent.com/-1wzlVdxiW14/USSFZnhNqxI/AAAAAAAABGw/YpdANqaoGh4/s1600-w400/Google%2BSydney',
                }}
              />
              <PlaceInfor>
                <PlaceTitle>{place.name}</PlaceTitle>
                <PlaceRating>Rating: {place.rating}</PlaceRating>
              </PlaceInfor>
            </PlaceList>
          ))}
        </PlaceCarousel>
      )}
    </S.Container>
  )
}

// place.geometry.location.lat

export default Maps
