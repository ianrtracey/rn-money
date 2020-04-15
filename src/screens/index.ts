import CodePush from 'react-native-code-push';
import { Navigation } from 'react-native-navigation';
import { withCounterContext } from '../contexts/CounterContext';
import { codePushConfig } from '../utils/code-push';
import { CounterScreen } from './counter/Counter';
import { HomeScreen } from './home/Home';

export const Screens = new Map();

export const HOME = 'money.Home';
export const COUNTER = 'money.Counter';

Screens.set(HOME, CodePush(codePushConfig())(HomeScreen));
Screens.set(COUNTER, withCounterContext(CounterScreen));

export const startApp = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'ROOT_STACK',
        children: [
          {
            component: { name: HOME },
          },
        ],
      },
    },
  });
};
