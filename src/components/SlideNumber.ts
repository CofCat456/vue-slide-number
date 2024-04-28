import { Transition, defineComponent, h, ref, watch } from 'vue'

import { checkNumber } from '../utils'

export const SlideNumber = defineComponent(
  (props) => {
    let id = Date.now()

    const numberList = ref<string[]>([])

    const isIncrease = ref(false)
    const isNegative = ref(false)

    watch(() => props.number, (newVal, oldVal) => {
      if (checkNumber(newVal))
        return console.error('SlideNumber: number prop must be a number')

      const newValStr = String(newVal)
      const oldValStr = oldVal ? String(oldVal) : ''
      id = oldVal ? newValStr.length !== oldValStr.length ? Date.now() : id : Date.now()

      isIncrease.value = oldVal ? newVal > oldVal : false
      isNegative.value = newVal < 0
      const newValList = newValStr.split('')
      numberList.value = newValList
    }, {
      immediate: true,
    })

    return () => {
      const numberListVal = numberList.value
      return h(Transition, {
        name: isIncrease.value ? 'animations-number-container-down' : 'animations-number-container-up',
        mode: 'out-in',
      }, {
        default: () => h('span', {
          key: id,
          class: 'animations-number-container',
        }, numberListVal.map(n =>
          h(Transition, {
            name: isIncrease.value ? 'animations-number-item-down' : 'animations-number-item-up',
            mode: 'out-in',
          }, {
            default: () => h('span', {
              class: 'animations-number-item',
              key: n,
            }, n),
          }),
        )),
      })
    }
  },
  {
    props: {
      number: {
        type: Number,
        required: true,
      },
    },
  },
)
