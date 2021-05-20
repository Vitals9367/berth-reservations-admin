import { PlaceProductTaxEnum, PriceUnits, PricingCategory } from '../../../../@types/__generated__/globalTypes';
import { BerthPricingProps } from '../BerthPricing';

export const data: BerthPricingProps['data'] = {
  __typename: 'BerthProductNodeConnection',
  edges: [
    {
      __typename: 'BerthProductNodeEdge',
      node: {
        __typename: 'BerthProductNode',
        id: '68ac7db5-b397-48f6-af19-99c35d645cb6',
        minWidth: 3,
        maxWidth: 7,
        tier1Price: 50,
        tier2Price: 75,
        tier3Price: 100,
        priceUnit: PriceUnits.AMOUNT,
        taxPercentage: PlaceProductTaxEnum.TAX_24_00,
        pricingCategory: PricingCategory.DEFAULT,
      },
    },
  ],
};
