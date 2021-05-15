import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Room {
  readonly id: string;
  readonly room_name: string;
  readonly resident_name: string;
  readonly resident_gender: string;
  readonly resident_phone: string;
  readonly resident_allergyFood: string;
  readonly resident_allergyDrug: string;
  readonly contact_name: string;
  readonly contact_phone: string;
  readonly checkin?: string;
  constructor(init: ModelInit<Room>);
  static copyOf(source: Room, mutator: (draft: MutableModel<Room>) => MutableModel<Room> | void): Room;
}

export declare class ResidentLog {
  readonly id: string;
  readonly resident_name: string;
  readonly resident_gender: string;
  readonly resident_phone: string;
  readonly checkin?: string;
  readonly checkout?: string;
  constructor(init: ModelInit<ResidentLog>);
  static copyOf(source: ResidentLog, mutator: (draft: MutableModel<ResidentLog>) => MutableModel<ResidentLog> | void): ResidentLog;
}