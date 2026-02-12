tailwind.config = {
  theme: {
      extend: {
          fontFamily: { sans: ['"Plus Jakarta Sans"', 'sans-serif'] },
          colors: {
              brand: { 500: '#6366f1', 600: '#4f46e5' },
          },
          animation: {
              'blob': 'blob 7s infinite',
              'shine': 'shine 3s infinite linear',
              'shake': 'shake 0.4s cubic-bezier(.36,.07,.19,.97) both',
              'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
          },
          keyframes: {
              blob: {
                  '0%': { transform: 'translate(0px, 0px) scale(1)' },
                  '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                  '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                  '100%': { transform: 'translate(0px, 0px) scale(1)' },
              },
              shine: {
                  '0%': { transform: 'translateX(-100%)' },
                  '100%': { transform: 'translateX(100%)' },
              },
              shake: {
                  '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
                  '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
                  '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
                  '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
              },
              fadeInUp: {
                  '0%': { opacity: '0', transform: 'translateY(15px)' },
                  '100%': { opacity: '1', transform: 'translateY(0)' },
              }
          }
      }
  }
}