import express from 'express'
import { listings } from './listings'
import bodyParser from 'body-parser'

const app = express()
const port = 9000
app.use(bodyParser.json())

app.get('/', (_req, res) => res.send('Hello world here'))
app.get('/listings', (_req, res) => res.send(listings))
app.post('/delete-listing', (req, res) => {
    const { body: { id }} = req;
    const indexOfListingToDelete = listings.findIndex(listing => listing.id === id)
    return indexOfListingToDelete === -1 ? res.send('Failed to delete') : res.send(listings.splice(indexOfListingToDelete, 1))
})
app.listen(port)

console.log(`[app]: http://localhost:${port}`)