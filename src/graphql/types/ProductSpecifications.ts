/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: ProductSpecifications
// ====================================================

export interface ProductSpecifications_productSpecifications_product {
  __typename: "Product";
  id: string;
  name: string;
}

export interface ProductSpecifications_productSpecifications_mics_micType {
  __typename: "MICType";
  id: string;
  name: string;
}

export interface ProductSpecifications_productSpecifications_mics {
  __typename: "MIC";
  id: string;
  name: string;
  description: string | null;
  micType: ProductSpecifications_productSpecifications_mics_micType | null;
  values: any;
  unit: string | null;
}

export interface ProductSpecifications_productSpecifications {
  __typename: "ProductSpecification";
  id: string;
  name: string;
  description: string | null;
  version: string | null;
  product: ProductSpecifications_productSpecifications_product | null;
  mics: (ProductSpecifications_productSpecifications_mics | null)[] | null;
}

export interface ProductSpecifications {
  productSpecifications: (ProductSpecifications_productSpecifications | null)[] | null;
}

export interface ProductSpecificationsVariables {
  product?: ProductInput | null;
}
