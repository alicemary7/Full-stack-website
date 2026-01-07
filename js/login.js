document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://127.0.0.1:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.detail || "Login failed 🚫");
      return;
    }

    // optional: store user info
    localStorage.setItem("user_id", data.user_id);
    localStorage.setItem("role", data.role);

    alert("Login successful 💖");
    window.location.href = "./product.html";

  } catch (error) {
    console.error(error);
    alert("Server down 💀");
  }
});
