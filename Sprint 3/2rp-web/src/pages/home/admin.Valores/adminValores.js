import Sidebar from "../../../components/sidebar"
import Header from "../../../components/header/header";
import Card from "../../../components/cards/Cards";
import './adminValores.css'

import React from 'react';

function adminValores() {
  return (
    <Sidebar>
      <Header nome="Definir valores horas"></Header>

      {/* linha 1 */}
      <div className="background d-flex flex-column aling-itens-center">

        <div>
          <span className="filtroLabel">
              <input placeholder="Usuário" className="mt-4 mb-4 ml-2 filtro font"></input>
          </span>
          {/* card info hora extra */}
        </div>

        <div className="d-flex aling-itens-center">
          <label className="lista offset-1">Código Verba</label>
          <label className="lista">Valor</label>
          <label className="lista">valor Night</label>
          <label className="lista">Feriado</label>
          <label className="lista">Feriado Night</label>
          <label className="lista">Fim de Semana</label>
          <label className="lista">FDS noturno</label>

        </div>
        <div className="d-flex aling-itens-center">
          <label className="espaco tela offset-1">1601</label>
          <label className="espaco tela">10</label>
          <label className="espaco tela">15,10</label>
          <label className="espaco tela">15,10</label>
          <label className="espaco tela">25</label>
          <label className="espaco tela">25</label>
          <label className="espaco tela">25</label>
        </div>
        <div className="d-flex aling-itens-center">
          <label className="espaco tela offset-1">1602</label>
          <label className="espaco tela">7</label>
          <label className="espaco tela">9,30</label>
          <label className="espaco tela">7,50</label>
          <label className="espaco tela">12</label>
          <label className="espaco tela">15</label>
          <label className="espaco tela">13</label>
        </div>
        <div className="d-flex aling-itens-center">
          <label className="espaco tela offset-1">1809</label>
          <label className="espaco tela">15</label>
          <label className="espaco tela">8,23</label>
          <label className="espaco tela">4,58</label>
          <label className="espaco tela">17</label>
          <label className="espaco tela">26</label>
          <label className="espaco tela">9</label>
        </div>
        <div className="d-flex aling-itens-center">
          <label className="espaco tela offset-1">3000</label>
          <label className="espaco tela">36</label>
          <label className="espaco tela">21,10</label>
          <label className="espaco tela">2,39</label>
          <label className="espaco tela">19</label>
          <label className="espaco tela">18</label>
          <label className="espaco tela">17</label>
        </div>
        <div className="d-flex aling-itens-center">
          <label className="espaco2 tela offset-1">3001</label>
          <label className="espaco2 tela">11</label>
          <label className="espaco2 tela">16,10</label>
          <label className="espaco2 tela">11,10</label>
          <label className="espaco2 tela">22</label>
          <label className="espaco2 tela">27</label>
          <label className="espaco2 tela">25</label>
        </div>

      </div>
    </Sidebar>
  )
}

export default adminValores