import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  GenericScalar: any;
  JSONString: any;
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  id: Scalars['ID'];
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  organization?: Maybe<Organization>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  street2?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  street2?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type Attribute = {
  __typename?: 'Attribute';
  children: Array<Attribute>;
  description: Scalars['String'];
  equipmentSet: Array<Equipment>;
  id: Scalars['ID'];
  materialSet: Array<ProducedProduct>;
  materialspecificationSet: Array<Product>;
  name: Scalars['String'];
  parent?: Maybe<Attribute>;
};

export type AttributeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<AttributeInput>;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Equipment = {
  __typename?: 'Equipment';
  attributes: Array<Attribute>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  equipmentType?: Maybe<EquipmentType>;
  id: Scalars['ID'];
  identifiers: Array<Identifier>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  processSet: Array<ProductMeasurement>;
  properties: Array<MicValue>;
};

export type EquipmentInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  description?: InputMaybe<Scalars['String']>;
  equipmentType?: InputMaybe<EquipmentTypeInput>;
  id?: InputMaybe<Scalars['ID']>;
  identifiers?: InputMaybe<Array<InputMaybe<IdentifierInput>>>;
  name?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<OrganizationInput>;
  properties?: InputMaybe<Array<InputMaybe<PropertyInput>>>;
};

export type EquipmentType = {
  __typename?: 'EquipmentType';
  description: Scalars['String'];
  equipmentSet: Array<Equipment>;
  id: Scalars['ID'];
  name: Scalars['String'];
  processmethodSet: Array<TestPlan>;
};

export type EquipmentTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Identifier = {
  __typename?: 'Identifier';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  equipmentSet: Array<Equipment>;
  id: Scalars['ID'];
  identifierType?: Maybe<IdentifierType>;
  materialSet: Array<ProducedProduct>;
  materialspecificationSet: Array<Product>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  value: Scalars['String'];
};

export type IdentifierInput = {
  id?: InputMaybe<Scalars['ID']>;
  identifierType?: InputMaybe<IdentifierTypeInput>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type IdentifierType = {
  __typename?: 'IdentifierType';
  description: Scalars['String'];
  id: Scalars['ID'];
  identifierSet: Array<Identifier>;
  name: Scalars['String'];
};

export type IdentifierTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Mic = {
  __typename?: 'MIC';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  micType?: Maybe<MicType>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  processmethodSet: Array<TestPlan>;
  processmethodstepSet: Array<TestPlanMic>;
  propertySet: Array<MicValue>;
  propertyType?: Maybe<MicType>;
  unit?: Maybe<Scalars['String']>;
  values: Scalars['JSONString'];
};

export type MicInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  micType?: InputMaybe<MicTypeInput>;
  name?: InputMaybe<Scalars['String']>;
  propertyType?: InputMaybe<MicTypeInput>;
  unit?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Scalars['JSONString']>;
};

export type MicType = {
  __typename?: 'MICType';
  children: Array<MicType>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<MicType>;
  propertySet: Array<MicValue>;
  propertyspecificationSet: Array<Mic>;
};

export type MicTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MicValue = {
  __typename?: 'MICValue';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  equipmentSet: Array<Equipment>;
  floatValue?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  intValue?: Maybe<Scalars['Int']>;
  materialSet: Array<ProducedProduct>;
  materialspecificationSet: Array<Product>;
  mic?: Maybe<Mic>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  processSet: Array<ProductMeasurement>;
  processmethodSet: Array<TestPlan>;
  processmethodstepSet: Array<TestPlanMic>;
  processstepSet: Array<ProcessStep>;
  propertyType?: Maybe<MicType>;
  specification?: Maybe<Mic>;
  textValue?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export type MicValueInput = {
  floatValue?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  intValue?: InputMaybe<Scalars['Int']>;
  mic?: InputMaybe<MicInput>;
  specification?: InputMaybe<MicInput>;
  textValue?: InputMaybe<Scalars['String']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type Material = {
  __typename?: 'Material';
  attributes: Array<Attribute>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifiers: Array<Identifier>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  process?: Maybe<ProductMeasurement>;
  processStep?: Maybe<ProcessStep>;
  properties: Array<MicValue>;
  specification?: Maybe<Product>;
};

export type MaterialInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  identifiers?: InputMaybe<Array<InputMaybe<IdentifierInput>>>;
  name?: InputMaybe<Scalars['String']>;
  process?: InputMaybe<ProcessInput>;
  processStep?: InputMaybe<ProcessInput>;
  producer?: InputMaybe<OrganizationInput>;
  properties?: InputMaybe<Array<InputMaybe<PropertyInput>>>;
  specification?: InputMaybe<MaterialSpecificationInput>;
};

export type MaterialSpecification = {
  __typename?: 'MaterialSpecification';
  attributes: Array<Attribute>;
  children: Array<Product>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifiers: Array<Identifier>;
  materialSet: Array<ProducedProduct>;
  materialType?: Maybe<ProductType>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  parent?: Maybe<Product>;
  processmethodSet: Array<TestPlan>;
  properties: Array<MicValue>;
  supplier?: Maybe<Organization>;
  version?: Maybe<Scalars['String']>;
};

export type MaterialSpecificationInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  identifiers?: InputMaybe<Array<InputMaybe<IdentifierInput>>>;
  materialType?: InputMaybe<MaterialTypeInput>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<MaterialSpecificationInput>;
  properties?: InputMaybe<Array<InputMaybe<PropertyInput>>>;
  supplier?: InputMaybe<OrganizationInput>;
  version?: InputMaybe<Scalars['String']>;
};

