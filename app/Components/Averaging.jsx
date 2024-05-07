// Averaging.jsx
const Averaging = () => {
    const stats = [
      {
        data: "2",
        title: "Per week"
      },
      {
        data: "32",
        title: "Per 4Month"
      },
      {
        data: "96",
        title: "Per Year"
      },
    ];
  
    return (
      <section className="py-7">
        <div className="  border-teal-400 max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-slate-900 text-3xl font-semibold sm:text-4xl">
              What you <span className="text-teal-400 underline">Can</span> average with Podsynk.
            </h3>
            <p className="mt-3">
              Yes you can be at the Top <span className="text-teal-400">5%</span> of Podcasts.
            </p>
          </div>
          <div className="mt-12">
            <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
              {stats.map((item, idx) => (
                <li key={idx} className="text-center px-12 md:px-16">
                  <h4 className="text-4xl text-teal-400 font-semibold">{item.data}<span className="text-slate-900"> Episodes</span></h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default Averaging;
  