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
  equipment: Array<Equipment>;
  id: Scalars['ID'];
  materialSpecifications: Array<MaterialSpecification>;
  materials: Array<Material>;
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
  processes: Array<Process>;
  properties: Array<Property>;
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
  equipment: Array<Equipment>;
  id: Scalars['ID'];
  name: Scalars['String'];
  processMethods: Array<ProcessMethod>;
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
  equipment: Array<Equipment>;
  id: Scalars['ID'];
  identifierType?: Maybe<IdentifierType>;
  materialSpecifications: Array<MaterialSpecification>;
  materials: Array<Material>;
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
  children: Array<IdentifierType>;
  description: Scalars['String'];
  id: Scalars['ID'];
  identifiers: Array<Identifier>;
  name: Scalars['String'];
  parent?: Maybe<IdentifierType>;
};

export type IdentifierTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<IdentifierTypeInput>;
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
  process?: Maybe<Process>;
  processStep?: Maybe<ProcessStep>;
  properties?: Maybe<Array<Maybe<Property>>>;
  specification?: Maybe<MaterialSpecification>;
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
  children: Array<MaterialSpecification>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifiers: Array<Identifier>;
  materialType?: Maybe<MaterialType>;
  materials: Array<Material>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  parent?: Maybe<MaterialSpecification>;
  processmethodSet: Array<ProcessMethod>;
  properties: Array<Property>;
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
  children: Array<MaterialType>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  materialSpecifications: Array<MaterialSpecification>;
  name: Scalars['String'];
  parent?: Maybe<MaterialType>;
};

export type MaterialTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<MaterialTypeInput>;
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
  updateOrganization?: Maybe<UpdateOrganization>;
  updateOrganizationType?: Maybe<UpdateOrganizationType>;
  updateProcess?: Maybe<UpdateProcess>;
  updateProcessMethod?: Maybe<UpdateProcessMethod>;
  updateProcessType?: Maybe<UpdateProcessType>;
  updateProperty?: Maybe<UpdateProperty>;
  updatePropertySpecification?: Maybe<UpdatePropertySpecification>;
  updatePropertyType?: Maybe<UpdatePropertyType>;
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


export type MutationUpdatePropertyArgs = {
  property: PropertyInput;
};


export type MutationUpdatePropertySpecificationArgs = {
  propertySpecification: PropertySpecificationInput;
};


export type MutationUpdatePropertyTypeArgs = {
  propertyType: PropertyTypeInput;
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
  equipment: Array<Equipment>;
  id: Scalars['ID'];
  materialSpecifications: Array<MaterialSpecification>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  orgTypes: Array<OrganizationType>;
  parent?: Maybe<Organization>;
  processes: Array<Process>;
};

export type OrganizationInput = {
  addresses?: InputMaybe<Array<InputMaybe<AddressInput>>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  orgTypes?: InputMaybe<Array<InputMaybe<OrganizationTypeInput>>>;
  parent?: InputMaybe<OrganizationInput>;
};

