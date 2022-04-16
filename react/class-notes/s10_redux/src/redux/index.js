import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";

const reducers = combineReducers({
  counterReducer: counterReducer,
//   todoReducer : todoReducer
});

export const combinedStores = () => {
  const store = createStore(reducers);
  return store;
};

//1. dışarı ulaşmak istediğimiz aynı zamanda child eleman olmayan componetlerin kullanabilmesi gereken Reducer veya redurcerları oluşturuyoruz => counterReducer gibi

// 2.bir veya birden fazla reducerları kullanmak için combineReducer func kullanıyoruz,

//3. createStore store larda değişiklik yapılması için  parametre olatak reducer ları gönderiyoruz.

// 4. oluşturulan bu funclar kullanılacak olan app.js yada index.js de sarmalamada kullanılır


// 5.providerler ile kullanılacak componentlar sarmarlanacaktır. sarmarlanmayan componetlerde kullanılmayacaktır. provider store property sine ilgili store yazılır, no

