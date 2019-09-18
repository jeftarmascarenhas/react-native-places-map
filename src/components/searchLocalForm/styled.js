import styled from 'styled-components/native'

export const SearchLocalForm = styled.View`
  width: 90%;
  padding: 8px;
  margin-top: 10px;
  background: ${({ theme }) => theme.PRIMARY_BACKGROUND_COLOR};
  border-radius: 50px;
  elevation: 2;
`

export const InputSearchContent = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 46px;
`

export const InputSearch = styled.TextInput`
  padding: 10px;
  flex: 1;
`
export const SearchButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.PRIMARY_COLOR_BOLD};
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`
