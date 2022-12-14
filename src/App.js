
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <NavBar />

        <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />

          <hr class="mt-4" />

          <ToDoList />

          <hr class="mt-4" />

          <Footer />
        </div>

        <div>
          <p className="text-xs tracking-wider">
            &copy; All Right Reserved | Developed By{" "}
            <span className="text-indigo-500 cursor-pointer">K.M Foysal</span>
          </p>
        </div>
      </div>
    </Provider>
  );
}

export default App;
