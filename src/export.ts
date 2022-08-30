import { App } from "vue";
import { useConfirm, Confirm } from "./components/Dialog";
import "./components/style.less";

(Confirm as any).install = (app: App) => {
  app.component(Confirm.name, Confirm);
};

export { useConfirm, Confirm };
