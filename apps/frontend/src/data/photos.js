import { LEGACY_ASSETS } from './festival'

// Photo albums from previous editions, still hosted on the old site.
const letters = (to, ext) =>
  Array.from({ length: to.charCodeAt(0) - 64 }, (_, i) => `${String.fromCharCode(65 + i)}.${ext}`)
const numbers = (count) =>
  Array.from({ length: count }, (_, i) => `${String(i + 1).padStart(2, '0')}.jpg`)

const files2016 = [
  'bieravond-1 - kinderen.jpg',
  'bieravond-7 - keukenwerkers.jpg',
  'bieravond-13 - afwassers.jpg',
  'bieravond-31 - tombola Duvel.jpg',
  'bieravond-32 - tombola Les Rulles.jpg',
  'bieravond-52 glazen Duvel.jpg',
  'bieravond-62 - HBL Jigo.jpg',
  'bieravond-67 - Hugo.jpg',
  'bieravond-71 - Anne.jpg',
  'bieravond-73 - frituur.jpg',
  'bieravond-80 - kinderen.jpg',
  'bieravond-84 - frituur.jpg',
  'bieravond-85 - HBL Linda.jpg',
  'bieravond-89 - kassa.jpg',
  'DSC_4605 - tombola.jpg',
  'DSC_4611 - HBL Linda.jpg',
  'DSC_4621- palletvoorbereiding.jpg',
  'DSC_4624- onze vaste NL klanten.jpg',
  'DSC_4640- voortoog.jpg',
  "DSC_4641- sponsor 't Voske.jpg",
  'DSC_4650 - samen bier proeven.jpg',
  'DSC_4675 - gewonnen Averbode.jpg',
  'DSC_4719- onze vaste NL klanten.jpg',
  "DSC_4726- sponsor 't Voske.jpg",
  'DSC_4727- zicht grote zaal.jpg',
  'DSC_4732- groepje Veros (uitgewerkt).jpg',
  'DSC_4738- gewonnen Delirium.jpg',
  'DSC_4767- voortoog.jpg',
  'DSC_4769 - Double Dee friends.jpg',
  'DSC_4788- voortoog.jpg',
  'DSC_4789 - Double Dee friends.jpg',
  'DSC_4809- wannes bedient.jpg',
  'DSC_4813 - Brigitte VC.jpg',
  'DSC_4815 - palletjes.jpg',
  'DSC_4843 - onze vaste NL klanten.jpg',
  'DSC_4867- NL danst.jpg',
  'DSC_4936 - optreden en C Conrad.jpg',
  'DSC_4937 - Frank Hens.jpg',
  'DSC_5015 - jaarslogan en zaal.jpg',
]

// "DSC_4641- sponsor 't Voske.jpg" -> "Sponsor 't Voske"
const captionFromFile = (file) => {
  const m = file.replace(/\.jpg$/i, '').match(/-\s*\d*\s*-?\s*(.+)$/)
  if (!m) return ''
  const text = m[1].trim()
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const album = (year, files, withCaptions = false) => ({
  year,
  photos: files.map((file, i) => ({
    id: `${year}-${i}`,
    src: `${LEGACY_ASSETS}/fotos/${year}/${encodeURIComponent(file)}`,
    caption: withCaptions ? captionFromFile(file) : '',
  })),
})

export const albums = [
  album(2018, letters('Z', 'JPG')),
  album(2017, letters('Z', 'jpg')),
  album(2016, files2016, true),
  album(2015, letters('U', 'jpg')),
  album(2014, numbers(17)),
]
