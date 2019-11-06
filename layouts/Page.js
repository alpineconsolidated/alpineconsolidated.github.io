import Head from "next/head";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

import { withRouter } from "next/router";

import logoAlpine from "../static/images/AlpineCons_H.svg";
import logoAlpineTEC from "../static/images/AlpineTEC_H.svg";

import logoAlpine_big from "../static/images/AlpineCons_V.svg";
import logoAlpineTEC_big from "../static/images/AlpineTEC_V.svg";

class Page extends React.Component {
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <Head>
          <link href="/static/css/base.css" rel="stylesheet" />
          <link href="/static/css/fonts.css" rel="stylesheet" />
          <link href="/static/css/global.css" rel="stylesheet" />
          <meta
            name="viewport"
            content="initial-scale=1, maximum-scale=1, user-scalable=no"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={
              this.props.router.route === "/"
                ? "../static/images/faviconA-32x32.png"
                : "../static/images/favicon-32x32.png"
            }
          />
        </Head>
        <Navbar
          logo={this.props.router.route === "/" ? logoAlpine : logoAlpineTEC}
        ></Navbar>
        <div className="box-wide">{this.props.children}</div>
        <div
          style={{
            backgroundColor: this.props.router.route !== "/" && "#fff"
          }}
          className="contactSectionContainer"
        >
          <div className="box-wide">
            <section className="contactSection">
              <ContactForm
                route={this.props.router.route === "/" ? "alpine" : "alpineTEC"}
                logo={
                  this.props.router.route === "/"
                    ? logoAlpine_big
                    : logoAlpineTEC_big
                }
              />
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Page);
