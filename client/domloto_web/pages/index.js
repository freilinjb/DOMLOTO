import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout/Layout';

import AutState from '../context/Auth/AuthState';

export default function Home() {
  return (
    <Layout>
      <h1>HGola</h1>
    </Layout>
    // <form action="">
    //   <input type="text" name="usuario"/>
    //   <input type="text" name="usuario"/>

    //   <input type="button" value="Iniciar sesion"/>
    // </form>
  )
}
