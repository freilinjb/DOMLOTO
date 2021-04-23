import React from "react";
import Link from 'next/link';

const Breadcrumb = ({titulo, urlActual}) => {



  return (
    <>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">{titulo ? titulo : "Titulo por default"}</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link
                    href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="breadcrumb-item active">{urlActual ? urlActual : "URL DEFAULT"}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* // <!-- /.container-fluid --> */}
    </>
  );
};

export default Breadcrumb;
