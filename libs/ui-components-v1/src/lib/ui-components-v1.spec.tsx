import { render } from '@testing-library/react';

import UiComponentsV1 from './ui-components-v1';

describe('UiComponentsV1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiComponentsV1 />);
    expect(baseElement).toBeTruthy();
  });
});
