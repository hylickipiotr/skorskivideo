import { NextPage } from "next";
import React from "react";
import Header from "../components/Header/Header";
import RichText from "../components/RichText/RichText";
import { usePrivacyPolicyQuery } from "../generated/graphql";
import Layout from "../layouts/Layout";
import { withApollo } from "../utils/withApollo";

const PrivacyPolicy: NextPage = () => {
  const { data: privacyPolicyData } = usePrivacyPolicyQuery();

  return (
    <Layout title="SkórskiVideo | Polityka Prywatności" lang="pl-PL">
      <div
        className="container mx-auto grid grid-flow-row gap-y-8 pt-40 pb-16 px-4 xl:px-12"
        style={{ gridTemplateColumns: "minmax(0, 1fr)" }}
      >
        <div>
          <Header>Polityka Prywatności</Header>
        </div>
        {privacyPolicyData?.privacyPolicy && (
          <RichText>{privacyPolicyData.privacyPolicy.content}</RichText>
        )}
      </div>
    </Layout>
  );
};
export default withApollo({ ssr: true })(PrivacyPolicy);
