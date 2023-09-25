import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MealsListProvider } from './Contexts/ItemsContext';
import { CartListProvider } from './Contexts/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MealsListProvider>
    <CartListProvider>
        <App />
    </CartListProvider>
    </MealsListProvider>
);
