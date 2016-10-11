const CREATE_POEM = 'CREATE_POEM'
const COPY_POEM_LINK = 'COPY_POEM_LINK'

function createPoem () {
  window.fetch('/reserveUrl').then(function(response) {
  return response.text();
}).then(console.log)
  // window.fetch('/reserveUrl').then(
  //   sauce => console.log(sauce),
  //   error => console.log(error)
  // ).catch(console.log)
  return {
    type: CREATE_POEM
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
  // Actionnames
  CREATE_POEM,
  COPY_POEM_LINK
}
