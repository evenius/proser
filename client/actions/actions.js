let { route } = require('preact-router')

const SAVING_POEM = 'SAVING_POEM'
const SAVED_POEM = 'SAVED_POEM'
const CREATED_POEM = 'CREATED_POEM'

const COPY_POEM_LINK = 'COPY_POEM_LINK'

function createPoem () {
  return (dispatch) => {
    window.fetch('/reserveUrl').then(function (response) {
      return response.json()
    }).then((json) => {
      dispatch({type: CREATED_POEM, slug: json.slug})
      route(json.slug)
    })
  }
}

function patchPoem (slug, patch) {
  return (dispatch) => {
    dispatch({type: SAVING_POEM, patch})
    window.fetch('/' + slug, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(patch)
    }).then(function (response) {
      return response.text()
    }).then((text) => {
      dispatch({type: SAVED_POEM})
    })
  }
}

function copyPoemLink () {
  return {
    type: COPY_POEM_LINK
  }
}

module.exports = {
  // Actions!
  createPoem,
  copyPoemLink,
  patchPoem,
  // Actionnames
  SAVED_POEM,
  SAVING_POEM,
  CREATED_POEM,
  COPY_POEM_LINK
}
