import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/fire8/OneDrive/Рабочий стол/Projects/nuxtPortfolio/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}