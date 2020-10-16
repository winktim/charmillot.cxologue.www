// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const _ = require('lodash')

module.exports = {
  purge: false,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    transform: (theme, { negative }) => ({
      'none': '0',
      'screen': '100vw',
      '-screen': '-100vw',
      'quarter': '90deg',

      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    transitionDurations: {
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      400: '400ms',
      1: '1s',
    },
    transitionProperties: {
      'transform': 'transform',
      'opacity': 'opacity',
      'padding': 'padding',
      'padding-top': 'padding-top',
      'border-color': 'border-color',
      'border-radius': 'border-radius',
      'background': 'background',
    },
    colorVariations: {
      5: 5,
      10: 10,
    },
    extend: {
      colors: {
        'gray': {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          darken: '#21212155',
        },
        'c-violet': {
          1: '#652347',
          2: '#813347',
          3: '#702D5A',
        },
        'c-red': {
          1: '#C8281C',
          2: '#C72317',
          3: '#86251E',
        },
        'c-yellow': {
          1: '#FDA131',
          2: '#FEB912',
          3: '#FDB864',
        },
      },
      opacity: {
        85: '0.85',
      },
      spacing: {
        '-12': '-3rem',
        '15': '3.75rem',
        '28': '7rem',
        '60': '15rem',
        '70': '17.5rem',
        '100': '25rem',
        '1/5': '20%',
        '1/4': '25%',
        '1/3': '33%',
      },
      width: {
        100: '25rem',
        120: '30rem',
        160: '40rem',
        200: '50rem',
      },
      height: {
        18: '4.5rem',
        76: '19rem',
        100: '25rem',
        200: '50rem',
      },
      maxHeight: {
        200: '50rem',
        32: '8rem',
        64: '16rem',
      },
      maxWidth: {
        60: '15rem',
        100: '25rem',
        120: '30rem',
      },
      minWidth: {
        '64': '16rem',
        '2/3': '66.66%',
      },
      fontFamily: {
        content: ['Mulish', 'sans-serif'],
        heading: ['Merienda', 'sans-serif'],
      },
      borderRadius: {
        md: '0.3rem',
        xl: '1.3rem',
      },
      inset: {
        full: '100%',
      },
      zIndex: {
        bottom: '-1',
      },
      screens: {
        'fake-select': '450px',
      },
      boxShadow: {
        'lg-top':
          '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  variants: {},
  plugins: [
    /**
     * Transform plugin
     */
    function ({ addUtilities, addComponents, e, prefix, config }) {
      const utilities = _.map(config('theme.transform'), (value, key) => {
        return {
          [`.${e(`translate-x-${key}`)}`]: {
            transform: `translateX(${value})`,
          },
          [`.${e(`translate-y-${key}`)}`]: {
            transform: `translateY(${value})`,
          },
          [`.${e(`translate-z-${key}`)}`]: {
            transform: `translateZ(${value})`,
          },
          [`.${e(`rotate-${key}`)}`]: {
            transform: `rotate(${value})`,
          },
        }
      })

      addUtilities(utilities, {
        variants: ['responsive'],
      })
    },
    /**
     * Transition plugin
     */
    function ({ addUtilities, addComponents, e, prefix, config }) {
      const utilities = _.map(
        config('theme.transitionProperties'),
        (propertyValue, propertyName) => {
          const out = {}

          _.forEach(
            config('theme.transitionDurations'),
            (durationValue, durationName) => {
              out[`.${e(`transition-${propertyName}`)}-${durationName}`] = {
                transition: `${propertyValue} ${durationValue} ease-in-out`,
              }
            }
          )

          return out
        }
      )

      addUtilities(utilities)
    },
    /**
     * Lighten & Darken utility
     */
    function ({ addUtilities, addComponents, e, prefix, config }) {
      const utilities = _.map(
        config('theme.colorVariations'),
        (variationValue, variationName) => {
          return {
            [`.${e(`lighten-${variationName}`)}`]: {
              filter: `brightness(${100 + variationValue}%)`,
            },
            [`.${e(`darken-${variationName}`)}`]: {
              filter: `brightness(${100 - variationValue}%)`,
            },
          }
        }
      )

      addUtilities(utilities, {
        variants: ['active', 'hover'],
      })
    },
  ],
}
