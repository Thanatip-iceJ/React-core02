// ReactDOM

function App() {
    return (
        <button onClick={() => alert('Hi')}>Button</button>
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