export type OrganizationType = {
  __typename?: 'OrganizationType';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  organizations: Array<Organization>;
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
  materialsOut: Array<Material>;
  method?: Maybe<ProcessMethod>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  operator?: Maybe<User>;
  processType?: Maybe<ProcessType>;
  producer?: Maybe<Organization>;
  properties: Array<Property>;
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
  children: Array<ProcessMethod>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  equipmentType?: Maybe<EquipmentType>;
  id: Scalars['ID'];
  materialSpecificationsIn: Array<MaterialSpecification>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  parent?: Maybe<ProcessMethod>;
  processType?: Maybe<ProcessType>;
  processes: Array<Process>;
  properties: Array<Property>;
  propertySpecs: Array<PropertySpecification>;
  steps: Array<ProcessMethodStep>;
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

export type ProcessMethodStep = {
  __typename?: 'ProcessMethodStep';
  children: Array<ProcessMethodStep>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description: Scalars['String'];
  id: Scalars['ID'];
  method: ProcessMethod;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  order: Scalars['Int'];
  parent?: Maybe<ProcessMethodStep>;
  processstepSet: Array<ProcessStep>;
  properties: Array<Property>;
  propertySpecs: Array<PropertySpecification>;
};

export type ProcessStep = {
  __typename?: 'ProcessStep';
  children: Array<ProcessStep>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  description: Scalars['String'];
  id: Scalars['ID'];
  materialsOut: Array<Material>;
  methodStep?: Maybe<ProcessMethodStep>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  name: Scalars['String'];
  order: Scalars['Int'];
  parent?: Maybe<ProcessStep>;
  process: Process;
  properties: Array<Property>;
};

export type ProcessType = {
  __typename?: 'ProcessType';
  children: Array<ProcessType>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<ProcessType>;
  processMethods: Array<ProcessMethod>;
  processes: Array<Process>;
};

export type ProcessTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Property = {
  __typename?: 'Property';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  equipment: Array<Equipment>;
  floatValue?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  intValue?: Maybe<Scalars['Int']>;
  materialSpecifications: Array<MaterialSpecification>;
  materials: Array<Material>;
  modifiedAt: Scalars['DateTime'];
  modifiedBy?: Maybe<User>;
  processSet: Array<Process>;
  processmethodSet: Array<ProcessMethod>;
  processmethodstepSet: Array<ProcessMethodStep>;
  processstepSet: Array<ProcessStep>;
  propertyType?: Maybe<PropertyType>;
  specification?: Maybe<PropertySpecification>;
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
  processmethodSet: Array<ProcessMethod>;
  processmethodstepSet: Array<ProcessMethodStep>;
  properties: Array<Property>;
  propertyType?: Maybe<PropertyType>;
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
  children: Array<PropertyType>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<PropertyType>;
  properties: Array<Property>;
  propertySpecifications: Array<PropertySpecification>;
};

export type PropertyTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<PropertyTypeInput>;
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
  organizationTypes?: Maybe<Array<Maybe<OrganizationType>>>;
  organizations?: Maybe<Array<Maybe<Organization>>>;
  processMethods?: Maybe<Array<Maybe<ProcessMethod>>>;
  processes?: Maybe<Array<Maybe<Process>>>;
  properties?: Maybe<Array<Maybe<Property>>>;
  propertySpecifications?: Maybe<Array<Maybe<PropertySpecification>>>;
  propertyTypes?: Maybe<Array<Maybe<PropertyType>>>;
};


export type QueryAttributesArgs = {
  parent?: InputMaybe<AttributeInput>;
};


export type QueryMaterialSpecificationsArgs = {
  parent?: InputMaybe<MaterialSpecificationInput>;
};


export type QueryMaterialTypesArgs = {
  ancestor?: InputMaybe<MaterialTypeInput>;
};


