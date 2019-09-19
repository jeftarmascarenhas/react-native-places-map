import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { translate } from '../../locales'
import Loading from '../../components/loading'
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
        <Loading title={translate('Loading')} />
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
