import { I_TALK_GROWTH, I_TALK_REVIEW, I_TALK_WRITE } from "../../shared/code";

export type ITalkPaginationType = I_TALK_GROWTH | I_TALK_REVIEW | I_TALK_WRITE;

export interface ITalkPagination {
  page: number;
  type: ITalkPaginationType;
}

export interface ITalk {
  createdAt: Date;
  updatedAt: Date | null;
  id: number;
  title: string;
  description: string | null;
  youtubeUrl: string | null;
  thumbnail: string;
  imagePage: number;
  imageOrder: number;
  view: number;
}

export interface ITalkState {
  talks: Array<ITalk>;
  status: "idle" | "loading" | "failed";
  pagination: {
    page: number;
    type: ITalkPaginationType;
  };
  totalCount: number;
}
