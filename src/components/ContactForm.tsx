import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import ReCAPTCHA from 'react-google-recaptcha'

export default function ContactForm () {
  return (
    <div className='text-gray-800 flex min-h-screen flex-col bg-white lg:flex-row'>
      <div className='flex w-full flex-col items-center justify-center border-neutral-200 p-8 lg:w-1/2 lg:border-r'>
        <div className='mb-8 lg:mb-0'>
          <h1 className='mb-4 font-GilroyBold text-3xl font-bold md:text-4xl'>
            Gracias por estar aquí 🧡
          </h1>
          <p className='text-gray-600 mb-4 font-GilroyRegular font-normal'>
            Si tienes alguna pregunta, un proyecto en mente en que te gustaría que trabajáramos juntos, o simplemente quieres decir ¡Hola!, mi correo
            es el siguiente:
          </p>
          <div>
            <a
              href='mailto:ctofabian@gmail.com'
              className='text-gray-400 mt-4 flex max-w-xs flex-row items-center gap-2 font-GilroySemibold text-lg'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='size-6 fill-[#9CA3AF]'
                viewBox='0 0 512 512'
              >
                <path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z' />
              </svg>
              <span className='group relative before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:origin-right before:scale-x-0 before:bg-[#b16cea] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                ctofabian@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-col items-center justify-center p-8 lg:w-1/2'>
        <div className='mb-8 rounded-lg bg-neutral-50 p-6 shadow-sm lg:mb-0'>
          <h2 className='mb-4 font-GilroySemibold text-xl font-semibold md:text-2xl'>
            Rellena el siguiente formulario y me pondré en contacto contigo lo más pronto posible.
          </h2>
          <form id='contact-form'>
            <div className='mb-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div>
                <label htmlFor='name' className='mb-2 block font-GilroySemibold font-medium'>
                  Nombre
                </label>
                <Input id='name' placeholder='John Doe' className='border-gray-300 bg-white' />
              </div>
              <div>
                <label htmlFor='email' className='mb-2 block font-GilroySemibold font-medium'>
                  Correo
                </label>
                <Input
                  id='email'
                  type='email'
                  placeholder='john.doe@email.com'
                  className='border-gray-300 bg-white'
                />
              </div>
            </div>
            <div className='mb-4'>
              <label htmlFor='subject' className='mb-2 block font-GilroySemibold font-medium'>
                Asunto
              </label>
              <Input id='subject' placeholder={null} className='border-gray-300 bg-white' />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='mb-2 block font-GilroySemibold font-medium'>
                Mensaje
              </label>
              <Textarea
                id='message'
                placeholder='Tengo una pregunta sobre...'
                className='border-gray-300 bg-white'
                rows={4}
              />
            </div>
            <div>
              {/* <ReCAPTCHA */}
              {/*	sitekey={process.env.CAPTCHA_SECRET_KEY} */}
              {/*	theme='light' */}
              {/*	ref={recaptchaRef} */}
              {/* /> */}
            </div>
            <div className='flex flex-col justify-between gap-4 sm:flex-row'>
              <Button
                type='submit'
                className='w-full bg-black font-GilroySemibold text-white hover:bg-black/80 sm:w-60'
              >
                Enviar
              </Button>
              <Button
                type='reset'
                variant='outline'
                className='text-gray-700 hover:bg-neutral-100 bg-white w-full border-neutral-200 font-GilroySemibold sm:w-60'
              >
                Borrar
              </Button>
            </div>
          </form>
          <p className='text-gray-500 mt-4 font-GilroyRegular text-xs'>
            No conservo ni comparto ninguno de tus datos personales. Todo lo proporcionado en el
            formulario es totalmente confidencial.
          </p>
        </div>
      </div>
    </div>
  )
}
