
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';

function App() {
  return (
        <div
            class="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
        >
            {/* <!-- navbar --> */}
             <NavBar />

            <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">

                {/* <!-- header --> */}

                <Header />

                <hr class="mt-4" />

                {/* <!-- todo list --> */}

                <ToDoList />

                <hr class="mt-4" />

                {/* <!-- footer --> */}

                <Footer />
                
            </div>
        </div>
  );
}

export default App;
