import React, { useContext, useEffect } from "react";
import Layout from "../components/layout/Layout";
import LayoutPrincipal from "../components/layout/LayoutPrincipal";

import AuthContext from "../context/Auth/AuthContext";

import Breadcrumb from "../components/layout/Breadcrumb";

const AdministracionConsorcios = (props) => {
  const autContext = useContext(AuthContext);
  const { saludar } = autContext;

  useEffect(() => {
    saludar("Crack");
  }, []);

  return (
    <>
      <Layout>
        <Breadcrumb
          titulo="Administracion de Consorcio"
          urlActual={"AdministracionConsorcios"}
        />
        <div className="col-md-12">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-edit"></i>
                Administracion de Consorcios
              </h3>
            </div>
            <div className="card-body pad table-responsive">
              <p>
                Various types of buttons. Using the base class <code>.btn</code>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdministracionConsorcios;
