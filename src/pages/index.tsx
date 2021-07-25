type Props = {
  title: string
}

const bla = 'var'

export default function Home({ title = 'React avançado' }: Props) {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}
