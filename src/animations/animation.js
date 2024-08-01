
export const menuSlide = {
    initial: {
        x: "100%"
    },
    enter: {
        x: "0%",
        transition: {duration: 0.8, ease: [0.76,0, 0.24, 1]}
    },
    exit:{
        x: "100%",
        transition: {duration: 0.8, ease: [0.76,0, 0.24, 1]}
    }
}

export const slice = {
    initial: {
        x: "200px",
        opacity: 0
    },
    enter: (i) =>( {
        x: "0px",
        transition: {duration: 0.8, ease: [0.76,0, 0.24, 1], delay: 0.05 * i},
        opacity: 1
    }),
    exit: (i) =>( {
        x:"100px",
        transition: {duration: 0.8, ease: [0.76,0, 0.24, 1], delay: 0.05 * i}
    })
}

export const fade = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1,
        transition: {duration: 0.8, ease: [0.76,0, 0.24, 1]}
    },
    exit: {
        opacity: 0,
        transition: {duration: 0.8, ease: [0.76,0, 0.24, 1]}
    }
}

export const fadeUp = {
    initial: {
        opacity: 0,
        y: 250
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {duration: 1.3, ease: [0.25, 1, 0.5, 1]}
    },
  
}

export const sliceUp = {
    initial: {
        y: "-300%",
        opacity: 0,

    },
    animate: {
        opacity: 1,

        y: "0%",
        transition: {duration: 3, ease: [0.25, 1, 0.5, 1]}
    },
  
}
export const sliceUp2 = {
    initial: {
        y: "-300%",
        opacity: 0,

    },
    animate: {
        opacity: 1,

        y: "0%",
        transition: {duration: 4.3, ease: [0.25, 1, 0.5, 1]}
    },
  
}

export const scaleX = {
    initial: {
        scaleX: 0,
     

    },
    animate: {


        scaleX: 1,
        transition: {duration: 4.3, ease: [0.25, 1, 0.5, 1]}
    },
  
}

