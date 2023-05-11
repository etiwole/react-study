import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
    <Routes>
        {Object.values(RouteConfig).map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={(
                    // Вообще, можно не обарачивать в Suspense. Тимур зачем-то сделал.
                    // Следуем курсу.
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);

export default AppRouter;
