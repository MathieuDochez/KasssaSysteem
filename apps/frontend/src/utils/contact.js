import { festival } from '../data/festival'

export const mailtoHref = (subject = 'Vraag over het bierfestival') =>
  `mailto:${festival.email}?subject=${encodeURIComponent(subject)}`
