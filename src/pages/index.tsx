import {useEffect, useState} from 'react'
import { useAxios } from "use-axios-client"
import { coordinate, rainAds, sunnyAds } from "../constants"
import dayIllustration from "../assets/img/dayIllustration.svg"
import rainIllustration from "../assets/img/rainIllustration.svg"
import nightIllustration from "../assets/img/nightIllustration.svg"
import nightRainIllustration from "../assets/img/nightRainIllustration.svg"
import { FaWind, FaSun } from "react-icons/fa6";

import { Ads } from '../components/Ads'

interface Current {
    temperature_2m: number,
    time: string,
    precipitation: number,
    windspeed: number,
    uv_index: number,
}

interface DataApi {
    current: Current
    latitude: string,
    longitude: string
}

interface Ads {
    title: string,
    sub_title: string,
    image?: string,
    location: string
}

export const Homepage = () => {
    const [advertise, setAdvertise] = useState<Ads>();
    const [isNight, setIsNight] = useState(false);

    const { data, error, refetch } = useAxios<DataApi>({
        url: import.meta.env.VITE_API_URL +`forecast?latitude=${coordinate.latitude}&longitude=${coordinate.longitude}&current=temperature_2m,precipitation,windspeed,uv_index`
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            refetch()
        }, 1000 * 60)
        
        if (data && data?.current.precipitation < 2 && data?.current.temperature_2m >= 20) {
            setAdvertise(sunnyAds)  
        } else {
            setAdvertise(rainAds)
        } 
        
        const hour = new Date().getHours()
        hour > 17 || hour < 6 ? setIsNight(true) : setIsNight(false)

        return () => clearInterval(intervalId)
    }, [refetch, data, advertise]);

    if (error) return "Error!"
  
    return (
        <main className={`pt-16 font-poppins min-h-screen  ${isNight ? 'bg-indigo-950 text-white' : 'bg-gray-100' }`}>
            <div className="container max-w-3xl mx-auto px-4 pt-4">
                <div className="grid grid-cols-12">
                    <div className="order-1 col-span-6 flex flex-col justify-center md:items-end md:col-span-3">
                        <div>
                            <div className="flex items-start">
                                <span className="font-medium text-8xl">{data?.current.temperature_2m}</span>
                                <span className="text-4xl font-medium">o</span>
                            </div>
                            <p className="font-light w-40">Plaza Indonesia, Jakarta.</p>
                        </div>
                    </div>
                    <div className="order-3 col-span-12 md:col-span-6 flex justify-center">
                        {
                            isNight ?
                                 <img src={data && data.current.precipitation > 0.7 ? nightRainIllustration : nightIllustration} className="w-full max-w-lg object-contain" width={368} height={368} alt="illustration" /> : 
                                <img src={data && data.current.precipitation > 0.7 ? rainIllustration : dayIllustration} className="w-full max-w-lg object-contain" width={368} height={368} alt="illustration" /> 
                        }
                    </div>
                    <div className="order-2 col-span-6 md:col-span-3 flex flex-col pt-2 md:pt-0 md:pl-6 md:justify-center md:order-3">
                        <div className="flex items-center gap-2 ">
                            <FaWind />
                            {
                                data ?
                                <div className="flex gap-1 items-end">
                                    <span className="text-xl">{data.current.windspeed}</span><span>km/h</span>
                                </div> : '--'
                            }
                        </div>
                         <div className="flex items-center gap-2 mt-2">
                            <FaSun />
                            {
                                data ?
                                <div className="flex gap-1 items-end">
                                    <span className="text-xl">{data?.current.uv_index}</span>
                                </div> : '--'
                            }
                        </div>
                    </div>
                </div>
               {data && <Ads ads={advertise}/>}
            </div>
        </main>
    )
}

export default Homepage;