export type MaterialType = {
  __typename?: 'MaterialType';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  materialspecificationSet: Array<Product>;
  name: Scalars['String'];
};

export type MaterialTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<CreateUser>;
  refreshToken?: Maybe<Refresh>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  updateAttribute?: Maybe<UpdateAttribute>;
  updateEquipment?: Maybe<UpdateEquipment>;
  updateEquipmentType?: Maybe<UpdateEquipmentType>;
  updateIdentifier?: Maybe<UpdateIdentifier>;
  updateIdentifierType?: Maybe<UpdateIdentifierType>;
  updateMaterial?: Maybe<UpdateMaterial>;
  updateMaterialSpecification?: Maybe<UpdateMaterialSpecification>;
  updateMaterialType?: Maybe<UpdateMaterialType>;
  updateMic?: Maybe<UpdateMic>;
  updateMicType?: Maybe<UpdateMicType>;
  updateMicValue?: Maybe<UpdateMicValue>;
  updateOrganization?: Maybe<UpdateOrganization>;
  updateOrganizationType?: Maybe<UpdateOrganizationType>;
  updateProcess?: Maybe<UpdateProcess>;
  updateProcessMethod?: Maybe<UpdateProcessMethod>;
  updateProcessType?: Maybe<UpdateProcessType>;
  updateProducedProduct?: Maybe<UpdateProducedProduct>;
  updateProduct?: Maybe<UpdateProduct>;
  updateProductMeasurement?: Maybe<UpdateProductMeasurement>;
  updateProductSpecification?: Maybe<UpdateProductSpecification>;
  updateProductType?: Maybe<UpdateProductType>;
  updateProperty?: Maybe<UpdateProperty>;
  updatePropertySpecification?: Maybe<UpdatePropertySpecification>;
  updatePropertyType?: Maybe<UpdatePropertyType>;
  updateTestPlan?: Maybe<UpdateTestPlan>;
  verifyToken?: Maybe<Verify>;
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationTokenAuthArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateAttributeArgs = {
  attribute: AttributeInput;
};


export type MutationUpdateEquipmentArgs = {
  equipment: EquipmentInput;
};


export type MutationUpdateEquipmentTypeArgs = {
  equipmentType: EquipmentTypeInput;
};


export type MutationUpdateIdentifierArgs = {
  identifier: IdentifierInput;
};


export type MutationUpdateIdentifierTypeArgs = {
  identifierType: IdentifierTypeInput;
};


export type MutationUpdateMaterialArgs = {
  material: MaterialInput;
};


export type MutationUpdateMaterialSpecificationArgs = {
  materialSpecification: MaterialSpecificationInput;
};


export type MutationUpdateMaterialTypeArgs = {
  materialType: MaterialTypeInput;
};


export type MutationUpdateMicArgs = {
  mic: MicInput;
};


export type MutationUpdateMicTypeArgs = {
  micType: MicTypeInput;
};


export type MutationUpdateMicValueArgs = {
  micValue: MicValueInput;
};


export type MutationUpdateOrganizationArgs = {
  organization: OrganizationInput;
};


export type MutationUpdateOrganizationTypeArgs = {
  organizationType: OrganizationTypeInput;
};


export type MutationUpdateProcessArgs = {
  process: ProcessInput;
};


export type MutationUpdateProcessMethodArgs = {
  processMethod: ProcessMethodInput;
};


export type MutationUpdateProcessTypeArgs = {
  processType: ProcessTypeInput;
};


export type MutationUpdateProducedProductArgs = {
  producedProduct: ProducedProductInput;
};


export type MutationUpdateProductArgs = {
  product: ProductInput;
};


export type MutationUpdateProductMeasurementArgs = {
  productMeasurement: ProductMeasurementInput;
};


export type MutationUpdateProductSpecificationArgs = {
  productSpecification: ProductSpecificationInput;
};


export type MutationUpdateProductTypeArgs = {
  productType: ProductTypeInput;
};


export type MutationUpdatePropertyArgs = {
  property: PropertyInput;
};


