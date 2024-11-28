import { useTheme } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import ImagePreview from '@/features/Preview';
import PromptInput from '@/features/PromptEditor';
import TaskList from '@/features/TaskList';
import { useMidjourneyStore } from '@/store/midjourney';

import Header from './Header';

const Home = memo(() => {
  const theme = useTheme();

  const [useInitApp] = useMidjourneyStore((s) => [s.useInitApp]);

  useInitApp();

  return (
    <Flexbox
      align={'center'}
      padding={16}
      style={{ background: theme.colorBgLayout, height: '100vh' }}
    >
      <Flexbox gap={16} height={'100%'} style={{ maxWidth: 1152 }} width={'100%'}>
        <Header />
        <Flexbox
          gap={12}
          height={'100%'}
          style={{ overflow: 'auto' }}
          width={'100%'}
        >
          <style>
            {`
              @media (max-width: 768px) { // 手机端
                .flex-gap {
                  gap: 24px; // 手机端间距
                }
              }
              @media (min-width: 769px) { // 电脑端
                .flex-gap {
                  gap: 8px; // 电脑端间距
                }
              }
            `}
          </style>
          <Flexbox className="flex-gap">
            <PromptInput />
            <ImagePreview />
            <TaskList />
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
});

export default Home;
