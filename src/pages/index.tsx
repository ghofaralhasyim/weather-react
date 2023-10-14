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

    const { data, error, loading, refetch } = useAxios<DataApi>({
        url: import.meta.env.VITE_API_URL +`forecast?latitude=${coordinate.latitude}&longitude=${coordinate.longitude}&current=temperature_2m,precipitation,windspeed,uv_index`
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            refetch()
        }, 1000 * 60)
        
        data && data?.current.precipitation > 0.7 ? setAdvertise(rainAds) : setAdvertise(sunnyAds)
        
        new Date().getHours() > 17 ? setIsNight(true) : setIsNight(false)

        return () => clearInterval(intervalId)
    }, [refetch, data, advertise]);

    if (error) return "Error!"
  
    return (
        <main className={`pt-16 font-poppins min-h-screen  ${isNight ? 'bg-indigo-950 text-white' : 'bg-gray-100' }`}>
            <div className="container mx-auto px-4 pt-4">
                <div className="grid grid-cols-12">
                    <div className="col-span-3 flex flex-col justify-center items-end">
                        <div>
                            <div className="flex items-start">
                                {
                                    data && !loading ?
                                        <span className="font-medium text-8xl">{data.current.temperature_2m}</span> : '--'
                                }
                                <span className="text-4xl font-medium">o</span>
                            </div>
                            <p className="font-light w-40">Plaza Indonesia, Jakarta.</p>
                        </div>
                    </div>
                    <div className="col-span-6 flex justify-center">
                        {
                            isNight ?
                                 <img src={data && data.current.precipitation > 0.7 ? nightRainIllustration : nightIllustration} className="w-full max-w-lg" alt="illustration" /> : 
                                <img src={data && data.current.precipitation > 0.7 ? rainIllustration : dayIllustration} className="w-full max-w-lg" alt="illustration" /> 
                        }
                    </div>
                    <div className="col-span-3 flex flex-col justify-center pl-6">
                        <div className="flex items-center gap-2 ">
                            <FaWind />
                            {
                                data && !loading ?
                                <div className="flex gap-1 items-end">
                                    <span className="text-xl">{data.current.windspeed}</span><span>km/h</span>
                                </div> : '--'
                            }
                        </div>
                         <div className="flex items-center gap-2 mt-2">
                            <FaSun />
                            {
                                data && !loading ?
                                <div className="flex gap-1 items-end">
                                    <span className="text-xl">{data?.current.uv_index}</span>
                                </div> : '--'
                            }
                        </div>
                    </div>
                </div>
               <Ads ads={advertise}/>
            </div>
        </main>
    )
}

export default Homepage;
