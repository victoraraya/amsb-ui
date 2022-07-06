import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from '@amsb-ui/card';
import ListCard from './ListCard';

const datos = [
    {
        image: 'test',
        imageAlt: 'test',
        content: 'test',
        link: 'test',
        linkText: 'test',
        id: 1,
    },
    {
        image: 'foo',
        imageAlt: 'foo',
        content: 'foo',
        link: 'foo',
        linkText: 'foo',
        id: 2,
    },
];

it('should render successfully', () => {
    const { asFragment } = render(<ListCard data={datos} />);

    const card1 = (
        <Card image="test" imageAlt="test" content="test" link="test" linkText="test" id={1} />
    );
    const card2 = (
        <Card image="foo" imageAlt="foo" content="foo" link="foo" linkText="foo" id={2} />
    );

    expect(card1).toBeDefined();
    expect(card2).toBeDefined();

    expect(asFragment()).toMatchSnapshot();
});
