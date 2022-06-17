import React, { useState } from "react"
import Dashboard from "./components/Dashboards"
import Header from "./components/Header"
import { GlobalStyle } from "./styles/global"
import Modal from "react-modal"
import NewtransactionModal from "./components/NewtransactionModal"
import {
  TransactionsContext,
  TransactionsProvider,
} from "./TransactionsContext"

Modal.setAppElement("#root")

function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewtransactionModal() {
    setisNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setisNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewtransactionModal} />

      <Dashboard />

      <NewtransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  )
}

export default App
