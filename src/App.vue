<script setup lang="ts">
import { ref } from "vue";
import DialogVue from "./components/Dialog.vue";
import { useDialog } from "./composition-api/Dialog";
const showDialog = ref(false);
useDialog({
  title: "Caution!",
  content:
    "A ham sandwich walks into a bar and orders a beer, bartender says “sorry, we don’t serve food here.”",
})
  .then(() => {
    debugger;
  })
  .catch(() => {
    debugger;
  });
</script>

<template>
  <div>
    <DialogVue
      title="Caution!"
      content="A ham sandwich walks into a bar and orders a beer, bartender says
        “sorry, we don’t serve food here.”"
      v-model="showDialog"
      rounded
    ></DialogVue>
    <button @click="showDialog = true">Dialog Up</button>
  </div>
</template>

<style scoped></style>
