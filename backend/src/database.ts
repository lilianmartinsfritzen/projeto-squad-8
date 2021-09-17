import { RefreshTokensStore, UsersStore } from "./types"
import { v4 as uuid } from 'uuid'

export const users: UsersStore = new Map()

export const tokens: RefreshTokensStore = new Map()

export function seedUserStore() {
  users.set('usuario@fcamara.com.br', {
    name: 'Usuário',
    password: '123456',
    permissions: ['users.list', 'users.create' ],
    roles: ['administrator']
  })

  users.set('ana@fcamara.com.br', {
    name: 'Ana',
    password: '123456',
    permissions: ['users.list' ],
    roles: ['editor']
  })

  users.set('eirene@fcamara.com.br', {
    name: 'Eirene',
    password: '123456',
    permissions: ['users.list' ],
    roles: ['editor']
  })

  users.set('lilian@fcamara.com.br', {
    name: 'Lílian',
    password: '123456',
    permissions: ['users.list' ],
    roles: ['editor']
  })

  users.set('pedro@fcamara.com.br', {
    name: 'Pedro',
    password: '123456',
    permissions: ['users.list' ],
    roles: ['editor']
  })
}

export function createRefreshToken(email: string) {
  const currentUserTokens = tokens.get(email) ?? []
  const refreshToken = uuid()

  tokens.set(email, [...currentUserTokens, refreshToken])

  return refreshToken;
}

export function checkRefreshTokenIsValid(email: string, refreshToken: string) {
  const storedRefreshTokens = tokens.get(email) ?? []

  return storedRefreshTokens.some(token => token === refreshToken)
}

export function invalidateRefreshToken(email: string, refreshToken: string) {
  const storedRefreshTokens = tokens.get(email) ?? []

  tokens.set(email, storedRefreshTokens.filter(token => token !== refreshToken));
}