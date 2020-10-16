<template>
  <mavon-editor
    :value="value"
    :toolbarsFlag="toolbarsFlag"
    :subfield="subfield"
    :boxShadow="boxShadow"
    :editable="editable"
    :defaultOpen="defaultOpen"
    :codeStyle="codeStyle"
  ></mavon-editor>
</template>
 
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
  name: "mavonEditor",
  components: {
    mavonEditor,
  },
  props: {
    value: {
      type: String,
    },
    toolbarsFlag: {
      type: Boolean,
    },
    subfield: {
      type: Boolean,
    },
    boxShadow: {
      type: Boolean,
    },
    editable: {
      type: Boolean,
    },
    defaultOpen: {
      type: String,
    },
    codeStyle: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>