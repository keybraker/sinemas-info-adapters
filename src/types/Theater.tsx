import { TranslationEnum } from "../enum/TranslationEnum";

export type ShowSpecification = {
  time: string,
  ticketLink: string
  is3d: boolean,
  translationType: TranslationEnum
};

export type Theater = {
  name: string,
  showSpecifications: ShowSpecification[]
};

