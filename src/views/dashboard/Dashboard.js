import React from 'react'

import {
  CAvatar,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CCol,
  CFormInput,
  CFormSelect,
  CHeaderDivider,
  CInputGroup,
  CInputGroupText,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilHome,
  cilBell,
  cilCreditCard,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Daniela ayala',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Rubén González',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Mariana reyes',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>
      {/* <WidgetsDropdown /> */}
      <div className="row">
        <CCard className="customCard" style={{ width: '14rem' }}>
          <CCardBody>
            <CCardTitle>Clientes nuevos</CCardTitle>
            <CCardSubtitle className="mb-2 statsText">18</CCardSubtitle>
            <CCardText>
              <CBadge color="success">+8,2%</CBadge>
              <small> En el último mes</small>
            </CCardText>
          </CCardBody>
        </CCard>
        <CCard className="customCard" style={{ width: '14rem' }}>
          <CCardBody>
            <CCardTitle>Préstamos activos</CCardTitle>
            <CCardSubtitle className="mb-2 statsText">25</CCardSubtitle>
            <CCardText>
              <CBadge color="danger">+8,2%</CBadge>
              <small> En el último mes</small>
            </CCardText>
          </CCardBody>
        </CCard>
        <CCard className="customCard" style={{ width: '14rem' }}>
          <CCardBody>
            <CCardTitle>Pedidos totales</CCardTitle>
            <CCardSubtitle className="mb-2 statsText">1236</CCardSubtitle>
            <CCardText>
              <CBadge color="success">+8,2%</CBadge>
              <small> En el último mes</small>
            </CCardText>
          </CCardBody>
        </CCard>
        <CCard className="customCard" style={{ width: '14rem' }}>
          <CCardBody>
            <CCardTitle>Ingresos totales</CCardTitle>
            <CCardSubtitle className="mb-2 statsText">1738 bs</CCardSubtitle>
            <CCardText>
              <CBadge color="success">+8,2%</CBadge>
              <small> En el último mes</small>
            </CCardText>
          </CCardBody>
        </CCard>
      </div>
      {/* <WidgetsBrand withCharts /> */}
      <br></br>
      <CCardTitle className="mb-4">Acciones rápidas</CCardTitle>

      <CRow className="mb-4">
        <CCol>
          <CCard className="customCard">
            <CCardBody>
              <CCardSubtitle className="mb-2">Clientes vista rápida</CCardSubtitle>
              <CTable align="middle" className="mb-0" hover responsive>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton color="primary" variant="outline">
                          20/01/2023
                        </CButton>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton>
                          <CIcon icon={cilCreditCard} className="me-2" />
                          100 Bs.
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard className="customCard">
            <CCardBody>
              <CCardSubtitle className="mb-2">Realizar pedido</CCardSubtitle>
              <CFormSelect
                className="mb-3"
                aria-label="Cliente"
                options={[
                  'Cliente',
                  { label: 'Cliente 1', value: '1' },
                  { label: 'Cliente 2', value: '2' },
                ]}
              />
              <CFormSelect
                className="mb-3"
                aria-label="Producto"
                options={[
                  'Botellon de 20 lts.',
                  { label: 'Botellon de 10 lts.', value: '1' },
                  { label: 'Botellon de 5 lts.', value: '2' },
                ]}
              />
              <CRow>
                <CCol md={6}>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>Cantidad</CInputGroupText>
                    <CButton
                      type="button"
                      color="secondary"
                      variant="outline"
                      id="inputGroupFileAddon03"
                    >
                      -
                    </CButton>
                    <CFormInput
                      id="inputGroupFile03"
                      aria-describedby="inputGroupFileAddon03"
                      aria-label="Button"
                      value="1"
                    />
                    <CButton
                      type="button"
                      color="secondary"
                      variant="outline"
                      id="inputGroupFileAddon03"
                    >
                      +
                    </CButton>
                  </CInputGroup>
                </CCol>
                <CCol md={6}>
                  <CInputGroup className="mb-3">
                    <CFormInput aria-label="Valor" />
                    <CInputGroupText>Bs</CInputGroupText>
                  </CInputGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol md={8}></CCol>
                <CCol md={4}>
                  <CButton color="primary" shape="rounded-pill">
                    Realizar pedido
                  </CButton>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CCard className="mb-4">
        <CCardBody>
          <CChartBar
            data={{
              labels: ['1', '', '2', '', '3', '', '4'],
              datasets: [
                {
                  label: '',
                  backgroundColor: ['#1A3D7D', '#367DFD'],
                  data: [2000, 900, 1550, 950, 200, 300, 900, 1600],
                },
              ],
              options: {},
            }}
          />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
