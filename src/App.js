import './App.css';
import Header from './components/Header';
import NotesGroup from './components/NotesGroup';
import TextArea from './components/TextArea';

function App() {
  return (
    <div className="App">
     <Header/>
     <TextArea/>
     <NotesGroup />
    </div>
  );
}

export default App;
