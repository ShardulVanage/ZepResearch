import PocketBase from 'pocketbase';

const url = 'https://zep-research.pockethost.io/'
export  const client = new PocketBase(url)
client.autoCancellation(false)