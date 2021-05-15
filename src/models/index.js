// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Room, ResidentLog } = initSchema(schema);

export {
  Room,
  ResidentLog
};