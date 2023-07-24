/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import theme from '../../styles/theme.ts'
import * as classNames from 'classnames'
import { useState } from 'react'

const small = css`
  width: 36px;
  height: 20px;
  padding: 2px;
  & > .switch-circle-control {
    width: 16px;
    height: 16px;
  }
`

const medium = css`
  width: 44px;
  height: 24px;
  padding: 2px 3px;
  & > .switch-circle-control {
    width: 20px;
    height: 20px;
  }
`

const large = css`
  width: 52px;
  height: 32px;
  padding: 2px 4px;
  & > .switch-circle-control {
    width: 24px;
    height: 24px;
  }
`

const common = css`
  display: flex;
  align-items: center;
  border-radius: 100px;
  cursor: pointer;
  background-color: ${theme.color.gray['300']};
  transition: all 0.3s;

  & > .switch-circle-control {
    border-radius: 50%;
    background-color: white;
  }
  &.is-checked {
    background-color: ${theme.color.blue};
    justify-content: flex-end;
  }

  &.small {
    ${small}
  }
  &.medium {
    ${medium}
  }
  &.large {
    ${large}
  }
`
interface SwitchProps {
  isOn?: boolean
  size?: 'large' | 'medium' | 'small'
  onChange?: () => void
}
export default function Switch({ isOn = false, size = 'medium' }: SwitchProps) {
  const [checked, setChecked] = useState(isOn)
  const handleChange = () => {
    setChecked((prev) => !prev)
  }

  return (
    <div css={common} className={classNames({ 'is-checked': checked }, size)} onClick={handleChange}>
      <div className="switch-circle-control" />
    </div>
  )
}
