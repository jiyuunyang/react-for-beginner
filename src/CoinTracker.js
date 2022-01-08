import {useEffect, useState} from "react";
import './App.css';

function App() {
    const [loading,
        setLoading] = useState(true);
    const [coins,
        setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers").then((res) => res.json()).then((json) => {
            setCoins(json);
            //loading값 변화를 then 함수 안에 넣어줘야함.
            setLoading(false);
        });
    }, [])
    return (
    // input을 넣어서 검색하도록 하는 것  만들어보자
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
        {
        loading
            ? <strong>Loading...</strong>
            : <select>{coins.map((coin) => <option key={coin.id}>{coin.name}
                        ({coin.symbol}): ${coin.quotes.USD.price}
                        USD</option>)}</select>
    } 
    </div>
    );
}

export default App;