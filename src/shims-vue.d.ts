declare module '*.vue' {
  import Vue from 'vue';
  module "vue/types/vue" {
    interface Vue {
      _: any;
      $ls: any;
    }
  }
  export default Vue;
}
