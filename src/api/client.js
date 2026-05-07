const BASE = '/api'

async function req(method, path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : {},
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Erreur serveur' }))
    throw new Error(err.error || 'Erreur serveur')
  }
  return res.json()
}

export const api = {
  communities: {
    list: (params = {}) => {
      const qs = new URLSearchParams(params).toString()
      return req('GET', `/communities${qs ? '?' + qs : ''}`)
    },
    get: (id) => req('GET', `/communities/${id}`),
    create: (data) => req('POST', '/communities', data),
    update: (id, data) => req('PUT', `/communities/${id}`, data),
    delete: (id) => req('DELETE', `/communities/${id}`),
    stats: () => req('GET', '/communities/_stats/global'),
  },
  members: {
    list: (communityId) => req('GET', `/communities/${communityId}/members`),
    add: (communityId, data) => req('POST', `/communities/${communityId}/members`, data),
    update: (communityId, memberId, data) => req('PUT', `/communities/${communityId}/members/${memberId}`, data),
    delete: (communityId, memberId) => req('DELETE', `/communities/${communityId}/members/${memberId}`),
  },
}
