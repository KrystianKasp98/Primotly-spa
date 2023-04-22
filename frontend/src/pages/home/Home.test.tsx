import { screen, customRender } from 'utils/test';

import { Home } from './Home';

describe('Home', () => {
  it('loads component', () => {
    customRender(<Home />);
    const title = screen.getByText('Primotly SPA');
    expect(title).toBeInTheDocument();
  });
});
