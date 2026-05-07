const express = require('express')
const cors = require('cors')
const communitiesRouter = require('./routes/communities')
const membersRouter = require('./routes/members')

const app = express()
const PORT = 3001

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.use('/api/communities', communitiesRouter)
app.use('/api/communities/:communityId/members', membersRouter)

app.get('/api/health', (_, res) => res.json({ status: 'ok', time: new Date() }))

app.listen(PORT, () => {
  console.log(`🚀 Society API → http://localhost:${PORT}`)
})
