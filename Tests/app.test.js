import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '././client/src/components';

describe('A suite', () => {
    it('should be selectable by class "app"', () => {
        expect(shallow(<App />).is('.App')).toBe(true);
    });

    it('should mount in a full DOM', () => {
        expect(mount(<App />).find('.App').length).toBe(1);
    });
});