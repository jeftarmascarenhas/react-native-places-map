/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { ThemeProvider } from 'styled-components'

import { CreateRoutes } from './navigation'
import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={{ ...theme.lightTheme, ...theme.colorOptions }}>
    <CreateRoutes />
  </ThemeProvider>
)

export default App
