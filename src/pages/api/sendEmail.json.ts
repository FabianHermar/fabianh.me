import type { APIRoute } from 'astro'
import { Resend } from 'resend'
import { RESEND_API_KEY } from 'astro:env/client'

const resend = new Resend(RESEND_API_KEY)

export const GET: APIRoute = async ({ params, request }) => {
	const send = await resend.emails.send({
		from: 'no-reply@fabianh.me',
		to: 'ctofabian@gmail.com',
		subject: 'Send Email Test',
		html: '<h1>Test</h1>',
		text: 'Test',
	})

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
}
