import Vue from 'vue'
import Storage from 'vue-ls'
import element from 'element-ui'
import 'babel-polyfill'
import './request'
import 'element-ui/lib/theme-chalk/index.css'
import '@/theme/element.scss'
import T from '@/components/T'

const { storageOption } = require('@config')

Vue.config.productionTip = false

Vue.prototype.$msg = element.Message

Vue.use(element)

Vue.use(T)

Vue.use(Storage, storageOption)
