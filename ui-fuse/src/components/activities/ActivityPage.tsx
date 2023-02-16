import { Container, Paper, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-hooks-web";
import CustomSearchBox from "../common/search-box/CustomSearchBox";
import { useRecoilValue } from "recoil";
import { compositionsQueryList } from "../../recoil/composition";

const searchClient = algoliasearch("XR6OUAIDQT", "184897179c114fd378ea626827238be3");

//@ts-ignore
function Hit({ hit }) {
  return (
    <article>
      <img src={hit.image} alt={hit.name} />
      <p>{hit.categories[0]}</p>
      <h1>{hit.name}</h1>
      <p>${hit.price}</p>
    </article>
  );
}

const ActivityPage = () => {
  const { data } = useRecoilValue(compositionsQueryList);

  return (
    <>
      <Stack spacing={2}>
        <Paper>
          <h6 color="primary"> Hello</h6>
        </Paper>
        <Paper>
          <InstantSearch searchClient={searchClient} indexName="instant_search">
            <CustomSearchBox />
            <Hits hitComponent={Hit} />
          </InstantSearch>
        </Paper>
        <React.Suspense fallback={<div>Loading...</div>}>
          {data.map((element: any) => {
            return (
              <div>
                <h6>{element.name}</h6>
                <h6> {element.description}</h6>
              </div>
            );
          })}
        </React.Suspense>
        <Paper />
      </Stack>
    </>
  );
};

export default ActivityPage;
