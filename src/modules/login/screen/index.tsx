import React, { useState } from 'react'

import { Wrapper } from './styles'
import { Logo } from '../../../components/atoms/logo'
import { Input } from '../../../components/molecules/input'
import { Button } from '../../../components/atoms/button'
import { useLoginStore } from '../store/store'

export function Login(): React.JSX.Element {
  const { login } = useLoginStore()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await login({ email, password })
  }

  return (
    <Wrapper>
      <div className="login-area">
        <Logo width={250} />

        <form onSubmit={handleSubmit}>
          <Input
            label="E-mail"
            value={email}
            type="email"
            onChange={(v) => setEmail(v.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(v) => setPassword(v.target.value)}
          />

          <Button type="submit" marginTop={20}>
            Entrar
          </Button>
        </form>
      </div>
    </Wrapper>
  )
}
