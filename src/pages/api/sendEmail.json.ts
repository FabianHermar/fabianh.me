import type { APIRoute } from 'astro'
import { Resend } from 'resend'
import { RESEND_API_KEY, AUTH_TOKEN } from 'astro:env/server'

const resend = new Resend(RESEND_API_KEY)

export const POST: APIRoute = async ({ params, request }) => {
	const authRoute = request.headers.get('Authorization')
	if (!authRoute || authRoute !== `Bearer ${AUTH_TOKEN}`) {
		return new Response(
			JSON.stringify({
				message: 'Unauthorized',
			}),
			{
				status: 401,
				statusText: 'Unauthorized',
			}
		)
	}

	const body = await request.json()
	const { to, from, html, subject, text } = body

	console.log('Received request body:', body)

	if (!to || !from || !html || !subject || !text) {
		console.error('Missing required fields:', { to, from, html, subject, text })
		return new Response(null, {
			status: 404,
			statusText: 'Did not provide the right data',
		})
	}

	try {
		const send = await resend.emails.send({
			from,
			to,
			subject,
			html,
			text,
		})

		console.log('Send response:', send)

		if (send.data) {
			return new Response(
				JSON.stringify({
					message: send.data,
				}),
				{
					status: 200,
					statusText: 'OK',
				}
			)
		} else {
			console.error('Error sending email:', send.error)
			return new Response(
				JSON.stringify({
					message: send.error,
				}),
				{
					status: 500,
					statusText: 'Internal Server Error',
				}
			)
		}
	} catch (error) {
		console.error('Exception sending email:', error)
		return new Response(
			JSON.stringify({
				message: 'Internal Server Error',
			}),
			{
				status: 500,
				statusText: 'Internal Server Error',
			}
		)
	}
}
