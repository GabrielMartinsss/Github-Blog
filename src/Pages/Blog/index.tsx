import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { BlogContainer, BlogForm, PostContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <BlogForm>
        <header>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </header>
        <input type="text" placeholder="Buscar conteúdo" />
      </BlogForm>
      <PostContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostContainer>
    </BlogContainer>
  )
}
