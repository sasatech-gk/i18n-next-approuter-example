import './globals.css'
import { i18n } from '@/i18n-config'
export const metadata = {
  title: 'top',
}

export default function Root({ children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={i18n.defaultLocale}>
      <body>{children}</body>
    </html>
  )
}
