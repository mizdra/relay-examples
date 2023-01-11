"use client";

import Issue from "src/components/Issue";
import { Suspense } from "react";
import IssueQueryNode, { IssueQuery } from "__generated__/IssueQuery.graphql";
import { SerializablePreloadedQuery } from "src/relay/loadSerializableQuery";
import useSerializablePreloadedQuery from "src/relay/useSerializablePreloadedQuery";

const Root = (props: {
  preloadedQuery: SerializablePreloadedQuery<typeof IssueQueryNode, IssueQuery>;
}) => {
  const queryRef = useSerializablePreloadedQuery(props.preloadedQuery);

  return (
    <Suspense fallback="Loading...">
      <Issue queryRef={queryRef} />
    </Suspense>
  );
};

export default Root;
