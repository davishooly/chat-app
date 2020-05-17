import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/**
 * code splitting
 *  Add dynamic import on route level components to improve performance
 */
const ChatPage = lazy(() => import("./pages/MainPage/MainPage"));
const AuthPage = lazy(() => import( "./pages/Identity/Auth"));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/signin">
                        <AuthPage/>
                    </Route>
                    <Route exact path="/">
                        <ChatPage/>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
