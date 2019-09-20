import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import styles from './styles'

const SearchLocales = ({ onLocationSelected }) => {
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <GooglePlacesAutocomplete
      placeholder="Pesquise outro local"
      placeholderTextColor="#333"
      onPress={onLocationSelected}
      query={{
        key: 'AIzaSyD1So5tKMwRkLBp6BCiH-Dvq3XB8de1Iyg',
        language: 'pt',
      }}
      textInputProps={{
        onFocus: () => {
          console.log('onFocus')
          setSearchFocused(true)
        },
        onBlur: () => {
          console.log('onBlur')
          setSearchFocused(false)
        },
        autoCapitalize: 'none',
        autoCorrect: false,
      }}
      listViewDisplayed={searchFocused}
      fetchDetails
      enablePoweredByContainer={false}
      debounce={200}
      styles={styles}
    />
  )
}

SearchLocales.propTypes = {
  onLocationSelected: PropTypes.func.isRequired,
}

export default SearchLocales
