import { useState } from "react";
import ReferralList from "./components/Referrals/ReferralList.jsx";
import "./App.css";
import ReferralForm from "./components/Referrals/ReferralForm.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReferralForm />
    </>
  );
}

export default App;
