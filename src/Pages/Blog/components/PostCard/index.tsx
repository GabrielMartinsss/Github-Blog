import { PostCardContainer } from './styles'

export function PostCard() {
  const textTest =
    "Programming languages all have built-in data structures, but theseoften differ from one language to another. This article attempts tolist the built-in data structures available in JavaScript and whatproperties they have. These can be used to build other datastructures. Wherever possible, comparisons with other languages aredrawn. Dynamic typing JavaScript is a loosely typed and dynamiclanguage. Variables in JavaScript are not directly associated withany particular value type, and any variable can be assigned (andre-assigned) values of all types: let foo = 42; // foo is now anumber foo = 'bar'; // foo is now a string foo = true; // foo is nowa boolean"
  const text = textTest.length > 180 ? textTest.slice(0, 180) + '...' : textTest

  return (
    <PostCardContainer>
      <div>
        <h2>JavaScript data types and data structures</h2>
        <span>Há 1 dia</span>
      </div>
      <p>{text}</p>
    </PostCardContainer>
  )
}
