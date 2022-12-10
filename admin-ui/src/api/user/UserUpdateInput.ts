import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: Date | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
