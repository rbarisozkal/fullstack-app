import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./features/products/components/Products";

const queryClient = new QueryClient();

const App: React.FC = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/api/hello")
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => console.error(err));
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <h1>{message || "Loading..."}</h1>
                <Products />
            </div>
        </QueryClientProvider>
    );
};

export default App;
