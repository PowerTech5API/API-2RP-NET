import Sidebar from "../../../components/sidebar"
import Header from "../../../components/header/header";
import Card from "../../../components/cards/Cards"
import './admin.css'

import React from 'react';

function Admin() {
  return (
    <Sidebar>
      <Header nome="Definir valores horas"></Header>

      {/* linha 1 */}
      <div className="background d-flex flex-column aling-itens-center">

        <div>
          <span className="filtroLabel">
            <input type="text" username="username" className="mt-4 mb-4 ml-2" placeholder='Usuário' autoComplete="on"></input>
          </span>

          {/* card info hora extra */}
          <div className="d-flex flex-column aling-itens-center">

          </div>


        </div>

      </div>
    </Sidebar>
  )
}

export default Admin