import React from 'react'
import './card-pokemons.css'
const CardPokmons = ({ dadosPokemons }) => {

    console.log(dadosPokemons)
    return (

        <>
        { dadosPokemons &&
            dadosPokemons.map((pokes) => {

                return (
                    
                
                    <div  key={pokes.id} className="container-card-pokemons">

                        <div className="card-header">
                            <h1>{pokes.name}</h1>
                            <p>{pokes.candy}</p>
                            <p>ID = {pokes.id}</p>

                        </div>

                        <div className="card-main">
                            <img src={pokes.img} alt="" />
                        </div>

                        <div className="card-footer">

                        </div>

                    </div>

            

                )

            })
        }



        </>

    )

}



export default CardPokmons