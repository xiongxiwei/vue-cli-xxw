<template>
  <div class="container">
    <vue-editor v-model="content" />
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor"
export default {
  name: "rickText",
  data() {
    return {
      content: "<h1>Some initial content</h1>"
    };
  },
  components: { 
    VueEditor 
  },
  created() {
  },
  methods: {
    
  }
};
</script>

<style scoped>

</style>
