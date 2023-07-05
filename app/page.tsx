import IndexPage from './[lang]/page'

export default async function TopPage(){
  return await IndexPage({
    params: {
      lang: 'ja'
    },
  })
}