<script setup lang="ts">
import { defineProps, defineEmits, ref, watchEffect } from "vue";
import { DialogProperties } from "../type";
// It will be error without define interface in Vue file
interface Props extends DialogProperties {}
const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue", "onCancel", "onConfirm"]);
const value = ref(false);
watchEffect(() => {
  value.value = props.modelValue;
});
const changeModel = (value: boolean) => {
  emit("update:modelValue", value);
};
const cancel = () => {
  emit("onCancel");
  changeModel(false);
};
const confirm = () => {
  emit("onConfirm");
  changeModel(false);
};
</script>

<template>
  <div class="scv-overlay" v-if="value">
    <div class="scv-dialog" :class="{ 'scv-rounded': props.rounded }">
      <div class="scv-head" v-if="props.title">
        <span class="scv-title">
          <slot name="title"> {{ props.title }} </slot>
        </span>
        <span class="scv-close" v-if="props.cross">
          <slot name="close-icon" @click="cancel"> x </slot>
        </span>
      </div>
      <div class="scv-content">
        {{ props.content }}
      </div>
      <div class="scv-btns">
        <button @click="cancel">{{ props.cancelText ?? "Cancel" }}</button>
        <button class="scv-confirm" @click="confirm">
          {{ props.confirmText ?? "Confirm" }}
        </button>
      </div>
    </div>
  </div>
</template>
