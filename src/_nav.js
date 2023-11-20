import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAccountLogout,
  cilChartLine,
  cilChartPie,
  cilDollar,
  cilGraph,
  cilHome,
  cilLocationPin,
  cilNoteAdd,
  cilNotes,
  cilPencil,
  cilPeople,
  cilPuzzle,
  cilScreenDesktop,
  cilSettings,
  cilSpeedometer,
  cilStar,
  cilTruck,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Inicio',
    to: '/',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Clientes',
    to: '/',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Mapa de clientes',
    to: '/',
    icon: <CIcon icon={cilLocationPin} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Distribuciones',
    to: '/',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Ventas',
    to: '/',
    icon: <CIcon icon={cilScreenDesktop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pedidos',
    to: '/',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: '1',
    },
  },
  {
    component: CNavItem,
    name: 'Préstamos',
    to: '/',
    icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Finanzas',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Item finanzas',
        to: '/icons/coreui-icons',
      },
      {
        component: CNavItem,
        name: 'Item finanzas 2',
        to: '/icons/flags',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reportes',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Item reportes 1',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Item reportes 2',
        to: '/',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Configuración',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Item config 1',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Item config 2',
        to: '/',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Salir',
    to: '/',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  },
]

export default _nav
