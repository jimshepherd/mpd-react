/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MICDetail
// ====================================================

export interface MICDetail_micType {
  __typename: "MICType";
  id: string;
  name: string;
}

export interface MICDetail {
  __typename: "MIC";
  id: string;
  name: string;
  description: string | null;
  micType: MICDetail_micType | null;
  values: any;
  unit: string | null;
}
