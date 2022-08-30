import { App } from "vue";
import { useConfirm, Confirm } from "./components/Dialog";
import "./components/style.less";

// (Confirm as PluginInstall).install = (app: App): void => {
//   app.component("vue-confirm", Confirm);
// };
const SimpleConfirmVue3 = (app: App): void => {
  app.component("vue-confirm", Confirm);
};

export { useConfirm, Confirm, SimpleConfirmVue3 as default };
