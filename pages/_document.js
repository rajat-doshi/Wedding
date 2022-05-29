import Document, { Html, Head, Main, NextScript } from "next/document";
import Nav from "../components/nav";
import { Provider } from 'react-redux';
import store from "../Redux/index";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Provider store={store}>
          <Head>
            {/* Meta tags start */}
            <meta charset="UTF-8" />
            <meta name="description" content="" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            {/* Meta tags end */}
            <title>Test</title>
            <link rel="icon" href="./img/core-img/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
            {/* Css start */}
            <link
              href="https://diegoddox.github.io/react-redux-toastr/7.1/react-redux-toastr.min.css"
              rel="stylesheet"
              type="text/css"
            ></link>
            <link rel="manifest" href="./manifest.webmanifest"></link>
            <link rel="shortcut icon" href="/static/images/logo/logo-site.png" />
            <link rel="apple-touch-icon" href="/static/images/logo/logo-site.png" />
            <link rel="stylesheet" href="/static/css/style.min.css"></link>
            <link rel="stylesheet" href="/static/css/custom.css"></link>
            {/* Css end */}
          </Head>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Provider>
      </Html>
    );
  }
}

export default MyDocument;