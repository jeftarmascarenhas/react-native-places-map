import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Loading = ({ title }) => {
  return (
    <S.Container>
      <S.ActivityIndicator />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

Loading.propTypes = {
  title: PropTypes.string,
}

Loading.defaultProps = {
  title: 'Loading...',
}

export default Loading
