import React from 'react';
import './App.css';
import PluginItem from './PluginItem.js';
import PluginAgent from './PluginAgent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plugins: [],
    }
  }
  componentDidMount() {
    PluginAgent.fetchPlugins((plugins) => {
      this.setState({
        plugins,
      })
    });
  }
  render() {

    const plugins = this.state.plugins;
    
    return (
      <div  style={{ 
        display:"flex", 
        justifyContent:"center", 
        alignContent:"flex-top", 
        flexWrap:"wrap"}}>

        {/* header */}
        <div >
          
          <div>
            <h1>This is header</h1>
          </div>


          <div>
            <button>정보</button>
            <button>유틸리티</button>
            <button>추천순</button>
          </div>


          <div>
            <button>홈</button>
          </div>

        </div>

        {/* body */}
        <div style={{
          minWidth: "700px", 
          display:"flex", 
          justifyContent:"center", 
          alignContent:"center", 
          flexWrap:"wrap",

          width:"90%",
          height:"90%"
        }}>
          {plugins.map((value) => (
            <PluginItem 
            name={value.name} 
            image={value.image}
            detail={value.detail}
            download={value.download} />
          ))
        }
        </div>


        {/* footer */}
        <div>
        <h1>This is footer</h1>

        </div>


      </div>
    );

    
  }
}

export default App;
