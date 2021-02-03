import React,{useState, useEffect} from 'react';

const Validation = (stateInitial, validation, fn) => {
    const [valores, setValores] = useState(stateInitial);
    const [errores, setErrores] = useState({});
    const [submitForm, setSubmitForm] = useState()
}