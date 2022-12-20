import Head from "next/head";
import Contact from "../components/contact";
import Services from "../components/services";
import Team from "../components/team";
import WhyUs from "../components/whyus";

function App() {
  return (
    <>
      <Head>
        <title>Pivotal Uprise</title>
        <meta
          name='description'
          content='We offer synergistic online products, social media marketing and dynamic SEO strategies delivering.'
        />
        <meta
          name='keywords'
          content='
          smma, seo, online products, dynamic SEO, SEO strategies'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main className='bg-main'>
        <section class='bg-white dark:bg-transparent min-h-screen flex flex-col justify-center items-center'>
          <div class='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
            <h1 class='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
              Increase your sales with our strategies.
            </h1>
            <p class='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
              We provide, freelancing, social media marketing, SEO, online
              copywriting, and more.
            </p>
            <div class='flex flex-col mt-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
              <div
                onClick={() => {
                  // scroll to services
                  window.document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                class='cursor-pointer animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center'
              >
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
          </div>
        </section>
        <Services />
        <WhyUs />
        <Team />
        <Contact />
      </main>
    </>
  );
}

export default App;
