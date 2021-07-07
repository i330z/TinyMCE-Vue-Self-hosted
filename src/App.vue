<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <editor
      api-key="no-api-key"
      :init="{
        height: 500,
        menubar: false,
        plugins: [
          'paste', 'link' ,'table'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | table |\
           bullist numlist outdent indent | removeformat | ',
      }"
    />


    <button class="btn">Post</button>
  </div>
</template>

<script>
import "tinymce/tinymce";
import "tinymce/themes/silver";
import "tinymce/icons/default";
import "tinymce/skins/ui/oxide/skin.css";

import Editor from "@tinymce/tinymce-vue";
// import Editor from "@tinymce/tinymce-vue";

export default {
  name: "app",
  components: {
    editor: Editor,
  },
};
</script>

<style scoped>

.btn{
  background: rgb(86, 86, 255);
  color: white;
}
</style>