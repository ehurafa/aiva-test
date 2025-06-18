import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUserStore } from "../store/userStore"
import {
  LoginPage,
  LoginTitle,
  LoginForm,
  FormGroup,
  Label,
  Input,
  Button,
} from "./Login.styles"

export const Login: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [isNewUser, setIsNewUser] = useState(false)
  const navigate = useNavigate()
  const { setUser } = useUserStore()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      navigate("/")
    }
  }, [navigate, setUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = {
      email,
      name: name || "Cliente",
      password,
      role: "customer",
      avatar: "https://robohash.org/user.png?size=30x30",
    };

    try {
      if (isNewUser) {
        const response = await fetch("https://api.escuelajs.co/api/v1/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })

        if (!response.ok) {
          throw new Error("Erro ao cadastrar usuário")
        }
      }

      setUser(user)
      localStorage.setItem("user", JSON.stringify(user))
      navigate("/")
    } catch (error) {
      console.error("Erro ao autenticar ou cadastrar", error)
    }
  }

  return (
    <LoginPage>
      <LoginTitle>{isNewUser ? "Cadastre-se" : "Login"}</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        {isNewUser && (          
            <FormGroup>
              <Label>Nome:</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormGroup>
          )}
        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Senha:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>

        <button type="submit">{isNewUser ? "Cadastrar" : "Entrar"}</button>
      </LoginForm>
      <button onClick={() => setIsNewUser(!isNewUser)}>
        {isNewUser ? "Já tem uma conta? Faça login" : "Novo usuário? Cadastre-se"}
      </button>
    </LoginPage>
  )
}
