import { useContext, useEffect, useRef} from 'react'

import gsap from 'gsap';
import { MyCursorContext } from '../context/CursorContext';



export default function Cursor() {

    const mouse = useRef({x: 0, y: 0});

    const circle = useRef();
    
    const {isActive} = useContext(MyCursorContext)

    
console.log(isActive)
    const manageMouseMove = (e) => {

        const { clientX, clientY } = e;

    

        mouse.current = {

            x: clientX,

            y: clientY

        }



        moveCircle(mouse.current.x, mouse.current.y);

    }



    const moveCircle = (x, y) => {

        gsap.set(circle.current, {x, y, xPercent: -50, yPercent: -50})

    }



    useEffect( () => {

        window.addEventListener("mousemove", manageMouseMove);

        return () => {

            window.removeEventListener("mousemove", manageMouseMove);

        }

    }, [])



    return (

      <div 

      ref={circle}

      style={{

          backgroundColor: "#FFFFFF",

          

      }}

      className={`top-0 left-0 fixed rounded-full z-50 pointer-events-none border hidden lg:block`} 

  ><div className={`transition-all duration-200 ${isActive ? "flex justify-center items-center text-7xl h-[200px] w-[200px]" : "mix-blend-difference w-[30px] h-[30px]"}`}>
    {
      isActive ? <i className="fa-solid fa-arrow-right -rotate-45"></i> : ""
    }</div>
  </div>

    )

}