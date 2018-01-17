import Vue from 'vue'
import store from 'store'
import { Message } from 'element-ui'

const upLS = require('utils/upLS')('reports')

const success = (results) => {
  store.dispatch('setTaskReports', results)
}

const failed = () => {
  Message.warning({ message: '获取汇报列表失败' })
}

export default (id) => {
  upLS(true)
  Vue.$http.get(`/tasks/${id}/reports/`)
    .then(({ data: { results } }) => {
      success(results)
    })
    .catch(() => {
      failed()
    })
    .finally(upLS)
}
