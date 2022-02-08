<template>
  <transition :name="ns.b('fade')">
    <div
      v-show="visible"
      :class="[ns.b(), ns.m(type), ns.is('center', center), ns.is(effect)]"
      role="alert"
    >
      <el-icon
        v-if="showIcon && iconComponent"
        :class="[ns.e('icon'), ns.is('big', isBigIcon)]"
      >
        <component :is="iconComponent" />
      </el-icon>
      <div :class="ns.e('content')">
        <span
          v-if="title || $slots.title"
          :class="[ns.e('title'), ns.is('bold', isBoldTitle)]"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="$slots.default || description" :class="ns.e('description')">
          <slot>
            {{ description }}
          </slot>
        </p>
        <template v-if="closable">
          <div
            v-if="closeText"
            :class="[ns.e('closebtn'), ns.is('customed')]"
            @click="close"
          >
            {{ closeText }}
          </div>
          <el-icon v-else :class="ns.e('closebtn')" @click="close">
            <Close />
          </el-icon>
        </template>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue'
import { ElIcon } from '@element-plus/components/icon'
import { TypeComponentsMap } from '@element-plus/utils/icon'
import { useNamespace } from '@element-plus/hooks'
import { Close } from '@element-plus/icons-vue'
import { alertProps, alertEmits } from './alert'

defineOptions({
  name: 'ElAlert',
})

const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)
const slots = useSlots()
const ns = useNamespace('alert')

const visible = ref(true) // TODO: use v-model

const iconComponent = computed(
  () => TypeComponentsMap[props.type] || TypeComponentsMap['info']
)
const isBigIcon = computed(() => !!(props.description || slots.default))
const isBoldTitle = computed(() => !!(props.description || slots.default))

const close = (evt: MouseEvent) => {
  visible.value = false
  emit('close', evt)
}
</script>
