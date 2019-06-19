// Store
import configureStore from '../store/configureStore';
// Actions
// import { addPoint, editPoint } from './actions/points';
import { setTextFilter, sortByDate } from '../actions/filters';
// Selectors
// import getVisiblePoints from './selectors/selectPoints';

// --------------
// START TEST STORE
// --------------
export default () => {
    const store = configureStore();

    // FILTERS
    store.dispatch(setTextFilter());
    store.dispatch(sortByDate('date'));

    // store.subscribe(() => {
    //     const state = store.getState();
    //     const visiblePoints = getVisiblePoints(state.points, state.filters);
    // });

    // const pointOne = store.dispatch(addPoint({ 
    //     name: 'cleanroom', 
    //     description: 'Clean Room', 
    //     createdAt: 1000,
    //     done: false 
    // }));

    // store.dispatch(addPoint({ 
    //     name: 'cleartable', 
    //     description: 'Clear Table', 
    //     createdAt: 300,
    //     done: true 
    // }));

    // store.dispatch(addPoint({ 
    //     name: 'piano', 
    //     description: 'Piano', 
    //     createdAt: 1558651808928,
    //     done: false 
    // }));

    // store.dispatch(editPoint(pointOne.point.id, { done: true }));
    // store.dispatch(deletePoint({ id: pointTwo.point.id }));

    return store;
}

// --------------
// END TEST STORE
// --------------