export default function WaitListOne() {
    return (
      <section className=" py-14 max-w-screen-xl mx-auto">
        <div className="shadow-xl relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-teal-400 md:px-8 md:mx-8">
          <div className="relative z-10 max-w-xl mx-auto sm:text-center">
            <div className="space-y-3">
              <h3 className="text-xl lg:text-3xl text-center text-white font-bold">
                Join The Waitlist for Podsynk
              </h3>
              
            </div>
            <div className="mt-6">
              <form
                
                className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto"
              >
            
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-gray-500 w-full p-2 outline-none "
                />
                <button
                  className="  p-2 px-3 rounded-lg font-medium text-white bg-slate-900 hover:bg-slate-600 active:text-slate-900 active:bg-teal-400 duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
                >
                Waitlist
                </button>
              </form>
              <p className=" mt-5 lg:mt10 md:mt10 font-bold text-center text-slate-900 leading-relaxed">
              Get exclusive early access to PodSynk! Sign up now for a 50% discount when we launch. Don't miss your chance!
              </p>
            </div>
          </div>
          <div className="absolute inset-0 w-full h-full" ></div>
        </div>
      </section>
    );
  }
  