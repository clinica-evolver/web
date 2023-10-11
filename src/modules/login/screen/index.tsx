import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Logo } from '@atoms/logo'
import { Input } from '@molecules/input'
import { Button } from '@atoms/button'
import { useLoginStore } from '../store'
import { Wrapper } from './styles'

export function Login(): React.JSX.Element {
  const { login } = useLoginStore()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    try {
      await login({ email, password })
      navigate('/admin')
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`)
      }
    } finally {
      setLoading(false)
    }
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

          <Button type="submit" marginTop={20} loading={loading}>
            Entrar
          </Button>
        </form>
      </div>
    </Wrapper>
  )
}
