import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return(
        <div className="route-list">
            <table>
                <tbody>
                    {
                        props.routes.map((route, index) => {
                            const key = Math.floor(Math.random() * 10000);
                            return(
                                <tr key={ key } >
                                    <td>#{ index+1 }</td>
                                    <td className="route-title">{ `${ route.from } - ${ route.to }` }</td>
                                    <td>
                                        <Link to={{ pathname:  `/route/${ index }`, state: {route: route}  }} className="btn">Detail</Link>
                                        <button onClick={() => { props.deleteRoute(index) }} className="btn red">Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}