import React, { useContext, useEffect } from "react";
import Layout from "../components/layout/Layout";
import LayoutPrincipal from "../components/layout/LayoutPrincipal";

import AuthContext from "../context/Auth/AuthContext";
import Breadcrumb from "../components/layout/Breadcrumb";

const Lottery = (props) => {
  const autContext = useContext(AuthContext);
  const { saludar } = autContext;

  useEffect(() => {
    saludar("Crack");
  }, []);

  return (
    <>
      <Layout>
        <Breadcrumb titulo="Administracion de Loterias" urlActual={"Lottery"} />
        <div className="col-md-12">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-edit"></i>
                Administracion de Loterias
              </h3>
            </div>
            <div className="card-body pad table-responsive">
              <form className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label for="">Empresa</label>
                    <select
                      className="form-control"
                      name="cbbEmpresa"
                      id="cbbEmpresa"
                    >
                      <option>Nacional</option>
                      <option>Loteka</option>
                      <option>Gana Gana</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group">
                    <label for="">Empresa</label>
                    <select
                      className="form-control"
                      name="cbbEmpresa"
                      id="cbbEmpresa"
                    >
                      <option>Nacional</option>
                      <option>Loteka</option>
                      <option>Gana Gana</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 mt-4">
                  <div
                    className="btn-group float-right"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn btn-primary">
                      Registrar <i className="fas fa-bars"></i>
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Imprimir <i className="fas fa-print"></i>
                    </button>
                  </div>
                </div>
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Responsive Hover Table</h3>

                        <div className="card-tools">
                          <div
                            className="input-group input-group-sm"
                          >
                            <input
                              type="text"
                              name="table_search"
                              className="form-control float-right"
                              placeholder="Search"
                            />

                            <div className="input-group-append">
                              <button type="submit" className="btn btn-default">
                                <i className="fas fa-search"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>User</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Reason</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>183</td>
                              <td>John Doe</td>
                              <td>11-7-2014</td>
                              <td>
                                <span className="tag tag-success">
                                  Approved
                                </span>
                              </td>
                              <td>
                                Bacon ipsum dolor sit amet salami venison
                                chicken flank fatback doner.
                              </td>
                            </tr>
                            <tr>
                              <td>219</td>
                              <td>Alexander Pierce</td>
                              <td>11-7-2014</td>
                              <td>
                                <span className="tag tag-warning">Pending</span>
                              </td>
                              <td>
                                Bacon ipsum dolor sit amet salami venison
                                chicken flank fatback doner.
                              </td>
                            </tr>
                            <tr>
                              <td>657</td>
                              <td>Bob Doe</td>
                              <td>11-7-2014</td>
                              <td>
                                <span className="tag tag-primary">
                                  Approved
                                </span>
                              </td>
                              <td>
                                Bacon ipsum dolor sit amet salami venison
                                chicken flank fatback doner.
                              </td>
                            </tr>
                            <tr>
                              <td>175</td>
                              <td>Mike Doe</td>
                              <td>11-7-2014</td>
                              <td>
                                <span className="tag tag-danger">Denied</span>
                              </td>
                              <td>
                                Bacon ipsum dolor sit amet salami venison
                                chicken flank fatback doner.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Lottery;
