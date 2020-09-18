
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import  makeStore from '../Redux/index';
import ReduxToastr from "react-redux-toastr";
import Home from "./index"
import Router from 'next/router'

export default withRedux(makeStore, { debug: true })(
  class MyApp extends App {
    constructor(props)
    {
      super(props)
      this.state={isLogin:false}
    }
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ctx,})
            : {})
        }
      };
    }
  RestrictionOnRoute=()=>{
    if(window.location.pathname.startsWith("/user/")&&!localStorage.getItem("token"))
    {
   Router.push("/")
    }
  }
componentDidMount()
{
  this.RestrictionOnRoute()
  Router.events.on('routeChangeComplete', (url) => {
 this.RestrictionOnRoute()
  });
}
    render() {
      
      const { Component, pageProps, store } = this.props;
     console.log("Test",store)
      let Render=Component

     
      return (
        <Container>
          <Provider store={store}>
          <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          getState={(state) => state.toastr} // This is the default
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
            <Render {...pageProps} />
          </Provider>
        </Container>
      );
    }
  }
);