export type MutationUpdatePropertySpecificationArgs = {
  propertySpecification: PropertySpecificationInput;
};


export type MutationUpdatePropertyTypeArgs = {
  propertyType: PropertyTypeInput;
};


export type MutationUpdateTestPlanArgs = {
  testPlan: TestPlanInput;
};


export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type Organization = {
  __typename?: 'Organization';
  addresses: Array<Address>;
  children: Array<Organization>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  equipmentSet: Array<Equipment>;
  id: Scalars['ID'];
  materialspecificationSet: Array<Product>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  orgTypes: Array<OrganizationType>;
  parent?: Maybe<Organization>;
  processSet: Array<ProductMeasurement>;
};

export type OrganizationInput = {
  addresses?: InputMaybe<Array<InputMaybe<AddressInput>>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  orgTypes?: InputMaybe<Array<InputMaybe<OrganizationTypeInput>>>;
};

export type OrganizationType = {
  __typename?: 'OrganizationType';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  organizationSet: Array<Organization>;
};

export type OrganizationTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Process = {
  __typename?: 'Process';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  equipment?: Maybe<Equipment>;
  id: Scalars['ID'];
  materialsOut: Array<ProducedProduct>;
  method?: Maybe<TestPlan>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  operator?: Maybe<User>;
  processType?: Maybe<ProcessType>;
  producer?: Maybe<Organization>;
  properties: Array<MicValue>;
  steps: Array<ProcessStep>;
};

export type ProcessInput = {
  description?: InputMaybe<Scalars['String']>;
  equipment?: InputMaybe<EquipmentInput>;
  id?: InputMaybe<Scalars['ID']>;
  method?: InputMaybe<ProcessMethodInput>;
  name?: InputMaybe<Scalars['String']>;
  operator?: InputMaybe<UserInput>;
  processType?: InputMaybe<ProcessTypeInput>;
  producer?: InputMaybe<OrganizationInput>;
  properties?: InputMaybe<Array<InputMaybe<PropertyInput>>>;
};

export type ProcessMethod = {
  __typename?: 'ProcessMethod';
  children: Array<TestPlan>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  equipmentType?: Maybe<EquipmentType>;
  id: Scalars['ID'];
  materialSpecificationsIn: Array<Product>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  parent?: Maybe<TestPlan>;
  processSet: Array<ProductMeasurement>;
  processType?: Maybe<ProcessType>;
  properties: Array<MicValue>;
  propertySpecs: Array<Mic>;
  steps: Array<TestPlanMic>;
  version?: Maybe<Scalars['String']>;
};

export type ProcessMethodInput = {
  description?: InputMaybe<Scalars['String']>;
  equipmentType?: InputMaybe<EquipmentTypeInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<ProcessMethodInput>;
  processType?: InputMaybe<ProcessTypeInput>;
  properties?: InputMaybe<Array<InputMaybe<PropertyInput>>>;
  propertySpecs?: InputMaybe<Array<InputMaybe<PropertySpecificationInput>>>;
  version?: InputMaybe<Scalars['String']>;
};

export type ProcessStep = {
  __typename?: 'ProcessStep';
  children: Array<ProcessStep>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description: Scalars['String'];
  id: Scalars['ID'];
  materialsOut: Array<ProducedProduct>;
  methodStep?: Maybe<TestPlanMic>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  order: Scalars['Int'];
  parent?: Maybe<ProcessStep>;
  process: ProductMeasurement;
  properties: Array<MicValue>;
};

export type ProcessType = {
  __typename?: 'ProcessType';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  processSet: Array<ProductMeasurement>;
  processmethodSet: Array<TestPlan>;
};

export type ProcessTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ProducedProduct = {
  __typename?: 'ProducedProduct';
  attributes: Array<Attribute>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifiers: Array<Identifier>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  process?: Maybe<ProductMeasurement>;
  processStep?: Maybe<ProcessStep>;
  product?: Maybe<Product>;
  properties: Array<MicValue>;
  specification?: Maybe<Product>;
};

export type ProducedProductInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  identifiers?: InputMaybe<Array<InputMaybe<IdentifierInput>>>;
  materialType?: InputMaybe<ProductTypeInput>;
  name?: InputMaybe<Scalars['String']>;
  process?: InputMaybe<ProcessInput>;
  product?: InputMaybe<ProductInput>;
  specification?: InputMaybe<ProductInput>;
};

export type Product = {
  __typename?: 'Product';
  attributes: Array<Attribute>;
  children: Array<Product>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifiers: Array<Identifier>;
  materialSet: Array<ProducedProduct>;
  materialType?: Maybe<ProductType>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  parent?: Maybe<Product>;
  processmethodSet: Array<TestPlan>;
  properties: Array<MicValue>;
  supplier?: Maybe<Organization>;
  version?: Maybe<Scalars['String']>;
};

