import {
	Html,
	Head,
	Preview,
	Body,
	Container,
	Img,
	Text,
	Hr,
	Section,
} from '@react-email/components'

interface EmailTemplateProps {
	userFirstname: string
	message: string
	email: string
}

export const EmailTemplate = ({ userFirstname, message, email }: EmailTemplateProps) => (
	<Html>
		<Head />
		<Preview>Fabian Herrera - Software Engineer</Preview>
		<Body style={main}>
			<Container style={container}>
				<Img
					src='https://raw.githubusercontent.com/FabianHermar/FabianHermar/refs/heads/main/assets/logo-png.png'
					width='300'
					height='60'
					alt='Fabian Herrera Logo'
					style={logo}
				/>
				<Text style={paragraphHeader}>A new message of {userFirstname} 🎉.</Text>
				<Section style={messageSection}>
					<Text style={paragraph}>
						📝 The message was sent with the following content and email:
					</Text>
					<br />
					<Text>✉️ Email: {email}</Text>
					<br />
					<Text>💭 Message: {message}</Text>
				</Section>
				<Hr style={hr} />
				<Text style={footer}>
					Remember,
					<br />
					This email was sent from a contact form on my personal website. For answer the email,
					please reply with a new one taking the email address from the sender.
				</Text>
			</Container>
		</Body>
	</Html>
)

export default EmailTemplate

const main = {
	backgroundColor: '#ffffff',
}

const container = {
	margin: '0 auto',
	padding: '20px',
	maxWidth: '600px',
}

const messageSection = {
	display: 'flex',
	flexDirection: 'column' as 'column',
}

const logo = {
	display: 'block',
	margin: '0 auto',
}

const paragraphHeader = {
	fontSize: '18px',
	fontWeight: 'bold',
}

const paragraph = {
	fontSize: '16px',
}

const hr = {
	border: 'none',
	borderTop: '1px solid #eaeaea',
	margin: '20px 0',
}

const footer = {
	fontSize: '12px',
	color: '#888888',
}
