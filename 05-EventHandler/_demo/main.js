// ReactDOM

const handleClick = () => console.log('Clicked');

function App() {
    return (
        <div>
            <button onClick={handleClick}>Click me V1</button>
            <button onClick={() => console.log('CLICKED')}>Click me V2</button>
        </div>
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
