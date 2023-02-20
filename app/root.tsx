import type { LinksFunction, V2_MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import tailwind from '~/tailwind.css'

export const meta: V2_MetaFunction = () => [
  { charSet: 'utf-8' },
  { title: 'New Remix App' },
  { property: 'viewport', content: 'width=device-width,initial-scale=1' },
]

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
  { rel: 'stylesheet', href: tailwind },
]

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