export type ProductInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  materialType?: InputMaybe<ProductTypeInput>;
  name?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type ProductMeasurement = {
  __typename?: 'ProductMeasurement';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  equipment?: Maybe<Equipment>;
  id: Scalars['ID'];
  materialsOut: Array<ProducedProduct>;
  method?: Maybe<TestPlan>;
  micValues?: Maybe<Array<Maybe<MicValue>>>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  operator?: Maybe<User>;
  processType?: Maybe<ProcessType>;
  producer?: Maybe<Organization>;
  properties: Array<MicValue>;
  specification?: Maybe<ProductSpecification>;
  steps: Array<ProcessStep>;
};

export type ProductMeasurementInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  method?: InputMaybe<ProductSpecificationInput>;
  micValues?: InputMaybe<Array<InputMaybe<MicValueInput>>>;
  name?: InputMaybe<Scalars['String']>;
  operator?: InputMaybe<UserInput>;
  properties?: InputMaybe<Array<InputMaybe<MicValueInput>>>;
  specification?: InputMaybe<ProductSpecificationInput>;
};

export type ProductSpecification = {
  __typename?: 'ProductSpecification';
  children: Array<TestPlan>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  equipmentType?: Maybe<EquipmentType>;
  id: Scalars['ID'];
  materialSpecificationsIn: Array<Product>;
  mics?: Maybe<Array<Maybe<Mic>>>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  parent?: Maybe<TestPlan>;
  processSet: Array<ProductMeasurement>;
  processType?: Maybe<ProcessType>;
  product?: Maybe<Product>;
  properties: Array<MicValue>;
  propertySpecs: Array<Mic>;
  steps: Array<TestPlanMic>;
  version?: Maybe<Scalars['String']>;
};

export type ProductSpecificationInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  mics?: InputMaybe<Array<InputMaybe<MicInput>>>;
  name?: InputMaybe<Scalars['String']>;
  processType?: InputMaybe<ProcessTypeInput>;
  product?: InputMaybe<ProductInput>;
  propertySpecs?: InputMaybe<Array<InputMaybe<MicInput>>>;
  version?: InputMaybe<Scalars['String']>;
};

export type ProductType = {
  __typename?: 'ProductType';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  materialspecificationSet: Array<Product>;
  name: Scalars['String'];
};

export type ProductTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Property = {
  __typename?: 'Property';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  equipmentSet: Array<Equipment>;
  floatValue?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  intValue?: Maybe<Scalars['Int']>;
  materialSet: Array<ProducedProduct>;
  materialspecificationSet: Array<Product>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  processSet: Array<ProductMeasurement>;
  processmethodSet: Array<TestPlan>;
  processmethodstepSet: Array<TestPlanMic>;
  processstepSet: Array<ProcessStep>;
  propertyType?: Maybe<MicType>;
  specification?: Maybe<Mic>;
  textValue?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export type PropertyInput = {
  floatValue?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  intValue?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  propertyType?: InputMaybe<PropertyTypeInput>;
  specification?: InputMaybe<PropertySpecificationInput>;
  textValue?: InputMaybe<Scalars['String']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type PropertySpecification = {
  __typename?: 'PropertySpecification';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  processmethodSet: Array<TestPlan>;
  processmethodstepSet: Array<TestPlanMic>;
  propertySet: Array<MicValue>;
  propertyType?: Maybe<MicType>;
  unit?: Maybe<Scalars['String']>;
  values: Scalars['JSONString'];
};

export type PropertySpecificationInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  propertyType?: InputMaybe<PropertyTypeInput>;
  unit?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Scalars['JSONString']>;
};

export type PropertyType = {
  __typename?: 'PropertyType';
  children: Array<MicType>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<MicType>;
  propertySet: Array<MicValue>;
  propertyspecificationSet: Array<Mic>;
};

export type PropertyTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  currentUser?: Maybe<User>;
  equipment?: Maybe<Array<Maybe<Equipment>>>;
  equipmentTypes?: Maybe<Array<Maybe<EquipmentType>>>;
  identifierTypes?: Maybe<Array<Maybe<IdentifierType>>>;
  identifiers?: Maybe<Array<Maybe<Identifier>>>;
  materialSpecifications?: Maybe<Array<Maybe<MaterialSpecification>>>;
  materialTypes?: Maybe<Array<Maybe<MaterialType>>>;
  materials?: Maybe<Array<Maybe<Material>>>;
  micTypes?: Maybe<Array<Maybe<MicType>>>;
  micValues?: Maybe<Array<Maybe<MicValue>>>;
  mics?: Maybe<Array<Maybe<Mic>>>;
  organizationTypes?: Maybe<Array<Maybe<OrganizationType>>>;
  organizations?: Maybe<Array<Maybe<Organization>>>;
  processMethods?: Maybe<Array<Maybe<ProcessMethod>>>;
  processes?: Maybe<Array<Maybe<Process>>>;
  producedProducts?: Maybe<Array<Maybe<ProducedProduct>>>;
  productMeasurements?: Maybe<Array<Maybe<ProductMeasurement>>>;
  productSpecifications?: Maybe<Array<Maybe<ProductSpecification>>>;
  productTypes?: Maybe<Array<Maybe<ProductType>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  properties?: Maybe<Array<Maybe<Property>>>;
  propertySpecifications?: Maybe<Array<Maybe<PropertySpecification>>>;
  propertyTypes?: Maybe<Array<Maybe<PropertyType>>>;
  testPlans?: Maybe<Array<Maybe<TestPlan>>>;
};


