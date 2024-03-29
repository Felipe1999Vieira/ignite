import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/index";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewModalTransaction'

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal (){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal (){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}