
import './App.css';
// import WithPropsApp from './withprops/WithPropsApp';
import WithContextApp from './withcontext/WithContextApp';
// import MyApp from './MyApp';

function App() {
  return (
    <div className="App">
    <h2>UseContext Class</h2>
    {/* <WithPropsApp/> */}
    <WithContextApp/>

    {/* <MyApp value="test2">
      <div>TEST</div>
    </MyApp> */}



    </div>
  );
}

export default App;

//  sarmarlanmış olan bir yapyı, props.children ile ulaşabiliyoruz, ilgili componetten, myapp.js bu yapıyı anlamak için oluşturuldu