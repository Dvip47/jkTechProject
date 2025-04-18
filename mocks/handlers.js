import { rest } from 'msw'

// Mock handlers for different API endpoints
export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { username: 'admin', role: 'admin' },
        { username: 'guest', role: 'user' }
      ])
    )
  }),

  rest.post('/login', (req, res, ctx) => {
    const { username, password } = req.body
    if (username === 'admin' && password === 'password123') {
      return res(
        ctx.status(200),
        ctx.json({ success: true, user: { username: 'admin', role: 'admin' } })
      )
    }
    return res(
      ctx.status(400),
      ctx.json({ success: false, error: 'Invalid credentials' })
    )
  }),

  rest.get('/documents', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: 'Document 1' },
        { id: 2, title: 'Document 2' }
      ])
    )
  }),

  rest.post('/documents', (req, res, ctx) => {
    const { title } = req.body
    if (title) {
      return res(
        ctx.status(201),
        ctx.json({ success: true, document: { title } })
      )
    }
    return res(
      ctx.status(400),
      ctx.json({ success: false, error: 'Document upload failed' })
    )
  }),

  rest.post('/ingest', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ success: true, message: 'Ingestion started' })
    )
  }),

  rest.get('/ingestion-status', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ status: 'Ingestion in progress' })
    )
  }),

  rest.post('/qa', (req, res, ctx) => {
    const { question } = req.body
    if (question === 'What is React?') {
      return res(
        ctx.status(200),
        ctx.json({
          answer: 'React is a JavaScript library for building user interfaces.',
          documents: ['Document 1', 'Document 2']
        })
      )
    }
    return res(
      ctx.status(200),
      ctx.json({
        answer: 'Sorry, I don\'t know the answer, I will trying fo learn',
        documents: []
      })
    )
  }),

  rest.get('/documents/related', (req, res, ctx) => {
    const { q } = req.url.searchParams
    if (q === 'React') {
      return res(
        ctx.status(200),
        ctx.json(['Document 1', 'Document 2'])
      )
    }
    return res(
      ctx.status(200),
      ctx.json([])
    )
  })
]
