document.querySelector(".signup-btn").addEventListener("click", async () => {
  const name = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const terms = document.getElementById("terms").checked;

  if (!name || !email || !password || !confirmPassword) {
    alert("Fill all fields 😤");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords don’t match 🚫");
    return;
  }

  if (!terms) {
    alert("Accept terms first 📝");
    return;
  }

  try {
    const res = await fetch("http://127.0.0.1:8000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.detail || "Signup failed ❌");
      return;
    }

    alert("Signup successful 🎉 Redirecting to login...");
    window.location.href = "./login.html";

  } catch (error) {
    console.error(error);
    alert("Server error 💥");
  }
});
