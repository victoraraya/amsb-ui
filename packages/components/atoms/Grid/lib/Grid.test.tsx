import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import AirMilesGrid from './Grid';

it('should render successfully', () => {
    const { asFragment, getByText } = render(<AirMilesGrid>Hey!</AirMilesGrid>);

    const button = getByText('Hey!');

    expect(button).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
});