export type QueryAttributesArgs = {
  parent?: InputMaybe<AttributeInput>;
};


export type QueryMaterialSpecificationsArgs = {
  parent?: InputMaybe<MaterialSpecificationInput>;
};


export type QueryProductSpecificationsArgs = {
  product?: InputMaybe<ProductInput>;
};


export type QueryTestPlansArgs = {
  product?: InputMaybe<ProductInput>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type TestPlan = {
  __typename?: 'TestPlan';
  children: Array<TestPlan>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  equipmentType?: Maybe<EquipmentType>;
  id: Scalars['ID'];
  materialSpecificationsIn: Array<Product>;
  mics?: Maybe<Array<Maybe<TestPlanMic>>>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  parent?: Maybe<TestPlan>;
  processSet: Array<ProductMeasurement>;
  processType?: Maybe<ProcessType>;
  product?: Maybe<Product>;
  properties: Array<MicValue>;
  propertySpecs: Array<Mic>;
  specification?: Maybe<ProductSpecification>;
  steps: Array<TestPlanMic>;
  version?: Maybe<Scalars['String']>;
};

export type TestPlanInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  mics?: InputMaybe<Array<InputMaybe<TestPlanMicInput>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<ProductSpecificationInput>;
  processType?: InputMaybe<ProcessTypeInput>;
  product?: InputMaybe<ProductInput>;
  specification?: InputMaybe<ProductSpecificationInput>;
  steps?: InputMaybe<Array<InputMaybe<TestPlanMicInput>>>;
  version?: InputMaybe<Scalars['String']>;
};

export type TestPlanMic = {
  __typename?: 'TestPlanMIC';
  children: Array<TestPlanMic>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  method: TestPlan;
  micId?: Maybe<Scalars['ID']>;
  micType?: Maybe<MicType>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
  parent?: Maybe<TestPlanMic>;
  processstepSet: Array<ProcessStep>;
  properties: Array<MicValue>;
  propertySpecs: Array<Mic>;
  sampleSize?: Maybe<Scalars['Int']>;
  sampleType?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  values?: Maybe<Scalars['JSONString']>;
};

export type TestPlanMicInput = {
  id?: InputMaybe<Scalars['ID']>;
  micId?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<Scalars['Int']>;
  sampleSize?: InputMaybe<Scalars['Int']>;
  sampleType?: InputMaybe<Scalars['String']>;
};

export type UpdateAttribute = {
  __typename?: 'UpdateAttribute';
  attribute?: Maybe<Attribute>;
};

export type UpdateEquipment = {
  __typename?: 'UpdateEquipment';
  equipment?: Maybe<Equipment>;
};

export type UpdateEquipmentType = {
  __typename?: 'UpdateEquipmentType';
  equipmentType?: Maybe<EquipmentType>;
};

export type UpdateIdentifier = {
  __typename?: 'UpdateIdentifier';
  identifier?: Maybe<Identifier>;
};

export type UpdateIdentifierType = {
  __typename?: 'UpdateIdentifierType';
  identifierType?: Maybe<IdentifierType>;
};

export type UpdateMic = {
  __typename?: 'UpdateMIC';
  mic?: Maybe<Mic>;
};

export type UpdateMicType = {
  __typename?: 'UpdateMICType';
  micType?: Maybe<MicType>;
};

export type UpdateMicValue = {
  __typename?: 'UpdateMICValue';
  micValue?: Maybe<MicValue>;
};

export type UpdateMaterial = {
  __typename?: 'UpdateMaterial';
  material?: Maybe<Material>;
};

export type UpdateMaterialSpecification = {
  __typename?: 'UpdateMaterialSpecification';
  materialSpecification?: Maybe<MaterialSpecification>;
};

export type UpdateMaterialType = {
  __typename?: 'UpdateMaterialType';
  materialType?: Maybe<MaterialType>;
};

export type UpdateOrganization = {
  __typename?: 'UpdateOrganization';
  organization?: Maybe<Organization>;
};

export type UpdateOrganizationType = {
  __typename?: 'UpdateOrganizationType';
  organizationType?: Maybe<OrganizationType>;
};

