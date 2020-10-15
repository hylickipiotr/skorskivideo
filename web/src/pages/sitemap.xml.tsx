import fetch from "isomorphic-unfetch";
import { NextPageContext } from "next";
import { Component } from "react";

export default class SiteMap extends Component {
  static async getInitialProps({ req, res }: NextPageContext) {
    if (res) {
      const response = await fetch(
        `http://${req?.headers["host"]}/api/sitemap`
      );
      const text = await response.text();
      res.setHeader("Content-Type", "text/xml");
      res.write(text);
      res.end();
    }
  }
}
