import { EVENTS } from '../../subscribers/players'
import template from './players.template.html'
import { htmlToElement } from '../../utils/dom'

export default (publish, state) => {
  const playerListContainer = document.querySelector('div[role="player-list"]')

  playerListContainer.innerHTML = ''

  const playerList = htmlToElement(template)
  const input = playerList.querySelector('input')

  playerList.querySelector('button').addEventListener('click', () => {
    publish(EVENTS.ADD, input.value)
  })

  const ul = playerList.querySelector('ul')

  state.players.list
  .forEach((player, index) => {
    ul.appendChild(htmlToElement(`<li>${index} - ${player.name}<li>`))
  })

  playerListContainer.appendChild(playerList)
}
