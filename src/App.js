import React from 'react';


function App() {
    let ulElem;
    const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5, 6, 7]);
    const ulRef = React.useRef();

    console.log(ulRef);

    const addNumber = () => {
        const lastNumber = numbers[numbers.length - 1];
        setNumbers([...numbers, lastNumber + 1]);
    };

    const handleScroll = () => {
        console.log('was scroll');
    };

    React.useEffect(() => {
        ulRef.current.addEventListener('scroll', handleScroll);
    }, []);


    const removeScroll = () => {
        console.log(ulRef);
        ulRef.current.removeEventListener('scroll', handleScroll);
    };

    return (
        <div>
            <ul ref={ulRef}>
                {numbers.map((n) => (
                    <li key={n}>{n}</li>
                ))}
            </ul>
            <button onClick={addNumber}> Add number</button>
            <button onClick={removeScroll}>stop watching</button>
        </div>
    );
}

export default App;
