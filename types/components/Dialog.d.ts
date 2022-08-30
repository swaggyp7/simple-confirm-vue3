declare type DialogProperties = {
    title?: string;
    content: string;
    modelValue?: boolean;
    rounded?: boolean;
    cross?: boolean;
    cancelText?: string;
    confirmText?: string;
    customClass?: string;
};
export declare function useConfirm(props: DialogProperties): Promise<unknown>;
export declare function Confirm(props: DialogProperties, ctx: {
    emit: (name: string, ...props: any) => void;
}): JSX.Element;
export {};
