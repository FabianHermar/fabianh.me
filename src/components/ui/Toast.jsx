import { Toaster, toast } from 'sonner'

function Toast ({ message }) {
  return (
    <>
      <Toaster />
      <button onClick={() => toast.info(message)} className='bg-neutral-400 h-4 w-4'></button>
    </>
  )
}

export default Toast
