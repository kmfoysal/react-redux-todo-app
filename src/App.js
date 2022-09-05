
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';
import store from './redux/store';

function App() {
  return (
        <Provider store={store}>
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
        </Provider>
  );
}

export default App;
