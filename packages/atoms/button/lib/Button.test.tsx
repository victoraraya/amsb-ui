import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button';

it('should render successfully', () => {
    const { asFragment, getByText } = render(<Button>Hey!</Button>);

    const button = getByText('Hey!');

    expect(button).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
});
