import styled from 'styled-components/native'

export const ScrollView = styled.ScrollView`
  width: 100%;
  max-height: 100;
  margin-bottom: 30px;
`

export const PlaceList = styled.View`
  width: ${({ width }) => (width ? width - 40 : '100%')};
  max-height: 100px;
  background-color: #fff;
  margin-horizontal: 20px;
  elevation: 2;
  margin-bottom: 5px;
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
  font-size: 14;
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
  margin-bottom: 2px;
`

export const PlaceRating = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR_LIGHT};
`
