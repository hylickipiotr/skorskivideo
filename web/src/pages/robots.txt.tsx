import { NextPageContext } from "next";
import { Component } from "react";

export default class Robots extends Component {
  static getInitialProps({ res }: NextPageContext) {
    if (res) {
      res.setHeader("Content-Type", "text/plain");
      res.write(`User-agent: *
Disallow:
Sitemap: https://skorskivideo.pl/sitemap.xml`);
      res.end();
    }
  }
}
