import { Navigate, useRoutes } from 'react-router-dom';
import SignIn from '../components/SignIn/SignIn';
import { AttributeView } from '../components/Attribute';
import { Home } from '../components/Home';
import { MainLayout, MinimalLayout } from '../layouts';
import { MaterialTypesView } from '../components/Material';
import { ProductsView } from '../components/Product';
import { TestPlanView } from '../components/TestPlan';


const routes = (isAuthenticated: boolean) => [
  {
    path: 'app',
    element: isAuthenticated ? <MainLayout /> : <Navigate to='/signin' />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'attributes', element: <AttributeView /> },
      { path: 'material_types', element: <MaterialTypesView /> },
      { path: 'products', element: <ProductsView /> },
      { path: 'test_plan/:id', element: <TestPlanView /> },
      //{ path: '*', element: <Navigate to='/404'/> }
    ]
  },
  {
    path: '/',
    element: isAuthenticated ? <Navigate to='/app/home' /> : <MinimalLayout />,
    children: [
      { path: 'signin', element: <SignIn /> },
      //{ path: '404', element: <NotFoundView /> },
      //{ path: '*', element: <Navigate to='/404'/> }
    ],
  },
];


const Routes = () => {

  const isAuthenticated = localStorage.getItem('token') != null;
  console.log('isAuthenticated', isAuthenticated);

  return useRoutes(routes(isAuthenticated));

}

export default Routes;
