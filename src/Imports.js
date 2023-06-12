import ReactDOM from 'react-dom/client';
import React, {
  useEffect,
  useReducer,
  useContext,
  useState,
  createContext,
} from 'react';
import axios from 'axios';
import Loading from './Components/Loading';
import MessageBox from './Components/MessageBox';
import Title from './Components/Title';
import {
  GET_SUCCESS,
  GET_FAIL,
  GET_REQUEST,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  USER_SIGNIN,
  USER_SIGNOUT,
  CREATE_REQUEST,
  CREATE_SUCCEEDED,
  CREATE_FAILED,
  CLEAR_CART,
  SAVE_SHIPPING_ADDRESS,
  SAVE_PAYMENT_METHOD,
} from './Actions';

import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { getError,getFilterUrl } from './Utils';
import { store } from './store';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Rating from './Components/Rating';
import Product from './Components/Product';
import { LinkContainer } from 'react-router-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { Helmet } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ProductPage from './pages/ProductPage';
import SignInPage from './pages/SignInPage';
import CartPage from './pages/CartPage';
import SignupPage from './pages/SignupPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SearchBox from './Components/SearchBox';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { StoreProvider } from './store';
import { homePageReducer } from './reducers/homePageReducer';
import { productPageReducer } from './reducers/productPageReducer';
import { storeReducer } from './reducers/storeReducer';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import CheckoutSteps from './Components/CheckoutSteps';
import SubmitOrderPage from './pages/SubmitOrderPage';
import { submitorderReducer } from './reducers/SubmitOrderPageReducer';
import ShippingAddressPage from './pages/ShippingAdressPage';
import OrderPage from './pages/OrderPage';
import PaymentPage from './pages/PaymentPage';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export {
  useEffect,
  useReducer,
  axios,
  Loading,
  MessageBox,
  OrderPage,
  Title,
  SignupPage,
  CheckoutSteps,
  InputGroup,
  FormControl,
  GET_SUCCESS,
  GET_FAIL,
  GET_REQUEST,
  SAVE_PAYMENT_METHOD,
  SearchPage,
  SearchBox,
  useContext,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  USER_SIGNIN,
  USER_SIGNOUT,
  SubmitOrderPage,
  ShippingAddressPage,
  useNavigate,
  SAVE_SHIPPING_ADDRESS,
  useParams,  
  Row,
  Col,
  getError,
  getFilterUrl,
  store,
  useState,
  useLocation,
  Container,
  Card,
  Button,
  ListGroup,
  Link,
  Rating,
  Product,
  Badge,
  LinkContainer,
  Nav,
  Navbar,
  Spinner,
  Alert,
  Helmet,
  Form,
  Route,
  Routes,
  BrowserRouter,
  HomePage,
  ProductPage,
  CartPage,
  SignInPage,
  Footer,
  Header,
  React,
  ReactDOM,
  App,
  reportWebVitals,
  HelmetProvider,
  StoreProvider,
  createContext,
  homePageReducer,
  productPageReducer,
  storeReducer,
  NavDropdown,
  ToastContainer,
  toast,
  submitorderReducer,
  PaymentPage,
  CREATE_REQUEST,
  CREATE_SUCCEEDED,
  CREATE_FAILED,
  CLEAR_CART,
};