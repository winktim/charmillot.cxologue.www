import {
  SET_MESSAGE,
  SET_MESSAGE_TIMEOUT,
  SET_SHOW_MESSAGE,
} from '../assets/mutations'

export const state = () => ({
  isIE: !!document.documentMode,

  messageBox: {
    show: false,
    isError: false,
    lastMessage: '',
    timeout: null,
  },
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

export const getters = {}
