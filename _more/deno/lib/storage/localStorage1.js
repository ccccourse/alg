const count = parseInt(localStorage.getItem("count") || "0");
console.log(`You have started the application ${count} times previously.`);
localStorage.setItem("count", count + 1);