import { buttonTypes } from '@element-plus/components/button'
import { QuestionFilled } from '@element-plus/icons-vue'
import { buildProps, definePropType } from '@element-plus/utils/props'
import { useTooltipContentProps } from '@element-plus/components/tooltip'

import type { Component, ExtractPropTypes } from 'vue'

export const popconfirmProps = {
  ...buildProps({
    title: {
      type: String,
    },
    confirmButtonText: {
      type: String,
    },
    cancelButtonText: {
      type: String,
    },
    confirmButtonType: {
      type: String,
      values: buttonTypes,
      default: 'primary',
    },
    cancelButtonType: {
      type: String,
      values: buttonTypes,
      default: 'text',
    },
    icon: {
      type: definePropType<string | Component>([String, Object]),
      default: QuestionFilled as any,
    },
    iconColor: {
      type: String,
      default: '#f90',
    },
    hideIcon: {
      type: Boolean,
      default: false,
    },
    hideAfter: {
      type: Number,
      default: 200,
    },
    onConfirm: {
      type: definePropType<(e: Event) => Promise<boolean> | boolean>(Function),
    },
    onCancel: {
      type: definePropType<(e: Event) => Promise<boolean> | boolean>(Function),
    },
  } as const),
  teleported: useTooltipContentProps.teleported,
}
export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>
