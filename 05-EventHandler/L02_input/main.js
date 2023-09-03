// ReactDOM

function App() {
// const handleChange = (e) => console.log();

    return (
        <input type='text' onChange={(e) => console.log(e.target.value)} />
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
