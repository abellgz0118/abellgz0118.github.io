export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Abel's Web\",\"description\":\"My tech blog\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/JAVA.png\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/css/style.css\"}],[\"script\",{},\"var _hmt = _hmt || [];\\n            (function () {\\n            var hm = document.createElement(\\\"script\\\");\\n            hm.src = \\\"https://hm.baidu.com/hm.js?83bdeee64d1e0dd56ad9866e83f63257\\\";\\n            var s = document.getElementsByTagName(\\\"script\\\")[0];\\n            s.parentNode.insertBefore(hm, s);\\n            })();\"]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
