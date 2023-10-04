import React from 'react'
import { createPortal } from 'react-dom'
import { useTheme } from 'styled-components'

import { DrawerWrapper } from './styles'
import { SubTitle } from '../../atoms/sub-title'
import { IconButton } from '../../atoms/icon-button'
import closeIMG from '../../../assets/icons/close.png'

interface DrawerProps {
  title: string
  onClose: () => void
  isOpen: boolean
  children?: React.ReactNode
}

export function Drawer({
  title,
  onClose,
  isOpen,
  children,
}: DrawerProps): React.JSX.Element {
  const { color } = useTheme()

  if (!isOpen) {
    return <></>
  }

  return createPortal(
    <DrawerWrapper>
      <div className="fade" onClick={onClose} />
      <div className="content">
        <div className="content-header">
          <SubTitle>{title}</SubTitle>
          <IconButton
            image={closeIMG}
            backgroundcolor={color.gray200}
            onClick={onClose}
          />
        </div>
        <div className="content-body">{children}</div>
      </div>
    </DrawerWrapper>,
    document.body,
  )
}
