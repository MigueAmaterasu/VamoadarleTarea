import React, {Component}from 'react';
import Drawer from 'react-motion-drawer';
import AddFruit from './components/AddFruit/AddFruit'

<Drawer open={false} onChange={onChange}>
    <ul>
      <AddFruit
      agregar={this.onSubmit}/>
    </ul>
  </Drawer>

  export default Menu;