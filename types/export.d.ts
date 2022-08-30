import { App } from "vue";
import { useConfirm, Confirm } from "./components/Dialog";
import "./components/style.less";
declare const SimpleConfirmVue3: (app: App) => void;
export { useConfirm, Confirm, SimpleConfirmVue3 as default };
