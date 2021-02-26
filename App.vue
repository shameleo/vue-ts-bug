<template>
  <div>whatever</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  data: () => ({
    arr: [1, 2, 3].map((num) => ({ num: ref(num) })),
  }),
  mounted() {
    this.arr.forEach((el) => {
      console.log(el.num);
      console.log(el.num.value);
    });
  },
});
</script>

<style>
</style>