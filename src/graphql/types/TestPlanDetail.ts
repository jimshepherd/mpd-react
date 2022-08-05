/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TestPlanDetail
// ====================================================

export interface TestPlanDetail_specification {
  __typename: "ProductSpecification";
  id: string;
  name: string;
}

export interface TestPlanDetail_product {
  __typename: "Product";
  id: string;
  name: string;
}

export interface TestPlanDetail_mics {
  __typename: "TestPlanMIC";
  micId: string | null;
  sampleType: string | null;
  sampleSize: number | null;
}

export interface TestPlanDetail {
  __typename: "TestPlan";
  id: string;
  name: string;
  description: string | null;
  specification: TestPlanDetail_specification | null;
  product: TestPlanDetail_product | null;
  mics: (TestPlanDetail_mics | null)[] | null;
}
