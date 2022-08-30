<script setup lang="ts">
import { ref } from "vue";
import { useConfirm, Confirm } from "simple-confirm-vue3";
const showDialog = ref(false);
const onClick = () => {
  showDialog.value = true;
};
const openFunctional = () => {
  useConfirm({
    title: "Composition Style",
    content:
      "A ham sandwich walks into a bar and orders a beer, bartender says “sorry, we don’t serve food here.”",
  })
    .then(() => {
      alert("User confirmed");
    })
    .catch(() => {
      alert("User canceled");
    });
};
const openRounded = () => {
  useConfirm({
    title: "Rounded",
    content:
      "A ham sandwich walks into a bar and orders a beer, bartender says “sorry, we don’t serve food here.”",
    rounded: true,
  });
};
const openWithCross = () => {
  useConfirm({
    title: "Close button on the right",
    content:
      "A ham sandwich walks into a bar and orders a beer, bartender says “sorry, we don’t serve food here.”",
    cross: true,
  });
};
const openCustomDialog = () => {
  useConfirm({
    title: "Custom Style",
    content:
      "A ham sandwich walks into a bar and orders a beer, bartender says “sorry, we don’t serve food here.”",
    // custom class can't be scoped
    customClass: "custom-dialog",
  });
};
</script>

<template>
  <div class="main">
    <confirm
      title="Component Style"
      content="A ham sandwich walks into a bar and orders a beer, bartender says
          “sorry, we don’t serve food here.”"
      v-model="showDialog"
      :rounded="true"
      confirmText="Okay"
      cancelText="Nope"
    ></confirm>
    <button @click="onClick">Component-style</button>
    <br />
    <button @click="openFunctional">Composition-style</button>
    <br />
    <button @click="openRounded">Rounded border</button>
    <br />
    <button @click="openWithCross">With close button</button>
    <br />
    <button @click="openCustomDialog">With custom style</button>
  </div>
</template>

<style>
.main button {
  margin-top: 10px;
}
.custom-dialog {
  background: rgb(67, 199, 255) !important;
  color: rgba(255, 255, 255, 0.838) !important;
}
.custom-dialog .scv-confirm {
  background: #000 !important;
}
</style>
