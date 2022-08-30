# Vue3 Simple Confirm 
Simple confirm dialog for Vue 3, for people who want to use confirm dialog without any UI framework to create some simple web pages

## ![demo](./demo.gif)

## Features

- Component-style supported
- Composition-style supported
- Typescript supported
- Promise based API.

## Install

```bash
npm i simple-confirm-vue3
```

or

```bash
yarn add simple-confirm-vue3
```

import css file in main.ts

```typescript
import "simple-confirm-vue3/lib/style.css";
```

## Basic Usage

### Components style

#### Import global (component name always be "vue-confirm" while you import in global)

```typescript
import { createApp } from "vue";
import "simple-confirm-vue3/lib/style.css";
import SimpleConfirm from "simple-confirm-vue3";

createApp(App).use(SimpleConfirm).mount("#app");
```

##### Using

```vue
<script setup>
import { ref } from 'vue'
const showDialog = ref(false)
</script>

<template>
	<vue-confirm
      title="Component Style"
      content="A ham sandwich walks into a bar and orders a beer, bartender says
          “sorry, we don’t serve food here.”"
      v-model="showDialog"
      :rounded="true"
      confirmText="Okay"
      cancelText="Nope"
    >
	</vue-confirm>
</template>
```

#### Import in single component

```vue
<script setup>
	import { Confirm as myConfirm } from "simple-confirm-vue3";
	import { ref } from 'vue'
  
	const showDialog = ref(false)
</script>

<template>
	<my-confirm
      title="Component Style"
      content="A ham sandwich walks into a bar and orders a beer, bartender says
          “sorry, we don’t serve food here.”"
      v-model="showDialog"
      :rounded="true"
      confirmText="Okay"
      cancelText="Nope"
    ></my-confirm>
</template>
```



### Composition Style

```typescript
import { useConfirm } from "simple-confirm-vue3";

useConfirm({/* options */})
  .then(() => {
  // do something when user confirmed
})
	.catch(() => {
  // do something when user canceled
})
```



## Properties

|    Name     |   Type   |            Description             |
| :---------: | :------: | :--------------------------------: |
|    title    | string?  |                 -                  |
|   content   |  string  |                 -                  |
| modelValue  | boolean  |       for component v-model        |
|   rounded   | boolean? |         is border rounded          |
|    cross    | boolean? | is show close button on top-right  |
| cancelText  | string?  |         cancel button text         |
| confirmText | string?  |        confirm button text         |
| customClass | string?  | ***custom class can't be scoped*** |

