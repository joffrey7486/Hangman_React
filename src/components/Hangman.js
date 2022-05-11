import React, {useState, useEffect} from "react";

const Hangman = () => {
    const [target, setTarget] = useState("");
    const [luckyNumber, setLuckyNumber] = useState(8);
    const [letters, setLetters] = useState([]);
    const [word, setWord] = useState("");

    useEffect(() => {
        fetch("https://random-word-api.herokuapp.com/word?number=1")
        .then(res => res.json())
        .then(data => {
            setTarget(data[0].toUpperCase());
            setWord("_".repeat(data[0].length));
        })
        .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        const hiddenWord = target.split("").map(letter => letters.includes(letter) ? letter : "_").join("");

        if (hiddenWord == word) setLuckyNumber(luckyNumber - 1);

        setWord(hiddenWord);
    }, [letters]);

    const handleChange = (letter) => {
        const key = letter.nativeEvent.data.toUpperCase();

        setLetters(letters => [...letters, key]);
    }

    if (luckyNumber === 0) return <h1>T'es mort mec!!!</h1>;

    return (
        <div>
            <input type="text" value="" onChange={handleChange} />
            <h6>{word}</h6>
            <p>Chances restantes: {luckyNumber}</p>
            <p>Propositions précédentes: {letters.join(", ")}</p>
        </div>
    )
}

export default Hangman;