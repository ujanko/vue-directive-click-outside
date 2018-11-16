import Vue from 'vue';

export default Vue.directive('click-outside', {
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
