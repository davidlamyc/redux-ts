import ReactDOM from 'react-dom';
import Main from './components/App';

const App = () => {
    return <div>
        <Main/>
    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)