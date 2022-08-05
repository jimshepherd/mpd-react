/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: TestPlans
// ====================================================

export interface TestPlans_testPlans_specification {
  __typename: "ProductSpecification";
  id: string;
  name: string;
}

export interface TestPlans_testPlans_product {
  __typename: "Product";
  id: string;
  name: string;
}

export interface TestPlans_testPlans_mics {
  __typename: "TestPlanMIC";
  micId: string | null;
  sampleType: string | null;
  sampleSize: number | null;
}

export interface TestPlans_testPlans {
  __typename: "TestPlan";
  id: string;
  name: string;
  description: string | null;
  specification: TestPlans_testPlans_specification | null;
  product: TestPlans_testPlans_product | null;
  mics: (TestPlans_testPlans_mics | null)[] | null;
}

export interface TestPlans {
  testPlans: (TestPlans_testPlans | null)[] | null;
}

export interface TestPlansVariables {
  product?: ProductInput | null;
}
