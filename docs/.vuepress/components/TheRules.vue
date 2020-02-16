<template>
<ol>
  <li :class="successStyle('television')">
    No television.
  </li>
  <li :class="successStyle('smartphones')">
    No smartphone functionality.
  </li>
  <li :class="successStyle('voice')">
    No voice interfaces without a direct analog equivalent. 
  </li>
  <li :class="successStyle('screens')">
    No  devices with screen interfaces.
  </li>
</ol>

</template>

<script>
  export default {
    props: {
      television: {
        type: Boolean,
        required: true,
        default: true,
      },
      smartphones: {
        type: Boolean,
        required: true,
        default: true,
      },
      screens: {
        type: Boolean,
        required: true,
        default: true,
      },
      voice: {
        type: Boolean,
        required: true,
        default: true,
      },
    },
    methods: {
      successStyle(prop) {
        console.log(this[prop])
        console.log(this[prop] === false)
        return this[prop] === false ? 'strike' : ''
      }
    }
  }
</script>

<style>
  .strike {
    text-decoration: line-through;
  }
</style>
