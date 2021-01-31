import React,{useContext, useEffect} from 'react';
import Layout from '../components/layout/Layout';

import AuthContext from '../context/Auth/AuthContext';

const Lottery = (props) => {

    const autContext = useContext(AuthContext);
    const { saludar } = autContext;

    useEffect(() => {
        saludar('Crack');
    }, []);

    return ( 
        <>
        <Layout paginaTitulo="Naurot">
            <h1>Hola mundo</h1>
        </Layout>
        </>
     );
}
 
export default Lottery;