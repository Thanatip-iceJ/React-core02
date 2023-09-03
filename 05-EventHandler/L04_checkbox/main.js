// ReactDOM
const handleCheck = e => {
    (e.target.checked)? console.log('Checked') : console.log('Unchecked'); 
}

function App() {
    return (
    <form>
        <input type='checkbox' id='apple' onChange={handleCheck}/>
        <label htmlFor='apple'>Apple</label>
    </form>
    )
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
