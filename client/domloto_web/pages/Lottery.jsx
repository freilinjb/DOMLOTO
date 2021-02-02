import React,{useContext, useEffect} from 'react';
import Layout from '../components/layout/Layout';
import LayoutPrincipal from '../components/layout/LayoutPrincipal';


import AuthContext from '../context/Auth/AuthContext';

const Lottery = (props) => {

    useEffect( () => { document.querySelector("body").classList.add("home") } );
    const autContext = useContext(AuthContext);
    const { saludar } = autContext;

    useEffect(() => {
        saludar('Crack');

    }, []);


    return ( 
        <>
        <Layout>
            <h1>Hola mundo</h1>
        </Layout>

{/* <LayoutPrincipal></LayoutPrincipal> */}
        </>
     );
}
 
export default Lottery;