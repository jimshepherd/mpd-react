/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductSpecificationDetail
// ====================================================

export interface ProductSpecificationDetail_product {
  __typename: "Product";
  id: string;
  name: string;
}

export interface ProductSpecificationDetail_mics_micType {
  __typename: "MICType";
  id: string;
  name: string;
}

export interface ProductSpecificationDetail_mics {
  __typename: "MIC";
  id: string;
  name: string;
  description: string | null;
  micType: ProductSpecificationDetail_mics_micType | null;
  values: any;
  unit: string | null;
}

export interface ProductSpecificationDetail {
  __typename: "ProductSpecification";
  id: string;
  name: string;
  description: string | null;
  version: string | null;
  product: ProductSpecificationDetail_product | null;
  mics: (ProductSpecificationDetail_mics | null)[] | null;
}
