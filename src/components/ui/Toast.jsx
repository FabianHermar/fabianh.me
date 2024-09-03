import { Toaster, toast } from 'sonner'
import { useEffect } from 'react'

function Notification () {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.info('The website is not yet complete, this is only a beta version of the final design. The final version will be ready soon.', {
        duration: 10000
      })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Toaster position='bottom-right' closeButton />
    </>
  )
}

export default Notification
