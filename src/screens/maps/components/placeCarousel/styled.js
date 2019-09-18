import styled from 'styled-components/native'

export const ScrollView = styled.ScrollView`
  width: 100%;
  max-height: 100;
`

export const PlaceList = styled.View`
  width: ${({ width }) => (width ? width - 40 : '100%')};
  max-height: 100px;
  background-color: #fff;
  margin-horizontal: 20;
  elevation: 2;
  margin-bottom: 10;
  border-radius: 3;
  flex-direction: row;
`

export const PlacePhoto = styled.Image`
  width: 100;
  height: 100;
  border-top-left-radius: 3;
  border-bottom-left-radius: 3;
`

export const PlaceInfor = styled.View`
  flex: 1;
  padding: 10px;
`

export const PlaceTitle = styled.Text`
  font-size: 16;
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
  margin-bottom: 2px;
`

export const PlaceRating = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR_LIGHT};
`
