// Informações que vão no body da API GET TOKEN.
const granType = 'client_credentials'
const id = '91F3200EC5D1C788'
const secret = '6c708dbd6fa3640b8f451aa6caed351a'


// Informações que vão no body da API GET ID.
const source = 'courts';
const platform = 'eproc'
const search = 'tjsc'
const query = 'principal'
const key = 'doc'

// URL da API GET TOKEN
const url = 'https://auth.codilo.com.br/oauth/token'

// URL da API GET ID.
const urlGetId = 'https://api.capturaweb.com.br/v1/request'

export { granType, id, secret, source, platform, search, query, key, url, urlGetId }