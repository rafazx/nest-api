
import { FeedBackEntity } from './feedBack.entity';

export const feedBackEntityProviders = [
  {
    provide: 'FEEDBACK_ENTITY',
    useValue: FeedBackEntity,
  },
];