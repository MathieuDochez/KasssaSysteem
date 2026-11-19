// "Overig aanbod": everything that is not on the beer list.
// `price` stays null until the organisers set prices (later from the DB).

const item = (id, name) => ({ id, name, price: null })

export const menu = [
  {
    id: 'wijn',
    title: 'Wijn',
    items: [item('wijn-wit', 'Glas witte wijn'), item('wijn-rood', 'Glas rode wijn')],
  },
  {
    id: 'frisdrank',
    title: 'Frisdranken',
    items: [
      item('water-plat', 'Water plat'),
      item('water-bruis', 'Water bruis'),
      item('cola', 'Coca-Cola'),
      item('cola-zero', 'Coca-Cola Zero'),
      item('fanta', 'Fanta'),
      item('ice-tea', 'Lipton Ice Tea'),
      item('green-tea', 'Lipton Green Tea Zero'),
    ],
  },
  {
    id: 'warm',
    title: 'Warme dranken',
    items: [item('koffie', 'Koffie'), item('koffie-deca', 'Koffie deca'), item('thee', 'Thee')],
  },
  {
    id: 'hapjes',
    title: 'Hapjes',
    items: [
      item('chips-zout', 'Chips zout'),
      item('chips-paprika', 'Chips paprika'),
      item('chips-pickles', 'Chips pickles'),
      item('bord-koud', 'Bordje koud gemengd'),
      item('bord-warm', 'Bordje warm gemengd'),
    ],
  },
  {
    id: 'frituur',
    title: 'Frituur',
    items: [
      item('frieten', 'Portie frieten'),
      item('bicky', 'Bicky burger'),
      item('bicky-cheese', 'Bicky cheeseburger'),
      item('veggie', 'Veggie burger'),
      item('veggie-cheese', 'Veggie cheeseburger'),
      item('curryworst', 'Curryworst'),
      item('curryworst-special', 'Curryworst special'),
      item('stoofvleessaus', 'Stoofvleessaus'),
      item('stoofvlees', 'Stoofvlees'),
    ],
  },
]
