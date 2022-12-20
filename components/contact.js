/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Alert, Button, Spinner } from "flowbite-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  return (
    <>
      <>
        <main
          id='contact'
          className='dark min-h-screen dark:bg-main flex justify-between flex-col'
        >
          <section className='dark bg-gray-50 dark:bg-main'>
            {isFailure && (
              <Alert
                color='failure'
                className='fixed bottom-5 right-5 z-50 alert'
                onDismiss={function onDismiss() {
                  setIsFailure(false);
                }}
              >
                <span>
                  <span
                    className='font-medium 
                
                '
                  >
                    Couldn't send message!
                  </span>{" "}
                  Change a few things up and try submitting again.
                </span>
              </Alert>
            )}
            {isSuccess && (
              <Alert
                color='success'
                className='fixed bottom-5 right-5 z-50 alert'
                onDismiss={function onDismiss() {
                  setIsSuccess(false);
                }}
              >
                <span>
                  <span className='font-medium'>Successfully sent! </span> Your
                  message has been sent successfully. We will get back to you
                  soon.
                </span>
              </Alert>
            )}
            <div className='title flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
              <a
                href='#'
                className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
              >
                Pivotal Uprise
              </a>
              <div className='contactform w-full rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-main dark:border-gray-700 backdrop-blur-sm'>
                <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                  <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                    Let's Start Working Together
                  </h1>
                  <form className='space-y-4 md:space-y-6' action='#'>
                    <div>
                      <label
                        for='email'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Your email
                      </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='
                        username@server.com
                        '
                        required=''
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <div className='mt-6'>
                        <label
                          for='default-input'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                          Your Name
                        </label>
                        <input
                          type='text'
                          id='default-input'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          placeholder='What should we call you?'
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className='mt-6'>
                        <label
                          for='large-input'
                          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                          onChange={(e) => setName(e.target.value)}
                        >
                          Your Message
                        </label>

                        <textarea
                          id='message'
                          rows='4'
                          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          placeholder='Describe your project in detail and we will get back to you as soon as possible.'
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <Button
                      className='w-full'
                      onClick={() => {
                        setIsButtonLoading(true);
                        emailjs
                          .send(
                            "service_drr22tj",
                            "template_hgarznb",
                            {
                              from_name: name,
                              to_name: "Pivotal Uprising",
                              message: message,
                              reply_to: email,
                            },
                            "9rSfhz0ogb3gAbful"
                          )
                          .then((result) => {
                            console.log(result.text);
                            setIsButtonLoading(false);
                            setIsSuccess(true);
                            setEmail("");
                            setName("");
                            setMessage("");
                          })
                          .catch((error) => {
                            console.log(error.text);
                            setIsFailure(true);
                          });
                      }}
                    >
                      <Spinner
                        aria-label='Spinner button example'
                        className={
                          isButtonLoading ? "animate-spin mr-4" : "hidden"
                        }
                      />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    </>
  );
}

export default Contact;
