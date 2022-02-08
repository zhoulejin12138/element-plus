import { useSizeProp } from '@element-plus/hooks'
import { buildProps, definePropType } from '@element-plus/utils/props'
import { Loading } from '@element-plus/icons-vue'
import type { ExtractPropTypes, Component } from 'vue'
import type button from './button.vue'

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  '',
] as const
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const

export const buttonProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    default: '',
  },
  icon: {
    type: definePropType<string | Component>([String, Object]),
    default: '',
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: 'button',
  },
  loading: Boolean,
  loadingIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: () => Loading,
  },
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  autoInsertSpace: {
    type: Boolean,
    default: undefined,
  },
} as const)
export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits

export type ButtonType = ButtonProps['type']
export type ButtonNativeType = ButtonProps['nativeType']

export type ButtonInstance = InstanceType<typeof button>

export interface ButtonConfigContext {
  autoInsertSpace?: boolean
}
