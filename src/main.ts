import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ls from 'local-storage';
import _ from 'lodash';

import { 
  Button, 
  Select,
  Row,
  Col,
  Input,
  Form,
  FormItem,
  RadioButton,
  RadioGroup,
  Tree,
} from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Input.name, Input);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(RadioButton.name, RadioButton);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(Tree.name, Tree);

Vue.config.productionTip = false;

Vue.prototype._ = _;
Vue.prototype.$ls = ls;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
