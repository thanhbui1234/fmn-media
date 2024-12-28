import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

export const HeaderMolbie = () => {
    return (
      <>
        <div className="fixed xl:hidden top-0 left-0 right-0 z-50 bg-black  flex justify-between  h-[50px]">
          <div className="flex items-center gap-3 bg-colorTop px-3">
            <p className="text-black font-bold">HELLO KITTY</p>
          </div>
          <div className="flex items-center gap-3 text-white pr-3">
            <FaFacebook className="text-colorTop" size={19} />
            <FaTwitter className="text-colorTop" size={19} />
            <FaInstagram className="text-colorTop" size={19} />
            <FaLinkedin className="text-colorTop" size={19} />
          </div>
        </div>
      </>
    );
}