<template>
  <div 
    :class="separatorClasses"
    :aria-orientation="orientation"
    :role="decorative ? 'presentation' : 'separator'"
  />
</template>

<script>
import { computed } from 'vue'
import { cn } from './cn.js'

export default {
  name: 'WewebSeparator',
  props: {
        // Individual props will be auto-generated based on the component type
        // This is a placeholder that will be manually refined per component
    },
  setup(props) {
    const separatorClasses = computed(() => cn(
      "shrink-0 bg-border",
      props.orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      props.customClasses
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