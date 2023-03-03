'use client'

import React, {useState, useEffect, useRef} from 'react';



const Scrollable = (props) => {
    const ref = useRef(null)
    const [state, setState] = useState({
        isScrolling:false,
        clientX:0,
        scrollX:0
    })
    useEffect(()=>{
        const el = ref.current
        if (el) {
            // функция обработки колеса мыши для горизонтального скролла
            const onWheel = e => {
                e.preventDefault()
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 4,
                    behavior: 'smooth'
                })
            }
            el.addEventListener('wheel', onWheel)
            return () => el.removeEventListener('wheel', onWheel)
        }
    },[])

    const onMouseMove = e => {
        let fsX = 0
        if(ref && ref.current && !ref.current.contains(e.target)){
            return
        }
        let objWidth = ref.current.scrollWidth - ref.current.offsetWidth
        e.preventDefault()
        const {clientX, scrollX, isScrolling} = state
        if(isScrolling){
            ref.current.scrollLeft = scrollX - e.clientX + clientX
            let sX = scrollX - e.clientX + clientX
            let cX = e.clientX
            if (sX < 0) {
                fsX = 0;
            } else if (sX > 0 && sX < objWidth) {
                fsX = sX;
            } else if (sX >= objWidth) {
                fsX = objWidth;
            }

            setState({
                ...state,
                scrollX: fsX,
                clientX: cX,
            })
        }
    }

    const onMouseDown = e => {
        if(ref && ref.current && !ref.current.contains(e.target)){
            return
        }
        e.preventDefault()
        setState({
                ...state,
                isScrolling:true,
                clientX:e.clientX,
            }
        )
    }

    const onMouseUp = e => {
        if(ref && ref.current && !ref.current.contains(e.target)){
            return
        }
        e.preventDefault()
        setState({
            ...state,
            isScrolling:false
        })
    }

    useEffect(()=>{
        document.addEventListener('onMouseDown', onMouseDown)
        document.addEventListener('onMouseUp', onMouseUp)
        document.addEventListener('onMouseMove', onMouseMove)

        return()=>{
            document.removeEventListener('onMouseDown', onMouseDown)
            document.removeEventListener('onMouseUp', onMouseUp)
            document.removeEventListener('onMouseMove', onMouseMove)
        }
    })


    return (
        <div
            ref={ref}
    className={props._class}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    onMouseMove={onMouseMove}
        >
        {
            React.Children.map(props.children,child => React.Children.only(child))
        }
        </div>
);
};

export default Scrollable;