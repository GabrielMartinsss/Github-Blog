import { ReactNode, createContext, useEffect, useState } from 'react'
import { apiUsers } from '../lib/axios'

interface responseUserProps {
  login: string
  name: string
  bio: string
  avatar_url: string
  html_url: string
  company: string
  followers: number
}

interface GithubContextType {
  dataUser: responseUserProps
}

interface GithubProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({ children }: GithubProviderProps) {
  const [dataUser, setDataUser] = useState<responseUserProps>({
    login: '',
    name: '',
    bio: '',
    avatar_url: '',
    html_url: '',
    company: '',
    followers: 0,
  })

  useEffect(() => {
    async function getResponse(user: string) {
      const response = await apiUsers.get(user)
      setDataUser(response.data)
    }
    getResponse('gabrielmartinsss')
  }, [])

  console.log(dataUser)
  return (
    <GithubContext.Provider value={{ dataUser }}>
      {children}
    </GithubContext.Provider>
  )
}
