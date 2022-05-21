import { Phone } from "./Phone";

export interface People {
  id: number;
  name: string;
  dateBirthday: Date;
  phones: Phone[];
}
