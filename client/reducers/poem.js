const { SAVED_POEM, SAVING_POEM, CREATED_POEM }= require('../actions/actions')

const poemTemplate = {
  title: '',
  author: '',
  text: '',
  slug: null,
  theme: {
    mood: 'serene',
    text: 'garamond'
  }
}

const poem = (state, action) => {
  switch (action.type) {
    case SAVING_POEM:
      return Object.assign(state, action.patch)
    case CREATED_POEM:
      return Object.assign({}, state, {slug: action.slug})
  }

  return Object.assign(poemTemplate, state)
}

module.exports = poem
