import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa"

export const HeaderMolbie = () => {
    return (
        <>
        <div className="fixed xl:hidden top-0 left-0 right-0 z-50 bg-black  flex justify-between ">
            <div className="flex items-center gap-3">
                <FaPhoneAlt size={19} />
                <p className="text-white"></p>
            </div>
            <div className="flex items-center gap-3 text-white">
                <FaFacebook size={19} />
                <FaTwitter size={19} />
                <FaInstagram size={19} />
                <FaLinkedin size={19} />
            </div>
        </div>
        </>
    )
}