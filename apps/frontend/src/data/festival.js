// Static event info. Later this can come from the backend (per edition).

export const LEGACY_ASSETS = 'https://www.bierfestival-lint.be'

export const festival = {
  name: 'Festival van het betere Vlaamse Bier',
  shortName: 'Bierfestival Lint',
  date: '2026-05-02',
  dateLabel: 'zaterdag 2 mei 2026',
  opensAt: '15:00',
  venue: {
    name: "Scoutslokalen 't Luytershof",
    street: 'Luitersheide 5',
    postalCode: '2547',
    city: 'Lint',
  },
  email: 'organisatie@bierfestival-lint.be',
  tastingGlassCl: 15,
  beerCountLabel: '80-tal',
  organisers: [
    { name: 'Scouts Lint', url: 'http://www.scoutslint.be/' },
    { name: 'Veros (OudScouts)', url: 'https://veros.be/' },
  ],
  poster: `${LEGACY_ASSETS}/img/AFFICHE%20BIERFESTIVAL.png`,
  heroImage: `${LEGACY_ASSETS}/img/bgheader.jpg`,
  map: {
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.9573366629397!2d4.50400799314796!3d51.12769497209048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3fb0141e9c29f%3A0x25fdd6ea8c3adfcf!2sLuitersheide%205%2C%202547%20Lint!5e0!3m2!1snl!2sbe!4v1678348843149!5m2!1snl!2sbe',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=Luitersheide+5,+2547+Lint',
  },
  travelLinks: [
    { label: 'Busroute met De Lijn', url: 'https://www.delijn.be/' },
    { label: 'Treinroute met NMBS', url: 'https://www.belgiantrain.be/' },
  ],
}
