/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MaterialSpecificationInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: MaterialSpecifications
// ====================================================

export interface MaterialSpecifications_materialSpecifications_parent {
  __typename: "Product";
  id: string;
}

export interface MaterialSpecifications_materialSpecifications {
  __typename: "MaterialSpecification";
  id: string;
  name: string;
  description: string | null;
  version: string | null;
  parent: MaterialSpecifications_materialSpecifications_parent | null;
}

export interface MaterialSpecifications {
  materialSpecifications: (MaterialSpecifications_materialSpecifications | null)[] | null;
}

export interface MaterialSpecificationsVariables {
  parent?: MaterialSpecificationInput | null;
}
