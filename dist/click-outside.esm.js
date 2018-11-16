import Vue from 'vue';

var ClickOutside = Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el._clickOutsideHandler = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        // this will execute the bound directive expression on the calling component:
        // `vnode.context` represents the component that called this directive.
        // `binding.expression` is the expression defined in the v-click-outside attribute.
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el._clickOutsideHandler);
  },

  unbind: function (el) {
    document.body.removeEventListener('click', el._clickOutsideHandler);
  }
});

// Import vue component

// Declare install function executed by Vue.use()
function install(Vue$$1) {
  if (install.installed) { return; }
  install.installed = true;
  Vue$$1.directive('click-outside', ClickOutside);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default ClickOutside;
export { install };
