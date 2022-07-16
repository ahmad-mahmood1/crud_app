import "./App.css";
import AppRoutes from "./routes/routes";
import AppLayout from "./Layout/appLayout";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </div>
  );
}

export default App;
