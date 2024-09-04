import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import ReCAPTCHA from 'react-google-recaptcha'

export default function ContactForm() {
	return (
		<div className='text-gray-800 flex min-h-screen flex-col bg-white lg:flex-row'>
			<div className='flex w-full flex-col items-center justify-center border-neutral-200 p-8 lg:w-1/2 lg:border-r'>
				<div className='mb-8 lg:mb-0'>
					<h3 className='mb-4 font-GilroyBold text-3xl font-bold md:text-4xl'>
						Gracias por estar aquí 🧡
					</h3>
					<p className='text-gray-600 mb-4 font-GilroyRegular font-normal'>
						Si tienes alguna pregunta, un proyecto en mente en que te gustaría que trabajáramos
						juntos, o simplemente quieres decir ¡Hola!, mi correo es el siguiente:
					</p>
					<div className='pb-4'>
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
					<hr />
					<div className='pt-4'>
						<h3 className='mb-4 font-GilroyBold text-3xl font-bold md:text-4xl'>Más formas de contacto</h3>
						<p className='font-GilroyRegular text-base'>
							Si lo prefieres, también puedes contactarme mediante mis otras redes que te dejo aquí
							debajo. En todas siempre estaré con el gusto de poder aternderte. {' '}
						</p>
						<div className='flex flex-row items-center gap-x-3 pt-3'>
							<a
								href='https://www.linkedin.com/in/fabianhmz/'
								target='_blank'
								rel='noreferrer'
							>
								<svg
									className='fill-[#9CA3AF] transition-all duration-300 group-hover:fill-white'
									xmlns='http://www.w3.org/2000/svg'
									width='36'
									height='36'
									viewBox='0 0 72 72'
									fill='none'
								>
									<path
										d='M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z'
										fill=''
									/>
								</svg>
							</a>
							<a 
								href=''
								target='_blank'
								rel='noreferrer'>
								<svg
									className='relative z-10 fill-[#9CA3AF] transition-all duration-300 group-hover:fill-white'
									xmlns='http://www.w3.org/2000/svg'
									width='36'
									height='36'
									viewBox='0 0 72 72'
									fill='none'
								>
									<path
										d='M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z'
										fill=''
									/>
								</svg>
							</a>
							<a 
								href=''
								target='_blank'
								rel='noreferrer'>
								<svg fill='none' viewBox='0 0 50 50' width='36' height='36' className='fill-[#9CA3AF]'>
									<path d='M41.626,10.768C37.644,7.567,31.347,7.025,31.08,7.003c-0.42-0.036-0.819,0.202-0.992,0.587c-0.012,0.025-0.15,0.34-0.303,0.833c2.633,0.443,5.867,1.339,8.794,3.155c0.469,0.291,0.613,0.907,0.322,1.377c-0.189,0.305-0.516,0.473-0.851,0.473c-0.18,0-0.362-0.048-0.526-0.15C32.494,10.158,26.209,10,25,10s-7.495,0.158-12.523,3.278c-0.47,0.292-1.086,0.147-1.377-0.322c-0.292-0.47-0.147-1.086,0.322-1.377c2.927-1.815,6.16-2.712,8.794-3.155c-0.154-0.493-0.292-0.808-0.303-0.833c-0.173-0.386-0.571-0.629-0.993-0.587c-0.266,0.021-6.563,0.563-10.598,3.809C6.213,12.76,2,24.152,2,34c0,0.174,0.045,0.344,0.131,0.495c2.909,5.109,10.842,6.447,12.649,6.504C14.791,41,14.801,41,14.812,41c0.319,0,0.62-0.152,0.809-0.411l1.829-2.513c-4.933-1.276-7.453-3.439-7.598-3.568c-0.414-0.365-0.453-0.997-0.087-1.411c0.365-0.414,0.995-0.453,1.41-0.089C11.236,33.062,15.875,37,25,37c9.141,0,13.782-3.953,13.828-3.993c0.414-0.359,1.045-0.323,1.409,0.094c0.364,0.414,0.325,1.043-0.088,1.407c-0.146,0.129-2.666,2.292-7.599,3.568l1.829,2.513C34.568,40.848,34.869,41,35.188,41c0.011,0,0.021,0,0.031-0.001c1.809-0.057,9.741-1.395,12.649-6.504C47.955,34.344,48,34.174,48,34C48,24.152,43.787,12.76,41.626,10.768z M18.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C22,28.209,20.433,30,18.5,30z M31.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C35,28.209,33.433,30,31.5,30z' />
								</svg>
							</a>
						</div>
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
								className='text-gray-700 w-full border-neutral-200 bg-white font-GilroySemibold hover:bg-neutral-100 sm:w-60'
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
