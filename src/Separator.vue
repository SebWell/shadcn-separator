<template>
  <div 
    :class="separatorClasses"
    :aria-orientation="content.orientation"
    :role="content.decorative ? 'presentation' : 'separator'"
  />
</template>

<script>
import { computed } from 'vue'
import { cn } from './cn.js'

export default {
  name: 'WewebSeparator',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        orientation: 'horizontal',
        decorative: true,
        customClasses: ''
      })
    }
  },
  setup(props) {
    const separatorClasses = computed(() => cn(
      "shrink-0 bg-border",
      props.content.orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      props.content.customClasses
    ))

    return {
      separatorClasses
    }
  }
}
</script>

<style>
/* Import global shadcn/ui styles */
@import './globals.css';
</style> 