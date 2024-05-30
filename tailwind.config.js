/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
            //Our fall animation keyframes              
            fall: {
                // '0%': { transform: 'translate(-50%,0%) skewX(0deg)' },
                '0%': { transform: 'translate(20%,0%)', opacity:.5, color:'white' },
                //'50%': { transform: 'translate(5%,0%)', opacity:.5 },
                '100%': { transform: 'translate(0%,0%) ', },

              },
              fall2: {
                // '0%': { transform: 'translate(-50%,0%) skewX(0deg)' },
                '0%': { transform: 'translate(-15%,0%)', opacity: .5, color:'white' },
                //'50%': { transform: 'translate(-5%,0%)', opacity:.5 },

                '100%': { transform: 'translate(0%,0%) ' },

              },
              fall3: {
                // '0%': { transform: 'translate(-50%,0%) skewX(0deg)' },
                '0%': { transform: 'translate(25%,0%)', opacity: 0.25 },
                // '50%': { transform: 'translate(10%,0%)', opacity:.5 },

                '100%': { transform: 'translate(0%,0%) ' },

              },
              fall4: {
                // '0%': { transform: 'translate(-50%,0%) skewX(0deg)' },
                '0%': { transform: 'translate(10%,0%)' },
                // '50%': { transform: 'translate(10%,0%)', opacity:.5 },

                '100%': { transform: 'translate(0%,0%) scale(1.1) ' },

              },
              fall5: {
                // '0%': { transform: 'translate(-50%,0%) skewX(0deg)' },
                '0%': { transform: 'translate(-10%,0%)' },
                // '50%': { transform: 'translate(10%,0%)', opacity:.5 },

                '100%': { transform: 'translate(0%,0%) scale(1.1) ' },

              },
              fall6: {
                // '0%': { transform: 'translate(-50%,0%) skewX(0deg)' },
                '0%': { transform: 'translate(0%,-30%)' },
                // '50%': { transform: 'translate(10%,0%)', opacity:.5 },

                '100%': { transform: 'translate(0%,0%) scale(1.1) ' },

              },
              wave:{
          
                '0%': {
                  transform: 'rotateY(0deg)'
                },
               ' 10%' :{
                  transform: 'rotateY(24deg)'
                }, 
               '20%':{
                  transform: 'rotateY(-8deg)'
                },
               '30%' :{
                  transform: 'rotateY(24deg)'
                },
                '40%': {
                  transform: 'rotateY(-14deg)'
                },
                '50%': {
                  transform: 'rotateY(10deg)'
                },
                '60%': {
                  transform: 'rotateY(0deg)'
                }, /* Reset for the last half to pause */
                '100%': {
                  transform: 'rotateY(0deg)'
                }
                
                

              }
            },
      
      animation: {
           // You can then reference these keyframes by name in the 
           // animation section of your theme configuration
           fall: 'fall 1.75s ease-in-out forwards',
           fall2: 'fall2 1.75s ease-in-out forwards 2',
           fall3: 'fall3 1.75s ease-in-out forwards 2',
           fall4: 'fall4 1 ease-in-out forwards 1s',
           fall5: 'fall5 1s ease-in-out forwards 0.75s ',
           fall6: 'fall6  ease-in-out forwards 0.75s ',


           wave:  'wave 10s infinite'
            
          //  fall2: 'fall2 0.75s ease-in-out forwards 0.5s'

           // animation shorthand CSS property i.e
           // animation-name | animation-duration | animation-timing-function 
           // animation-iteration-count
      }
    }
  },
  plugins: [],
}

