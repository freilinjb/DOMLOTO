import React, { useState, useContext, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import { useRouter } from "next/router";

import AuthContext from "../context/Auth/AuthContext";

import Layout from "../components/layout/Layout";

// document.body.classList.remove("HOLA MUNDO");

const LogIn = () => {
  const router = useRouter();

  const authContext = useContext(AuthContext);
  const { iniciarSesion, autenticado, cargando, token } = authContext;

  const [usuario, setUsuario] = useState({
    correo: "",
    clave: "",
  });
  const [cargandoLogin, setCargandoLogin] = useState(true);


  console.log('cargando/: ', cargando);
  if(autenticado === true) {
    router.push("/");
  }
  const { correo, clave } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });

    console.log("correoSign: ", correo);
    console.log("claveSign: ", clave);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (correo.trim() === "" || clave.trim() === "") {
      console.log("debe completar todos los campos");
    }

    iniciarSesion(correo, clave);
  };
  if(autenticado === true) {
    router.replace("/");
  } 
  useEffect(() => {
    if(cargando == false && token === null) {
      setCargandoLogin(false);
    }
  }, []);

  return (

    <>
    {cargandoLogin === false && (
    <Layout page="login">
      <div className="login-box">
        <div className="login-logo">
          <Link href="/">
            <a>
              <b>DOM</b>LOTO
            </a>
          </Link>
        </div>
        {/* <!-- /.login-logo --> */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form method="post" onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="correo"
                  className="form-control"
                  placeholder="Email"
                  id="correo"
                  name="correo"
                  value={correo}
                  onChange={onChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="clave"
                  name="clave"
                  value={clave}
                  onChange={onChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div> */}
                {/* <!-- /.col --> */}
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                  {cargando === true ? 
                    (<>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Cargando...
                    </>
                    )
                    :
                    (
                        <>
                        Iniciar sesión
                        </>
                    )
                  }
                  </button>
                </div>
                {/* <!-- /.col --> */}
              </div>
            </form>

            <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i> Sign in using
                Google+
              </a>
            </div>
            {/* <!-- /.social-auth-links --> */}

            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              <Link href="SignUp">
                <a className="text-center">Register a new membership</a>
              </Link>
            </p>
          </div>
          {/* <!-- /.login-card-body --> */}
        </div>
      </div>
    </Layout>
    )}

    </>
  );
};

export default LogIn;
