import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";
import todoReducer from "./reducer/todoRedecur";

const reducers = combineReducers({
  counterReducer: counterReducer,
  todoReducer : todoReducer
});

export const myStore = createStore(reducers)


// giriş: counterReducer da bir swich case yapısı kurduk, ve ilgili butonlara atama yapıyoruz, bu atama ile artırma ve azaltma yapacağız, bu işlemde başlangıç değerine counter dedik ve üst parentlardan ulaşmaya çalışacağız

//1. dışarı ulaşmak istediğimiz aynı zamanda child eleman olmayan componetlerin kullanabilmesi gereken Reducer veya redurcerları oluşturuyoruz => counterReducer gibi

// 2.bir veya birden fazla reducerları kullanmak için combineReducer func kullanıyoruz,

//3. createStore store larda değişiklik yapılması için  parametre olatak reducer ları gönderiyoruz. bu işlemi burada kendi oluşturduğumuz index.js de yaptık, sayfa ismi farklı da olabilir, sayfa ismi farklı olduğunda import { combinedStores } from './redux/SAYFA İSMİ'; yazılır

// 4. oluşturulan bu funclar kullanılacak olan app.js yada index.js de sarmalamada kullanılır const store = combinedStores() 



// 5.providerler ile kullanılacak componentlar sarmarlanacaktır. sarmarlanmayan componetlerde kullanılmayacaktır. provider store property sine ilgili store yazılır, 

// Oluşturulan bu reducer in ilgili sayfada kullanılması için useSelector ve useDispatch leri react-redux tan çağırıyoruz, const {counter} = useSelector((state) => state.counterReducer), 

// Dispatch ile de swich case yapısında işlevleri belirtilmiş olan ilgili yapıyı type ile çağırıyoruz, ör: butana basıldığında counter değerinin +1 artması için yazılan yapının type kullanılıyor, type burada best practive olarak kullanılıyor


// onClick={()=>dispatch({type :"INCREASE_COUNTER"}) } ÖRNEK OLARAK BU ŞEKİLDE KULLANILIYOR, useSELECTOR İSE STORE İÇİNDEKİ STATE LERE ORADANDA REDUCER LARA ULAŞMAMIZI SAĞLIYOR  

// sonuç olarak stateleri çağırmak için useSelector, fonksiyonları çağırmak için useDispatch kullanıyoruz

//  best practive olarak iki yöntem var;
// 1. swich case yapısında tanımlanan type ları bir sayfada toplayabiliyoruz, *counterTypes sayfası gibi, burada tanımlanan typeları reducer da kullandık


// 2. dispatch lerin içinde yazılan {type :"INCREASE_COUNTER"} bu uzun yapıyı kısaltmak için actionları bir sayfada topluyoruz, bu uzun iafadeye bir fonsiyon atıyoruz. counterAction sayfasındaki gibi, bu funcları counter sayfasındaki dispacth içinde kullandık

