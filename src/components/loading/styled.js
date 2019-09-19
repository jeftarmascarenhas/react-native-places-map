import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.PRIMARY_COLOR_BOLD};
`
export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#fff',
})``

export const Title = styled.Text`
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  font-size: 16px;
`