export type QueryMaterialsArgs = {
  includeSubtypes?: InputMaybe<Scalars['Boolean']>;
  materialType?: InputMaybe<MaterialTypeInput>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
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

export type User = {
  __typename?: 'User';
  createdAddressSet: Array<Address>;
  createdEquipmentSet: Array<Equipment>;
  createdIdentifierSet: Array<Identifier>;
  createdMaterialSet: Array<Material>;
  createdMaterialspecificationSet: Array<MaterialSpecification>;
  createdOrganizationSet: Array<Organization>;
  createdProcessSet: Array<Process>;
  createdProcessmethodSet: Array<ProcessMethod>;
  createdProcessmethodstepSet: Array<ProcessMethodStep>;
  createdProcessstepSet: Array<ProcessStep>;
  createdPropertySet: Array<Property>;
  createdPropertyspecificationSet: Array<PropertySpecification>;
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
  modifiedMaterialSet: Array<Material>;
  modifiedMaterialspecificationSet: Array<MaterialSpecification>;
  modifiedOrganizationSet: Array<Organization>;
  modifiedProcessSet: Array<Process>;
  modifiedProcessmethodSet: Array<ProcessMethod>;
  modifiedProcessmethodstepSet: Array<ProcessMethodStep>;
  modifiedProcessstepSet: Array<ProcessStep>;
  modifiedPropertySet: Array<Property>;
  modifiedPropertyspecificationSet: Array<PropertySpecification>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  processes: Array<Process>;
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

export type AttributeDetailFragment = { __typename?: 'Attribute', id: string, name: string, description: string, parent?: { __typename?: 'Attribute', id: string } | null };

export type IdentifierDetailFragment = { __typename?: 'Identifier', id: string, value: string, identifierType?: { __typename?: 'IdentifierType', id: string, name: string, description: string } | null };

export type IdentifierTypeDetailFragment = { __typename?: 'IdentifierType', id: string, name: string, description: string };

export type MaterialDetailFragment = { __typename?: 'Material', id: string, name: string, description?: string | null, specification?: { __typename?: 'MaterialSpecification', id: string, name: string, description?: string | null, version?: string | null, parent?: { __typename?: 'MaterialSpecification', id: string, name: string } | null, materialType?: { __typename?: 'MaterialType', id: string, name: string, description?: string | null, parent?: { __typename?: 'MaterialType', id: string, name: string } | null } | null, attributes: Array<{ __typename?: 'Attribute', id: string, name: string, description: string, parent?: { __typename?: 'Attribute', id: string } | null }>, identifiers: Array<{ __typename?: 'Identifier', id: string, value: string, identifierType?: { __typename?: 'IdentifierType', id: string, name: string, description: string } | null }>, properties: Array<{ __typename?: 'Property', id: string, intValue?: number | null, floatValue?: number | null, textValue?: string | null, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null, specification?: { __typename?: 'PropertySpecification', id: string, name: string, description?: string | null, values: any, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null } | null }>, supplier?: { __typename?: 'Organization', id: string, name: string, description?: string | null, parent?: { __typename?: 'Organization', id: string } | null, orgTypes: Array<{ __typename?: 'OrganizationType', id: string, name: string, description: string }> } | null } | null, attributes: Array<{ __typename?: 'Attribute', id: string, name: string, description: string, parent?: { __typename?: 'Attribute', id: string } | null }>, identifiers: Array<{ __typename?: 'Identifier', id: string, value: string, identifierType?: { __typename?: 'IdentifierType', id: string, name: string, description: string } | null }>, properties?: Array<{ __typename?: 'Property', id: string, intValue?: number | null, floatValue?: number | null, textValue?: string | null, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null, specification?: { __typename?: 'PropertySpecification', id: string, name: string, description?: string | null, values: any, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null } | null } | null> | null };

export type MaterialSpecificationDetailFragment = { __typename?: 'MaterialSpecification', id: string, name: string, description?: string | null, version?: string | null, parent?: { __typename?: 'MaterialSpecification', id: string, name: string } | null, materialType?: { __typename?: 'MaterialType', id: string, name: string, description?: string | null, parent?: { __typename?: 'MaterialType', id: string, name: string } | null } | null, attributes: Array<{ __typename?: 'Attribute', id: string, name: string, description: string, parent?: { __typename?: 'Attribute', id: string } | null }>, identifiers: Array<{ __typename?: 'Identifier', id: string, value: string, identifierType?: { __typename?: 'IdentifierType', id: string, name: string, description: string } | null }>, properties: Array<{ __typename?: 'Property', id: string, intValue?: number | null, floatValue?: number | null, textValue?: string | null, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null, specification?: { __typename?: 'PropertySpecification', id: string, name: string, description?: string | null, values: any, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null } | null }>, supplier?: { __typename?: 'Organization', id: string, name: string, description?: string | null, parent?: { __typename?: 'Organization', id: string } | null, orgTypes: Array<{ __typename?: 'OrganizationType', id: string, name: string, description: string }> } | null };

export type MaterialTypeDetailFragment = { __typename?: 'MaterialType', id: string, name: string, description?: string | null, parent?: { __typename?: 'MaterialType', id: string, name: string } | null };

export type OrganizationDetailFragment = { __typename?: 'Organization', id: string, name: string, description?: string | null, parent?: { __typename?: 'Organization', id: string } | null, orgTypes: Array<{ __typename?: 'OrganizationType', id: string, name: string, description: string }> };

export type PropertyDetailFragment = { __typename?: 'Property', id: string, intValue?: number | null, floatValue?: number | null, textValue?: string | null, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null, specification?: { __typename?: 'PropertySpecification', id: string, name: string, description?: string | null, values: any, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null } | null };

export type PropertySpecificationDetailFragment = { __typename?: 'PropertySpecification', id: string, name: string, description?: string | null, values: any, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null };

export type PropertyTypeMinimumFragment = { __typename?: 'PropertyType', id: string, name: string };

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


export type MaterialSpecificationsQuery = { __typename?: 'Query', materialSpecifications?: Array<{ __typename?: 'MaterialSpecification', id: string, name: string, description?: string | null, version?: string | null, parent?: { __typename?: 'MaterialSpecification', id: string, name: string } | null, materialType?: { __typename?: 'MaterialType', id: string, name: string, description?: string | null, parent?: { __typename?: 'MaterialType', id: string, name: string } | null } | null, attributes: Array<{ __typename?: 'Attribute', id: string, name: string, description: string, parent?: { __typename?: 'Attribute', id: string } | null }>, identifiers: Array<{ __typename?: 'Identifier', id: string, value: string, identifierType?: { __typename?: 'IdentifierType', id: string, name: string, description: string } | null }>, properties: Array<{ __typename?: 'Property', id: string, intValue?: number | null, floatValue?: number | null, textValue?: string | null, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null, specification?: { __typename?: 'PropertySpecification', id: string, name: string, description?: string | null, values: any, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null } | null }>, supplier?: { __typename?: 'Organization', id: string, name: string, description?: string | null, parent?: { __typename?: 'Organization', id: string } | null, orgTypes: Array<{ __typename?: 'OrganizationType', id: string, name: string, description: string }> } | null } | null> | null };

export type MaterialTypesQueryVariables = Exact<{
  ancestor?: InputMaybe<MaterialTypeInput>;
}>;


export type MaterialTypesQuery = { __typename?: 'Query', materialTypes?: Array<{ __typename?: 'MaterialType', id: string, name: string, description?: string | null, parent?: { __typename?: 'MaterialType', id: string, name: string } | null } | null> | null };

export type MaterialsQueryVariables = Exact<{
  materialType?: InputMaybe<MaterialTypeInput>;
}>;


export type MaterialsQuery = { __typename?: 'Query', materials?: Array<{ __typename?: 'Material', id: string, name: string, description?: string | null, specification?: { __typename?: 'MaterialSpecification', id: string, name: string, description?: string | null, version?: string | null, parent?: { __typename?: 'MaterialSpecification', id: string, name: string } | null, materialType?: { __typename?: 'MaterialType', id: string, name: string, description?: string | null, parent?: { __typename?: 'MaterialType', id: string, name: string } | null } | null, attributes: Array<{ __typename?: 'Attribute', id: string, name: string, description: string, parent?: { __typename?: 'Attribute', id: string } | null }>, identifiers: Array<{ __typename?: 'Identifier', id: string, value: string, identifierType?: { __typename?: 'IdentifierType', id: string, name: string, description: string } | null }>, properties: Array<{ __typename?: 'Property', id: string, intValue?: number | null, floatValue?: number | null, textValue?: string | null, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null, specification?: { __typename?: 'PropertySpecification', id: string, name: string, description?: string | null, values: any, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null } | null }>, supplier?: { __typename?: 'Organization', id: string, name: string, description?: string | null, parent?: { __typename?: 'Organization', id: string } | null, orgTypes: Array<{ __typename?: 'OrganizationType', id: string, name: string, description: string }> } | null } | null, attributes: Array<{ __typename?: 'Attribute', id: string, name: string, description: string, parent?: { __typename?: 'Attribute', id: string } | null }>, identifiers: Array<{ __typename?: 'Identifier', id: string, value: string, identifierType?: { __typename?: 'IdentifierType', id: string, name: string, description: string } | null }>, properties?: Array<{ __typename?: 'Property', id: string, intValue?: number | null, floatValue?: number | null, textValue?: string | null, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null, specification?: { __typename?: 'PropertySpecification', id: string, name: string, description?: string | null, values: any, unit?: string | null, propertyType?: { __typename?: 'PropertyType', id: string, name: string } | null } | null } | null> | null } | null> | null };

export const MaterialTypeDetailFragmentDoc = gql`
    fragment MaterialTypeDetail on MaterialType {
  id
  name
  description
  parent {
    id
    name
  }
}
    `;
export const AttributeDetailFragmentDoc = gql`
    fragment AttributeDetail on Attribute {
  id
  name
  description
  parent {
    id
  }
}
    `;
export const IdentifierTypeDetailFragmentDoc = gql`
    fragment IdentifierTypeDetail on IdentifierType {
  id
  name
  description
}
    `;
export const IdentifierDetailFragmentDoc = gql`
    fragment IdentifierDetail on Identifier {
  id
  identifierType {
    ...IdentifierTypeDetail
  }
  value
}
    ${IdentifierTypeDetailFragmentDoc}`;
export const PropertyTypeMinimumFragmentDoc = gql`
    fragment PropertyTypeMinimum on PropertyType {
  id
  name
}
    `;
export const PropertySpecificationDetailFragmentDoc = gql`
    fragment PropertySpecificationDetail on PropertySpecification {
  id
  name
  description
  propertyType {
    ...PropertyTypeMinimum
  }
  values
  unit
}
    ${PropertyTypeMinimumFragmentDoc}`;
export const PropertyDetailFragmentDoc = gql`
    fragment PropertyDetail on Property {
  id
  propertyType {
    ...PropertyTypeMinimum
  }
  specification {
    ...PropertySpecificationDetail
  }
  intValue
  floatValue
  textValue
  unit
}
    ${PropertyTypeMinimumFragmentDoc}
${PropertySpecificationDetailFragmentDoc}`;
export const OrganizationDetailFragmentDoc = gql`
    fragment OrganizationDetail on Organization {
  id
  name
  description
  parent {
    id
  }
  orgTypes {
    id
    name
    description
  }
}
    `;
export const MaterialSpecificationDetailFragmentDoc = gql`
    fragment MaterialSpecificationDetail on MaterialSpecification {
  id
  name
  description
  version
  parent {
    id
    name
  }
  materialType {
    ...MaterialTypeDetail
  }
  attributes {
    ...AttributeDetail
  }
  identifiers {
    ...IdentifierDetail
  }
  properties {
    ...PropertyDetail
  }
  supplier {
    ...OrganizationDetail
  }
}
    ${MaterialTypeDetailFragmentDoc}
${AttributeDetailFragmentDoc}
${IdentifierDetailFragmentDoc}
${PropertyDetailFragmentDoc}
${OrganizationDetailFragmentDoc}`;
export const MaterialDetailFragmentDoc = gql`
    fragment MaterialDetail on Material {
  id
  name
  description
  specification {
    ...MaterialSpecificationDetail
  }
  attributes {
    ...AttributeDetail
  }
  identifiers {
    ...IdentifierDetail
  }
  properties {
    ...PropertyDetail
  }
}
    ${MaterialSpecificationDetailFragmentDoc}
${AttributeDetailFragmentDoc}
${IdentifierDetailFragmentDoc}
${PropertyDetailFragmentDoc}`;
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
    ...MaterialSpecificationDetail
  }
}
    ${MaterialSpecificationDetailFragmentDoc}`;

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
export const MaterialTypesDocument = gql`
    query MaterialTypes($ancestor: MaterialTypeInput) {
  materialTypes(ancestor: $ancestor) {
    ...MaterialTypeDetail
  }
}
    ${MaterialTypeDetailFragmentDoc}`;

/**
 * __useMaterialTypesQuery__
 *
 * To run a query within a React component, call `useMaterialTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaterialTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaterialTypesQuery({
 *   variables: {
 *      ancestor: // value for 'ancestor'
 *   },
 * });
 */
