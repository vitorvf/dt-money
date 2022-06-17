import React, { useState } from "react"
import Logoimg from "../../assets/logo.svg"
import { Container, Content } from "./styles"

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={Logoimg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}

export default Header
