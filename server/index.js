import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales

// Cargar las variables de entorno
dotenv.config();

const client = new MercadoPagoConfig({ accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN });


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("¡Servidor funcionando!");
});

app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [
            {
                title: req.body.title,
                quantity: Number(req.body.quantity),
                unit_price: Number(req.body.price),
                currency_id: "ARS",
            },
            ],
            back_urls: {
                success: "https://google.com",
                failure: "https://google.com",
                pending: "https://google.com",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({body});
        res.json({
            id: result.id,

        });
        
    } catch (error){ 
        console.log(error);
        res.status(500).json({ 
            error: "Error al crear la preferencia" });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});