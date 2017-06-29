import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-docker'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-haskell'
import 'prismjs/components/prism-ini'
import 'prismjs/components/prism-jade'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-kotlin'
import 'prismjs/components/prism-less'
import 'prismjs/components/prism-lua'
import 'prismjs/components/prism-makefile'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-swift'
import 'prismjs/components/prism-yaml'

export const prism = Prism

export const mapping = {
  c: 'c',
  cpp: 'cpp',
  css: 'css',
  es6: 'js',
  js: 'js',
  'Dockerfile': 'docker',
  go: 'go',
  graphql: 'graphql',
  gql: 'graphql',
  h: 'c',
  haskell: 'haskell',
  ini: 'ini',
  jade: 'jade',
  java: 'java',
  json: 'json',
  jsx: 'js',
  kt: 'kotlin',
  less: 'less',
  lua: 'lua',
  'Makefile': 'makefile',
  md: 'markdown',
  markup: 'markup',
  php: 'php',
  py: 'python',
  pug: 'jade',
  rb: 'ruby',
  scss: 'scss',
  sh: 'bash',
  sql: 'sql',
  swift: 'swift',
  yml: 'yaml'
}
