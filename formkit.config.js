// formkit.config.js
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import { ru } from '@formkit/i18n'
import genesis from '@formkit/themes/tailwindcss/genesis'
import { createAutoAnimatePlugin } from '@formkit/addons'

export default {
  icons: {
    ...genesisIcons,
  },
  locales: { ru },
  locale: 'ru',
  config: {
    classes: generateClasses(genesis),
  },
  plugins: [
    createAutoAnimatePlugin()
  ],  
}