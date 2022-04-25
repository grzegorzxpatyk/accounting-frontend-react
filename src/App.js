import { Link, Outlet } from 'react-router-dom';
import './App.scss';

function App() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <br />
            <nav>
                <Link to="/">Strona główna</Link>
                <Link to="/kontakt">Kontakt</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default App;
