// Single place the UI gets its catalog data from.
// Today it returns static data; when the .NET backend has a database, swap
// these bodies for fetch('/api/...') calls and the pages keep working.

import { beers } from '../data/beers'
import { menu } from '../data/menu'
import { albums } from '../data/photos'

export async function getBeers() {
  return beers
}

export async function getMenu() {
  return menu
}

export async function getAlbums() {
  return albums
}
