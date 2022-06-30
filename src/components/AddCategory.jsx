import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One punch!')

    const onInputChange = ({ target }) => {
        // setInputValue(event.target.value);
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    }

    return (
        <form onSubmit={onSubmit} >
            <input type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                // onChange={ (event) =>  onInputChange(event)}  Otra alternativa
                onChange={onInputChange}
            />
        </form>
    )
}
