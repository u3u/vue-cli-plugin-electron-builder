(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{153:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._m(1),s("p",[t._v("To see available options, check out "),s("a",{attrs:{href:"https://www.electron.build/configuration/configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electron Builder Configuration Options"),s("OutboundLink")],1)]),t._m(2),t._m(3),t._m(4),t._m(5),s("p",[t._v("Your regular config is used for bundling the renderer process (your app). To modify the webpack config for the electron main process only, use the "),s("code",[t._v("chainWebpackMainProcess")]),t._v(" function under vue-cli-plugin-electron-builder's plugin options in "),s("code",[t._v("vue.config.js")]),t._v(". Use "),s("code",[t._v("chainWebpackRendererProcess")]),t._v(" customize your app's webpack config for Electron builds only. To learn more about webpack chaining, see "),s("a",{attrs:{href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-chain"),s("OutboundLink")],1),t._v(". The function should take a config argument, modify it through webpack-chain, and then return it.")]),t._m(6),t._m(7),t._m(8),s("p",[t._v("If you don't want your files outputted into dist_electron, you can choose a custom folder in vue-cli-plugin-electron-builder's plugin options.")]),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"configuring-electron-builder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuring-electron-builder","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring Electron Builder")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("They can be placed under the "),n("code",[this._v("builderOptions")]),this._v(" key in vue-cli-plugin-electron-builder's plugin options in "),n("code",[this._v("vue.config.js")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pluginOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      builderOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// options placed here will be merged with default configuration and passed to electron-builder")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[this._v("TIP")]),n("p",[this._v("All CLI arguments passed to "),n("code",[this._v("build:electron")]),this._v(" will be forwarded to electron-builder.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"webpack-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack configuration")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("Note: Do NOT change the webpack output directory for the main process! See changing output directory below for more info. To change the entry point for the main process, use the "),n("code",[this._v("mainProcessFile")]),this._v(" key, DO NOT modify it in through chaining.")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  configureWebpack"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Configuration applied to all builds")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  pluginOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      chainWebpackMainProcess"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// Chain webpack config for electron main process only")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      chainWebpackRendererProcess"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// Chain webpack config for electron renderer process only")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// The following example will set IS_ELECTRON to true in your app")]),t._v("\n        rendererConfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("plugin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'define'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("tap")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          args"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("'IS_ELECTRON'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n          "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" args\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// Use this to change the entrypoint of your app's main process")]),t._v("\n      mainProcessFile"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'src/myBackgroundFile.js'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"changing-the-output-directory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-output-directory","aria-hidden":"true"}},[this._v("#")]),this._v(" Changing the output directory")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("Note: after changing this, you MUST update the main field of your "),n("code",[this._v("package.json")]),this._v(" to "),n("code",[this._v("[new dir]/bundled/background.js")]),this._v(". It is also recommended to add the new directory to your .gitignore file.")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pluginOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      outputDir"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'electron-builder-output-dir'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"typescript-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typescript-options","aria-hidden":"true"}},[this._v("#")]),this._v(" TypeScript Options")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Typescript support is automatic and requires no configuration, just add the "),n("code",[this._v("@vue/typescript")]),this._v(" cli plugin. There are a few options for configuring typescript if necessary:")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pluginOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// option: default // description")]),t._v("\n      disableMainProcessTypescript"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Manually disable typescript plugin for main process. Enable if you want to use regular js for the main process (src/background.js by default).")]),t._v("\n      mainProcessTypeChecking"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Manually enable type checking during webpck bundling for background file.")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),s("p",[t._v("If you are adding typescript after vue-cli-plugin-electron-builder, you may also want to set "),s("code",[t._v("mainWindow")]),t._v("'s type to "),s("code",[t._v("any")]),t._v(" and change "),s("code",[t._v("process.env.WEBPACK_DEV_SERVER_URL")]),t._v(" to "),s("code",[t._v("process.env.WEBPACK_DEV_SERVER_URL as string")]),t._v(" to fix type errors. If you add typescript first, this will be done automatically.")])])}],!1,null,null,null);n.default=e.exports}}]);