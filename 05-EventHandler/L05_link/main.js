// ReactDOM
const handleClick = () => {
    confirm('Leave for https://google.com?')
}

function App() {
    return (
        <a onClick={handleClick}>Google</a>
        
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
