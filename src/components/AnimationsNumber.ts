import { Transition, defineComponent, h } from 'vue'

export const AnimationsNumber = defineComponent(
  (props) => {
    return () => {
      return h(
        Transition,
        {
          name: 'animations-number',
          mode: 'out-in',
        },
        {
          default: () => h('span', {
            class: 'animations-number-container',
            key: props.number,
          }, h('span', props.number)),
        },
      )
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
