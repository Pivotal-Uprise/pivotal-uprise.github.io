/* eslint-disable @next/next/no-img-element */
function Team() {
  return (
    <>
      <section
        class='bg-white dark:bg-gray-900/50 min-h-screen flex flex-col'
        id='team'
      >
        <div class='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
          <div class='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
            <h2 class='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
              Our Team
            </h2>
            <p class='font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400'>
              Meet the team behind the scenes.
            </p>
          </div>
          <div class='grow grid gap-8 mb-6 lg:mb-16 md:grid-cols-1 lg:grid-cols-2'>
            <div
              class='items-center bg-gray-50  sm:flex dark:bg-gray-800 dark:border-gray-700
            border border-gray-200 rounded-lg shadow-md dark:bg-main dark:border-gray-700
            '
            >
              <a href='#'>
                <img
                  class='
                  h-48 w-full object-cover
                  rounded-lg sm:rounded-none sm:rounded-l-lg'
                  src='/yellow.webp'
                  alt='yello'
                />
              </a>
              <div class='p-5'>
                <h3 class='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  J2Trappy
                </h3>
                <span class='text-gray-500 dark:text-gray-400'>Founder</span>
                <p class='mt-3 mb-4 font-light text-gray-500 dark:text-gray-400'>
                  Creating and delivering outstanding digital experience.
                </p>
                <ul class='flex space-x-4 sm:mt-0'></ul>
              </div>
            </div>{" "}
            <div
              class='items-center bg-gray-50 sm:flex dark:bg-gray-800 dark:border-gray-700
            
            border border-gray-200 rounded-lg shadow-md dark:bg-main dark:border-gray-700
            '
            >
              <a href='#'>
                <img
                  class='
                  
                  h-48 w-full object-cover
                                  rounded-lg sm:rounded-none sm:rounded-l-lg'
                  src='/red.webp'
                  alt='Avatar'
                />
              </a>
              <div class='p-5'>
                <h3 class='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  <a href='#'>Warrior</a>
                </h3>
                <span class='text-gray-500 dark:text-gray-400'>Developer</span>
                <p class='mt-3 mb-4 font-light text-gray-500 dark:text-gray-400'>
                  Delivering outstanding development progress.
                </p>
                <ul class='flex space-x-4 sm:mt-0'></ul>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            window.document
              .getElementById("contact")
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

export default Team;
