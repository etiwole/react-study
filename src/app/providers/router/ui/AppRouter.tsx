import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {RouteConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(RouteConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            // Вообще, можно не обарачивать в Suspense. Тимур зачем-то сделал. Следуем курсу.
                            <Suspense fallback={<div>Loading...</div>}>
                                {element}
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;