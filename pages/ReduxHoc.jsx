import React, { Children } from "react";
import { Provider } from 'react-redux'
import store from "../Redux"
const ReduxHoc = (Children)=>{

    return<> 
    <Provider store={store}> 
    <Children/>
    </Provider>
    </>

}

export default ReduxHoc;