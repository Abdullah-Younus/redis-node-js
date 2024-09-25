const client = require("./client");

async function init() {
    // await client.set("user:2", "Muhamed");
    await client.expire("user:2", 10);
    const result = await client.get("user:2");
    console.log('result ===>', result);

};

init();