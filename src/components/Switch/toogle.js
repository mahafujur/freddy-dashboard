import React, {useState} from 'react';import Toggle from 'react-toggle'export default function () {    const [toggle,setToggle] = useState(false)    function handleClick(){        setToggle(!toggle)    }    console.log(toggle,'t')    return (        <label>            <Toggle                defaultChecked={toggle}                icons={false}                onChange={handleClick} />            <span>No icons</span>        </label>    )}