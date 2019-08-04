import * as Resources from '../Resources/Resources';

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}


export const getCoordinates = async () => {
  
        const { coords } = await getCurrentPosition();
        const { latitude, longitude } = coords;
        return { lat: latitude, long: longitude };
};


export const getCurrentLocation = async (lat, lon) => {

    const response = await fetch(`${Resources.GeopositionUrl}?apikey=${Resources.apiKey}&q=${lat},${lon}`);
    const data = await response.json();
    const { Key, LocalizedName } = data;
    return { name: LocalizedName, key: Key }
}