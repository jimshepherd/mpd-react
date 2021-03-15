/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AttributeInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: Attributes
// ====================================================

export interface Attributes_attributes_parent {
  __typename: "Attribute";
  id: string;
}

export interface Attributes_attributes {
  __typename: "Attribute";
  id: string;
  name: string;
  description: string;
  parent: Attributes_attributes_parent | null;
}

export interface Attributes {
  attributes: (Attributes_attributes | null)[] | null;
}

export interface AttributesVariables {
  parent?: AttributeInput | null;
}
