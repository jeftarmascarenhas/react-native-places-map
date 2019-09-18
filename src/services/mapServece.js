class MapServece {
  static getUrlWithParams(lat, long, radius = 1500, type = 'gym', API) {
    return fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1500&type=restaurant&key=AIzaSyD1So5tKMwRkLBp6BCiH-Dvq3XB8de1Iyg`,
    )
  }
}

export default MapServece
