// ReactDOM


const handleCheck = e => console.log(e.target.value); 


function App() {
    return (
        <select onChange={handleCheck}>
            <option>Thai</option>
            <option>Vienam</option>
            <option>China</option>
            <option>Russia</option>
            <option>USA</option>
        </select>
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
