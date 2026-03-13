const fs = require('fs').promises;

async function readDir() {
  try {
    const filse = await fs.readdir('./');
    console.log(filse);
  } catch (err) {
    console.error(err);
  }
}

readDir();
