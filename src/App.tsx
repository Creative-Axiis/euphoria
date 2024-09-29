import { useState } from "react";
import Body from "./main-container/body/body";
import TopBar from "./main-container/top-bar/top-bar";

function App() {
    // Lift the state to App component
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); // Toggle sidebar visibility
    };

    return (
        <>
            {/* Pass sidebarOpen and toggleSidebar as props to TopBar */}
            <TopBar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Pass sidebarOpen as a prop to Body */}
            <Body sidebarOpen={sidebarOpen} />
        </>
    );
}

export default App;
