// async function hackerman() {
//   const messages = [
//     "Initializing Hack program...",
//     "Hacking Ashish's username...",
//     "Username found: aashish17...",
//     "Connecting to facebook..."
//   ];

//   const outputDiv = document.getElementById("output");

//   for (let msg of messages) {
//     outputDiv.innerHTML += msg + "\n";
//     await new Promise(resolve => setTimeout(resolve, 1500)); // 1.5 seconds delay
//   }
// }

// // Run the function
// hackerman();
 const terminal = document.getElementById('terminal');
    const messages = [
      "Initializing Hack program...",
      "Bypassing firewall...",
      "Hacking Ashish's username...",
      "Username found: aashish17",
      "Connecting to facebook...",
      "Facebook password cracked: ********",
      "Uploading virus...",
      "Mission complete ✔"
    ];

    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    async function typeLine(text) {
      for (let char of text) {
        terminal.innerHTML += char;
        await delay(50 + Math.random() * 30); // typing effect
      }
      terminal.innerHTML += "\n";
    }

    async function hackerman() {
      terminal.innerHTML = ''; // Clear default text
      for (let msg of messages) {
        await typeLine(msg);
        await delay(500 + Math.random() * 500); // delay between lines
      }
      terminal.innerHTML += "\n✅ Hack completed.\n";
    }

    hackerman();
