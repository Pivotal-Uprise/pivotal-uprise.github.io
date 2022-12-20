function WhyUs() {
  return (
    <>
      <section
        id='whyus'
        className='min-h-screen bg-slate-100 dark:bg-slate-800/10 p-12 flex flex-col '
      >
        <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl  sm:py-16 lg:px-6'>
          <h1 className='servicesheading mb-4 text-4xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-indigo-200 '>
            Why Us?
          </h1>
        </div>
        <div className='flex flex-col justify-center grow'>
          <div className='grid grid-cols-auto gap-8 place-items-center w-full sm:px-6 lg:px-8 lg:grid-cols-3'>
            <Card
              title='Global Reach'
              description='
                We have a global reach, and we can help you get your business out there.'
              className='devcard'
            />
            <Card
              title='Best Prices'
              description='
                We provide the best prices for our services, than any competitor out there.'
            />
            <Card
              title='Convenience'
              description='We try our best to make our services as convenient to you as possible.
                          '
              className='hostcard'
            />
            <Card
              title='Team Strength'
              description='
                            We have a dedicated and experienced team of professionals, who are ready to help you.'
              className='hostcard'
            />
          </div>
        </div>
        <div
          onClick={() => {
            window.document
              .getElementById("team")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className='mainicon flex flex-col mt-16 my-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'
        >
          <div class='cursor-pointer animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center'>
            <svg
              class='w-6 h-6 text-violet-500'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

function Card(props) {
  const { title, description, icon, className } = props;
  return (
    <div
      className={
        "h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-main dark:border-gray-700 flex flex-col justify-around" +
        " " +
        className
      }
    >
      <div className='rounded-t-lg flex justify-center align-center'>
        {icon}
      </div>
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
        <p className='text-justify mb-3 font-normal text-lg text-gray-700 dark:text-gray-400'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default WhyUs;