export type UpdateProcess = {
  __typename?: 'UpdateProcess';
  process?: Maybe<Process>;
};

export type UpdateProcessMethod = {
  __typename?: 'UpdateProcessMethod';
  processMethod?: Maybe<ProcessMethod>;
};

export type UpdateProcessType = {
  __typename?: 'UpdateProcessType';
  processType?: Maybe<ProcessType>;
};

export type UpdateProducedProduct = {
  __typename?: 'UpdateProducedProduct';
  producedProduct?: Maybe<ProducedProduct>;
};

export type UpdateProduct = {
  __typename?: 'UpdateProduct';
  product?: Maybe<Product>;
};

export type UpdateProductMeasurement = {
  __typename?: 'UpdateProductMeasurement';
  productMeasurement?: Maybe<ProductMeasurement>;
};

export type UpdateProductSpecification = {
  __typename?: 'UpdateProductSpecification';
  productSpecification?: Maybe<ProductSpecification>;
};

export type UpdateProductType = {
  __typename?: 'UpdateProductType';
  productType?: Maybe<ProductType>;
};

export type UpdateProperty = {
  __typename?: 'UpdateProperty';
  property?: Maybe<Property>;
};

export type UpdatePropertySpecification = {
  __typename?: 'UpdatePropertySpecification';
  propertySpecification?: Maybe<PropertySpecification>;
};

export type UpdatePropertyType = {
  __typename?: 'UpdatePropertyType';
  propertyType?: Maybe<PropertyType>;
};

export type UpdateTestPlan = {
  __typename?: 'UpdateTestPlan';
  testPlan?: Maybe<TestPlan>;
};

export type User = {
  __typename?: 'User';
  createdAddressSet: Array<Address>;
  createdEquipmentSet: Array<Equipment>;
  createdIdentifierSet: Array<Identifier>;
  createdMaterialSet: Array<ProducedProduct>;
  createdMaterialspecificationSet: Array<Product>;
  createdOrganizationSet: Array<Organization>;
  createdProcessSet: Array<ProductMeasurement>;
  createdProcessmethodSet: Array<TestPlan>;
  createdProcessmethodstepSet: Array<TestPlanMic>;
  createdProcessstepSet: Array<ProcessStep>;
  createdPropertySet: Array<MicValue>;
  createdPropertyspecificationSet: Array<Mic>;
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  modifiedAddressSet: Array<Address>;
  modifiedEquipmentSet: Array<Equipment>;
  modifiedIdentifierSet: Array<Identifier>;
  modifiedMaterialSet: Array<ProducedProduct>;
  modifiedMaterialspecificationSet: Array<Product>;
  modifiedOrganizationSet: Array<Organization>;
  modifiedProcessSet: Array<ProductMeasurement>;
  modifiedProcessmethodSet: Array<TestPlan>;
  modifiedProcessmethodstepSet: Array<TestPlanMic>;
  modifiedProcessstepSet: Array<ProcessStep>;
  modifiedPropertySet: Array<MicValue>;
  modifiedPropertyspecificationSet: Array<Mic>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  processSet: Array<ProductMeasurement>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
};

export type UserInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type MicDetailFragment = { __typename?: 'MIC', id: string, name: string, description?: string | null, values: any, unit?: string | null, micType?: { __typename?: 'MICType', id: string, name: string } | null };

export type MicTypeDetailFragment = { __typename?: 'MICType', id: string, name: string, description?: string | null };

export type MicTypeMinimumFragment = { __typename?: 'MICType', id: string, name: string };

export type ProductSpecificationDetailFragment = { __typename?: 'ProductSpecification', id: string, name: string, description?: string | null, version?: string | null, product?: { __typename?: 'Product', id: string, name: string } | null, mics?: Array<{ __typename?: 'MIC', id: string, name: string, description?: string | null, values: any, unit?: string | null, micType?: { __typename?: 'MICType', id: string, name: string } | null } | null> | null };

export type TestPlanDetailFragment = { __typename?: 'TestPlan', id: string, name: string, description?: string | null, specification?: { __typename?: 'ProductSpecification', id: string, name: string } | null, product?: { __typename?: 'Product', id: string, name: string } | null, mics?: Array<{ __typename?: 'TestPlanMIC', id: string, name?: string | null, description?: string | null, values?: any | null, unit?: string | null, micId?: string | null, sampleType?: string | null, sampleSize?: number | null, micType?: { __typename?: 'MICType', id: string, name: string } | null } | null> | null };

export type TestPlanMicDetailFragment = { __typename?: 'TestPlanMIC', id: string, name?: string | null, description?: string | null, values?: any | null, unit?: string | null, micId?: string | null, sampleType?: string | null, sampleSize?: number | null, micType?: { __typename?: 'MICType', id: string, name: string } | null };

