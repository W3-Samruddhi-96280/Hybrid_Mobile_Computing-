// server.js

const http = require("http");

let products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Keyboard", price: 2000 }
];

function sendResponse(res, statusCode, data) {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
}

function getRequestBody(req) {
    return new Promise((resolve, reject) => {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (error) {
                reject(error);
            }
        });
    });
}

const server = http.createServer(async (req, res) => {
    const urlParts = req.url.split("/");
    const route = urlParts[1];
    const id = parseInt(urlParts[2]);

    if (route !== "products") {
        sendResponse(res, 404, { message: "Route not found" });
        return;
    }

    if (req.method === "GET" && req.url === "/products") {
        sendResponse(res, 200, products);
    }

    else if (req.method === "GET" && id) {
        const product = products.find(p => p.id === id);

        if (product) {
            sendResponse(res, 200, product);
        } else {
            sendResponse(res, 404, { message: "Product not found" });
        }
    }

    else if (req.method === "POST" && req.url === "/products") {
        try {
            const body = await getRequestBody(req);

            const newProduct = {
                id: products.length + 1,
                name: body.name,
                price: body.price
            };

            products.push(newProduct);

            sendResponse(res, 201, {
                message: "Product added successfully",
                product: newProduct
            });
        } catch (error) {
            sendResponse(res, 400, { message: "Invalid JSON data" });
        }
    }

    else if (req.method === "PUT" && id) {
        try {
            const body = await getRequestBody(req);

            const productIndex = products.findIndex(p => p.id === id);

            if (productIndex !== -1) {
                products[productIndex].name = body.name;
                products[productIndex].price = body.price;

                sendResponse(res, 200, {
                    message: "Product updated successfully",
                    product: products[productIndex]
                });
            } else {
                sendResponse(res, 404, { message: "Product not found" });
            }
        } catch (error) {
            sendResponse(res, 400, { message: "Invalid JSON data" });
        }
    }

    else if (req.method === "DELETE" && id) {
        const productIndex = products.findIndex(p => p.id === id);

        if (productIndex !== -1) {
            const deletedProduct = products.splice(productIndex, 1);

            sendResponse(res, 200, {
                message: "Product deleted successfully",
                product: deletedProduct[0]
            });
        } else {
            sendResponse(res, 404, { message: "Product not found" });
        }
    }

    else {
        sendResponse(res, 404, { message: "Invalid API route" });
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});