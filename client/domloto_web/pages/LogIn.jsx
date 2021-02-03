import React, { useState, useContext, useEffect} from "react";

import Layout from '../components/layout/Layout';

// document.body.classList.remove("HOLA MUNDO");


const LogIn = () => {
    const [usuario, setUsuario] = useState({
        correo: '',
        clave: ''
    });
    const { correo, clave } = usuario;

    const onChange =e=> {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });

        console.log('correo: ', correo);
        console.log('clave: ', clave);
    }

  return (
      <Layout>
    <div className="login-box">
      <div className="login-logo">
        <a href="../../index2.html">
          <b>Admin</b>LTE
        </a>
      </div>
      {/* <!-- /.login-logo --> */}
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Sign in to start your session</p>

          <form action="../../index3.html" method="post">
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
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
              </div>
              {/* <!-- /.col --> */}
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign In
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
              <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
            </a>
          </div>
          {/* <!-- /.social-auth-links --> */}

          <p className="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p>
          <p className="mb-0">
            <a href="register.html" className="text-center">
              Register a new membership
            </a>
          </p>
        </div>
        {/* <!-- /.login-card-body --> */}
      </div>
    </div>
    </Layout>

  );
};

export default LogIn;
