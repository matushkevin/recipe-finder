import Header from './components/Header'
import SearchBar from './components/SearchBar'
import RecipeList from './components/RecipeList'
import './index.css'

export default function App(){
  return (
    <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
      <Header />
      <SearchBar />
      <RecipeList />
    </div>
  )
}