export type TokenAuthMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type TokenAuthMutation = { __typename?: 'Mutation', tokenAuth?: { __typename?: 'ObtainJSONWebToken', token: string, payload: any, refreshExpiresIn: number } | null };

export type AttributesQueryVariables = Exact<{
  parent?: InputMaybe<AttributeInput>;
}>;


export type AttributesQuery = { __typename?: 'Query', attributes?: Array<{ __typename?: 'Attribute', id: string, name: string, description: string, parent?: { __typename?: 'Attribute', id: string } | null } | null> | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', id: string, email: string, username: string } | null };

export type MaterialSpecificationsQueryVariables = Exact<{
  parent?: InputMaybe<MaterialSpecificationInput>;
}>;


export type MaterialSpecificationsQuery = { __typename?: 'Query', materialSpecifications?: Array<{ __typename?: 'MaterialSpecification', id: string, name: string, description?: string | null, version?: string | null, parent?: { __typename?: 'Product', id: string } | null } | null> | null };

export type ProductSpecificationsQueryVariables = Exact<{
  product?: InputMaybe<ProductInput>;
}>;


export type ProductSpecificationsQuery = { __typename?: 'Query', productSpecifications?: Array<{ __typename?: 'ProductSpecification', id: string, name: string, description?: string | null, version?: string | null, product?: { __typename?: 'Product', id: string, name: string } | null, mics?: Array<{ __typename?: 'MIC', id: string, name: string, description?: string | null, values: any, unit?: string | null, micType?: { __typename?: 'MICType', id: string, name: string } | null } | null> | null } | null> | null };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id: string, name: string, description?: string | null, version?: string | null } | null> | null };

export type TestPlansQueryVariables = Exact<{
  product?: InputMaybe<ProductInput>;
}>;


export type TestPlansQuery = { __typename?: 'Query', testPlans?: Array<{ __typename?: 'TestPlan', id: string, name: string, description?: string | null, specification?: { __typename?: 'ProductSpecification', id: string, name: string } | null, product?: { __typename?: 'Product', id: string, name: string } | null, mics?: Array<{ __typename?: 'TestPlanMIC', id: string, name?: string | null, description?: string | null, values?: any | null, unit?: string | null, micId?: string | null, sampleType?: string | null, sampleSize?: number | null, micType?: { __typename?: 'MICType', id: string, name: string } | null } | null> | null } | null> | null };

export const MicTypeDetailFragmentDoc = gql`
    fragment MICTypeDetail on MICType {
  id
  name
  description
}
    `;
export const MicTypeMinimumFragmentDoc = gql`
    fragment MICTypeMinimum on MICType {
  id
  name
}
    `;
export const MicDetailFragmentDoc = gql`
    fragment MICDetail on MIC {
  id
  name
  description
  micType {
    ...MICTypeMinimum
  }
  values
  unit
}
    ${MicTypeMinimumFragmentDoc}`;
export const ProductSpecificationDetailFragmentDoc = gql`
    fragment ProductSpecificationDetail on ProductSpecification {
  id
  name
  description
  version
  product {
    id
    name
  }
  mics {
    ...MICDetail
  }
}
    ${MicDetailFragmentDoc}`;
export const TestPlanMicDetailFragmentDoc = gql`
    fragment TestPlanMICDetail on TestPlanMIC {
  id
  name
  description
  micType {
    id
    name
  }
  values
  unit
  micId
  sampleType
  sampleSize
}
    `;
export const TestPlanDetailFragmentDoc = gql`
    fragment TestPlanDetail on TestPlan {
  id
  name
  description
  specification {
    id
    name
  }
  product {
    id
    name
  }
  mics {
    ...TestPlanMICDetail
  }
}
    ${TestPlanMicDetailFragmentDoc}`;
export const TokenAuthDocument = gql`
    mutation TokenAuth($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    payload
    refreshExpiresIn
  }
}
    `;
export type TokenAuthMutationFn = Apollo.MutationFunction<TokenAuthMutation, TokenAuthMutationVariables>;

/**
 * __useTokenAuthMutation__
 *
 * To run a mutation, you first call `useTokenAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenAuthMutation, { data, loading, error }] = useTokenAuthMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useTokenAuthMutation(baseOptions?: Apollo.MutationHookOptions<TokenAuthMutation, TokenAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenAuthMutation, TokenAuthMutationVariables>(TokenAuthDocument, options);
      }
export type TokenAuthMutationHookResult = ReturnType<typeof useTokenAuthMutation>;
export type TokenAuthMutationResult = Apollo.MutationResult<TokenAuthMutation>;
export type TokenAuthMutationOptions = Apollo.BaseMutationOptions<TokenAuthMutation, TokenAuthMutationVariables>;
export const AttributesDocument = gql`
    query Attributes($parent: AttributeInput) {
  attributes(parent: $parent) {
    id
    name
    description
    parent {
      id
    }
  }
}
    `;

/**
 * __useAttributesQuery__
 *
 * To run a query within a React component, call `useAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAttributesQuery({
 *   variables: {
 *      parent: // value for 'parent'
 *   },
 * });
 */
