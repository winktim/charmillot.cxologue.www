import { resolve } from 'path'
import { copyFileSync, existsSync } from 'fs'

const env = process.env.NODE_ENV

const envPath = resolve(process.cwd(), `env.${env}.js`)
const defaultEnvPath = resolve(process.cwd(), 'env.example.js')

export default function() {
  const envFile = existsSync(envPath) ? envPath : defaultEnvPath
  copyFileSync(envFile, __dirname + '/static/env.js')
}
