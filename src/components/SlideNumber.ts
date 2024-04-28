import { Transition, defineComponent, h, ref, watch } from 'vue'

export const SlideNumber = defineComponent(
  (props) => {
    const numberList = ref<string[]>([])

    const isLenChange = ref(false)
    const isIncrease = ref(false)
    const isNegative = ref(false)

    watch(() => props.number, (newVal, oldVal) => {
      const newValStr = String(newVal)
      const oldValStr = oldVal ? String(oldVal) : ''
      isLenChange.value = oldVal ? newValStr.length !== oldValStr.length : false
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
          key: isLenChange.value ? Date.now() : 'len',
          class: 'animations-number-container',
        }, numberListVal.map((n, idx) =>
          h(Transition, {
            name: isIncrease.value ? 'animations-number-item-down' : 'animations-number-item-up',
            mode: 'out-in',
          }, {
            default: () => h('span', {
              class: 'animations-number-item',
              key: Number.isNaN(Number(n)) ? n : idx - 1 < 0 ? n : numberListVal[idx - 1] + n,
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
