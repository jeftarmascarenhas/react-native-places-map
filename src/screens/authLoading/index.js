import React, { Component } from 'react'
import { Text, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

import { translate } from '../../locales'
import * as S from './styled'

const promisse = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve({})
    }, 1200),
  )

class AuthLoading extends Component {
  constructor(props) {
    super(props)
    this.bootStrapAsync()
  }

  bootStrapAsync = async () => {
    const { navigation } = this.props
    const res = await promisse()
    console.log(res)
    const userToken = true
    navigation.navigate(userToken ? 'App' : 'Auth')
  }

  render() {
    return (
      <S.Container>
        <Text>{translate('Loading')}</Text>
        <ActivityIndicator size="large" color="#cc" />
      </S.Container>
    )
  }
}

AuthLoading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default AuthLoading
