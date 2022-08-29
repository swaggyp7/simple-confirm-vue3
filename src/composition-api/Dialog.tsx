import {
  getCurrentInstance,
  createBlock,
  VNode,
  createApp,
  App,
  ref,
  inject,
  h,
} from "vue";
import { DialogProperties } from "../type";
import DialogVue from "../components/Dialog.vue";

let instanceCache: App;
export function useDialog(props: Omit<DialogProperties, "modelValue">) {
  return new Promise((resolve, reject) => {
    let root = document.getElementById("scv-root");
    if (!root) {
      root = document.createElement("div");
      root.setAttribute("id", "scv-root");
    }
    if (!instanceCache) {
      instanceCache = createApp(
        h(Dialog as any, {
          ...props,
          modelValue: true,
          onCancel: () => {
            instanceCache.unmount();
            document.body.removeChild(root!);
            reject();
          },
          onConfirm: () => {
            instanceCache.unmount();
            document.body.removeChild(root!);
            resolve("");
          },
        })
      );
    }
    document.body.appendChild(root);
    instanceCache.mount(root);
  });
}

function Dialog(
  props: Omit<DialogProperties, "modelValue">,
  ctx: { emit: (name: string, ...props: any) => void }
) {
  return (
    <div class={["scv-overlay"]}>
      <div class={["scv-dialog", props.rounded ? "scv-rounded" : ""]}>
        {props.title ? (
          <div class={["scv-head"]}>
            <span class={["scv-title"]}>{props.title}</span>
            {props.cross ? (
              <span
                class={["scv-close"]}
                onClick={() => {
                  ctx.emit("cancel");
                }}
              >
                x
              </span>
            ) : null}
          </div>
        ) : null}
        <div class={["scv-content"]}>{props.content}</div>
        <div class={["scv-btns"]}>
          <button
            onClick={() => {
              ctx.emit("cancel");
            }}
          >
            {props.cancelText ?? "Cancel"}
          </button>
          <button
            onClick={() => {
              ctx.emit("confirm");
            }}
            class={["scv-confirm"]}
          >
            {props.confirmText ?? "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}
