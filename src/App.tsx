import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { PeopleModuleContextProvider } from './modules/people'
import { MainPage, CharacterPage } from './pages'
import { CharacterModuleContextProvider } from './modules'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={
            <PeopleModuleContextProvider>
              <MainPage />
            </PeopleModuleContextProvider>
          } />
          <Route path='/character/:characterId' element={
            <CharacterModuleContextProvider>
              <CharacterPage />
            </CharacterModuleContextProvider>
          } />
        </Routes>
      </BrowserRouter>
  )
}

export default App
