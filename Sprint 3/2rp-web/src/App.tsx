import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/home/dashboard'
import Sobreaviso from './pages/home/sobreaviso/sobreaviso'
import HoraExtra from './pages/home/hora-extra/hora-extra'
import Gestor from './pages/home/gestor/aprovar-hora-extra/gestor'
import GestorSobreaviso from './pages/home/gestor/aprovar-sobreaviso/gestor-sobreaviso'
import GestorHistorico from './pages/home/gestor/historico/gestor-historico'
import ListagemSquad from './pages/home/admin/listagemSquad/listagemSquad'
import { Login } from './pages/login/login';
import AdminValores from './pages/home/admin.Valores/adminValores';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/horaextra' element={<HoraExtra />} />
      <Route path='/sobreaviso' element={<Sobreaviso />} />
      <Route path='/gestor' element={<Gestor />} />
      <Route path='/gestor-sobreaviso' element={<GestorSobreaviso />} />
      <Route path='/gestor-historico' element={<GestorHistorico />} />
      <Route path='/listagem-squad' element={<ListagemSquad />} />
      <Route path='*' element={<Login />} />
      <Route path='/adminValores' element={<AdminValores/>} />
    </Routes>

  );
}

export default App;
