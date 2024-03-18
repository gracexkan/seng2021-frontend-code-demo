import { Link } from "react-router-dom";
import Header from "../layout/Header";
import { Button } from 'antd';

function Home() {
    return (
      <div className="page-container">
        <p>This is the home page</p>
        <Button type="primary">Primary Button</Button>
      </div>
    );
  }
  
  export default Home;