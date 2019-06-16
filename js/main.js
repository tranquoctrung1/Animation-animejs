// anime({
//     targets: 'h1',
//     translateY: 400,
//     rotate: {
//         value: '50turn',
//         duration: 2000,
//         easing:'easeOutElastic(1, .5)'
//     },
//     color: '#d63031',
//   });

const box = document.getElementsByClassName('box')

// anime({
//     targets:`.red`,
//     translateY:[
//         {value: 250, duration: 1000},
//         {value: 0, duration: 1000}
//     ],
//     rotate: 
//     {
//         value: '50turn',
//         duration: 2000,
//         easing: 'easeInOutSine'
//     },
// })
// anime({
//     targets:`.blue`,
//     translateY:[
//         {value: 250, duration: 1000, delay:1000},
//         {value: 0, duration: 1000}
//     ],
//     rotate: 
//     {
//         value: '50turn',
//         duration: 2000,
//         easing: 'easeInOutSine',
//         delay: 1000,
//     },
// })
// anime({
//     targets:`.green`,
//     translateY:[
//         {value: 250, duration: 1000, delay:2000},
//         {value: 0, duration: 1000}
//     ],
//     rotate: 
//     {
//         value: '50turn',
//         duration: 2000,
//         easing: 'easeInOutSine',
//         delay: 2000,
//     },
// })
// anime({
//     targets:`.yellow`,
//     translateY:[
//         {value: 250, duration: 1000, delay:3000},
//         {value: 0, duration: 1000}
//     ],
//     rotate: 
//     {
//         value: '50turn',
//         duration: 2000,
//         easing: 'easeInOutSine',
//         delay: 3000,
//     },
// })

var animation = anime({
    targets:box,
    translateY:[
        {value: 250, duration: 1000},
        // {value: 0, duration: 1000}
    ],
    direction: 'alternate', // go back old their location with old properties css
    rotate: 
    {
        value: '50turn',
        duration: 2000,
        easing: 'easeInOutSine'
    },
    opacity: {
        value:0.5,
    },
    delay: function(el, i, l) {
        // TranslateY by i(index in array target) active a animation
        return i * 1000;
    },
    endDelay: function(el, i, l) {
        // active a animation 1 more
        return (l - i) *1000;
    }   
})

animation.pause();
document.querySelector('.play').onclick = animation.play;
document.querySelector('.pause').onclick = animation.pause;