export function useAttributesQuery(baseOptions?: Apollo.QueryHookOptions<AttributesQuery, AttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AttributesQuery, AttributesQueryVariables>(AttributesDocument, options);
      }
export function useAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AttributesQuery, AttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AttributesQuery, AttributesQueryVariables>(AttributesDocument, options);
        }
export type AttributesQueryHookResult = ReturnType<typeof useAttributesQuery>;
export type AttributesLazyQueryHookResult = ReturnType<typeof useAttributesLazyQuery>;
export type AttributesQueryResult = Apollo.QueryResult<AttributesQuery, AttributesQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    id
    email
    username
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const MaterialSpecificationsDocument = gql`
    query MaterialSpecifications($parent: MaterialSpecificationInput) {
  materialSpecifications(parent: $parent) {
    id
    name
    description
    version
    parent {
      id
    }
  }
}
    `;

/**
 * __useMaterialSpecificationsQuery__
 *
 * To run a query within a React component, call `useMaterialSpecificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaterialSpecificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaterialSpecificationsQuery({
 *   variables: {
 *      parent: // value for 'parent'
 *   },
 * });
 */
export function useMaterialSpecificationsQuery(baseOptions?: Apollo.QueryHookOptions<MaterialSpecificationsQuery, MaterialSpecificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MaterialSpecificationsQuery, MaterialSpecificationsQueryVariables>(MaterialSpecificationsDocument, options);
      }
export function useMaterialSpecificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MaterialSpecificationsQuery, MaterialSpecificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MaterialSpecificationsQuery, MaterialSpecificationsQueryVariables>(MaterialSpecificationsDocument, options);
        }
export type MaterialSpecificationsQueryHookResult = ReturnType<typeof useMaterialSpecificationsQuery>;
export type MaterialSpecificationsLazyQueryHookResult = ReturnType<typeof useMaterialSpecificationsLazyQuery>;
export type MaterialSpecificationsQueryResult = Apollo.QueryResult<MaterialSpecificationsQuery, MaterialSpecificationsQueryVariables>;
export const ProductSpecificationsDocument = gql`
    query ProductSpecifications($product: ProductInput) {
  productSpecifications(product: $product) {
    ...ProductSpecificationDetail
  }
}
    ${ProductSpecificationDetailFragmentDoc}`;

/**
 * __useProductSpecificationsQuery__
 *
 * To run a query within a React component, call `useProductSpecificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductSpecificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductSpecificationsQuery({
 *   variables: {
 *      product: // value for 'product'
 *   },
 * });
 */
export function useProductSpecificationsQuery(baseOptions?: Apollo.QueryHookOptions<ProductSpecificationsQuery, ProductSpecificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductSpecificationsQuery, ProductSpecificationsQueryVariables>(ProductSpecificationsDocument, options);
      }
export function useProductSpecificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductSpecificationsQuery, ProductSpecificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductSpecificationsQuery, ProductSpecificationsQueryVariables>(ProductSpecificationsDocument, options);
        }
export type ProductSpecificationsQueryHookResult = ReturnType<typeof useProductSpecificationsQuery>;
export type ProductSpecificationsLazyQueryHookResult = ReturnType<typeof useProductSpecificationsLazyQuery>;
export type ProductSpecificationsQueryResult = Apollo.QueryResult<ProductSpecificationsQuery, ProductSpecificationsQueryVariables>;
export const ProductsDocument = gql`
    query Products {
  products {
    id
    name
    description
    version
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const TestPlansDocument = gql`
    query TestPlans($product: ProductInput) {
  testPlans(product: $product) {
    ...TestPlanDetail
  }
}
    ${TestPlanDetailFragmentDoc}`;

/**
 * __useTestPlansQuery__
 *
 * To run a query within a React component, call `useTestPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestPlansQuery({
 *   variables: {
 *      product: // value for 'product'
 *   },
 * });
 */
export function useTestPlansQuery(baseOptions?: Apollo.QueryHookOptions<TestPlansQuery, TestPlansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestPlansQuery, TestPlansQueryVariables>(TestPlansDocument, options);
      }
export function useTestPlansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestPlansQuery, TestPlansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestPlansQuery, TestPlansQueryVariables>(TestPlansDocument, options);
        }
export type TestPlansQueryHookResult = ReturnType<typeof useTestPlansQuery>;
export type TestPlansLazyQueryHookResult = ReturnType<typeof useTestPlansLazyQuery>;
export type TestPlansQueryResult = Apollo.QueryResult<TestPlansQuery, TestPlansQueryVariables>;