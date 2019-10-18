import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';


const MainApp = () => (
    <Provider store={configureStore()}>
        <App />
    </Provider>
)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
