import React from 'react';
import { render, screen } from '@testing-library/react';
import Slider from './index';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { showsData } from '../../mockData';

test('The Slider renders', async () => {
    const history = createMemoryHistory();

    render(
        <Router history={history}>
            <Slider currentShows={showsData} activeIndex={0} />
        </Router>
    );
    screen.getByTestId('slider');
});

test('The Slider renders all 10 images in order by altText', async () => {
    const history = createMemoryHistory();

    const { getByAltText } = render(
        <Router history={history}>
            <Slider currentShows={showsData} activeShow={showsData[0]} /> 
        </Router>
    );
    
    showsData.forEach(show => {
        expect(getByAltText(show.title));
    });
});