export function useMaterialTypesQuery(baseOptions?: Apollo.QueryHookOptions<MaterialTypesQuery, MaterialTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MaterialTypesQuery, MaterialTypesQueryVariables>(MaterialTypesDocument, options);
      }
export function useMaterialTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MaterialTypesQuery, MaterialTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MaterialTypesQuery, MaterialTypesQueryVariables>(MaterialTypesDocument, options);
        }
export type MaterialTypesQueryHookResult = ReturnType<typeof useMaterialTypesQuery>;
export type MaterialTypesLazyQueryHookResult = ReturnType<typeof useMaterialTypesLazyQuery>;
export type MaterialTypesQueryResult = Apollo.QueryResult<MaterialTypesQuery, MaterialTypesQueryVariables>;
export const MaterialsDocument = gql`
    query Materials($materialType: MaterialTypeInput) {
  materials(materialType: $materialType) {
    ...MaterialDetail
  }
}
    ${MaterialDetailFragmentDoc}`;

/**
 * __useMaterialsQuery__
 *
 * To run a query within a React component, call `useMaterialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaterialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaterialsQuery({
 *   variables: {
 *      materialType: // value for 'materialType'
 *   },
 * });
 */
export function useMaterialsQuery(baseOptions?: Apollo.QueryHookOptions<MaterialsQuery, MaterialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MaterialsQuery, MaterialsQueryVariables>(MaterialsDocument, options);
      }
export function useMaterialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MaterialsQuery, MaterialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MaterialsQuery, MaterialsQueryVariables>(MaterialsDocument, options);
        }
export type MaterialsQueryHookResult = ReturnType<typeof useMaterialsQuery>;
export type MaterialsLazyQueryHookResult = ReturnType<typeof useMaterialsLazyQuery>;
export type MaterialsQueryResult = Apollo.QueryResult<MaterialsQuery, MaterialsQueryVariables>;