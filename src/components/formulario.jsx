import {  useState } from "react"

const Form = () => {
    const [inputValue, setValue] = useState('');
    const [pokemonData, setPokemon] = useState({})
    
      
 

    const getPokemon = async (event) => {
      
        try {
            event.preventDefault()
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
            const response = await data.json();
            if (!response) {
                alert('Não possivel buscar o pokemon    !')
            }
            setPokemon(response)
          

        } catch (error) {
            alert('Pokemon não achado,tente colocar um nome de verdade')
            console.log('algo deu errado', error)
        }


    }
    const eventHandle = (e) => {
        setValue(e.target.value)
    }


    return (
        <>
        <form onSubmit={getPokemon}>
            <label>

                <input
                    type="text"
                    onChange={eventHandle}
                    placeholder="digite o nome do pokemon aqui"
                />

            </label>

            <button type="submit">CLique para realizar a busca</button>
        </form>
        <h1>{contador}</h1>
        {pokemonData.sprites && (
            <>
            <h1>{pokemonData.name}</h1>
            <img src={pokemonData.sprites.front_default}/>
           
            </>
        )
         
       }
       
        </>
    )
}

export default Form