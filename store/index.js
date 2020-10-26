import {
  SET_MESSAGE,
  SET_MESSAGE_TIMEOUT,
  SET_SHOW_MESSAGE,
} from '../assets/mutations'

export const state = () => ({
  messageBox: {
    show: false,
    isError: false,
    lastMessage: '',
    timeout: null,
  },

  sections: {
    row1: [
      {
        title: 'À quoi sert la sexologie',
        image: '/images/flowers_1.jpg',
        bgColor: 'c-violet-1',
        fgColor: 'gray-100',
        id: 'a-quoi-sert-la-sexologie',
      },
      {
        title: 'Catherine Charmillot',
        image: '/images/body_1_low.jpg',
        bgColor: 'c-red-1',
        alternateBgColor: 'c-red-3',
        fgColor: 'gray-100',
        id: 'catherine-charmillot',
      },
      {
        title: 'Motifs de consultation',
        image: '/images/flowers_2.jpg',
        bgColor: 'c-yellow-1',
        alternateBgColor: 'c-yellow-3',
        fgColor: 'gray-900',
        id: 'motifs-de-consultation',
      },
    ],
    row2: [
      {
        title: 'Synthèse de l’approche',
        image: '/images/flowers_3.jpg',
        bgColor: 'c-violet-2',
        fgColor: 'gray-100',
        id: 'synthese-de-l-approche',
      },
      {
        title: 'Actualités',
        image: '/images/flowers_4.jpg',
        bgColor: 'c-red-2',
        alternateBgColor: 'gray-100',
        fgColor: 'gray-100',
        alternateFgColor: 'gray-900',
        id: 'actualites',
      },
      {
        title: 'Prendre contact',
        image: '/images/flowers_5.jpg',
        bgColor: 'c-yellow-2',
        fgColor: 'gray-900',
        id: 'prendre-contact',
      },
    ],
  },

  actualites: [
    {
      title: 'Lancement du site web',
      date: '6 octobre 2020',
      image: '/images/actualites/lancement-du-site-web.jpg',
      lightImage: false,
      id: 'actualite-1',
    },
    {
      title: 'La citation sous la fleur',
      date: '24 octobre 2020',
      image: '/images/actualites/citation-sous-la-fleur.jpg',
      lightImage: false,
      id: 'actualite-2',
    },
    {
      title:
        'Vous souhaitez organiser une conférence publique, un débat ou une information sur les thèmes de la sexualité humaine ou de la santé sexuelle ?',
      date: '24 octobre 2020',
      image: '/images/actualites/citation-sous-la-fleur.jpg',
      lightImage: false,
      id: 'actualite-3',
    },
  ],
})

export const mutations = {
  [SET_MESSAGE](state, { message, isError }) {
    state.messageBox.lastMessage = message
    state.messageBox.isError = isError
  },
  [SET_SHOW_MESSAGE](state, { show }) {
    state.messageBox.show = show
  },
  [SET_MESSAGE_TIMEOUT](state, { timeout }) {
    state.messageBox.timeout = timeout
  },
}

export const actions = {
  showMessage({ commit, dispatch }, { message, isError, time }) {
    commit(SET_MESSAGE, { message, isError })

    dispatch('hideMessage')

    // let the CSS update so that the animation for the message box may trigger again
    requestAnimationFrame(() => {
      commit(SET_SHOW_MESSAGE, { show: true })

      const timeout = setTimeout(() => {
        commit(SET_SHOW_MESSAGE, { show: false })
      }, time || 10000)

      commit(SET_MESSAGE_TIMEOUT, { timeout })
    })
  },
  hideMessage({ commit, state }) {
    clearTimeout(state.messageBox.timeout)

    commit(SET_SHOW_MESSAGE, { show: false })
  },
}

export const getters = {
  sections: (state) => state.sections,
  actualites: (state) => state.actualites,
}
