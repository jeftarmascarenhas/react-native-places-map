import React, { useState, useEffect } from 'react'
import { StyleSheet, Alert, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

import { translate } from '../../locales'
import { images, mapsOptions } from '../../utils'
import Loading from '../../components/loading'
import SearchLocales from '../../components/searchLocales'
import CalloutPlaces from './components/calloutPlaces'
import mapsService from '../../services/mapServece'
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

  const handleOnMomentumScrollEnd = event => {
    const scrolled = event.nativeEvent.contentOffset.x
    const place = scrolled > 0 ? scrolled / width : 0
    const { mark } = places[place]
    const { location } = places[place].geometry
    const { lat: latitude, lng: longitude } = location
    mapViewRef.animateCamera({
      center: {
        latitude,
        longitude,
      },
      duration: 1000,
    })
    if (mark) {
      setTimeout(() => {
        mark.showCallout()
      }, 1000)
    }
  }

  const getPlaces = async (latitude, longitude) => {
    try {
      const response = await mapsService.getUrlWithParams(latitude, longitude)
      const data = await response.json()
      const { results } = data
      setPlaces(results)
    } catch (error) {
      Alert.alert('Ops.. algo deu errado.', JSON.stringify(error))
    }
  }

  const handleOnLocationSelected = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude },
    } = geometry

    setCurrentPosition({ latitude, longitude })
    getPlaces(latitude, longitude)
    if (places.length && places[0].mark) {
      const { mark } = places[0]
      setTimeout(() => {
        mark.showCallout()
      }, 1200)
    }
  }

  const mapReady = () => {
    if (places.length && places[0].mark) {
      const { mark } = places[0]
      mark.showCallout()
    }
  }

  useEffect(() => {
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
      {currentPosition.latitude ? (
        <MapView
          ref={map => {
            mapViewRef = map
          }}
          style={{ ...StyleSheet.absoluteFillObject }}
          showsUserLocation
          loadingEnabled
          rotateEnabled={false}
          customMapStyle={mapsOptions.customMapStyle}
          region={{
            ...currentPosition,
            latitudeDelta: 0.0142,
            longitudeDelta: 0.0231,
          }}
          onMapReady={mapReady}
        >
          <Marker coordinate={currentPosition} image={images.markerUser} />
          {!!places.length &&
            places.map((place, idx) => (
              <Marker
                ref={mark => {
                  place.mark = mark
                }}
                key={idx}
                coordinate={{
                  latitude: place.geometry.location.lat,
                  longitude: place.geometry.location.lng,
                }}
              >
                <CalloutPlaces place={place} />
              </Marker>
            ))}
        </MapView>
      ) : (
        <Loading title={translate('Loading')} />
      )}
      <SearchLocales onLocationSelected={handleOnLocationSelected} />
      {!!places.length && (
        <PlaceCarousel onMomentumScrollEnd={handleOnMomentumScrollEnd}>
          {places.map((place, idx) => (
            <PlaceList width={width} key={idx}>
              <PlacePhoto source={images.logo} />
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
