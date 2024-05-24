'use client'
import { css } from '@emotion/react'

const color = 'white'

const Button = () => {
  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      Button Content
    </div>
  )
}

export default Button
