/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import theme from '../../styles/theme.ts'
import { CSSProperties } from 'react'

interface DividerProps {
  theme?: 'right' | 'dark'
  width?: CSSProperties['width']
}

const rightColor = theme.color.gray['200']
const darkColor = theme.color.gray['300']

const DividerColor = {
  right: rightColor,
  dark: darkColor,
}

export default function Divider({ theme = 'right', width = '100%' }: DividerProps) {
  const style = css`
    width: ${width};
    background-color: ${DividerColor[theme]};
    height: 1px;
  `

  return <div css={style} />
}
