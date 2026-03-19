import fs from 'fs'
import path from 'path'

const alternativesDirectory = path.join(process.cwd(), 'app/alternatives')

export function getAlternativeSlugs(): string[] {
  if (!fs.existsSync(alternativesDirectory)) {
    return []
  }

  const entries = fs.readdirSync(alternativesDirectory, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isDirectory())
    .filter((entry) => {
      const pagePath = path.join(alternativesDirectory, entry.name, 'page.tsx')
      const pagePathJs = path.join(alternativesDirectory, entry.name, 'page.js')
      return fs.existsSync(pagePath) || fs.existsSync(pagePathJs)
    })
    .map((entry) => entry.name)
}
