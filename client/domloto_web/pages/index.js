import React, { useState, useContext, useEffect } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import lscache from "lscache";
import { useRouter } from "next/router";

import Layout from '../components/layout/Layout';

import AuthContext from "../context/Auth/AuthContext";

export default function Home() {
  const router = useRouter();
  const [cargandoPage, setCargandoPage] = useState(true)
  const authContext = useContext(AuthContext);
  const { iniciarSesion, autenticado, usuarioAutenticado, token, cargando } = authContext;

  // useEffect(() => {
  //   if(autenticado === null) {
  //   }
  // }, []);

  useEffect(() => {
    if(token && autenticado === null) {
      usuarioAutenticado();
      console.log('entro');
      setCargandoPage(false);

    } else if(autenticado === null) {
      router.push("/LogIn");
    }

    else {
      if(autenticado === true) {
      setCargandoPage(false);
      }
    }


  },[]);

  // const authContext = useContext(AuthContext);
  // const { iniciarSesion, usuarioAutenticado, autenticado, cargando, token } = authContext;

  // console.log('token2: ', lscache.get('token'));
  return (
    <>
    {cargandoPage ? (
      <div className="">
        ...Cargando
      </div>
    ) : (

      <Layout>
      <h1>Mundo</h1>
      </Layout>

    )}

    </>
  )
}
