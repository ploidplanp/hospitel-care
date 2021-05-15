/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
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
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
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
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
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
export const createResidentLog = /* GraphQL */ `
  mutation CreateResidentLog(
    $input: CreateResidentLogInput!
    $condition: ModelResidentLogConditionInput
  ) {
    createResidentLog(input: $input, condition: $condition) {
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
export const updateResidentLog = /* GraphQL */ `
  mutation UpdateResidentLog(
    $input: UpdateResidentLogInput!
    $condition: ModelResidentLogConditionInput
  ) {
    updateResidentLog(input: $input, condition: $condition) {
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
export const deleteResidentLog = /* GraphQL */ `
  mutation DeleteResidentLog(
    $input: DeleteResidentLogInput!
    $condition: ModelResidentLogConditionInput
  ) {
    deleteResidentLog(input: $input, condition: $condition) {
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
