import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: Date | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
