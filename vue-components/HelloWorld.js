import { n as normalizeComponent, c as createInjector } from './browser-c94fd32b.js';

//
//
//
//
//
//

var script = {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "hello" }, [
    _c("h1", [_vm._v(_vm._s(_vm.$attrs.payload))]),
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-7b934fb3_0", { source: "\n.hello[data-v-7b934fb3] {\n  color: red;\n}\n", map: {"version":3,"sources":["/Users/wxkmac/Documents/_Haier/测试项目/remote-component-master/slaves/components/HelloWorld.vue"],"names":[],"mappings":";AAgBA;EACA,UAAA;AACA","file":"HelloWorld.vue","sourcesContent":["<template>\n  <div class=\"hello\">\n    <h1>{{ $attrs.payload }}</h1>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'HelloWorld',\n  props: {\n    msg: String\n  }\n}\n</script>\n\n<style scoped>\n.hello {\n  color: red;\n}\n</style>"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-7b934fb3";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

export { __vue_component__ as default };
