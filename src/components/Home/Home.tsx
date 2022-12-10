import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


export const Home = () => {

  console.log('Home');

  return (
    <Fragment>
      <p>Home</p>;
      <Link to='raw_material_inventory'>
        Raw Material Inventory
      </Link>

    </Fragment>
)
}

export default Home;
