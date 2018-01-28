import React, { Component } from "react";
import Divider from "antd/lib/divider";


class NotFound extends Component {
    render(){
         

        return (
            <div>
                <h2>404 Not Found</h2>
                <p>The post you try to access wasn't found in our backend server</p>
            </div>
        )
    }
}

export default NotFound;