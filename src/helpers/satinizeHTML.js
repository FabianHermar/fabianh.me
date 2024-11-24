import DOMPurify from 'dompurify';

/**
 * Sanitiza contenido HTML para prevenir ataques XSS.
 * @param {string} html - El contenido HTML a sanitizar.
 * @returns {string} - El contenido HTML sanitizado.
 */
export const sanitizeHtml = (html) => {
    if (typeof window !== 'undefined') {
        return DOMPurify.sanitize(html);
    } else {
        // Si estamos en un entorno SSR, simplemente devuelve el HTML sin cambios
        // o maneja la sanitización de otra manera
        return html;
    }
};