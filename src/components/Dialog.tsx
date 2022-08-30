import { createApp, ref, h, watchEffect } from "vue";

type DialogProperties = {
  title?: string;
  content: string;
  modelValue?: boolean;
  rounded?: boolean;
  cross?: boolean;
  cancelText?: string;
  confirmText?: string;
  customClass?: string;
};

export function useConfirm(props: DialogProperties) {
  return new Promise((resolve, reject) => {
    let root = document.getElementById("scv-root");
    if (!root) {
      root = document.createElement("div");
      root.setAttribute("id", "scv-root");
    }
    const createAppFactory = () =>
      createApp(
        h(Confirm as any, {
          ...props,
          modelValue: true,
          onCancel: () => {
            instance.unmount();
            document.body.removeChild(root!);
            reject("User canceled");
          },
          onConfirm: () => {
            instance.unmount();
            document.body.removeChild(root!);
            resolve("User confirmed");
          },
        })
      );
    const instance = createAppFactory();
    document.body.appendChild(root);
    instance.mount(root);
  });
}

export function Confirm(
  props: DialogProperties,
  ctx: { emit: (name: string, ...props: any) => void }
) {
  const value = ref(false);
  const isCompositionStyle = props.modelValue === undefined;
  watchEffect(() => {
    value.value = isCompositionStyle || props.modelValue!;
  });
  const changeModel = (value: boolean) => {
    !isCompositionStyle && ctx.emit("update:modelValue", value);
  };
  if (value.value) {
    return (
      <div class={["scv-overlay"]}>
        <div
          class={[
            "scv-dialog",
            props.rounded ? "scv-rounded" : "",
            props.customClass ?? "",
          ]}
        >
          {props.title ? (
            <div class={["scv-head"]}>
              <span class={["scv-title"]}>{props.title}</span>
              {props.cross ? (
                <span
                  class={["scv-close", "cursor-pointer"]}
                  onClick={() => {
                    ctx.emit("cancel");
                    changeModel(false);
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
                changeModel(false);
              }}
            >
              {props.cancelText ?? "Cancel"}
            </button>
            <button
              onClick={() => {
                ctx.emit("confirm");
                changeModel(false);
              }}
              class={["scv-confirm"]}
            >
              {props.confirmText ?? "Confirm"}
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div id="confirm-component-root"></div>;
  }
}
