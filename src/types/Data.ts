export type Data = {
  image: string
  content?: string | undefined
  category: 'news' | 'events'
  author: string
  title: string
  date: Date
}[]
