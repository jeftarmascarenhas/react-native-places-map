import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

import * as S from './styled'

const SearchLocalForm = ({ placeholder, onPress, onClear }) => {
  const [value, setValue] = useState('')
  return (
    <S.SearchLocalForm>
      <S.InputSearchContent>
        <S.InputSearch
          placeholder={placeholder}
          value={value}
          onChangeText={text => setValue(text)}
        />
        <S.SearchButton
          onPress={() => {
            onPress(value)
            if (onClear) {
              setValue('')
            }
          }}>
          <Icon name="search" size={15} color="#fff" />
        </S.SearchButton>
      </S.InputSearchContent>
    </S.SearchLocalForm>
  )
}

SearchLocalForm.propTypes = {
  onPress: PropTypes.func.isRequired,
  onClear: PropTypes.bool,
  placeholder: PropTypes.string,
}

SearchLocalForm.defaultProps = {
  placeholder: 'Search other Local',
  onClear: false,
}

export default SearchLocalForm
