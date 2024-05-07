
const Navbar =() => {
    return (
        <div className="text-center  bg-slate-900">
            <div className="max-w-screen-xl  mx-auto px-4 py-3 items-center gap-x-4 justify-center text-white sm:flex md:px-8">
                <p className="lg:mr-10 sm:mr-0 py-2 sm:text-center font-medium">
                    Podsynk's here. Connect with The Elite.
                </p>
                
                <a href="#WLT" className="flex-none inline-block w-full mt-3 py-2 px-3 text-centertransition ease-in-out rounded delay-150 bg-teal-400 hover:-translate-y-1 hover:scale-110 hover:bg-teal400 duration-300 sm:w-auto sm:mt-0 sm:text-sm">
                    Join Waitlist
                </a>
            </div>
        </div>
    );
};
export default Navbar;