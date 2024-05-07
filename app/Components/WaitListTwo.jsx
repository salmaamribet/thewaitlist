const WaitListTwo = () => {

    return (
        <main className="  ">
            <div id="WLT" className=" py-14 border-2 shadow-lg rounded-xl border-teal-400 max-w-screen-xl  mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                    
                    <p className="text-slate-900 text-center text-2xl lg:text-3xl md:text-3xl font-semibold ">
                    Be among the <span className="text-teal-400">First To Connect</span>
                    </p>
                    <p className="text-xl text-center slate-900">
                        Get Early Access + 50% OFF
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <form
                        
                        className="space-y-5"
                    >
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 w-full sm:flex-row">
                            <div>
                                <label className="font-medium">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-teal-500 hover:bg-teal-400 active:bg-teal-600 rounded-lg duration-150"
                        >
                            Join WaitList
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default WaitListTwo;
