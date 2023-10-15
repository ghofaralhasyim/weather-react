
import ice from '../assets/img/ice.png'

interface Coordinate {
    latitude: string,
    longitude: string
}
export const coordinate:Coordinate = {
    latitude: '-6.1935924',
    longitude: '106.8193719'
}
interface Ads {
    title: string,
    sub_title: string,
    image?: string,
    location: string,
}
export const sunnyAds: Ads = {
    title: 'Looks hot out there',
    sub_title: 'Stay cool and refreshed with our icy beverages, perfect for when it feels hot outside. Beat the heat, sip, and enjoy the chill!',
    image: ice,
    location: 'We are on 1st Floor'
}
export const rainAds: Ads = {
    title: 'Rainy weather calls for comfort food! ',
    sub_title: 'Dive into our savory, piping-hot dishes and let the rain serenade your taste buds.',
    location: 'We are on 1st Floor'
}