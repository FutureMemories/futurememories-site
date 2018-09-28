/* eslint-disable no-new */
import SineWaves from 'sine-waves'

const wavesObject = document.querySelectorAll('.wave-object')

if (wavesObject.length > 0) {
  new SineWaves({
    el: document.getElementById('waves'),
    speed: 12,
    width: function () { return window.innerWidth },
    height: 150,
    ease: 'SineInOut',
    wavesWidth: '90%',
    waves: [
      {
        lineWidth: 1,
        amplitude: 50,
        wavelength: 150,
        strokeStyle: 'rgba(212, 222, 218, 0.5)'
      },
      {
        lineWidth: 1,
        amplitude: 100,
        wavelength: 150,
        strokeStyle: 'rgba(212, 222, 218, 0.5)'
      },

      {
        lineWidth: 1,
        amplitude: 20,
        wavelength: 150,
        strokeStyle: 'rgba(212, 222, 218, 0.5)'
      },
      {
        lineWidth: 1,
        amplitude: 70,
        wavelength: 150,
        strokeStyle: 'rgba(212, 222, 218, 0.5)'
      },
      {
        lineWidth: 1,
        amplitude: -80,
        wavelength: 150,
        strokeStyle: 'rgba(212, 222, 218, 0.5)'
      },
      {
        lineWidth: 1,
        amplitude: -50,
        wavelength: 150,
        strokeStyle: 'rgba(212, 222, 218, 0.5)'
      },
      { // middle line
        lineWidth: 1,
        amplitude: -20,
        wavelength: 150,
        strokeStyle: 'rgba(212, 222, 218, 0.7)'
      },
      {
        lineWidth: 2,
        amplitude: 140,
        wavelength: 150,
        strokeStyle: 'rgba(212, 222, 218, 0.8)'
      }
    ]
  })
}
