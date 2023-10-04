import { Wrapper } from './styles'

interface InfoAndValueProps {
  title: string
  value: string
}

export function InfoAndValue({ title, value }: InfoAndValueProps) {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <p>{value}</p>
    </Wrapper>
  )
}
