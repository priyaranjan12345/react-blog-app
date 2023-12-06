import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './components/AuthLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegistrationPage from './pages/RegistrationPage.jsx'
import MyBlogPage from './pages/MyBlogPage.jsx'
import BlogPostPage from './pages/BlogPostPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: (
        <AuthLayout requiredAuth={true}>
          {" "}
          <HomePage />
        </AuthLayout>

      )
    },
    {
      path: "/my-blogs",
      element: (
        <AuthLayout requiredAuth={true}>
          {" "}
          <MyBlogPage />
        </AuthLayout>

      )
    },
    {
      path: "/blog-post",
      element: (
        <AuthLayout requiredAuth={true}>
          {" "}
          <BlogPostPage />
        </AuthLayout>
      )
    },
    {
      path: "/profile",
      element: (
        <AuthLayout requiredAuth={true}>
          {" "}
          <ProfilePage />
        </AuthLayout>
      )
    },
    {
      path: "/login",
      element: (
        <AuthLayout requiredAuth={false}>
          <LoginPage />
        </AuthLayout>
      )
    },
    {
      path: "/register",
      element: (
        <AuthLayout requiredAuth={false}>
          <RegistrationPage />
        </AuthLayout>
      )
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
