type Props = {
  title: string
}

export default function Home({ title = 'React avançado' }: Props) {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}
