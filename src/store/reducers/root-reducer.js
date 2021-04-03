import {combineReducers} from 'redux';
import {server} from './server';
import {main} from './main';
import {user} from './user';
import {form} from './form';
import {StoreNameSpace} from '../../const';

export default combineReducers({
  [StoreNameSpace.SERVER]: server,
  [StoreNameSpace.MAIN]: main,
  [StoreNameSpace.USER]: user,
  [StoreNameSpace.FORM]: form,
});
