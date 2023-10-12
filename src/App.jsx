import './App.css'
import HOC from './components/Hoc/HOC'
import ParentHOC from './components/Hoc/ParentHOC'
import PureComp from './components/PureComp'

function App() {
  return (
    <>
      <PureComp />
      <ParentHOC hoc={HOC} />
    </>
  )
}

export default App
