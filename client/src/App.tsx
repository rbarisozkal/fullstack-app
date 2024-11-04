import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const App: React.FC = () => {
  const [message, setMessage] = useState("");
  const queryClient = new QueryClient();
  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>{message ? message : "Loading..."}</h1>
        </div>
      </QueryClientProvider>
  );
};

export default App;
