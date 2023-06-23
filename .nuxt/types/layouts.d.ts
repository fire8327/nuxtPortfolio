import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/fire8/OneDrive/Рабочий стол/Projects/nuxtPortfolio/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}