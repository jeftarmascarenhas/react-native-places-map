import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Callout } from 'react-native-maps'

const CalloutPlaces = ({ place }) => {
  return (
    <Callout>
      <View>
        <Text>{place.name}</Text>
        {place.opening_hours && (
          <Text>Open: {place.opening_hours.open_now ? 'YES' : 'NO'}</Text>
        )}
      </View>
    </Callout>
  )
}

CalloutPlaces.propTypes = {
  places: PropTypes.arrayOf(PropTypes.objectOf),
}

export default CalloutPlaces
