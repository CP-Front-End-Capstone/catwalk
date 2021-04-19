import React from 'react';
import App from '../App';

export default React.createContext(App.state.selectedProduct);

// whatever is passed in create Context is the default setting.
