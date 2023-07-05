import { i18n } from '@/i18n-config'
const metadata = {
  title: 'title',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}
 
export default function Root({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
