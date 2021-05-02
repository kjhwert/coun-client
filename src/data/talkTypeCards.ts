import { ITalkPaginationType } from "../features/talk/talk";
import { TALK_GROWTH, TALK_REVIEW, TALK_WRITE } from "../shared/code";

const talkGrowthBackgroundUrl =
  "https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE3NjU0Nn0";
const talkReviewBackgroundUrl =
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE3NjU0Nn0";
const talkWriteBackgroundUrl =
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE3NjU0Nn0";

interface ITalkTypeCard {
  id: number;
  title: string;
  backgroundImageUrl: string;
  type: ITalkPaginationType;
}

const talkTypeCard: ITalkTypeCard[] = [
  {
    id: 0,
    title: "성장토크",
    backgroundImageUrl: talkGrowthBackgroundUrl,
    type: TALK_GROWTH,
  },
  {
    id: 1,
    title: "북리뷰",
    backgroundImageUrl: talkReviewBackgroundUrl,
    type: TALK_REVIEW,
  },
  {
    id: 2,
    title: "성장쓰기",
    backgroundImageUrl: talkWriteBackgroundUrl,
    type: TALK_WRITE,
  },
];

export default talkTypeCard;
