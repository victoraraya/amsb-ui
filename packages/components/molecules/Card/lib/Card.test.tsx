import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from './Card';

it('should render successfully', () => {
    const { asFragment, getByText } = render(
        <Card image="asd" imageAlt="asd" content="test!" link="asd" linkText="dasdasd" id={4} />
    );

    const desc = getByText('test!');

    expect(desc).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
});
