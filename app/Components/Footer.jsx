import Image from "next/image";

const Footer = () => {
    return(
        
                <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
                    <div className="max-w-lg sm:mx-auto sm:text-center">
                    <Image 
                    src="/banner-dark.svg"
                    width={500}
                    height={200}
                    alt="Podacast guest booking platform"
                    />
                        
                    </div>
                
                    <div className="mt-8 items-center  justify-between sm:flex">
                        <div className="mt-4 sm:mt-0 ">
                            &copy; 2024 Podsynk All rights reserved.
                        </div>
                    </div>
                </footer>
        
    )
}
export default Footer;