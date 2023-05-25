import { useEffect, useRef } from 'react';
import './progressbar.scss';

function ProgressBar({value}) {

    const barInnerRef = useRef()

    useEffect(()=>{
        barInnerRef.current.style.width = `${value}%`
    }, [value])
  return (
    <div className="progress-bar">
        <div ref={barInnerRef} className={value < 50 ? "progress-bar__inner" : "progress-bar__inner background-red"}></div>
    </div>
  )
}

export default ProgressBar