import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Basic from 'src/Components/Common/Basic/Basic';
// import { bindargs } from 'stories/utils';
import { args } from './_HelloWorld';

const Template: Story<typeof args> = arg => <Basic {...arg} />;

// const HelloWorld = bindargs<typeof args, Story<typeof args>>(args, Template);
// export { HelloWorld };

const HelloWorld = Template.bind({});
HelloWorld.args = args;
export { HelloWorld };

export default { title: 'Basic', component: Basic } as Meta;
