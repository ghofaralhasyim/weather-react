import { FaLocationDot, FaTicket } from "react-icons/fa6";

interface AdsProps {
    ads?: {
        title: string,
        sub_title: string,
        image?: string,
        location: string,
    }
}

export const Ads: React.FC<AdsProps> = (props) => {
  return (
      <>
        <div className="relative mx-auto flex items-end justify-center z-20">
            <img src={props.ads?.image} className="w-64 -bottom-10 absolute" alt="" />
        </div>
        <div className="bg-white shadow-lg relative -top-4 max-w-2xl mx-auto px-8 pt-16 pb-8 rounded-xl relative">
            <div>
                <h1 className="text-4xl font-semibold text-gray-800 max-w-md">
                    { props.ads?.title }
                </h1>
                <p className="text-gray-500 max-w-md mt-4">{ props.ads?.sub_title}</p>
            </div>
            <div className="flex mt-4 gap-4">
                <div className="flex items-center text-gray-800"><FaLocationDot /> <span className="ml-2">{props.ads?.location}</span></div>
                    <div className="flex items-center text-red-500"><FaTicket /> <span className="ml-2 font-semibold">15% Discount</span></div>
            </div>
        </div>
      </>
  )
}
