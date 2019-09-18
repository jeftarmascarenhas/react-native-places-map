import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Marker, Callout } from 'react-native-maps'

const MarkerPlaces = ({ places }) => {
  return places.map((place, idx) => (
    <Marker
      key={idx}
      coordinate={{
        latitude: place.geometry.location.lat,
        longitude: place.geometry.location.lng,
      }}
    >
      <>
        <Callout>
          <View>
            <Text>{place.name}</Text>
            {place.opening_hours && (
              <Text>Open: {place.opening_hours.open_now ? 'YES' : 'NO'}</Text>
            )}
          </View>
        </Callout>
      </>
    </Marker>
  ))
}

MarkerPlaces.propTypes = {
  places: PropTypes.arrayOf(PropTypes.objectOf),
}

export default MarkerPlaces
