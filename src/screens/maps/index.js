import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Alert, Text, Image } from 'react-native'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

// import SearchLocalForm from '../../components/searchLocalForm'
import images from '../../utils/images'
import * as S from './styled'

const Maps = () => {
  const [currentPosition, setCurrentPosition] = useState({
    latitude: null,
    longitude: null,
  })
  const [places, setPlaces] = useState([])
  const getUrlWithParams = (
    lat,
    long,
    radius = 1500,
    type = 'restaurant',
    API,
  ) => {
    const url =
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='
    const key = 'AIzaSyD1So5tKMwRkLBp6BCiH-Dvq3XB8de1Iyg'
    return `${url}${lat},${long}&radius=${radius}&type=${type}&key=${key}`
  }

  useEffect(() => {
    const getPlaces = async (latitude, longitude) => {
      try {
        const url = getUrlWithParams(latitude, longitude)
        const response = await fetch(url)
        const data = await response.json()
        const { results } = data
        setPlaces(results)
      } catch (error) {
        Alert.alert(JSON.stringify(error))
      }
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
  }, [setPlaces])

  return (
    <S.Container>
      {currentPosition.latitude ? (
        <MapView
          style={{ ...StyleSheet.absoluteFillObject }}
          provider={PROVIDER_GOOGLE}
          rotateEnabled={false}
          showsUserLocation
          show
          initialRegion={{
            ...currentPosition,
            latitudeDelta: 0.0142,
            longitudeDelta: 0.0231,
          }}>
          <Marker coordinate={currentPosition}>
            <Image source={images.markerUser} />
          </Marker>
          {places.length &&
            places.map((place, idx) => (
              <Marker
                ref={mark => (place.mark = mark)}
                key={idx}
                coordinate={{
                  latitude: place.geometry.location.lat,
                  longitude: place.geometry.location.lng,
                }}>
                <>
                  <Callout>
                    <View>
                      <View>
                        <Text>{place.name}</Text>
                        {place.opening_hours && (
                          <Text>
                            Open: {place.opening_hours.open_now ? 'YES' : 'NO'}
                          </Text>
                        )}
                      </View>
                    </View>
                  </Callout>
                </>
              </Marker>
            ))}
        </MapView>
      ) : null}
    </S.Container>
  )
}

export default Maps
