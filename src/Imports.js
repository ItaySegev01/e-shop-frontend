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
import { getError } from './Utils';
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
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import SignInPage from './pages/SignInPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
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

export {
  useEffect,
  useReducer,
  axios,
  Loading,
  MessageBox,
  Title,
  GET_SUCCESS,
  GET_FAIL,
  GET_REQUEST,
  useContext,
  ADD_TO_CART,
  useParams,
  useNavigate,
  Row,
  Col,
  getError,
  store,
  useState,
  useLocation,
  Container,
  REMOVE_FROM_CART,
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
};