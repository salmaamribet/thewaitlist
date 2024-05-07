export default () => {

    const features = [
        {
            title: "High Quality Guest/Shows with 0 effort",
            desc: "Receive automatic notifications for Guests/Shows that match your needs. For manual searching, we offer advanced search filters."
        },
        {

        title: "Built in planning tools",
        desc: "Pre-recording is a crucial part that we make easy with our set of tools including Block Notes, Whiteboard, and more."

        },
        
        {
            title: "Functional Profile/Show Website",
            desc: "Now you and your podcast can have your own website. Visitors can easily book you through your site."
        },
        
        {
            title: "Built in chatting system",
            desc: "You can reach your dream Guest/Show using our built it chating tool. No more Unguranteed reponses."
        },
        {
            title: "Built in calendar",
            desc: "Once you've scheduled a time with your Guest/Show, they can easily book you using our calendar, which syncs seamlessly with Google Calendar."
        },
        
    ]

    return (
        <section className="">
            <div className=" max-w-screen-xl mx-auto px-4  text-gray-600 md:px-8">
                
                <div className="p-5 mt-0 lg:mt-10 border rounded-xl shadow-xl border-slate-900">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="space-y-3">
                                    <div className="w-12 h-12 border text-indigo-600 rounded-lg flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}