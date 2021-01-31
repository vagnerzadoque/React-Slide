import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'
import './main-list.css'
import CardPokmons from '../Card-pokmons/card-pokmons'
import api from '../../servies/services'
import { goNext, goPrev, updateMargin } from '../../utils/nextPrev'
const MainLis = () => {

    const [pokemons, setPokemons] = useState([])
    const [totalDivContainer, setTotalDivContainer] = useState(0)
    /* const [currentSlide, setCurrentSlide] = useState(0) */
    const tamanho = useRef()
    let currentSlide = 0
    function handleClickNext() {
        currentSlide++
        let result = (455 * currentSlide) 
        if(currentSlide > 150 -1){
            currentSlide = 0
        }
        tamanho.current.style.marginLeft = `${-result}px`
        console.log('Next',currentSlide)
    }
    function handleClickPrev() {
        currentSlide--
        let result = 455 *  currentSlide 
        if(currentSlide <= 0){
            currentSlide = 0
            tamanho.current.style.marginLeft = `${0}px`
          return
        }
        tamanho.current.style.marginLeft = `${-result}px`
        console.log('Next',currentSlide)
    }

    useEffect(() => {
        tamanho.current.style.marginLeft = 0
        const totaldeCard = Object.keys(pokemons).length
        const totalver = (450 * totaldeCard) + 750
        setTotalDivContainer(totalver)
    }, [pokemons])


    useLayoutEffect(() => {

        tamanho.current.style.width = `${totalDivContainer}px`



    }, [totalDivContainer])








    useEffect(() => {

        /* api.get(`/?offset=20&limit=20`) */
        api.get(`Biuni/PokemonGO-Pokedex/master/pokedex.json`)
            .then((response) => {
                /*  setPokemons(response.data.results) */
                setPokemons(response.data.pokemon)
                console.log(response.data.pokemon)

            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            })

    }, [])

    return (
        <>
            <div className="container-main">
                <div onClick={handleClickPrev} className="botao">Voltar</div>
                <div className="container-mask">
                    <div ref={tamanho} className="container-pokList">

                        <CardPokmons dadosPokemons={pokemons} />


                    </div>
                </div>
                <div onClick={handleClickNext} className="botao">Seguir</div>
            </div>
        </>
    )

}




export default MainLis