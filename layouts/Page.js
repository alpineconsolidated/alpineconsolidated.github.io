import Head from "next/Head";
import Navbar from "../components/Navbar";
import { withRouter } from "next/router";

import logoAlpine from "../static/images/AlpineCons_H.svg";
import logoAlpineTEC from "../static/images/AlpineTEC_H.svg";

class Page extends React.Component {
  render() {
    return (
      <>
        <Head>
          <link href="/static/css/base.css" rel="stylesheet" />
          <link href="/static/css/fonts.css" rel="stylesheet" />
          <link href="/static/css/global.css" rel="stylesheet" />
        </Head>
        <div className="box-wide">
          <Navbar
            logo={this.props.router.route === "/" ? logoAlpine : logoAlpineTEC}
          ></Navbar>
          {this.props.children}
        </div>
      </>
    );
  }
}
export default withRouter(Page);
