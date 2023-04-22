import { screen, customRender } from 'utils/test';
import { PeopleContextController } from 'context/PeopleContextController';

import { Home } from './Home';

describe('Home', () => {
  it('loads component', () => {
    customRender(
      <PeopleContextController>
        <Home />
      </PeopleContextController>
    );
    const title = screen.getByText('Primotly SPA');
    expect(title).toBeInTheDocument();
  });
});
