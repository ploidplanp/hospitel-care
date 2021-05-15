/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      room_name
      resident_name
      resident_gender
      resident_phone
      resident_allergyFood
      resident_allergyDrug
      contact_name
      contact_phone
      checkin
      createdAt
      updatedAt
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        room_name
        resident_name
        resident_gender
        resident_phone
        resident_allergyFood
        resident_allergyDrug
        contact_name
        contact_phone
        checkin
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResidentLog = /* GraphQL */ `
  query GetResidentLog($id: ID!) {
    getResidentLog(id: $id) {
      id
      resident_name
      resident_gender
      resident_phone
      checkin
      checkout
      createdAt
      updatedAt
    }
  }
`;
export const listResidentLogs = /* GraphQL */ `
  query ListResidentLogs(
    $filter: ModelResidentLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResidentLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        resident_name
        resident_gender
        resident_phone
        checkin
        checkout
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
