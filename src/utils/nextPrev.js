
import React, {useState, useRef} from 'react'

const Handle = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const tamanho = useRef()
    function handleClickNext() {
        let next = currentSlide
        let result = 450 * next
        setCurrentSlide(next + 1)
        if (currentSlide > 150 - 1) {
            setCurrentSlide(0)
        }
        tamanho.current.style.marginLeft = `${-result}px`
        return this
    }
     function handleClickPrev() {
        let next = currentSlide
        let result = 450 * next
        setCurrentSlide(next - 1)
        if (currentSlide < 1) {
            setCurrentSlide(0)
        }
        tamanho.current.style.marginLeft = `${-result}px`
        return this
    }

} 

export default Handle