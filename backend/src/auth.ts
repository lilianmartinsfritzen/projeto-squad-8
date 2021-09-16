import jwt from 'jsonwebtoken'

import { auth } from './config';
import { createRefreshToken } from './database';

export function generateJwtAndRefreshToken(email: string, payload: object = {}) {
  const token = jwt.sign(payload, auth.secret, {
    subject: email,
    expiresIn: 10, // alterar para 10 minutos o expiresIn contabiliza em segundos
  });

  const refreshToken = createRefreshToken(email)

  return {
    token,
    refreshToken,
  }
}
