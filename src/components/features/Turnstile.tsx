import React, { useEffect } from 'react'

interface TurnstileComponentProps {
	onVerify: (token: string) => void

	onError: () => void
}

const TurnstileComponent: React.FC<TurnstileComponentProps> = ({ onVerify, onError }) => {
	useEffect(() => {
		const script = document.createElement('script')
		script.src =
			'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback'
		script.defer = true
		document.body.appendChild(script)

		return () => {
			// Limpieza: elimina el script al desmontar el componente
			document.body.removeChild(script)
		}
	}, [])

	return (
		<div
			className='cf-turnstile'
			data-sitekey='0x4AAAAAAA0MPnnImP_nrb-h'
			data-callback='javascriptCallback'
			data-theme='light'
		/>
	)
}

export default TurnstileComponent
