import centriole from './centriole.vue'
import panel from './panel.vue'
const Centriole = {
    install(Vue, options) {
        Vue.component(centriole.name, centriole)
        Vue.component(panel.name, panel)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Centriole = Centriole
    Vue.use(Centriole)
}
export default Centriole;