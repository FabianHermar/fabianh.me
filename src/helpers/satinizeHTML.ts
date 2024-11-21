import DOMPurify from 'dompurify'

/**
  * Sanitizes HTML content to prevent XSS attacks.
 * @param html - The HTML content to sanitize.
 * @returns The sanitized HTML content.
*/

export const sanitizeHtml = (html: string): string => {
	if (typeof html !== 'string') {
		throw new Error('El contenido a sanitizar debe ser una cadena de texto.')
	}
	return DOMPurify.sanitize(html)
}
