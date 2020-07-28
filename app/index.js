import { type, type as loop } from '@camwiegert/typical'
import $ from 'jquery'

import store from './store.json'
type(target, '', 1000, store.greet, 1000)
$(function() {
  let timeout = setTimeout(() => {
    $('#init').css('opacity', '0')
    $('#desktop').css({
      'opacity': '1',
      'backgroundPosition': 'center'
    })
    clearTimeout(timeout)
    timeout = null
  }, 2000)
  $('body').one('click', () => {
    document.body.requestFullscreen()
  })
})