const mp = new MercadoPago("PUBLIC_KEY", {
    locale: "es-AR",
});

let buttonCreated = false; // Variable de control para el botón

document.getElementById("checkout-btn").addEventListener("click", async () => {
    if (buttonCreated) {
        return;
    }

    try {
        // Extraer los datos del producto desde el HTML
        const title = document.querySelector(".name").innerText;
        const priceText = document.querySelector(".price").innerText;
        const price = Number(priceText.replace("$", ""));

        const orderData = {
            title: title,
            quantity: 10,
            price: price,
        };

        // Enviar los datos del producto al servidor para crear la preferencia
        const response = await fetch("http://localhost:3000/create_preference", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        });

        if (!response.ok) {
            throw new Error('Error en la creación de la preferencia');
        }

        const preference = await response.json();

        // Crear y montar el botón de pago solo una vez
        const bricksBuilder = mp.bricks();
        if (window.checkoutButton) window.checkoutButton.unmount();

        await bricksBuilder.create("wallet", "wallet_container", {
            initialization: {
                preferenceId: preference.id,
            },
        });

        buttonCreated = true; // Marca que el botón ha sido creado

    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un error al intentar crear la preferencia de pago. Por favor, inténtelo de nuevo.");
    }
});










