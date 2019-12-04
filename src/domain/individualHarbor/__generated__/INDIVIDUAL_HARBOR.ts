/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { BerthMooringType } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: INDIVIDUAL_HARBOR
// ====================================================

export interface INDIVIDUAL_HARBOR___type_enumValues {
  __typename: "__EnumValue";
  name: string;
  description: string | null;
}

export interface INDIVIDUAL_HARBOR___type {
  __typename: "__Type";
  enumValues: INDIVIDUAL_HARBOR___type_enumValues[] | null;
}

export interface INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node_properties_berths_edges_node_berthType {
  __typename: "BerthTypeNode";
  width: number;
  length: number;
  mooringType: BerthMooringType;
}

export interface INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node_properties_berths_edges_node {
  __typename: "BerthNode";
  number: string;
  berthType: INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node_properties_berths_edges_node_berthType;
}

export interface INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node_properties_berths_edges {
  __typename: "BerthNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node_properties_berths_edges_node | null;
}

export interface INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node_properties_berths {
  __typename: "BerthNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node_properties_berths_edges | null)[];
}

export interface INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node_properties {
  __typename: "PierProperties";
  /**
   * Identifier of the pier / section
   */
  identifier: string;
  electricity: boolean;
  wasteCollection: boolean;
  water: boolean;
  lighting: boolean;
  gate: boolean;
  berths: INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node_properties_berths;
}

export interface INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node {
  __typename: "PierNode";
  properties: INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node_properties | null;
}

export interface INDIVIDUAL_HARBOR_harbor_properties_piers_edges {
  __typename: "PierNodeEdge";
  /**
   * The item at the end of the edge
   */
  node: INDIVIDUAL_HARBOR_harbor_properties_piers_edges_node | null;
}

export interface INDIVIDUAL_HARBOR_harbor_properties_piers {
  __typename: "PierNodeConnection";
  /**
   * Contains the nodes in this connection.
   */
  edges: (INDIVIDUAL_HARBOR_harbor_properties_piers_edges | null)[];
}

export interface INDIVIDUAL_HARBOR_harbor_properties {
  __typename: "HarborProperties";
  name: string | null;
  numberOfPlaces: number | null;
  streetAddress: string | null;
  zipCode: string;
  municipality: string | null;
  wwwUrl: string;
  imageFile: string | null;
  /**
   * ID in the Servicemap system
   */
  servicemapId: string | null;
  maximumWidth: number | null;
  piers: INDIVIDUAL_HARBOR_harbor_properties_piers;
}

export interface INDIVIDUAL_HARBOR_harbor {
  __typename: "HarborNode";
  /**
   * The ID of the object.
   */
  id: string;
  properties: INDIVIDUAL_HARBOR_harbor_properties | null;
}

export interface INDIVIDUAL_HARBOR {
  __type: INDIVIDUAL_HARBOR___type | null;
  /**
   * The ID of the object
   */
  harbor: INDIVIDUAL_HARBOR_harbor | null;
}

export interface INDIVIDUAL_HARBORVariables {
  id: string;
}
