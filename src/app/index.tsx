import { memo } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { NotFound } from './pages';
import { Public } from './routes';

function App() {
    return (
        <BrowserRouter>
            <div className="container bg-white max-w-xl max-h-full shadow-xl">
                <Switch>
                    {
                        Public.map(({ key, path, component }) => (
                            <Route key={key} path={path} component={component} exact ></Route>
                        ))
                    }
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default memo(App);
