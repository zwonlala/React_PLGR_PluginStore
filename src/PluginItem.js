import React from 'react';

class PluginItem extends React.Component {
    render(){
        const {name, image, detail, download} = this.props;
        return (
            <div id="plugin_box" style={{width:"30%", minWidth:"300px", height:"500px", margin:"10px", backgroundColor:"red", textAlign:"center", marginBottom:"20px"}}>
                <h1 id="plugin_title"style={{textAlign: "center", backgroundColor:"blue"}}id="name">{name}</h1>
                <img id="plugin_image" src={image} alt={name} width="100%" height="300px"/>
                <div id="plugin_link" style={{marginTop:"70px", width:"100%", backgroundColor:"yellow", display:"flex", justifyContent:"space-around"}}>
                    
                    <div id="plugin_link_detail" style={{textAlign:"left", fontSize:"2.0em", width:"50%", float:"left"}}>
                        <a id="plugin_detail" href={detail} style={{align: "left"}}>Detail</a>
                    </div>
                
                    <div id="plugin_link_download" style={{textAlign:"right", fontSize:"2.0em", width:"50%", float:"right"}}>
                        <a id="plugin_detail" href={download} style={{align: "right"}}>Download</a>
                    </div>

    
                    
                </div>
            </div>
        )
    }
}


export default PluginItem;