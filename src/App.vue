<template>
  <div>
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'
export default {
  components: {
    ToolBar,
  }
};
</script>

<style lang="scss" scoped>

</style>