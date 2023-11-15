import  express from "express";
const app = express()
import userRoutes from "./routes/user.js"
import authRoutes from "./routes/auth.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import db from "./routes/connect.js";


app.use((req, res, next )=>{
    res.header("Access-Control-Allow-Credentials", true )
    next()
})
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000",
}))
app.use(cookieParser())

app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)


app.get("/compras", (req, res) => {
  const q = "SELECT * FROM viaje";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/compras", (req, res) => {
  const q = "INSERT INTO viaje(cod_bl, fecha_viaje, asientosDispo_viaje, costo_bl, horario_bol,horaDisp_frec,cedula_cl,id_frecuencia,id_transporte) VALUES (?)";

  const values = [
    req.body.cod_bl,
    req.body.fecha_viaje,
    req.body.asientosDispo_viaje,
    req.body.costo_bl,
    req.body.horario_bol,
    req.body.horaDisp_frec,
    req.body.cedula_cl,
    req.body.id_frecuencia,
    req.body.id_transporte,


  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


app.delete("/compras/:id", (req, res) => {
  const transporteId = req.params.id;
  const q = " DELETE FROM transporte WHERE id_transporte = ? ";

  db.query(q, [transporteId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
    });
  });

app.put("/compras/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE viaje SET id= ?, fecha_viaje= ?, asietosDisp_viaje= ?, costo_bol=?, horario_bol=?,horaDisp_frec=? WHERE id = ?";
 
  const values = [
    req.body.id,
    req.body.fecha_viaje,
    req.body.asietosDisp_viaje,
    req.body.costo_bol,
    req.body.horario_bol,
    req.body.horaDisp_frec,
  ];

  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});  

app.patch("/compras/:id",(req,res)=>{
const viajeId = req.params.id;
  const q = ""
})
app.listen(4000, ()=>{
    console.log("API working")
})