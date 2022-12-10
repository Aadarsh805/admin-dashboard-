import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: Date | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
