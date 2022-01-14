import { addDecorator, addParameters } from '@storybook/vue'
import '@/plugins/storybook'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import '@/index.css'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

addDecorator(() => ({
  template: '<v-app><v-main fluid><story/></v-main></v-app>',
}))

addParameters({
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
})

addParameters({
  options: {
    storySort: {
      order: [
        'Design',
        'Pages',
        'Templates',
        'Organisms',
        'Molecules',
        'Atoms',
        'Concepts',
      ],
    },
  },
})
