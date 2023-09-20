import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MealsListProvider } from './Contexts/ItemsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MealsListProvider>
        <App />
    </MealsListProvider>
);
