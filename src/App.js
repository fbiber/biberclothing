import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserFromDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
      if(authUser) {
        const userRef = await createUserFromDocument(authUser);

        userRef.onSnapshot(snapshot => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
              ...snapshot.data()
              }
            }
          );
        });
      } else {
        this.setState({
          currentUser: authUser
        });
      }

      console.log(authUser);
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser}></Header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
