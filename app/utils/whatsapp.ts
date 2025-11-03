/**
 * WhatsApp Integration Utility
 */

const WHATSAPP_NUMBER = '918595236343'
const WHATSAPP_MESSAGE = "Hi Team OnlineCAservices! I'm looking for guidance from a trusted Chartered Accountant for my requirements. Please assist me with the next steps."

/**
 * Generates a WhatsApp chat URL with pre-filled message
 * @returns WhatsApp URL string
 */
export const getWhatsAppLink = (): string => {
	const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE)
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}

/**
 * Opens WhatsApp chat in a new window
 */
export const openWhatsAppChat = (): void => {
	window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer')
}
