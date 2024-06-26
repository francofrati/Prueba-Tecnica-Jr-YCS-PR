import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div>
        <div>
          <img src="https://static.wixstatic.com/media/79d137_7ee9e5fcf2914d7a9c3581064864a240~mv2_d_3840_2160_s_2.png/v1/fill/w_152,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/79d137_7ee9e5fcf2914d7a9c3581064864a240~mv2_d_3840_2160_s_2.png" />
        </div>
        <h3>PRUEBA TECNICA: ORDENES Y USUARIOS</h3>
      </div>
      <div className="logos">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          id="react"
          width={150}
          height={150}
        />
        <img
          src="https://www.svgrepo.com/show/374144/typescript.svg"
          width={190}
          height={190}
        />
      </div>
    </div>
  );
}

export default App;
