import Head from "next/Head";

class Page extends React.Component {
  render() {
    return (
      <>
        <Head>
          <link href="/static/css/base.css" rel="stylesheet" />
          <link href="/static/css/fonts.css" rel="stylesheet" />
        </Head>
        {this.props.children}
      </>
    );
  }
}
export default Page;
