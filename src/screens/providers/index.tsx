import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  TransactionsList,
  Box,
  LoadAndExist,
  TransactionListDetails,
} from '@components';
import { useRecoilValue } from 'recoil';
import { readTx } from '@recoil/settings';
import { useStyles } from './styles';
import { useTransactions } from './hooks';
import {
  DataBlocks,
  Memory,
  Compute,
  Storage,
  Title,
} from './components';

const Providers = () => {
  const txListFormat = useRecoilValue(readTx);
  const { t } = useTranslation('providers');
  const classes = useStyles();
  const {
    state,
    loadNextPage,
  } = useTransactions();
  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index) => !state.hasNextPage || index < state.items.length;
  const itemCount = state.hasNextPage ? state.items.length + 1 : state.items.length;
  return (
    <>
      <NextSeo
        title={t('providers')}
        openGraph={{
          title: t('providers'),
        }}
      />
      <Layout
        navTitle={t('providers')}
        className={classes.root}
      >
        <DataBlocks />
        <Memory className={classes.memory} />
        <Compute className={classes.compute} />
        <Storage className={classes.storage} />
        {/* <Title className={classes.title} /> */}
        {/* <LoadAndExist
          exists={state.exists}
          loading={state.loading}
        >
          <Box className={classes.box}>
            {txListFormat === 'compact' ? (
              <TransactionsList
                transactions={state.items}
                itemCount={itemCount}
                hasNextPage={state.hasNextPage}
                isNextPageLoading={state.isNextPageLoading}
                loadNextPage={loadNextPage}
                loadMoreItems={loadMoreItems}
                isItemLoaded={isItemLoaded}
              />
            ) : (
              <TransactionListDetails
                transactions={state.items}
                itemCount={itemCount}
                hasNextPage={state.hasNextPage}
                isNextPageLoading={state.isNextPageLoading}
                loadNextPage={loadNextPage}
                loadMoreItems={loadMoreItems}
                isItemLoaded={isItemLoaded}
              />
            )}
          </Box>
        </LoadAndExist> */}
      </Layout>
    </>
  );
};

export default Providers;
