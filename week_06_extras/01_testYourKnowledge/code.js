

const buttons = document.querySelectorAll('.show_hide')

buttons.forEach(button => {
  button.addEventListener('click', e => {
    console.log(e.target.parentNode.dataset.topic)
    const clickedTopic = e.target.parentNode.dataset.topic
    const possibilities = document.querySelectorAll(`[data-topic="${clickedTopic}"]`)
    console.log(possibilities)
    possibilities.forEach(poss => {
      console.log(poss)
      poss.classList.toggle('hidden')
    })
  })
})

