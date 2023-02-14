import { Container, Paper, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-hooks-web";
import CustomSearchBox from "../common/search-box/CustomSearchBox";

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
      </Stack>
    </>
  );
};

export default ActivityPage;
